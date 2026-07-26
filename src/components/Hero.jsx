import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Home, Wrench, Zap, Paintbrush, Hammer, Search, ChevronRight } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import Counter from './Counter';
import heroWorker from '../assets/images/hero-worker.png';

const TRUST_ROW = [
  'ID & Aadhaar Verified',
  'On-time or we make it right',
  'Trusted by 10,000+ homes',
];

const STATS = [
  { value: 10000, suffix: '+', label: 'Happy Customers', icon: Home, tint: 'bg-brand-50 text-brand-600' },
  { value: 500, suffix: '+', label: 'Verified Professionals', icon: Wrench, tint: 'bg-amber-50 text-accent-yellow' },
  { value: 25000, suffix: '+', label: 'Services Completed', icon: CheckCircle2, tint: 'bg-blue-50 text-accent-blue' },
];

const APP_SERVICES = [
  { label: 'Electrician', desc: 'Wiring, lighting, repairs', icon: Zap, tint: 'text-accent-yellow bg-amber-50' },
  { label: 'Plumber', desc: 'Leaks, fittings, plumber', icon: Wrench, tint: 'text-accent-blue bg-blue-50' },
  { label: 'Painter', desc: 'Interior & exterior painting', icon: Paintbrush, tint: 'text-accent-purple bg-purple-50' },
  { label: 'Carpentry', desc: 'Woodwork, furniture', icon: Hammer, tint: 'text-amber-700 bg-orange-50' },
];

const scrollToId = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-14 pb-10 lg:pt-20">
      <div className="container-px mx-auto max-w-[1440px] grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-brand-600 text-xs font-semibold tracking-wide uppercase mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Background-verified professionals
          </span>

          <h1 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-[#0f1a14]">
            We Fix <span className="text-brand-600">Your Home.</span>
          </h1>

          <p className="mt-5 text-lg text-slate-500 max-w-lg leading-relaxed">
            Find verified electricians, plumbers, AC technicians, cleaners and more through the Fixzzy app. Fast booking, transparent pricing, and trusted professionals—all from your phone.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_ROW.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={scrollToId('app-download')}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 text-white font-semibold shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl transition-all"
            >
              Download App
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToId('services')}
              className="px-7 py-3.5 rounded-full border-2 border-brand-100 text-brand-700 font-semibold hover:border-brand-300 hover:bg-brand-50 transition-colors"
            >
              Explore Services
            </button>
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-[0_10px_40px_-12px_rgba(15,64,42,0.15)] border border-slate-100 p-5 max-w-xl">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 ${stat.tint}`}>
                  <stat.icon className="w-5 h-5" />
                </span>
                <div className="leading-tight">
                  <div className="font-display font-extrabold text-lg text-[#0f1a14]">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column: worker + phone */}
        <div className="relative h-[460px] sm:h-[560px] flex items-end justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100/60 to-transparent rounded-[3rem] blur-2xl"
          />

          {/* Worker: sits between text content and phone, ~40-50% visible alongside the phone */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
           className="absolute left-1/2 -translate-x-1/2 lg:left-[26%] lg:-translate-x-1/2 -bottom-6 sm:-bottom-8 lg:-bottom-10 z-10 w-[320px] sm:w-[420px] lg:w-[520px] xl:w-[560px] pointer-events-none"
          >
            <img
              src={heroWorker}
              alt="Fixzzy technician"
              className="w-full h-auto object-contain drop-shadow-2xl select-none"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="hidden sm:block absolute right-0 lg:-right-4 bottom-0 lg:bottom-4 z-10"
          >
            <PhoneFrame>
              <div className="h-full flex flex-col bg-white">
                <div className="px-4 pt-1 pb-3">
                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span className="font-medium">Nandyal, Andhra Pradesh</span>
                    <span className="w-5 h-5 rounded-full bg-slate-100" />
                  </div>
                  <div className="mt-2 flex items-center gap-2 bg-slate-100 rounded-full px-3 py-2">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px] text-slate-400">Search for services...</span>
                  </div>
                </div>

                <div className="mx-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white relative overflow-hidden">
                  <Zap className="absolute -right-3 -bottom-3 w-20 h-20 text-white/10" />
                  <p className="font-display font-bold text-sm">We Fix Your Home</p>
                  <p className="text-[10px] text-brand-100 mt-1 max-w-[140px]">Book trusted professionals for your home.</p>
                  <button className="mt-3 inline-flex items-center gap-1 bg-white text-brand-700 text-[10px] font-semibold px-3 py-1.5 rounded-full">
                    Book Now <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="px-4 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0f1a14]">Popular Services</span>
                  <span className="text-[10px] text-brand-600 font-semibold flex items-center gap-0.5">View All <ChevronRight className="w-3 h-3" /></span>
                </div>

                <div className="px-4 mt-2 grid grid-cols-2 gap-2.5">
                  {APP_SERVICES.map((s) => (
                    <div key={s.label} className="border border-slate-100 rounded-xl p-2.5">
                      <span className={`grid place-items-center w-7 h-7 rounded-lg mb-1.5 ${s.tint}`}>
                        <s.icon className="w-3.5 h-3.5" />
                      </span>
                      <p className="text-[11px] font-semibold text-[#0f1a14]">{s.label}</p>
                      <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-slate-100 flex justify-around py-2.5 text-[9px] text-slate-400">
                  <span className="flex flex-col items-center gap-0.5 text-brand-600 font-semibold">
                    <Home className="w-4 h-4" /> Home
                  </span>
                  <span className="flex flex-col items-center gap-0.5">
                    <CheckCircle2 className="w-4 h-4" /> Bookings
                  </span>
                  <span className="flex flex-col items-center gap-0.5">
                    <Wrench className="w-4 h-4" /> Payments
                  </span>
                </div>
              </div>
            </PhoneFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}