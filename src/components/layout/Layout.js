import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`

const Layout = ({ children, title = 'Cosmo PK' }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo title={title} />
      <Main>
        <Navbar />
        {children}
        <Footer />
      </Main>
    </>
  )
}

export default Layout
