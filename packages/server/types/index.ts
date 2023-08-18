import type { RouteOptions } from 'fastify';


export type Route = RouteOptions;

export interface ProcessEnv {
  [key: string]: string | undefined
}

export interface Logger {
  [development: string]: {
    transport: {
      target: string;
      options: {
        translateTime: string;
        ignore: string;
      };
    };
  } | boolean;
}
