import { Inter } from 'next/font/google'
import styles from '../styles/globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Head>
        <meta name="description" content="Initial demo - Omar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component { ...pageProps } />
    </div>
  )
}

export default MyApp