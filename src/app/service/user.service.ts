import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ConfigService } from './config.service';
import { BaseService } from './base.service';


@Injectable()
export class UserService extends BaseService<User> {
  apiEndpoint: string = environment.endPoints.users;
  constructor(http: HttpClient, config: ConfigService) {
    super(http, config);
  }
}
