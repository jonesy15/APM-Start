import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
  ngOnInit(): void {
  }

  signIn(state: boolean) {
    console.log({state});
    this.loggedIn = state;
  }
}
