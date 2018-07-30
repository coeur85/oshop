import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private auth:AuthService,private router:Router, private userdb: UserService){

    this.auth.user$.subscribe(x=> 
      {
        if(x){
        let url = localStorage.getItem('returnUrl');
        console.log(url);
        this.router.navigateByUrl(url);
        this.userdb.save(x);
        }

      });
  }
}
