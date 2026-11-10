import React from 'react';
import { AlertCircle, Sliders, Sparkles } from 'lucide-react';

interface PreLaunchBannerProps {
  onOpenDashboard: () => void;
  highlightPlaceholders: boolean;
  onToggleHighlightPlaceholders: () => void;
  placeholderCount: number;
  totalBackers: number;
}

export const PreLaunchBanner: React.FC<PreLaunchBannerProps> = ({
  onOpenDashboard,
  highlightPlaceholders,
  onToggleHighlightPlaceholders,
  placeholderCount,
  totalBackers,
}) => {
  return (
    <div className="bg-amber-950 text-amber-100 text-xs sm:text-sm border-b border-amber-900/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Core Demand Validation Disclaimer */}
        <div className="flex items-center gap-2.5 text-center md:text-left">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 hidden sm:inline" />
          <p className="font-medium text-amber-200">
            <span className="font-bold text-amber-400 uppercase tracking-wider mr-1.5">
              Concept Phase · Demand Test:
            </span>
            Cat Pills is currently in active research & demand validation. This product does not exist yet for commercial sale.
          </p>
        </div>

        {/* Creator Tools & Live Backer Counter */}
        <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
          <div className="text-amber-300 font-mono text-xs tabular-nums bg-amber-900/60 px-2.5 py-1 rounded border border-amber-800">
            <span className="font-semibold text-white">{totalBackers}</span> / 1,000 backer goal
          </div>

          <button
            onClick={onToggleHighlightPlaceholders}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
              highlightPlaceholders
                ? 'bg-amber-400 text-amber-950 font-semibold shadow-sm'
                : 'bg-amber-900/70 hover:bg-amber-900 text-amber-200 border border-amber-800/80'
            }`}
            title="Highlight all items labeled [PLACEHOLDER] for easy editing"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{highlightPlaceholders ? 'Placeholders Highlighted' : `Highlight [PLACEHOLDER] (${placeholderCount})`}</span>
          </button>

          <button
            onClick={onOpenDashboard}
            className="px-2.5 py-1 text-xs font-medium bg-emerald-800 hover:bg-emerald-700 text-emerald-100 rounded transition-colors flex items-center gap-1.5 cursor-pointer border border-emerald-700"
            title="View collected interest emails, survey stats, and export CSV"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Demand Analytics</span>
          </button>
        </div>
      </div>
    </div>
  );
};
