import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input('isAuthenticated')
  isAuthenticated: boolean = false;

  constructor(private usersService: UsersService, private authService: AuthService) { 
    this.usersService = usersService;
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  editUser() {
    this.usersService.editUser();
  }

  async logOutUser() {
    await this.authService.logout();
  }
}
