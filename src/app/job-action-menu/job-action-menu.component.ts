import { Component, OnInit, Input } from '@angular/core';
import { Api } from '../../api/api';

@Component({
  selector: 'app-job-action-menu',
  templateUrl: './job-action-menu.component.html',
  styleUrls: ['./job-action-menu.component.css']
})
export class JobActionMenuComponent implements OnInit {

  @Input('jobid')
  jobId: number = 0;
  api: Api | null;

  constructor() { 
    this.api = new Api();
  }

  ngOnInit(): void {
    console.log(`Job ID: ${this.jobId}`);
  }

  pauseJob(): void {
    this.api!.jobs.pauseJob(this.jobId);
  }

  runJob(): void {
    this.api!.jobs.runJob(this.jobId);
  }

  editJob(): void {
    this.api!.jobs.editJob(this.jobId);
  }
}
