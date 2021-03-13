import EmployeeService from './employee-service';

async function _getMyEmployees(req, res, next) {
  try {
    let leaderId = req.query.leader_id;
    const userRows = await EmployeeService.getMyEmployees(leaderId);
    res.status(200).send({ success: true, data: userRows });
    next();
  } catch (err) {
    console.log('EmployeeApi - getMyEmployees', err);
  }
}

async function _getEmployeeById(req, res, next) {
  try {
    let userId = req.query.user_id;
    const user = await EmployeeService.getEmployeeById(userId);
    res.status(200).send({ success: true, data: user });
    next();
  } catch (err) {
    console.log('EmployeeApi - _getEmployeeById', err);
  }
}

const EmployeeApi = {
  getMyEmployees: _getMyEmployees,
  getEmployeeById: _getEmployeeById
};

export default EmployeeApi;
