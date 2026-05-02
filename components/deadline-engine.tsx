'use client';

import { AlertTriangle, Clock, Zap } from 'lucide-react';

interface DeadlineEngineProps {
  complianceDaysRemaining: number;
  appealDaysRemaining: number;
  escalationRisk: 'low' | 'medium' | 'high';
  compact?: boolean;
}

function getDeadlineColor(daysRemaining: number): string {
  if (daysRemaining <= 3) return 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200';
  if (daysRemaining <= 7) return 'bg-orange-50 border-orange-200 text-orange-900 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-200';
  return 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200';
}

function getRiskColor(risk: string): string {
  if (risk === 'high') return 'text-red-600 dark:text-red-400';
  if (risk === 'medium') return 'text-orange-600 dark:text-orange-400';
  return 'text-green-600 dark:text-green-400';
}

export function DeadlineEngine({
  complianceDaysRemaining,
  appealDaysRemaining,
  escalationRisk,
  compact = false,
}: DeadlineEngineProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
        <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
        <div className="text-xs font-semibold text-yellow-900 dark:text-yellow-200">
          Due: {complianceDaysRemaining}d | Appeal: {appealDaysRemaining}d
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-sm text-foreground">Operational Deadlines</h3>

      {/* Compliance Deadline */}
      <div className={`p-3 rounded-lg border ${getDeadlineColor(complianceDaysRemaining)}`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Compliance Due</span>
          <Clock className="w-4 h-4" />
        </div>
        <div className="text-2xl font-bold">{complianceDaysRemaining} days</div>
        <div className="text-xs opacity-75 mt-1">remaining</div>
      </div>

      {/* Appeal Limitation */}
      <div className={`p-3 rounded-lg border ${getDeadlineColor(appealDaysRemaining)}`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Appeal Limitation</span>
          <AlertTriangle className="w-4 h-4" />
        </div>
        <div className="text-2xl font-bold">{appealDaysRemaining} days</div>
        <div className="text-xs opacity-75 mt-1">remaining</div>
      </div>

      {/* Escalation Risk */}
      <div className={`p-3 rounded-lg border bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800`}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-foreground">Escalation Risk</span>
          <Zap className={`w-4 h-4 ${getRiskColor(escalationRisk)}`} />
        </div>
        <div className={`text-sm font-semibold capitalize ${getRiskColor(escalationRisk)}`}>
          {escalationRisk}
        </div>
      </div>
    </div>
  );
}
