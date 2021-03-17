import { AbstractError } from "../../../core/error/abstract.error";

export interface IAppStateModel {
    loading?: boolean;
    error?: AbstractError;
}