import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AppGuard] },
  { path: 'jobs', component: JobsComponent, canActivate: [AppGuard] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [AppGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AppGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
