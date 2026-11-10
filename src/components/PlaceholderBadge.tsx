import React from 'react';

interface PlaceholderBadgeProps {
  label: string;
  isHighlighted?: boolean;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label,
  isHighlighted = false,
  className = '',
}) => {
  return (
    <span
      data-placeholder="true"
      className={`inline-flex items-center text-xs font-mono font-semibold tracking-wide transition-all select-all ${
        isHighlighted
          ? 'bg-amber-300 text-amber-950 px-1.5 py-0.5 rounded ring-2 ring-amber-500 shadow-sm'
          : 'text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/80'
      } ${className}`}
      title="Placeholder data: replace with final clinical or brand copy when available"
    >
      [PLACEHOLDER: {label}]
    </span>
  );
};
