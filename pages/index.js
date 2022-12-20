import Head from 'next/head'
import styles from "./Home.module.css"
import "bootstrap/dist/css/bootstrap.css"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Personal Website</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <div class={styles.background}>

                <div class="container pt-5">
                    <h1 class={styles.header}>Johnathan Sewell</h1>
                </div>
                
                <div class="container pt-5"><div class="row">
                    <div class="col"><div class="container pt-5">
                        <h2 class={styles.header}>About Me</h2>
                        <div class="card">
                            <div class="row g-0">
                                <div class="col-5">
                                    <img src="/headshot.jpeg" class="img-fluid rounded-start"/>
                                </div>
                                <div class="col">
                                    <div class="card-body">
                                        <h5 class="card-title">Johnathan</h5>
                                        <p class="card-text">I am a Computer Science student at the University of Central Florida.</p>
                                        <p class="card-text">With over 7 years of experience in addition to formal education, I am knowledgeable in:</p>
                                        <ul>
                                            <li>Python, C, JavaScript</li>
                                            <li>Relational and Document databases</li>
                                            <li>Data Structure and Algorithms</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                    <div class="col"><div class="container pt-5">
                        <h2 class={styles.header}>Where to Find Me</h2>
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <img src="/github-mark.png" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">GitHub</h5>
                                        <p class="card-text">Check out my professional and hobby projects</p>
                                        <a href="https://github.com/sewelljohnathan" class="btn btn-primary">Go</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="..." class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">Upwork</h5>
                                        <p class="card-text">Check out my work as a freelancer!</p>
                                        <a href="https://www.upwork.com/freelancers/~01c9d420cb82322198" class="btn btn-primary">Go</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="/linkedin-mark.png" class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">LinkedIn</h5>
                                        <p class="card-text">Check out my LinkedIn profile!</p>
                                        <a href="https://www.linkedin.com/in/johnathan-sewell-0496121b7/" class="btn btn-primary">Go</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </div></div>

                <div class="container pt-5">
                    <h2 class={styles.header}>Past Projects</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card h-100 bg-dark bg-gradient text-white">
                                    <div class="card-body">
                                        <h5 class="card-title">KaitScript</h5>
                                        <p class="card-text">A custom, interpreted programming language.</p>
                                        <ul>
                                            <li>Written in C</li>
                                            <li>Complex expression parsing</li>
                                            <li>Turing-complete</li>
                                        </ul>   
                                        <a href="https://github.com/sewelljohnathan/KaitScript" class="btn btn-primary position-absolute bottom">GitHub Repo</a> 
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 bg-dark bg-gradient text-white">
                                    <div class="card-body">
                                        <h5 class="card-title">Exciting Games</h5>
                                        <p class="card-text">I have made many games using JavaScript and HTML canvas.</p>
                                        <ul>
                                            <li>Chess</li>
                                            <li>Complex 3D-models</li>
                                            <li>Civilization building</li>
                                        </ul>
                                        <a href="/games" class="btn btn-primary">/games</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 bg-dark bg-gradient text-white">
                                    <div class="card-body">
                                        <h5 class="card-title">This Website!</h5>
                                        <p class="card-text">This entire website's frontend, data management, and hosting was all done by me.</p>
                                        <ul>
                                            <li>Next.js and Bootstrap</li>
                                            <li>INSERT DATABASE</li>
                                            <li>INSERT HOSTING</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>

                <div class="container pt-5 pb-3"><div class="row">
                    <div class="col">
                        <p class={`text-start ${styles.footer}`}>Made by: Johnathan Sewell</p>
                    </div>
                    <div class="col">
                        <p class={`text-end ${styles.footer}`}>Made with: Next.js and Bootstrap</p>
                    </div>   
                </div></div>
                
            </div>
        </div>
    )
}
