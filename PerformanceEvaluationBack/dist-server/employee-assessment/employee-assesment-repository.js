"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

var _employeeAssesmentConstants = _interopRequireDefault(require("./employee-assesment-constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _saveResponse(_x) {
  return _saveResponse2.apply(this, arguments);
}

function _saveResponse2() {
  _saveResponse2 = _asyncToGenerator(function* (responseInfo) {
    var conn;

    try {
      conn = yield _connection.default.getConnection();
      yield conn.query(_employeeAssesmentConstants.default.deleteResponsesStatement, [responseInfo.employee_id, responseInfo.leader_id, responseInfo.question_id]);
      var insertResult = yield conn.query(_employeeAssesmentConstants.default.saveResponseStatement, [responseInfo.question_id, responseInfo.employee_id, responseInfo.leader_id, '2021-1', responseInfo.result]);
      return insertResult;
    } catch (err) {
      console.log('EmployeeAssessmentRepository - saveResponse', err);
    } finally {
      conn.end();
    }
  });
  return _saveResponse2.apply(this, arguments);
}

var EmployeeAssessmentRepository = {
  saveResponse: _saveResponse
};
var _default = EmployeeAssessmentRepository;
exports.default = _default;