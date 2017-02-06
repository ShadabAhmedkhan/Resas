import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { MainpageComponent } from './mainpage/mainpage.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyDb2lBaim48zI1V7-ohlylUtSkEK94Z_OA',
  authDomain: 'https://resas-e4743.firebaseio.com',
  databaseURL: 'https://resas-e4743.firebaseio.com',
  storageBucket: 'resas-e4743.appspot.com',
  messagingSenderId: 'resas-e4743.appspot.com'
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
