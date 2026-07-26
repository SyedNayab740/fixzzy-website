import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Emergency from './components/Emergency';
import TrustSection from './components/TrustSection';
import PartnerSection from './components/PartnerSection';
import HowItWorks from './components/HowItWorks';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Emergency />
        <TrustSection />
        <PartnerSection />
        <HowItWorks />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}