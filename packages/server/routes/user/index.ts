import { Route } from '@/types';
import userController from './user-controller';

const user: Route[] = [
  {
    method: 'POST',
    url: '/api/user',
    handler: userController.createUser,
  },
  {
    method: 'POST',
    url: '/api/user/profile-pic',
    preHandler (request) {
      // eslint-disable-next-line no-console
      console.log('request.server.multer.upload', request.server.multer.upload);
      request.server.multer.upload.single('image');
    },
    async handler (request, reply) {
      // eslint-disable-next-line no-console
      console.log('request.file.filename', request.file.filename);
      // eslint-disable-next-line no-console
      console.log('originalname: request.file.originalname', request.file.originalname);
      return reply.send({
        file: request.file,
      });
    },
  },
];

export default user;
