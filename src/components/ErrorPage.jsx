import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <main>
            <h2>Opps! 😒</h2>
            <Link to='/'>go back to home</Link>
        </main>
    );
};

export default ErrorPage;