import React, { useState, useEffect } from "react";
import LoginModal from "../LoginModal";
import {Link} from "react-router-dom"
import "./style.css"
//import TestPage from "../../pages/TestPage";


const Navigation = () => {
    // state, state-setter, and initial state
    const [modalIsOpen, setIsOpen] = useState(false)

    // currently only used for console.log
    useEffect(
        () => {
          console.log("modalIsOpen: " + modalIsOpen)
        }
    );

    // change state of modalIsOpen to false
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        {/* <a href="/">Home</a> */}
                    </li>
                    <li>
                        {/* set state to true to open the loginModal */}
                        {/* check if best practice is to use <button> vs <a> */}
                        {/* <a href="#"  onClick={() => setIsOpen(true)}>login</a> */}
                        <Link to="#" onClick={() => setIsOpen(true)}>Login</Link>
                    </li>
                    <li>
                        <Link to="/test-page">Test Page</Link>
                    </li>
                </ul>
                {/* pass through the state of the modal to LoginModal */}
                {/* pass through the closeModal function in order use close button within LoginModal */}
                <LoginModal
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                />
            </nav>
      </div>
    );
}

export default Navigation;