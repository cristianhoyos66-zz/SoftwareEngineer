import MariadbPool from '../database/connection';
import SELF_ASSESSMENTS_CONSTANTS from './self-assesment-constants';

async function _saveResponse(responseInfo) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    await conn.query(SELF_ASSESSMENTS_CONSTANTS.deleteResponsesStatement, [
      responseInfo.employee_id,
      responseInfo.question_id
    ]);
    const insertResult = await conn.query(
      SELF_ASSESSMENTS_CONSTANTS.saveResponseStatement,
      [
        responseInfo.question_id,
        responseInfo.employee_id,
        '2021-1',
        responseInfo.result
      ]
    );
    return insertResult;
  } catch (err) {
    console.log('SelfAssessmentRepository - saveResponse', err);
  } finally {
    conn.end();
  }
}

const SelfAssessmentRepository = {
  saveResponse: _saveResponse
};

export default SelfAssessmentRepository;
