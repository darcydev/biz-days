"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomNumber = void 0;

var _holidays = require("./holidays");

var generateRandomNumber = function generateRandomNumber() {
  if (_holidays.HOLIDAYS.tom) {
    return Math.floor(100000 + Math.random() * 900000);
  } else {
    return 0;
  }
};

exports.generateRandomNumber = generateRandomNumber;