import { FastifyInstance, HookHandlerDoneFunction, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import consola from 'consola';
import fastifyPassport from '@fastify/passport';
import User from '@/models/user';
import { UserInterface } from '@qala-manch/shared';


async function sessionSerializer (
  fastify: FastifyInstance, options: FastifyPluginOptions, done: HookHandlerDoneFunction
) {
  try {
    fastifyPassport.registerUserSerializer(async (user: UserInterface) => {
      consola.log('Found User while serializing-0', user);
      // const foundUser = await User.findOne({ username });
      // consola.log('Found User while serializing-1', foundUser);
      return user?._id;
    });

    fastifyPassport.registerUserDeserializer(async (id) => {
      const user = await User.findById(id);
      consola.log('Found User while Deserializing', user);
      return user;
    });

    consola.success('Success session-serialLizer-plugin');

    done();

  } catch (err) {
    consola.error('Failed session-serialLizer-plugin');

    if (err) {
      return done(err as Error);
    }
    return done();
  }

}

export const sessionSerializerPlugin = fp(sessionSerializer, {
  name: 'sessionSerializer-plugin',
});

