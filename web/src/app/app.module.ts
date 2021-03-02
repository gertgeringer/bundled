import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PersonComponent } from "./person.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([{
      path: "person", component: PersonComponent
    }, {
      path: "", redirectTo: "/person", pathMatch: "full"
    }]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
