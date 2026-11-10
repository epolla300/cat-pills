export interface InterestSubmission {
  id: string;
  timestamp: string;
  email: string;
  catName: string;
  catAge: string;
  concerns: string[];
  preferredFormat: string;
  priceExpectation: string;
  biggestWorry: string;
  backerNumber: number;
}

export interface PlaceholderItem {
  id: string;
  category: 'Testimonial' | 'Specification' | 'Ingredient' | 'Pricing' | 'Clinical Metric';
  label: string;
  currentValue: string;
  notes: string;
}
