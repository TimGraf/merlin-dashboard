import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:  [ UsersService, AuthService ]
})
export class HeaderComponent implements OnInit {

  constructor(private usersService: UsersService, private authService: AuthService) { 
    this.usersService = usersService;
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  editUser() {
    this.usersService.editUser();
  }

  logOutUser() {
    this.authService.logOut();
  }
}
