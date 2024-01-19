import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";

import { FormationsModule } from './formations/formations.module';
import { CartsModule } from './carts/carts.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormationsModule,
        CartsModule,
        UserModule
        
    ]
})
export class AppModule { }
