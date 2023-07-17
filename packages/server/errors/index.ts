import { FastifyRequest, FastifyReply, FastifyError } from 'fastify';
import endOfLine from 'os';

const eol = endOfLine.EOL;

interface CustomError extends FastifyError {
  errors: object;
}

interface ErrorObj {
  path: string,
  message: string;
}

const errorHandler = (error: CustomError, request: FastifyRequest, reply: FastifyReply) => {
  request.log.error('Error occured');

  let message = '';

  if (error.name === 'ValidationError') {
    Object.values(error.errors).forEach((err: ErrorObj) => {
      message += `${err.path}: ${err.message}${eol}`;
    });

    reply.send({
      statusCode: error.statusCode,
      code: error.code,
      name: error.name,
      message
    });
  }
};

export default errorHandler;