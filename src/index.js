import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// language support
import './i18n'
import {LanguageContextProvider} from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Suspense fallback={'loading'}>
          <LanguageContextProvider>
              <App />
          </LanguageContextProvider>
      </React.Suspense>
  </React.StrictMode>
);
