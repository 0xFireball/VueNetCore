(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(2)();
	var config = __webpack_require__(7);
	if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
	var path = __webpack_require__(8);
	var express = __webpack_require__(12);
	var webpack = __webpack_require__(13);
	var opn = __webpack_require__(14);
	var proxyMiddleware = __webpack_require__(15);
	var webpackConfig = __webpack_require__(16);
	
	var port = process.env.PORT || config.dev.port;
	
	var proxyTable = config.dev.proxyTable;
	
	var app = express();
	var compiler = webpack(webpackConfig);
	
	var devMiddleware = __webpack_require__(23)(compiler, {
	  publicPath: webpackConfig.output.publicPath,
	  stats: {
	    colors: true,
	    chunks: false
	  }
	});
	
	var hotMiddleware = __webpack_require__(24)(compiler);
	
	compiler.plugin('compilation', function (compilation) {
	  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
	    hotMiddleware.publish({ action: 'reload' });
	    cb();
	  });
	});
	
	(0, _keys2.default)(proxyTable).forEach(function (context) {
	  var options = proxyTable[context];
	  if (typeof options === 'string') {
	    options = { target: options };
	  }
	  app.use(proxyMiddleware(context, options));
	});
	
	app.use(__webpack_require__(25)());
	
	app.use(devMiddleware);
	
	app.use(hotMiddleware);
	
	var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
	app.use(staticPath, express.static('./static'));
	
	module.exports = app.listen(port, function (err) {
	  if (err) {
	    console.log(err);
	    return;
	  }
	  var uri = 'http://localhost:' + port;
	  console.log('Listening at ' + uri + '\n');
	
	  if (process.env.NODE_ENV !== 'testing') {
	    opn(uri);
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var semver = __webpack_require__(3);
	var chalk = __webpack_require__(4);
	var packageConfig = __webpack_require__(5);
	var exec = function exec(cmd) {
	  return __webpack_require__(6).execSync(cmd).toString().trim();
	};
	
	var versionRequirements = [{
	  name: 'node',
	  currentVersion: semver.clean(process.version),
	  versionRequirement: packageConfig.engines.node
	}, {
	  name: 'npm',
	  currentVersion: exec('npm --version'),
	  versionRequirement: packageConfig.engines.npm
	}];
	
	module.exports = function () {
	  var warnings = [];
	  for (var i = 0; i < versionRequirements.length; i++) {
	    var mod = versionRequirements[i];
	    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
	      warnings.push(mod.name + ': ' + chalk.red(mod.currentVersion) + ' should be ' + chalk.green(mod.versionRequirement));
	    }
	  }
	
	  if (warnings.length) {
	    console.log('');
	    console.log(chalk.yellow('To use this template, you must update following to modules:'));
	    console.log();
	    for (var i = 0; i < warnings.length; i++) {
	      var warning = warnings[i];
	      console.log('  ' + warning);
	    }
	    console.log();
	    process.exit(1);
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("semver");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"name": "vuenetcore-client",
		"version": "1.0.0",
		"description": "VueNetCore Client App",
		"author": "0xFireball <0xFireball@outlook.com>",
		"private": true,
		"scripts": {
			"dev": "node build/dev-server.js",
			"build": "node build/build.js",
			"lint": "eslint --ext .js,.vue src"
		},
		"dependencies": {
			"vue": "^2.1.0"
		},
		"devDependencies": {
			"autoprefixer": "^6.4.0",
			"babel-core": "^6.0.0",
			"babel-eslint": "^7.0.0",
			"babel-loader": "^6.0.0",
			"babel-plugin-transform-runtime": "^6.0.0",
			"babel-preset-es2015": "^6.0.0",
			"babel-preset-stage-2": "^6.0.0",
			"babel-register": "^6.0.0",
			"chalk": "^1.1.3",
			"connect-history-api-fallback": "^1.1.0",
			"css-loader": "^0.25.0",
			"eslint": "^3.7.1",
			"eslint-friendly-formatter": "^2.0.5",
			"eslint-loader": "^1.5.0",
			"eslint-plugin-html": "^1.3.0",
			"eslint-config-standard": "^6.1.0",
			"eslint-plugin-promise": "^3.4.0",
			"eslint-plugin-standard": "^2.0.1",
			"eventsource-polyfill": "^0.9.6",
			"express": "^4.13.3",
			"extract-text-webpack-plugin": "^1.0.1",
			"file-loader": "^0.9.0",
			"function-bind": "^1.0.2",
			"html-webpack-plugin": "^2.8.1",
			"http-proxy-middleware": "^0.17.2",
			"json-loader": "^0.5.4",
			"semver": "^5.3.0",
			"opn": "^4.0.2",
			"ora": "^0.3.0",
			"shelljs": "^0.7.4",
			"url-loader": "^0.5.7",
			"vue-loader": "^10.0.0",
			"vue-style-loader": "^1.0.0",
			"vue-template-compiler": "^2.1.0",
			"webpack": "^1.13.2",
			"webpack-dev-middleware": "^1.8.3",
			"webpack-hot-middleware": "^2.12.2",
			"webpack-merge": "^0.14.1"
		},
		"engines": {
			"node": ">= 4.0.0",
			"npm": ">= 3.0.0"
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var path = __webpack_require__(8);
	
	module.exports = {
	  build: {
	    env: __webpack_require__(9),
	    index: path.resolve(__dirname, '../wwwroot/dist/index.html'),
	    assetsRoot: path.resolve(__dirname, '../wwwroot/static'),
	    assetsSubDirectory: 'static',
	    assetsPublicPath: '/static/',
	    productionSourceMap: true,
	
	    productionGzip: false,
	    productionGzipExtensions: ['js', 'css']
	  },
	  dev: {
	    env: __webpack_require__(10),
	    port: 8080,
	    assetsSubDirectory: 'static',
	    assetsPublicPath: '/static/',
	    proxyTable: {},
	
	    cssSourceMap: false
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  NODE_ENV: '"production"'
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var merge = __webpack_require__(11);
	var prodEnv = __webpack_require__(9);
	
	module.exports = merge(prodEnv, {
	  NODE_ENV: '"development"'
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("webpack-merge");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("opn");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("http-proxy-middleware");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = __webpack_require__(7);
	var webpack = __webpack_require__(13);
	var merge = __webpack_require__(11);
	var utils = __webpack_require__(17);
	var baseWebpackConfig = __webpack_require__(19);
	var HtmlWebpackPlugin = __webpack_require__(22);
	
	(0, _keys2.default)(baseWebpackConfig.entry).forEach(function (name) {
	  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
	});
	
	module.exports = merge(baseWebpackConfig, {
	  module: {
	    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
	  },
	
	  devtool: '#eval-source-map',
	  plugins: [new webpack.DefinePlugin({
	    'process.env': config.dev.env
	  }), new webpack.optimize.OccurenceOrderPlugin(), new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin(), new HtmlWebpackPlugin({
	    filename: 'ClientApp/index.html',
	    template: 'ClientApp/index.html',
	    inject: true
	  })]
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(8);
	var config = __webpack_require__(7);
	var ExtractTextPlugin = __webpack_require__(18);
	
	exports.assetsPath = function (_path) {
	  var assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory;
	  return path.posix.join(assetsSubDirectory, _path);
	};
	
	exports.cssLoaders = function (options) {
	  options = options || {};
	
	  function generateLoaders(loaders) {
	    var sourceLoader = loaders.map(function (loader) {
	      var extraParamChar;
	      if (/\?/.test(loader)) {
	        loader = loader.replace(/\?/, '-loader?');
	        extraParamChar = '&';
	      } else {
	        loader = loader + '-loader';
	        extraParamChar = '?';
	      }
	      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
	    }).join('!');
	
	    if (options.extract) {
	      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
	    } else {
	      return ['vue-style-loader', sourceLoader].join('!');
	    }
	  }
	
	  return {
	    css: generateLoaders(['css']),
	    postcss: generateLoaders(['css']),
	    less: generateLoaders(['css', 'less']),
	    sass: generateLoaders(['css', 'sass?indentedSyntax']),
	    scss: generateLoaders(['css', 'sass']),
	    stylus: generateLoaders(['css', 'stylus']),
	    styl: generateLoaders(['css', 'stylus'])
	  };
	};
	
	exports.styleLoaders = function (options) {
	  var output = [];
	  var loaders = exports.cssLoaders(options);
	  for (var extension in loaders) {
	    var loader = loaders[extension];
	    output.push({
	      test: new RegExp('\\.' + extension + '$'),
	      loader: loader
	    });
	  }
	  return output;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("extract-text-webpack-plugin");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var path = __webpack_require__(8);
	var config = __webpack_require__(7);
	var utils = __webpack_require__(17);
	var projectRoot = path.resolve(__dirname, '../');
	
	var env = process.env.NODE_ENV;
	
	var cssSourceMapDev = env === 'development' && config.dev.cssSourceMap;
	var cssSourceMapProd = env === 'production' && config.build.productionSourceMap;
	var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;
	
	module.exports = {
	  entry: {
	    app: './ClientApp/main.js'
	  },
	  output: {
	    path: config.build.assetsRoot,
	    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
	    filename: '[name].js'
	  },
	  resolve: {
	    extensions: ['', '.js', '.vue'],
	    fallback: [path.join(__dirname, '../node_modules')],
	    alias: {
	      'vue$': 'vue/dist/vue.common.js',
	      'src': path.resolve(__dirname, '../ClientApp'),
	      'assets': path.resolve(__dirname, '../ClientApp/assets'),
	      'components': path.resolve(__dirname, '../ClientApp/components')
	    }
	  },
	  resolveLoader: {
	    fallback: [path.join(__dirname, '../node_modules')]
	  },
	  module: {
	    preLoaders: [{
	      test: /\.vue$/,
	      loader: 'eslint',
	      include: projectRoot,
	      exclude: /node_modules/
	    }, {
	      test: /\.js$/,
	      loader: 'eslint',
	      include: projectRoot,
	      exclude: /node_modules/
	    }],
	    loaders: [{
	      test: /\.vue$/,
	      loader: 'vue'
	    }, {
	      test: /\.js$/,
	      loader: 'babel',
	      include: projectRoot,
	      exclude: /node_modules/
	    }, {
	      test: /\.json$/,
	      loader: 'json'
	    }, {
	      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	      loader: 'url',
	      query: {
	        limit: 10000,
	        name: utils.assetsPath('img/[name].[hash:7].[ext]')
	      }
	    }, {
	      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	      loader: 'url',
	      query: {
	        limit: 10000,
	        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
	      }
	    }]
	  },
	  eslint: {
	    formatter: __webpack_require__(20)
	  },
	  vue: {
	    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
	    postcss: [__webpack_require__(21)({
	      browsers: ['last 2 versions']
	    })]
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("eslint-friendly-formatter");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("autoprefixer");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("html-webpack-plugin");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("connect-history-api-fallback");

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmU0MDdmZGQ1YTI3MmJjMGQ3Y2QiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvZGV2LXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIiIsIndlYnBhY2s6Ly8vLi9idWlsZC9jaGVjay12ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW12ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy8uL3BhY2thZ2UuanNvbiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vLi9jb25maWcvcHJvZC5lbnYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Rldi5lbnYuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2VicGFjay1tZXJnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3BuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cC1wcm94eS1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vLy4vYnVpbGQvd2VicGFjay5kZXYuY29uZi5qcyIsIndlYnBhY2s6Ly8vLi9idWlsZC91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly8vLi9idWlsZC93ZWJwYWNrLmJhc2UuY29uZi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlc2xpbnQtZnJpZW5kbHktZm9ybWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXV0b3ByZWZpeGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29ubmVjdC1oaXN0b3J5LWFwaS1mYWxsYmFja1wiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJKU09OIiwicGFyc2UiLCJkZXYiLCJwYXRoIiwiZXhwcmVzcyIsIndlYnBhY2siLCJvcG4iLCJwcm94eU1pZGRsZXdhcmUiLCJ3ZWJwYWNrQ29uZmlnIiwicG9ydCIsIlBPUlQiLCJwcm94eVRhYmxlIiwiYXBwIiwiY29tcGlsZXIiLCJkZXZNaWRkbGV3YXJlIiwicHVibGljUGF0aCIsIm91dHB1dCIsInN0YXRzIiwiY29sb3JzIiwiY2h1bmtzIiwiaG90TWlkZGxld2FyZSIsInBsdWdpbiIsImNvbXBpbGF0aW9uIiwiZGF0YSIsImNiIiwicHVibGlzaCIsImFjdGlvbiIsImZvckVhY2giLCJjb250ZXh0Iiwib3B0aW9ucyIsInRhcmdldCIsInVzZSIsInN0YXRpY1BhdGgiLCJwb3NpeCIsImpvaW4iLCJhc3NldHNQdWJsaWNQYXRoIiwiYXNzZXRzU3ViRGlyZWN0b3J5Iiwic3RhdGljIiwibW9kdWxlIiwiZXhwb3J0cyIsImxpc3RlbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJzZW12ZXIiLCJjaGFsayIsInBhY2thZ2VDb25maWciLCJleGVjIiwiY21kIiwiZXhlY1N5bmMiLCJ0b1N0cmluZyIsInRyaW0iLCJ2ZXJzaW9uUmVxdWlyZW1lbnRzIiwibmFtZSIsImN1cnJlbnRWZXJzaW9uIiwiY2xlYW4iLCJ2ZXJzaW9uIiwidmVyc2lvblJlcXVpcmVtZW50IiwiZW5naW5lcyIsIm5vZGUiLCJucG0iLCJ3YXJuaW5ncyIsImkiLCJsZW5ndGgiLCJtb2QiLCJzYXRpc2ZpZXMiLCJwdXNoIiwicmVkIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJ3YXJuaW5nIiwiZXhpdCIsImJ1aWxkIiwiaW5kZXgiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiYXNzZXRzUm9vdCIsInByb2R1Y3Rpb25Tb3VyY2VNYXAiLCJwcm9kdWN0aW9uR3ppcCIsInByb2R1Y3Rpb25HemlwRXh0ZW5zaW9ucyIsImNzc1NvdXJjZU1hcCIsIm1lcmdlIiwicHJvZEVudiIsInV0aWxzIiwiYmFzZVdlYnBhY2tDb25maWciLCJIdG1sV2VicGFja1BsdWdpbiIsImVudHJ5IiwiY29uY2F0IiwibG9hZGVycyIsInN0eWxlTG9hZGVycyIsInNvdXJjZU1hcCIsImRldnRvb2wiLCJwbHVnaW5zIiwiRGVmaW5lUGx1Z2luIiwib3B0aW1pemUiLCJPY2N1cmVuY2VPcmRlclBsdWdpbiIsIkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luIiwiTm9FcnJvcnNQbHVnaW4iLCJmaWxlbmFtZSIsInRlbXBsYXRlIiwiaW5qZWN0IiwiRXh0cmFjdFRleHRQbHVnaW4iLCJhc3NldHNQYXRoIiwiX3BhdGgiLCJjc3NMb2FkZXJzIiwiZ2VuZXJhdGVMb2FkZXJzIiwic291cmNlTG9hZGVyIiwibWFwIiwibG9hZGVyIiwiZXh0cmFQYXJhbUNoYXIiLCJ0ZXN0IiwicmVwbGFjZSIsImV4dHJhY3QiLCJjc3MiLCJwb3N0Y3NzIiwibGVzcyIsInNhc3MiLCJzY3NzIiwic3R5bHVzIiwic3R5bCIsImV4dGVuc2lvbiIsIlJlZ0V4cCIsInByb2plY3RSb290IiwiY3NzU291cmNlTWFwRGV2IiwiY3NzU291cmNlTWFwUHJvZCIsInVzZUNzc1NvdXJjZU1hcCIsImV4dGVuc2lvbnMiLCJmYWxsYmFjayIsImFsaWFzIiwicmVzb2x2ZUxvYWRlciIsInByZUxvYWRlcnMiLCJpbmNsdWRlIiwiZXhjbHVkZSIsInF1ZXJ5IiwibGltaXQiLCJlc2xpbnQiLCJmb3JtYXR0ZXIiLCJ2dWUiLCJi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Q0FBLDBEIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmU0MDdmZGQ1YTI3MmJjMGQ3Y2QiLCJyZXF1aXJlKCcuL2NoZWNrLXZlcnNpb25zJykoKVxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG5pZiAoIXByb2Nlc3MuZW52Lk5PREVfRU5WKSBwcm9jZXNzLmVudi5OT0RFX0VOViA9IEpTT04ucGFyc2UoY29uZmlnLmRldi5lbnYuTk9ERV9FTlYpXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcbnZhciB3ZWJwYWNrID0gcmVxdWlyZSgnd2VicGFjaycpXG52YXIgb3BuID0gcmVxdWlyZSgnb3BuJylcbnZhciBwcm94eU1pZGRsZXdhcmUgPSByZXF1aXJlKCdodHRwLXByb3h5LW1pZGRsZXdhcmUnKVxudmFyIHdlYnBhY2tDb25maWcgPSByZXF1aXJlKCcuL3dlYnBhY2suZGV2LmNvbmYnKVxuXG4vLyBkZWZhdWx0IHBvcnQgd2hlcmUgZGV2IHNlcnZlciBsaXN0ZW5zIGZvciBpbmNvbWluZyB0cmFmZmljXG52YXIgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgY29uZmlnLmRldi5wb3J0XG4vLyBEZWZpbmUgSFRUUCBwcm94aWVzIHRvIHlvdXIgY3VzdG9tIEFQSSBiYWNrZW5kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY2hpbXVyYWkvaHR0cC1wcm94eS1taWRkbGV3YXJlXG52YXIgcHJveHlUYWJsZSA9IGNvbmZpZy5kZXYucHJveHlUYWJsZVxuXG52YXIgYXBwID0gZXhwcmVzcygpXG52YXIgY29tcGlsZXIgPSB3ZWJwYWNrKHdlYnBhY2tDb25maWcpXG5cbnZhciBkZXZNaWRkbGV3YXJlID0gcmVxdWlyZSgnd2VicGFjay1kZXYtbWlkZGxld2FyZScpKGNvbXBpbGVyLCB7XG4gIHB1YmxpY1BhdGg6IHdlYnBhY2tDb25maWcub3V0cHV0LnB1YmxpY1BhdGgsXG4gIHN0YXRzOiB7XG4gICAgY29sb3JzOiB0cnVlLFxuICAgIGNodW5rczogZmFsc2VcbiAgfVxufSlcblxudmFyIGhvdE1pZGRsZXdhcmUgPSByZXF1aXJlKCd3ZWJwYWNrLWhvdC1taWRkbGV3YXJlJykoY29tcGlsZXIpXG4vLyBmb3JjZSBwYWdlIHJlbG9hZCB3aGVuIGh0bWwtd2VicGFjay1wbHVnaW4gdGVtcGxhdGUgY2hhbmdlc1xuY29tcGlsZXIucGx1Z2luKCdjb21waWxhdGlvbicsIGZ1bmN0aW9uIChjb21waWxhdGlvbikge1xuICBjb21waWxhdGlvbi5wbHVnaW4oJ2h0bWwtd2VicGFjay1wbHVnaW4tYWZ0ZXItZW1pdCcsIGZ1bmN0aW9uIChkYXRhLCBjYikge1xuICAgIGhvdE1pZGRsZXdhcmUucHVibGlzaCh7IGFjdGlvbjogJ3JlbG9hZCcgfSlcbiAgICBjYigpXG4gIH0pXG59KVxuXG4vLyBwcm94eSBhcGkgcmVxdWVzdHNcbk9iamVjdC5rZXlzKHByb3h5VGFibGUpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgdmFyIG9wdGlvbnMgPSBwcm94eVRhYmxlW2NvbnRleHRdXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyB0YXJnZXQ6IG9wdGlvbnMgfVxuICB9XG4gIGFwcC51c2UocHJveHlNaWRkbGV3YXJlKGNvbnRleHQsIG9wdGlvbnMpKVxufSlcblxuLy8gaGFuZGxlIGZhbGxiYWNrIGZvciBIVE1MNSBoaXN0b3J5IEFQSVxuYXBwLnVzZShyZXF1aXJlKCdjb25uZWN0LWhpc3RvcnktYXBpLWZhbGxiYWNrJykoKSlcblxuLy8gc2VydmUgd2VicGFjayBidW5kbGUgb3V0cHV0XG5hcHAudXNlKGRldk1pZGRsZXdhcmUpXG5cbi8vIGVuYWJsZSBob3QtcmVsb2FkIGFuZCBzdGF0ZS1wcmVzZXJ2aW5nXG4vLyBjb21waWxhdGlvbiBlcnJvciBkaXNwbGF5XG5hcHAudXNlKGhvdE1pZGRsZXdhcmUpXG5cbi8vIHNlcnZlIHB1cmUgc3RhdGljIGFzc2V0c1xudmFyIHN0YXRpY1BhdGggPSBwYXRoLnBvc2l4LmpvaW4oY29uZmlnLmRldi5hc3NldHNQdWJsaWNQYXRoLCBjb25maWcuZGV2LmFzc2V0c1N1YkRpcmVjdG9yeSlcbmFwcC51c2Uoc3RhdGljUGF0aCwgZXhwcmVzcy5zdGF0aWMoJy4vc3RhdGljJykpXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbiAoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHVyaSA9ICdodHRwOi8vbG9jYWxob3N0OicgKyBwb3J0XG4gIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgYXQgJyArIHVyaSArICdcXG4nKVxuXG4gIC8vIHdoZW4gZW52IGlzIHRlc3RpbmcsIGRvbid0IG5lZWQgb3BlbiBpdFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0aW5nJykge1xuICAgIG9wbih1cmkpXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9idWlsZC9kZXYtc2VydmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNlbXZlciA9IHJlcXVpcmUoJ3NlbXZlcicpXG52YXIgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXG52YXIgcGFja2FnZUNvbmZpZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpXG52YXIgZXhlYyA9IGZ1bmN0aW9uIChjbWQpIHtcbiAgcmV0dXJuIHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKVxuICAgIC5leGVjU3luYyhjbWQpLnRvU3RyaW5nKCkudHJpbSgpXG59XG5cbnZhciB2ZXJzaW9uUmVxdWlyZW1lbnRzID0gW1xuICB7XG4gICAgbmFtZTogJ25vZGUnLFxuICAgIGN1cnJlbnRWZXJzaW9uOiBzZW12ZXIuY2xlYW4ocHJvY2Vzcy52ZXJzaW9uKSxcbiAgICB2ZXJzaW9uUmVxdWlyZW1lbnQ6IHBhY2thZ2VDb25maWcuZW5naW5lcy5ub2RlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbnBtJyxcbiAgICBjdXJyZW50VmVyc2lvbjogZXhlYygnbnBtIC0tdmVyc2lvbicpLFxuICAgIHZlcnNpb25SZXF1aXJlbWVudDogcGFja2FnZUNvbmZpZy5lbmdpbmVzLm5wbVxuICB9XG5dXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd2FybmluZ3MgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnNpb25SZXF1aXJlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbW9kID0gdmVyc2lvblJlcXVpcmVtZW50c1tpXVxuICAgIGlmICghc2VtdmVyLnNhdGlzZmllcyhtb2QuY3VycmVudFZlcnNpb24sIG1vZC52ZXJzaW9uUmVxdWlyZW1lbnQpKSB7XG4gICAgICB3YXJuaW5ncy5wdXNoKG1vZC5uYW1lICsgJzogJyArXG4gICAgICAgIGNoYWxrLnJlZChtb2QuY3VycmVudFZlcnNpb24pICsgJyBzaG91bGQgYmUgJyArXG4gICAgICAgIGNoYWxrLmdyZWVuKG1vZC52ZXJzaW9uUmVxdWlyZW1lbnQpXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgaWYgKHdhcm5pbmdzLmxlbmd0aCkge1xuICAgIGNvbnNvbGUubG9nKCcnKVxuICAgIGNvbnNvbGUubG9nKGNoYWxrLnllbGxvdygnVG8gdXNlIHRoaXMgdGVtcGxhdGUsIHlvdSBtdXN0IHVwZGF0ZSBmb2xsb3dpbmcgdG8gbW9kdWxlczonKSlcbiAgICBjb25zb2xlLmxvZygpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3YXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHdhcm5pbmcgPSB3YXJuaW5nc1tpXVxuICAgICAgY29uc29sZS5sb2coJyAgJyArIHdhcm5pbmcpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKClcbiAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYnVpbGQvY2hlY2stdmVyc2lvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW12ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZW12ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWxrXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmFtZVwiOiBcInZ1ZW5ldGNvcmUtY2xpZW50XCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJWdWVOZXRDb3JlIENsaWVudCBBcHBcIixcblx0XCJhdXRob3JcIjogXCIweEZpcmViYWxsIDwweEZpcmViYWxsQG91dGxvb2suY29tPlwiLFxuXHRcInByaXZhdGVcIjogdHJ1ZSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcImRldlwiOiBcIm5vZGUgYnVpbGQvZGV2LXNlcnZlci5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJub2RlIGJ1aWxkL2J1aWxkLmpzXCIsXG5cdFx0XCJsaW50XCI6IFwiZXNsaW50IC0tZXh0IC5qcywudnVlIHNyY1wiXG5cdH0sXG5cdFwiZGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcInZ1ZVwiOiBcIl4yLjEuMFwiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImF1dG9wcmVmaXhlclwiOiBcIl42LjQuMFwiLFxuXHRcdFwiYmFiZWwtY29yZVwiOiBcIl42LjAuMFwiLFxuXHRcdFwiYmFiZWwtZXNsaW50XCI6IFwiXjcuMC4wXCIsXG5cdFx0XCJiYWJlbC1sb2FkZXJcIjogXCJeNi4wLjBcIixcblx0XHRcImJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZVwiOiBcIl42LjAuMFwiLFxuXHRcdFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjAuMFwiLFxuXHRcdFwiYmFiZWwtcHJlc2V0LXN0YWdlLTJcIjogXCJeNi4wLjBcIixcblx0XHRcImJhYmVsLXJlZ2lzdGVyXCI6IFwiXjYuMC4wXCIsXG5cdFx0XCJjaGFsa1wiOiBcIl4xLjEuM1wiLFxuXHRcdFwiY29ubmVjdC1oaXN0b3J5LWFwaS1mYWxsYmFja1wiOiBcIl4xLjEuMFwiLFxuXHRcdFwiY3NzLWxvYWRlclwiOiBcIl4wLjI1LjBcIixcblx0XHRcImVzbGludFwiOiBcIl4zLjcuMVwiLFxuXHRcdFwiZXNsaW50LWZyaWVuZGx5LWZvcm1hdHRlclwiOiBcIl4yLjAuNVwiLFxuXHRcdFwiZXNsaW50LWxvYWRlclwiOiBcIl4xLjUuMFwiLFxuXHRcdFwiZXNsaW50LXBsdWdpbi1odG1sXCI6IFwiXjEuMy4wXCIsXG5cdFx0XCJlc2xpbnQtY29uZmlnLXN0YW5kYXJkXCI6IFwiXjYuMS4wXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLXByb21pc2VcIjogXCJeMy40LjBcIixcblx0XHRcImVzbGludC1wbHVnaW4tc3RhbmRhcmRcIjogXCJeMi4wLjFcIixcblx0XHRcImV2ZW50c291cmNlLXBvbHlmaWxsXCI6IFwiXjAuOS42XCIsXG5cdFx0XCJleHByZXNzXCI6IFwiXjQuMTMuM1wiLFxuXHRcdFwiZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXCI6IFwiXjEuMC4xXCIsXG5cdFx0XCJmaWxlLWxvYWRlclwiOiBcIl4wLjkuMFwiLFxuXHRcdFwiZnVuY3Rpb24tYmluZFwiOiBcIl4xLjAuMlwiLFxuXHRcdFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiOiBcIl4yLjguMVwiLFxuXHRcdFwiaHR0cC1wcm94eS1taWRkbGV3YXJlXCI6IFwiXjAuMTcuMlwiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjRcIixcblx0XHRcInNlbXZlclwiOiBcIl41LjMuMFwiLFxuXHRcdFwib3BuXCI6IFwiXjQuMC4yXCIsXG5cdFx0XCJvcmFcIjogXCJeMC4zLjBcIixcblx0XHRcInNoZWxsanNcIjogXCJeMC43LjRcIixcblx0XHRcInVybC1sb2FkZXJcIjogXCJeMC41LjdcIixcblx0XHRcInZ1ZS1sb2FkZXJcIjogXCJeMTAuMC4wXCIsXG5cdFx0XCJ2dWUtc3R5bGUtbG9hZGVyXCI6IFwiXjEuMC4wXCIsXG5cdFx0XCJ2dWUtdGVtcGxhdGUtY29tcGlsZXJcIjogXCJeMi4xLjBcIixcblx0XHRcIndlYnBhY2tcIjogXCJeMS4xMy4yXCIsXG5cdFx0XCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCI6IFwiXjEuOC4zXCIsXG5cdFx0XCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCI6IFwiXjIuMTIuMlwiLFxuXHRcdFwid2VicGFjay1tZXJnZVwiOiBcIl4wLjE0LjFcIlxuXHR9LFxuXHRcImVuZ2luZXNcIjoge1xuXHRcdFwibm9kZVwiOiBcIj49IDQuMC4wXCIsXG5cdFx0XCJucG1cIjogXCI+PSAzLjAuMFwiXG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzZWUgaHR0cDovL3Z1ZWpzLXRlbXBsYXRlcy5naXRodWIuaW8vd2VicGFjayBmb3IgZG9jdW1lbnRhdGlvbi5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWlsZDoge1xuICAgIGVudjogcmVxdWlyZSgnLi9wcm9kLmVudicpLFxuICAgIGluZGV4OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vd3d3cm9vdC9kaXN0L2luZGV4Lmh0bWwnKSxcbiAgICBhc3NldHNSb290OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vd3d3cm9vdC9zdGF0aWMnKSxcbiAgICBhc3NldHNTdWJEaXJlY3Rvcnk6ICdzdGF0aWMnLFxuICAgIGFzc2V0c1B1YmxpY1BhdGg6ICcvc3RhdGljLycsXG4gICAgcHJvZHVjdGlvblNvdXJjZU1hcDogdHJ1ZSxcbiAgICAvLyBHemlwIG9mZiBieSBkZWZhdWx0IGFzIG1hbnkgcG9wdWxhciBzdGF0aWMgaG9zdHMgc3VjaCBhc1xuICAgIC8vIFN1cmdlIG9yIE5ldGxpZnkgYWxyZWFkeSBnemlwIGFsbCBzdGF0aWMgYXNzZXRzIGZvciB5b3UuXG4gICAgLy8gQmVmb3JlIHNldHRpbmcgdG8gYHRydWVgLCBtYWtlIHN1cmUgdG86XG4gICAgLy8gbnBtIGluc3RhbGwgLS1zYXZlLWRldiBjb21wcmVzc2lvbi13ZWJwYWNrLXBsdWdpblxuICAgIHByb2R1Y3Rpb25HemlwOiBmYWxzZSxcbiAgICBwcm9kdWN0aW9uR3ppcEV4dGVuc2lvbnM6IFsnanMnLCAnY3NzJ11cbiAgfSxcbiAgZGV2OiB7XG4gICAgZW52OiByZXF1aXJlKCcuL2Rldi5lbnYnKSxcbiAgICBwb3J0OiA4MDgwLFxuICAgIGFzc2V0c1N1YkRpcmVjdG9yeTogJ3N0YXRpYycsXG4gICAgYXNzZXRzUHVibGljUGF0aDogJy9zdGF0aWMvJyxcbiAgICBwcm94eVRhYmxlOiB7fSxcbiAgICAvLyBDU1MgU291cmNlbWFwcyBvZmYgYnkgZGVmYXVsdCBiZWNhdXNlIHJlbGF0aXZlIHBhdGhzIGFyZSBcImJ1Z2d5XCJcbiAgICAvLyB3aXRoIHRoaXMgb3B0aW9uLCBhY2NvcmRpbmcgdG8gdGhlIENTUy1Mb2FkZXIgUkVBRE1FXG4gICAgLy8gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL2Nzcy1sb2FkZXIjc291cmNlbWFwcylcbiAgICAvLyBJbiBvdXIgZXhwZXJpZW5jZSwgdGhleSBnZW5lcmFsbHkgd29yayBhcyBleHBlY3RlZCxcbiAgICAvLyBqdXN0IGJlIGF3YXJlIG9mIHRoaXMgaXNzdWUgd2hlbiBlbmFibGluZyB0aGlzIG9wdGlvbi5cbiAgICBjc3NTb3VyY2VNYXA6IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbmZpZy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5PREVfRU5WOiAnXCJwcm9kdWN0aW9uXCInXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvcHJvZC5lbnYuanMiLCJ2YXIgbWVyZ2UgPSByZXF1aXJlKCd3ZWJwYWNrLW1lcmdlJylcbnZhciBwcm9kRW52ID0gcmVxdWlyZSgnLi9wcm9kLmVudicpXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2UocHJvZEVudiwge1xuICBOT0RFX0VOVjogJ1wiZGV2ZWxvcG1lbnRcIidcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcvZGV2LmVudi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbWVyZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrLW1lcmdlXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ3ZWJwYWNrXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9wblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm9wblwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXByb3h5LW1pZGRsZXdhcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwLXByb3h5LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG52YXIgd2VicGFjayA9IHJlcXVpcmUoJ3dlYnBhY2snKVxudmFyIG1lcmdlID0gcmVxdWlyZSgnd2VicGFjay1tZXJnZScpXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbnZhciBiYXNlV2VicGFja0NvbmZpZyA9IHJlcXVpcmUoJy4vd2VicGFjay5iYXNlLmNvbmYnKVxudmFyIEh0bWxXZWJwYWNrUGx1Z2luID0gcmVxdWlyZSgnaHRtbC13ZWJwYWNrLXBsdWdpbicpXG5cbi8vIGFkZCBob3QtcmVsb2FkIHJlbGF0ZWQgY29kZSB0byBlbnRyeSBjaHVua3Ncbk9iamVjdC5rZXlzKGJhc2VXZWJwYWNrQ29uZmlnLmVudHJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIGJhc2VXZWJwYWNrQ29uZmlnLmVudHJ5W25hbWVdID0gWycuL2J1aWxkL2Rldi1jbGllbnQnXS5jb25jYXQoYmFzZVdlYnBhY2tDb25maWcuZW50cnlbbmFtZV0pXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlKGJhc2VXZWJwYWNrQ29uZmlnLCB7XG4gIG1vZHVsZToge1xuICAgIGxvYWRlcnM6IHV0aWxzLnN0eWxlTG9hZGVycyh7IHNvdXJjZU1hcDogY29uZmlnLmRldi5jc3NTb3VyY2VNYXAgfSlcbiAgfSxcbiAgLy8gZXZhbC1zb3VyY2UtbWFwIGlzIGZhc3RlciBmb3IgZGV2ZWxvcG1lbnRcbiAgZGV2dG9vbDogJyNldmFsLXNvdXJjZS1tYXAnLFxuICBwbHVnaW5zOiBbXG4gICAgbmV3IHdlYnBhY2suRGVmaW5lUGx1Z2luKHtcbiAgICAgICdwcm9jZXNzLmVudic6IGNvbmZpZy5kZXYuZW52XG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dsZW5qYW1pbi93ZWJwYWNrLWhvdC1taWRkbGV3YXJlI2luc3RhbGxhdGlvbi0tdXNhZ2VcbiAgICBuZXcgd2VicGFjay5vcHRpbWl6ZS5PY2N1cmVuY2VPcmRlclBsdWdpbigpLFxuICAgIG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCksXG4gICAgbmV3IHdlYnBhY2suTm9FcnJvcnNQbHVnaW4oKSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW1wZWRhbmR3aXJlZC9odG1sLXdlYnBhY2stcGx1Z2luXG4gICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6ICdDbGllbnRBcHAvaW5kZXguaHRtbCcsXG4gICAgICAgIHRlbXBsYXRlOiAnQ2xpZW50QXBwL2luZGV4Lmh0bWwnLFxuICAgICAgaW5qZWN0OiB0cnVlXG4gICAgfSlcbiAgXVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2J1aWxkL3dlYnBhY2suZGV2LmNvbmYuanMiLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG52YXIgRXh0cmFjdFRleHRQbHVnaW4gPSByZXF1aXJlKCdleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4nKVxuXG5leHBvcnRzLmFzc2V0c1BhdGggPSBmdW5jdGlvbiAoX3BhdGgpIHtcbiAgdmFyIGFzc2V0c1N1YkRpcmVjdG9yeSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGNvbmZpZy5idWlsZC5hc3NldHNTdWJEaXJlY3RvcnlcbiAgICA6IGNvbmZpZy5kZXYuYXNzZXRzU3ViRGlyZWN0b3J5XG4gIHJldHVybiBwYXRoLnBvc2l4LmpvaW4oYXNzZXRzU3ViRGlyZWN0b3J5LCBfcGF0aClcbn1cblxuZXhwb3J0cy5jc3NMb2FkZXJzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgLy8gZ2VuZXJhdGUgbG9hZGVyIHN0cmluZyB0byBiZSB1c2VkIHdpdGggZXh0cmFjdCB0ZXh0IHBsdWdpblxuICBmdW5jdGlvbiBnZW5lcmF0ZUxvYWRlcnMgKGxvYWRlcnMpIHtcbiAgICB2YXIgc291cmNlTG9hZGVyID0gbG9hZGVycy5tYXAoZnVuY3Rpb24gKGxvYWRlcikge1xuICAgICAgdmFyIGV4dHJhUGFyYW1DaGFyXG4gICAgICBpZiAoL1xcPy8udGVzdChsb2FkZXIpKSB7XG4gICAgICAgIGxvYWRlciA9IGxvYWRlci5yZXBsYWNlKC9cXD8vLCAnLWxvYWRlcj8nKVxuICAgICAgICBleHRyYVBhcmFtQ2hhciA9ICcmJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGVyID0gbG9hZGVyICsgJy1sb2FkZXInXG4gICAgICAgIGV4dHJhUGFyYW1DaGFyID0gJz8nXG4gICAgICB9XG4gICAgICByZXR1cm4gbG9hZGVyICsgKG9wdGlvbnMuc291cmNlTWFwID8gZXh0cmFQYXJhbUNoYXIgKyAnc291cmNlTWFwJyA6ICcnKVxuICAgIH0pLmpvaW4oJyEnKVxuXG4gICAgLy8gRXh0cmFjdCBDU1Mgd2hlbiB0aGF0IG9wdGlvbiBpcyBzcGVjaWZpZWRcbiAgICAvLyAod2hpY2ggaXMgdGhlIGNhc2UgZHVyaW5nIHByb2R1Y3Rpb24gYnVpbGQpXG4gICAgaWYgKG9wdGlvbnMuZXh0cmFjdCkge1xuICAgICAgcmV0dXJuIEV4dHJhY3RUZXh0UGx1Z2luLmV4dHJhY3QoJ3Z1ZS1zdHlsZS1sb2FkZXInLCBzb3VyY2VMb2FkZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbJ3Z1ZS1zdHlsZS1sb2FkZXInLCBzb3VyY2VMb2FkZXJdLmpvaW4oJyEnKVxuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHA6Ly92dWVqcy5naXRodWIuaW8vdnVlLWxvYWRlci9lbi9jb25maWd1cmF0aW9ucy9leHRyYWN0LWNzcy5odG1sXG4gIHJldHVybiB7XG4gICAgY3NzOiBnZW5lcmF0ZUxvYWRlcnMoWydjc3MnXSksXG4gICAgcG9zdGNzczogZ2VuZXJhdGVMb2FkZXJzKFsnY3NzJ10pLFxuICAgIGxlc3M6IGdlbmVyYXRlTG9hZGVycyhbJ2NzcycsICdsZXNzJ10pLFxuICAgIHNhc3M6IGdlbmVyYXRlTG9hZGVycyhbJ2NzcycsICdzYXNzP2luZGVudGVkU3ludGF4J10pLFxuICAgIHNjc3M6IGdlbmVyYXRlTG9hZGVycyhbJ2NzcycsICdzYXNzJ10pLFxuICAgIHN0eWx1czogZ2VuZXJhdGVMb2FkZXJzKFsnY3NzJywgJ3N0eWx1cyddKSxcbiAgICBzdHlsOiBnZW5lcmF0ZUxvYWRlcnMoWydjc3MnLCAnc3R5bHVzJ10pXG4gIH1cbn1cblxuLy8gR2VuZXJhdGUgbG9hZGVycyBmb3Igc3RhbmRhbG9uZSBzdHlsZSBmaWxlcyAob3V0c2lkZSBvZiAudnVlKVxuZXhwb3J0cy5zdHlsZUxvYWRlcnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgb3V0cHV0ID0gW11cbiAgdmFyIGxvYWRlcnMgPSBleHBvcnRzLmNzc0xvYWRlcnMob3B0aW9ucylcbiAgZm9yICh2YXIgZXh0ZW5zaW9uIGluIGxvYWRlcnMpIHtcbiAgICB2YXIgbG9hZGVyID0gbG9hZGVyc1tleHRlbnNpb25dXG4gICAgb3V0cHV0LnB1c2goe1xuICAgICAgdGVzdDogbmV3IFJlZ0V4cCgnXFxcXC4nICsgZXh0ZW5zaW9uICsgJyQnKSxcbiAgICAgIGxvYWRlcjogbG9hZGVyXG4gICAgfSlcbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9idWlsZC91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbnZhciBwcm9qZWN0Um9vdCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8nKVxuXG52YXIgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbi8vIGNoZWNrIGVudiAmIGNvbmZpZy9pbmRleC5qcyB0byBkZWNpZGUgd2VpdGhlciB0byBlbmFibGUgQ1NTIFNvdXJjZW1hcHMgZm9yIHRoZVxuLy8gdmFyaW91cyBwcmVwcm9jZXNzb3IgbG9hZGVycyBhZGRlZCB0byB2dWUtbG9hZGVyIGF0IHRoZSBlbmQgb2YgdGhpcyBmaWxlXG52YXIgY3NzU291cmNlTWFwRGV2ID0gKGVudiA9PT0gJ2RldmVsb3BtZW50JyAmJiBjb25maWcuZGV2LmNzc1NvdXJjZU1hcClcbnZhciBjc3NTb3VyY2VNYXBQcm9kID0gKGVudiA9PT0gJ3Byb2R1Y3Rpb24nICYmIGNvbmZpZy5idWlsZC5wcm9kdWN0aW9uU291cmNlTWFwKVxudmFyIHVzZUNzc1NvdXJjZU1hcCA9IGNzc1NvdXJjZU1hcERldiB8fCBjc3NTb3VyY2VNYXBQcm9kXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeToge1xuICAgIGFwcDogJy4vQ2xpZW50QXBwL21haW4uanMnXG4gIH0sXG4gIG91dHB1dDoge1xuICAgIHBhdGg6IGNvbmZpZy5idWlsZC5hc3NldHNSb290LFxuICAgIHB1YmxpY1BhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBjb25maWcuYnVpbGQuYXNzZXRzUHVibGljUGF0aCA6IGNvbmZpZy5kZXYuYXNzZXRzUHVibGljUGF0aCxcbiAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcydcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGV4dGVuc2lvbnM6IFsnJywgJy5qcycsICcudnVlJ10sXG4gICAgZmFsbGJhY2s6IFtwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vbm9kZV9tb2R1bGVzJyldLFxuICAgIGFsaWFzOiB7XG4gICAgICAndnVlJCc6ICd2dWUvZGlzdC92dWUuY29tbW9uLmpzJyxcbiAgICAgICdzcmMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vQ2xpZW50QXBwJyksXG4gICAgICAnYXNzZXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL0NsaWVudEFwcC9hc3NldHMnKSxcbiAgICAgICdjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL0NsaWVudEFwcC9jb21wb25lbnRzJylcbiAgICB9XG4gIH0sXG4gIHJlc29sdmVMb2FkZXI6IHtcbiAgICBmYWxsYmFjazogW3BhdGguam9pbihfX2Rpcm5hbWUsICcuLi9ub2RlX21vZHVsZXMnKV1cbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgcHJlTG9hZGVyczogW1xuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwudnVlJC8sXG4gICAgICAgIGxvYWRlcjogJ2VzbGludCcsXG4gICAgICAgIGluY2x1ZGU6IHByb2plY3RSb290LFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLmpzJC8sXG4gICAgICAgIGxvYWRlcjogJ2VzbGludCcsXG4gICAgICAgIGluY2x1ZGU6IHByb2plY3RSb290LFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzL1xuICAgICAgfVxuICAgIF0sXG4gICAgbG9hZGVyczogW1xuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwudnVlJC8sXG4gICAgICAgIGxvYWRlcjogJ3Z1ZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5qcyQvLFxuICAgICAgICBsb2FkZXI6ICdiYWJlbCcsXG4gICAgICAgIGluY2x1ZGU6IHByb2plY3RSb290LFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLmpzb24kLyxcbiAgICAgICAgbG9hZGVyOiAnanNvbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC4ocG5nfGpwZT9nfGdpZnxzdmcpKFxcPy4qKT8kLyxcbiAgICAgICAgbG9hZGVyOiAndXJsJyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBsaW1pdDogMTAwMDAsXG4gICAgICAgICAgbmFtZTogdXRpbHMuYXNzZXRzUGF0aCgnaW1nL1tuYW1lXS5baGFzaDo3XS5bZXh0XScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC4od29mZjI/fGVvdHx0dGZ8b3RmKShcXD8uKik/JC8sXG4gICAgICAgIGxvYWRlcjogJ3VybCcsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgbGltaXQ6IDEwMDAwLFxuICAgICAgICAgIG5hbWU6IHV0aWxzLmFzc2V0c1BhdGgoJ2ZvbnRzL1tuYW1lXS5baGFzaDo3XS5bZXh0XScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIGVzbGludDoge1xuICAgIGZvcm1hdHRlcjogcmVxdWlyZSgnZXNsaW50LWZyaWVuZGx5LWZvcm1hdHRlcicpXG4gIH0sXG4gIHZ1ZToge1xuICAgIGxvYWRlcnM6IHV0aWxzLmNzc0xvYWRlcnMoeyBzb3VyY2VNYXA6IHVzZUNzc1NvdXJjZU1hcCB9KSxcbiAgICBwb3N0Y3NzOiBbXG4gICAgICByZXF1aXJlKCdhdXRvcHJlZml4ZXInKSh7XG4gICAgICAgIGJyb3dzZXJzOiBbJ2xhc3QgMiB2ZXJzaW9ucyddXG4gICAgICB9KVxuICAgIF1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYnVpbGQvd2VicGFjay5iYXNlLmNvbmYuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlc2xpbnQtZnJpZW5kbHktZm9ybWF0dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXNsaW50LWZyaWVuZGx5LWZvcm1hdHRlclwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdXRvcHJlZml4ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhdXRvcHJlZml4ZXJcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHRtbC13ZWJwYWNrLXBsdWdpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0bWwtd2VicGFjay1wbHVnaW5cIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ob3QtbWlkZGxld2FyZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYnBhY2staG90LW1pZGRsZXdhcmVcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29ubmVjdC1oaXN0b3J5LWFwaS1mYWxsYmFja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbm5lY3QtaGlzdG9yeS1hcGktZmFsbGJhY2tcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==