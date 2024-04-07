import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./hooks/useTheme";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <HashRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
