import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PreAuthComponent } from './shared/herader/pre-auth/pre-auth.component';
import { PostAuthComponent } from './shared/herader/post-auth/post-auth.component';
import { LoginComponent } from './components/pre-auth/organization/login/login.component';
import { RegistrationComponent } from './components/pre-auth/organization/registration/registration.component';
import { PtLoginComponent } from './components/pre-auth/patient/pt-login/pt-login.component';
import { PtProfileComponent } from './components/post-auth/pt-profile/pt-profile.component';
import { DocProfileComponent } from './components/post-auth/doc-profile/doc-profile.component';
import { OrgProfileComponent } from './components/post-auth/org-profile/org-profile.component';
import { PtRegComponent } from './components/pre-auth/patient/pt-reg/pt-reg.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PreAuthComponent,
    PostAuthComponent,
    LoginComponent,
    RegistrationComponent,
    PtLoginComponent,
    PtProfileComponent,
    DocProfileComponent,
    OrgProfileComponent,
    PtRegComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
