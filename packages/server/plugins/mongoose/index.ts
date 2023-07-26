import { FastifyInstance, HookHandlerDoneFunction, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import consola from 'consola';
import mongoose from 'mongoose';

async function fastifyMongoose (fastify: FastifyInstance, options: FastifyPluginOptions, next: any) {
  try {
    await mongoose.connect(options.dbUrl, options.dbOptions);

    consola.success(`MONGO DB connected succesfully at ${options.dbUrl}`);

    const mongo = {
      db: mongoose.connection,
    };

    fastify.decorate('mongo', mongo).addHook('preClose', function (done: HookHandlerDoneFunction) {
      mongoose.disconnect();
      done();
    });

    next();
  } catch (err) {
    consola.error('MONGO DB failed to start');

    if (err) {
      return next(err);
    }
    return next();
  }
}

export default fp(fastifyMongoose, {
  name: 'fastify-mongoose',
});
