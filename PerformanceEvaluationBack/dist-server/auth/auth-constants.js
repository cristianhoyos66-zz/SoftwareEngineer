"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AUTH_CONSTANTS = void 0;
var AUTH_CONSTANTS = {
  getUserQuery: 'select * from employees_tbl where username = ? and password = ?'
};
exports.AUTH_CONSTANTS = AUTH_CONSTANTS;
var _default = AUTH_CONSTANTS;
exports.default = _default;