import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Zap, Wrench, Wind, Sparkles, Paintbrush, Hammer, Bug, Droplet,
  ArrowRight, ChevronRight, X, ShieldCheck, BadgeIndianRupee, RadioTower, Download,
} from 'lucide-react';

const SERVICES = [
  {
    name: 'Electrician',
    desc: 'Switches, wiring, lights & more',
    icon: Zap,
    tint: 'bg-amber-50 text-accent-yellow',
    included: [
      'Switch & socket repair or replacement',
      'Wiring inspection and fixes',
      'Light & fan installation',
      'MCB and fuse troubleshooting',
      'Minor short-circuit diagnostics',
    ],
  },
  {
    name: 'Plumber',
    desc: 'Tap repair, leakage, fittings & more',
    icon: Wrench,
    tint: 'bg-blue-50 text-accent-blue',
    included: [
      'Tap and faucet repair',
      'Leak detection and fixing',
      'Pipe fitting and replacement',
      'Bathroom and kitchen fittings',
      'Drainage cleaning',
    ],
  },
  {
    name: 'AC Repair',
    desc: 'Service, gas refilling, repair & more',
    icon: Wind,
    tint: 'bg-sky-50 text-sky-500',
    included: [
      'General AC servicing',
      'Gas refilling',
      'Cooling issue diagnostics',
      'Filter cleaning',
      'Installation & uninstallation',
    ],
  },
  {
    name: 'Cleaning',
    desc: 'Home, kitchen, sofa, bathroom cleaning',
    icon: Sparkles,
    tint: 'bg-purple-50 text-accent-purple',
    included: [
      'Full home deep cleaning',
      'Kitchen degreasing',
      'Sofa & upholstery cleaning',
      'Bathroom sanitization',
      'Window and balcony cleaning',
    ],
  },
  {
    name: 'Painting',
    desc: 'Interior, exterior, wall painting & more',
    icon: Paintbrush,
    tint: 'bg-orange-50 text-orange-500',
    included: [
      'Interior wall painting',
      'Exterior weatherproof painting',
      'Wall putty and surface prep',
      'Texture and accent walls',
      'Touch-up and finishing',
    ],
  },
  {
    name: 'Carpentry',
    desc: 'Furniture, doors, windows & more',
    icon: Hammer,
    tint: 'bg-emerald-50 text-emerald-600',
    included: [
      'Furniture repair and assembly',
      'Door and window fixing',
      'Hinge, lock & handle replacement',
      'Custom woodwork',
      'Polishing and finishing',
    ],
  },
  {
    name: 'Pest Control',
    desc: 'Safe, effective pest control',
    icon: Bug,
    tint: 'bg-lime-50 text-lime-600',
    included: [
      'General pest treatment',
      'Cockroach & ant control',
      'Termite treatment',
      'Rodent control',
      'Safe, family-friendly chemicals',
    ],
  },
  {
    name: 'Water Tank',
    desc: 'Sanitization, repair & tools',
    icon: Droplet,
    tint: 'bg-blue-50 text-sky-500',
    included: [
      'Tank cleaning and sanitization',
      'Leak repair',
      'Overhead & underground tanks',
      'Motor and pipeline checks',
      'Water quality inspection',
    ],
  },
];

const WHY_FIXZZY = [
  { icon: ShieldCheck, text: 'Verified professionals' },
  { icon: BadgeIndianRupee, text: 'Transparent pricing' },
  { icon: RadioTower, text: 'Real-time booking updates in the app' },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    // Only lock scroll / bind escape when a service is actually open.
    if (!service) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-[#0f1a14]/50 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(15,64,42,0.35)] border border-slate-100"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid place-items-center w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-7 sm:p-8">
            <span className={`grid place-items-center w-14 h-14 rounded-2xl mb-4 ${service.tint}`}>
              <service.icon className="w-7 h-7" />
            </span>
            <h3 className="font-display text-2xl font-extrabold text-[#0f1a14]">{service.name}</h3>
            <p className="text-slate-500 mt-1.5 leading-relaxed">{service.desc}</p>

            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-widest uppercase text-brand-600">What's included</h4>
              <ul className="mt-3 space-y-2.5">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <ChevronRight className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-widest uppercase text-brand-600">Why choose Fixzzy</h4>
              <ul className="mt-3 space-y-2.5">
                {WHY_FIXZZY.map((item) => (
                  <li key={item.text} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="grid place-items-center w-7 h-7 rounded-lg bg-brand-50 text-brand-600 shrink-0">
                      <item.icon className="w-3.5 h-3.5" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-brand-50/70 border border-brand-100 p-5">
              <p className="font-display font-bold text-[#0f1a14]">Ready to book?</p>
              <p className="text-sm text-slate-500 mt-1">
                Book this service quickly and securely through the Fixzzy App.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClose();
                    scrollToId('app-download');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </button>
                <button
                  onClick={() => {
                    onClose();
                    scrollToId('services');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-brand-100 text-brand-700 text-sm font-semibold hover:bg-white transition-colors"
                >
                  Explore More Services
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const openService = (service) => setActiveService(service);
  const closeService = () => setActiveService(null);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">Our Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-2">All your home needs, covered</h2>
            <p className="text-slate-500 mt-2">Explore 30+ home services available through the Fixzzy app.</p>
          </div>
          <button
            onClick={() => scrollToId('app-download')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-brand-100 text-brand-700 text-sm font-semibold hover:bg-brand-50 transition-colors self-start sm:self-auto"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => openService(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openService(service);
              }}
              className="group rounded-2xl border border-slate-100 p-5 shadow-[0_4px_20px_-8px_rgba(15,64,42,0.08)] hover:shadow-[0_16px_40px_-12px_rgba(15,64,42,0.18)] hover:border-brand-100 transition-all bg-white cursor-pointer"
            >
              <span className={`grid place-items-center w-12 h-12 rounded-xl mb-4 ${service.tint} group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6" />
              </span>
              <h3 className="font-display font-bold text-[#0f1a14]">{service.name}</h3>
              <p className="text-xs text-emerald-600 font-medium mt-1">
                Lower prices than the local market.
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{service.desc}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openService(service);
                }}
                className="mt-4 inline-flex items-center gap-1 text-brand-600 text-xs font-bold group-hover:gap-2 transition-all"
              >
                View Details <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={closeService} />
    </section>
  );
}