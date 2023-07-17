import {gql} from "@apollo/client/core";

export const CREATE_USER = gql`
  mutation createUser($userName: String!) {
    createUser(userName: $userName) {
      userName
    }
  }
`;