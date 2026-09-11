import React from 'react';

export default function PartnerAccountDeletion() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Fixzzy Partner Account Deletion
        </h1>

        <p className="text-gray-600 mb-8">
          Fixzzy Partners can request deletion of their Partner account and
          associated personal data by contacting Fixzzy Support.
        </p>

        <h2 className="text-xl font-semibold text-green-900 mb-3">
          How to request account deletion
        </h2>

        <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-8">
          <li>Contact Fixzzy Support using the contact details below.</li>
          <li>State that you want your Fixzzy Partner account deleted.</li>
          <li>
            Provide the phone number associated with your Partner account so
            we can identify and verify the account.
          </li>
          <li>
            Fixzzy will verify the request and process the account deletion.
          </li>
        </ol>

        <h2 className="text-xl font-semibold text-green-900 mb-3">
          What is deleted
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Partner account information</li>
          <li>Personal profile information</li>
          <li>Account-related data associated with the Partner account</li>
        </ul>

        <h2 className="text-xl font-semibold text-green-900 mb-3">
          Information that may be retained
        </h2>

        <p className="text-gray-600 mb-8">
          Certain information may be retained when required for legal,
          regulatory, security, fraud-prevention, dispute-resolution, or
          transaction-record purposes.
        </p>

        <h2 className="text-xl font-semibold text-green-900 mb-3">
          Contact Fixzzy Support
        </h2>

        <div className="text-gray-600 space-y-2">
          <p>
            Email:{' '}
            <a
              href="mailto:support@fixzzy.in"
              className="text-green-700 font-medium"
            >
              support@fixzzy.in
            </a>
          </p>

          <p>
            Phone:{' '}
            <a
              href="tel:+916281332854"
              className="text-green-700 font-medium"
            >
              +91 6281332854
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
