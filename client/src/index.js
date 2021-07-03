import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));


ReactDOM.render(
    // <React.StrictMode>
      <HashRouter
      basename="/new-mern-practice">
        <App />
      </HashRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
  );
  registerServiceWorker();