export const EMPLOYEE_CONSTANTS = {
  getMyEmployeesQuery: 'select * from employees_tbl where leader_id = ?',
  getEmployeeById: 'select * from employees_tbl where employee_id = ?'
};

export default EMPLOYEE_CONSTANTS;
