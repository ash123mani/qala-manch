import crypto from 'crypto';
import User from '@/models/user';
import type { UserPayload, UserResponse } from '@qala-manch/shared';
import { PASSWORD_LENGTH, USER_NAME_LENGTH } from '@qala-manch/shared';
import { BaseError, httpStatus } from '@/errors';
import { errorDesc } from '@/config/error-desc';
import { generateHash } from '@/utils/auth';

export const createUser = async (payload: UserPayload): Promise<UserResponse> => {
  const { username, password } = payload;

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = generateHash(password, salt);
  const newUser = {
    username,
    hash,
    salt,
  };

  if (!username || !password) {
    throw new BaseError(
      httpStatus.BAD_REQUEST.name, httpStatus.BAD_REQUEST.code, true, httpStatus.BAD_REQUEST.description
    );
  }

  if (username.length < USER_NAME_LENGTH) {
    throw new BaseError(
      httpStatus.BAD_REQUEST.name, httpStatus.BAD_REQUEST.code, true, errorDesc.createUser.userNameLength
    );
  }

  if (password.length < PASSWORD_LENGTH) {
    throw new BaseError(
      httpStatus.BAD_REQUEST.name, httpStatus.BAD_REQUEST.code, true, errorDesc.createUser.passwordLength
    );
  }


  const userNameExisted = await User.findOne({ username });

  if (userNameExisted) {
    throw new BaseError(
      httpStatus.CONFLICT.name, httpStatus.CONFLICT.code, true, errorDesc.createUser.userExists
    );
  }

  const createdUser = await User.create(newUser);

  return {
    username: createdUser.username,
    _id: createdUser._id,
    createdAt: createdUser['createdAt']
  };
};