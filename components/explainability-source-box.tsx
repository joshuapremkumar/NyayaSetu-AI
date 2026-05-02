'use client';

import { FileText } from 'lucide-react';

interface ExplainabilitySourceBoxProps {
  sourcePages: {
    page: number;
    paragraph: number;
    snippet: string;
  }[];
  title?: string;
}

export function ExplainabilitySourceBox({
  sourcePages,
  title = 'Derived From',
}: ExplainabilitySourceBoxProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-4 h-4 text-primary" />
        <h4 className="font-semibold text-sm text-foreground">{title}</h4>
      </div>

      <div className="space-y-3">
        {sourcePages.map((source, idx) => (
          <div key={idx} className="pb-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0 last:pb-0">
            <div className="flex items-start gap-3">
              <div className="flex gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 min-w-fit">
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">P{source.page}</span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">¶{source.paragraph}</span>
              </div>
              <p className="text-sm text-foreground flex-1 leading-relaxed italic">
                "{source.snippet}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
