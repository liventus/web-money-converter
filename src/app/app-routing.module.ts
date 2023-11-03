import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CambioMonedaComponent} from "./cambio-moneda/cambio-moneda.component";

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'convertir',
    component: CambioMonedaComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
