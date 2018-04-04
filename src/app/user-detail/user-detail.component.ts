import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() set currentUser(user) {
    this.user = new User(user);
  }
  @Output() updateUser: EventEmitter<User> = new EventEmitter<User>();
  user: User;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.user);
    this.updateUser.emit(this.user);
  }

}
