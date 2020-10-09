import React from 'react';
import {useRouter} from "next/router";

const BlogArticle = () => {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            blog id
        </div>
    );
};

export default BlogArticle;
