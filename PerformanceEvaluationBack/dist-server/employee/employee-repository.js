"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

var _employeeConstants = _interopRequireDefault(require("./employee-constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _getMyEmployees(_x) {
  return _getMyEmployees2.apply(this, arguments);
}

function _getMyEmployees2() {
  _getMyEmployees2 = _asyncToGenerator(function* (leaderId) {
    var conn;

    try {
      conn = yield _connection.default.getConnection();
      var rows = yield conn.query(_employeeConstants.default.getMyEmployeesQuery, [leaderId]);
      return rows;
    } catch (err) {
      console.log('EmployeeRepository - getMyEmployees', err);
    } finally {
      conn.end();
    }
  });
  return _getMyEmployees2.apply(this, arguments);
}

function _getEmployeeById(_x2) {
  return _getEmployeeById2.apply(this, arguments);
}

function _getEmployeeById2() {
  _getEmployeeById2 = _asyncToGenerator(function* (userId) {
    var conn;

    try {
      conn = yield _connection.default.getConnection();
      return yield conn.query(_employeeConstants.default.getEmployeeById, [userId]);
    } catch (err) {
      console.log('EmployeeRepository - _getEmployeeById', err);
    } finally {
      conn.end();
    }
  });
  return _getEmployeeById2.apply(this, arguments);
}

var EmployeeRepository = {
  getMyEmployees: _getMyEmployees,
  getEmployeeById: _getEmployeeById
};
var _default = EmployeeRepository;
exports.default = _default;