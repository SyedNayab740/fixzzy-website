import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Emergency from "./components/Emergency";
import TrustSection from "./components/TrustSection";
import PartnerSection from "./components/PartnerSection";
import HowItWorks from "./components/HowItWorks";
import AppDownload from "./components/AppDownload";
import AboutFixzzy from "./components/AboutFixzzy";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundCancellationPolicy from "./components/RefundCancellationPolicy";

function HomePage() {

  useEffect(() => {
  document.title = "Fixzzy | Your Trusted Home Partner";
}, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Emergency />
        <TrustSection />
        <PartnerSection />
        <HowItWorks />
        <AppDownload />
        <AboutFixzzy />
      </main>

      <Footer />
    </>
  );
}
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route
          path="/refund-cancellation-policy"
          element={<RefundCancellationPolicy />}
        />
      </Routes>
    </div>
  );
}