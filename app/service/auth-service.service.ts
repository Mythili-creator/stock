import { Injectable } from "@angular/core";

import { UserAuthService } from "./user-auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  loggedInUser: boolean;
  adminFlag: boolean;
  loggedUserName: string;
  flag: boolean;
  Invalid:boolean=false;

  error: string;
  constructor(
    private userService: UserAuthService,
    public router: Router
  ) {}
  getUserName() {
    return this.loggedUserName;
  }
  logOut() {
    this.loggedInUser = false;
    this.adminFlag = false;
    this.loggedUserName = "";
    this.userService.setToken("");
  }
  isLogged() {
    return this.loggedInUser;
  }

  authenticateUser(userName: string, password: string) {
    console.log("Authentication called");
    this.userService.authenticate(userName, password).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.userService.setRole(data.role);
        this.loggedUserName = userName;
        let x = data.role;
        if (x == "ADMIN") {
          this.adminFlag = true;
          this.router.navigateByUrl("/admin-home");
        } else {
          this.adminFlag = false;
        }
        this.loggedInUser = true;
      },
      error => {
        console.log(error);
        if (error.status == 401) {
          this.error = "Invalid user ";
          this.Invalid=true;
          console.log(this.error);
          this.router.navigateByUrl("/login");
        }
      }
    );
  }
  isAdmin() {
    return this.adminFlag;
  }
}
