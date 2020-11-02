import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ AuthService ]
})
export class AppComponent {
  title = 'merlin-dashboard';
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().then((val: boolean) => {
      this.isAuthenticated = val;
      console.log(`Is Authenticated: ${this.isAuthenticated}`);
    });
  }
}
