import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {UserList } from '../UserList';
import { AuthServiceService } from "src/app/service/auth-service.service";
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 authenticated: boolean = true;
  loggedUser: UserList;
  constructor(private service: AuthServiceService, public router: Router) { }

  ngOnInit() {
    this.service.Invalid = false;
    this.loggedUser = {
      userName: "",
      password: "",
      email: "",
      mobNum: "",
      confirmed: false,
      roleId: 0
    };
  }
  onLogin() {
    console.log(this.loggedUser.userName);
    this.service.authenticateUser(
      this.loggedUser.userName,
      this.loggedUser.password
    );
    console.log("hii");
  }

}
