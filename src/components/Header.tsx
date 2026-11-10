import React from 'react';

interface HeaderProps {
  onScrollToForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToForm }) => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-9 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          Cat Pills
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#the-challenge"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Dietary Concerns
          </a>
          <a
            href="#explainer-video"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Explainer Video
          </a>
          <a
            href="#specifications"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Proposed Specs
          </a>
          <a
            href="#testimonials"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Pilot Feedback
          </a>
          <a
            href="#faq"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onScrollToForm}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Join Early Interest List
          </button>
        </div>
      </div>
    </header>
  );
};
