import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./i18next";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));

toast.info('Because of heroku becomes a paid app, maybe some API can not run correctly.')

root.render(
  <Suspense fallback={<div>Loading ~~~</div>}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
);
reportWebVitals();
