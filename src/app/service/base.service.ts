import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ConfigService } from './config.service';
import { IBase } from '../model/IBase';


@Injectable()
export class BaseService<T extends IBase> {
  listObserver: Observable<any>;
  apiEndpoint: string = "";
  listSubscribe: any;
  constructor(
    protected http: HttpClient,
    protected config: ConfigService
  ) {
    this.listObserver = new Observable( observer => {

      this.listSubscribe = observer;
      this.refresh();
    });
  }

  refresh(): void {
    this.http.get(this.apiEndpoint).forEach( list => {
      this.listSubscribe.next(list);
    });
  }


  getUserById(id: number | string): Observable<T> {
    return this.http.get<T>(`${this.apiEndpoint}/${id}`);
  }

  /**
   * Update user.
   * @param user {User} - User object.
   */
  save(user: T): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.put(
        `${this.apiEndpoint}/${user.id}`,
        user
      ).forEach(
        res => {
          this.refresh();
          resolve();
        }
      )
    });
  }

  create(user: T): Observable<T> {
    return new Observable( observer => {
      this.http.post(
        `${this.apiEndpoint}`,
        user,
        this.config.http.json
      ).forEach( res => {
        console.log(res);
        this.refresh();
        observer.next(user);
      });
    });
  }

  remove(user: T): Observable<any> {
    return new Observable<any>( observer => {
      this.http.delete<any>(`${this.apiEndpoint}/${user.id}`)
        .forEach( res => {
          this.refresh();
          observer.next('ok');
        });
    });
  }
}
