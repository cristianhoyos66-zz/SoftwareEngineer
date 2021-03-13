import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { LoggedUserService } from 'src/app/auth/logged-user.service';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAssessmentService {
  constructor(
    private http: HttpClient,
    private loggedUserService: LoggedUserService
  ) {}

  getMyEmployees(leaderId: string): Observable<Object> {
    const params = new HttpParams().set('leader_id', leaderId);
    return this.http.get(`${AppConstants.apiHost}/employees`, {
      params
    });
  }

  saveEmployeeAssessment(body: Object): Observable<Object> {
    return this.http.post(`${AppConstants.apiHost}/assessments`, body);
  }

  generateSaveResponsesBody(responses: number[], employeeId: string): Object[] {
    let responsesInfo: Object[] = [];
    let responsesInfoBody: any = {};
    for (let i = 0; i < 13; i++) {
      responsesInfo.push({
        question_id: i + 1,
        employee_id: employeeId,
        leader_id: this.loggedUserService.loggedUser.idNumber,
        result: responses[i]
      });
    }
    responsesInfoBody.responses_info = responsesInfo;
    return responsesInfoBody;
  }
}
