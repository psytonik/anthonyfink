import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";

const BlogPage = () => {
    return (
        <BaseLayout>
            <BasePage
                className="blog-page"
                canonicalPath="/blog">
                <h1>
                    Blog Page
                </h1>
                <p>Coming Soon</p>
            </BasePage>
        </BaseLayout>
    );
};

export default BlogPage;
