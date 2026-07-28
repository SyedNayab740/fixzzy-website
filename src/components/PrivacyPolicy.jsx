import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
 document.title = "Privacy Policy | Fixzzy";
}, []);
  return (
    <>
      <Header />

      <div className="min-h-screen bg-bg">
       <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 text-brand-700 hover:text-brand-900 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-ink">
            Privacy Policy
          </h1>

          <p className="mt-3 text-ink-secondary">
            Last Updated: July 2026
          </p>

          <div className="mt-8 space-y-8 text-ink-secondary leading-7 sm:leading-8">

            {/* Paste all your Privacy Policy sections here */}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}