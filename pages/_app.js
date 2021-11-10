import '../styles/globals.css'
import Layout from "../components/Layout";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from '../store/store'



function MyApp({ Component, pageProps }) {
  return(
    <React.StrictMode>
    <Layout>
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    </Layout>
    </React.StrictMode>
  )

}

export default MyApp
