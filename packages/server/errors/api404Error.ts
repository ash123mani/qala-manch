import { httpStatus } from './httpStatus';
import { BaseError } from './baseError';

export class Api404Error extends BaseError {
  constructor (
    name: string = httpStatus.NOT_FOUND.name,
    statusCode: number = httpStatus.NOT_FOUND.code,
    isOperational = true,
    description = 'Not found.'
  ) {
    super(name, statusCode, isOperational, description);
  }
}