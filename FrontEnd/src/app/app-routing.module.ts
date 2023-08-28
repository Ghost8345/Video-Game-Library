import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [LoginGuard], canLoad: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
