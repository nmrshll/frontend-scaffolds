import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

const projectID = '___________________'

export const graphcool = new ApolloClient({
  link: new HttpLink({ uri: `https://api.graph.cool/simple/v1/${projectID}`, fetch }),
  cache: new InMemoryCache(),
})
