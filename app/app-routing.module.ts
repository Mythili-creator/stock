import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserLoginComponent } from './site/user-login/user-login.component';
import { ImportExcelComponent } from './admin/import-excel/import-excel.component';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { ManageCompaniesComponent } from './admin/manage-companies/manage-companies.component';
import { ManageStockExchangesComponent } from './admin/manage-stock-exchanges/manage-stock-exchanges.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { AddStockComponent } from './admin/add-stock/add-stock.component';
import { CompanyEditComponent } from './admin/company-edit/company-edit.component';
import { StockEditComponent } from './admin/stock-edit/stock-edit.component';
const routes: Routes = [

  { path: "login", component: UserLoginComponent },
  { path: "signup", component: UserSignupComponent },
  { path: "", component: UserLoginComponent },
    { path: "manage-stock-exchange", component: ManageStockExchangesComponent },
      { path: "import-excel", component: ImportExcelComponent },
    { path: "manage-company", component: ManageCompaniesComponent },
    { path: "admin-home", component: AdminHomeComponent },
      { path: "add-company", component: AddCompanyComponent },
       { path: "add-stock", component: AddStockComponent },
     { path: "stock-edit/:id", component: StockEditComponent },
    { path: "company-edit/:id", component: CompanyEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
