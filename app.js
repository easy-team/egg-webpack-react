'use strict';
const path = require('path');
const co = require('co');
const vm = require('vm');
const NativeModule = require('module');
module.exports = app => {

  if (app.view) {
    app.view.resolve = function (name) {
      return Promise.resolve(name);
    };
  }

  if (app.react) {
    app.react.render = (name, locals, options) => {
      const filePath = path.isAbsolute(name) ? name : path.join(app.config.view.root[0], name);
      return co(function* () {
        const code = yield app.webpack.fileSystem.readWebpackMemoryFile(filePath, name);
        if (!code) {
          throw new Error(`read webpack memory file[${filePath}] content is empty, please check if the file exists`);
        }
        const wrapper = NativeModule.wrap(code);
        vm.runInThisContext(wrapper)(exports, require, module, __filename, __dirname);
        const reactClass = module.exports;
        if (options && options.markup) {
          return app.react.renderToStaticMarkup(reactClass, locals);
        }
        return app.react.renderElement(reactClass, locals);
      });
    };
  }
};