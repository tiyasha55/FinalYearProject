import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PtLoginComponent } from './components/pre-auth/patient/pt-login/pt-login.component';
import { PtRegComponent } from './components/pre-auth/patient/pt-reg/pt-reg.component';
import { PtProfileComponent } from './components/post-auth/pt-profile/pt-profile.component';
import { OrgProfileComponent } from './components/post-auth/org-profile/org-profile.component';
import {DocProfileComponent} from './components/post-auth/doc-profile/doc-profile.component';
import {DocListComponent} from './components/post-auth/doc-list/doc-list.component';




const routes: Routes = [
  {path :'',component:HomeComponent},
   { path :'pt_login',component:PtLoginComponent},
   {path :'pt_reg',component:PtRegComponent},
 {path:'pt_profile',component:PtProfileComponent},
 {path:'org_profile',component:OrgProfileComponent},
 {path: 'doc-profile',component:DocProfileComponent},
 {path: 'doc-list',component:DocListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
