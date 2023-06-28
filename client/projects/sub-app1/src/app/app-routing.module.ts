import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table2Component } from './table2/table2.component';
import { Table1Component } from './table1/table1.component';

const routes: Routes = [  
  { path: 'module1/table1', component: Table1Component },
  { path: 'module1/table2', component: Table2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
