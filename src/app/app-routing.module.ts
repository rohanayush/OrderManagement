import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:"orders",component:OrdersComponent
  },
  {
    path:"forms",component:FormsComponent,
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
