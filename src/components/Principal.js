<<<<<<< HEAD
import React,{Component} from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button} from 'reactstrap';
import '../styles/principal.scss';
=======
import React,{ Component } from 'react';
>>>>>>> e13d5d955196c6baddee76af5b38565e12aac07a

import MyNavbar from './Navbar';
import Main from "./Main";
// import Companies from './Companies';
// import Description from './Description';
// import Percentage from './Percentage';
// import Customers from './Customers';
// import Calculator from './Calculator';
 import Ready from './Ready';
// import Sitemap from './Sitemap'
import Footer from './Footer'


export default class Principal extends Component{
    
    render(){
        return(
            <div>
<<<<<<< HEAD
                <Navbar expand="md" className="bg">
                    <NavbarBrand href="/">Bellotero.io</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="/" className="menu-item">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="menu-item">Solutions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="menu-item">Stories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="menu-item">Partners</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="menu-item">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="menu-item">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button>Request a demo</Button>
                        </NavItem>
                        <NavItem>
                            <Button>Log In</Button>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container fluid className="Bitmap">


                </Container>
                <Container fluid className="Rectangle-4">


                </Container>
                <Container fluid className="Belloterioio-1280">


                </Container>
                
=======
                <MyNavbar/>
                <Main/>
                 
                {/* 
                <Description/>
                <Companies/>
                <Description/>
                <Customers/>
                <Calculator/>
                <Sitemap /> 
                <Footer />
                <Percentage/>
                <Ready/> */}
                <Ready/>
                <Footer />
>>>>>>> e13d5d955196c6baddee76af5b38565e12aac07a
            </div>
        )
    }
}

