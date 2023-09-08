import fastifyPassport from '@fastify/passport';
import { Route } from '@/types';

const auth: Route[] = [
  {
    method: 'POST',
    url: '/api/auth',
    preValidation: fastifyPassport.authenticate('local'),
    handler: () => {
      return 'Logged In';
    }
  }
];

export default auth;