import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import baseurl from "./Urls"


const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`${baseurl}/${id}`);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`${baseurl}/${id}`, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          { blog.author && <p>Written by { blog.author }</p>}
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;