export const EMPLOYEE_ASSESSMENTS_CONSTANTS = {
  saveResponseStatement:
    'insert into assessments_tbl (question_id, employee_id, leader_id, assesment_period, result) values (?, ?, ?, ?, ?)',
  deleteResponsesStatement:
    'delete from assessments_tbl where employee_id = ? and leader_id = ? and question_id = ?'
};

export default EMPLOYEE_ASSESSMENTS_CONSTANTS;
