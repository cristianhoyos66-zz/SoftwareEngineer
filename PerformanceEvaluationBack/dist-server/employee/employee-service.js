"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeRepository = _interopRequireDefault(require("./employee-repository"));

var _employeeAdapter = _interopRequireDefault(require("./employee-adapter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _getMyEmployees(_x) {
  return _getMyEmployees2.apply(this, arguments);
}

function _getMyEmployees2() {
  _getMyEmployees2 = _asyncToGenerator(function* (leaderId) {
    try {
      var userRows = yield _employeeRepository.default.getMyEmployees(leaderId);
      return userRows.length > 0 ? userRows.map(userRow => _employeeAdapter.default.convertRepoEmployeeToEmployee(userRow)) : [];
    } catch (err) {
      console.log('EmployeeService - getMyEmployees', err);
    }
  });
  return _getMyEmployees2.apply(this, arguments);
}

function _getEmployeeById(_x2) {
  return _getEmployeeById2.apply(this, arguments);
}

function _getEmployeeById2() {
  _getEmployeeById2 = _asyncToGenerator(function* (userId) {
    try {
      var userRows = yield _employeeRepository.default.getEmployeeById(userId);
      var user = userRows[0];
      return user ? _employeeAdapter.default.convertRepoEmployeeToEmployee(user) : {};
    } catch (err) {
      console.log('EmployeeService - _getEmployeeById', err);
    }
  });
  return _getEmployeeById2.apply(this, arguments);
}

var EmployeeService = {
  getMyEmployees: _getMyEmployees,
  getEmployeeById: _getEmployeeById
};
var _default = EmployeeService;
exports.default = _default;