import MariadbPool from '../database/connection';
import EMPLOYEE_CONSTANTS from './employee-constants';

async function _getMyEmployees(leaderId) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    const rows = await conn.query(EMPLOYEE_CONSTANTS.getMyEmployeesQuery, [
      leaderId
    ]);
    return rows;
  } catch (err) {
    console.log('EmployeeRepository - getMyEmployees', err);
  } finally {
    conn.end();
  }
}

async function _getEmployeeById(userId) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    return await conn.query(EMPLOYEE_CONSTANTS.getEmployeeById, [userId]);
  } catch (err) {
    console.log('EmployeeRepository - _getEmployeeById', err);
  } finally {
    conn.end();
  }
}

const EmployeeRepository = {
  getMyEmployees: _getMyEmployees,
  getEmployeeById: _getEmployeeById
};

export default EmployeeRepository;
