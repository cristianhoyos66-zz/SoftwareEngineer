"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ASSESSMENTS_RESULTS_CONSTANTS = void 0;
var ASSESSMENTS_RESULTS_CONSTANTS = {
  getSelfAssessmentTotalStatement: 'select sum(result) from self_assessments_tbl where employee_id = ?',
  getEmployeeAssessmentTotalStatement: 'select sum(result) from assessments_tbl where employee_id = ?'
};
exports.ASSESSMENTS_RESULTS_CONSTANTS = ASSESSMENTS_RESULTS_CONSTANTS;
var _default = ASSESSMENTS_RESULTS_CONSTANTS;
exports.default = _default;