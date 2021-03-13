import EmployeeAdapter from '../employee/employee-adapter';
import AuthRepository from './auth-repository';

async function _login(req, res, next) {
  try {
    let username = req.body.username || '';
    let password = req.body.password || '';

    const userRows = await AuthRepository.login(username, password);
    userRows.length > 0
      ? res
          .status(200)
          .send({
            success: true,
            data: EmployeeAdapter.convertRepoEmployeeToEmployee(userRows[0])
          })
      : res
          .status(401)
          .send({ success: false, mgs: 'username or pass invalid' });
    next();
  } catch (err) {
    console.log('AuthApi - login', err);
  }
}

const AuthApi = {
  login: _login
};

export default AuthApi;
