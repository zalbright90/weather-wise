/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGif: () => (/* binding */ getGif),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _processCurrentWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./processCurrentWeather */ "./src/processCurrentWeather.js");
/* harmony import */ var _processForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processForecast */ "./src/processForecast.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var visualCrossingKey = 'QFQ59ZMVGLUGMZ8LTTYYK8QPV';
var giphyKey = 'G1GiuZ2UGAyhpKhmE8AMQ3TDiXAEjNbG';
function getWeather(_x) {
  return _getWeather.apply(this, arguments);
}
function _getWeather() {
  _getWeather = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(location) {
    var response, data, currentWeather, forecast, currentCondition, gifUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(location, "?key=").concat(visualCrossingKey));
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          if (!data.currentConditions) {
            console.warn('Unexpected data structure:', data);
          }

          // Process weather data
          currentWeather = (0,_processCurrentWeather__WEBPACK_IMPORTED_MODULE_0__.processCurrentWeather)(data);
          forecast = (0,_processForecast__WEBPACK_IMPORTED_MODULE_1__.processForecast)(data); // Get GIF based on current weather condition
          currentCondition = data.currentConditions.conditions;
          _context.next = 13;
          return getGif(currentCondition);
        case 13:
          gifUrl = _context.sent;
          return _context.abrupt("return", {
            currentWeather: currentWeather,
            forecast: forecast,
            gifUrl: gifUrl
          });
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching weather data:', _context.t0);
          throw _context.t0;
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return _getWeather.apply(this, arguments);
}
function getGif(_x2) {
  return _getGif.apply(this, arguments);
}
function _getGif() {
  _getGif = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(weatherCondition) {
    var url, response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          url = "https://api.giphy.com/v1/gifs/translate?api_key=".concat(giphyKey, "&s=").concat(weatherCondition);
          _context2.prev = 1;
          _context2.next = 4;
          return fetch(url);
        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return response.json();
        case 7:
          data = _context2.sent;
          return _context2.abrupt("return", data.data.images.original.url);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error('Error fetching GIF:', _context2.t0);
          return _context2.abrupt("return", null);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return _getGif.apply(this, arguments);
}


/***/ }),

/***/ "./src/processCurrentWeather.js":
/*!**************************************!*\
  !*** ./src/processCurrentWeather.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processCurrentWeather: () => (/* binding */ processCurrentWeather)
/* harmony export */ });
function processCurrentWeather(data) {
  var currentConditions = data.currentConditions || {};
  return {
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
    windDirection: data.currentConditions.winddir
  };
}

/***/ }),

/***/ "./src/processForecast.js":
/*!********************************!*\
  !*** ./src/processForecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processForecast: () => (/* binding */ processForecast)
/* harmony export */ });
function processForecast(data) {
  var dailyForecast = data.days.slice(0, 7).map(function (day) {
    return {
      date: day.datetime,
      maxTemp: day.tempmax,
      minTemp: day.tempmin,
      conditions: day.conditions || "N/A"
    };
  });
  return dailyForecast;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Base reset and variables */
:root {
    --gunmetal: rgb(41, 47, 54);
    --robin-egg: rgb(78, 205, 196);
    --white: rgb(255, 255, 255);
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.18);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Mobile-first base styles */
body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: var(--white);
    min-height: 100vh;
    padding: 1rem;
    background: linear-gradient(135deg, var(--gunmetal) 0%, var(--robin-egg) 100%);
}

/* Glass container effect */
#app {
    flex: 1;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    background: var(--glass-bg);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border: 1px solid var(--glass-border);
}

/* Form styling */
#locationForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

#locationForm label {
    font-weight: bold;
    color: var(--white);
    font-size: 1.1rem;
}

#locationForm input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid var(--glass-border);
    border-radius: 12px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.05);
    color: var(--white);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

#locationForm input:focus {
    outline: none;
    border-color: var(--robin-egg);
    box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.2);
}

#locationForm input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

#locationForm button {
    width: 100%;
    padding: 0.8rem;
    background-color: var(--robin-egg);
    color: var(--gunmetal);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s ease;
}

#locationForm button:hover {
    background-color: rgba(78, 205, 196, 0.8);
    transform: translateY(-2px);
}

/* Headings */
h1, h2 {
    color: var(--robin-egg);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    border-bottom: 2px solid rgba(78, 205, 196, 0.3);
    padding-bottom: 0.5rem;
}

/* Weather information */
p {
    margin: 0.8rem 0;
    font-size: 1rem;
    color: var(--white);
}

/* Weather GIF styling */
.weather-gif {
    margin: 1.5rem 0;
    text-align: center;
}

.weather-gif img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Forecast sections */
div:has(> h2:contains("Forecast")) div {
    padding: 1rem;
    margin: 1rem 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border-left: 4px solid var(--robin-egg);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

/* Loading overlay */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(41, 47, 54, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

/* Loading spinner */
.loader {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(78, 205, 196, 0.3);
    border-radius: 50%;
    border-top-color: rgb(78, 205, 196);
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto;
}

.loader-text {
    color: rgb(78, 205, 196);
    text-align: center;
    margin-top: 20px;
    font-size: 1.2rem;
}

footer {
    background-color: var(--gunmetal);
    color: var(--white);
    text-align: center;
    padding: 1rem;
    width: 100%;
    margin-top: auto;
    
}

.social-links {
    margin-top: 0.5rem;
}

.social-links a {
    color: var(--robin-egg);
    font-size: 1.5rem;
    transition: color 0.3s ease;
    text-decoration: none;
    margin: 0 0.5rem;
}

.social-links a:hover {
    color: rgba(78, 205, 196, 0.3);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Hide loader by default */
.hidden {
    display: none;
}

/* Desktop styles */
@media (min-width: 768px) {
    body {
        padding: 2rem;
    }

    #app {
        max-width: 800px;
        padding: 2rem;
    }

    h1, h2 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.1rem;
    }

    .weather-gif img {
        max-width: 80%;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,2BAA2B;IAC3B,oCAAoC;IACpC,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA,6BAA6B;AAC7B;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,8EAA8E;AAClF;;AAEA,2BAA2B;AAC3B;IACI,OAAO;IACP,WAAW;IACX,eAAe;IACf,cAAc;IACd,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;IACnB,yCAAyC;IACzC,4BAA4B;IAC5B,oCAAoC;IACpC,qCAAqC;AACzC;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,qCAAqC;IACrC,mBAAmB;IACnB,eAAe;IACf,qCAAqC;IACrC,mBAAmB;IACnB,0BAA0B;IAC1B,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,6CAA6C;AACjD;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kCAAkC;IAClC,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,yCAAyC;IACzC,2BAA2B;AAC/B;;AAEA,aAAa;AACb;IACI,uBAAuB;IACvB,qBAAqB;IACrB,iBAAiB;IACjB,gDAAgD;IAChD,sBAAsB;AAC1B;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,eAAe;IACf,mBAAmB;AACvB;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA,sBAAsB;AACtB;IACI,aAAa;IACb,cAAc;IACd,qCAAqC;IACrC,mBAAmB;IACnB,uCAAuC;IACvC,0BAA0B;IAC1B,kCAAkC;AACtC;;AAEA,oBAAoB;AACpB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,0BAA0B;AAC9B;;AAEA,oBAAoB;AACpB;IACI,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,mCAAmC;IACnC,uCAAuC;IACvC,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,iBAAiB;IACjB,2BAA2B;IAC3B,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI;QACI,yBAAyB;IAC7B;AACJ;;AAEA,2BAA2B;AAC3B;IACI,aAAa;AACjB;;AAEA,mBAAmB;AACnB;IACI;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,aAAa;IACjB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,cAAc;IAClB;AACJ","sourcesContent":["/* Base reset and variables */\n:root {\n    --gunmetal: rgb(41, 47, 54);\n    --robin-egg: rgb(78, 205, 196);\n    --white: rgb(255, 255, 255);\n    --glass-bg: rgba(255, 255, 255, 0.1);\n    --glass-border: rgba(255, 255, 255, 0.18);\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Mobile-first base styles */\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    font-family: Arial, sans-serif;\n    line-height: 1.6;\n    color: var(--white);\n    min-height: 100vh;\n    padding: 1rem;\n    background: linear-gradient(135deg, var(--gunmetal) 0%, var(--robin-egg) 100%);\n}\n\n/* Glass container effect */\n#app {\n    flex: 1;\n    width: 100%;\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 1.5rem;\n    background: var(--glass-bg);\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(8.5px);\n    -webkit-backdrop-filter: blur(8.5px);\n    border: 1px solid var(--glass-border);\n}\n\n/* Form styling */\n#locationForm {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin-bottom: 2rem;\n}\n\n#locationForm label {\n    font-weight: bold;\n    color: var(--white);\n    font-size: 1.1rem;\n}\n\n#locationForm input {\n    width: 100%;\n    padding: 0.8rem;\n    border: 2px solid var(--glass-border);\n    border-radius: 12px;\n    font-size: 1rem;\n    background: rgba(255, 255, 255, 0.05);\n    color: var(--white);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n}\n\n#locationForm input:focus {\n    outline: none;\n    border-color: var(--robin-egg);\n    box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.2);\n}\n\n#locationForm input::placeholder {\n    color: rgba(255, 255, 255, 0.6);\n}\n\n#locationForm button {\n    width: 100%;\n    padding: 0.8rem;\n    background-color: var(--robin-egg);\n    color: var(--gunmetal);\n    border: none;\n    border-radius: 12px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-weight: bold;\n    transition: all 0.3s ease;\n}\n\n#locationForm button:hover {\n    background-color: rgba(78, 205, 196, 0.8);\n    transform: translateY(-2px);\n}\n\n/* Headings */\nh1, h2 {\n    color: var(--robin-egg);\n    margin-bottom: 1.5rem;\n    font-size: 1.5rem;\n    border-bottom: 2px solid rgba(78, 205, 196, 0.3);\n    padding-bottom: 0.5rem;\n}\n\n/* Weather information */\np {\n    margin: 0.8rem 0;\n    font-size: 1rem;\n    color: var(--white);\n}\n\n/* Weather GIF styling */\n.weather-gif {\n    margin: 1.5rem 0;\n    text-align: center;\n}\n\n.weather-gif img {\n    max-width: 100%;\n    height: auto;\n    border-radius: 16px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\n/* Forecast sections */\ndiv:has(> h2:contains(\"Forecast\")) div {\n    padding: 1rem;\n    margin: 1rem 0;\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 12px;\n    border-left: 4px solid var(--robin-egg);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n}\n\n/* Loading overlay */\n.loading-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(41, 47, 54, 0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n    backdrop-filter: blur(5px);\n}\n\n/* Loading spinner */\n.loader {\n    width: 50px;\n    height: 50px;\n    border: 5px solid rgba(78, 205, 196, 0.3);\n    border-radius: 50%;\n    border-top-color: rgb(78, 205, 196);\n    animation: spin 1s ease-in-out infinite;\n    margin: 0 auto;\n}\n\n.loader-text {\n    color: rgb(78, 205, 196);\n    text-align: center;\n    margin-top: 20px;\n    font-size: 1.2rem;\n}\n\nfooter {\n    background-color: var(--gunmetal);\n    color: var(--white);\n    text-align: center;\n    padding: 1rem;\n    width: 100%;\n    margin-top: auto;\n    \n}\n\n.social-links {\n    margin-top: 0.5rem;\n}\n\n.social-links a {\n    color: var(--robin-egg);\n    font-size: 1.5rem;\n    transition: color 0.3s ease;\n    text-decoration: none;\n    margin: 0 0.5rem;\n}\n\n.social-links a:hover {\n    color: rgba(78, 205, 196, 0.3);\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n/* Hide loader by default */\n.hidden {\n    display: none;\n}\n\n/* Desktop styles */\n@media (min-width: 768px) {\n    body {\n        padding: 2rem;\n    }\n\n    #app {\n        max-width: 800px;\n        padding: 2rem;\n    }\n\n    h1, h2 {\n        font-size: 1.8rem;\n    }\n\n    p {\n        font-size: 1.1rem;\n    }\n\n    .weather-gif img {\n        max-width: 80%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/api.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var appContainer = document.querySelector('#app');
function createLoadingOverlay() {
  var overlay = document.createElement('div');
  overlay.className = 'loading-overlay hidden';
  var loaderContainer = document.createElement('div');
  loaderContainer.style.textAlign = 'center';
  var loader = document.createElement('div');
  loader.className = 'loader';
  var text = document.createElement('div');
  text.className = 'loader-text';
  text.textContent = 'Consulting the cloud whisperers... or maybe just a squirrel. Stay tuned!';
  loaderContainer.appendChild(loader);
  loaderContainer.appendChild(text);
  overlay.appendChild(loaderContainer);
  document.body.appendChild(overlay);
  return overlay;
}
var loadingOverlay = createLoadingOverlay();
function showLoading() {
  loadingOverlay.classList.remove('hidden');
}
function hideLoading() {
  loadingOverlay.classList.add('hidden');
}
function createLocationForm() {
  if (document.querySelector('#locationForm')) return;
  var form = document.createElement('form');
  form.id = 'locationForm';
  var label = document.createElement('label');
  label.setAttribute('for', 'location');
  label.textContent = 'Enter location: ';
  var input = document.createElement('input');
  input.type = 'text';
  input.id = 'location';
  input.name = 'location';
  input.required = true;
  var submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Get Weather';
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(submitBtn);
  appContainer.appendChild(form);
  form.addEventListener('submit', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var location, weatherData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            location = input.value.trim();
            if (!location) {
              _context.next = 18;
              break;
            }
            showLoading();
            _context.prev = 4;
            _context.next = 7;
            return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location);
          case 7:
            weatherData = _context.sent;
            displayWeatherData(weatherData);
            _context.next = 15;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            console.error('Error fetching weather: ', _context.t0);
            appContainer.innerHTML = "\n                <div style=\"color: #ff6b6b; padding: 20px; text-align: center;\">\n                    Unable to find weather data. Please try again.\n                </div>\n                ";
          case 15:
            _context.prev = 15;
            hideLoading();
            return _context.finish(15);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11, 15, 18]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}
function displayWeatherData(_ref2) {
  var currentWeather = _ref2.currentWeather,
    forecast = _ref2.forecast;
  appContainer.innerHTML = '';
  var currentWeatherDiv = document.createElement('div');
  currentWeatherDiv.innerHTML = "\n        <h2>Current Weather</h2>\n        <p>Temperature: ".concat(currentWeather.temperature, "\xB0F</p>\n        <p>Conditions: ").concat(currentWeather.conditions, "</p>\n        <p>Humidity: ").concat(currentWeather.humidity, "%</p>\n        <p>Wind Speed: ").concat(currentWeather.windSpeed, " mp/h</p>\n        <p>Wind Direction: ").concat(currentWeather.windDirection, "\xB0</p>\n        <div class=\"weather-gif\"></div>\n    ");
  var forecastDiv = document.createElement('div');
  forecastDiv.innerHTML = '<h2>Forecast</h2>';
  forecast.forEach(function (day) {
    var dayDiv = document.createElement('div');
    dayDiv.innerHTML = "\n        <p><strong>Date:</strong> ".concat(day.date, "</p>\n        <p><strong>Max Temp:</strong> ").concat(day.maxTemp, "\xB0F</p>\n        <p><strong>Min Temp:</strong> ").concat(day.minTemp, "\xB0F</p>\n        <p><strong>Conditions:</strong> ").concat(day.conditions, "</p>\n        <hr>\n        ");
    forecastDiv.appendChild(dayDiv);
  });
  appContainer.appendChild(currentWeatherDiv);
  appContainer.appendChild(forecastDiv);
  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getGif)(currentWeather.conditions).then(function (gifUrl) {
    if (gifUrl) {
      var gifContainer = currentWeatherDiv.querySelector('.weather-gif');
      gifContainer.innerHTML = "<img src=\"".concat(gifUrl, "\" alt=\"Weather conditions visualization\">");
    }
  });
}
createLocationForm();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map