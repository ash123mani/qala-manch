import pkg from 'package.json';

export const swaggerOptions = {
  swagger: {
    info: {
      title: pkg.name,
      description: pkg.description,
      version: pkg.version,
      contact: {
        name: 'Ashutosh',
        url: 'https://falak.netlify.app/about',
        email: 'ashuma2721@gmail.com'
      }
    },
    externalDocs: {
      url: 'https://github.com/ash123mani/qala-manch/tree/main/packages/server',
      description: 'GitHub repository'
    },
    tags: [
      { name: 'Qala Manch', description: 'Qala Manch API\'s'},
    ],
    host: 'localhost:3001',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true,
  routePrefix: '/docs'
};
