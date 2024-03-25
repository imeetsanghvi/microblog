import BlogList from "./BlogList";
import baseurl from "./Urls";
import useFetch from "./useFetch"
const Home = () => { 
    const { data:blogs, isPending, error } = useFetch(baseurl)

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div> Data Loading </div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        </div>
     );
}

export default Home;