import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import SSRProvider from 'react-bootstrap/SSRProvider';
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
<SSRProvider>
<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>
</Head>
<Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </SSRProvider>
  </>
  )
}

export default MyApp
