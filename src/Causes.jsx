import './Causes.css';
import { Link } from 'react-router-dom';
import supabase from "./config/supabaseclient";
import { useState, useEffect } from "react";

const Causes = () => {
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

  return (
    <div>
      <div className="all-blog-section">
        {fetchError && <h1>{fetchError}</h1>}
        <h1> All our news articles in one place.</h1>
        <div className="all-blog">
          {blogs.map(blog => (
            <div className="all-blog-card" key={blog.id}>
              <img src={blog.blogcoverimage} alt="blog pic" />
              <div>
                <p>{blog.blogheadline}</p>
                <Link to={`/blogreader/${blog.id}`}>
                  <p className="blog-link">Read More →</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Causes;
