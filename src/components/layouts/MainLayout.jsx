import Head from 'next/head';
import { Navbar } from '../Navbar';


import styles from './MainLayout.module.css';
import { useRouter } from 'next/router';

export const MainLayout = ({ children }) => {

  const router = useRouter();
  
  console.log(router)
  
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Home - Omar</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar />

      <main className={styles.main}>

        { children }

      </main>     
    </div>
  )
};