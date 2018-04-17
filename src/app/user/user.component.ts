import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  userList: Observable<User[]>;
  newUser: User = new User();
  currentUser: User;
  phrase: string = "";
  sortKeys: any = {};
  lastKey: string = "";
  order: number = 1;
  isSearch: boolean = true;
  listObserver: Observable<any>;
  sub: Subscription;
  keys: Array<string> = [
    "name",
    "email",
    "job",
    "age",
    "role"
  ];
  constructor(
    private uService: UserService,
    private router: Router
  ) {
    for (let k of this.keys) {
      this.sortKeys[k] = "";
    }

  }

  sortUsers(key): void {
    for (var k in this.sortKeys) {
      this.sortKeys[k] = "";
    }
    if (this.lastKey == key) {
      this.order *= -1;
    } else {
      this.order = 1;
    }
    this.sortKeys[key] = this.order == -1 ? 'up' : 'down';

    this.lastKey = key;

    /*this.userList.sort( (a, b) => {
      if (!a || !b) return 0;
      return a[key].toString().localeCompare(b[key].toString()) * this.order;
    });*/
  }

  setUser(user: User): void {
    this.router.navigateByUrl('/user/'+user.id);
  }

  onCreate(): void {
    this.uService.create(this.newUser).forEach(res => {
      console.log('created: ', res);
    });
  }

  updateUser(user: User): void {
    /*for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id == user.id) {
        this.userList[i] = new User(user);
        break;
      }
    }*/
  }

  onRemove(user: User): void {
    this.uService.remove(user).forEach( response => {
      console.log("response", response);
    });
  }

  ngOnInit() {
    this.userList = this.uService.listObserver;
  }
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}