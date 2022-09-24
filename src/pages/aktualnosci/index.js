import React from 'react'
import { NewsHero, Layout, Posts } from '@components'

const { API_URL } = process.env

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
  const req = await fetch(API_URL + "/posts?populate=*")
  const data = await req.json()
  const posts = data.data

  return { props: { posts } }
}
