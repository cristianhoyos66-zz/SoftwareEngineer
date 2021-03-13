"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

var _authConstants = _interopRequireDefault(require("./auth-constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _login(_x, _x2) {
  return _login2.apply(this, arguments);
}

function _login2() {
  _login2 = _asyncToGenerator(function* (username, password) {
    var conn;

    try {
      conn = yield _connection.default.getConnection();
      var rows = yield conn.query(_authConstants.default.getUserQuery, [username, password]);
      return rows;
    } catch (err) {
      console.log('AuthRepository - login', err);
    } finally {
      conn.end();
    }
  });
  return _login2.apply(this, arguments);
}

var AuthRepository = {
  login: _login
};
var _default = AuthRepository;
exports.default = _default;