import React, { useState } from 'react';
import { Check, Copy, CheckCheck, Sparkles, Beaker, ShieldCheck, Tag } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface ProductSpecsProps {
  highlightPlaceholders: boolean;
  onScrollToForm: () => void;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({
  highlightPlaceholders,
  onScrollToForm,
}) => {
  const [copied, setCopied] = useState(false);

  const placeholderListText = `CAT PILLS - PROPOSED SPECIFICATIONS (ALL PLACEHOLDERS):
1. [PLACEHOLDER Spec: 6.2mm Micro-Chew Heart Tablet with Wild Salmon Hydrolysate]
2. [PLACEHOLDER Ingredient: 5 Billion CFU Cat-Specific Probiotic (L. acidophilus, B. bifidum)]
3. [PLACEHOLDER Ingredient: 250mg Slippery Elm Bark & Marshmallow Root Mucilage]
4. [PLACEHOLDER Ingredient: 120mg Wild Alaskan Salmon EPA/DHA Omega-3 Complex]
5. [PLACEHOLDER Ingredient: 50mg L-Theanine & Chamomile Digestive Stress Soother]
6. [PLACEHOLDER Quality Standard: cGMP US Facility, NASC Compliant, 3rd-Party Heavy Metal Tested]
7. [PLACEHOLDER Proposed Pricing: $28 MSRP ($19/mo Early Backer Cohort Rate)]
8. [PLACEHOLDER Pill Count: 60 mini-chewable heart tablets per recyclable amber bottle]`;

  const handleCopyPlaceholders = () => {
    navigator.clipboard.writeText(placeholderListText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="specifications" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            <Beaker className="w-3.5 h-3.5 text-emerald-700" />
            <span>Formulation Blueprint</span>
            <span aria-hidden="true">·</span>
            <span>Subject To Lab Iteration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Proposed Specifications & Active Bio-Matrix
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            All ingredients, dosages, dimensions, and prices below are marked with{' '}
            <strong className="text-amber-800">[PLACEHOLDER]</strong> tags.
            Your feedback in our interest survey directly shapes these exact parameters before lab synthesis.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleCopyPlaceholders}
              className="px-3 py-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg border border-stone-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Specs to Clipboard!' : 'Copy All Placeholder Specs'}</span>
            </button>
            <span className="text-xs text-stone-400">Useful for pasting into formulation briefs</span>
          </div>
        </div>

        {/* 2-Column Split: Image on Left, Specs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Product Mockup & Palatability Visuals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
              <img
                src="/src/assets/images/cat_pill_mockup_1794330534246.jpg"
                alt="Studio product mockup of Cat Pills bottle with salmon micro-tablets on travertine stone"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4 bg-white border-t border-stone-200">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-stone-900">Prototype Form Factor</span>
                  <PlaceholderBadge label="Bottle Spec: UV-Shielded Amber Glass (60 Count)" isHighlighted={highlightPlaceholders} />
                </div>
                <p className="text-xs text-stone-500">
                  Engineered to protect live probiotic strains from heat and humidity degradation on your kitchen counter.
                </p>
              </div>
            </div>

            {/* In-Home Feeding Still */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 p-4 flex items-center gap-4">
              <img
                src="/src/assets/images/cat_healthy_eating_1794330535935.jpg"
                alt="Cat happily eating food"
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="text-xs space-y-1">
                <span className="font-semibold text-stone-900 block">Seamless Palatability Target</span>
                <p className="text-stone-600">
                  Crushable between two spoons into wet food, or offered directly from hand like a treat.
                </p>
                <PlaceholderBadge label="Flavor Spec: Wild Pacific Salmon Hydrolysate" isHighlighted={highlightPlaceholders} />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Specification Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Spec 1: Physical Size */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Physical Profile
                </span>
                <PlaceholderBadge label="Dimension Spec: 6.2mm x 4.0mm Micro-Tablet" isHighlighted={highlightPlaceholders} />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Micro-Heart Dimension (60% Smaller Than Canine Tablets)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Most commercial pet pills are sized for 50-pound dogs and cut down. Our tablet is custom-molded specifically for feline esophagus anatomy to eliminate choking risk and esophageal pill burns.
              </p>
            </div>

            {/* Spec 2: Gastrointestinal Bio-Matrix */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Active Gut Shield
                </span>
                <PlaceholderBadge label="Ingredient Spec: 5B CFU Multi-Strain Probiotics" isHighlighted={highlightPlaceholders} />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Triple-Action Feline GI Support Matrix
              </h3>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-800">Slippery Elm & Marshmallow Mucilage:</strong>{' '}
                    <PlaceholderBadge label="Dosage Spec: 250mg" isHighlighted={highlightPlaceholders} /> — forms a protective film along the stomach wall to neutralize stomach acid reflux.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-800">Wild Alaskan Salmon EPA/DHA Omega Complex:</strong>{' '}
                    <PlaceholderBadge label="Dosage Spec: 120mg" isHighlighted={highlightPlaceholders} /> — soothes gut mucosal inflammation and lubricates hairball passage.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-stone-800">L-Theanine & Chamomile Extract:</strong>{' '}
                    <PlaceholderBadge label="Dosage Spec: 50mg" isHighlighted={highlightPlaceholders} /> — addresses the brain-gut axis to reduce stress-induced digestive spasms.
                  </span>
                </li>
              </ul>
            </div>

            {/* Spec 3: Manufacturing Standards */}
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Quality & Safety Blueprint
                </span>
                <PlaceholderBadge label="Quality Spec: USA cGMP & NASC Standard" isHighlighted={highlightPlaceholders} />
              </div>
              <h3 className="text-base font-bold text-stone-900">
                Human-Grade Clean Formulation Promise
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Zero corn, soy, wheat, artificial colorants, carrageenan, or titanium dioxide. Every proposed batch is third-party lab tested for heavy metals, salmonella, and active CFU viability.
              </p>
            </div>

            {/* Spec 4: Proposed Economics & Early Backer Pricing */}
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-700" />
                  Proposed Pricing Tiers
                </span>
                <PlaceholderBadge label="Pricing Spec: 40% VIP Launch Discount" isHighlighted={highlightPlaceholders} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-stone-900 font-mono">
                      <PlaceholderBadge label="Price: $19 / Month" isHighlighted={highlightPlaceholders} />
                    </span>
                    <span className="text-xs text-stone-500 line-through">
                      <PlaceholderBadge label="MSRP: $28 / Month" isHighlighted={highlightPlaceholders} />
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    Guaranteed grandfathered pricing for all demand survey participants who reserve today.
                  </p>
                </div>
                <button
                  onClick={onScrollToForm}
                  className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  Lock In Early Supporter Rate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
