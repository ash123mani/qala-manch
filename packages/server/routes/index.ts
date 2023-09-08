import ping from './ping';
import user from './user';
import upload from './upload';
import auth from './auth';

export default [
  ...ping,
  ...user,
  ...upload,
  ...auth
];