import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Services from '../components/Services';
import Trustee from '../components/Trustee';
import Email from './../components/Email';
import Footer from './../components/Footer';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Viwango FX</title>
        <link rel="icon" href="/viwango.svg" />
        <meta
          name="description"
          content="Viwango FX Tanzania - The trusted forex agent in Tanzania"
        />
      </Head>

      <main className={styles.main}>
        <Layout>
          <Hero />
          <span className={styles.separator}>
            <img src="./separator.svg" alt="separator" />
          </span>
          <About />
          <Values />
          <span className={styles.separator}>
            <img src="./separator.svg" alt="separator" />
          </span>
          <Services />
          <Trustee />
          <Email />
          <Footer />
        </Layout>
      </main>
    </div>
  );
}
