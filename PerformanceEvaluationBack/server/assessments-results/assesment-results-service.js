import AssessmentResultsRepository from './assesment-results-repository';

async function _getAssessmentResults(employeeId) {
  try {
    const selfAssessmentQuery = await AssessmentResultsRepository.getSelfAssessmentTotal(
      employeeId
    );
    const employeeAssessmentQuery = await AssessmentResultsRepository.getEmployeeAssessmentTotal(
      employeeId
    );
    const selfAssessmentTotal = selfAssessmentQuery[0]['sum(result)'];
    const employeeAssessmentTotal = employeeAssessmentQuery[0]['sum(result)'];
    const score = (selfAssessmentTotal + employeeAssessmentTotal) / 2;
    const results = {
      assessmentScore: score,
      message: getMessageResultByScore(score)
    };
    return results;
  } catch (err) {
    console.log('AssessmentResultsService - saveResponses', err);
  }
}

function getMessageResultByScore(score) {
  switch (true) {
    case score >= 13 && score < 23:
      return 'Insatisfactorio. Se debe hacer plan de mejora';
    case score >= 23 && score < 33:
      return 'Aceptable. Se debe hacer compromiso para mejorar';
    case score >= 33 && score < 43:
      return 'Bueno. Se deben mejorar áreas críticas';
    case score >= 43 && score <= 52:
      return 'Sobresaliente. Se darán incentivos';
    default:
      return 'Score is not in any range';
  }
}

const AssessmentResultsService = {
  getAssessmentResults: _getAssessmentResults
};

export default AssessmentResultsService;
