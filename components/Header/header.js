import React, {useState} from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem} from "reactstrap";
import BsNavLink from "../BsNavLink";
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {className} = props;
    const menuOpenClass =  isOpen ? 'menu-open': 'menu-close';
    return (
        <React.Fragment>
            <Navbar color="transparent" dark expand="md" className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}>
                        <NavbarBrand className="port-navbar-brand">
                                Anthony Fink
                        </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                    <BsNavLink route="/" title="Home" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                    <BsNavLink route="/about" title="About" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                    <BsNavLink route="/portfolio" title="Portfolio" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                    <BsNavLink route="/cv" title="CV" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                    <BsNavLink route="/blog" title="Blog" />
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
