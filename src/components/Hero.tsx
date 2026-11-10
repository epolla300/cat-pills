import React from 'react';
import { ArrowDown, CheckCircle2, Play, ShieldAlert, Sparkles } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface HeroProps {
  onScrollToForm: () => void;
  onScrollToVideo: () => void;
  highlightPlaceholders: boolean;
  totalBackers: number;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToForm,
  onScrollToVideo,
  highlightPlaceholders,
  totalBackers,
}) => {
  const goal = 1000;
  const progressPercent = Math.min(100, Math.round((totalBackers / goal) * 100));

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200 bg-linear-to-b from-stone-50 via-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transparent Validation Stage Banner */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
            <p className="text-stone-700 text-xs sm:text-sm">
              <strong className="font-semibold text-stone-900">Demand Validation Pilot:</strong>{' '}
              This formulation is currently in veterinary research. Help us determine if cat parents want this before we start manufacturing.
            </p>
          </div>
          <span className="text-xs font-mono font-medium text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded whitespace-nowrap self-start sm:self-auto">
            Stage 01: Concept Viability
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
              <span>Veterinary Concept</span>
              <span aria-hidden="true">·</span>
              <span>Feline Gastrointestinal Care</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">Pre-Production Interest</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Happy cats. Calm tummies.{' '}
              <span className="text-emerald-800 block mt-1">Total peace of mind for you.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              No more waking up to mysterious vomiting, watching your cat choke on agonizing hairballs, or dreading stressful pill battles.
              We are formulating <strong className="text-stone-900 font-semibold">Cat Pills</strong>—a gentle, salmon-infused daily micro-chew engineered to restore digestive harmony and make cat parents feel happy and confident every single day.
            </p>

            {/* Demand Progress Bar */}
            <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs max-w-xl space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                <span className="text-stone-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  Pilot Production Threshold
                </span>
                <span className="font-mono text-emerald-800 font-semibold tabular-nums">
                  {totalBackers} / {goal} backer goal ({progressPercent}%)
                </span>
              </div>
              <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-700 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs text-stone-500 leading-normal">
                When we hit 1,000 interested owners, we will commission <PlaceholderBadge label="Lab Facility: GMP-certified Oregon laboratory" isHighlighted={highlightPlaceholders} /> for Batch 01. Free to reserve early access.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToForm}
                className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm sm:text-base rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Express Interest for Batch #1</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onScrollToVideo}
                className="px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-sm sm:text-base rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-stone-200"
              >
                <Play className="w-4 h-4 text-emerald-700 fill-emerald-700" />
                <span>Watch 90s Concept Explainer</span>
              </button>
            </div>

            {/* Adjacent Trust & Assurance Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-200 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>No payment required today</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span><PlaceholderBadge label="Backer Discount: 40% Off Batch 01" isHighlighted={highlightPlaceholders} /></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Free palatability sample pouch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
              <img
                src="/src/assets/images/hero_cat_wellness_1794330534341.jpg"
                alt="Serene tabby cat resting happily in warm sunlight after healthy digestion"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-stone-900/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-xs border border-white/40 shadow-sm text-stone-800 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-900 flex items-center gap-1">
                    Concept Target Outcome
                  </span>
                  <PlaceholderBadge label="Formulation Code: CP-01G" isHighlighted={highlightPlaceholders} />
                </div>
                <p className="text-xs text-stone-600">
                  Formulated to alleviate post-meal retching and digestive sensitivity, so you can leave home without anxious worry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
