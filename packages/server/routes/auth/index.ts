import fastifyPassport from '@fastify/passport';
import { Route } from '@/types';
import { FastifyRequest, FastifyReply } from 'fastify';
import { UserInterface } from '@qala-manch/shared';
import { BaseError, httpStatus } from '@/errors';
import { errorDesc } from '@/config/error-desc';
import consola from 'consola';
import _ from 'lodash';

const auth: Route[] = [
  {
    method: 'POST',
    url: '/api/auth',
    preValidation: fastifyPassport.authenticate(
      'local',
      {},
      async (
        request: FastifyRequest,
        reply: FastifyReply,
        err: Error | null,
        user: UserInterface | any,
      ): Promise<void> => {
        if (!user) {
          throw new BaseError(httpStatus.BAD_REQUEST.name, httpStatus.BAD_REQUEST.code, false, errorDesc.login[ 404 ]);
        } else {
          const updatedUser = _.omit(user, ['hash', 'salt', 'password']);
          consola.log('User Found', updatedUser);
          reply.send(updatedUser);
        }
      }
    ),
    handler: () => {
      consola.log('User Session established');
    }
  },
  {
    method: 'GET',
    url: '/api/auth',
    preValidation: fastifyPassport.authenticate(
      'local',
      {},
      async (
        request: FastifyRequest,
        reply: FastifyReply,
        err: Error | null,
        user: UserInterface | any,
      ): Promise<void> => {
        if (!user) {
          throw new BaseError(httpStatus.BAD_REQUEST.name, httpStatus.BAD_REQUEST.code, false, errorDesc.login[ 404 ]);
        } else {
          const updatedUser = _.omit(user, ['hash', 'salt', 'password']);
          reply.send(updatedUser);        }
      }
    ),
    handler: (req: any, reply: any) => {
      reply.send('Done it\'s protected');
    }
  }
];

export default auth;