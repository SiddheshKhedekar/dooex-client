/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/sw/index.js ***!
  \*************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sw__ = __webpack_require__(/*! ./sw */ 1);\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return __WEBPACK_IMPORTED_MODULE_0__sw__[\"default\"]; });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3cvaW5kZXguanM/ZDYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9zdyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N3L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************!*\
  !*** ./src/sw/sw.js ***!
  \**********************/
/*! exports provided:  */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__saved_handler__ = __webpack_require__(/*! ./saved-handler */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tunnel_handler__ = __webpack_require__(/*! ./tunnel-handler */ 2);\n/* global WorkboxSW */\n\n\n\n\nimportScripts('/workbox/workbox-sw.dev.v2.1.0.js');\n\nconst VERSION = '1508951291278';\n\nconst sw = new WorkboxSW({\n  cacheId: 'dooex',\n  clientsClaim: true,\n  skipWaiting: true\n});\n\nsw.router.registerRoute(/doodles/, sw.strategies.cacheFirst({\n  cacheName: 'doodles'\n}));\n\nsw.router.registerRoute(/static/, sw.strategies.cacheFirst());\nsw.router.registerRoute(/bundle\\.js/, sw.strategies.networkOnly());\n\nsw.router.registerRoute(/logos/, new __WEBPACK_IMPORTED_MODULE_1__tunnel_handler__[\"a\" /* default */](sw));\nsw.router.registerRoute(/doodles\\/api/, new __WEBPACK_IMPORTED_MODULE_1__tunnel_handler__[\"a\" /* default */](sw));\n\nsw.router.registerRoute(/saved/, new __WEBPACK_IMPORTED_MODULE_0__saved_handler__[\"a\" /* default */](sw));\n\n['/', '/favicon.ico'].forEach(url => {\n  sw.router.registerRoute(url, sw.strategies.cacheFirst());\n});\n\nsw.precache([]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3cvc3cuanM/ZmEzZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgV29ya2JveFNXICovXG5cbmltcG9ydCBTYXZlZEhhbmRsZXIgZnJvbSAnLi9zYXZlZC1oYW5kbGVyJztcbmltcG9ydCBUdW5uZWxIYW5kbGVyIGZyb20gJy4vdHVubmVsLWhhbmRsZXInO1xuXG5pbXBvcnRTY3JpcHRzKCcvd29ya2JveC93b3JrYm94LXN3LmRldi52Mi4xLjAuanMnKTtcblxuY29uc3QgVkVSU0lPTiA9ICd7e1ZFUlNJT059fSc7XG5cbmNvbnN0IHN3ID0gbmV3IFdvcmtib3hTVyh7XG4gIGNhY2hlSWQ6ICdkb29leCcsXG4gIGNsaWVudHNDbGFpbTogdHJ1ZSxcbiAgc2tpcFdhaXRpbmc6IHRydWUsXG59KTtcblxuc3cucm91dGVyLnJlZ2lzdGVyUm91dGUoXG4gIC9kb29kbGVzLyxcbiAgc3cuc3RyYXRlZ2llcy5jYWNoZUZpcnN0KHtcbiAgICBjYWNoZU5hbWU6ICdkb29kbGVzJyxcbiAgfSksXG4pO1xuXG5zdy5yb3V0ZXIucmVnaXN0ZXJSb3V0ZSgvc3RhdGljLywgc3cuc3RyYXRlZ2llcy5jYWNoZUZpcnN0KCkpO1xuc3cucm91dGVyLnJlZ2lzdGVyUm91dGUoL2J1bmRsZVxcLmpzLywgc3cuc3RyYXRlZ2llcy5uZXR3b3JrT25seSgpKTtcblxuc3cucm91dGVyLnJlZ2lzdGVyUm91dGUoL2xvZ29zLywgbmV3IFR1bm5lbEhhbmRsZXIoc3cpKTtcbnN3LnJvdXRlci5yZWdpc3RlclJvdXRlKC9kb29kbGVzXFwvYXBpLywgbmV3IFR1bm5lbEhhbmRsZXIoc3cpKTtcblxuc3cucm91dGVyLnJlZ2lzdGVyUm91dGUoL3NhdmVkLywgbmV3IFNhdmVkSGFuZGxlcihzdykpO1xuXG5bJy8nLCAnL2Zhdmljb24uaWNvJ10uZm9yRWFjaCgodXJsKSA9PiB7XG4gIHN3LnJvdXRlci5yZWdpc3RlclJvdXRlKHVybCwgc3cuc3RyYXRlZ2llcy5jYWNoZUZpcnN0KCkpO1xufSk7XG5cbnN3LnByZWNhY2hlKFtdKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3cvc3cuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUdBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************!*\
  !*** ./src/sw/tunnel-handler.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class TunnelHandler {\n  constructor(sw) {\n    this.cache = sw.strategies.cacheFirst({\n      cacheName: 'interactive'\n    });\n  }\n\n  /**\n   * @param {Object} props\n   * @param {FetchEvent} props.event\n   * @param {Object} props.params\n   * @param {URL} props.url\n   */\n  handle(props) {\n    props.url.pathname = `/tunnel${props.url.pathname}`;\n\n    const request = new Request(props.url);\n    props.event = new FetchEvent('fetch', { request });\n\n    return this.cache.handle(props);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (TunnelHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3cvdHVubmVsLWhhbmRsZXIuanM/ZTY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUdW5uZWxIYW5kbGVyIHtcbiAgY29uc3RydWN0b3Ioc3cpIHtcbiAgICB0aGlzLmNhY2hlID0gc3cuc3RyYXRlZ2llcy5jYWNoZUZpcnN0KHtcbiAgICAgIGNhY2hlTmFtZTogJ2ludGVyYWN0aXZlJyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtGZXRjaEV2ZW50fSBwcm9wcy5ldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHMucGFyYW1zXG4gICAqIEBwYXJhbSB7VVJMfSBwcm9wcy51cmxcbiAgICovXG4gIGhhbmRsZShwcm9wcykge1xuICAgIHByb3BzLnVybC5wYXRobmFtZSA9IGAvdHVubmVsJHtwcm9wcy51cmwucGF0aG5hbWV9YDtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChwcm9wcy51cmwpO1xuICAgIHByb3BzLmV2ZW50ID0gbmV3IEZldGNoRXZlbnQoJ2ZldGNoJywgeyByZXF1ZXN0IH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuY2FjaGUuaGFuZGxlKHByb3BzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUdW5uZWxIYW5kbGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdy90dW5uZWwtaGFuZGxlci5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUNBO0FBc0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ./src/sw/saved-handler.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class SavedHandler {\n  constructor(sw) {\n    this.cache = sw.strategies.cacheFirst({\n      cacheName: 'saved'\n    });\n  }\n\n  /**\n   * @param {Object} props\n   * @param {FetchEvent} props.event\n   * @param {Object} props.params\n   * @param {URL} props.url\n   */\n  handle(props) {\n    const url = new URL(props.url.search.replace(/^\\?/, ''));\n    props.url = url;\n\n    const request = new Request(url, props.event.request);\n    props.event = new FetchEvent('fetch', { request });\n\n    return this.cache.handle(props);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SavedHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc3cvc2F2ZWQtaGFuZGxlci5qcz8yNWE4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNhdmVkSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHN3KSB7XG4gICAgdGhpcy5jYWNoZSA9IHN3LnN0cmF0ZWdpZXMuY2FjaGVGaXJzdCh7XG4gICAgICBjYWNoZU5hbWU6ICdzYXZlZCcsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7RmV0Y2hFdmVudH0gcHJvcHMuZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzLnBhcmFtc1xuICAgKiBAcGFyYW0ge1VSTH0gcHJvcHMudXJsXG4gICAqL1xuICBoYW5kbGUocHJvcHMpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHByb3BzLnVybC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG4gICAgcHJvcHMudXJsID0gdXJsO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCwgcHJvcHMuZXZlbnQucmVxdWVzdCk7XG4gICAgcHJvcHMuZXZlbnQgPSBuZXcgRmV0Y2hFdmVudCgnZmV0Y2gnLCB7IHJlcXVlc3QgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5jYWNoZS5oYW5kbGUocHJvcHMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVkSGFuZGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3cvc2F2ZWQtaGFuZGxlci5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBQ0E7QUF1QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);