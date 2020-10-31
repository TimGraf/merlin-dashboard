import { Component, OnInit, Input } from '@angular/core';
import { JobsApi } from '../../api/jobs';

@Component({
  selector: 'app-job-action-menu',
  templateUrl: './job-action-menu.component.html',
  styleUrls: ['./job-action-menu.component.css']
})
export class JobActionMenuComponent implements OnInit {

  @Input('jobid')
  jobId: number = 0;
  jobsApi: JobsApi | null;

  constructor() { 
    this.jobsApi = new JobsApi();
  }

  ngOnInit(): void {
    console.log(`Job ID: ${this.jobId}`);
  }

  pauseJob(): void {
    this.jobsApi.pauseJob(this.jobId);
  }

  runJob(): void {
    this.jobsApi.runJob(this.jobId);
  }

  editJob(): void {
    this.jobsApi.editJob(this.jobId);
  }
}
