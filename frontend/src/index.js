import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
ReactDOM.render(
  <Auth0Provider
    domain="dev-kk1la60d.us.auth0.com"
    clientId="eMXRjmIAI3nThEIZ7cP2W4NHfp3U4kmx"
    redirectUri='http://localhost:3000'
>
  <App />
</Auth0Provider>,
document.getElementById('root')
);
