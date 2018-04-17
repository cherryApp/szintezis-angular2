import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';
import { Issue } from '../model/issue';


@Injectable()
export class IssueService extends BaseService<Issue> {
  apiEndpoint: string = environment.endPoints.issues;
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
  }
}
