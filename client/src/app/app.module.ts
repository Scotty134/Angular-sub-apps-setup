import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { WildcardRoutingModule } from './wildcard-routing.module';
import { AppModule1 } from 'projects/sub-app1/src/app/app.module';
import { Module2Module } from 'projects/sub-app2/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModule1,
    Module2Module.forRoot(),
    WildcardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
