import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post
    const handlePost = () => {
        
    }
    return (
        <div>
            <h3>id: {id} {title}</h3>
            <p>{body}</p>
            <button>Show more</button>
        </div>
    );
};

export default Post;