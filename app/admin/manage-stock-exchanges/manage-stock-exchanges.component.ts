import { Component, OnInit } from '@angular/core';
import {Stock} from '../stock';
import {StockServiceService } from 'src/app/service/stock-service.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-manage-stock-exchanges',
  templateUrl: './manage-stock-exchanges.component.html',
  styleUrls: ['./manage-stock-exchanges.component.css']
})
export class ManageStockExchangesComponent implements OnInit {
 stock : Stock={
    id:0,
    stockExchange:"",
    brief:"",
    contact:"",
    remark:""
 }
 userName:String;
  
  constructor(private stockService :StockServiceService, public router: Router, private authService:AuthServiceService) { }

  ngOnInit() {
    this.userName=this.authService.getUserName();

    this.stockService.getAllStock().subscribe(
      data => {
      
        this.stock = data;
        console.log("   T "+this.stock);
        console.log("HIIIIIIIIII");
      }
    );

   
  }

    logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
