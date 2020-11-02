import Axios from  'axios-observable';
import { Observable } from 'rxjs';

export class AuthApi {
    client: Axios | null;

    constructor(client: Axios) {
        this.client = client;
    }

    isAuthenticated(): Observable<boolean> {
        // TODO replace with real API call
        console.log('isAuthenticated');

        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                let response: boolean = true;
                observer.next(response);
                observer.complete();
            }, 500);
        })

        return results;
    }

    logOut(): Observable<boolean> {
        // TODO replace with real API call
        console.log('logOut');

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