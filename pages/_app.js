import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

import Layout from '../src/component/layout/Layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
