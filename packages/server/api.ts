import Fastify, { FastifyInstance } from 'fastify';
import type { FastifyReply, HookHandlerDoneFunction } from 'fastify';
import mercurius from 'mercurius';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifySecureSession from '@fastify/secure-session';
import cors from '@fastify/cors';
import { contentParser } from 'fastify-multer';
import { File } from 'fastify-multer/lib/interfaces';
import fastifyPassport from '@fastify/passport';
import consola from 'consola';

import '@/utils/load-env';
import mongoosePlugin from '@/plugins/mongoose';
import corsPluginOptions from '@/plugins/cors';
import { swaggerOptions } from '@/plugins/swagger';
import { sessionOptions, sessionSerializerPlugin } from '@/plugins/auth-session';
import passportStrategy from '@/plugins/auth-strategy';
import { authenticateRoutePlugin } from '@/plugins/auth-route';
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

  export interface Conf {
    db: string
  }

// declaration merging to add the custom property to the Fastify type system
  interface FastifyInstance {
    // eslint-disable-next-line no-unused-vars
    authenticateRoute(req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction): Promise<void>
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
    .register(passportStrategy)
    .register(sessionSerializerPlugin)
    .register(authenticateRoutePlugin)
    .register(fastifySwagger, swaggerOptions)
    .register(fastifySwaggerUi, swaggerOptions);

  routes.forEach((route) => {
    fastify.route(route);
  });

  fastify.ready((err) => {
    consola.info(fastify.printRoutes({ commonPrefix: false }));

    if (err) throw err;
    fastify.swagger();
  });


  return fastify;
};
