import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/main.scss';
import '../styles/_header.scss';
import '../styles/_index.scss';
import '../styles/_portfolio.scss'
import '../styles/_about.scss';
import '../styles/_cv.scss';
import '../styles/_notFound.scss';

import React,{Fragment} from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
    return (
      <Fragment>
          <Head>
              <meta name="author" content="Anthony Fink"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta charSet="UTF-8"/>
              <meta name="description" content="Anthony Fink CV site with blog"/>
              <title>Anthony Fink CV</title>
          </Head>
          <Component {...pageProps}/>
      </Fragment>)
}

export default MyApp
