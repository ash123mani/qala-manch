import { FastifyRequest, FastifyReply } from 'fastify';
import { createUser } from '@/resolvers/user';

class UserController {
  async createUser (request: FastifyRequest, reply: FastifyReply) {
      const payload = request.body;
      const res = await createUser(payload);
      reply.send(res);
  }
}

export default new UserController();