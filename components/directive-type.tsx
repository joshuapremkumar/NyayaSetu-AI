'use client';

const DIRECTIVE_TYPES = [
  { id: 'compliance', label: 'Compliance', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { id: 'appeal', label: 'Appeal', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
  { id: 'review', label: 'Review', color: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200' },
  { id: 'reinstatement', label: 'Reinstatement', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { id: 'compensation', label: 'Compensation', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' },
  { id: 'policy-amendment', label: 'Policy Amendment', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
  { id: 'administrative-action', label: 'Administrative Action', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200' },
  { id: 'escalation', label: 'Escalation', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  { id: 'stay-order', label: 'Stay Order', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
] as const;

export type DirectiveType = typeof DIRECTIVE_TYPES[number]['id'];

interface DirectiveTypeBadgeProps {
  type: DirectiveType;
  className?: string;
}

export function DirectiveTypeBadge({ type, className = '' }: DirectiveTypeBadgeProps) {
  const directive = DIRECTIVE_TYPES.find(d => d.id === type);
  if (!directive) return null;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${directive.color} ${className}`}>
      {directive.label}
    </span>
  );
}

interface DirectiveTypeSelectorProps {
  value: DirectiveType;
  onChange: (type: DirectiveType) => void;
}

export function DirectiveTypeSelector({ value, onChange }: DirectiveTypeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">Directive Type</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as DirectiveType)}
        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-foreground"
      >
        {DIRECTIVE_TYPES.map(directive => (
          <option key={directive.id} value={directive.id}>
            {directive.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function getDirectiveLabel(type: DirectiveType): string {
  return DIRECTIVE_TYPES.find(d => d.id === type)?.label || type;
}
