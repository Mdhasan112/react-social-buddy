import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post
    const history = useHistory()

    const handlePost = (id) => {
        const url = `post/${id}`
        history.push(url)
    }
    
    return (
        <div>
            <h3>id: {id} {title}</h3>
            <p>{body}</p>
            <button onClick={()=> handlePost(id)}>Show more</button>
        </div>
    );
};

export default Post;