import Head from 'next/head'
import Cards from 'next/image'
import styles from '../styles/header.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <h1 className={styles.logo}>gabriel <span className={styles.logo}>more</span><span className={styles.logo2}>no .</span></h1>
      </Head>


    </div>
  )
}
