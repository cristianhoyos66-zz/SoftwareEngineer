import mariadb from 'mariadb';
const MariadbPool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'performance_evaluation_db',
  charset: 'utf8'
});

export default MariadbPool;
