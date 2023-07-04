import { Route } from '@/types/route';
import userController from './user-controller';

const user: Route[] = [{
  method: 'POST',
  url: '/api/user',
  handler: userController.createUser
}];

export default user;