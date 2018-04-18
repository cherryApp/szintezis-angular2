import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: User = new User();
  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.userData.email = environment.testUser.email;
    this.userData.password = environment.testUser.password;
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.userData.email,
      this.userData.password
    );
  }

  checkError(model, type): boolean {
    if (!model.errors) return false;
    return model.errors[type];
  }

}
