import Link from 'next/link'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

const AboutPage: NextPage = (props: any) => {
  return (
    <>
      <Layout title="About | Next.js + TypeScript Example">
        <h1>About</h1>
        <p>This is the about page</p>
        <div dangerouslySetInnerHTML={{ __html: props.bodyContent }} />
        <p>
          <Link href="/">Go home</Link>
        </p>
      </Layout>
    </>
  )
}

export default AboutPage
