import React, { useState, useEffect } from "react";
import LoginModal from "../LoginModal";
import {Link} from "react-router-dom"
import "./style.css"
//imports related to rsuite nav bar. Note: changes other styling?
// import { Nav, NavLink } from 'rsuite';

// import { LinkContainer } from "react-router-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar"

const Navigation = () => {
    // state, state-setter, and initial state
    const [modalIsOpen, setIsOpen] = useState(false)

    // currently only used for console.log
    useEffect(
        () => {
          console.log("LoginModalIsOpen: " + modalIsOpen)
        }
    );

    // change state of modalIsOpen to false
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="container py-3">
            {/* <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        Mern Practice
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/test-page">
                            <Nav.Link>Test Page</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="#" onClick={() => setIsOpen(true)}>
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> */}
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/test-page">Test Page</Link>
                    <Link to="#" onClick={() => setIsOpen(true)}>Login</Link>
                </nav>
                {/* use <Link> vs <a> when using HashRouter */}
                {/* <Link to="/">Home</Link>   */}
                {/* set state to true to open the loginModal */}
                {/* <Link to="#" onClick={() => setIsOpen(true)}>Login</Link> */}
                {/* <Link to="/test-page">Test Page</Link> */}
                {/* pass through the state of the modal to LoginModal */}
                {/* pass through the closeModal function in order use close button within LoginModal */}
                <LoginModal
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                />
            
      </div>
    );
}

export default Navigation;