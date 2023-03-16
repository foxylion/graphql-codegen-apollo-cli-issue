import { gql } from "./gql/gql";

const query = gql(`
  query TestQuery1 {
    resources(first: 10) {
      edges {
        node {
          id
        }
      }
    }
  }
`);
