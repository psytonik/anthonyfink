import React from "react";

const Logout = () => {

    return (
        <span onClick={() => logout({ returnTo: window.location.origin })} className="nav-link port-navbar-link clickable">
                Logout
            </span>
    )
}
export default Logout;
