/**
 * Created by Angularjs2.0 on 2/5/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {MainpageComponent} from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { OthersComponent } from './members/others/others.component';

// import {AppComponent} from './app.component';

export const router: Routes = [
  // { path: '', redirectTo: 'app', pathMatch: 'full' },
  // {path:'app', component:AppComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard]},
  { path: 'others', component:OthersComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
