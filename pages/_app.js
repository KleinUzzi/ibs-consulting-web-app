import '@/styles/globals.css'
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Layout>
    <Component {...pageProps} />
    </Layout>
}
