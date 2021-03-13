"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SELF_ASSESSMENTS_CONSTANTS = void 0;
var SELF_ASSESSMENTS_CONSTANTS = {
  saveResponseStatement: 'insert into self_assessments_tbl (question_id, employee_id, assesment_period, result) values (?, ?, ?, ?)',
  deleteResponsesStatement: 'delete from self_assessments_tbl where employee_id = ? and question_id = ?'
};
exports.SELF_ASSESSMENTS_CONSTANTS = SELF_ASSESSMENTS_CONSTANTS;
var _default = SELF_ASSESSMENTS_CONSTANTS;
exports.default = _default;