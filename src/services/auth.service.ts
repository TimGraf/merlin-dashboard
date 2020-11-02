import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: Api | null;

  constructor() {
    this.api = new Api();
  }

  isAuthenticated(): Observable<boolean> {
    console.log('AuthService.isAuthenticated');
    return this.api.auth.isAuthenticated();
  }

  logOut(): Observable<boolean> {
    return this.api.auth.logOut();
  }
}
