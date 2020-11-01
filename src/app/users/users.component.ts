import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { AxiosResponse } from 'axios';
import { Api } from '../../api/api';
import { User, UserResponse } from '../../api/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['avatar', 'name', 'email'];
  api: Api | null;
  data: User[] = [];

  itemsPerPage: number = 5;
  resultsLength: number = 0;
  isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 
    this.api = new Api();
  }

  ngAfterViewInit() {
    this.getUsers();
    this.paginator.page.subscribe(data => this.getUsers());
  }

  getUsers() {
    this.api!.users.getUsers(this.paginator.pageIndex + 1, this.itemsPerPage)
      .subscribe((response: AxiosResponse<UserResponse>) => {
        this.itemsPerPage = response.data.per_page;
        this.resultsLength = response.data.total;
        this.data = response.data.data.map(user => {
          return {
            ...user,
            name: `${user.first_name} ${user.last_name}`
          };
        });
      });
  }

  createUser() {
    this.api!.users.createUser();
  }
}
