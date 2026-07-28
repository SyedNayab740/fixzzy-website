import { motion } from 'framer-motion';
import { ArrowRight, Bell, ShieldCheck, Star, Home, User, BarChart3, Clock, Award, BadgeCheck, Landmark, CalendarClock, MapPin } from 'lucide-react';
import PhoneFrame from './PhoneFrame';

const FEATURES = [
  {
    title: 'More Local Jobs',
    desc: 'Receive verified job requests from customers near your location.',
    icon: MapPin,
  },
  {
    title: 'Flexible Working Hours',
    desc: "Choose your own working hours and accept jobs when you're available.",
    icon: Clock,
  },
  {
    title: 'Verified Customers',
    desc: 'Every job request comes from a verified, trusted customer.',
    icon: ShieldCheck,
  },
  {
    title: 'Rating & Reviews',
    desc: 'Build your reputation and receive more booking opportunities.',
    icon: Star,
  },
];

const SIDE_BENEFITS = [
  { title: 'Real-Time Job Alerts', desc: 'Never miss a service nearby', icon: Bell },
  { title: 'Work Schedule', desc: 'Plan your day, your way', icon: CalendarClock },
  { title: 'Verified Customers Only', desc: 'Safe & trusted bookings', icon: ShieldCheck },
  { title: 'Weekly Bank Settlement', desc: 'Straight to your account', icon: Landmark },
];

const TRUST_STRIP = [
  { label: 'No Joining Fee', icon: BadgeCheck },
  { label: 'Verified Job Requests', icon: ShieldCheck },
  { label: 'Weekly Bank Settlement', icon: Award },
];

const TODAYS_JOBS = [
  { service: 'AC Repair', time: '11:00 AM', distance: '2.4 km', status: 'Accepted' },
  { service: 'Fan Installation', time: '2:30 PM', distance: '1.1 km', status: 'Pending' },
  { service: 'Pipe Leak Fix', time: '5:00 PM', distance: '3.8 km', status: 'Accepted' },
];

const scrollToAppDownload = (e) => {
  e.preventDefault();
  const el = document.getElementById('app-download');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function SettlementSummary() {
  return (
    <div className="mt-4 bg-slate-50 rounded-xl p-3 text-[10px]">
      <p className="font-semibold text-slate-500 mb-2">This Month</p>
      <div className="flex justify-between py-1"><span className="text-slate-500">Completed Jobs</span><span className="font-semibold text-[#0f1a14]">32</span></div>
      <div className="flex justify-between py-1"><span className="text-slate-500">Total Earnings</span><span className="font-semibold text-[#0f1a14]">₹12,500</span></div>
      <div className="flex justify-between py-1"><span className="text-slate-500">Service Fee (10%)</span><span className="font-semibold text-accent-red">-₹1,250</span></div>
      <div className="flex justify-between py-1 border-b border-slate-200 pb-2"><span className="text-slate-500">Other Deductions</span><span className="font-semibold text-accent-red">-₹1,000</span></div>
      <div className="flex justify-between pt-2"><span className="font-bold text-[#0f1a14]">Net Settlement</span><span className="font-bold text-brand-600">₹8,250</span></div>
    </div>
  );
}

export default function PartnerSection() {
  return (
    <section id="become-a-pro" className="py-20 bg-brand-50/40">
      <div className="container-px mx-auto max-w-[1440px] grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-600 text-xs font-bold tracking-widest uppercase">Become a Fixzzy Pro</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0f1a14] mt-2 leading-tight">
            Become a Verified Fixzzy Professional
          </h2>
          <p className="text-slate-500 mt-3 max-w-md leading-relaxed">
            Receive verified local jobs, manage bookings, track your schedule, and grow your reputation—all from the Fixzzy Worker App.
          </p>

          <ul className="mt-7 space-y-5">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3.5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-white text-brand-600 shadow-sm shrink-0">
                  <feature.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-sm text-[#0f1a14]">{feature.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{feature.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button
              onClick={scrollToAppDownload}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-600 text-white font-semibold shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition-colors"
            >
              Download Worker App <ArrowRight className="w-4 h-4" />
            </button>
           <div className="mt-3">
  <a
    href="#app-download"
    onClick={scrollToAppDownload}
    className="text-sm font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors"
  >
    Already interested? Become a Partner
  </a>
</div>
          </div>

          {/* Trust strip */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {TRUST_STRIP.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-1.5 bg-white rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
              >
                <item.icon className="w-3.5 h-3.5 text-brand-600" />
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Phones */}
        <div className="flex justify-center items-end gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="scale-[0.95] sm:scale-[1.12] -translate-y-4"
          >
            <PhoneFrame>
              <div className="h-full flex flex-col bg-white px-4 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#0f1a14]">Good Evening Syed,  👋</span>
                  <span className="w-5 h-5 rounded-full bg-slate-100" />
                </div>
                <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white relative overflow-hidden">
                  <Bell className="absolute -right-3 -bottom-3 w-20 h-20 text-white/10" />
                  <p className="text-[10px] text-brand-100">You have</p>
                  <p className="font-display font-extrabold text-2xl mt-1">3 New Job Requests</p>
                  <p className="text-[10px] text-brand-100 mt-0.5">Nearby · Verified Customers</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#0f1a14]">Today's Schedule</span>
                  <span className="text-[10px] text-brand-600 font-semibold">View All</span>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  {TODAYS_JOBS.map((job) => (
                    <div key={job.service} className="flex items-center justify-between border border-slate-100 rounded-xl px-3 py-2.5">
                      <div>
                        <p className="text-[11px] font-semibold text-[#0f1a14]">{job.service}</p>
                        <p className="text-[9px] text-slate-400 mt-0.5">{job.time} · {job.distance}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${job.status === 'Accepted' ? 'text-brand-600 bg-brand-50' : 'text-accent-yellow bg-amber-50'}`}>
                        {job.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-slate-100 flex justify-around py-2.5 text-[9px] text-slate-400">
                  <span className="flex flex-col items-center gap-0.5 text-brand-600 font-semibold"><Home className="w-4 h-4" /> Home</span>
                  <span className="flex flex-col items-center gap-0.5"><BarChart3 className="w-4 h-4" /> Jobs</span>
                  <span className="flex flex-col items-center gap-0.5"><User className="w-4 h-4" /> Profile</span>
                </div>
              </div>
            </PhoneFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -8 }}
            className="hidden sm:block scale-[1.12]"
          >
            <PhoneFrame>
              <div className="h-full flex flex-col bg-white px-4 pt-1">
                <p className="text-[11px] font-semibold text-[#0f1a14]">← Earnings & Settlement</p>
                <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white">
                  <p className="text-[10px] text-brand-100">This Week's Settlement</p>
                  <p className="font-display font-extrabold text-2xl mt-1">₹8,250</p>
                  <p className="text-[9px] text-brand-100 mt-1 leading-tight">Auto-settled every Monday to your bank account</p>
                </div>
                <SettlementSummary />
                <button className="mt-4 w-full text-center text-[11px] font-semibold text-white bg-brand-600 rounded-full py-2.5 flex items-center justify-center gap-1">
                  <Landmark className="w-3.5 h-3.5" /> View Settlement History
                </button>
              </div>
            </PhoneFrame>
          </motion.div>
        </div>

        {/* Right benefits */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-1 gap-6"
        >
          {SIDE_BENEFITS.map((b) => (
            <motion.div
              key={b.title}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3.5 p-1 rounded-2xl transition-all duration-200"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white text-brand-600 shadow-sm shrink-0">
                <b.icon className="w-5 h-5" />
              </span>
              <div>
                <p className="font-semibold text-sm text-[#0f1a14]">{b.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}