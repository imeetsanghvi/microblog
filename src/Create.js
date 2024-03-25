import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "./Urls"
const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mario")
    const [isPending, setIsPending] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        
        setIsPending(false)
        fetch(baseurl, 
        {
            method:"POST",
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then( (e) => {
            console.log("New Blog added")
            console.log(e)
            setIsPending(true)
            navigate(-1);
        }).catch( e => navigate('failure'))
    }


    return ( 
        <div className="create">
            <h1>Create a Blog</h1>
            <form onSubmit={handleSubmit} >
                <label>Blog Title: </label>
                <input 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    aria-required />

                <label>Blog Body: </label>
                <textarea 
                    required 
                    value={body}
                    onChange={ e => setBody(e.target.value) }
                    aria-required/>

                <label>Blog Author</label>
                <select
                    value={author} 
                    onChange={e => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                { isPending && <button>Add Blog</button> }
                { !isPending && <button disabled>Adding Blog Data...</button> }
                <label style={{color:"red"}} ><br/>Temporarily the "Add Blog" button will emulate the creation but the fake API Server doesn't support creating blog post, Working on this fix. </label>
            </form>
        </div>
     );
}
  
export default Create; 