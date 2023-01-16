import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const theme = {
  fg: "palevioletred",
  bg: "white",
  spacing: {
    s: "1rem",
    m: "2rem",
    l: "4rem",
  },
};

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
