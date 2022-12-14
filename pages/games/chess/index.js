
import Head from "next/head";
import Canvas from "../canvas";
import { run, init } from "./js/main";

export default function Home() {

    const draw = (ctx, frameCount) => {
        run(ctx);
    }

    return (
        <div>
            <Head>
            <title>Chess</title>
            <link rel="icon" href="favicon.ico" />
            </Head>
            <Canvas draw={draw} init={init} width="600" height="600" />
        </div>
    );
}