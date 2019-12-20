import { Component, OnInit } from '@angular/core';
import {companyList} from '../company';
import {StockServiceService } from 'src/app/service/stock-service.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
company: companyList = {
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
   companyForm: FormGroup;
  constructor(private stockService :StockServiceService, public router: Router, private authService:AuthServiceService) { }

  ngOnInit() {
      this.userName=this.authService.getUserName();

        this.companyForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      turnOver: new FormControl("", [
        Validators.required
      ]),
      ceo: new FormControl("", [
        Validators.required,
      ]),
 boardOfDirectors : new FormControl("", [
        Validators.required
      ]),
      sectorId : new FormControl("", [
        Validators.required
      ]),
       brief: new FormControl("", [
        Validators.required
      ]),
       stockCode: new FormControl("", [
        Validators.required
      ]),
    }, );

       this.companyForm
      .get("name")
      .valueChanges.subscribe(value => (this.company.name = value));
      
       this.companyForm
      .get("turnOver")
      .valueChanges.subscribe(value => (this.company.turnOver = value));

      this.companyForm
      .get("ceo")
      .valueChanges.subscribe(value => (this.company.ceo = value));

      this.companyForm
      .get("boardOfDirectors")
      .valueChanges.subscribe(value => (this.company.boardOfDirectors = value));

      this.companyForm
      .get("sectorId")
      .valueChanges.subscribe(value => (this.company.sectorId = value));

      this.companyForm
      .get("brief")
      .valueChanges.subscribe(value => (this.company.brief = value));

      this.companyForm
      .get("stockCode")
      .valueChanges.subscribe(value => (this.company.stockCode = value));
      
  }
    onSubmit() {
    if (this.companyForm.valid) {
      console.log(this.company.boardOfDirectors);
      this.stockService.addCompany(this.company).subscribe();
      alert("Company added succcessfully");
      this.router.navigateByUrl("/manage-company");
    }
  }

   get name() {
    return this.companyForm.get("name");
  }
   get turnOver() {
    return this.companyForm.get("turnOver");
  }
    get ceo() {
    return this.companyForm.get("ceo");
  }
    get boardOfDirectors() {
    return this.companyForm.get("boardOfDirectors");
  }
  get sectorId() {
    return this.companyForm.get("sectorId");
  }
    get brief() {
    return this.companyForm.get("brief");
  }
    get stockCode() {
    return this.companyForm.get("stockCode");
  }

    logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
