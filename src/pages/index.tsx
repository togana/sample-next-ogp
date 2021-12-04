import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>トップページ</h1>
      <ul>
        {
        [...Array(10)].map((_, i) => {
          const href = `/users/${i}`;
          const text = `id: ${i}`;
          return (
            <li key={i}>
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </li>
          );
        })
        }
      </ul>
    </div>
  )
}

export default Home
