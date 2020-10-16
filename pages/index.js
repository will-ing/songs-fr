import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'
import FormSubmit from './Form'
import useSWR from 'swr'
import axios from 'axios'


const fetch = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

export default function Home() {
  const { data, error } = useSWR('http://157.245.167.198:8001/api/v1/posts/', fetch)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        {data.map((item) => {
          return <h2 key={item.url}>Character name: {item.name}</h2>
        })};
      </main>
      <FormSubmit />

      <Footer copyright="2020" />
    </div>
  )
}
