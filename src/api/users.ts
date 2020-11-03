import { AxiosInstance } from 'axios';
import { Observable, from } from 'rxjs';

export interface User {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
}

export interface UserResponse {
    data: User[];
    per_page: number;
    total: number;
}

export class UsersApi {
    // TODO this is just s sample API for working with Axios and observables
    client: AxiosInstance | null;
    apiRootUrl: string = "https://reqres.in";

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    getUsers(page: number, perPage: number) {
        return new Observable<any>(observer => {
            this.client.get(`${this.apiRootUrl}/api/users?page=${page}&per_page${perPage}`)
            .then(response => {
                observer.next(response);
            })
            .catch(error => {
                observer.error(error);
            })
            .finally(() => {
                observer.complete();
            });
        })
    }

    createUser(): Observable<boolean> {
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

    editUser(): Observable<boolean> {
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
