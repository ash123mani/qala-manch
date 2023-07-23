import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { StorageEngine } from 'fastify-multer/lib/interfaces';
import cloudinary from 'cloudinary';
import { CloudinaryStorage, Options } from 'multer-storage-cloudinary';
import multer from 'fastify-multer';
import fp from 'fastify-plugin';
import consola from 'consola';
import '@/utils/load-env';

async function fpCloudinary (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  next: any
) {
  try {
    const v2Cloudinary = cloudinary.v2;
    v2Cloudinary.config(options);

    const storage = new CloudinaryStorage({
      cloudinary: v2Cloudinary,
      params: {
        folder: 'qala-manch',
        format: async () => 'jpg',
        transformation: [{ width: 800, height: 800, crop: 'limit' }],
      },
    } as Options);

    const upload = multer({ storage: storage as unknown as StorageEngine });
    consola.success('Connected to CloudinaryStorage');

    fastify.decorate('multer', { upload });
    consola.success('Added Multer decorator');

    next();
  } catch (err) {
    consola.error('Failed to conneect CloudinaryStorage');

    if (err) {
      return next(err);
    }
    return next();
  }
}

export default fp(fpCloudinary, {
  name: 'fastify-cloudinary',
});
