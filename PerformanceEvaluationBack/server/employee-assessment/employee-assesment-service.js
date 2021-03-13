import EmployeeAssessmentRepository from './employee-assesment-repository';

async function _saveResponses(responsesInfo) {
  try {
    let insertedResponses = 0;
    for (const responseInfo of responsesInfo) {
      const result = await EmployeeAssessmentRepository.saveResponse(
        responseInfo
      );
      insertedResponses++;
    }
    return insertedResponses;
  } catch (err) {
    console.log('EmployeeAssessmentService - saveResponses', err);
  }
}

const EmployeeAssessmentService = {
  saveResponses: _saveResponses
};

export default EmployeeAssessmentService;
