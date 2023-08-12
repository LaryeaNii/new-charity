import supabase from "./config/supabaseclient";
import { useState, useEffect } from "react";

const TestApp = () => {
     
    const [fetchError, setFetchError] = useState(null);
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data, error } = await supabase
                .from('blogs')
                .select();

            if (error) {
                setFetchError('Could not fetch blogs');
                setBlogs(null);
                console.log(error);
            }
            if (data) {
                setBlogs(data);
                setFetchError(null);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div>
            {fetchError && <p>{fetchError}</p>}
            {blogs && blogs.map(blog => (
                <p key={blog.id}>{blog.blogName}</p>
            ))}
        </div>
    );
};
 
export default TestApp;
