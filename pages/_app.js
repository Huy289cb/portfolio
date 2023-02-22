import { ChakraProvider, cookieStorageManager  } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={cookieStorageManager}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
