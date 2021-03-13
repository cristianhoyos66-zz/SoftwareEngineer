"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _authApi = _interopRequireDefault(require("./auth/auth-api"));

var _employeeApi = _interopRequireDefault(require("./employee/employee-api"));

var _employeeAssesmentApi = _interopRequireDefault(require("./employee-assessment/employee-assesment-api"));

var _selfAssesmentApi = _interopRequireDefault(require("./self-assessment/self-assesment-api"));

var _assesmentResultsApi = _interopRequireDefault(require("./assessments-results/assesment-results-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = app => {
  app.post('/login', _authApi.default.login);
  app.get('/employees', _employeeApi.default.getMyEmployees);
  app.get('/auth-employee', _employeeApi.default.getEmployeeById);
  app.post('/assessments', _employeeAssesmentApi.default.saveResponses);
  app.post('/self-assessments', _selfAssesmentApi.default.saveResponses);
  app.get('/assessment-results', _assesmentResultsApi.default.getAssessmentResults);
};

var _default = routes;
exports.default = _default;