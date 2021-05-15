import { GraphQLClient } from 'graphql-request'

const { ENDPOINT_URL } = process.env

const request = ({ query, variables }) => {
  const client = new GraphQLClient(ENDPOINT_URL)
  return client.request(query, variables)
}

export default request
