import Link from 'next/link'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

const AboutPage: NextPage = () => {
  return (
    <>
      <Layout title="About | Next.js + TypeScript Example">
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/">Go home</Link>
        </p>
      </Layout>
    </>
  )
}

export default AboutPage
