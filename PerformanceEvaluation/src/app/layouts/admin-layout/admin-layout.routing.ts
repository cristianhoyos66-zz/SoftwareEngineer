import { Routes } from '@angular/router';
import { EmployeeAssessmentComponent } from '../../pages/employee-assessment/employee-assessment.component';
import { SelfAssessmentComponent } from '../../pages/self-assessment/self-assessment.component';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'employee-assessment',
    component: EmployeeAssessmentComponent
  },
  {
    path: 'self-assessment',
    component: SelfAssessmentComponent
  }
];
