import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'pm-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
      ngOnInit(): void{
      }
}
