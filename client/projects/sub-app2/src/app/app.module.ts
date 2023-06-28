import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Table2Component } from './table2/table2.component';
import { Table1Component } from './table1/table1.component';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    Table2Component,
    Table1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class Module2Module {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: []   
    };
  }
}