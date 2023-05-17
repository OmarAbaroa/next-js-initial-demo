import styles from '../styles/about.module.css'
import Image from 'next/image'
import Head from 'next/head'

export default function About(){
  return (
    <div>
      <Head>
        <title>
          About Omar
        </title>
      </Head>
      
      <main className={styles.main}>
        <div className={styles.center}>
          <p>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </p>
        </div>

        <div style={{textAlign: "center" }}>
          <a href='/'>
            <h2>
              Ir a {' '}
              <text style={{color: "blue"}}>
                Home
              </text>
            </h2>
          </a>
        </div>
      </main>
    </div>
    
  )
}