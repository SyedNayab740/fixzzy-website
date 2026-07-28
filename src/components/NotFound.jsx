import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="text-center max-w-lg">

        <div className="text-7xl font-extrabold text-brand-600">
          404
        </div>

        <h1 className="mt-6 text-4xl font-bold text-ink">
          Page Not Found
        </h1>

        <p className="mt-4 text-lg text-ink-secondary">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold hover:bg-brand-700 transition"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>

      </div>
    </div>
  );
}