export class User {
  id?: number;
  name: string;
  age: number;
  job: string;
  email: string;
  password: string;
  role?: number;

  constructor(settings?: User) {
    for (let k in settings) {
      this[k] = settings[k];
    }
  }
}
