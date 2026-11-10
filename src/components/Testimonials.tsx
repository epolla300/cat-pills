import React from 'react';
import { Star, Quote, HeartHandshake, Award } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface TestimonialsProps {
  highlightPlaceholders: boolean;
  onScrollToForm: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  highlightPlaceholders,
  onScrollToForm,
}) => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice of Testimonial Placeholder Status */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>Pilot Cohort & Social Proof</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-800 font-bold">Concept Placeholders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Early Feedback & Veterinary Trial Benchmarks
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            To ensure complete transparency during this demand test, the quotes and clinical metrics below are{' '}
            <strong className="text-amber-800">[PLACEHOLDERS]</strong> representing our pilot evaluation targets.
            Once our 1,000-backer threshold is reached and initial pilot samples ship, verified owner reviews will replace these cards.
          </p>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-800 font-mono">
                <PlaceholderBadge label="Trial Metric: 94% Acceptance" isHighlighted={highlightPlaceholders} />
              </span>
            </div>
            <p className="text-xs text-stone-600">
              In preliminary home palatability tests with 45 notoriously finicky cats.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-800 font-mono">
                <PlaceholderBadge label="Trial Metric: 82% Less Vomiting" isHighlighted={highlightPlaceholders} />
              </span>
            </div>
            <p className="text-xs text-stone-600">
              Reduction in post-meal regurgitation observed over a 21-day pilot period.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-bold text-emerald-800 font-mono">
                <PlaceholderBadge label="Survey: 10/10 Less Stress" isHighlighted={highlightPlaceholders} />
              </span>
            </div>
            <p className="text-xs text-stone-600">
              Cat owners reporting zero scratches or restraint needed compared to traditional medicine.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1: Veterinarian */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <PlaceholderBadge label="Testimonial: Clinical Partner" isHighlighted={highlightPlaceholders} />
              </div>

              <p className="text-stone-700 text-sm leading-relaxed italic">
                "<PlaceholderBadge label="Quote: 'In 14 years of feline practice, digestive distress is the #1 reason clients call in distress. What excites me about Cat Pills is the combination of soothing gut demulcents with a size that prevents choking and trauma.'" isHighlighted={highlightPlaceholders} />"
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-sm font-bold text-stone-900">
                <PlaceholderBadge label="Doctor Name: Dr. Aris Thorne, DVM" isHighlighted={highlightPlaceholders} />
              </h4>
              <p className="text-xs text-stone-500">
                <PlaceholderBadge label="Title: Feline Internal Medicine Consultant, Seattle WA" isHighlighted={highlightPlaceholders} />
              </p>
            </div>
          </div>

          {/* Testimonial 2: Ragdoll Cat Parent */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <PlaceholderBadge label="Testimonial: Longhair Parent" isHighlighted={highlightPlaceholders} />
              </div>

              <p className="text-stone-700 text-sm leading-relaxed italic">
                "<PlaceholderBadge label="Quote: 'My 7-year-old Ragdoll, Mochi, would hack up huge hairballs twice every week and looked terrified while doing it. The idea of a daily salmon chew that stops hairballs naturally without messy petroleum pastes is something I would pay for in a heartbeat.'" isHighlighted={highlightPlaceholders} />"
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-sm font-bold text-stone-900">
                <PlaceholderBadge label="Parent: Elena Rostova & Mochi" isHighlighted={highlightPlaceholders} />
              </h4>
              <p className="text-xs text-stone-500">
                <PlaceholderBadge label="Location: Austin, Texas · Early Survey Cohort" isHighlighted={highlightPlaceholders} />
              </p>
            </div>
          </div>

          {/* Testimonial 3: Multi-Cat Home */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <PlaceholderBadge label="Testimonial: Sensitive Tummy" isHighlighted={highlightPlaceholders} />
              </div>

              <p className="text-stone-700 text-sm leading-relaxed italic">
                "<PlaceholderBadge label="Quote: 'Oliver would throw up 10 minutes after breakfast almost daily. Giving him prescribed pills involved two towels, wrestling, and him hiding under the bed for hours. We desperately need a stress-free dietary solution.'" isHighlighted={highlightPlaceholders} />"
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-sm font-bold text-stone-900">
                <PlaceholderBadge label="Parent: Marcus & Cleo Chen" isHighlighted={highlightPlaceholders} />
              </h4>
              <p className="text-xs text-stone-500">
                <PlaceholderBadge label="Location: Denver, Colorado · Pilot Tester" isHighlighted={highlightPlaceholders} />
              </p>
            </div>
          </div>
        </div>

        {/* Callout box to invite real survey responses */}
        <div className="mt-10 p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-amber-900 uppercase tracking-wide mr-2">
              Want your cat in the official Pilot Trial?
            </span>
            <span>
              Fill out the interest form below with your cat's specific dietary symptoms to apply for a free sample test kit when Batch 01 clears testing.
            </span>
          </div>
          <button
            onClick={onScrollToForm}
            className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            Apply for Pilot Kit
          </button>
        </div>
      </div>
    </section>
  );
};
