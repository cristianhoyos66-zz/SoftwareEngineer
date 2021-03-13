import MariadbPool from '../database/connection';
import ASSESSMENTS_RESULTS_CONSTANTS from './assesment-results-constants';

async function _getSelfAssessmentTotal(employeeId) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    const rows = await conn.query(
      ASSESSMENTS_RESULTS_CONSTANTS.getSelfAssessmentTotalStatement,
      [employeeId]
    );
    return rows;
  } catch (err) {
    console.log('AssessmentResultsRepository - getSelfAssessmentTotal', err);
  } finally {
    conn.end();
  }
}

async function _getEmployeeAssessmentTotal(employeeId) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    const rows = await conn.query(
      ASSESSMENTS_RESULTS_CONSTANTS.getEmployeeAssessmentTotalStatement,
      [employeeId]
    );
    return rows;
  } catch (err) {
    console.log(
      'AssessmentResultsRepository - getEmployeeAssessmentTotal',
      err
    );
  } finally {
    conn.end();
  }
}

const AssessmentResultsRepository = {
  getSelfAssessmentTotal: _getSelfAssessmentTotal,
  getEmployeeAssessmentTotal: _getEmployeeAssessmentTotal
};

export default AssessmentResultsRepository;
