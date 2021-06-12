import ApolloClient from 'apollo-boost'

// const graphqlUrl = "https://alchemist-notes-server.herokuapp.com/graphql";
const graphqlUrl = 'http://localhost:3000/graphql'

console.log(process.env.NODE_ENV);

export const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: graphqlUrl
})
