import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { UserLoginComponent } from './site/user-login/user-login.component';

import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { ManageCompaniesComponent } from './admin/manage-companies/manage-companies.component';
import { ManageStockExchangesComponent } from './admin/manage-stock-exchanges/manage-stock-exchanges.component';
import { ImportExcelComponent } from './admin/import-excel/import-excel.component';
import { CompanyEditComponent } from './admin/company-edit/company-edit.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { StockEditComponent } from './admin/stock-edit/stock-edit.component';
import { AddStockComponent } from './admin/add-stock/add-stock.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    ManageCompaniesComponent,
    ManageStockExchangesComponent,
    ImportExcelComponent,
    CompanyEditComponent,
    AdminHomeComponent,
    AddCompanyComponent,
    StockEditComponent,
    AddStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
