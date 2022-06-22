import { gql } from "apollo-server";
import { userResolvers } from "./user/resolvers";
import { userTypesDefs } from "./user/typeDefs";

const rootTypesDefs = gql`
type Query {
    _empty: Boolean
   }
`

const rootResolvers = {
  Query: {
    _empty: () => true
  }
}
export const typeDefs = [rootTypesDefs, userTypesDefs]
export const resolvers = [rootResolvers, userResolvers]
