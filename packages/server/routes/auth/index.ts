import fastifyPassport from '@fastify/passport';
import { Route } from '@/types';
import type { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify';


const auth: Route[] = [
  {
    method: 'POST',
    url: '/api/auth',
    preValidation: fastifyPassport.authenticate('local'),
    handler: (req: FastifyRequest, reply: FastifyReply) => {
      reply.send({
        message: 'Logged in'
      });
    }
  },
  {
    method: 'GET',
    url: '/api/auth',
    preValidation: function (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
      this.authenticateRoute(req, reply, done);
    },
    handler: function (req: FastifyRequest, reply: FastifyReply) {
      reply.send('Done it\'s protected');
    }
  }
];

export default auth;