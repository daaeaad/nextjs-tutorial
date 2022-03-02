import Head from 'next/head'
import Top from './Top.js';
import Gnb from './Gnb.js';
import Footer from './Footer.js';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Tutorial</title>
      </Head>
      <Top />
      <main>{ children }</main>
      <Footer />
    </>
  );
}