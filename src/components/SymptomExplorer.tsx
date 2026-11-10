import React, { useState } from 'react';
import { AlertCircle, Check, Heart, Shield, Sparkles } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface SymptomExplorerProps {
  highlightPlaceholders: boolean;
  onScrollToForm: () => void;
}

interface IssueData {
  id: string;
  title: string;
  ownerFear: string;
  catExperience: string;
  proposedMechanism: string;
  keyIngredientPlaceholder: string;
  reassuranceNote: string;
}

export const SymptomExplorer: React.FC<SymptomExplorerProps> = ({
  highlightPlaceholders,
  onScrollToForm,
}) => {
  const issues: IssueData[] = [
    {
      id: 'vomiting',
      title: 'Frequent Vomiting & "Scarf and Barf"',
      ownerFear: 'Waking up to bile stains, wondering if something is critically wrong or if an emergency vet bill is looming.',
      catExperience: 'Acidic reflux, esophageal burning, and stomach cramps within 20 minutes of swallowing kibble.',
      proposedMechanism: 'Gentle gastric demulcents coat the mucous stomach lining while digestive enzymes modulate gastric emptying velocity.',
      keyIngredientPlaceholder: 'Ingredient Spec: 250mg Organic Slippery Elm & Marshmallow Mucilage',
      reassuranceNote: 'Targeting a 70%+ reduction in post-meal regurgitation within 14 days of daily use.',
    },
    {
      id: 'hairballs',
      title: 'Painful Hairball Gagging & Dry Heaves',
      ownerFear: 'Heartbreak watching your pet heave helplessly with their neck extended, gasping for air.',
      catExperience: 'Dense trichobezoars (hair clumps) accumulating in the stomach rather than passing safely through the GI tract.',
      proposedMechanism: 'Natural prebiotic soluble fibers and natural omega lipid lubricants soften and sweep fur gently into the colon.',
      keyIngredientPlaceholder: 'Ingredient Spec: 180mg Psyllium Husk & Wild Salmon Omega-3 Lipid Matrix',
      reassuranceNote: 'No petroleum-based laxatives or harsh mineral oils that deplete fat-soluble vitamins.',
    },
    {
      id: 'bowel',
      title: 'Sensitive Bowels & Irregular Stools',
      ownerFear: 'Smelly liquid stool, litter tracking, and worrying about underlying IBD (Inflammatory Bowel Disease).',
      catExperience: 'Gut microbiome dysbiosis, inflamed colonic walls, and abdominal tenderness.',
      proposedMechanism: 'Species-specific feline probiotic micro-encapsulations seed beneficial gut microflora and firm stool consistency.',
      keyIngredientPlaceholder: 'Ingredient Spec: 5 Billion CFU Feline Probiotic Blend (L. rhamnosus & B. bifidum)',
      reassuranceNote: 'Safe for daily lifetime gut maintenance to keep litter boxes clean and worry-free.',
    },
    {
      id: 'pilling',
      title: 'The "Pill Battle" Trauma & Refusal',
      ownerFear: 'Scratch marks, towel wrapping, foaming at the mouth, and feeling like you are torturing your beloved companion.',
      catExperience: 'Cats have 473 taste buds fine-tuned to detect bitterness; standard pills trigger instant panic and gag reflex.',
      proposedMechanism: 'Micro-sized heart chewable coated in real Atlantic salmon broth and hydrolyzed tuna liver so it treats like a gourmet snack.',
      keyIngredientPlaceholder: 'Specification: 6.2mm Micro-Chew with 100% Real Salmon Protein Coating',
      reassuranceNote: 'Designed so 9 out of 10 cats accept it straight from your palm or mixed seamlessly into wet food.',
    },
    {
      id: 'picky',
      title: 'Appetite Drop & Stress-Induced Refusal',
      ownerFear: 'Terrified of hepatic lipidosis (fatty liver) when a nauseated cat skips meals for 24-48 hours.',
      catExperience: 'Subtle gut inflammation causes silent nausea; the cat approaches the bowl, sniffs, and walks away defeated.',
      proposedMechanism: 'Calming bioactive peptides ease digestive visceral anxiety while natural aroma compounds stimulate healthy foraging appetite.',
      keyIngredientPlaceholder: 'Ingredient Spec: 50mg L-Theanine & Natural Brewer Yeast Peptide Flavor',
      reassuranceNote: 'Helps anxious cats rediscover joyful, relaxed mealtime eagerness.',
    },
  ];

  const [activeIssue, setActiveIssue] = useState<IssueData>(issues[0]);

  return (
    <section id="the-challenge" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            <span>The Daily Reality</span>
            <span aria-hidden="true">·</span>
            <span>Why Cat Owners Feel Anxious</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            You shouldn’t have to hold your breath every time your cat eats.
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Cats are masters at concealing pain. When digestive distress shows up, it takes an emotional toll on caring owners.
            Explore the 5 dietary challenges our concept formula is specifically designed to solve:
          </p>
        </div>

        {/* Interactive Segmented Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Issue Selection Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {issues.map((issue) => {
              const isSelected = issue.id === activeIssue.id;
              return (
                <button
                  key={issue.id}
                  onClick={() => setActiveIssue(issue)}
                  className={`w-full text-left p-4 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-white border-emerald-800 shadow-sm text-stone-900 ring-1 ring-emerald-800'
                      : 'bg-stone-100/70 hover:bg-white border-stone-200 text-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm sm:text-base">{issue.title}</span>
                    {isSelected ? (
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">Active</span>
                    ) : null}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                    {issue.ownerFear}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Solution Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-medium text-emerald-800 uppercase tracking-wider">
                  Targeted Dietary Challenge
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {activeIssue.title}
                </h3>
              </div>

              {/* The Emotional Reality vs Feline Biology */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="text-xs font-semibold text-amber-900 uppercase tracking-wide block mb-1">
                    What Cat Parents Endure
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    "{activeIssue.ownerFear}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200">
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide block mb-1">
                    What Your Cat Feels
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {activeIssue.catExperience}
                  </p>
                </div>
              </div>

              {/* How Cat Pills is Proposed to Help */}
              <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-800 shrink-0" />
                  <h4 className="font-semibold text-sm sm:text-base text-stone-900">
                    The Proposed Concept Mechanism
                  </h4>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeIssue.proposedMechanism}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-emerald-200/60 text-xs">
                  <div>
                    <span className="text-stone-500 mr-2">Key active candidate:</span>
                    <PlaceholderBadge label={activeIssue.keyIngredientPlaceholder} isHighlighted={highlightPlaceholders} />
                  </div>
                </div>
              </div>

              {/* Reassurance Outcome */}
              <div className="flex items-start gap-3 p-3.5 bg-stone-50 rounded-lg text-xs text-stone-600 border border-stone-200">
                <Heart className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-stone-800">Peace of mind outcome:</strong> {activeIssue.reassuranceNote}{' '}
                  <PlaceholderBadge label="Clinical Goal: 8-Week Trial Metric" isHighlighted={highlightPlaceholders} />
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <p className="text-xs text-stone-500">
                  Does your cat face this issue? Let us know in our interest survey.
                </p>
                <button
                  onClick={onScrollToForm}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Vote For This Formulation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
