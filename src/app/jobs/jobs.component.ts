import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { JobsService, ServiceJob } from '../../services/jobs.service';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers:  [ JobsService ]
})
export class JobsComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'run_status', 'last_run', 'is_paused', 'id'];
  data: ServiceJob[] = [];

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private jobsService: JobsService) { 
    this.jobsService = jobsService;
  }

  ngAfterViewInit() {
    this.sort!.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.jobsService.getJobs("acs");
        }),
        map(response => {
          this.isLoadingResults = false;
          this.resultsLength = response.total_count;
          return response.jobs;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

  createJob() {
    this.jobsService.createJob();
  }
}
