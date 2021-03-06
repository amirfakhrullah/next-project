import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Posts {id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
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

export default Post