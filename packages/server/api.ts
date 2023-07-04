import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import routes from './routes';
import schema from './schema';
import mongoosePlugin from '@/plugins/mongoose';
import { swaggerOptions } from '@/plugins/swagger';
import dbConfig from '@/config/db';
import '@/utils/load-env';

export const buildApi = async function (): Promise<FastifyInstance> {
  const fastify = Fastify({
    logger: process.env.NODE_ENV !== 'test'
  });

  await fastify.register(mercurius, {
    schema,
    graphiql: true
  })
  .register(mongoosePlugin, dbConfig)
  .register(fastifySwagger, swaggerOptions)
  .register(fastifySwaggerUi, swaggerOptions);

  routes.forEach((route) => {
    fastify.route(route);
  });

  return fastify;
};