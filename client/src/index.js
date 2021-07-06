import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";

// use HashRouter when deploying to gh-pages
ReactDOM.render(
    // todo: look up:
    // <React.StrictMode>
      // name of the github repo
      <HashRouter basename="/new-mern-practice">
        <App />
      </HashRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
  );
  registerServiceWorker();