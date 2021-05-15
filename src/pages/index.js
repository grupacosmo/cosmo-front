import { Layout, Hero, About, Objectives, Join, Blog } from '@components'
import request from '@api'
import { BLOG_POSTS } from '@graphql'

const Home = ({ posts }) => {
  return (
    <Layout title="COSMO PK | Strona główna">
      <Hero />
      <About />
      <Objectives />
      <Join />
      <Blog posts={posts} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const { posts } = await request({ query: BLOG_POSTS })

  return { props: { posts } }
}
