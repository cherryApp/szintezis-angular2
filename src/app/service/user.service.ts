import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class UserService {

  constructor() { }

  list: Array<User> = [
    {
      id: 1,
      name: "Kiss Béla",
      age: 33,
      email: "kiss.bela@gmail.com",
      job: "architect"
    },
    {
      id: 2,
      name: "Nagy Béla",
      age: 33,
      email: "nagy.bela@gmail.com",
      job: "architect"
    },
    {
      id: 3,
      name: "Kiss Eleonóra",
      age: 33,
      email: "kiss.eleonora@gmail.com",
      job: "architect"
    }
  ];

}
