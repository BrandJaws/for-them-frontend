import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import { parseShopifyResponse, shopifyClient } from "../lib/shopify";

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = "This is the default title" }) => {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Nav />
        </header>
        <main className="app-wrapper">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
export default Layout;
