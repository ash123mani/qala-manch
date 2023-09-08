import fastifyPassport from '@fastify/passport';
import { Route } from '@/types';
import authController from './auth-controller';

const auth: Route[] = [
  {
    method: 'POST',
    url: '/api/auth',
    preValidation: fastifyPassport.authenticate('local'),
    handler: authController.login
  }
];

export default auth;