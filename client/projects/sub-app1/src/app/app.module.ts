import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule1 { }

@NgModule({})
export class Module1Module {
  static forChild(): ModuleWithProviders<AppModule1> {
    return {
      ngModule: AppModule1,
      providers: []   
    };
  }
}