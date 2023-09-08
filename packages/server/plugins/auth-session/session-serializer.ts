import { FastifyInstance, HookHandlerDoneFunction, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import consola from 'consola';
import fastifyPassport from '@fastify/passport';
import User from '@/models/user';
import { UserInterface } from '@qala-manch/shared';


async function sessionSerialLizer (
  fastify: FastifyInstance, options: FastifyPluginOptions, done: HookHandlerDoneFunction
) {
  try {
    fastifyPassport.registerUserSerializer(async (user: UserInterface) => {
      return user.username;
    });

    fastifyPassport.registerUserDeserializer(async (username) => {
      return await User.findOne({ username });
    });

    consola.success('Success session-serialLizer-plugin');

  } catch (err) {
    consola.error('Failed session-serialLizer-plugin');

    if (err) {
      return done(err as Error);
    }
    return done();
  }

}

export const sessionSerialLizerPlugin =   fp(sessionSerialLizer, {
  name: 'session-serialLizer-plugin',
});

