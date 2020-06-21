import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
type Query {
    test_query: String
  }
`;

export default TYPEDEFS;