import { Component, OnInit } from '@angular/core';
import {StockServiceService } from 'src/app/service/stock-service.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {Stock} from '../stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
 stock : Stock={
    id:0,
    stockExchange:"",
    brief:"",
    contact:"",
    remark:""
 }
 userName:String;
  stockForm: FormGroup;
  constructor(private stockService :StockServiceService, public router: Router, private authService:AuthServiceService) { }

  ngOnInit() {
      this.userName=this.authService.getUserName();

        this.stockForm = new FormGroup({
      stockExchange: new FormControl("", [Validators.required]),
      brief: new FormControl("", [
        Validators.required
      ]),
      contact: new FormControl("", [
        Validators.required,
      ]),
 remark : new FormControl("", [
        Validators.required
      ]),

    }, );

       this.stockForm
      .get("stockExchange")
      .valueChanges.subscribe(value => (this.stock.stockExchange = value));
      
       this.stockForm
      .get("brief")
      .valueChanges.subscribe(value => (this.stock.brief = value));

      this.stockForm
      .get("contact")
      .valueChanges.subscribe(value => (this.stock.contact = value));

      this.stockForm
      .get("remark")
      .valueChanges.subscribe(value => (this.stock.remark = value));

      
  }
      onSubmit() {
    if (this.stockForm.valid) {
      console.log(this.stock.brief);
      this.stockService.addStock(this.stock).subscribe();
      alert("Stock Exchanges added successfully");
      this.router.navigateByUrl("/manage-stock-exchange");
    }
  }

   get stockExchange() {
    return this.stockForm.get("stockExchange");
  }
   get contact() {
    return this.stockForm.get("contact");
  }

    get brief() {
    return this.stockForm.get("brief");
  }
    get remark() {
    return this.stockForm.get("remark");
  }

    logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }


}
