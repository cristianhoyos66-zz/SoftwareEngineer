"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeService = _interopRequireDefault(require("./employee-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _getMyEmployees(_x, _x2, _x3) {
  return _getMyEmployees2.apply(this, arguments);
}

function _getMyEmployees2() {
  _getMyEmployees2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var leaderId = req.query.leader_id;
      var userRows = yield _employeeService.default.getMyEmployees(leaderId);
      res.status(200).send({
        success: true,
        data: userRows
      });
      next();
    } catch (err) {
      console.log('EmployeeApi - getMyEmployees', err);
    }
  });
  return _getMyEmployees2.apply(this, arguments);
}

function _getEmployeeById(_x4, _x5, _x6) {
  return _getEmployeeById2.apply(this, arguments);
}

function _getEmployeeById2() {
  _getEmployeeById2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var userId = req.query.user_id;
      var user = yield _employeeService.default.getEmployeeById(userId);
      res.status(200).send({
        success: true,
        data: user
      });
      next();
    } catch (err) {
      console.log('EmployeeApi - _getEmployeeById', err);
    }
  });
  return _getEmployeeById2.apply(this, arguments);
}

var EmployeeApi = {
  getMyEmployees: _getMyEmployees,
  getEmployeeById: _getEmployeeById
};
var _default = EmployeeApi;
exports.default = _default;