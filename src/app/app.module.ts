import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SavingsComponent } from './savings/savings.component';
import { MortgageComponent } from './mortgage/mortgage.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingsComponent,
    MortgageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
