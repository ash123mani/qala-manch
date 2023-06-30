import graphql, { GraphQLString, GraphQLObjectType, GraphQLSchema } from 'graphql';
import pingResolver from '@/resolvers/ping';

const pingType = new GraphQLObjectType({
  name: 'Ping',
  fields: () => ({
    result: { type: GraphQLString }
  })
}) 

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ping: {
      type: pingType,
      resolve(parent, args) {
        return pingResolver();
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQueryType
})