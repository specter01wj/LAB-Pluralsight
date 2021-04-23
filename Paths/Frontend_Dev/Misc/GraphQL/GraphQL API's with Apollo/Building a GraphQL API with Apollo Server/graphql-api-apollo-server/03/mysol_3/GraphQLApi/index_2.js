const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const sessions = require('./data/sessions.json');

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
  track:String @deprecated(reason: "reason1"),
  level:String
}`

const resolvers = {
  Query: {
    sessions: () => {
      return sessions;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);