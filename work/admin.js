import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";
const AdminPage = () => {
    return (
                    <BaseLayout>
                        <BasePage>
                            <h1>You are not authorized to see this content</h1>
                        </BasePage>
                    </BaseLayout>
    );
};

export default AdminPage;
