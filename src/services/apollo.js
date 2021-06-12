import ApolloClient from 'apollo-boost'

const graphqlUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/graphql"
    : "https://alchemist-notes-server.herokuapp.com/graphql";

export const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: graphqlUrl
})
