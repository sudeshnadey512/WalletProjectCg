import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { DepositComponent } from './deposit/deposit.component';
import { PrinttransactionComponent } from './printtransaction/printtransaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { ActivateGuard } from './activate.guard';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    CreateaccountComponent,
    MenuComponent,
    ShowbalanceComponent,
    DepositComponent,
    PrinttransactionComponent,
    WithdrawComponent,
    FundtransferComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([

      { path: '',redirectTo: 'login',pathMatch:'full'},
      {path: 'login', component: FirstpageComponent},
    {path: 'create',component:CreateaccountComponent},
    {path:'menu',component:MenuComponent,canActivate:[ActivateGuard]},
    {path: 'show',component:ShowbalanceComponent},
    {path: 'deposit',component:DepositComponent},
    {path: 'transaction',component:PrinttransactionComponent},
    {path:'withdraw',component:WithdrawComponent},
    {path:'fund',component:FundtransferComponent}




 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
