import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './bs-nav-bar.component.html',
  styleUrls: ['./bs-nav-bar.component.css']
})
export class BsNavBarComponent  {
 user$: Observable<firebase.User>;

  constructor(public Auth: AuthService) {
    // this.afAuth.authState.subscribe(user=> {
    //   // this.user = user;
    //   // console.log(user);
    // });
    this.user$ = this.Auth.user$;

   }

  logout() {
    this.Auth.logout();
  }

}
