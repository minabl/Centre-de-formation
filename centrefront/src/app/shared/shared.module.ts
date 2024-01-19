import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './component/select/select.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SelectComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  
  ],
  exports:[HeaderComponent,
  FooterComponent,SelectComponent]//chaque module privet lazem y3tihim lhk bech yet3lo
})
export class SharedModule { }
