import React from 'react'
import request from '@api'
import { BLOG_POSTS } from '@graphql'
import { NewsHero, Layout, Posts } from '@components'

const News = ({ posts }) => {
  return (
    <Layout title="COSMO PK | Aktualności">
      <NewsHero />
      <Posts posts={posts} />
    </Layout>
  )
}

export default News

export const getStaticProps = async () => {
  const { posts } = await request({ query: BLOG_POSTS })

  return { props: { posts } }
}
