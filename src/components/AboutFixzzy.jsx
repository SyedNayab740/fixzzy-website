import { motion } from 'framer-motion';
import { User, Search, UserCheck, CheckCircle2, CreditCard, Landmark, ArrowRight, Info } from 'lucide-react';

const ABOUT_POINTS = [
  'Fixzzy is a technology platform that connects customers with verified local home service professionals including electricians, plumbers, carpenters, painters, AC technicians, cleaners, and more.',
  'Customers can easily book trusted professionals through the Fixzzy app, while service partners receive verified nearby job requests and manage their bookings.',
  'Fixzzy is not a wallet, money transfer, lending, investment, or stored-value service. Payments are collected only for completed service bookings.',
];

const BUSINESS_FLOW = [
  { label: 'Customer', icon: User },
  { label: 'Books a Service', icon: Search },
  { label: 'Fixzzy Assigns Verified Professional', icon: UserCheck },
  { label: 'Service Completed', icon: CheckCircle2 },
  { label: 'Customer Pays for Service', icon: CreditCard },
  { label: 'Professional Receives Settlement', icon: Landmark },
];

export default function AboutFixzzy() {
  return (
    <>
      {/* About Fixzzy */}
      <section id="about" className="py-20 bg-brand-50/40">
        <div className="container-px mx-auto max-w-[1440px]">
          <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">About Fixzzy</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-2 mb-6">
            A home services marketplace
          </h2>
          <div className="max-w-3xl space-y-4">
            {ABOUT_POINTS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-slate-600 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* How Fixzzy Works — business model */}
      <section id="business-model" className="py-20 bg-white">
        <div className="container-px mx-auto max-w-[1440px]">
          <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">How Fixzzy Works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-2 mb-14">
            A simple, transparent service marketplace
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3">
            {BUSINESS_FLOW.map((step, i) => (
              <div key={step.label} className="flex flex-col lg:flex-row items-center gap-6 lg:gap-3 w-full lg:w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-3 w-full sm:w-40"
                >
                  <span className="grid place-items-center w-12 h-12 rounded-full bg-white border-2 border-brand-500 text-brand-600 shadow-sm shrink-0">
                    <step.icon className="w-5 h-5" />
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#0f1a14] leading-snug">{step.label}</p>
                </motion.div>

                {i < BUSINESS_FLOW.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-brand-300 rotate-90 lg:rotate-0 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Disclaimer */}
      <section id="disclaimer" className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="container-px mx-auto max-w-[1440px]">
          <div className="flex flex-col sm:flex-row items-start gap-4 max-w-4xl">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-white text-brand-600 shadow-sm shrink-0">
              <Info className="w-5 h-5" />
            </span>
            <div>
              <p className="font-display font-bold text-sm text-[#0f1a14] mb-1.5">Business Disclaimer</p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Fixzzy is a technology platform that connects customers with independent home service professionals. Fixzzy facilitates booking and payment for home services only. Fixzzy does not provide digital wallet services, money transfer services, lending, investment products, or stored-value accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}