import EmployeeAssessmentService from './employee-assesment-service';

async function _saveResponses(req, res, next) {
  try {
    let responsesInfo = req.body.responses_info;
    const insertedResponses = await EmployeeAssessmentService.saveResponses(
      responsesInfo
    );
    res.status(200).send({ success: true, data: insertedResponses });
    next();
  } catch (err) {
    console.log('EmployeeAssessmentApi - saveResponses', err);
  }
}

const EmployeeAssessmentApi = {
  saveResponses: _saveResponses
};

export default EmployeeAssessmentApi;
