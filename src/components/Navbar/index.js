import React,{Component} from 'react';
import './navbar.scss';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Collapse,
    NavItem,
    NavLink,
    Button } from 'reactstrap';


export default class MyNavbar extends Component{

    constructor(props){
        super(props)
        this.state = {
          isOpen: false,
        }
        this.toggle = this.toggle.bind(this);
    }

   
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){
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
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <NavbarToggler />
                    <Nav className="ml-auto">        
                { 
                    navLinks.map((navLink,i) => {
                        return (
                                <NavItem key={i}>
                                    <NavLink  href="/" className="menu-item">{navLink}</NavLink>
                                </NavItem>
                            )
                        })
                    }
                    <NavItem className="menu-itemB">
                        <Button className="buttonRequest" color="buttonRequest">
                            <span className="textButtonRequest">Request a demo</span>
                        </Button>
                    </NavItem>
                    <NavItem >
                        <Button outline ><span className="textButtonRequest">Log In</span></Button>
                    </NavItem>
                    </Nav>
                  </Collapse>  
            </Navbar>
        )
    }
}
