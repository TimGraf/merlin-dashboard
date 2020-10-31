import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobActionMenuComponent } from './job-action-menu.component';

describe('JobActionMenuComponent', () => {
  let component: JobActionMenuComponent;
  let fixture: ComponentFixture<JobActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobActionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
