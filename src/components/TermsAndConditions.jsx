import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions | Fixzzy";
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
            Terms & Conditions
          </h1>

          <p className="mt-3 text-ink-secondary">
            Last Updated: July 2026
          </p>

          <div className="mt-8 space-y-8 text-ink-secondary leading-7 sm:leading-8">

    

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              1. About Fixzzy
            </h2>

            <p>
              Fixzzy is a technology platform that connects customers with
              independent verified home service professionals including
              electricians, plumbers, carpenters, painters, AC technicians,
              cleaners and other home service providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              2. Acceptance of Terms
            </h2>

            <p>
              By accessing or using Fixzzy, you agree to comply with these
              Terms & Conditions and all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              3. Services
            </h2>

            <p>
              Fixzzy enables customers to discover and book verified home
              service professionals. The platform facilitates booking,
              scheduling and payment for home services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              4. Payments
            </h2>

            <p>
              Customers pay only for booked home services.
              Payments are processed securely through authorized payment
              partners.
            </p>

            <p className="mt-3">
              Fixzzy does not provide digital wallet services, money transfer,
              lending, investment services or stored-value accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              5. Cancellation & Refunds
            </h2>

            <p>
              Cancellation and refund eligibility depends on the stage of the
              booking and the service provider's policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              6. User Responsibilities
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate booking information.</li>
              <li>Treat service professionals respectfully.</li>
              <li>Make timely payment for completed services.</li>
              <li>Do not misuse the platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              7. Professional Responsibilities
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Provide quality service.</li>
              <li>Maintain professionalism.</li>
              <li>Arrive on time.</li>
              <li>Follow Fixzzy quality standards.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-3">
              8. Limitation of Liability
            </h2>

            <p>
              Fixzzy acts as a technology platform connecting customers and
              independent professionals. Service quality remains the
              responsibility of the professional providing the service.
            </p>
          </section>

         <section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    9. Pricing
  </h2>

  <p>
    Service pricing displayed on Fixzzy is indicative and may vary depending on
    the type of work, location, complexity of the service, materials required,
    and the final assessment by the service professional.
  </p>

  <p className="mt-3">
    Customers will be informed of any additional charges before extra work is
    carried out whenever possible.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    10. Booking Policy
  </h2>

  <ul className="list-disc pl-6 space-y-2">
    <li>Bookings are subject to partner availability.</li>
    <li>Customers should provide accurate address and contact information.</li>
    <li>Professionals may contact customers to confirm appointments.</li>
    <li>Repeated fake or abusive bookings may result in account suspension.</li>
  </ul>
</section>

<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    11. Account Security
  </h2>

  <p>
    Users are responsible for maintaining the confidentiality of their account
    information and OTP verification. Any activity performed using the user's
    account will be considered the responsibility of that user.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    12. Intellectual Property
  </h2>

  <p>
    The Fixzzy name, logo, website, mobile applications, graphics, content,
    trademarks, and software are the exclusive property of Fixzzy Technologies.
    They may not be copied, reproduced, modified, or distributed without prior
    written permission.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    13. Prohibited Activities
  </h2>

  <ul className="list-disc pl-6 space-y-2">
    <li>Providing false information.</li>
    <li>Attempting unauthorized access to the platform.</li>
    <li>Harassing customers or service professionals.</li>
    <li>Using the platform for unlawful activities.</li>
    <li>Interfering with the operation of the Fixzzy platform.</li>
  </ul>
</section>

<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    14. Changes to Terms
  </h2>

  <p>
    Fixzzy reserves the right to modify these Terms & Conditions at any time.
    Updated versions will be published on this website. Continued use of the
    platform after changes are posted constitutes acceptance of the revised
    Terms.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    15. Governing Law
  </h2>

  <p>
    These Terms & Conditions shall be governed by the laws of India. Any
    disputes arising from the use of the platform shall be subject to the
    jurisdiction of the competent courts in Andhra Pradesh, India.
  </p>
</section>
<section>
  <h2 className="text-xl font-semibold text-ink mb-3">
    16. Contact Us
  </h2>

  <p><strong>Fixzzy Technologies</strong></p>
  <p>Email: support@fixzzy.in</p>
  <p>Phone: +91 6281332854</p>
  <p>Location: Nandyal, Andhra Pradesh, India</p>
  <p>Business Hours: Monday – Saturday, 9:00 AM – 7:00 PM</p>
</section>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}