import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './shared/home/home.component';
import { PtLoginComponent } from './components/pre-auth/patient/pt-login/pt-login.component';
import { PtRegComponent } from './components/pre-auth/patient/pt-reg/pt-reg.component';
import { PtProfileComponent } from './components/post-auth/pt-profile/pt-profile.component';




const routes: Routes = [
  {path :'',component:HomeComponent},
  { path :'pt_login',component:PtLoginComponent},
  {path :'pt_reg',component:PtRegComponent},
 {path:'pt_profile',component:PtProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
