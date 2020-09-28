import React from 'react';
import ActiveLink from "../ActiveLink";

const BsNavLink = (props) => {
    const {route,title} = props
    return (
        <ActiveLink activeClassName="active" route={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </ActiveLink>
    );
};

export default BsNavLink;
