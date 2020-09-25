import React,{Fragment} from 'react';
import {useAuth0} from "@auth0/auth0-react";

const AdminProtection = ({children}) => {
    const {isAuthenticated,user} = useAuth0();
    return isAuthenticated &&isAuthenticated && user.email === '' && <Fragment>{children}</Fragment>
};

export default AdminProtection;

