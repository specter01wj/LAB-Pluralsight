const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const SessionAPI = require('./datasources/sessions');
// const sessions = require('./data/sessions.json');

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers.js");

const dataSources = () => ({
  sessionAPI: new SessionAPI()
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);