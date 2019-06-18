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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/currencies.js":
/*!***************************!*\
  !*** ./src/currencies.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  AED: {
    symbol: "AED",
    thousand: ",",
    precision: 2,
    decimal: ".",
    symbolFirst: true,
    symbolSeparator: " "
  },
  BRL: {
    symbol: "R$",
    thousand: ".",
    precision: 2,
    decimal: ",",
    symbolFirst: true,
    symbolSeparator: " "
  },
  EUR: {
    symbol: "€",
    thousand: ",",
    precision: 2,
    decimal: ".",
    symbolFirst: true,
    symbolSeparator: " "
  },
  GBP: {
    symbol: "£",
    thousand: ",",
    precision: 2,
    decimal: ".",
    symbolFirst: true,
    symbolSeparator: " "
  },
  TRY: {
    symbol: "TRY",
    thousand: ",",
    precision: 2,
    decimal: ".",
    symbolFirst: true,
    symbolSeparator: " "
  },
  USD: {
    symbol: "$",
    thousand: ",",
    precision: 2,
    decimal: ".",
    symbolFirst: true,
    symbolSeparator: " "
  }
});

/***/ }),

/***/ "./src/formatMoney.js":
/*!****************************!*\
  !*** ./src/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultCurrency = {
  format: "%s%v",
  symbol: "$",
  precision: 2,
  thousand: ",",
  decimal: "."
};

var formatNumber = function formatNumber(number, precision, thousand, decimal) {
  number = Math.abs(number || 0);
  var numberFixed = number.toFixed(precision);
  var negative = number < 0 ? "-" : "";
  var base = String(parseInt(numberFixed, 10));
  var mod = base.length > 3 ? base.length % 3 : 0;
  return negative + (mod ? base.substr(0, mod) + thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1".concat(thousand)) + decimal + numberFixed.split(".")[1];
};

var formatMoney = function formatMoney(number) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  number = Number.parseFloat(number);
  var options = Object.assign(defaultCurrency, params);
  var formattedNumber = formatNumber(number, options.precision, options.thousand, options.decimal);
  return options.format.replace("%s", options.symbol).replace("%v", formattedNumber);
};

/* harmony default export */ __webpack_exports__["default"] = (formatMoney);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencies */ "./src/currencies.js");
/* harmony import */ var _masker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masker */ "./src/masker.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Currency = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultConfig = {
      code: "",
      symbol: "$",
      thousand: ",",
      precision: 2,
      decimal: ".",
      symbolFirst: true,
      symbolSeparator: " "
    };
    var configs = Object.assign(defaultConfig, options);

    var currencyFilter = function currencyFilter(value) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      configs = Object.assign(params, configs);
      return Object(_masker__WEBPACK_IMPORTED_MODULE_1__["default"])(value, configs);
    };

    Vue.filter("currency", currencyFilter);
    Vue.prototype.$currency = Vue.currency = {
      setConfig: function setConfig(code) {
        var options = _objectSpread({
          code: code
        }, _currencies__WEBPACK_IMPORTED_MODULE_0__["default"][code]);

        configs = Object.assign(defaultConfig, options);
      },
      getConfig: function getConfig() {
        return configs;
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Currency);

/***/ }),

/***/ "./src/masker.js":
/*!***********************!*\
  !*** ./src/masker.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatMoney__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatMoney */ "./src/formatMoney.js");

/* harmony default export */ __webpack_exports__["default"] = (function (value, _ref) {
  var symbol = _ref.symbol,
      thousand = _ref.thousand,
      precision = _ref.precision,
      decimal = _ref.decimal,
      symbolFirst = _ref.symbolFirst,
      symbolSeparator = _ref.symbolSeparator;
  var result = 0.0;
  var isNegative = String(value).charAt(0) === "-";

  if (isNegative) {
    value = String(value).slice(1);
  }

  var amount = parseFloat(value);

  if (!isNaN(amount)) {
    result = amount;
  }

  var format = symbolFirst ? "%s".concat(symbolSeparator, "%v") : "%v".concat(symbolSeparator, "%s");
  result = Object(_formatMoney__WEBPACK_IMPORTED_MODULE_0__["default"])(value, {
    format: format,
    symbol: symbol,
    precision: precision,
    thousand: thousand,
    decimal: decimal
  });

  if (isNegative) {
    result = "-".concat(result);
  }

  return result;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnJlbmNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFza2VyLmpzIl0sIm5hbWVzIjpbIkFFRCIsInN5bWJvbCIsInRob3VzYW5kIiwicHJlY2lzaW9uIiwiZGVjaW1hbCIsInN5bWJvbEZpcnN0Iiwic3ltYm9sU2VwYXJhdG9yIiwiQlJMIiwiRVVSIiwiR0JQIiwiVFJZIiwiVVNEIiwiZGVmYXVsdEN1cnJlbmN5IiwiZm9ybWF0IiwiZm9ybWF0TnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsImFicyIsIm51bWJlckZpeGVkIiwidG9GaXhlZCIsIm5lZ2F0aXZlIiwiYmFzZSIsIlN0cmluZyIsInBhcnNlSW50IiwibW9kIiwibGVuZ3RoIiwic3Vic3RyIiwicmVwbGFjZSIsInNwbGl0IiwiZm9ybWF0TW9uZXkiLCJwYXJhbXMiLCJOdW1iZXIiLCJwYXJzZUZsb2F0Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImZvcm1hdHRlZE51bWJlciIsIkN1cnJlbmN5IiwiaW5zdGFsbCIsIlZ1ZSIsImRlZmF1bHRDb25maWciLCJjb2RlIiwiY29uZmlncyIsImN1cnJlbmN5RmlsdGVyIiwidmFsdWUiLCJtYXNrZXIiLCJmaWx0ZXIiLCJwcm90b3R5cGUiLCIkY3VycmVuY3kiLCJjdXJyZW5jeSIsInNldENvbmZpZyIsImN1cnJlbmNpZXMiLCJnZXRDb25maWciLCJyZXN1bHQiLCJpc05lZ2F0aXZlIiwiY2hhckF0Iiwic2xpY2UiLCJhbW91bnQiLCJpc05hTiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FB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UUFEREEsTUFDQztBQUFBLE1BRE9DLFFBQ1AsUUFET0EsUUFDUDtBQUFBLE1BRGlCQyxTQUNqQixRQURpQkEsU0FDakI7QUFBQSxNQUQ0QkMsT0FDNUIsUUFENEJBLE9BQzVCO0FBQUEsTUFEcUNDLFdBQ3JDLFFBRHFDQSxXQUNyQztBQUFBLE1BRGtEQyxlQUNsRCxRQURrREEsZUFDbEQ7QUFDSCxNQUFJK0MsTUFBTSxHQUFHLEdBQWI7QUFFQSxNQUFNQyxVQUFVLEdBQUdoQyxNQUFNLENBQUNzQixLQUFELENBQU4sQ0FBY1csTUFBZCxDQUFxQixDQUFyQixNQUE0QixHQUEvQzs7QUFFQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ2RWLFNBQUssR0FBR3RCLE1BQU0sQ0FBQ3NCLEtBQUQsQ0FBTixDQUFjWSxLQUFkLENBQW9CLENBQXBCLENBQVI7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUd6QixVQUFVLENBQUNZLEtBQUQsQ0FBekI7O0FBRUEsTUFBSSxDQUFDYyxLQUFLLENBQUNELE1BQUQsQ0FBVixFQUFvQjtBQUNsQkosVUFBTSxHQUFHSSxNQUFUO0FBQ0Q7O0FBRUQsTUFBTTVDLE1BQU0sR0FBR1IsV0FBVyxlQUNqQkMsZUFEaUIsc0JBRWpCQSxlQUZpQixPQUExQjtBQUlBK0MsUUFBTSxHQUFHeEIsNERBQVcsQ0FBQ2UsS0FBRCxFQUFRO0FBQzFCL0IsVUFBTSxFQUFOQSxNQUQwQjtBQUUxQlosVUFBTSxFQUFOQSxNQUYwQjtBQUcxQkUsYUFBUyxFQUFUQSxTQUgwQjtBQUkxQkQsWUFBUSxFQUFSQSxRQUowQjtBQUsxQkUsV0FBTyxFQUFQQTtBQUwwQixHQUFSLENBQXBCOztBQVFBLE1BQUlrRCxVQUFKLEVBQWdCO0FBQ2RELFVBQU0sY0FBT0EsTUFBUCxDQUFOO0FBQ0Q7O0FBRUQsU0FBT0EsTUFBUDtBQUNELENBbkNELEUiLCJmaWxlIjoidnVlLWN1cnJlbmN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIEFFRDoge1xuICAgIHN5bWJvbDogXCJBRURcIixcbiAgICB0aG91c2FuZDogXCIsXCIsXG4gICAgcHJlY2lzaW9uOiAyLFxuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHN5bWJvbEZpcnN0OiB0cnVlLFxuICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgfSxcbiAgQlJMOiB7XG4gICAgc3ltYm9sOiBcIlIkXCIsXG4gICAgdGhvdXNhbmQ6IFwiLlwiLFxuICAgIHByZWNpc2lvbjogMixcbiAgICBkZWNpbWFsOiBcIixcIixcbiAgICBzeW1ib2xGaXJzdDogdHJ1ZSxcbiAgICBzeW1ib2xTZXBhcmF0b3I6IFwiIFwiXG4gIH0sXG4gIEVVUjoge1xuICAgIHN5bWJvbDogXCLigqxcIixcbiAgICB0aG91c2FuZDogXCIsXCIsXG4gICAgcHJlY2lzaW9uOiAyLFxuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHN5bWJvbEZpcnN0OiB0cnVlLFxuICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgfSxcbiAgR0JQOiB7XG4gICAgc3ltYm9sOiBcIsKjXCIsXG4gICAgdGhvdXNhbmQ6IFwiLFwiLFxuICAgIHByZWNpc2lvbjogMixcbiAgICBkZWNpbWFsOiBcIi5cIixcbiAgICBzeW1ib2xGaXJzdDogdHJ1ZSxcbiAgICBzeW1ib2xTZXBhcmF0b3I6IFwiIFwiXG4gIH0sXG4gIFRSWToge1xuICAgIHN5bWJvbDogXCJUUllcIixcbiAgICB0aG91c2FuZDogXCIsXCIsXG4gICAgcHJlY2lzaW9uOiAyLFxuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHN5bWJvbEZpcnN0OiB0cnVlLFxuICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgfSxcbiAgVVNEOiB7XG4gICAgc3ltYm9sOiBcIiRcIixcbiAgICB0aG91c2FuZDogXCIsXCIsXG4gICAgcHJlY2lzaW9uOiAyLFxuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHN5bWJvbEZpcnN0OiB0cnVlLFxuICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgfVxufTtcbiIsImNvbnN0IGRlZmF1bHRDdXJyZW5jeSA9IHtcbiAgZm9ybWF0OiBcIiVzJXZcIixcbiAgc3ltYm9sOiBcIiRcIixcbiAgcHJlY2lzaW9uOiAyLFxuICB0aG91c2FuZDogXCIsXCIsXG4gIGRlY2ltYWw6IFwiLlwiXG59O1xuXG5jb25zdCBmb3JtYXROdW1iZXIgPSAobnVtYmVyLCBwcmVjaXNpb24sIHRob3VzYW5kLCBkZWNpbWFsKSA9PiB7XG4gIG51bWJlciA9IE1hdGguYWJzKG51bWJlciB8fCAwKTtcblxuICBjb25zdCBudW1iZXJGaXhlZCA9IG51bWJlci50b0ZpeGVkKHByZWNpc2lvbik7XG4gIGNvbnN0IG5lZ2F0aXZlID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3QgYmFzZSA9IFN0cmluZyhwYXJzZUludChudW1iZXJGaXhlZCwgMTApKTtcbiAgY29uc3QgbW9kID0gYmFzZS5sZW5ndGggPiAzID8gYmFzZS5sZW5ndGggJSAzIDogMDtcblxuICByZXR1cm4gKFxuICAgIG5lZ2F0aXZlICtcbiAgICAobW9kID8gYmFzZS5zdWJzdHIoMCwgbW9kKSArIHRob3VzYW5kIDogXCJcIikgK1xuICAgIGJhc2Uuc3Vic3RyKG1vZCkucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIGAkMSR7dGhvdXNhbmR9YCkgK1xuICAgIGRlY2ltYWwgK1xuICAgIG51bWJlckZpeGVkLnNwbGl0KFwiLlwiKVsxXVxuICApO1xufTtcblxuY29uc3QgZm9ybWF0TW9uZXkgPSAobnVtYmVyLCBwYXJhbXMgPSB7fSkgPT4ge1xuICBudW1iZXIgPSBOdW1iZXIucGFyc2VGbG9hdChudW1iZXIpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDdXJyZW5jeSwgcGFyYW1zKTtcbiAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gZm9ybWF0TnVtYmVyKFxuICAgIG51bWJlcixcbiAgICBvcHRpb25zLnByZWNpc2lvbixcbiAgICBvcHRpb25zLnRob3VzYW5kLFxuICAgIG9wdGlvbnMuZGVjaW1hbFxuICApO1xuXG4gIHJldHVybiBvcHRpb25zLmZvcm1hdFxuICAgIC5yZXBsYWNlKFwiJXNcIiwgb3B0aW9ucy5zeW1ib2wpXG4gICAgLnJlcGxhY2UoXCIldlwiLCBmb3JtYXR0ZWROdW1iZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TW9uZXk7XG4iLCJpbXBvcnQgY3VycmVuY2llcyBmcm9tIFwiLi9jdXJyZW5jaWVzXCI7XG5pbXBvcnQgbWFza2VyIGZyb20gXCIuL21hc2tlclwiO1xuXG5jb25zdCBDdXJyZW5jeSA9IHtcbiAgaW5zdGFsbChWdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICBjb2RlOiBcIlwiLFxuICAgICAgc3ltYm9sOiBcIiRcIixcbiAgICAgIHRob3VzYW5kOiBcIixcIixcbiAgICAgIHByZWNpc2lvbjogMixcbiAgICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgICAgc3ltYm9sRmlyc3Q6IHRydWUsXG4gICAgICBzeW1ib2xTZXBhcmF0b3I6IFwiIFwiXG4gICAgfTtcblxuICAgIGxldCBjb25maWdzID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCBvcHRpb25zKTtcblxuICAgIGNvbnN0IGN1cnJlbmN5RmlsdGVyID0gKHZhbHVlLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgICAgY29uZmlncyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCBjb25maWdzKTtcbiAgICAgIHJldHVybiBtYXNrZXIodmFsdWUsIGNvbmZpZ3MpO1xuICAgIH07XG5cbiAgICBWdWUuZmlsdGVyKFwiY3VycmVuY3lcIiwgY3VycmVuY3lGaWx0ZXIpO1xuXG4gICAgVnVlLnByb3RvdHlwZS4kY3VycmVuY3kgPSBWdWUuY3VycmVuY3kgPSB7XG4gICAgICBzZXRDb25maWc6IGNvZGUgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0geyBjb2RlLCAuLi5jdXJyZW5jaWVzW2NvZGVdIH07XG4gICAgICAgIGNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIG9wdGlvbnMpO1xuICAgICAgfSxcbiAgICAgIGdldENvbmZpZzogKCkgPT4gY29uZmlnc1xuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbmN5O1xuIiwiaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gXCIuL2Zvcm1hdE1vbmV5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgdmFsdWUsXG4gIHsgc3ltYm9sLCB0aG91c2FuZCwgcHJlY2lzaW9uLCBkZWNpbWFsLCBzeW1ib2xGaXJzdCwgc3ltYm9sU2VwYXJhdG9yIH1cbikgPT4ge1xuICBsZXQgcmVzdWx0ID0gMC4wO1xuXG4gIGNvbnN0IGlzTmVnYXRpdmUgPSBTdHJpbmcodmFsdWUpLmNoYXJBdCgwKSA9PT0gXCItXCI7XG5cbiAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSkuc2xpY2UoMSk7XG4gIH1cblxuICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICBpZiAoIWlzTmFOKGFtb3VudCkpIHtcbiAgICByZXN1bHQgPSBhbW91bnQ7XG4gIH1cblxuICBjb25zdCBmb3JtYXQgPSBzeW1ib2xGaXJzdFxuICAgID8gYCVzJHtzeW1ib2xTZXBhcmF0b3J9JXZgXG4gICAgOiBgJXYke3N5bWJvbFNlcGFyYXRvcn0lc2A7XG5cbiAgcmVzdWx0ID0gZm9ybWF0TW9uZXkodmFsdWUsIHtcbiAgICBmb3JtYXQsXG4gICAgc3ltYm9sLFxuICAgIHByZWNpc2lvbixcbiAgICB0aG91c2FuZCxcbiAgICBkZWNpbWFsXG4gIH0pO1xuXG4gIGlmIChpc05lZ2F0aXZlKSB7XG4gICAgcmVzdWx0ID0gYC0ke3Jlc3VsdH1gO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9