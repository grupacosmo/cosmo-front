import styled from 'styled-components'
import Head from 'next/head'
import Seo from './Seo'
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
  overflow: hidden;
`

const Layout = ({
  children,
  title = 'Cosmo PK',
  description = '',
  url = '',
  imageUrl = '',
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Seo
        title={title}
        url={url}
        description={description}
        imageUrl={imageUrl}
      />
      <Main>
        <Navbar />
        {children}
        <Footer />
      </Main>
    </>
  )
}

export default Layout
