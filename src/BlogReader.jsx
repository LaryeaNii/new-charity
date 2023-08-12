import React from 'react';
import { useParams } from 'react-router-dom';
import './blogReader.css';
import supabase from "./config/supabaseclient";
import { useState, useEffect } from "react";

const BlogReader = () => {
  
  const [fetchError, setFetchError] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select();

        if (error) {
          setFetchError('Could not fetch blogs');
          console.log(error);
        } else {
          setBlogs(data || []);
          setFetchError(null);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);
   
  const { blogId } = useParams(); 

  const selectedBlog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!selectedBlog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-reader">
    {fetchError && <h1>{fetchError}</h1>}
    {selectedBlog && (
      <>
        <h2>{selectedBlog.blogheadline}</h2>
        {selectedBlog.blogcoverimage && (
          <img src={selectedBlog.blogcoverimage} alt="blog pic" />
        )}
        {selectedBlog.blogbody1 && <p>{selectedBlog.blogbody1}</p>}
        {selectedBlog.blogimages.length > 0 && (
          <div className='inter-image'>
            <img src={selectedBlog.blogimages[0]} alt="first-image" />
          </div>
        )}
        {selectedBlog.blogbody2 && <p>{selectedBlog.blogbody2}</p>}
        {selectedBlog.blogimages.length > 1 && selectedBlog.blogimages.length > 2 && (
          <div className='inter-image'>
            <img src={selectedBlog.blogimages[1]} alt="second-image" />
            <img src={selectedBlog.blogimages[2]} alt="third-image" />
          </div>
        )}
        {selectedBlog.blogbody3 && <p>{selectedBlog.blogbody3}</p>}
      </>
    )}
  </div>
  
  );
}

export default BlogReader;
