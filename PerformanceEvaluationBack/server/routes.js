import AuthApi from './auth/auth-api';
import EmployeeApi from './employee/employee-api';
import EmployeeAssessmentApi from './employee-assessment/employee-assesment-api';
import SelfAssessmentApi from './self-assessment/self-assesment-api';
import AssessmentResultsApi from './assessments-results/assesment-results-api';

const routes = (app) => {
  app.post('/login', AuthApi.login);
  app.get('/employees', EmployeeApi.getMyEmployees);
  app.get('/auth-employee', EmployeeApi.getEmployeeById);
  app.post('/assessments', EmployeeAssessmentApi.saveResponses);
  app.post('/self-assessments', SelfAssessmentApi.saveResponses);
  app.get('/assessment-results', AssessmentResultsApi.getAssessmentResults);
};

export default routes;
