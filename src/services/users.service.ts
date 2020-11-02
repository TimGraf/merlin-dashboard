import { Injectable } from '@angular/core';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { UserResponse } from '../api/users';

export interface ServiceUser {
  avatar: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
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
    return this.api.users.editUser();
  }
}
