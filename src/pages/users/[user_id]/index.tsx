import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const UserPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>user_id: {router.query.user_id}</h1>
      <Link href="/"><a>トップへ</a></Link>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 60,
  }
}

export default UserPage;
