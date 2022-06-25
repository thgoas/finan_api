import {ApolloServer} from 'apollo-server'
import { resolvers, typeDefs } from './infra/http/graphql/schema'


async function startApolloServer(typeDefs: any, resolvers:any) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  })
const {url} = await server.listen()
console.log(`🚀 Server ready at ${url}`)
}

startApolloServer(typeDefs, resolvers)




