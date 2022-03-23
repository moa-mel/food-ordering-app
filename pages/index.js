import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from  "../components/Featured"
import FoodList from  "../components/FoodList"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food ordering App</title>
        <meta name="description" content="Tasty food " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
       <FoodList/>
    </div>
  )
}
