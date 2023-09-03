
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const authToken = localStorage.getItem('authToken'); // Assuming you store the authentication token in local storage
  const apiBaseUrl = 'http://localhost:3001'; // Replace with your actual API base URL

  useEffect(() => {
    axios.get(`${apiBaseUrl}/posts`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json', // Specify JSON as the expected response
      },
    })
    .then(response => {
      console.log('API Response Data:', response.data); // Log the entire response for debugging
      setPosts(response.data);
    })
    .catch(error => {
      console.error('Error fetching posts:', error);
    });
  }, [authToken, apiBaseUrl]);

  return (
    <div className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-author">By {post.author}</p>
            <div className="post-content">{post.content}</div>
            {post.image_url && (
              <img
                src={`${apiBaseUrl}${post.image_url}`} // Use the absolute image URL
                alt={post.title} // Set an appropriate alt text
                className="post-image"
                onLoad={() => console.log('Image loaded successfully')} // Log when the image is loaded
                onError={() => console.error('Image loading error')} // Log if there's an error loading the image
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
