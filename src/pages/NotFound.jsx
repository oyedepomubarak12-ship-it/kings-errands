
import { ArrowLeft, ArrowRight, Home, SearchX } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-icon">
          <SearchX size={39} strokeWidth={1.6} />
        </div>

        <span className="not-found-eyebrow">
          PAGE NOT FOUND
        </span>

        <h1>
          Looks like this route
          <span> took a wrong turn.</span>
        </h1>

        <p>
          The page may have moved, the link may be incorrect, or the address
          may not exist. You can return to the homepage or explore our services.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            <Home size={17} />
            Back to Home
          </Link>

          <Link to="/services" className="not-found-secondary">
            Explore Services
            <ArrowRight size={17} />
          </Link>
        </div>

        <button
          type="button"
          className="not-found-back"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={15} />
          Return to the previous page
        </button>

        <div className="not-found-code" aria-hidden="true">
          404
        </div>
      </div>
    </main>
  );
}
