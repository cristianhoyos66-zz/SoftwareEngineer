"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeAdapter = _interopRequireDefault(require("../employee/employee-adapter"));

var _authRepository = _interopRequireDefault(require("./auth-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _login(_x, _x2, _x3) {
  return _login2.apply(this, arguments);
}

function _login2() {
  _login2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var username = req.body.username || '';
      var password = req.body.password || '';
      var userRows = yield _authRepository.default.login(username, password);
      userRows.length > 0 ? res.status(200).send({
        success: true,
        data: _employeeAdapter.default.convertRepoEmployeeToEmployee(userRows[0])
      }) : res.status(401).send({
        success: false,
        mgs: 'username or pass invalid'
      });
      next();
    } catch (err) {
      console.log('AuthApi - login', err);
    }
  });
  return _login2.apply(this, arguments);
}

var AuthApi = {
  login: _login
};
var _default = AuthApi;
exports.default = _default;