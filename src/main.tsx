import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import reportWebVitals from './reportWebVitals';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)

reportWebVitals();
