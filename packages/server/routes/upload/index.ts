import { Route } from '@/types';
import { upload } from '@/plugins/cloudinary';
import uploadController from './upload-controller';
import schema from './upload-schema';

const user: Route[] = [
  {
    method: 'POST',
    url: '/api/upload/photo',
    schema: {
      response: {
        200: schema.image.response[200]
      }
    },
    preHandler: upload.single('image'),
    handler: uploadController.uploadImage
  },
  {
    method: 'POST',
    url: '/api/upload/photos',
    schema: {
      response: {
        200: schema.images.response[200]
      }
    },
    preHandler: upload.array('images'),
    handler: uploadController.uploadImages
  }
];

export default user;
