import { Route } from '@/types';
import userController from './user-controller';
// import { upload } from '@/plugins/cloudinary';

const user: Route[] = [
  {
    method: 'POST',
    url: '/api/user',
    handler: userController.createUser,
  },
  // {
  //   method: 'POST',
  //   url: '/api/upload/photo',
  //   preHandler: upload.single('image'),
  //   handler (request, reply) {
  //     try {
  //       reply.code(200).send({
  //         fileds: request.file || 'undefineds',
  //         message: 'SUCCESS'
  //       });
  //     } catch(e) {
  //       reply.send({
  //         error: e,
  //       });
  //     }
  //   },
  // },
  // {
  //   method: 'POST',
  //   url: '/api/upload/photos',
  //   preHandler: upload.array('images'),
  //   handler (request, reply) {
  //     try {
  //       reply.code(200).send({
  //         fileds: request.files || 'undefineds',
  //         message: 'SUCCESS'
  //       });
  //     } catch(e) {
  //       reply.send({
  //         error: e,
  //       });
  //     }
  //   },
  // }
];

export default user;
