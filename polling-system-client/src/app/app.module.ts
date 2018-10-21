import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ChartsModule,
    HttpClientModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
