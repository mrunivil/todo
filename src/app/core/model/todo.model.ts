import { AbstractModel } from './abstract.model';

export class TodoModel extends AbstractModel {
  id?: number;
  title: string;
}
