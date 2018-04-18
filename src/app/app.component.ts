import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  authSubscribe: Subscription;

  constructor(private afAuth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
    this.authSubscribe = this.afAuth.authState.subscribe( user => {
      console.log(user);
      if (!user) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy() {
    this.authSubscribe.unsubscribe();
  }
}
