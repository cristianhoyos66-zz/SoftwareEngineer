import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AssessmentResultsService {
  constructor(private http: HttpClient) {}

  getAssessmentResults(employeeId: string): Observable<Object> {
    const params = new HttpParams().set('employee_id', employeeId);
    return this.http.get(`${AppConstants.apiHost}/assessment-results`, {
      params
    });
  }
}
