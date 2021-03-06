import { AxiosInstance } from 'axios';
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
    client: AxiosInstance | null;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    getJobs(sort: string): Observable<JobResponse> {
        // TODO replace with real API call
        let results = new Observable<JobResponse>(observer => {
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
            }, 500);
        });

        return results;
    }

    createJob(): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 500);
        })

        return results;
    }

    runJob(jobId: number): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 500);
        })

        return results;
    }

    pauseJob(jobId: number): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 500);
        })

        return results;
    }

    editJob(jobId: number): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 500);
        })

        return results;
    }
}