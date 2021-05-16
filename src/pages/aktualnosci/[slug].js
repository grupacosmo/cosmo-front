import React from 'react'
import request from '@api'
import { Layout, SinglePost } from '@components'
import { BLOG_SLUGS, SINGLE_POST } from '@graphql'

const Post = ({ post }) => {
  return (
    <Layout title="COSMO PK | ">
      <SinglePost post={post} />
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const { posts } = await request({ query: BLOG_SLUGS })

  const paths = posts.map((post) => ({ params: { slug: post.slug } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { post } = await request({
    query: SINGLE_POST,
    variables: { slug: params.slug },
  })

  return { props: { post } }
}
