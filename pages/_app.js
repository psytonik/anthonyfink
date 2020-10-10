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
import NextNprogress from 'nextjs-progressbar';

const MyApp = ({ Component, pageProps }) => {
    return (
      <Fragment>
          <NextNprogress
              color="orange"
              startPosition={0.1}
              stopDelayMs={200}
              height="3"
              options={{ easing: 'ease', speed: 500 }}
          />
          <Head>
              <meta name="author" content="Anthony Fink"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta charSet="UTF-8"/>
              <meta name="description" content="Anthony Fink CV site with blog"/>
              <meta name="theme-color" content="#3bace5"/>
              <meta name="msapplication-TileColor" content="#3bace5"/>
              <meta name="msapplication-TileImage" content="/icon/ms-icon-144x144.png"/>
              <link rel="apple-touch-icon" sizes="57x57" href="/icon/apple-icon-57x57.png"/>
              <link rel="apple-touch-icon" sizes="60x60" href="/icon/apple-icon-60x60.png"/>
              <link rel="apple-touch-icon" sizes="72x72" href="/icon/apple-icon-72x72.png"/>
              <link rel="apple-touch-icon" sizes="76x76" href="/icon/apple-icon-76x76.png"/>
              <link rel="apple-touch-icon" sizes="114x114" href="/icon/apple-icon-114x114.png"/>
              <link rel="apple-touch-icon" sizes="120x120" href="/icon/apple-icon-120x120.png"/>
              <link rel="apple-touch-icon" sizes="144x144" href="/icon/apple-icon-144x144.png"/>
              <link rel="apple-touch-icon" sizes="152x152" href="/icon/apple-icon-152x152.png"/>
              <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-icon-180x180.png"/>
              <link rel="icon" type="image/png" sizes="192x192"  href="/icon/android-icon-192x192.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="96x96" href="/icon/favicon-96x96.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
              <link rel="manifest" href="/manifest.json" />

              <title>Anthony Fink CV</title>
          </Head>
          <Component {...pageProps}/>
      </Fragment>)
}

export default MyApp
