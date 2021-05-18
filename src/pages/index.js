import {
  Layout,
  Hero,
  About,
  Objectives,
  Join,
  Blog,
  Contact,
} from '@components'
import request from '@api'
import { BLOG_POSTS } from '@graphql'

const description =
  'Jesteśmy grupą młodych ludzi, studentów Politechniki Krakowskiej. W przerwach od nauki spotykamy się by realizować wspólny cel - wysłać własnego satelitę na orbitę. Nasze zmagania można obserwować na naszych kanałach w mediach społecznościowych. Trzymajcie kciuki!'

const Home = ({ posts }) => {
  return (
    <Layout title="COSMO PK | Strona główna" description={description}>
      <Hero />
      <About />
      <Objectives />
      <Join />
      <Contact />
      <Blog posts={posts} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const { posts } = await request({ query: BLOG_POSTS })

  return { props: { posts } }
}
