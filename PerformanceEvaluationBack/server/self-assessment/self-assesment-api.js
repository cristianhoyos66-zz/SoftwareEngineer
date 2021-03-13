import SelfAssessmentService from './self-assesment-service';

async function _saveResponses(req, res, next) {
  try {
    let responsesInfo = req.body.responses_info;
    const insertedResponses = await SelfAssessmentService.saveResponses(
      responsesInfo
    );
    res.status(200).send({ success: true, data: insertedResponses });
    next();
  } catch (err) {
    console.log('SelfAssessmentApi - saveResponses', err);
  }
}

const SelfAssessmentApi = {
  saveResponses: _saveResponses
};

export default SelfAssessmentApi;
