import React, {useState} from 'react';
import {Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem} from "reactstrap";
import BsNavLink from "../BsNavLink";
// import Login from "../Auth/Login/login";
// import Logout from "../Auth/LogOut/logout";
// import {useAuth0} from "@auth0/auth0-react";
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    // const { isAuthenticated } = useAuth0();

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
                            {/*{*/}
                            {/*    !isAuthenticated ?*/}
                            {/*    <NavItem className="port-navbar-item">*/}
                            {/*        <Login/>*/}
                            {/*    </NavItem>*/}
                            {/*        :*/}
                            {/*    <NavItem className="port-navbar-item">*/}
                            {/*        <Logout/>*/}
                            {/*    </NavItem>*/}
                            {/*}*/}
                        </Nav>
                    </Collapse>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
