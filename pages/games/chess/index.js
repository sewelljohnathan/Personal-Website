
import Head from "next/head";
import Canvas from "../canvas";
import funcs from "./js/main";

export default function Home() {

    const draw = (ctx, frameCount) => {
        funcs.run(ctx);
    }

    return (
        <div>
            <Head>
            <title>Chess</title>
            <link rel="icon" href="favicon.ico" />
            </Head>
            <Canvas draw={draw} init={funcs.init} width="600" height="600" />
        </div>
    );
}