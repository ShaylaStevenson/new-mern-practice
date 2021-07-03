import React, { useState, useEffect } from "react";
import LoginModal from "../LoginModal";
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
                <a href="/"> Home </a>
                {/* set state to true to open the loginModal */}
                {/* check if best practice is to use <button> vs <a> */}
                <a href="#"  onClick={() => setIsOpen(true)}>login</a>
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