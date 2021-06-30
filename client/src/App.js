import React, { Component } from "react";
import profilePicture from "./img/profilePicture.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>New Mern Practice</h1>
        <h2>Author: Shayla Stevenson</h2>
        <img src={profilePicture} alt="Shayla Stevenson" />
      </div>
    );
  }
}

export default App;
