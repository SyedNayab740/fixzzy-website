
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import logo from '../assets/images/fixzzy-logo.png';

export default function AppDownload() {
  return (
    <section id="app-download" className="pb-10">
      <div className="container-px mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-brand-800 grid lg:grid-cols-[auto_1fr_auto] items-center gap-6 px-8 sm:px-12 py-8"
        >
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Fixzzy"
              className="h-8 w-auto object-contain"
              width="128"
              height="32"
              loading="lazy"
              decoding="async"
            />
            <span className="font-display font-extrabold text-lg">
              <span className="text-white">Fix</span>
              <span className="text-emerald-400">zzy</span>
            </span>
          </div>

          <div>
            <p className="font-display font-bold text-white text-lg sm:text-xl">
              Download the Fixzzy App
            </p>
            <p className="text-brand-100 text-sm mt-0.5">
              Book trusted home services in minutes with Fixzzy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.fixzzy.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/30 border border-white/15 rounded-xl px-4 py-2 hover:bg-black/40 transition-colors"
            >
              <Play className="w-5 h-5 text-white" />
              <span className="text-left leading-tight">
                <span className="block text-[9px] text-brand-100">
                  GET IT ON
                </span>
                <span className="block text-xs font-semibold text-white">
                  Google Play
                </span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
