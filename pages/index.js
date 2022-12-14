import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
            <title>Personal Website</title>
            <link rel="icon" href="favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Johnathan Sewell</h1>
            </main>
        </div>
    )
}
