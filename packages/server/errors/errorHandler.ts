import { FastifyRequest, FastifyReply } from 'fastify';
import consola from 'consola';
import { BaseError } from './baseError';

export function logError (err: Error) {
  consola.error(err);
}

export function logErrorMiddleware (err: Error, req: Request, res: Response, next: any) {
  logError(err);
  next(err);
}

export function returnError (error: Error, request: FastifyRequest, reply: FastifyReply) {
  request.log.error('Error occured');

  reply.code(error.statusCode || 500).send({
    statusCode: error.statusCode || 500,
    code: error.code || error.statusCode || 500,
    name: error.name,
    message: error.message,
  });
}

export function isOperationalError (error: Error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}


// import { FastifyRequest, FastifyReply, FastifyError } from 'fastify';
// import endOfLine from 'os';

// const eol = endOfLine.EOL;

// interface CustomError extends FastifyError {
//   errors: object;
// }

// interface ErrorObj {
//   path: string;
//   message: string;
// }

// const errorHandler = (error: CustomError, request: FastifyRequest, reply: FastifyReply) => {
//   request.log.error('Error occured');

//   let message = '';

//   if (error.name === 'ValidationError' || error.name === 'GraphQLError') {
//     Object.values(error.errors).forEach((err: ErrorObj) => {
//       message += `${err.path}: ${err.message}${eol}`;
//     });
//   }
//   reply.send({
//     statusCode: error.statusCode || 500,
//     code: error.code || error.statusCode || 500,
//     name: error.name,
//     message: message || error.message,
//   });
// };

// export default errorHandler;
