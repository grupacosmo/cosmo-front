import styled from 'styled-components'
import Head from 'next/head'

const Main = styled.main`
  width: 100%;
`

const Layout = ({ children, title = 'Cosmo PK' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main>{children}</Main>
    </>
  )
}

export default Layout
