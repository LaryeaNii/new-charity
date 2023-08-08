import React from 'react';
import { useParams } from 'react-router-dom';
import './blogReader.css';

const BlogReader = ({ blogdata }) => {
  const { blogId } = useParams(); 

  const selectedBlog = blogdata.find(blog => blog.blogId === parseInt(blogId));

  if (!selectedBlog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="blog-reader">
      <h2>{selectedBlog.blogHeadline}</h2>
      <img src={selectedBlog.blogCoverImage} alt="blog pic" />
      <p>{selectedBlog.blogBody1}</p>
      {selectedBlog.blogArticleImages[0] && (
        <div className='inter-image'>
          <img src={selectedBlog.blogArticleImages[0]} alt="first-image" />
        </div>
      )}
      <p>{selectedBlog.blogBody2}</p>
      {selectedBlog.blogArticleImages[1] && selectedBlog.blogArticleImages[2] && (
        <div className='inter-image'>
          <img src={selectedBlog.blogArticleImages[1]} alt="first-image" />
        </div>
      )}
      <p>{selectedBlog.blogBody3}</p>
    </div>
  );
}

export default BlogReader;
