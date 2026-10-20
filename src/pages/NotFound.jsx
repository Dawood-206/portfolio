import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";

export default function NotFound() {
  return (
    <section className="section notfound-section">
      <div className="container">
        <FadeIn>
          <div className="notfound">
            <div className="notfound-code">404</div>
            <h1 className="notfound-title">Page Not Found</h1>
            <p className="notfound-text">
              Oops — the page you're looking for doesn't exist or was moved.
            </p>
            <div className="notfound-buttons">
              <Link to="/" className="btn btn-primary">Go Home</Link>
              <Link to="/projects" className="btn btn-outline">See Projects</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}