import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Navbar from './Navbar/Navbar'

const Main = styled.main`
  width: 100%;
  height: 100%;
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
      </Main>
    </>
  )
}

export default Layout
