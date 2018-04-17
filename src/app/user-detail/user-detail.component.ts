import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs/Subscription';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  @Output() updateUser: EventEmitter<User> = new EventEmitter<User>();
  user: User = new User();
  id: string = "";
  showAlert: number = 0;
  userSubsribe: Subscription;
  constructor(
    private ar: ActivatedRoute,
    private uService: UserService) {
      this.ar.params.subscribe( p => {
        this.uService.getUserById(p.id).forEach( user => {
          this.user = new User(user);
        });
      });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.userSubsribe.unsubscribe();
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
