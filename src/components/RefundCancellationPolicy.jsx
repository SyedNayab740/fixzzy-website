import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function RefundCancellationPolicy() {
  useEffect(() => {
 document.title = "Refund & Cancellation Policy | Fixzzy";
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
            Refund & Cancellation Policy
          </h1>

          <p className="mt-3 text-ink-secondary">
            Last Updated: July 2026
          </p>

      <div className="mt-8 space-y-8 text-ink-secondary leading-7 sm:leading-8">  

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                1. Cancellation by Customer
              </h2>

              <p>
                Customers may cancel a booking before the service professional
                begins the service. Cancellation charges, if applicable, will
                be communicated during the booking process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                2. Cancellation by Service Professional
              </h2>

              <p>
                If a service professional cancels due to unavoidable
                circumstances, Fixzzy will help arrange another available
                professional whenever possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                3. Refund Eligibility
              </h2>

              <p>
                Refund eligibility depends on the booking status, payment
                status, and nature of the cancellation. Approved refunds will
                be processed using the original payment method whenever
                applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                4. Refund Timeline
              </h2>

              <p>
                Once approved, refunds are generally processed within 5–10
                business days. Processing time may vary depending on your bank
                or payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                5. Failed Payments
              </h2>

              <p>
                If a payment fails but the amount is deducted from your bank
                account, please contact your bank first. If the issue persists,
                contact Fixzzy Support with the transaction details.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                6. Non-Refundable Situations
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Services successfully completed.</li>
                <li>Incorrect booking information provided by the customer.</li>
                <li>Missed appointments caused by customer unavailability.</li>
                <li>Requests made after the applicable refund period.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">
                7. Contact Us
              </h2>

              <p><strong>Fixzzy Technologies</strong></p>
              <p>Email: support@fixzzy.in</p>
              <p>Phone: +91 12345 67890</p>
              <p>Nandyal, Andhra Pradesh, India</p>
            </section>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}