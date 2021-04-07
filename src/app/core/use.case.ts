import { AbstractError } from './error/abstract.error';
import { AbstractModel } from './model/abstract.model';

export interface IUseCase<
  I extends AbstractModel | Array<AbstractModel>,
  O extends Promise<AbstractModel | Array<AbstractModel> | AbstractError | void>
> {
  execute(param?: I): O;
}
