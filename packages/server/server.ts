import { FastifyInstance } from 'fastify';
import consola from 'consola';
import os from 'os';
import process from 'process';

import '@/utils/load-env';

import { buildApi  } from './api';

class ApiServer {
  fastifyBuilder: any;
  fastify: FastifyInstance;

  constructor () {
    this.fastifyBuilder = buildApi;
  }

  async up (
    port: string | number = process.env.SERVER_PORT || 3001,
    host: string  = process.env.SERVER_HOST || 'localhost'
  ):Promise<void> {
    this.fastify = await this.fastifyBuilder();

    try {
        const address = await this.fastify.listen(port, host);
        consola.success(`API SERVER '${`${os.hostname()}_${process.pid}`}' is listening at: ${address}`);
    } catch (err) {
        consola.error(err);
        process.exit(1);
    }
  }

  async down () {
    await this.fastify.close();
  }
}

export default new ApiServer();
