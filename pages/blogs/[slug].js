import React from 'react';
import {useRouter} from "next/router";

const BlogArticle = () => {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <div>
            blog name: {slug}
        </div>
    );
};

export default BlogArticle;
