import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function Home(){
  return (
    <div>
      <Head>
        <title>
          Home Omar
        </title>
      </Head>
      
      <main className={styles.main}>
        <h1>About Page</h1>
          
          <h1 className={'title'}>
            Ir a <Link href="/about">About</Link>
          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/index.jsx</code>
          </p>
      </main>
    </div>
    
  )
}