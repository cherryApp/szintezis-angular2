import { Component, OnInit } from '@angular/core';
import { IssueService } from '../service/issue.service';
import { Observable } from 'rxjs/Observable';
import { Issue } from '../model/issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  list: Observable<Issue>;
  keys: Array<string> = [
    "title",
    "createdAt",
    "description",
    "assignTo",
    "priority"
  ];
  constructor(private iService: IssueService) { }

  ngOnInit() {
    this.list = this.iService.listObserver;
  }



}
