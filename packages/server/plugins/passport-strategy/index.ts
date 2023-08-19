import { FastifyInstance, HookHandlerDoneFunction, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import consola from 'consola';
import { Strategy as LocalStrategy } from 'passport-local';
import fastifyPassport from '@fastify/passport';
import User from '@/models/user';
import { validatePassword } from '@/utils/auth';
import { errorDesc } from '@/config';
import { Api404Error } from '@/errors';


async function passportStrategy (
  fastify: FastifyInstance, options: FastifyPluginOptions, done: HookHandlerDoneFunction
) {
  try {
    fastifyPassport.use(new LocalStrategy(async (userName: string, password: string, next: any) => {
      const user = await User.findOne({ userName });

      if (!user || !validatePassword(password, user)) {
        next(new Api404Error(undefined, undefined, undefined, errorDesc.login[ 404 ]));
      }

      next(null, user);
    }
    ));

  } catch (err) {
    consola.log('Failed to intialize passport startegy');

    if (err) {
      return done(err as Error);
    }
    return done();
  }

}

export default fp(passportStrategy, {
  name: 'fastify-mongoose',
});

