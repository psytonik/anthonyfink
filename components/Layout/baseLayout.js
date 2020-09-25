import React from 'react';
import Header from "../Header";

const BaseLayout = ({ className, user, navClass="with-bg", loading, children,headerType }) => {
    const headType = headerType || 'default';
    return (
        <React.Fragment>
            <Header className={`port-nav-${headType}`} />
            <div className="layout-container">
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default BaseLayout;
