import { Layout, Hero, About, Objectives, Join } from '@components'

const Home = () => {
  return (
    <Layout title="COSMO PK | Strona główna">
      <Hero />
      <About />
      <Objectives />
      <Join />
    </Layout>
  )
}

export default Home
