import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {

  loggedIn: boolean = true;

  ngOnInit(): void {
  }

  signIn() {
    this.loggedIn = true;
    console.log('sign in', this.loggedIn);
  }

  signOut() {
    this.loggedIn = false;
    console.log('sign out', this.loggedIn);
  }

}
