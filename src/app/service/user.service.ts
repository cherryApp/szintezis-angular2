import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ConfigService } from './config.service';


@Injectable()
export class UserService {
  listObserver: Observable<any>;
  apiEndpoint: string = environment.endPoints.users;
  listSubscribe: any;
  constructor(private http: HttpClient, private config: ConfigService) {
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


  getUserById(id: number | string): Observable<User> {
    return this.http.get<User>(`${this.apiEndpoint}/${id}`);
  }

  /**
   * Update user.
   * @param user {User} - User object.
   */
  save(user: User): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.put(
        `${this.apiEndpoint}/${user.id}`,
        user
      );
    });
  }

  create(user: User): Observable<User> {
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

  remove(user: User): Observable<any> {
    return new Observable<any>( observer => {
      this.http.delete<any>(`${this.apiEndpoint}/${user.id}`)
        .forEach( res => {
          this.refresh();
          observer.next('ok');
        });
    });
  }

  getAll(): Observable<User[]> {
    return new Observable<User[]>( observer => {
      observer.next(this.list);
    });
  }

  private list: Array<User> = [
    {
      id: 1,
      name: "Kiss Béla",
      age: 33,
      email: "kiss.bela@gmail.com",
      job: "scrum master"
    },
    {
      id: 2,
      name: "Nagy Béla",
      age: 33,
      email: "nagy.bela@gmail.com",
      job: "cleaner"
    },
    {
      id: 3,
      name: "Kiss Eleonóra",
      age: 33,
      email: "kiss.eleonora@gmail.com",
      job: "architect"
    },
    {
      id: 4,
      name: "Kovács Tamás",
      age: 45,
      email: "kt@outlook.com",
      job: "programmer"
    },
    {
      id: 5,
      name: "Hujber Anikó",
      age: 18,
      email: "haniko@szintezis-net.hu",
      job: "java architect"
    },
    {
      id: 6,
      name: "Harangozó Terézia",
      age: 70,
      email: "terike@gmail.com",
      job: "actor"
    }
  ];

}
