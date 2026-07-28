import { motion } from 'framer-motion';
import { ShieldCheck, IdCard, Truck, DollarSign, CreditCard, Star, Headset } from 'lucide-react';

const TRUST_ITEMS = [
  { title: 'Background Verified', desc: 'Every professional is verified', icon: ShieldCheck },
  { title: 'Customer Support', desc: "We're here when you need us", icon: Headset },
  { title: 'Real-time Tracking', desc: 'See your pro on the way', icon: Truck },
  { title: 'Upfront Pricing', desc: 'No hidden charges', icon: DollarSign },
  { title: 'Secure Payments', desc: '100% safe payments', icon: CreditCard },
  { title: 'Rated by Customers', desc: 'Quality you can trust', icon: Star },
];

export default function TrustSection() {
  return (
    <section id="why-fixzzy" className="py-20 bg-white">
      <div className="container-px mx-auto max-w-[1440px]">
        <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">Why Choose Fixzzy</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-2 mb-10">
          Trust built into every service
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4, backgroundColor: 'rgba(238,250,243,1)' }}
              className="flex flex-col items-center text-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-7 transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full bg-white text-brand-600 shadow-sm">
                <item.icon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-display font-bold text-sm text-[#0f1a14]">{item.title}</p>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
