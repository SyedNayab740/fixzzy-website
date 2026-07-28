import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { initGA, trackPageView } from "./utils/analytics";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundCancellationPolicy from "./components/RefundCancellationPolicy";

// Lazy Loaded Components
const Services = lazy(() => import("./components/Services"));
const Emergency = lazy(() => import("./components/Emergency"));
const TrustSection = lazy(() => import("./components/TrustSection"));
const PartnerSection = lazy(() => import("./components/PartnerSection"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const AppDownload = lazy(() => import("./components/AppDownload"));
const AboutFixzzy = lazy(() => import("./components/AboutFixzzy"));

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(
      location.pathname + location.search + location.hash
    );
  }, [location]);

  return null;
}

function HomePage() {
  useEffect(() => {
    document.title = "Fixzzy | Your Trusted Home Partner";
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Suspense fallback={null}>
          <Services />
          <Emergency />
          <TrustSection />
          <PartnerSection />
          <HowItWorks />
          <AppDownload />
          <AboutFixzzy />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnalyticsTracker />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/refund-cancellation-policy"
          element={<RefundCancellationPolicy />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}