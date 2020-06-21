
const RESOLVERS = {
  Query: {
    test_query: (parent, args) => {
      return 'Hi'
    }
  }
};
export default RESOLVERS;