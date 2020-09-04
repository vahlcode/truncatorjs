"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

//Author : Valentine Elum
//For : Desyn Open Source
//Twitter : @VahlCode
//License : MIT License 
var truncjs = function truncjs(string) {
  var startPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;

  if (typeof string !== "string" && typeof string === "number") {
    string = string.toString();
  }

  if (string.length <= maxLength) {
    return string;
  }

  return string.slice(startPos, maxLength) + '...';
};

var _default = truncjs;
exports["default"] = _default;
module.exports = exports.default;