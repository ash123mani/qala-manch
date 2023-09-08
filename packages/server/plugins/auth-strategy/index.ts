import { FastifyInstance, HookHandlerDoneFunction, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import consola from 'consola';
import { Strategy as LocalStrategy } from 'passport-local';
import fastifyPassport from '@fastify/passport';
import User from '@/models/user';
import { validatePassword } from '@/utils/auth';
import { errorDesc } from '@/config/error-desc';
import { BaseError, httpStatus } from '@/errors';
import _ from 'lodash';

async function passportStrategy (
  fastify: FastifyInstance, options: FastifyPluginOptions, done: HookHandlerDoneFunction
) {
  try {
    fastifyPassport.use(new LocalStrategy(async (username, password, cb) => {
      const user = await User.findOne({ username }, 'username salt hash _id');

      if (!user || !validatePassword(password, user)) {
        return cb(
          null,
          false,
          new BaseError(httpStatus.BAD_REQUEST.name, httpStatus.BAD_REQUEST.code, false, errorDesc.login[ 404 ])
        );
      }

      return cb(null, _.omit(user, ['hash', 'salt', 'password']));
    }));

    done();

  } catch (err) {
    consola.log('Failed to intialize passport startegy');

    if (err) {
      return done(err as Error);
    }
    return done();
  }

}

export default fp(passportStrategy, {
  name: 'passport-local-startegy-plugin',
});

