import React from 'react'
import { Layout, SinglePost } from '@components'

const { API_URL } = process.env

const Post = ({ post }) => {
  return (
    <Layout
      title={`COSMO PK | ${post.title}`}
      description={post.description}
      url={`aktualnosci/${post.id}`}
      imageUrl={`${post.attributes.thumbnail.data.attributes.url}`}
    >
      <SinglePost post={post} />
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const req = await fetch(API_URL + "/posts")
  const data = await req.json()
  const posts = data.data

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const req = await fetch(API_URL + "/posts/" + params.id + "?populate=*")
  const data = await req.json()

  return {
    props: {
      post: data.data
    }
  }
}
