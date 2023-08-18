export const httpStatus = {
  OK: {
    code: 200,
    name: 'OK'
  },
  BAD_REQUEST: {
    code: 400,
    name: 'BAD_REQUEST',
    description: 'Missing fields'
  },
  CONFLICT: {
    code: 409,
    name: 'CONFLICT',
  },
  NOT_FOUND: {
    code: 404,
    name: 'NOT_FOUND'
  },
  INTERNAL_SERVER: {
    name: 'INTERNAL_SERVER',
    code: 500
  },
  SERVICE_UNAVAILABLE: {
    name: 'SERVICE_UNAVAILABLE',
    code: 503
  }
 };