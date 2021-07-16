import React from "react";
import {  Route, Switch } from "react-router-dom";
//used HashRouter in order to deploy to gh pages; set up in index.js
//BrowserRouter as Router,
//import Navigation from "./components/Navigation";
//import Footer from "./components/Footer"
import Home from "./pages/Home"
import "./App.css";
import TestPage from "./pages/TestPage";
//import Card from "react-bootstrap/Card"
import SideDrawer from "./components/SideDrawer";
import DrawerBottom from "./components/DrawerBottom";
const App = () => {
    return (
      <div className="App">
        {/* <Router> */}
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/test-page">
                <TestPage />
              </Route>
            </Switch>
           <DrawerBottom/>
            {/* <Card><h4>I am a card, YEAH!</h4></Card> */}
            {/* <SideDrawer/> */}
            {/* <BottomHamburger /> */}
            {/* <Footer/> */}

          </div>
        {/* </Router> */}
      </div>
    );
}

export default App