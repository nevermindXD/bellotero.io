import React from 'react';
import './navbar.scss';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';


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
                            <NavItem >
                                <NavLink href="/" className="menu-item">{navLink}</NavLink>
                            </NavItem>
                        )
                    })
                }
                <NavItem>
                    <Button className="buttonRequest" color="buttonRequest">Request a demo</Button>
                </NavItem>
                <NavItem>
                    <Button outline>Log In</Button>
                </NavItem>
                    {/* <NavItem>
                        <NavLink href="/" className="menu-itemButton"><Button className="buttonRequest" color="buttonRequest">Request a demo</Button></NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                        <NavLink href="/" className=""><Button outline >Log In</Button></NavLink>
                    </NavItem> */}
                </Nav>
        </Navbar>
    )
}

export default MyNavbar;