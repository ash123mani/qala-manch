import { DocumentNode, OperationVariables } from '@apollo/client';

export type Query = <QV extends OperationVariables, RT>(name: string, query: DocumentNode, variables?: QV) => Promise<RT>;
export type Mutate = <MV extends OperationVariables, RT>(name: string, mutation: DocumentNode, variables?: MV) => Promise<RT>;

export type GraphQLClient = {
  query: Query;
  mutate: Mutate;
};