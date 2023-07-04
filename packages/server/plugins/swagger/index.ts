import pkg from 'package.json';

export const swaggerOptions = {
  swagger: {
    info: {
      title: pkg.name,
      description: pkg.description,
      version: pkg.version
    },
    host: 'localhost:3001',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true,
  routePrefix: '/docs'
};
