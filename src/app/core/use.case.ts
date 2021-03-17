import { AbstractError } from "./error/abstract.error";
import { AbstractModel } from "./model/abstract.model";

export interface IUseCase<I extends AbstractModel, O extends AbstractModel | AbstractError | void> {
    execute(I?): O;
}