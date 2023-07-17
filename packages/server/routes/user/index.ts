import { Route } from '@/types';
import userController from './user-controller';

const user: Route[] = [{
  method: 'POST',
  url: '/api/user',
  handler: userController.createUser
}];

export default user;