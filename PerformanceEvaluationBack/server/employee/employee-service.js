import EmployeeRepository from './employee-repository';
import EmployeeAdapter from './employee-adapter';

async function _getMyEmployees(leaderId) {
  try {
    const userRows = await EmployeeRepository.getMyEmployees(leaderId);
    return userRows.length > 0
      ? userRows.map((userRow) =>
          EmployeeAdapter.convertRepoEmployeeToEmployee(userRow)
        )
      : [];
  } catch (err) {
    console.log('EmployeeService - getMyEmployees', err);
  }
}

async function _getEmployeeById(userId) {
  try {
    const userRows = await EmployeeRepository.getEmployeeById(userId);
    const user = userRows[0];
    return user ? EmployeeAdapter.convertRepoEmployeeToEmployee(user) : {};
  } catch (err) {
    console.log('EmployeeService - _getEmployeeById', err);
  }
}

const EmployeeService = {
  getMyEmployees: _getMyEmployees,
  getEmployeeById: _getEmployeeById
};

export default EmployeeService;
