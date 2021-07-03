import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home"
import "./App.css";
import TestPage from "./pages/TestPage";

const App = () => {
  
    return (
      <div className="App">
        {/* <Router> */}
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/test-page">
                <TestPage />
              </Route>
            </Switch>
          </div>
        {/* </Router> */}
      </div>
    );
}

export default App