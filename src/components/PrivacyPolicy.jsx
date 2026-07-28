import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                1. Introduction
              </h2>
              <p>
                Fixzzy Technologies ("Fixzzy", "we", "us") respects your privacy.
                This Privacy Policy explains how we collect, use, and protect
                your information when you use our website and mobile
                application to book home service professionals.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                2. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, phone number, and email address.</li>
                <li>Service address and location details.</li>
                <li>Booking history and service preferences.</li>
                <li>Device and usage information collected automatically.</li>
                <li>Payment confirmation details from our payment partners.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To connect you with verified service professionals.</li>
                <li>To process bookings and send service updates.</li>
                <li>To improve our platform and customer experience.</li>
                <li>To provide customer support.</li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                4. Payment Information
              </h2>
              <p>
                Payments are processed securely through authorized third-party
                payment partners. Fixzzy does not store your card, UPI, or
                bank account credentials on its own servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                5. Sharing of Information
              </h2>
              <p>
                We share limited booking information (such as name, address,
                and contact number) with the assigned service professional
                solely to fulfill your booking. We do not sell your personal
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                6. Cookies & Analytics
              </h2>
              <p>
                We use cookies and analytics tools, including Google
                Analytics, to understand how visitors use our website and to
                improve our services. You can control cookie preferences
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                7. Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures
                to protect your information from unauthorized access, loss,
                or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                8. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your
                personal information by contacting us using the details
                below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                9. Children's Privacy
              </h2>
              <p>
                Fixzzy is not intended for use by individuals under the age
                of 18. We do not knowingly collect personal information from
                minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Updated
                versions will be posted on this page with a revised "Last
                Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                11. Contact Us
              </h2>
              <p><strong>Fixzzy Technologies</strong></p>
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