import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
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
        <a href='about'>
          <h2>
            Ir a {' '}
            <text style={{color: "blue"}}>
              About
            </text>
          </h2>
        </a>
      </div>

    </main>
  )
}
