import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "./theme/theme";

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Layout />
          </div>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
