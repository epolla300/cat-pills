import React, { useState, useEffect } from 'react';
import { PreLaunchBanner } from './components/PreLaunchBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SymptomExplorer } from './components/SymptomExplorer';
import { ExplainerVideo } from './components/ExplainerVideo';
import { ProductSpecs } from './components/ProductSpecs';
import { Testimonials } from './components/Testimonials';
import { InterestForm } from './components/InterestForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CreatorDashboardModal } from './components/CreatorDashboardModal';
import { InterestSubmission } from './types';

const STORAGE_KEY = 'cat_pills_demand_submissions_v1';
const BASELINE_BACKERS = 642;

export default function App() {
  const [highlightPlaceholders, setHighlightPlaceholders] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [submissions, setSubmissions] = useState<InterestSubmission[]>([]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load local submissions:', err);
    }
  }, []);

  const totalBackers = BASELINE_BACKERS + submissions.length;

  // Placeholder count: 18 distinct placeholder tokens across the application
  const placeholderCount = 18;

  const handleNewSubmission = (submission: InterestSubmission) => {
    const updated = [submission, ...submissions];
    setSubmissions(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save submission:', err);
    }
  };

  const handleSeedSampleData = () => {
    const samples: InterestSubmission[] = [
      {
        id: 'seed_' + Math.random().toString(36).substring(2, 8),
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
        email: 'jessica.m@example.com',
        catName: 'Barnaby',
        catAge: 'Mature Adult (7 - 10 yrs)',
        concerns: ['Frequent vomiting / "Scarf and barf"', 'Severe anxiety / trauma taking standard pills'],
        preferredFormat: 'Micro-Chew Heart Tablet (Salmon Coated)',
        priceExpectation: '$20 - $26 / month (Targeted sweet spot)',
        biggestWorry: 'He hides under the sofa when he throws up and refuses to let me touch him.',
        backerNumber: BASELINE_BACKERS + submissions.length + 1,
      },
      {
        id: 'seed_' + Math.random().toString(36).substring(2, 8),
        timestamp: new Date(Date.now() - 3600000 * 6).toISOString(),
        email: 'david.clark@outlook.com',
        catName: 'Cleo',
        catAge: 'Senior (11+ yrs)',
        concerns: ['Painful hairballs & gagging heaves', 'Loose stools & sensitive litter box habits'],
        preferredFormat: 'Crushable Sprinkle Micro-Powder (Tasteless)',
        priceExpectation: '$27 - $35 / month (Premium organic ingredients)',
        biggestWorry: 'Her hairballs sound like choking and she has chronic loose stool from her senior renal diet.',
        backerNumber: BASELINE_BACKERS + submissions.length + 2,
      },
      {
        id: 'seed_' + Math.random().toString(36).substring(2, 8),
        timestamp: new Date(Date.now() - 3600000 * 14).toISOString(),
        email: 'sarah.k@gmail.com',
        catName: 'Mochi',
        catAge: 'Young Adult (1 - 6 yrs)',
        concerns: ['Picky appetite & sudden meal refusal', 'Suspected food sensitivity / itchy skin'],
        preferredFormat: 'Lickable Gravy / Broth Suspension Pill',
        priceExpectation: '$20 - $26 / month (Targeted sweet spot)',
        biggestWorry: 'She stops eating completely whenever she has gastric nausea.',
        backerNumber: BASELINE_BACKERS + submissions.length + 3,
      },
      {
        id: 'seed_' + Math.random().toString(36).substring(2, 8),
        timestamp: new Date(Date.now() - 3600000 * 28).toISOString(),
        email: 'alex.torres@protonmail.com',
        catName: 'Simba',
        catAge: 'Young Adult (1 - 6 yrs)',
        concerns: ['Frequent vomiting / "Scarf and barf"', 'Painful hairballs & gagging heaves'],
        preferredFormat: 'Micro-Chew Heart Tablet (Salmon Coated)',
        priceExpectation: '$15 - $19 / month (High value entry tier)',
        biggestWorry: 'Waking up to yellow foam stains on our wool rug.',
        backerNumber: BASELINE_BACKERS + submissions.length + 4,
      },
      {
        id: 'seed_' + Math.random().toString(36).substring(2, 8),
        timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
        email: 'laura.b@mac.com',
        catName: 'Waffles',
        catAge: 'Mature Adult (7 - 10 yrs)',
        concerns: ['Severe anxiety / trauma taking standard pills', 'Loose stools & sensitive litter box habits'],
        preferredFormat: 'Micro-Chew Heart Tablet (Salmon Coated)',
        priceExpectation: '$27 - $35 / month (Premium organic ingredients)',
        biggestWorry: 'I had to go to urgent care once because he bit through my finger when I tried to pill him.',
        backerNumber: BASELINE_BACKERS + submissions.length + 5,
      },
    ];

    const updated = [...samples, ...submissions];
    setSubmissions(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearData = () => {
    setSubmissions([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error(err);
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('interest-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVideo = () => {
    const el = document.getElementById('explainer-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Demand Validation & Creator Toolbar Banner */}
      <PreLaunchBanner
        onOpenDashboard={() => setIsDashboardOpen(true)}
        highlightPlaceholders={highlightPlaceholders}
        onToggleHighlightPlaceholders={() => setHighlightPlaceholders(!highlightPlaceholders)}
        placeholderCount={placeholderCount}
        totalBackers={totalBackers}
      />

      {/* 2. Top Bar Navigation Contract */}
      <Header onScrollToForm={scrollToForm} />

      {/* 3. Hero Section with Demand Meter & Value Proposition */}
      <Hero
        onScrollToForm={scrollToForm}
        onScrollToVideo={scrollToVideo}
        highlightPlaceholders={highlightPlaceholders}
        totalBackers={totalBackers}
      />

      {/* 4. Empathetic Dietary Concerns & Feline Anatomy Explorer */}
      <SymptomExplorer
        highlightPlaceholders={highlightPlaceholders}
        onScrollToForm={scrollToForm}
      />

      {/* 5. Explainer Video Showcase with Real Controls & Script Storyboard */}
      <ExplainerVideo
        highlightPlaceholders={highlightPlaceholders}
        onScrollToForm={scrollToForm}
      />

      {/* 6. Proposed Specifications & Active Bio-Matrix (Labeled with [PLACEHOLDER]) */}
      <ProductSpecs
        highlightPlaceholders={highlightPlaceholders}
        onScrollToForm={scrollToForm}
      />

      {/* 7. Testimonials & Clinical Benchmarks (Labeled with [PLACEHOLDER]) */}
      <Testimonials
        highlightPlaceholders={highlightPlaceholders}
        onScrollToForm={scrollToForm}
      />

      {/* 8. Core Interest Form Embed Section */}
      <InterestForm
        highlightPlaceholders={highlightPlaceholders}
        onNewSubmission={handleNewSubmission}
        totalBackers={totalBackers}
      />

      {/* 9. FAQ Section on Prototype Status & Validation */}
      <FAQ highlightPlaceholders={highlightPlaceholders} />

      {/* 10. Quiet Footer with Disclaimers */}
      <Footer
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onScrollToForm={scrollToForm}
      />

      {/* 11. Founder Demand Dashboard & CSV Export Modal */}
      <CreatorDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        submissions={submissions}
        onSeedSampleData={handleSeedSampleData}
        onClearData={handleClearData}
        totalBackers={totalBackers}
      />
    </div>
  );
}
