import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <span
            onClick={() => loginWithRedirect()}
            className="nav-link port-navbar-link clickable">
                Login
            </span>
    )
}
export default Login;
