import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts') // Replace with your backend URL
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-author">By {post.author}</p>
            <div className="post-content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
