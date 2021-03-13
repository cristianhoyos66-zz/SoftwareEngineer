import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from 'src/app/auth/logged-user.service';
import { LoggedUser } from 'src/app/models/logged-user';
import Swal from 'sweetalert2';
import { AssessmentResultsService } from '../assessment-results/assessment-results.service';
import { SelfAssessmentService } from './self-assessment.service';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.css']
})
export class SelfAssessmentComponent implements OnInit {
  responses: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  loggedUser: LoggedUser;
  loggedUserFullname: string = '';
  loggedUserName: string = '';
  assessmentResult: Object = {};

  constructor(
    private selfAssessmentService: SelfAssessmentService,
    private loggedUserService: LoggedUserService,
    private assessmentResultsService: AssessmentResultsService
  ) {
    this.loggedUser = this.loggedUserService.loggedUser;
  }

  ngOnInit(): void {
    this.loggedUserFullname = `${this.loggedUser.name} ${this.loggedUser.lastName1} ${this.loggedUser.lastName2}`;
    this.loggedUserName = this.loggedUser.username;
    this.getAssessmentResult();
  }

  saveResponses(): void {
    const saveResponsesBody = this.selfAssessmentService.generateSaveResponsesBody(
      this.responses
    );
    this.selfAssessmentService
      .saveEmployeeAssessment(saveResponsesBody)
      .subscribe(
        (response) => {
          this.onSaveResponsesSuccess();
          this.getAssessmentResult();
        },
        (error) => {
          this.onSaveResponsesFailure();
        }
      );
  }

  private getAssessmentResult(): void {
    this.assessmentResultsService
      .getAssessmentResults(this.loggedUser.idNumber)
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
}
