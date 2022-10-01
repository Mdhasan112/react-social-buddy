import React from 'react';

const CommentDetail = (props) => {
    const {name, email} = props.comment
    return (
        <div>
           <p>name: {name}</p>
           <p>{email}</p>
        </div>
    );
};

export default CommentDetail;