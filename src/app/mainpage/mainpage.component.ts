import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class MainpageComponent {

  constructor(private router: Router) {

  }



}
