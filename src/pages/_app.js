import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '@styles'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo({ behavior: 'smooth', top: 1 })
    })
  }, [router])

  return (
    <ThemeProvider theme={theme}>
      <NextNprogress
        color="#F9FBFF"
        startPosition={0.2}
        stopDelayMs={200}
        height="2"
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
