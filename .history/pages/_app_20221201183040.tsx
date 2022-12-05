import React from 'react'
import { AppProps } from 'next/app'

import "animate.css/animate.min.css";



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;