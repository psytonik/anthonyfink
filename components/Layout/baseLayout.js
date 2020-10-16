import React from 'react';
import Header from "../Header";
import Head from "next/head";

const BaseLayout = ({ className, user, navClass="with-bg", loading, children,headerType }) => {
    const headType = headerType || 'default';
    return (
        <React.Fragment>
            <Head>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"

                />
                <title>
                    Anthony Fink Cv
                </title>
            </Head>
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
