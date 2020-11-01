import { Axios } from  'axios-observable';
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
    client: Axios | null;
    apiRootUrl: string = "https://reqres.in";

    constructor(client: Axios) {
        this.client = client;
    }

    getUsers(page: number, perPage: number) {
        return this.client.get(`${this.apiRootUrl}/api/users?page=${page}&per_page${perPage}`);
    }

    createUser(): Observable<boolean> {
        // TODO replace with real API call
        console.log('createUser');

        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 1000);
        })

        return results;
    }

    editUser(): Observable<boolean> {
        // TODO replace with real API call
        console.log('editUser');

        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 1000);
        })

        return results;
    }

    logOutUser(): Observable<boolean> {
        // TODO replace with real API call
        console.log('logOutUser');

        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 1000);
        })

        return results;
    }
}
