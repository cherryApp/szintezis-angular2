import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Output() updateUser: EventEmitter<User> = new EventEmitter<User>();
  user: User;
  id: string = "";
  showAlert: number = 0;
  constructor(
    private ar: ActivatedRoute,
    private uService: UserService) {
      this.user = this.uService.list[0];
      this.ar.params.subscribe( p => {
        this.user = new User(this.uService.getUserById(p.id));
      });
  }

  ngOnInit() {
  }

  showFeedback(type: number = 1, delay: number = 5000) {
    this.showAlert = type;
    let to = setTimeout( () => {
      clearTimeout(to);
      this.showAlert = 0;
    }, delay);
  }

  onSubmit(): void {
    console.log(this.user);
    // this.updateUser.emit(this.user);
    this.uService.save( new User(this.user) ).then(
      () => this.showFeedback(1),
      () => this.showFeedback(2)
    );
  }

}
