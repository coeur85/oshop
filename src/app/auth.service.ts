import { Injectable } from '@angular/core';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';
import * as firebase from '../../node_modules/firebase';
import { Observable } from '../../node_modules/rxjs';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
    private route: ActivatedRoute,private router:Router) {
    this.user$ = afAuth.authState;
   }

  login() {
    let url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', url);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    // .then(x=> 
    //   {
    //     url = localStorage.getItem('returnUrl');
    //     this.router.navigateByUrl(url);
    //   })
    ;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
