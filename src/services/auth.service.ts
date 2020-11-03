import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Api } from '../api/api';

// See the following: 
// https://developer.okta.com/blog/2019/02/12/secure-angular-login
// https://developer.okta.com/code/angular/okta_angular_auth_js/#create-an-authentication-service

// Services provide an abstraction over the API calls and types
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: Api | null;

  constructor(private router: Router) {
    this.api = new Api();
  }

  async isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      return this.api.auth.isAuthenticated().subscribe(response => {
        resolve(response);
      });
    });
  }

  async logout() {
    //await this.oktaAuth.logout({
    //  postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI
    //});
    return new Promise<boolean>((resolve, reject) => {
      return this.api.auth.logOut().subscribe(response => {
        this.router.navigate(['/login']);
        resolve(response);
      });
    });
  }

  login(originalUrl) {
    // Save current URL before redirect
    //sessionStorage.setItem('okta-app-url', originalUrl || this.router.url);

    // Launches the login redirect.
    //this.oktaAuth.token.getWithRedirect({
    //  scopes: ['openid', 'email', 'profile']
    //});
    return new Promise<boolean>((resolve, reject) => {
      return this.api.auth.logIn().subscribe(response => {
        this.router.navigate(['/dashboard']);
        resolve(response);
      });
    });
  }
}
