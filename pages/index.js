import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Tutor</title>
      </Head>
      <main className={styles.container}>
        <article>
          <header>
            <h1>Como desenvolver uma página Web</h1>
          </header>
          <section>
            <p>criado por:
              <a className={styles.a} href="https://github.com/LuisDavel/" target="_blank">Luis Davel</a>
            </p>
            <p>Digamos que você tenha um produto, um portfólio ou apenas uma ideia que deseja compartilhar com todos em seu próprio site. Antes de publicá-lo na internet, você quer torná-lo atraente, profissional ou pelo menos decente de se ver.</p>
          </section>
        </article>

      </main>
      <footer className={styles.footer}>Feito por <a className={styles.a} href="https://github.com/LuisDavel/" target="_blank">Luis Davel</a> </footer>
    </>
  )
}
