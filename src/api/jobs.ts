import { Observable } from 'rxjs';

export interface Job {
    id: number;
    name: string;
    run_status: string;
    last_run: string;
    is_paused: boolean;
}

export interface JobResponse {
    jobs: Job[];
    total_count: number;
}

export class JobsApi {
    getJobs(sort: string): Observable<JobResponse> {
        let results = Observable.create(observer => {
            setTimeout(() => {
                let response: JobResponse = {
                    jobs: [
                        {
                            id: 1,
                            name: 'Job 1',
                            run_status: 'In Progress',
                            last_run: '10/10/2020 2:45pm MST',
                            is_paused: false
                        },
                        {
                            id: 2,
                            name: 'Job 2',
                            run_status: 'Completed',
                            last_run: '10/10/2020 2:45pm MST',
                            is_paused: true
                        },
                        {
                            id: 3,
                            name: 'Job 3',
                            run_status: 'Completed',
                            last_run: '10/10/2020 2:45pm MST',
                            is_paused: false
                        },
                        {
                            id: 4,
                            name: 'Job 4',
                            run_status: 'Completed',
                            last_run: '10/10/2020 2:45pm MST',
                            is_paused: false
                        }
                    ],
                    total_count: 4
                }
          
                observer.next(response);
                observer.complete();
            }, 1000);
        })

        return results;
    }
}