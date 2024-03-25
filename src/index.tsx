import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App.tsx";

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries:{
  //     refectOnWindowFocus: false,
  //     retry: false
  //   }
  // },
  // queryCache: new QueryCache({
  //   onError: (error: Error | string) => {
  //     if(error !== "Missing queryFn" && typeof error !== `string` && error.message !== `IGNORE_ERROR`)
  //       store.dispatch(
  //         addMessage({type: `error`, value: typeof error !== `string` && error.message})
  //       )
  //   }
  // }),
  // mutationCache: new MutationCache({
  //   onError: (error: Error) => {
  //     StorageEvent.dispatch(addMessage({type: `error`. value: error.message}));
  //   }
  // })
});

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
