import SelfAssessmentRepository from './self-assesment-repository';

async function _saveResponses(responsesInfo) {
  try {
    let insertedResponses = 0;
    for (const responseInfo of responsesInfo) {
      const result = await SelfAssessmentRepository.saveResponse(responseInfo);
      insertedResponses++;
    }
    return insertedResponses;
  } catch (err) {
    console.log('SelfAssessmentService - saveResponses', err);
  }
}

const SelfAssessmentService = {
  saveResponses: _saveResponses
};

export default SelfAssessmentService;
