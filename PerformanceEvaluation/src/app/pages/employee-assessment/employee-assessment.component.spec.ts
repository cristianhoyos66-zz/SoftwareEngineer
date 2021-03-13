import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssessmentComponent } from './employee-assessment.component';

describe('SelfAssessmentComponent', () => {
  let component: EmployeeAssessmentComponent;
  let fixture: ComponentFixture<EmployeeAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeAssessmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
