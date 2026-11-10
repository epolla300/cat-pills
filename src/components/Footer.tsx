import React from 'react';
import { ShieldAlert, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDashboard: () => void;
  onScrollToForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDashboard, onScrollToForm }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 sm:py-16 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-stone-800 pb-10">
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">
              Cat Pills
            </span>
            <p className="text-stone-400 text-xs mt-1 max-w-md">
              Gentle digestive comfort & daily peace of mind for cats and their people. Currently in active demand validation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-stone-300">
            <a href="#the-challenge" className="hover:text-white transition-colors">Dietary Concerns</a>
            <a href="#explainer-video" className="hover:text-white transition-colors">Explainer Video</a>
            <a href="#specifications" className="hover:text-white transition-colors">Proposed Specs</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Pilot Reviews</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <button
              onClick={onOpenDashboard}
              className="text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer"
            >
              Founder Analytics
            </button>
          </div>
        </div>

        {/* Legal & Transparent Demand Testing Notice */}
        <div className="space-y-4 text-xs text-stone-500 leading-relaxed">
          <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-stone-950 border border-stone-800/80">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-stone-400">
              <strong className="text-stone-200">Legal Demand Test Disclaimer:</strong> This web page is published strictly for consumer interest research, market viability assessment, and veterinary product development feedback. Cat Pills is not currently available for purchase or shipment. No representations of finished commercial goods are made. Statements on this page regarding ingredients and preliminary pilot models have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any feline disease.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© {new Date().getFullYear()} Cat Pills Research Project. All rights reserved.</p>
            <p className="flex items-center gap-1 text-stone-400">
              <span>Made with care for cats & the humans who love them</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
