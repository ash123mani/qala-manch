import { FastifyInstance, HookHandlerDoneFunction, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';

async function authenticateRoute (
  fastify: FastifyInstance, options: FastifyPluginOptions, done: HookHandlerDoneFunction
) {
  try {
    fastify.decorate('authenticateRoute',
      function (req: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
        if (req.isUnauthenticated()) {
          reply.send({
            message: 'Unauthorized'
          });
        }
        done();
      });

    done();
  } catch (err) {

    if (err) {
      return done(err as Error);
    }
    return done();
  }
}

const authenticateRoutePlugin = fp(authenticateRoute, {
  name: 'authenticate-route',
});

export { authenticateRoutePlugin };
