import './assets/css/font-awsome.css';
import "./assets/scss/react-bootstrap.scss";
import "./assets/scss/custom.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import $ from 'jquery';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { store, persister } from "./store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import config from "./config";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <BrowserRouter basename={config.basename}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
