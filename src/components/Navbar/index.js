import React from 'react';
import './navbar.scss';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';


const MyNavbar = () =>{
    const navLinks = [
        'Features',
        'Solutions',
        'Stories',
        'Partners',
        'About',
        'Blog'
    ]

    return (
        <Navbar expand="md" className="bg">
            <NavbarBrand href="/">
                <img   
                    src={"http://res.cloudinary.com/dfm5xzcsq/image/upload/v1527827909/bellotero-logo_3x.png"} 
                    alt="bellotero logo"
                    className="bellotero-logo"/>
            </NavbarBrand>
            <NavbarToggler />
                <Nav className="ml-auto">        
               { 
                   navLinks.map(navLink => {
                    return (
                            <NavItem>
                                <NavLink href="/" className="menu-item">{navLink}</NavLink>
                            </NavItem>
                        )
                    })
                }
                </Nav>
        </Navbar>
    )
}

export default MyNavbar;