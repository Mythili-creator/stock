import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {companyList} from '../company';
import {StockServiceService } from 'src/app/service/stock-service.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
constructor(
     private stockService: StockServiceService,
    private service2: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 editForm: FormGroup;
   stockId = this.route.snapshot.paramMap.get("id");
  stock: any;

  ngOnInit() {
    let mid = Number(this.stockId);
    console.log(this.stockId);
    this.stockService.getStock(mid).subscribe(data => {
      console.log(data);
      this.stock = data;

      this.editForm = new FormGroup({
      stockExchange: new FormControl(this.stock.stockExchange, [Validators.required]),
    
      brief: new FormControl(this.stock.brief, [
        Validators.required,
      ]),
contact: new FormControl(this.stock.contact, [
        Validators.required
      ]),
      remark : new FormControl(this.stock.remark, [
        Validators.required
      ]),
      
    }, );

       this.editForm
      .get("stockExchange")
      .valueChanges.subscribe(value => (this.stock.stockExchange = value));
      
       this.editForm
      .get("brief")
      .valueChanges.subscribe(value => (this.stock.brief = value));

      this.editForm
      .get("contact")
      .valueChanges.subscribe(value => (this.stock.contact = value));

      this.editForm
      .get("remark")
      .valueChanges.subscribe(value => (this.stock.remark = value));
  },
  error=>{
    console.log("error");
  } );
  }
 
  get stockExchange() {
    return this.editForm.get("stockExchange");
  }
   get brief() {
    return this.editForm.get("brief");
  }
    get contact() {
    return this.editForm.get("contact");
  }
    get remark() {
    return this.editForm.get("remark");
  }
  
  onEdit() {
    console.log("onedit");
    this.stockService.updateStock(this.stock).subscribe();
     alert("Stock Exchange details editted successfully");
    this.router.navigateByUrl("/manage-stock-exchange");
    
  }
}
