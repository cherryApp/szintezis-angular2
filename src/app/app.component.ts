import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList: Array<User> = [];
  currentUser: User;
  keys: Array<string> = [
    "name",
    "email",
    "job",
    "age",
    "role"
  ];
  constructor(private uService: UserService) {
    this.userList = this.uService.list;
  }

  sortUsers(key): void {
    this.userList.sort( (a, b) => {
      if (!a || !b) return 0;
      return a[key].toString().localeCompare(b[key].toString());
    });
  }

  setUser(user: User): void {
    this.currentUser = user;
  }

  updateUser(user: User): void {
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id == user.id) {
        this.userList[i] = new User(user);
        break;
      }
    }
  }



}
