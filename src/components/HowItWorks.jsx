import { motion } from 'framer-motion';
import { MousePointerClick, CalendarClock, UserCheck, Radar, ClipboardCheck, Star } from 'lucide-react';

const STEPS = [
  { title: 'Choose Service', desc: 'Pick what you need', icon: MousePointerClick },
  { title: 'Select Time', desc: 'Choose date & slot', icon: CalendarClock },
  { title: 'We Assign Pro', desc: 'Best pro match found', icon: UserCheck },
  { title: 'Track Live', desc: 'See pro on the way', icon: Radar },
  { title: 'Work Completed', desc: 'Pay after satisfaction', icon: ClipboardCheck },
  { title: 'Rate & Review', desc: 'Help others decide', icon: Star },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-px mx-auto max-w-[1440px]">
        <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">How It Works</span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-2 mb-14">
          Simple steps, seamless experience
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-slate-200" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-brand-500"
          />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <span className="grid place-items-center w-12 h-12 rounded-full bg-white border-2 border-brand-500 text-brand-600 relative z-10 shadow-sm">
                  <step.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#0f1a14]">
                    <span className="text-brand-500">{i + 1}.</span> {step.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
