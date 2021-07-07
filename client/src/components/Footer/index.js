import React from 'react';
import FooterNav from "react-bootstrap/Navbar";
import { Container, NavbarBrand } from "react-bootstrap"

function Footer() {
    return(
        <div className="fixed-bottom">
           <FooterNav>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </FooterNav>
        </div>
    )
}

export default Footer;
