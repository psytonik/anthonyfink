import React from 'react';
import Link from "next/link";

const BsNavLink = (props) => {
    const {route,title} = props
    return (
            <Link href={route}>
                <a className="nav-link port-navbar-link">{title}</a>
            </Link>
    );
};

export default BsNavLink;
