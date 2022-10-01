import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    console.log(comment)
    return (
        <div>
            <h3>This is post detail</h3>
            <p> Title: {post.title}</p>
            <p> Body: {post.body}</p>
            <p>Comment: {comment.length}</p>
            {
                comment.map(comment => <CommentDetail comment={comment}></CommentDetail>)
            }
        </div>
    );
};

export default PostDetail;