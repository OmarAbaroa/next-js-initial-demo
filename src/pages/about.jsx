import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function About(){
  return (
    <div>
      <Head>
        <title>
          About Omar
        </title>
      </Head>
      
      <main className={styles.main}>
        <h1>About Page</h1>
          
          <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/about.jsx</code>
          </p>
      </main>
    </div>
    
  )
}