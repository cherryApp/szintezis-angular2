import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue.service';
import { Observable } from 'rxjs/Observable';
import { Issue } from '../model/issue';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  list: Observable<Issue>;
  dropDownList: Array<any> = [];
  keys: Array<any> = [
    {key: "title", label: "Title"},
    {key: "createdAt", label: "Created", type: "datetime-local"},
    {key: "description", label: "Desc."},
    {key: "assignTo", label: "Assign", type: "select", list: this.dropDownList},
    {key: "priority", label: "Prior", type: "number"}
  ];
  constructor(
    public iService: IssueService,
    public uService: UserService
  ) { }

  ngOnInit() {
    this.list = this.iService.listObserver;
    this.uService.listObserver.subscribe( users => {
      users.map( user => {
        let list = [];
        this.dropDownList.push({
          key: user.id,
          value: user.name
        });
        return user;
      });
    });
  }

  create(issue: Issue): void {
    console.log(issue);
    this.iService.create(issue).forEach( res => console.log(res) );
  }

  update(issue: Issue): void {
    //
  }

  remove(issue: Issue): void {
    this.iService.remove(issue).forEach(
      res => console.log(res)
    );
  }





}
