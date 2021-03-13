export const SELF_ASSESSMENTS_CONSTANTS = {
  saveResponseStatement:
    'insert into self_assessments_tbl (question_id, employee_id, assesment_period, result) values (?, ?, ?, ?)',
  deleteResponsesStatement:
    'delete from self_assessments_tbl where employee_id = ? and question_id = ?'
};

export default SELF_ASSESSMENTS_CONSTANTS;
