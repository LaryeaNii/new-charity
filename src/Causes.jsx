import './Causes.css'
import { Link } from 'react-router-dom';


const Causes = ({blogdata}) => {


    return ( 
    
    <div>
       <div className="all-blog-section">
        <h1> All our news articles in one place.</h1>
      <div className="all-blog">
      {blogdata.map(blog => (
            <div className="all-blog-card" key={blog.blogId}>
              <img src={blog.blogCoverImage} alt="blog pic" />
              <div>
                <p>{blog.blogHeadline}</p>
                <Link to={`/blogreader/${blog.blogId}`}>
                  <p className="blog-link">Read More →</p>
                </Link>
              </div>
            </div>
          ))}
      </div>
         
        </div>
      </div>
    );
}
 
export default Causes;