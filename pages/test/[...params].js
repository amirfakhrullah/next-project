import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Test = () => {
    const router = useRouter()
    const params = router.query.params || []

    return (
        <>
            <Head>
                <title>Test</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Params: {params.join('/')}</h1>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </>
    )
}

export default Test;