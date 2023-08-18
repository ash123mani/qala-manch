import { Route } from '@/types';
import userController from './user-controller';
// import { upload } from '@/plugins/cloudinary';

const user: Route[] = [
  {
    method: 'POST',
    url: '/api/user',
    handler: userController.createUser,
  }
];

export default user;
