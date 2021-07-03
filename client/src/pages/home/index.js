import React from "react";
import profilePicture from "../../img/profilePicture.jpg";

const Home = () => {
    return(
        <div>
            <h1>New Mern Practice</h1>
            <h2>Author: Shayla Stevenson</h2>
            <img src={profilePicture} alt="Shayla Stevenson" />
        </div>
    )
}

export default Home;