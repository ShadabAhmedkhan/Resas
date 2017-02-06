import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { moveIn } from './router.animations';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class AppComponent {
  constructor(public af: AngularFire,private router: Router) {

  }
  logout() {
  this.af.auth.logout();
  // console.log('logged out');
  this.router.navigateByUrl('/login');
}
}
