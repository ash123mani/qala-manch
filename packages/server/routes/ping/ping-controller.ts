import { FastifyRequest, FastifyReply } from 'fastify';

class PingController {
  ping (request: FastifyRequest, reply: FastifyReply) {
    reply.send({
      result: 'pong'
    });
  }
}

export default new PingController();