import { Phone, Mail, MapPin, ShieldCheck, CreditCard, Headset } from 'lucide-react';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import logo from '../assets/images/fixzzy-logo.png';
import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Fixzzy', href: '#why-fixzzy' },
  { label: 'Become a Partner', href: '#become-a-pro' },
  { label: 'Contact Us', href: '#contact' },
];

const CUSTOMER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Emergency Services", href: "#emergency" },
  { label: "How Fixzzy Works", href: "#business-model" },
  { label: "FAQs", href: "#faq" },

  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Refund & Cancellation Policy", to: "/refund-cancellation-policy" },
];

const PARTNER_LINKS = [
  { label: 'Become a Partner', href: '#become-a-pro' },
  { label: 'Partner Benefits', href: '#' },
  { label: 'Partner Terms', href: '#' },
  { label: 'Safety Guidelines', href: '#' },
  { label: 'Partner Support', href: '#' },
  { label: 'Partner Account Deletion', to: '/partner-account-deletion' },
];
// Not yet live — connect real profile URLs when accounts are ready.
const SOCIALS = [
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
  { Icon: YoutubeIcon, label: 'YouTube' },
  { Icon: TwitterIcon, label: 'X' },
];

const TRUST_STRIP = [
  { label: 'Verified Professionals', icon: ShieldCheck },
  { label: 'Secure Payments', icon: CreditCard },
  { label: 'Customer Support', icon: Headset },
];

const scrollToId = (id) => (e) => {
  if (id === '#') return;
  e.preventDefault();
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-900 text-brand-100 pt-16 pb-8">
      <div className="container-px mx-auto max-w-[1440px]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Fixzzy" className="h-9 w-auto object-contain" />
              <span className="font-display font-extrabold text-xl">
                <span className="text-white">Fix</span>
                <span className="text-emerald-400">zzy</span>
              </span>
            </div>
            <p className="text-sm text-brand-200 mt-4 leading-relaxed">We Fix Your Home.</p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-disabled="true"
                  title={`${label} — coming soon`}
                  onClick={(e) => e.preventDefault()}
                  className="grid place-items-center w-9 h-9 rounded-full bg-white/5 opacity-50 cursor-not-allowed transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={QUICK_LINKS} />

          <FooterCol title="For Customers" items={CUSTOMER_LINKS} />

          <FooterCol title="For Partners" items={PARTNER_LINKS} />

          <div>
            <p className="text-white font-display font-bold text-sm mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-brand-200">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 6281332854</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /> support@fixzzy.in</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Nandyal, Andhra Pradesh, India</li>
            </ul>
            <div className="flex gap-2 mt-5">
              <button onClick={scrollToId('#app-download')} className="text-[10px] bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                Google Play
              </button>
              <button onClick={scrollToId('#app-download')} className="text-[10px] bg-white/5 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                App Store
              </button>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 pt-6">
          {TRUST_STRIP.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5 text-xs text-brand-200">
              <item.icon className="w-3.5 h-3.5 text-emerald-400" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-brand-300">
          <p>© {new Date().getFullYear()} Fixzzy Technologies. All rights reserved.</p>
          <p>Building Happy Homes, One Service at a Time.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="text-white font-display font-bold text-sm mb-4">
        {title}
      </p>

      <ul className="space-y-3 text-sm text-brand-200">
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                onClick={scrollToId(item.href)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
