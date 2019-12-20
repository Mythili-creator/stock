import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {UserList } from '../UserList';
import { StockServiceService } from "src/app/service/stock-service.service";
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
user: UserList = {
    userName: "",
    password: "",
    email: "",
    mobNum: "",
    confirmed: false,
    roleId: 0

  };
  userForm: FormGroup;
  passwordMatch: boolean;
  conPassword: String;

  constructor(
    private service: StockServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl("", [Validators.required,Validators.minLength(4)]),
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      mobNum: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9+]*')
      ]),
      'roleId': new FormControl('', [
        Validators.required
      ]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl("", [Validators.required])
    }, );
    this.userForm
      .get("userName")
      .valueChanges.subscribe(value => (this.user.userName = value));
    this.userForm
      .get("email")
      .valueChanges.subscribe(value => (this.user.email = value));
    this.userForm
      .get("mobNum")
      .valueChanges.subscribe(value => (this.user.mobNum = value));
    this.userForm
      .get("password")
      .valueChanges.subscribe(value => (this.user.password = value));
    this.userForm
      .get("confirmPassword")
      .valueChanges.subscribe(value => (this.conPassword = value));
    this.userForm
      .get('roleId')
      .valueChanges.subscribe(value => this.user.roleId = value);
  }
 isConfirmPasswordValid() {
    if ((this.userForm.get('password').value != null) && this.userForm.get('confirmPassword').value != null) {
      if ((this.userForm.get('password').value != this.userForm.get('confirmPassword').value)) {
        return true;
      } else {
        return false;
      }
    }
  }
  onSubmit() {
    if (this.conPassword == this.user.password && this.userForm.valid) {
      this.user.confirmed = true;
      this.service.addUser(this.user).subscribe();
      this.router.navigateByUrl("/login");
    } else {
      this.validateAllFormFields(this.userForm);
      console.log("#####");
      
    }
  }


  validateAllFormFields(formGroup: FormGroup) {  
    console.log("sss");
          
  Object.keys(formGroup.controls).forEach(field => {  
    const control = formGroup.get(field);             
    if (control instanceof FormControl) {             
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        
      this.validateAllFormFields(control);            
    }
  });
}

 get userName() {
    return this.userForm.get("userName");
  }
  get email() {
    return this.userForm.get("email");
  }
  get mobNum() {
    return this.userForm.get("mobNum");
  }
  get password() {
    return this.userForm.get("password");
  }
  get confirmPassword() {
    return this.userForm.get("confirmPassword");
  }
   get roleId() { return this.userForm.get('roleId'); }
}
