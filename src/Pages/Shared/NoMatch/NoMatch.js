import { Link } from "react-router-dom";

export const NoMatch = () => {
    return (
      <div >
        <h2>404.. This page is not found!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
