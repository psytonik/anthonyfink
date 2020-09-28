import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/main.scss';
import '../styles/_header.scss';
import '../styles/_index.scss';
import '../styles/_portfolio.scss'
import '../styles/_about.scss';
import '../styles/_cv.scss';

import React from "react";
import {Auth0Provider} from "@auth0/auth0-react";
import {useAuth0} from "@auth0/auth0-react";

const MyApp = ({ Component, pageProps }) => {
    return (
      <React.Fragment>
          <Auth0Provider
              domain="dev-wpt9me02.us.auth0.com"
              clientId="5ZEymaseQy9I7fl5t65DwQEzI6IsESFj"
              redirectUri="http://localhost:3000/callback"
              audience="https://dev-wpt9me02.us.auth0.com/api/v2/"
          >
            <Component {...pageProps} isAuth={useAuth0()} />
          </Auth0Provider>
      </React.Fragment>)
}

export default MyApp
