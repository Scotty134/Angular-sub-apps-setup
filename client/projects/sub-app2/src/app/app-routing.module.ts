import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';

const routes: Routes = [
  {path: 'module2/table1', component: Table1Component},
  {path: 'module2/table2', component: Table2Component},
  {path: 'module2', redirectTo: 'module2/table1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
