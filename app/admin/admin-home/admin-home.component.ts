import { Component, OnInit } from '@angular/core';
import {AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
 userName:String
  constructor(private authService:AuthServiceService, public router: Router) { }

  ngOnInit() {
    this.userName=this.authService.getUserName();
  }
    logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  
}
}
