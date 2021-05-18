import React from 'react'
import request from '@api'
import { BLOG_POSTS } from '@graphql'
import { NewsHero, Layout, Posts } from '@components'

const description =
  'Zobacz co ostatnio u nas się dzieję. Najnowsze newsy z koła.'

const News = ({ posts }) => {
  return (
    <Layout
      title="COSMO PK | Aktualności"
      description={description}
      url="aktualnosci"
    >
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
