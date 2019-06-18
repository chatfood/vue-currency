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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1cnJlbmNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFza2VyLmpzIl0sIm5hbWVzIjpbIkFFRCIsInN5bWJvbCIsInRob3VzYW5kIiwicHJlY2lzaW9uIiwiZGVjaW1hbCIsInN5bWJvbEZpcnN0Iiwic3ltYm9sU2VwYXJhdG9yIiwiQlJMIiwiRVVSIiwiR0JQIiwiVFJZIiwiVVNEIiwiZGVmYXVsdEN1cnJlbmN5IiwiZm9ybWF0IiwiZm9ybWF0TnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsImFicyIsIm51bWJlckZpeGVkIiwidG9GaXhlZCIsIm5lZ2F0aXZlIiwiYmFzZSIsIlN0cmluZyIsInBhcnNlSW50IiwibW9kIiwibGVuZ3RoIiwic3Vic3RyIiwicmVwbGFjZSIsInNwbGl0IiwiZm9ybWF0TW9uZXkiLCJwYXJhbXMiLCJOdW1iZXIiLCJwYXJzZUZsb2F0Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImZvcm1hdHRlZE51bWJlciIsIkN1cnJlbmN5IiwiaW5zdGFsbCIsIlZ1ZSIsImRlZmF1bHRDb25maWciLCJjb2RlIiwiY29uZmlncyIsImN1cnJlbmN5RmlsdGVyIiwidmFsdWUiLCJtYXNrZXIiLCJmaWx0ZXIiLCJwcm90b3R5cGUiLCIkY3VycmVuY3kiLCJjdXJyZW5jeSIsInNldENvbmZpZyIsImN1cnJlbmNpZXMiLCJnZXRDb25maWciLCJyZXN1bHQiLCJpc05lZ2F0aXZlIiwiY2hhckF0Iiwic2xpY2UiLCJhbW91bnQiLCJpc05hTiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlO0FBQ2JBLEtBQUcsRUFBRTtBQUNIQyxVQUFNLEVBQUUsS0FETDtBQUVIQyxZQUFRLEVBQUUsR0FGUDtBQUdIQyxhQUFTLEVBQUUsQ0FIUjtBQUlIQyxXQUFPLEVBQUUsR0FKTjtBQUtIQyxlQUFXLEVBQUUsSUFMVjtBQU1IQyxtQkFBZSxFQUFFO0FBTmQsR0FEUTtBQVNiQyxLQUFHLEVBQUU7QUFDSE4sVUFBTSxFQUFFLElBREw7QUFFSEMsWUFBUSxFQUFFLEdBRlA7QUFHSEMsYUFBUyxFQUFFLENBSFI7QUFJSEMsV0FBTyxFQUFFLEdBSk47QUFLSEMsZUFBVyxFQUFFLElBTFY7QUFNSEMsbUJBQWUsRUFBRTtBQU5kLEdBVFE7QUFpQmJFLEtBQUcsRUFBRTtBQUNIUCxVQUFNLEVBQUUsR0FETDtBQUVIQyxZQUFRLEVBQUUsR0FGUDtBQUdIQyxhQUFTLEVBQUUsQ0FIUjtBQUlIQyxXQUFPLEVBQUUsR0FKTjtBQUtIQyxlQUFXLEVBQUUsSUFMVjtBQU1IQyxtQkFBZSxFQUFFO0FBTmQsR0FqQlE7QUF5QmJHLEtBQUcsRUFBRTtBQUNIUixVQUFNLEVBQUUsR0FETDtBQUVIQyxZQUFRLEVBQUUsR0FGUDtBQUdIQyxhQUFTLEVBQUUsQ0FIUjtBQUlIQyxXQUFPLEVBQUUsR0FKTjtBQUtIQyxlQUFXLEVBQUUsSUFMVjtBQU1IQyxtQkFBZSxFQUFFO0FBTmQsR0F6QlE7QUFpQ2JJLEtBQUcsRUFBRTtBQUNIVCxVQUFNLEVBQUUsS0FETDtBQUVIQyxZQUFRLEVBQUUsR0FGUDtBQUdIQyxhQUFTLEVBQUUsQ0FIUjtBQUlIQyxXQUFPLEVBQUUsR0FKTjtBQUtIQyxlQUFXLEVBQUUsSUFMVjtBQU1IQyxtQkFBZSxFQUFFO0FBTmQsR0FqQ1E7QUF5Q2JLLEtBQUcsRUFBRTtBQUNIVixVQUFNLEVBQUUsR0FETDtBQUVIQyxZQUFRLEVBQUUsR0FGUDtBQUdIQyxhQUFTLEVBQUUsQ0FIUjtBQUlIQyxXQUFPLEVBQUUsR0FKTjtBQUtIQyxlQUFXLEVBQUUsSUFMVjtBQU1IQyxtQkFBZSxFQUFFO0FBTmQ7QUF6Q1EsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLElBQU1NLGVBQWUsR0FBRztBQUN0QkMsUUFBTSxFQUFFLE1BRGM7QUFFdEJaLFFBQU0sRUFBRSxHQUZjO0FBR3RCRSxXQUFTLEVBQUUsQ0FIVztBQUl0QkQsVUFBUSxFQUFFLEdBSlk7QUFLdEJFLFNBQU8sRUFBRTtBQUxhLENBQXhCOztBQVFBLElBQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBU1osU0FBVCxFQUFvQkQsUUFBcEIsRUFBOEJFLE9BQTlCLEVBQTBDO0FBQzdEVyxRQUFNLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixNQUFNLElBQUksQ0FBbkIsQ0FBVDtBQUVBLE1BQU1HLFdBQVcsR0FBR0gsTUFBTSxDQUFDSSxPQUFQLENBQWVoQixTQUFmLENBQXBCO0FBQ0EsTUFBTWlCLFFBQVEsR0FBR0wsTUFBTSxHQUFHLENBQVQsR0FBYSxHQUFiLEdBQW1CLEVBQXBDO0FBQ0EsTUFBTU0sSUFBSSxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0wsV0FBRCxFQUFjLEVBQWQsQ0FBVCxDQUFuQjtBQUNBLE1BQU1NLEdBQUcsR0FBR0gsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBZCxHQUFrQkosSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBaEMsR0FBb0MsQ0FBaEQ7QUFFQSxTQUNFTCxRQUFRLElBQ1BJLEdBQUcsR0FBR0gsSUFBSSxDQUFDSyxNQUFMLENBQVksQ0FBWixFQUFlRixHQUFmLElBQXNCdEIsUUFBekIsR0FBb0MsRUFEaEMsQ0FBUixHQUVBbUIsSUFBSSxDQUFDSyxNQUFMLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQXlCLGdCQUF6QixjQUFnRHpCLFFBQWhELEVBRkEsR0FHQUUsT0FIQSxHQUlBYyxXQUFXLENBQUNVLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsQ0FMRjtBQU9ELENBZkQ7O0FBaUJBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNkLE1BQUQsRUFBeUI7QUFBQSxNQUFoQmUsTUFBZ0IsdUVBQVAsRUFBTztBQUMzQ2YsUUFBTSxHQUFHZ0IsTUFBTSxDQUFDQyxVQUFQLENBQWtCakIsTUFBbEIsQ0FBVDtBQUVBLE1BQU1rQixPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjdkIsZUFBZCxFQUErQmtCLE1BQS9CLENBQWhCO0FBQ0EsTUFBTU0sZUFBZSxHQUFHdEIsWUFBWSxDQUNsQ0MsTUFEa0MsRUFFbENrQixPQUFPLENBQUM5QixTQUYwQixFQUdsQzhCLE9BQU8sQ0FBQy9CLFFBSDBCLEVBSWxDK0IsT0FBTyxDQUFDN0IsT0FKMEIsQ0FBcEM7QUFPQSxTQUFPNkIsT0FBTyxDQUFDcEIsTUFBUixDQUNKYyxPQURJLENBQ0ksSUFESixFQUNVTSxPQUFPLENBQUNoQyxNQURsQixFQUVKMEIsT0FGSSxDQUVJLElBRkosRUFFVVMsZUFGVixDQUFQO0FBR0QsQ0FkRDs7QUFnQmVQLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUVBLElBQU1RLFFBQVEsR0FBRztBQUNmQyxTQURlLG1CQUNQQyxHQURPLEVBQ1k7QUFBQSxRQUFkTixPQUFjLHVFQUFKLEVBQUk7QUFDekIsUUFBTU8sYUFBYSxHQUFHO0FBQ3BCQyxVQUFJLEVBQUUsRUFEYztBQUVwQnhDLFlBQU0sRUFBRSxHQUZZO0FBR3BCQyxjQUFRLEVBQUUsR0FIVTtBQUlwQkMsZUFBUyxFQUFFLENBSlM7QUFLcEJDLGFBQU8sRUFBRSxHQUxXO0FBTXBCQyxpQkFBVyxFQUFFLElBTk87QUFPcEJDLHFCQUFlLEVBQUU7QUFQRyxLQUF0QjtBQVVBLFFBQUlvQyxPQUFPLEdBQUdSLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSyxhQUFkLEVBQTZCUCxPQUE3QixDQUFkOztBQUVBLFFBQU1VLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUF3QjtBQUFBLFVBQWhCZCxNQUFnQix1RUFBUCxFQUFPO0FBQzdDWSxhQUFPLEdBQUdSLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxNQUFkLEVBQXNCWSxPQUF0QixDQUFWO0FBQ0EsYUFBT0csdURBQU0sQ0FBQ0QsS0FBRCxFQUFRRixPQUFSLENBQWI7QUFDRCxLQUhEOztBQUtBSCxPQUFHLENBQUNPLE1BQUosQ0FBVyxVQUFYLEVBQXVCSCxjQUF2QjtBQUVBSixPQUFHLENBQUNRLFNBQUosQ0FBY0MsU0FBZCxHQUEwQlQsR0FBRyxDQUFDVSxRQUFKLEdBQWU7QUFDdkNDLGVBQVMsRUFBRSxtQkFBQVQsSUFBSSxFQUFJO0FBQ2pCLFlBQU1SLE9BQU87QUFBS1EsY0FBSSxFQUFKQTtBQUFMLFdBQWNVLG1EQUFVLENBQUNWLElBQUQsQ0FBeEIsQ0FBYjs7QUFDQUMsZUFBTyxHQUFHUixNQUFNLENBQUNDLE1BQVAsQ0FBY0ssYUFBZCxFQUE2QlAsT0FBN0IsQ0FBVjtBQUNELE9BSnNDO0FBS3ZDbUIsZUFBUyxFQUFFO0FBQUEsZUFBTVYsT0FBTjtBQUFBO0FBTDRCLEtBQXpDO0FBT0Q7QUE1QmMsQ0FBakI7QUErQmVMLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFFZSx5RUFDYk8sS0FEYSxRQUdWO0FBQUEsTUFERDNDLE1BQ0MsUUFEREEsTUFDQztBQUFBLE1BRE9DLFFBQ1AsUUFET0EsUUFDUDtBQUFBLE1BRGlCQyxTQUNqQixRQURpQkEsU0FDakI7QUFBQSxNQUQ0QkMsT0FDNUIsUUFENEJBLE9BQzVCO0FBQUEsTUFEcUNDLFdBQ3JDLFFBRHFDQSxXQUNyQztBQUFBLE1BRGtEQyxlQUNsRCxRQURrREEsZUFDbEQ7QUFDSCxNQUFJK0MsTUFBTSxHQUFHLEdBQWI7QUFFQSxNQUFNQyxVQUFVLEdBQUdoQyxNQUFNLENBQUNzQixLQUFELENBQU4sQ0FBY1csTUFBZCxDQUFxQixDQUFyQixNQUE0QixHQUEvQzs7QUFFQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ2RWLFNBQUssR0FBR3RCLE1BQU0sQ0FBQ3NCLEtBQUQsQ0FBTixDQUFjWSxLQUFkLENBQW9CLENBQXBCLENBQVI7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUd6QixVQUFVLENBQUNZLEtBQUQsQ0FBekI7O0FBRUEsTUFBSSxDQUFDYyxLQUFLLENBQUNELE1BQUQsQ0FBVixFQUFvQjtBQUNsQkosVUFBTSxHQUFHSSxNQUFUO0FBQ0Q7O0FBRUQsTUFBTTVDLE1BQU0sR0FBR1IsV0FBVyxlQUNqQkMsZUFEaUIsc0JBRWpCQSxlQUZpQixPQUExQjtBQUlBK0MsUUFBTSxHQUFHeEIsNERBQVcsQ0FBQ2UsS0FBRCxFQUFRO0FBQzFCL0IsVUFBTSxFQUFOQSxNQUQwQjtBQUUxQlosVUFBTSxFQUFOQSxNQUYwQjtBQUcxQkUsYUFBUyxFQUFUQSxTQUgwQjtBQUkxQkQsWUFBUSxFQUFSQSxRQUowQjtBQUsxQkUsV0FBTyxFQUFQQTtBQUwwQixHQUFSLENBQXBCOztBQVFBLE1BQUlrRCxVQUFKLEVBQWdCO0FBQ2RELFVBQU0sY0FBT0EsTUFBUCxDQUFOO0FBQ0Q7O0FBRUQsU0FBT0EsTUFBUDtBQUNELENBbkNELEUiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgQUVEOiB7XG4gICAgc3ltYm9sOiBcIkFFRFwiLFxuICAgIHRob3VzYW5kOiBcIixcIixcbiAgICBwcmVjaXNpb246IDIsXG4gICAgZGVjaW1hbDogXCIuXCIsXG4gICAgc3ltYm9sRmlyc3Q6IHRydWUsXG4gICAgc3ltYm9sU2VwYXJhdG9yOiBcIiBcIlxuICB9LFxuICBCUkw6IHtcbiAgICBzeW1ib2w6IFwiUiRcIixcbiAgICB0aG91c2FuZDogXCIuXCIsXG4gICAgcHJlY2lzaW9uOiAyLFxuICAgIGRlY2ltYWw6IFwiLFwiLFxuICAgIHN5bWJvbEZpcnN0OiB0cnVlLFxuICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgfSxcbiAgRVVSOiB7XG4gICAgc3ltYm9sOiBcIuKCrFwiLFxuICAgIHRob3VzYW5kOiBcIixcIixcbiAgICBwcmVjaXNpb246IDIsXG4gICAgZGVjaW1hbDogXCIuXCIsXG4gICAgc3ltYm9sRmlyc3Q6IHRydWUsXG4gICAgc3ltYm9sU2VwYXJhdG9yOiBcIiBcIlxuICB9LFxuICBHQlA6IHtcbiAgICBzeW1ib2w6IFwiwqNcIixcbiAgICB0aG91c2FuZDogXCIsXCIsXG4gICAgcHJlY2lzaW9uOiAyLFxuICAgIGRlY2ltYWw6IFwiLlwiLFxuICAgIHN5bWJvbEZpcnN0OiB0cnVlLFxuICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgfSxcbiAgVFJZOiB7XG4gICAgc3ltYm9sOiBcIlRSWVwiLFxuICAgIHRob3VzYW5kOiBcIixcIixcbiAgICBwcmVjaXNpb246IDIsXG4gICAgZGVjaW1hbDogXCIuXCIsXG4gICAgc3ltYm9sRmlyc3Q6IHRydWUsXG4gICAgc3ltYm9sU2VwYXJhdG9yOiBcIiBcIlxuICB9LFxuICBVU0Q6IHtcbiAgICBzeW1ib2w6IFwiJFwiLFxuICAgIHRob3VzYW5kOiBcIixcIixcbiAgICBwcmVjaXNpb246IDIsXG4gICAgZGVjaW1hbDogXCIuXCIsXG4gICAgc3ltYm9sRmlyc3Q6IHRydWUsXG4gICAgc3ltYm9sU2VwYXJhdG9yOiBcIiBcIlxuICB9XG59O1xuIiwiY29uc3QgZGVmYXVsdEN1cnJlbmN5ID0ge1xuICBmb3JtYXQ6IFwiJXMldlwiLFxuICBzeW1ib2w6IFwiJFwiLFxuICBwcmVjaXNpb246IDIsXG4gIHRob3VzYW5kOiBcIixcIixcbiAgZGVjaW1hbDogXCIuXCJcbn07XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IChudW1iZXIsIHByZWNpc2lvbiwgdGhvdXNhbmQsIGRlY2ltYWwpID0+IHtcbiAgbnVtYmVyID0gTWF0aC5hYnMobnVtYmVyIHx8IDApO1xuXG4gIGNvbnN0IG51bWJlckZpeGVkID0gbnVtYmVyLnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgY29uc3QgbmVnYXRpdmUgPSBudW1iZXIgPCAwID8gXCItXCIgOiBcIlwiO1xuICBjb25zdCBiYXNlID0gU3RyaW5nKHBhcnNlSW50KG51bWJlckZpeGVkLCAxMCkpO1xuICBjb25zdCBtb2QgPSBiYXNlLmxlbmd0aCA+IDMgPyBiYXNlLmxlbmd0aCAlIDMgOiAwO1xuXG4gIHJldHVybiAoXG4gICAgbmVnYXRpdmUgK1xuICAgIChtb2QgPyBiYXNlLnN1YnN0cigwLCBtb2QpICsgdGhvdXNhbmQgOiBcIlwiKSArXG4gICAgYmFzZS5zdWJzdHIobW9kKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0aG91c2FuZH1gKSArXG4gICAgZGVjaW1hbCArXG4gICAgbnVtYmVyRml4ZWQuc3BsaXQoXCIuXCIpWzFdXG4gICk7XG59O1xuXG5jb25zdCBmb3JtYXRNb25leSA9IChudW1iZXIsIHBhcmFtcyA9IHt9KSA9PiB7XG4gIG51bWJlciA9IE51bWJlci5wYXJzZUZsb2F0KG51bWJlcik7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdEN1cnJlbmN5LCBwYXJhbXMpO1xuICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBmb3JtYXROdW1iZXIoXG4gICAgbnVtYmVyLFxuICAgIG9wdGlvbnMucHJlY2lzaW9uLFxuICAgIG9wdGlvbnMudGhvdXNhbmQsXG4gICAgb3B0aW9ucy5kZWNpbWFsXG4gICk7XG5cbiAgcmV0dXJuIG9wdGlvbnMuZm9ybWF0XG4gICAgLnJlcGxhY2UoXCIlc1wiLCBvcHRpb25zLnN5bWJvbClcbiAgICAucmVwbGFjZShcIiV2XCIsIGZvcm1hdHRlZE51bWJlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRNb25leTtcbiIsImltcG9ydCBjdXJyZW5jaWVzIGZyb20gXCIuL2N1cnJlbmNpZXNcIjtcbmltcG9ydCBtYXNrZXIgZnJvbSBcIi4vbWFza2VyXCI7XG5cbmNvbnN0IEN1cnJlbmN5ID0ge1xuICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIGNvZGU6IFwiXCIsXG4gICAgICBzeW1ib2w6IFwiJFwiLFxuICAgICAgdGhvdXNhbmQ6IFwiLFwiLFxuICAgICAgcHJlY2lzaW9uOiAyLFxuICAgICAgZGVjaW1hbDogXCIuXCIsXG4gICAgICBzeW1ib2xGaXJzdDogdHJ1ZSxcbiAgICAgIHN5bWJvbFNlcGFyYXRvcjogXCIgXCJcbiAgICB9O1xuXG4gICAgbGV0IGNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgY3VycmVuY3lGaWx0ZXIgPSAodmFsdWUsIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgICBjb25maWdzID0gT2JqZWN0LmFzc2lnbihwYXJhbXMsIGNvbmZpZ3MpO1xuICAgICAgcmV0dXJuIG1hc2tlcih2YWx1ZSwgY29uZmlncyk7XG4gICAgfTtcblxuICAgIFZ1ZS5maWx0ZXIoXCJjdXJyZW5jeVwiLCBjdXJyZW5jeUZpbHRlcik7XG5cbiAgICBWdWUucHJvdG90eXBlLiRjdXJyZW5jeSA9IFZ1ZS5jdXJyZW5jeSA9IHtcbiAgICAgIHNldENvbmZpZzogY29kZSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IGNvZGUsIC4uLmN1cnJlbmNpZXNbY29kZV0gfTtcbiAgICAgICAgY29uZmlncyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XG4gICAgICB9LFxuICAgICAgZ2V0Q29uZmlnOiAoKSA9PiBjb25maWdzXG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3k7XG4iLCJpbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4vZm9ybWF0TW9uZXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKFxuICB2YWx1ZSxcbiAgeyBzeW1ib2wsIHRob3VzYW5kLCBwcmVjaXNpb24sIGRlY2ltYWwsIHN5bWJvbEZpcnN0LCBzeW1ib2xTZXBhcmF0b3IgfVxuKSA9PiB7XG4gIGxldCByZXN1bHQgPSAwLjA7XG5cbiAgY29uc3QgaXNOZWdhdGl2ZSA9IFN0cmluZyh2YWx1ZSkuY2hhckF0KDApID09PSBcIi1cIjtcblxuICBpZiAoaXNOZWdhdGl2ZSkge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKS5zbGljZSgxKTtcbiAgfVxuXG4gIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gIGlmICghaXNOYU4oYW1vdW50KSkge1xuICAgIHJlc3VsdCA9IGFtb3VudDtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdCA9IHN5bWJvbEZpcnN0XG4gICAgPyBgJXMke3N5bWJvbFNlcGFyYXRvcn0ldmBcbiAgICA6IGAldiR7c3ltYm9sU2VwYXJhdG9yfSVzYDtcblxuICByZXN1bHQgPSBmb3JtYXRNb25leSh2YWx1ZSwge1xuICAgIGZvcm1hdCxcbiAgICBzeW1ib2wsXG4gICAgcHJlY2lzaW9uLFxuICAgIHRob3VzYW5kLFxuICAgIGRlY2ltYWxcbiAgfSk7XG5cbiAgaWYgKGlzTmVnYXRpdmUpIHtcbiAgICByZXN1bHQgPSBgLSR7cmVzdWx0fWA7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=