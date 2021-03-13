"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

var _assesmentResultsConstants = _interopRequireDefault(require("./assesment-results-constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _getSelfAssessmentTotal(_x) {
  return _getSelfAssessmentTotal2.apply(this, arguments);
}

function _getSelfAssessmentTotal2() {
  _getSelfAssessmentTotal2 = _asyncToGenerator(function* (employeeId) {
    var conn;

    try {
      conn = yield _connection.default.getConnection();
      var rows = yield conn.query(_assesmentResultsConstants.default.getSelfAssessmentTotalStatement, [employeeId]);
      return rows;
    } catch (err) {
      console.log('AssessmentResultsRepository - getSelfAssessmentTotal', err);
    } finally {
      conn.end();
    }
  });
  return _getSelfAssessmentTotal2.apply(this, arguments);
}

function _getEmployeeAssessmentTotal(_x2) {
  return _getEmployeeAssessmentTotal2.apply(this, arguments);
}

function _getEmployeeAssessmentTotal2() {
  _getEmployeeAssessmentTotal2 = _asyncToGenerator(function* (employeeId) {
    var conn;

    try {
      conn = yield _connection.default.getConnection();
      var rows = yield conn.query(_assesmentResultsConstants.default.getEmployeeAssessmentTotalStatement, [employeeId]);
      return rows;
    } catch (err) {
      console.log('AssessmentResultsRepository - getEmployeeAssessmentTotal', err);
    } finally {
      conn.end();
    }
  });
  return _getEmployeeAssessmentTotal2.apply(this, arguments);
}

var AssessmentResultsRepository = {
  getSelfAssessmentTotal: _getSelfAssessmentTotal,
  getEmployeeAssessmentTotal: _getEmployeeAssessmentTotal
};
var _default = AssessmentResultsRepository;
exports.default = _default;