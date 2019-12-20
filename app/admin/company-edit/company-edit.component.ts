import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {companyList} from '../company';
import {StockServiceService } from 'src/app/service/stock-service.service';
import {AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  constructor(
     private stockService: StockServiceService,
    private service2: AuthServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 editForm: FormGroup;
   movieId = this.route.snapshot.paramMap.get("id");
  company: any;

  ngOnInit() {
    let mid = Number(this.movieId);
    console.log(this.movieId);
    this.stockService.getCompany(mid).subscribe(data => {
      console.log(data);
      this.company = data;

      this.editForm = new FormGroup({
      name: new FormControl(this.company.name, [Validators.required]),
      turnOver: new FormControl(this.company.turnOver, [
        Validators.required
      ]),
      ceo: new FormControl(this.company.ceo, [
        Validators.required,
      ]),
 boardOfDirectors : new FormControl(this.company.boardOfDirectors, [
        Validators.required
      ]),
      sectorId : new FormControl(this.company.sectorId, [
        Validators.required
      ]),
       brief: new FormControl(this.company.brief, [
        Validators.required
      ]),
       stockCode: new FormControl(this.company.stockCode, [
        Validators.required
      ]),
    }, );

       this.editForm
      .get("name")
      .valueChanges.subscribe(value => (this.company.name = value));
      
       this.editForm
      .get("turnOver")
      .valueChanges.subscribe(value => (this.company.turnOver = value));

      this.editForm
      .get("ceo")
      .valueChanges.subscribe(value => (this.company.ceo = value));

      this.editForm
      .get("boardOfDirectors")
      .valueChanges.subscribe(value => (this.company.boardOfDirectors = value));

      this.editForm
      .get("sectorId")
      .valueChanges.subscribe(value => (this.company.sectorId = value));

      this.editForm
      .get("brief")
      .valueChanges.subscribe(value => (this.company.brief = value));

      this.editForm
      .get("stockCode")
      .valueChanges.subscribe(value => (this.company.stockCode = value));
      
  },
  error=>{
    console.log("error");
  } );
  }
 
  get name() {
    return this.editForm.get("name");
  }
   get turnOver() {
    return this.editForm.get("turnOver");
  }
    get ceo() {
    return this.editForm.get("ceo");
  }
    get boardOfDirectors() {
    return this.editForm.get("boardOfDirectors");
  }
  get sectorId() {
    return this.editForm.get("sectorId");
  }
    get brief() {
    return this.editForm.get("brief");
  }
    get stockCode() {
    return this.editForm.get("stockCode");
  }
  onEdit() {
    console.log("onedit");
    this.stockService.updateCompany(this.company).subscribe();
    alert("Company details editted successfully");
    this.router.navigateByUrl("/manage-company");
    
  }
}
