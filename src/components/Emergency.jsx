import { motion } from 'framer-motion';
import { ArrowRight, Zap, Wrench, Wind, Radio, ShieldCheck, MapPin, Bolt } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import emergencyBanner from '../assets/images/emergency-banner.png';

const BADGES = [
  { label: 'Electrician', icon: Zap, tint: 'text-accent-yellow' },
  { label: 'Plumber', icon: Wrench, tint: 'text-accent-blue' },
  { label: 'AC Expert', icon: Wind, tint: 'text-sky-500' },
];

const EMERGENCY_LIST = [
  { label: 'Electrician', tag: 'Emergency' },
  { label: 'Plumber', tag: 'Emergency' },
  { label: 'AC Repair', tag: 'Emergency' },
];

const TRUST_ROW = [
  { label: 'Fast Response', icon: Bolt },
  { label: 'Verified Professionals', icon: ShieldCheck },
  { label: 'Live Status Updates', icon: MapPin },
];

const scrollToAppDownload = (e) => {
  e.preventDefault();
  const el = document.getElementById('app-download');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Emergency() {
  return (
    <section id="emergency" className="py-10">
      <div className="container-px mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-50 via-rose-50 to-orange-50 grid lg:grid-cols-[0.95fr_1.45fr_auto] items-center gap-10 px-8 sm:px-12 py-10 lg:py-12"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-accent-red text-xs font-bold tracking-widest uppercase">
              <Radio className="w-3.5 h-3.5" /> Quick Response · 24/7 Support
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-3">Emergency Service</h2>
            <p className="text-slate-600 mt-2 max-w-md">
              Get priority assistance for urgent electrical, plumbing, and AC issues through the Fixzzy App.
            </p>

            <button
              onClick={scrollToAppDownload}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-red text-white font-semibold shadow-lg shadow-red-500/25 hover:bg-red-600 hover:shadow-xl active:scale-[0.97] transition-all duration-200"
            >
              Get Emergency Help <ArrowRight className="w-4 h-4" />
            </button>

            {/* Trust row */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {TRUST_ROW.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <item.icon className="w-3.5 h-3.5 text-accent-red" />
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              {BADGES.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center justify-center gap-1.5 bg-white rounded-xl px-4 py-3 shadow-sm w-24 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <b.icon className={`w-5 h-5 ${b.tint}`} />
                  <span className="text-[11px] font-medium text-slate-600 text-center leading-tight">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block relative rounded-[1.5rem] overflow-hidden shadow-[0_24px_60px_-15px_rgba(15,23,42,0.3)]"
          >
            <img
              src={emergencyBanner}
              alt="Fixzzy emergency technician with service van"
              className="w-full h-[380px] object-cover object-top select-none"
              draggable={false}
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="hidden lg:block"
          >
            <PhoneFrame className="scale-90 origin-bottom">
              <div className="h-full flex flex-col bg-white">
                <div className="px-4 pt-1 pb-3 flex items-center gap-2 text-[11px] font-semibold text-[#0f1a14]">
                  <span>← Emergency</span>
                </div>
                <div className="mx-4 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 p-4 text-white">
                  <p className="font-display font-bold text-sm">Emergency Services</p>
                  <p className="text-[10px] text-red-100 mt-1">We're available for urgent electrical, plumbing and AC issues.</p>
                  <div className="mt-3 bg-white/15 rounded-lg px-3 py-2 text-[10px] font-semibold">
                    We respond in 30–45 minutes
                  </div>
                </div>

                <div className="px-4 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0f1a14]">My Emergency Services</span>
                  <span className="text-[10px] text-brand-600 font-semibold">View All</span>
                </div>

                <div className="px-4 mt-2 flex flex-col gap-2">
                  {EMERGENCY_LIST.map((e) => (
                    <div key={e.label} className="flex items-center justify-between border border-slate-100 rounded-xl px-3 py-2.5">
                      <span className="text-[11px] font-medium text-[#0f1a14]">{e.label}</span>
                      <span className="text-[9px] font-bold text-accent-red bg-red-50 px-2 py-1 rounded-full">{e.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneFrame>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}