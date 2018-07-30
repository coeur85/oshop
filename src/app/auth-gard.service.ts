import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
 from '../../node_modules/@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private auth: AuthService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.auth.user$.map(user => {
      if (user) { return true; } 
      else { 
        let returnUrl = state.url;
        this.router.navigate(['/login'], { queryParams: { returnUrl : returnUrl }});
        return false; }

    });

  }
}
