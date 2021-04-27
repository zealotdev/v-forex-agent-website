import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viwango FX</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Viwango FX Tanzania - The trusted forex agent in Tanzania"
        />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
