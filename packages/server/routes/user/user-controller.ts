import { FastifyRequest, FastifyReply } from 'fastify';
import { createUser } from '@/resolvers/user';

class UserController {
  async createUser (request: FastifyRequest, reply: FastifyReply) {
    try {
      const payload = request.body;
      const res = await createUser(payload);
      reply.send(res);
    } catch(error: any) {
      reply.send({
        success: false,
        error: error.errors
      });
    }
  }
}

export default new UserController();