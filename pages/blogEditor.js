import React from 'react';
import BaseLayout from "../components/Layout/baseLayout";
import BasePage from "../components/BasePage";

const BlogEditor = () => {
    return (
        <BaseLayout>
            <BasePage
                className="blog-editor-page"
                title="Blog Editor"
                canonicalPath="/blogEditor">
            </BasePage>
        </BaseLayout>
    );
};

export default BlogEditor;
