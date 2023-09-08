import { StorageEngine } from 'fastify-multer/lib/interfaces';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage, Options } from 'multer-storage-cloudinary';
import multer from 'fastify-multer';
import consola from 'consola';
import '@/utils/load-env';
import { cloudinaryConfig } from '@/config/cloudinary';

cloudinary.config(cloudinaryConfig);

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'qala-manch',
    format: async () => 'avif',
  },
} as Options);

export const upload = multer({ storage: storage as unknown as StorageEngine });

consola.success('Connected to CloudinaryStorage');

