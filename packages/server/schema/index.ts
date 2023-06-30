import graphql, { GraphQLString, GraphQLObjectType, GraphQLSchema } from 'graphql';

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
      async resolve(parent, args) {
        return await {
          result: "Okay"
        }
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQueryType
})