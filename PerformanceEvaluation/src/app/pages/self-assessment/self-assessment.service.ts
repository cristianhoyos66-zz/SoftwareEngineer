import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { LoggedUserService } from 'src/app/auth/logged-user.service';

@Injectable({
  providedIn: 'root'
})
export class SelfAssessmentService {
  constructor(
    private http: HttpClient,
    private loggedUserService: LoggedUserService
  ) {}

  saveEmployeeAssessment(body: Object): Observable<Object> {
    return this.http.post(`${AppConstants.apiHost}/self-assessments`, body);
  }

  generateSaveResponsesBody(responses: number[]): Object[] {
    let responsesInfo: Object[] = [];
    let responsesInfoBody: any = {};
    for (let i = 0; i < 13; i++) {
      responsesInfo.push({
        question_id: i + 1,
        employee_id: this.loggedUserService.loggedUser.idNumber,
        result: responses[i]
      });
    }
    responsesInfoBody.responses_info = responsesInfo;
    return responsesInfoBody;
  }
}
