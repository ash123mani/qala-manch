import { FastifyRequest } from 'fastify';
import consola from 'consola';

class AuthController {
  login (request: FastifyRequest) {
    const payload = request.body;
    consola.log('payload', payload);
  }
}

export default new AuthController();