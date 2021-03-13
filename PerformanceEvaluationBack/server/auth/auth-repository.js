import MariadbPool from '../database/connection';
import AUTH_CONSTANTS from './auth-constants';

async function _login(username, password) {
  let conn;
  try {
    conn = await MariadbPool.getConnection();
    const rows = await conn.query(AUTH_CONSTANTS.getUserQuery, [
      username,
      password
    ]);
    return rows;
  } catch (err) {
    console.log('AuthRepository - login', err);
  } finally {
    conn.end();
  }
}

const AuthRepository = {
  login: _login
};

export default AuthRepository;
