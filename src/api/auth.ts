import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';

// See the following: 
// https://developer.okta.com/blog/2019/02/12/secure-angular-login
// https://developer.okta.com/code/angular/okta_angular_auth_js/#create-an-authentication-service

export class AuthApi {
    client: AxiosInstance | null;
    authenticated: boolean = false;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    isAuthenticated(): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                observer.next(this.authenticated);
                observer.complete();
            }, 500);
        })

        return results;
    }

    logOut(): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                this.authenticated = false;
                observer.next(this.authenticated);
                observer.complete();
            }, 500);
        })

        return results;
    }

    logIn(): Observable<boolean> {
        // TODO replace with real API call
        let results = new Observable<boolean>(observer => {
            setTimeout(() => {
                this.authenticated = true;
                observer.next(this.authenticated);
                observer.complete();
            }, 500);
        })

        return results;
    }
}