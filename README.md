# egg-webpack-react

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-webpack-react.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-webpack-react
[travis-image]: https://img.shields.io/travis/easy-team/egg-webpack-react.svg?style=flat-square
[travis-url]: https://travis-ci.org/easy-team/egg-webpack-react
[codecov-image]: https://img.shields.io/codecov/c/github/easy-team/egg-webpack-react.svg?style=flat-square
[codecov-url]: https://codecov.io/github/easy-team/egg-webpack-react?branch=master
[david-image]: https://img.shields.io/david/easy-team/egg-webpack-react.svg?style=flat-square
[david-url]: https://david-dm.org/easy-team/egg-webpack-react
[snyk-image]: https://snyk.io/test/npm/egg-webpack-react/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-webpack-react
[download-image]: https://img.shields.io/npm/dm/egg-webpack-react.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-webpack-react

Support React Server Side Render File Memory Read for [egg-webpack](https://github.com/hubcarl/egg-webpack) and [egg-view-react-ssr](https://github.com/easy-team/egg-view-react-ssr). when the local development, wepback memory read the way to cover the local file read logic.

## Install

```bash
$ npm i egg-webpack-react --save-dev
```

## Usage

```js
// {app_root}/config/plugin.js
exports.webpackreact = {
  enable: true,
  package: 'egg-webpack-react',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.webpackreact = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

- React Server Side Render Example, Please See [egg-react-webpack-boilerplate](https://github.com/easy-team/egg-react-webpack-boilerplate)
- React TypeScript Server Side Render Example, Please See [egg-react-typescript-boilerplate](https://github.com/easy-team/egg-react-typescript-boilerplate)
- React Server Side Render Framework Example, Please See [res](https://github.com/easy-team/res)

## Questions & Suggestions

Please open an issue [here](https://github.com/easy-team/egg-view-react-ssr/issues).

## License

[MIT](LICENSE)
