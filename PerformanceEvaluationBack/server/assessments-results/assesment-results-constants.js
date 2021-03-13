export const ASSESSMENTS_RESULTS_CONSTANTS = {
  getSelfAssessmentTotalStatement:
    'select sum(result) from self_assessments_tbl where employee_id = ?',
  getEmployeeAssessmentTotalStatement:
    'select sum(result) from assessments_tbl where employee_id = ?'
};

export default ASSESSMENTS_RESULTS_CONSTANTS;
