import { useEffect, useState } from 'react';
import { Download, Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/images/fixzzy-logo.png';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Emergency', href: '#emergency' },
  { label: 'Why Fixzzy', href: '#why-fixzzy' },
  { label: 'Become a Pro', href: '#become-a-pro' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const APP_DOWNLOAD_ID = 'app-download';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToAppDownload = (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(APP_DOWNLOAD_ID);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-700/85 backdrop-blur-xl shadow-[0_8px_30px_-8px_rgba(11,47,31,0.45)] border-b border-white/5'
          : 'bg-brand-700 border-b border-transparent'
      }`}
    >
      <div className="container-px mx-auto max-w-[1440px] flex items-center justify-between h-16 lg:h-[76px]">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5 shrink-0">
          <img
            src={logo}
            alt="Fixzzy"
            className="h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-xl lg:text-[22px] tracking-tight">
              <span className="text-white">Fix</span>
              <span className="text-emerald-400">zzy</span>
            </span>
            <span className="text-[9px] lg:text-[10px] text-brand-100/90 tracking-wide">
              We Fix Your Home.
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-brand-50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-3.5 py-2 rounded-full transition-colors duration-200 hover:text-white hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={scrollToAppDownload}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/40 active:scale-[0.97] transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download App
          </button>
          <button
            onClick={scrollToAppDownload}
            className="group flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-brand-700 text-sm font-semibold shadow-sm hover:shadow-md hover:bg-brand-50 active:scale-[0.97] transition-all duration-200"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 -mr-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-brand-700/98 backdrop-blur-xl border-t border-white/10 transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-brand-50 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <button
              onClick={scrollToAppDownload}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download App
            </button>
            <button
              onClick={scrollToAppDownload}
              className="px-4 py-2.5 rounded-full bg-white text-brand-700 text-sm font-semibold hover:bg-brand-50 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}