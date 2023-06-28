import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'lobby', pathMatch: 'full'},
  //{ path: 'module1', loadChildren: () => import('projects/module1/src/app/app.module').then(m=>m.AppModule1) },
  //{path: 'module2', component: Module2Module},
  { path: 'lobby', component: LobbyComponent},
  { path: 'error', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
