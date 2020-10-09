import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";

const NotFound = () => {
    return (
        <BaseLayout>
            <BasePage
                className="notFound-page"
            >
                <h1>404 | Not Found</h1>
            </BasePage>
        </BaseLayout>
    );
};

export default NotFound;
