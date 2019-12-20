import { Injectable } from '@angular/core';
import {UserAuthService } from './user-auth.service';
import {UserList } from '../site/UserList';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {Stock} from '../admin/stock';
import {companyList} from '../admin/company';
@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(
    private http: HttpClient,
    public service: UserAuthService
  ) {}

  private baseUrl = environment.baseUrl;


    addUser(newuser: UserList) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("Adduser" + newuser);
    return this.http.post(`${this.baseUrl}/authentication-service/users`, newuser, httpOptions);
  } 
  getAllCompanies(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.get(this.baseUrl+ "/stock-exchange-service/company", httpOptions);
  }

   addCompany(company: companyList) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("AddCompany" + company);
    return this.http.post(`${this.baseUrl}/stock-exchange-service/company/addCompany`, company, httpOptions);
  } 

  getCompany(id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("vgfnjyn");
     return this.http.get(`${this.baseUrl}/stock-exchange-service/company/${id}`, httpOptions);
  }
    updateCompany(company: any) {
    console.log(company);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.put(`${this.baseUrl}/stock-exchange-service/company`, company, httpOptions);
  }

    getAllStock(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.get(this.baseUrl+ "/stock-exchange-service/stock", httpOptions);
  }


  getStock(id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("vgfnjyn");
     return this.http.get(`${this.baseUrl}/stock-exchange-service/stock/${id}`, httpOptions);
  }
    updateStock(stock: any) {
    console.log(stock);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    return this.http.put(`${this.baseUrl}/stock-exchange-service/stock`,stock, httpOptions);
  }
   addStock(stock: Stock) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.service.getToken()
      })
    };
    console.log("Add Stock" + stock);
    return this.http.post(`${this.baseUrl}/stock-exchange-service/stock/addStock`, stock, httpOptions);
  } 


}
