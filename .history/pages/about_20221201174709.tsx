import Link from 'next/link'
import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Head from 'next/head'
import parseHtml from 'html-react-parser'

const AboutPage: NextPage = (props: any) => {
  return (
    <>
      <Head>
        {parseHtml(props.headContent)}
      </Head>
      <Layout title="About - For Them">
        <div dangerouslySetInnerHTML={{ __html: props.bodyContent }} />
      </Layout>
    </>
  )
}

export default AboutPage

export async function getStaticProps(ctx: any) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`)
  const axios = (await import(`axios`)).default

  // Fetch HTML
  let res = await axios(process.env.WEBFLOW_URL).catch((err) => {
    console.error(err)
  })
  // @ts-ignore
  const html = res.data

  // Parse HTML with Cheerio
  const $ = cheerio.load(html)
  const bodyContent = $(`body`).html()
  const headContent = $(`head`).html()

  // Send HTML to component via props
  return {
    props: {
      bodyContent,
      headContent
    },
  }
}
