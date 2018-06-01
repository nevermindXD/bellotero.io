import React,{Component} from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import '../styles/principal.scss';

export default class Principal extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


    render(){
        return(
            <div>
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
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container fluid className="Bitmap">


                </Container>
                <Container fluid className="Rectangle-4">


                </Container>
                <Container fluid className="Belloterioio-1280">


                </Container>
                
            </div>
        )
    }
}
