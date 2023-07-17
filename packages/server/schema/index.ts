import { GraphQLString, GraphQLObjectType, GraphQLSchema, GraphQLNonNull } from 'graphql';
import pingResolver from '@/resolvers/ping';
import * as userResolver from '@/resolvers/user';

const pingType = new GraphQLObjectType({
  name: 'Ping',
  fields: () => ({
    result: { type: GraphQLString }
  })
});

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    userName: { type: GraphQLString },
    name: { type: GraphQLString },
  })
});

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ping: {
      type: pingType,
      resolve () {
        return pingResolver();
      }
    }
  }
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: {
      type: userType,
      args: {
        userName: { type: new GraphQLNonNull(GraphQLString)},
        name: { type: new GraphQLNonNull(GraphQLString)},
      },
      async resolve (parent, args) {
        const res = await userResolver.createUser(args);
        return res;
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutations
});