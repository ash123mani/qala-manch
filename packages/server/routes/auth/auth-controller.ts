import { FastifyRequest, FastifyReply } from 'fastify';
import consola from 'consola';

class AuthController {
  login (request: FastifyRequest, reply: FastifyReply) {
    const payload = request.body;
    consola.log('payload', payload);
    reply.send('Logged In');
  }
}

export default new AuthController();