import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="not-found-tag">404 ERROR</p>

        <h1>
          Page not <span>found.</span>
        </h1>

        <p>
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link to="/" className="not-found-btn">
          <Home size={18} />
          Back to Home
          <ArrowLeft size={18} />
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
