import AssessmentResultsService from './assesment-results-service';

async function _getAssessmentResults(req, res, next) {
  try {
    let employeeId = req.query.employee_id;
    const assessmentResultsResponse = await AssessmentResultsService.getAssessmentResults(
      employeeId
    );
    res.status(200).send({ success: true, data: assessmentResultsResponse });
    next();
  } catch (err) {
    console.log('AssessmentResultsApi - getAssessmentResults', err);
  }
}

const AssessmentResultsApi = {
  getAssessmentResults: _getAssessmentResults
};

export default AssessmentResultsApi;
