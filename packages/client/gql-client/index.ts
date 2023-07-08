import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLClient, Query, Mutate } from "./types";

export const createGQLClient = (): GraphQLClient => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    uri: "http://localhost:3001/graphql",
  });

  const query: Query = (name, query, variables) => {
    return client
      .query({
        query,
        variables,
        fetchPolicy: "no-cache",
      })
      .then(({ data }) => data[name]);
  };

  const mutate: Mutate = (name, mutation, variables) => {
    return client
      .mutate({
        mutation,
        variables,
      })
      .then(({ data }) => data[name]);
  };

  return { query, mutate };
};

const gqlClient = createGQLClient();
export default gqlClient;
