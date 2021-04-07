export abstract class AbstractModel {
  readonly id: string;
  constructor(obj: Partial<AbstractModel>) {
    Object.assign(this, obj);
  }
}
