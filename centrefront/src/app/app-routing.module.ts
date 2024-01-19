import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './carts/component/cart/cart.component';
import { FormationDetailsComponent } from './formations/component/formation-details/formation-details.component';
import { TousformationComponent } from './formations/component/tousformation/tousformation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
 // {path:"details",component:FormationDetailsComponent},
  {path:"details/:id",component:FormationDetailsComponent},
  {path:"details",component:TousformationComponent},
  {path:"cart", component:CartComponent},
  {path:"loginuser",component:LoginComponent},
  {path:"registuser",component:RegisterComponent},
  {path:"",component:HomeComponent}
 // {path:"",redirectTo:"forma",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
