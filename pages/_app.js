import '../styles/globals.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from '../store/store'



function MyApp({ Component, pageProps }) {
  return(
    <React.StrictMode>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.StrictMode>
  )

}

export default MyApp
