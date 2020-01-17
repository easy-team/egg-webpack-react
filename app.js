'use strict';
const path = require('path');
const vm = require('vm');
const NativeModule = require('module');
module.exports = app => {

  if (app.view) {
    app.view.resolve = function(name) {
      return Promise.resolve(name);
    };
  }

  if (app.react) {
    app.react.render = async (name, locals, options) => {
      const filePath = path.isAbsolute(name) ? name : path.join(app.config.view.root[0], name);
      const code = await app.webpack.fileSystem.readWebpackMemoryFile(filePath, name);
      if (!code) {
        throw new Error(`read webpack memory file[${filePath}] content is empty, please check if the file exists`);
      }
      const wrapper = NativeModule.wrap(code);
      // can‘t find async chunk file fix: https://github.com/easy-team/egg-react-webpack-boilerplate/issues/23
      module.id = filePath;
      module.filename = filePath;
      vm.runInThisContext(wrapper)(exports, require, module, filePath, path.dirname(filePath));
      const reactClass = module.exports && module.exports.default ? module.exports : exports.default ? exports : module.exports;
      if (options && options.markup) {
        return app.react.renderToStaticMarkup(reactClass, locals);
      }
      return app.react.renderElement(reactClass, locals);
    };
  }
};
