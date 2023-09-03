// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Blog = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3001/posts') // Replace with your backend URL
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching posts:', error);
//       });
//   }, []);

//   return (
//     <div className="blog">
//       <h2>Latest Blog Posts</h2>
//       <div className="post-list">
//         {posts.map((post, index) => (
//           <div key={index} className="post">
//             <h3 className="post-title">{post.title}</h3>
//             <p className="post-author">By {post.author}</p>
//             <div className="post-content">{post.content}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const authToken = localStorage.getItem('authToken'); // Assuming you store the authentication token in local storage

  useEffect(() => {
    if (authToken) {
      axios.get('http://localhost:3001/posts', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }
  }, [authToken]);

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
