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
  serchKey: string = "";
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

  setUser(user: User): void {
    this.router.navigateByUrl('/user/'+user.id);
  }

  onCreate(user: User): void {
    this.uService.create(user).forEach(res => {
      console.log('created: ', res);
    });
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
