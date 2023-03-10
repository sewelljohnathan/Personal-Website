
import Head from "next/head";
import UseCanvas from "/components/Canvas";
import { run, init } from "/js/chess/main";

export default function Home() {

    const draw = (ctx, frameCount) => {
        run(ctx);
    }

    return (
        <div>
            <Head>
            <title>Chess</title>
            <link rel="icon" href="../favicon.ico" />
            </Head>
            <UseCanvas draw={draw} init={init} width="600" height="600" />
        </div>
    );
}