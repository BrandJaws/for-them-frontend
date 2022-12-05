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

export async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`)
  const axios = (await import(`axios`)).default

  // Fetch HTML
  let res = await axios(process.env.WEBFLOW_URL).catch((err) => {
    console.error(err)
  })
  const html = res.data

  // Parse HTML with Cheerio
  const $ = cheerio.load(html)
  const bodyContent = $(`body`).html()

  // Send HTML to component via props
  return {
    props: {
      bodyContent,
    },
  }
}
