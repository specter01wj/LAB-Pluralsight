const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
  sessions(
    id: ID
    title: String,
    description:String,
    startsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format: String,
    track:String,
    level:String
  ):[Session],
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
}`;
