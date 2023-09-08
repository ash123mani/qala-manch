import type { SecureSessionPluginOptions } from '@fastify/secure-session';
import path from 'path';
import fs from 'fs';
import '@/utils/load-env';

export const sessionOptions = {
  sessionName: 'session',
  key:  fs.readFileSync(path.join(__dirname, 'secret_key')),
  cookie: {
    maxAge: 60 * 60 * 8, // 8 hours,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  },
} as SecureSessionPluginOptions;