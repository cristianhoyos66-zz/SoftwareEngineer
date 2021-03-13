import MariadbPool from '../database/connection';
import EMPLOYEE_ASSESSMENTS_CONSTANTS from './employee-assesment-constants';

async function _saveResponse(responseInfo) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    await conn.query(EMPLOYEE_ASSESSMENTS_CONSTANTS.deleteResponsesStatement, [
      responseInfo.employee_id,
      responseInfo.leader_id,
      responseInfo.question_id
    ]);
    const insertResult = await conn.query(
      EMPLOYEE_ASSESSMENTS_CONSTANTS.saveResponseStatement,
      [
        responseInfo.question_id,
        responseInfo.employee_id,
        responseInfo.leader_id,
        '2021-1',
        responseInfo.result
      ]
    );
    return insertResult;
  } catch (err) {
    console.log('EmployeeAssessmentRepository - saveResponse', err);
  } finally {
    conn.end();
  }
}

const EmployeeAssessmentRepository = {
  saveResponse: _saveResponse
};

export default EmployeeAssessmentRepository;
