import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Api } from '../../api/api';
import { Job } from '../../api/jobs';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'run_status', 'last_run', 'is_paused', 'id'];
  api: Api | null;
  data: Job[] = [];

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.api = new Api();
  }

  ngAfterViewInit() {
    this.sort!.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.api!.jobs.getJobs("acs");
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
    this.api!.jobs.createJob();
  }
}
