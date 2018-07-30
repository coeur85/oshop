import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bs-nav-bar',
  templateUrl: './bs-nav-bar.component.html',
  styleUrls: ['./bs-nav-bar.component.css']
})
export class BsNavBarComponent  {
 user$ : Observable<firebase.User>;

  constructor(private afAuth : AngularFireAuth) {
    // this.afAuth.authState.subscribe(user=> {
    //   // this.user = user;
    //   // console.log(user);
      
    // });
    this.user$ = afAuth.authState;

   }

  logout(){
    this.afAuth.auth.signOut();
  }

}
