import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { FormeditComponent } from './formedit/formedit.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path:"",
    component: RegisterComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"forms",
    component:FormsComponent,
  },
  {
    path:"tables",
    component:TablesComponent
  },
  {
    path:"tables/:id",
    component:FormeditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
