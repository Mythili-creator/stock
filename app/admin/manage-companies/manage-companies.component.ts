import { Component, OnInit } from '@angular/core';
import {companyList} from '../company';
import {StockServiceService } from 'src/app/service/stock-service.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {

company1: companyList = {
  id:0,
    name: "",
    turnOver:0,
    ceo:"",
    boardOfDirectors:"",
    sectorId:"",
    brief:"",
    stockCode:0

  };
  userName:String
  
  constructor(private stockService :StockServiceService, public router: Router, private authService:AuthServiceService) { }

  ngOnInit() {
    this.userName=this.authService.getUserName();

    this.stockService.getAllCompanies().subscribe(
      data => {
      
        this.company1 = data;
        console.log("   T "+this.company1.ceo);
        console.log("HIIIIIIIIII");
      }
    );

   
  }

    logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
