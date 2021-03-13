"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mariadb = _interopRequireDefault(require("mariadb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MariadbPool = _mariadb.default.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'performance_evaluation_db',
  charset: 'utf8'
});

var _default = MariadbPool;
exports.default = _default;