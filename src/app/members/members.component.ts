import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
// import {FormBuilder, FormGroup, Validators, FormControlName, FormControl} from "@angular/forms";


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent {
  selectedValue: string;
  if(selectedValue){
    this.router.navigateByUrl('/others');
}
  foods = [
    {value: 'IT', viewValue: 'IT'},
    {value: 'TRAVEL', viewValue: 'TRAVEL'},
    {value: 'REAL State', viewValue: 'REAL State'},
    {value: 'others', viewValue: 'others'}
  ];
  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {//private fb: FormBuilder

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  // logout() {
  //   this.af.auth.logout();
  //   // console.log('logged out');
  //   this.router.navigateByUrl('/login');
  // }
//   myForm: FormGroup;
//   error = false;
//   errorMessage = '';
//   ngOnInit(): any {
//     this.myForm = this.fb.group({
//       email: ['', Validators.compose([
//         Validators.required,
//         this.isEmail
//       ])],
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.compose([
//         Validators.required,
//         this.isEqualPassword.bind(this)
//       ])],
//     });
//   }
//   isEmail(control: FormControl): {[s: string]: boolean} {
//     if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
//       return {noEmail: true};
//     }
//   } isEqualPassword(control: FormControl): {[s: string]: boolean} {
//   if (!this.myForm) {
//     return {passwordsNotMatch: true};
//
//   }
//   if (control.value !== this.myForm.controls['password'].value) {
//     return {passwordsNotMatch: true};
//   }
// }
}
