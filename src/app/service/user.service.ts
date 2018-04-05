import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  listObserver: Observable<any>;
  constructor() {
    setInterval( () => {
      this.list.reverse();
    }, 4000);

    this.listObserver = new Observable(subscribe => {
      subscribe.next(this.list);
    });
  }


  getUserById(id: number | string): User {
    for (var user of this.list) {
      if (user.id == id) {
        return user;
      }
    }
  }

  save(user: User): Promise<any> {
    return new Promise( (resolve, reject) => {
      for (var k in this.list) {
        if (this.list[k].id == user.id) {
          this.list[k] = user;
          return resolve();
        }
      }
      reject();
    });
  }

  getAll(): Observable<User[]> {
    return
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
