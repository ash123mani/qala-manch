import { FastifyRequest, FastifyReply } from 'fastify';

class UploadController {
  uploadImage (request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.code(200).send({
        image: request.file,
        message: 'SUCCESS',
      });
    } catch (error) {
      reply.send({
        error,
      });
    }
  }

  uploadImages (request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.code(200).send({
        images: request.files,
        message: 'SUCCESS',
      });
    } catch (error) {
      reply.send({
        error,
      });
    }
  }
}

export default new UploadController();
