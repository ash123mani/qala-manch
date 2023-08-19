import crypto from 'crypto';
import { UserInterface } from '@qala-manch/shared';

export const generateHash = (password: string, salt: string): string => {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
};

export const validatePassword = (inputPassword: string, user: UserInterface): boolean => {
  const inputHash = generateHash(inputPassword, user.salt);
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
};