import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';

import mongoosePlugin from '@/plugins/mongoose';
import corsPluginOptions from '@/plugins/cors';
import { swaggerOptions } from '@/plugins/swagger';
import errorHandler from '@/errors';
import dbConfig from '@/config/db';
import { Logger } from '@/types';
import routes from './routes';
import schema from './schema';

import '@/utils/load-env';

export const buildApi = async function (): Promise<FastifyInstance> {
  const env: string = process.env.NODE_ENV as string;
  const envToLogger: Logger = {
    development: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
    production: true,
    test: false,
  };

  const fastify = Fastify({
    logger: envToLogger[env] ?? true,
  });

  await fastify
    .setErrorHandler(errorHandler)
    .register(mercurius, {
      schema,
      graphiql: true,
    })
    .register(mongoosePlugin, dbConfig)
    .register(cors, corsPluginOptions)
    .register(fastifySwagger, swaggerOptions)
    .register(fastifySwaggerUi, swaggerOptions);

  routes.forEach((route) => {
    fastify.route(route);
  });

  fastify.ready((err) => {
    if (err) throw err;
    fastify.swagger();
  });

  return fastify;
};
