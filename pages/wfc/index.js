
import Head from 'next/head'
import UseCanvas from "/components/Canvas";
import { draw, init } from "/js/wfc/main"

export default function Home() {

    return (
        <>
            <Head>
                <title>Wave Function Collapse</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <UseCanvas draw={draw} init={init} width="1200" height="900" />
        </>
    )

}
