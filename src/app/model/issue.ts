import { User } from './user';
import { IBase } from './IBase';

export class Issue implements IBase {
  id?: string;
  title: string;
  createdAt: Date;
  description: string;
  assignTo: User;
  priority: number = 1;

  constructor(settings?: Issue) {
    for (let k in settings) {
      this[k] = settings[k];
    }
  }
}
