import { GraphQLClient } from 'graphql-request'

const endpoint = `https://graphql.datocms.com/`

function request({ query, variables }) {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}

export default request
