const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const SessionAPI = require('./datasources/sessions');
// const sessions = require('./data/sessions.json');

const typeDefs = gql`
type Query {
  sessions:[Session],
  sessionById(id:ID): Session
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
    sessions: (parent, args, {dataSources}, info) => {
      return dataSources.sessionAPI.getSessions();
    },
    sessionById: (parent, {id}, {dataSources}, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    }
  }
};

const dataSources = () => ({
  sessionAPI: new SessionAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);