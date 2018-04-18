import { User } from './user';

export class Comment {
  key: string = "";
  issueID: string | number = "";
  author: User = new User();
  text: string = "";

  constructor(gettedObjectForDummyUser: {} = {}) {
    for (let k in gettedObjectForDummyUser) {
      this[k] = gettedObjectForDummyUser[k];
    }
  }
}
