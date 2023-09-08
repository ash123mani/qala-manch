import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifySecureSession from '@fastify/secure-session';
import cors from '@fastify/cors';
import { contentParser } from 'fastify-multer';
import { File } from 'fastify-multer/lib/interfaces';
import fastifyPassport from '@fastify/passport';

import '@/utils/load-env';
import mongoosePlugin from '@/plugins/mongoose';
import corsPluginOptions from '@/plugins/cors';
import { swaggerOptions } from '@/plugins/swagger';
import { sessionOptions } from '@/plugins/auth-session';
import { returnError } from '@/errors';
import { dbConfig } from '@/config/db';
import {  envToLogger } from '@/config/logger';
import routes from './routes';
import schema from './schema';

declare module 'fastify' {
  interface FastifyRequest {
    file: File;
    files: File[];
  }
}

declare global {
  interface Error {
    statusCode: number;
    isOperational?: boolean;
    description?: string;
    errors: object;
    code: number;
    path: string;
  }
}

export const buildApi = async function (): Promise<FastifyInstance> {
  const env = process.env.NODE_ENV as string;

  const fastify = Fastify({
    logger: envToLogger[ env ] ?? true,
  });

  await fastify
    .setErrorHandler(returnError)
    .register(mercurius, {
      schema,
      graphiql: true,
    })
    .register(mongoosePlugin, dbConfig)
    .register(cors, corsPluginOptions)
    .register(contentParser)
    .register(fastifySecureSession, sessionOptions)
    .register(fastifyPassport.initialize())
    .register(fastifyPassport.secureSession())
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
