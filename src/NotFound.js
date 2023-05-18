import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404 - Page not found</h1>
            <p>Sorry, this page does not exist</p>
            <Link to='/'>Go Bact to Homepage...</Link>
        </div>
    );
}

export default NotFound;