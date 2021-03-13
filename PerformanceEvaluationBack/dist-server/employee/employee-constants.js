"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EMPLOYEE_CONSTANTS = void 0;
var EMPLOYEE_CONSTANTS = {
  getMyEmployeesQuery: 'select * from employees_tbl where leader_id = ?',
  getEmployeeById: 'select * from employees_tbl where employee_id = ?'
};
exports.EMPLOYEE_CONSTANTS = EMPLOYEE_CONSTANTS;
var _default = EMPLOYEE_CONSTANTS;
exports.default = _default;