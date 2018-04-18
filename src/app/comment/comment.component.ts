import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Comment as FirebaseComment } from '../model/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  listSubscribe: Subscription;
  list: Observable<any>;
  objectName: string = "comment";
  keys: Array<string> = [];
  constructor(private af: AngularFireDatabase) {
    console.log( new FirebaseComment() );
    for (let k in new FirebaseComment()) {
      if (k == 'key') continue;
      this.keys.push(k);
    }
  }

  ngOnInit() {
    this.list = this.af.object(this.objectName).valueChanges().map( values => {
      let rows = [];
      for ( let k in values ) {
        rows.push(values[k]);
      }
      return rows;
    });
  }

  create(comment: Comment): void {
    this.af.list(this.objectName).push(comment).then(
      ok => console.log(ok),
      err => console.error(err)
    );
  }

  update(comment: Comment): void {

  }

  remove(comment: Comment): void {

  }
}
