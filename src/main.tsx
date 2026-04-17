import { StrictMode } from 'react'
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'react-oidc-context';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { oidcConfig } from './app/auth/oidc-config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <Router>
        <App/>
      </Router>
    </AuthProvider>
  </StrictMode>,
)
