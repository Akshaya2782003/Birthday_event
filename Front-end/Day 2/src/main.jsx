import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='224369556006-5gjbodc13eq2lio5hj01f5gvg627jt91.apps.googleusercontent.com'>
        <App/>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
