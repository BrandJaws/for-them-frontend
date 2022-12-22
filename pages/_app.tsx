import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import '../styles/index.css'
import "animate.css/animate.min.css";
import {Provider, useDispatch} from 'react-redux'
import {store} from "../stores/store";
import Layout from '../components/Layout';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: any) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <Provider store={store}>
          <CookiesProvider>
            <Layout title="Shop - For Them">
              <Component {...pageProps} />
            </Layout>
          </CookiesProvider>
        </Provider>
      </>
    );
  }
  // return (
  //   <>
  //     <Provider store={store}>
  //       <Component {...pageProps} />
  //     </Provider>
  //   </>
  // )
}

export default MyApp;