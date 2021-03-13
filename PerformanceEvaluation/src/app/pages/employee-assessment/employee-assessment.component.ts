import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/auth/logged-user.service';
import { Employee } from 'src/app/models/employee';
import { LoggedUser } from 'src/app/models/logged-user';
import { EmployeeAssessmentService } from './employee-assessment.service';
import Swal from 'sweetalert2';
import { AssessmentResultsService } from '../assessment-results/assessment-results.service';

@Component({
  selector: 'employee-assessment',
  templateUrl: './employee-assessment.component.html',
  styleUrls: ['./employee-assessment.component.css']
})
export class EmployeeAssessmentComponent implements OnInit {
  employees: Array<Employee> = [];
  selectedEmployee: Employee = {
    idNumber: '',
    typeId: 0,
    name: '',
    lastName1: '',
    lastName2: '',
    email: '',
    birthDate: '',
    username: '',
    address: '',
    positionId: 0,
    roleId: 0,
    leaderId: '',
    isLeader: false
  };
  /*personalRelationship: number = 1;
  adaptability: number = 1;
  proactivity: number = 1;
  guidelines: number = 1;
  teamWork: number = 1;
  management: number = 1;
  responsibility: number = 1;
  assertiveCommunication: number = 1;
  serviceOriented: number = 1;
  achieveness: number = 1;
  schooling: number = 1;
  proficiency: number = 1;
  improvement: number = 1;*/
  responses: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  assessmentResult: Object = {};
  private loggedUser: LoggedUser;

  constructor(
    private employeeAssessmentService: EmployeeAssessmentService,
    private loggedUserService: LoggedUserService,
    private assessmentResultsService: AssessmentResultsService
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.loggedUserService.loggedUser;
    this.getEmployees();
  }

  onEmployeeSelected(): void {
    this.getAssessmentResult(this.selectedEmployee.idNumber);
  }

  saveResponses(): void {
    const saveResponsesBody = this.employeeAssessmentService.generateSaveResponsesBody(
      this.responses,
      this.selectedEmployee.idNumber
    );
    this.employeeAssessmentService
      .saveEmployeeAssessment(saveResponsesBody)
      .subscribe(
        (response) => {
          this.onSaveResponsesSuccess();
          this.getAssessmentResult(this.selectedEmployee.idNumber);
        },
        (error) => {
          this.onSaveResponsesFailure();
        }
      );
  }

  private getAssessmentResult(employeeId: string): void {
    this.assessmentResultsService
      .getAssessmentResults(employeeId)
      .subscribe((response: any) => {
        this.assessmentResult = {
          score: response.data.assessmentScore,
          message: response.data.message
        };
      });
  }

  private onSaveResponsesSuccess(): void {
    Swal.fire({
      title: 'Success!',
      text: 'Assessment saved properly!',
      icon: 'success',
      confirmButtonText: 'Got it!'
    });
  }

  private onSaveResponsesFailure(): void {
    Swal.fire({
      title: 'Error!',
      text: 'Assessment could not be saved properly!',
      icon: 'error',
      confirmButtonText: 'Got it!'
    });
  }

  private getEmployees(): void {
    this.employeeAssessmentService
      .getMyEmployees(this.loggedUser.idNumber)
      .subscribe(
        (response) => {
          this.onGetEmployeesSuccess(response);
        },
        (error) => {
          this.onGetEmployeesError();
        }
      );
  }

  private onGetEmployeesSuccess(response: any): void {
    this.employees = response.data;
  }

  private onGetEmployeesError(): void {
    Swal.fire({
      title: 'Error!',
      text: 'There was an error getting employees by leader!',
      icon: 'error',
      confirmButtonText: 'Got it!'
    });
  }
}
