import { gql } from "graphql-tag";

const query = gql`
  query TestQuery2 {
    resources(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
`;
