import { FastifyRequest, FastifyReply } from 'fastify';
import pingResolver from '@/resolvers/ping';

class PingController {
  ping (request: FastifyRequest, reply: FastifyReply) {
    const data = pingResolver();
    reply.send(data);
  }
}

export default new PingController();