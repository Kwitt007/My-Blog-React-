import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://full-carpal-pick.glitch.me/blogs');

    return (
        <div className="homepage">
            {error && <div> {error} </div>}
            {isPending && <div>Loading... </div>}
            {blogs && < BlogList blogs={blogs} title="All Blogs" />}
        </div >
    );
}

export default Home;