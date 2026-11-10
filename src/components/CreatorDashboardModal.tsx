import React, { useState } from 'react';
import { X, Download, PlusCircle, Trash2, Users, PieChart, Tag, Mail, Sparkles } from 'lucide-react';
import { InterestSubmission } from '../types';

interface CreatorDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: InterestSubmission[];
  onSeedSampleData: () => void;
  onClearData: () => void;
  totalBackers: number;
}

export const CreatorDashboardModal: React.FC<CreatorDashboardModalProps> = ({
  isOpen,
  onClose,
  submissions,
  onSeedSampleData,
  onClearData,
  totalBackers,
}) => {
  if (!isOpen) return null;

  // Calculate concern distributions
  const concernCounts: Record<string, number> = {};
  const formatCounts: Record<string, number> = {};
  const priceCounts: Record<string, number> = {};

  submissions.forEach((sub) => {
    sub.concerns.forEach((c) => {
      concernCounts[c] = (concernCounts[c] || 0) + 1;
    });
    if (sub.preferredFormat) {
      formatCounts[sub.preferredFormat] = (formatCounts[sub.preferredFormat] || 0) + 1;
    }
    if (sub.priceExpectation) {
      priceCounts[sub.priceExpectation] = (priceCounts[sub.priceExpectation] || 0) + 1;
    }
  });

  const exportCSV = () => {
    if (submissions.length === 0) return;
    const headers = ['ID', 'Timestamp', 'Email', 'Cat Name', 'Cat Age', 'Concerns', 'Preferred Format', 'Price Expectation', 'Biggest Worry', 'Backer Number'];
    const rows = submissions.map((s) => [
      s.id,
      s.timestamp,
      `"${s.email}"`,
      `"${s.catName}"`,
      `"${s.catAge}"`,
      `"${s.concerns.join('; ')}"`,
      `"${s.preferredFormat}"`,
      `"${s.priceExpectation}"`,
      `"${(s.biggestWorry || '').replace(/"/g, '""')}"`,
      s.backerNumber,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `cat_pills_demand_survey_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <PieChart className="w-3.5 h-3.5" />
              <span>Founder Tool · Pre-Launch Demand Dashboard</span>
            </div>
            <h2 className="text-xl font-bold mt-1">Cat Pills Demand Analytics & Lead Log</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 text-sm">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs text-stone-500 block">Total Demand Registered</span>
              <span className="text-2xl font-bold text-stone-900 font-mono mt-1 block">
                {totalBackers} Backers
              </span>
              <span className="text-xs text-emerald-700 font-medium mt-1 block">
                {Math.round((totalBackers / 1000) * 100)}% of 1,000 Goal
              </span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs text-stone-500 block">Detailed Survey Responses</span>
              <span className="text-2xl font-bold text-stone-900 font-mono mt-1 block">
                {submissions.length} Leads
              </span>
              <span className="text-xs text-stone-500 mt-1 block">Stored in browser cache</span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs text-stone-500 block">Top Reported Issue</span>
              <span className="text-sm font-bold text-stone-900 truncate mt-1 block">
                {Object.entries(concernCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Pending responses'}
              </span>
              <span className="text-xs text-stone-500 mt-1 block">Clinical priority signal</span>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-xs text-stone-500 block">Preferred Format</span>
              <span className="text-sm font-bold text-stone-900 truncate mt-1 block">
                {Object.entries(formatCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Pending responses'}
              </span>
              <span className="text-xs text-stone-500 mt-1 block">Packaging direction</span>
            </div>
          </div>

          {/* Actions Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={exportCSV}
                disabled={submissions.length === 0}
                className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export CSV ({submissions.length})</span>
              </button>

              <button
                onClick={onSeedSampleData}
                className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Seed 5 Sample Surveys</span>
              </button>
            </div>

            <button
              onClick={onClearData}
              className="px-2.5 py-1.5 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset Test Data</span>
            </button>
          </div>

          {/* Concern Breakdown Bar Chart */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <PieChart className="w-4 h-4 text-emerald-800" />
              Dietary Concern Demand Breakdown
            </h3>
            {Object.keys(concernCounts).length === 0 ? (
              <p className="text-xs text-stone-400 italic">No survey data yet. Submit the form on the landing page or click "Seed Sample Surveys".</p>
            ) : (
              <div className="space-y-2">
                {Object.entries(concernCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([concern, count]) => {
                    const percent = Math.round((count / submissions.length) * 100);
                    return (
                      <div key={concern} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-stone-700">{concern}</span>
                          <span className="font-mono text-stone-500 tabular-nums">
                            {count} ({percent}%)
                          </span>
                        </div>
                        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-700 h-full rounded-full transition-all duration-500"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Submissions Table */}
          <div className="space-y-3">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-800" />
              Recent Demand Registrations ({submissions.length})
            </h3>
            <div className="max-h-60 overflow-y-auto border border-stone-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-stone-50 text-stone-500 border-b border-stone-200 sticky top-0">
                  <tr>
                    <th className="p-2.5 font-semibold">Backer #</th>
                    <th className="p-2.5 font-semibold">Email</th>
                    <th className="p-2.5 font-semibold">Cat</th>
                    <th className="p-2.5 font-semibold">Primary Concerns</th>
                    <th className="p-2.5 font-semibold">Willingness to Pay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 font-mono text-[11px]">
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-4 text-center text-stone-400 italic font-sans text-xs">
                        No submissions recorded yet.
                      </td>
                    </tr>
                  ) : (
                    submissions.map((s) => (
                      <tr key={s.id} className="hover:bg-stone-50/70">
                        <td className="p-2.5 font-bold text-emerald-800">#{s.backerNumber}</td>
                        <td className="p-2.5 text-stone-900">{s.email}</td>
                        <td className="p-2.5 text-stone-600">{s.catName} ({s.catAge})</td>
                        <td className="p-2.5 text-stone-600 font-sans max-w-[200px] truncate" title={s.concerns.join(', ')}>
                          {s.concerns.join(', ')}
                        </td>
                        <td className="p-2.5 text-stone-600 font-sans">{s.priceExpectation}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Demand testing data saved locally in your browser storage.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-medium cursor-pointer"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
