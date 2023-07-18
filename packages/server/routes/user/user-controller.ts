import { FastifyRequest, FastifyReply } from 'fastify';
import { createUser } from '@/resolvers/user';
import { UserPayload  } from '../../../types';

class UserController {
  async createUser (request: FastifyRequest, reply: FastifyReply) {
      const payload = request.body;
      const res = await createUser(payload as UserPayload);
      reply.send(res);
  }
}

export default new UserController();