import {
  Layout,
  Hero,
  About,
  Objectives,
  Join,
  Blog,
  // Contact,
  Sponsors,
} from '@components'

// import { BLOG_POSTS } from '@graphql'

const description =
  'COSMO PK jest kołem naukowym pracującym na Politechnice Krakowskiej. Zajmujemy się tematyką eksploracji kosmosu, zwłaszcza interesujemy się budową sond i satelit. Nasza działalność dotyczy głównie IT, ale poszerzamy też naszą wiedzę w tematach związanych z mechaniką i elektrotechniką. Naszym największym projektem do tej pory jest stworzenie i wysłanie wyniesienie sondy stratosferycznej HABSat.'

const Home = ({ posts }) => {
  return (
    <Layout title="COSMO PK | Strona główna" description={description}>
      <Hero />
      <Blog posts={posts}/>
      <About />
      <Objectives />
      <Join />
      {/* <Contact /> */}
      <Sponsors />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {

  const { API_URL } = process.env
  const postsPath = API_URL + "/posts?populate=*"

  const res = await fetch(postsPath)
  const data = await res.json()

  return {
    props: {
      posts: data.data
    }
  }
}