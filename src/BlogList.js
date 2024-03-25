import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return ( 
        <div className="blog-list">
            <h1> {title} </h1>
            {blogs.map( (blog) => (
                // <Card>
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2> { blog.title } </h2>
                            { blog.author && <p>Written by {blog.author} </p>}
                            { !blog.author && <div>{ blog.body }</div> }
                        </Link>
                    </div>
                // </Card>
            ) )
            }
        </div>
     );
}
 
export default BlogList; 