!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("VueCurrency",[],r):"object"==typeof exports?exports.VueCurrency=r():e.VueCurrency=r()}(window,function(){return o={},n.m=t=[function(e,r,t){"use strict";t.r(r);var i={AED:{symbol:"AED",thousand:",",precision:2,decimal:".",symbolFirst:!0,symbolSeparator:" "},BRL:{symbol:"R$",thousand:".",precision:2,decimal:",",symbolFirst:!0,symbolSeparator:" "},EUR:{symbol:"€",thousand:",",precision:2,decimal:".",symbolFirst:!0,symbolSeparator:" "},GBP:{symbol:"£",thousand:",",precision:2,decimal:".",symbolFirst:!0,symbolSeparator:" "},TRY:{symbol:"TRY",thousand:",",precision:2,decimal:".",symbolFirst:!0,symbolSeparator:" "},USD:{symbol:"$",thousand:",",precision:2,decimal:".",symbolFirst:!0,symbolSeparator:" "}},a={format:"%s%v",symbol:"$",precision:2,thousand:",",decimal:"."},f=function(e,r){var t=1<arguments.length&&void 0!==r?r:{};e=Number.parseFloat(e);var o=Object.assign(a,t),n=function(e,r,t,o){var n=(e=Math.abs(e||0)).toFixed(r),i=e<0?"-":"",a=String(parseInt(n,10)),s=3<a.length?a.length%3:0;return i+(s?a.substr(0,s)+t:"")+a.substr(s).replace(/(\d{3})(?=\d)/g,"$1".concat(t))+o+n.split(".")[1]}(e,o.precision,o.thousand,o.decimal);return o.format.replace("%s",o.symbol).replace("%v",n)};function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var o={install:function(e,r){var t=1<arguments.length&&void 0!==r?r:{},o={code:"",symbol:"$",thousand:",",precision:2,decimal:".",symbolFirst:!0,symbolSeparator:" "},n=Object.assign(o,t);e.filter("currency",function(e,r){var t=1<arguments.length&&void 0!==r?r:{};return function(e,r){var t=r.symbol,o=r.thousand,n=r.precision,i=r.decimal,a=r.symbolFirst,s=r.symbolSeparator,c=0,l="-"===String(e).charAt(0);l&&(e=String(e).slice(1));var u=parseFloat(e);isNaN(u)||(c=u);var b=a?"%s".concat(s,"%v"):"%v".concat(s,"%s");return c=f(e,{format:b,symbol:t,precision:n,thousand:o,decimal:i}),l&&(c="-".concat(c)),c}(e,n=Object.assign(t,n))}),e.prototype.$currency=e.currency={setConfig:function(e){var r=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(e){s(r,e,t[e])})}return r}({code:e},i[e]);n=Object.assign(o,r)},getConfig:function(){return n}}}};r.default=o}],n.c=o,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0);function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t,o});