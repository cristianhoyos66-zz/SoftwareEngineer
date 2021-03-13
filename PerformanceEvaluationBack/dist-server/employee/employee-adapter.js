"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _convertRepoEmployeeToEmployee(repositoryEmployee) {
  return {
    idNumber: repositoryEmployee.employee_id,
    typeId: repositoryEmployee.id_type,
    name: repositoryEmployee.name,
    lastName1: repositoryEmployee.last_name1,
    lastName2: repositoryEmployee.last_name2,
    email: repositoryEmployee.email,
    birthDate: repositoryEmployee.birthdate,
    username: repositoryEmployee.username,
    address: repositoryEmployee.address,
    positionId: repositoryEmployee.position_id,
    roleId: repositoryEmployee.role_id,
    leaderId: repositoryEmployee.leader_id,
    isLeader: repositoryEmployee.is_leader
  };
}

var EmployeeAdapter = {
  convertRepoEmployeeToEmployee: _convertRepoEmployeeToEmployee
};
var _default = EmployeeAdapter;
exports.default = _default;