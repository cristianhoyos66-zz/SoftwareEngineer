"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EMPLOYEE_ASSESSMENTS_CONSTANTS = void 0;
var EMPLOYEE_ASSESSMENTS_CONSTANTS = {
  saveResponseStatement: 'insert into assessments_tbl (question_id, employee_id, leader_id, assesment_period, result) values (?, ?, ?, ?, ?)',
  deleteResponsesStatement: 'delete from assessments_tbl where employee_id = ? and leader_id = ? and question_id = ?'
};
exports.EMPLOYEE_ASSESSMENTS_CONSTANTS = EMPLOYEE_ASSESSMENTS_CONSTANTS;
var _default = EMPLOYEE_ASSESSMENTS_CONSTANTS;
exports.default = _default;