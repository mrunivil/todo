import { AbstractModel } from './abstract.model';

export class TodoModel extends AbstractModel {
  readonly title: string;
  constructor(obj: Partial<TodoModel>) {
    super(obj);
    Object.assign(this, obj);
  }
}
