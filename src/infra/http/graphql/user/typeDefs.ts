import { gql } from "apollo-server";

export const userTypesDefs = gql`
scalar Date
extend type Query {
    users: [User]!
    user (filter: UserFilter!): User!
   }
extend type Mutation {
  createUser(data: UserInput!): User!
} 




type User {
  id: ID!
  firstName: String
  lastName: String
  email: String
  password: String
  profile: [Profile]
  createdAt: Date
  updatedAt: Date

}

input UserInput {
  firstName: String
  lastName: String
  email: String
  password: String
  profile: [ProfileInput]
}

input UserFilter {
  id: String
  email: String
}

type Profile {
  id: ID
  name: String
  description: String
  createdAt: Date
  updatedAt: Date

}

input ProfileInput {
  name: String
  description: String
  createdAt: Date
  updatedAt: Date
}
`
