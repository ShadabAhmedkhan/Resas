import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { moveIn, fallIn, moveInLeft } from '../router.animations';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent {
  myForm: FormGroup;

  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router,fb:FormBuilder) {//private fb: FormBuilder

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

    this.myForm = fb.group({
      'FirstName': ['', Validators.required],
      'LastName': ['', Validators.required],
      'cName': ['', Validators.compose([Validators.required])],
      'AccountType': ['IT', Validators.required],
    });
  }
  onSubmit(myFormc): void {

    if(!this.myForm.valid){
      console.log("Form Not Valid");
      return;
    }



  }






}
