import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ChangeComponent } from './change/change.component';
import { OrderComponent } from './order/order.component';
import {GuardGuard} from './guard.guard';
import { ChildComponent } from './child/child.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { BillComponent } from './bill/bill.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';

const route:Routes=[
 // {path:'home',component:HomeComponent}
 {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'product',component:ProductComponent},
  {path:'order',component:OrderComponent,canActivate:[GuardGuard]},
  {path:'login',component:LoginComponent},
  {path:'changeprod',component:ChangeComponent},
  {path:'register',component:RegisterationComponent},
  {path:'purchaselist',component:PurchaselistComponent},
  {path:'bill',component:BillComponent},
  {path:'logout',component:LogoutComponent},
  
  {path:'**',component:PagenotfoundcomponentComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    ChangeComponent,
    OrderComponent,
    ChildComponent,
    PurchaselistComponent,
    BillComponent,
    LogoutComponent,
    PagenotfoundcomponentComponent  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,
    AppRoutingModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
