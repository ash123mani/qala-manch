import { FastifyRequest, FastifyReply } from 'fastify';

class UploadController {
  uploadImage (request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.code(200).send({
        image: request.file,
        message: 'SUCCESS',
      });
    } catch (e) {
      reply.send({
        error: e,
      });
    }
  }

  uploadImages (request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.code(200).send({
        images: request.files,
        message: 'SUCCESS',
      });
    } catch (e) {
      reply.send({
        error: e,
      });
    }
  }
}

export default new UploadController();
