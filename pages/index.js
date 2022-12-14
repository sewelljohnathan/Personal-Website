import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
            <title>Personal Website</title>
            <link rel="icon" href="favicon.ico" />
            <link rel="stylesheet" href="../styles/Home.module.css" />
            </Head>

            <main className={styles.main}>
                <h1>Johnathan Sewell</h1>
            </main>
        </div>
    )
}
