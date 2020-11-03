import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { Job, JobResponse } from '../api/jobs';

// Services provide an abstraction over the API calls and types
export interface ServiceJob extends Job {}
export interface JobsServiceResponse extends JobResponse {}

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  api: Api | null;

  constructor() {
    this.api = new Api();
  }

  getJobs(sort: string): Observable<JobsServiceResponse> {
    return this.api.jobs.getJobs(sort);
  }

  createJob(): Observable<boolean> {
    return this.api.jobs.createJob();
  }

  runJob(jobId: number): Observable<boolean> {
    return this.api.jobs.runJob(jobId);
  }

  pauseJob(jobId: number): Observable<boolean> {
    return this.api.jobs.pauseJob(jobId);
  }

  editJob(jobId: number): Observable<boolean> {
    return this.api.jobs.editJob(jobId);
  }
}
