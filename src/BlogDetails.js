import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams()
    const { data: blogs, error, isPending } = useFetch('https://full-carpal-pick.glitch.me/blogs/' + id);
    const history = useNavigate();

    const handleClick = () => {

        fetch('https://full-carpal-pick.glitch.me/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history('/');
        })
    }

    return (
        <div className="blogDetails">
            {isPending && <div> Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>

                    <button onClick={handleClick}>Delete Post</button>

                </article>
            )}

        </div>
    );
}

export default BlogDetails;