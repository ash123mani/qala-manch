import Fastify, { FastifyInstance } from 'fastify';
import mercurius from 'mercurius';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';
import { Multer } from 'multer';
import { contentParser } from 'fastify-multer';
import { File } from 'fastify-multer/lib/interfaces';

import mongoosePlugin from '@/plugins/mongoose';
import corsPluginOptions from '@/plugins/cors';
import { swaggerOptions } from '@/plugins/swagger';
import fpCloudinary from '@/plugins/cloudinary';
import errorHandler from '@/errors';
import dbConfig from '@/config/db';
import { cloudinaryConfig } from '@/config/cloudinary';
import { envToLogger } from '@/config/logger';
import routes from './routes';
import schema from './schema';

import '@/utils/load-env';

declare module 'fastify' {
  interface FastifyInstance {
    multer: {
      upload: Multer
    }
  }
  interface FastifyRequest {
    file: File
  }
}

export const buildApi = async function (): Promise<FastifyInstance> {
  const env: string = process.env.NODE_ENV as string;

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
    .register(contentParser)
    .register(fpCloudinary, cloudinaryConfig)
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
