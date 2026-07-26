import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SERVICE_NAMES = {
  'electrician': 'Electrician',
  'plumber': 'Plumber',
  'ac-repair': 'AC Repair',
  'cleaning': 'Cleaning',
  'painting': 'Painting',
  'carpentry': 'Carpentry',
  'pest-control': 'Pest Control',
  'water-tank-cleaning': 'Water Tank Cleaning',
};

export default function ServiceBooking() {
  const { slug } = useParams();
  const serviceName = SERVICE_NAMES[slug] ?? slug;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 mb-6 hover:text-brand-700 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>
      <h1 className="font-display text-3xl font-extrabold text-[#0f1a14] mb-2">
        Book {serviceName}
      </h1>
      <p className="text-slate-500 max-w-md">
        This is a placeholder booking page for <span className="font-semibold">/services/{slug}</span>. Swap this component for the real booking flow when it's ready.
      </p>
    </div>
  );
}