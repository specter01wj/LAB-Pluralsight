const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  sessions:[Session]
}
type Session {
  id: ID!
  title: String!,
  description:String,
  startsAt:String,
  endsAt:String,
  room:String,
  day:String,
  format: String,
  track:String,
  level:String
}`

const server = new ApolloServer({ typeDefs });

const app = express();














server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);