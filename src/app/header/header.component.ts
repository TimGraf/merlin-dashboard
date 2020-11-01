import { Component, OnInit } from '@angular/core';
import { Api } from '../../api/api'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  api: Api | null;

  constructor() { 
    this.api = new Api();
  }

  ngOnInit(): void {
  }

  editUser() {
    this.api!.users.editUser();
  }

  logOutUser() {
    this.api!.users.logOutUser();
  }
}
