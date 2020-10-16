import React, {useState} from 'react';

const BlogEditor = () => {
    const [value,setValue] = useState();
    const onChange = () => {
        setValue({value})
    };
    return (
        <div>

        </div>
    );
};

export default BlogEditor;
