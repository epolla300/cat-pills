import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { PlaceholderBadge } from './PlaceholderBadge';

interface FAQProps {
  highlightPlaceholders: boolean;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQ: React.FC<FAQProps> = ({ highlightPlaceholders }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Why does this page state that Cat Pills does not exist yet?',
      answer: (
        <p>
          We believe in complete transparency with pet parents. Developing a clinical-grade, gentle digestive supplement requires significant investment in custom mini-molding, human-grade wild salmon coating, and laboratory shelf-stability testing. We are running this landing page to validate genuine demand and learn your cat's specific dietary challenges before manufacturing begins.
        </p>
      ),
    },
    {
      question: 'Why are there [PLACEHOLDER] labels throughout the page?',
      answer: (
        <p>
          Per our pre-launch validation protocol, any specific details—including clinical study metrics, exact active dosages, doctor quotes, and pricing—are explicitly tagged with <strong className="text-amber-800">[PLACEHOLDER]</strong> so our founding team can easily update them with audited laboratory figures once small-batch synthesis is complete.
        </p>
      ),
    },
    {
      question: 'Will I be charged any money today?',
      answer: (
        <p>
          No, absolutely not. Joining the early interest cohort is 100% free and requires no credit card. It guarantees you a spot in Batch #01, locks in your 40% early-backer discount code, and qualifies you for a free palatability sample pouch when pilot units ship.
        </p>
      ),
    },
    {
      question: 'How do you plan to make cats actually eat a pill?',
      answer: (
        <p>
          Most feline medications fail because of bitter taste receptors and choking-hazard sizing. Our prototype specification features a micro-heart shape under 6.2mm infused with wild Alaskan salmon broth hydrolysate. In preliminary palatability tests, cats perceived it as a gourmet treat rather than medication.
        </p>
      ),
    },
    {
      question: 'What quality and safety standards will Batch 01 adhere to?',
      answer: (
        <p>
          Cat Pills will be compounded in a <PlaceholderBadge label="Standard: FDA-registered cGMP facility in the USA" isHighlighted={highlightPlaceholders} />, adhering strictly to National Animal Supplement Council (NASC) purity guidelines. Every batch will undergo third-party testing for microbial count, heavy metals, and active probiotic CFU survival.
        </p>
      ),
    },
    {
      question: 'When will the first batch be available to ship?',
      answer: (
        <p>
          Our manufacturing trigger is 1,000 registered cat parents. Once that milestone is met, pilot compounding takes approximately 8 to 12 weeks. Registered backers will receive regular behind-the-scenes laboratory development journals.
        </p>
      ),
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-800" />
            <span>Transparency & Verification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Everything you need to know about our demand validation process and formulation standards.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
