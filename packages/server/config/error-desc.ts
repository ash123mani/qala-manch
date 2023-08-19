import { PASSWORD_LENGTH, USER_NAME_LENGTH } from '@qala-manch/shared';

export const errorDesc = {
  createUser: {
    passwordLength: `Password should be atleast of ${PASSWORD_LENGTH} characters`,
    userExists: 'The username has already been used',
    userNameLength: `The username should be of atleat ${USER_NAME_LENGTH} characters`,
  },
  login: {
    404: 'Username or Password is incorrect',
  }
};