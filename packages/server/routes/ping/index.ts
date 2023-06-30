import { Route } from "@/types/route";
import pingController from './ping-controller';
import pingSchema from './ping-schema';

const ping: [Route] = [{
  method: 'GET',
  url: '/api/ping',
  schema: {
    response: {
      200: pingSchema.ping.response[200]
    }
  },
  handler: pingController.ping
}]

export default ping