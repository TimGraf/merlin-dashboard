import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { UserResponse, User } from '../api/users';

// Services provide an abstraction over the API calls and types
export interface ServiceUser extends User {
  name: string;
}

export interface UserServiceResponse {
  users: ServiceUser[];
  itemsPerPage: number;
  resultsLength: number;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  api: Api | null;

  constructor() {
    this.api = new Api();
  }

  getUsers(page: number, itemsPerPage: number): Observable<UserServiceResponse> {
    console.log('UsersService.getUsers');
    let results = new Observable<UserServiceResponse>(observer => {
      this.api!.users.getUsers(page, itemsPerPage)
        .subscribe((response: AxiosResponse<UserResponse>) => {
          observer.next(this.transformApiResponse(response));
          observer.complete();
        });
      });

    return results;
  }

  private transformApiResponse(response: AxiosResponse<UserResponse>): UserServiceResponse {
    return {
      itemsPerPage: response.data.per_page,
      resultsLength: response.data.total,
      users: response.data.data.map(user => {
        return {
          ...user,
          name: `${user.first_name} ${user.last_name}`
        };
      })
    };
  }

  createUser(): Observable<boolean> {
    console.log('UsersService.createUser');
    return this.api!.users.createUser();
  }

  editUser(): Observable<boolean> {
    console.log('UsersService.editUser');
    return this.api.users.editUser();
  }
}
