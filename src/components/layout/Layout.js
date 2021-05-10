import styled from 'styled-components'
import { NextSeo } from 'next-seo'
import Navbar from './Navbar/Navbar'

const Main = styled.main`
  width: 100%;
  height: 100%;
`

const Layout = ({ children, title = 'Cosmo PK' }) => {
  return (
    <>
      <NextSeo title={title} />
      <Main>
        <Navbar />
        {children}
      </Main>
    </>
  )
}

export default Layout
