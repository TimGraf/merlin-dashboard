import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService, ServiceUser, UserServiceResponse } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:  [ UsersService ]
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['avatar', 'name', 'email'];
  data: ServiceUser[] = [];

  itemsPerPage: number = 5;
  resultsLength: number = 0;
  isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usersService: UsersService) { 
    this.usersService = usersService;
  }

  ngAfterViewInit() {
    this.getUsers();
    this.paginator.page.subscribe(data => this.getUsers());
  }

  getUsers() {
    this.usersService.getUsers(this.paginator.pageIndex + 1, this.itemsPerPage)
      .subscribe((response: UserServiceResponse) => {
        this.itemsPerPage = response.itemsPerPage;
        this.resultsLength = response.resultsLength;
        this.data = response.users;
      });
  }

  createUser() {
    this.usersService.createUser();
  }
}
