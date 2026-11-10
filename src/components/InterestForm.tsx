import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Share2,
  Copy,
  Check,
  AlertTriangle,
  RotateCcw,
  Heart,
  HelpCircle,
} from 'lucide-react';
import { InterestSubmission } from '../types';
import { PlaceholderBadge } from './PlaceholderBadge';

interface InterestFormProps {
  highlightPlaceholders: boolean;
  onNewSubmission: (submission: InterestSubmission) => void;
  totalBackers: number;
}

export const InterestForm: React.FC<InterestFormProps> = ({
  highlightPlaceholders,
  onNewSubmission,
  totalBackers,
}) => {
  const [email, setEmail] = useState('');
  const [catName, setCatName] = useState('');
  const [catAge, setCatAge] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [preferredFormat, setPreferredFormat] = useState('Micro-Chew Heart Tablet (Salmon Coated)');
  const [priceExpectation, setPriceExpectation] = useState('$19 - $25 / month');
  const [biggestWorry, setBiggestWorry] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InterestSubmission | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const concernsList = [
    'Frequent vomiting / "Scarf and barf"',
    'Painful hairballs & gagging heaves',
    'Loose stools & sensitive litter box habits',
    'Picky appetite & sudden meal refusal',
    'Severe anxiety / trauma taking standard pills',
    'Suspected food sensitivity / itchy skin',
  ];

  const formatOptions = [
    'Micro-Chew Heart Tablet (Salmon Coated)',
    'Crushable Sprinkle Micro-Powder (Tasteless)',
    'Lickable Gravy / Broth Suspension Pill',
    'Soft Moisture Chew Bite',
  ];

  const priceOptions = [
    '$15 - $19 / month (High value entry tier)',
    '$20 - $26 / month (Targeted sweet spot)',
    '$27 - $35 / month (Premium organic ingredients)',
    'Over $35 / month (Willing to pay for top clinical purity)',
  ];

  const toggleConcern = (concern: string) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter((c) => c !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setErrorMsg('Please provide a valid email address so we can notify you if Batch 01 proceeds.');
      return;
    }

    if (selectedConcerns.length === 0) {
      setErrorMsg('Please select at least one dietary challenge your cat experiences.');
      return;
    }

    setIsSubmitting(true);

    // Create submission record
    const newSubmission: InterestSubmission = {
      id: 'sub_' + Date.now(),
      timestamp: new Date().toISOString(),
      email: trimmedEmail,
      catName: catName.trim() || 'My Cat',
      catAge: catAge.trim() || 'Adult',
      concerns: selectedConcerns,
      preferredFormat,
      priceExpectation,
      biggestWorry: biggestWorry.trim(),
      backerNumber: totalBackers + 1,
    };

    setTimeout(() => {
      onNewSubmission(newSubmission);
      setSubmittedData(newSubmission);
      setIsSubmitting(false);
    }, 400);
  };

  const handleCopyReferral = () => {
    const link = `${window.location.origin}${window.location.pathname}?ref=${submittedData?.backerNumber || 'vip'}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleResetForAnother = () => {
    setSubmittedData(null);
    setEmail('');
    setCatName('');
    setCatAge('');
    setSelectedConcerns([]);
    setBiggestWorry('');
    setErrorMsg('');
  };

  return (
    <section id="interest-form" className="py-16 sm:py-24 bg-stone-100 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demand Assessment & VIP Cohort Signup</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Help Us Bring Cat Pills to Life
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            By sharing your cat's dietary reality, you directly influence the formula, palatability flavor, and pricing before our laboratory commits to manufacturing.
          </p>
        </div>

        {/* Embed Frame Card */}
        <div className="bg-white rounded-2xl border border-stone-300 shadow-md p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-emerald-700 via-teal-600 to-amber-500" />

          {/* Transparent Notice Inside Form */}
          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-stone-700 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-900">
                100% Free · No Financial Obligation · Demand Gauge Only
              </p>
              <p className="text-stone-600 mt-0.5">
                This form registers your non-binding interest. You will not be charged. If our 1,000-backer goal is reached, you will receive first notification and a 40% founder discount code.
              </p>
            </div>
          </div>

          {!submittedData ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  Your Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. yourname@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sm bg-white"
                  required
                />
                <span className="text-xs text-stone-500 mt-1 block">
                  We will never spam or sell your information. Strictly used for Batch 01 manufacturing updates.
                </span>
              </div>

              {/* Cat Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="catName" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                    Cat's Name
                  </label>
                  <input
                    id="catName"
                    type="text"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                    placeholder="e.g. Luna or Oliver"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sm bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="catAge" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                    Cat's Age
                  </label>
                  <select
                    id="catAge"
                    value={catAge}
                    onChange={(e) => setCatAge(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sm bg-white text-stone-800"
                  >
                    <option value="">Select age range...</option>
                    <option value="Kitten (under 1 yr)">Kitten (under 1 yr)</option>
                    <option value="Young Adult (1 - 6 yrs)">Young Adult (1 - 6 yrs)</option>
                    <option value="Mature Adult (7 - 10 yrs)">Mature Adult (7 - 10 yrs)</option>
                    <option value="Senior (11+ yrs)">Senior (11+ yrs)</option>
                  </select>
                </div>
              </div>

              {/* Dietary Issues Checkboxes */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                  What dietary challenges does your cat experience? <span className="text-red-500">*</span>
                  <span className="font-normal text-stone-500 ml-1">(Select all that apply)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {concernsList.map((concern) => {
                    const isChecked = selectedConcerns.includes(concern);
                    return (
                      <button
                        type="button"
                        key={concern}
                        onClick={() => toggleConcern(concern)}
                        className={`p-3 rounded-lg border text-left text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-50/80 border-emerald-700 text-stone-900 font-medium'
                            : 'bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-700'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                            isChecked
                              ? 'bg-emerald-800 border-emerald-800 text-white'
                              : 'bg-white border-stone-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{concern}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preferred Format */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  Which pill / supplement format does your cat tolerate best?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {formatOptions.map((fmt) => (
                    <label
                      key={fmt}
                      className={`p-3 rounded-lg border text-xs sm:text-sm flex items-center gap-2.5 cursor-pointer transition-colors ${
                        preferredFormat === fmt
                          ? 'bg-stone-900 text-white border-stone-900 font-medium'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredFormat"
                        checked={preferredFormat === fmt}
                        onChange={() => setPreferredFormat(fmt)}
                        className="sr-only"
                      />
                      <span>{fmt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Expectation */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  What would you consider a fair monthly price for guaranteed digestive comfort?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {priceOptions.map((price) => (
                    <label
                      key={price}
                      className={`p-3 rounded-lg border text-xs sm:text-sm flex items-center gap-2.5 cursor-pointer transition-colors ${
                        priceExpectation === price
                          ? 'bg-emerald-800 text-white border-emerald-800 font-medium'
                          : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="priceExpectation"
                        checked={priceExpectation === price}
                        onChange={() => setPriceExpectation(price)}
                        className="sr-only"
                      />
                      <span>{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Open Feedback */}
              <div>
                <label htmlFor="biggestWorry" className="block text-xs sm:text-sm font-semibold text-stone-800 mb-1.5">
                  What is your biggest daily worry regarding your cat's digestion?
                  <span className="font-normal text-stone-500 ml-1">(Optional)</span>
                </label>
                <textarea
                  id="biggestWorry"
                  rows={3}
                  value={biggestWorry}
                  onChange={(e) => setBiggestWorry(e.target.value)}
                  placeholder="e.g. He throws up undigested kibble 3 mornings a week, and he hides when I bring out the hairball paste..."
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent text-sm bg-white"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>
                    {isSubmitting
                      ? 'Registering Your Backer Priority...'
                      : 'Join Priority Waitlist & Lock In 40% Off Batch 01'}
                  </span>
                </button>
                <div className="flex items-center justify-between text-xs text-stone-500 mt-2 px-1">
                  <span>Zero credit card required</span>
                  <span><PlaceholderBadge label="Incentive: Free Palatability Sample Pouch" isHighlighted={highlightPlaceholders} /></span>
                </div>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="py-6 sm:py-8 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Priority Access Secured · Backer #{submittedData.backerNumber}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                  Thank you! You’re helping make Cat Pills a reality.
                </h3>
                <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto">
                  We've recorded your feedback for <strong className="text-stone-900">{submittedData.catName}</strong>.
                  Your email (<strong className="text-stone-900">{submittedData.email}</strong>) is locked in for a guaranteed 40% discount on Batch 01.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 text-stone-700">
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Backer Priority:</span>
                  <span className="font-mono font-bold text-emerald-800">#{submittedData.backerNumber} of 1,000</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Target Concerns:</span>
                  <span className="font-medium text-right max-w-[200px] truncate">{submittedData.concerns.join(', ')}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Preferred Pill:</span>
                  <span className="font-medium">{submittedData.preferredFormat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Guaranteed Perk:</span>
                  <span className="font-semibold text-emerald-800">40% Off MSRP + Free Palatability Trial</span>
                </div>
              </div>

              {/* Share Referral Link */}
              <div className="max-w-md mx-auto pt-2 space-y-2">
                <p className="text-xs text-stone-600 font-medium">
                  Know a fellow cat parent whose cat struggles with digestion?
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`${window.location.origin}${window.location.pathname}?ref=backer_${submittedData.backerNumber}`}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 bg-stone-50 text-stone-600 font-mono"
                  />
                  <button
                    onClick={handleCopyReferral}
                    className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={handleResetForAnother}
                  className="text-xs font-medium text-stone-600 hover:text-stone-900 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit dietary response for another cat or test again</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
