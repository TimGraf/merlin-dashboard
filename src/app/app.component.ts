import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'merlin-dashboard';
  isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.authService.isAuthenticated().then((val: boolean) => {
      if (val != this.isAuthenticated) {
        this.isAuthenticated = val;
      }
    });
  }
}
