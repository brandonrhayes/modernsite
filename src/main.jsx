import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const redirect = sessionStorage.redirect;
if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, null, redirect);
}

root.render(
  <StrictMode><App /></StrictMode>,
);