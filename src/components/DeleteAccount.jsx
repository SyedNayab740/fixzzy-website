import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DeleteAccount() {
  useEffect(() => {
    document.title = "Delete Account | Fixzzy";
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
            Delete Your Fixzzy Account
          </h1>

          <p className="mt-3 text-ink-secondary">
            Last Updated: September 2026
          </p>

          <div className="mt-8 space-y-8 text-ink-secondary leading-7 sm:leading-8">

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                How to Delete Your Account
              </h2>
              <p>
                You can permanently delete your Fixzzy account directly from
                the Fixzzy mobile application.
              </p>

              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>Open the Fixzzy app and sign in to your account.</li>
                <li>Go to <strong>Profile</strong>.</li>
                <li>Select <strong>Delete My Account</strong>.</li>
                <li>Review the confirmation message and confirm the deletion.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                What Happens When You Delete Your Account
              </h2>
              <p>
                When you confirm account deletion, your Fixzzy account is
                deleted and you are signed out of the application. You may
                create a new Fixzzy account again in the future.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                Data Deletion
              </h2>
              <p>
                Account-related personal information associated with your
                Fixzzy account is deleted as part of the account deletion
                process. Certain information may be retained where required
                for legal, regulatory, security, fraud-prevention, or
                transaction-record purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                Need Help?
              </h2>
              <p>
                If you are unable to delete your account through the Fixzzy
                app, contact us and we will assist you with your request.
              </p>

              <p className="mt-3">
                <strong>Fixzzy Technologies</strong>
              </p>
              <p>Email: support@fixzzy.in</p>
              <p>Phone: +91 6281332854</p>
              <p>Location: Nandyal, Andhra Pradesh, India</p>
            </section>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
