import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';

import routes from './routes';
import schema from './schema';

export const buildApi = async function (): Promise<FastifyInstance> {
  const fastify = Fastify({
    logger: process.env.NODE_ENV !== 'test'
  });

  fastify.register(mercurius, {
    schema,
    graphiql: true
  })

  routes.forEach((route, index) => {
    fastify.route(route)
  })  

  return fastify;
};