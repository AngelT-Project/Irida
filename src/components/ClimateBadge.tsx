import { Sun, Sunset, Wind } from 'lucide-react';
import { climateData } from '@/lib/siteData';

type ClimateBadgeProps = {
  className?: string;
  variant?: 'hero' | 'compact';
};

export default function ClimateBadge({ className = '', variant = 'hero' }: ClimateBadgeProps) {
  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-sand-300 bg-sand-50/90 px-3 py-1 text-xs text-ink-800 shadow-sm backdrop-blur-sm ${className}`}
        title={`Current coastal conditions: ${climateData.condition}, Water ${climateData.waterTemp}`}
      >
        <Sun className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
        <span className="font-medium">{climateData.location}</span>
        <span className="text-sand-400">•</span>
        <span className="font-semibold text-ink-900">{climateData.temperature}</span>
        <span className="text-sand-400">•</span>
        <Sunset className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
        <span className="text-ink-700">Sunset {climateData.sunsetTime}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/25 bg-ink-900/40 px-4 py-1.5 text-xs text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-ink-900/50 ${className}`}
    >
      <div className="flex items-center gap-1.5">
        <Sun className="h-3.5 w-3.5 text-gold-300 animate-pulse" aria-hidden="true" />
        <span className="font-medium tracking-wide text-white">{climateData.location}</span>
      </div>

      <span className="text-white/40">•</span>

      <div className="flex items-center gap-1">
        <span className="font-semibold text-gold-200">{climateData.temperature}</span>
        <span className="text-white/80">{climateData.condition}</span>
      </div>

      <span className="text-white/40">•</span>

      <div className="flex items-center gap-1.5">
        <Sunset className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
        <span className="text-white/90">Sunset at {climateData.sunsetTime}</span>
      </div>

      <div className="hidden items-center gap-1 text-white/70 sm:inline-flex">
        <span className="text-white/40">•</span>
        <Wind className="h-3 w-3 text-gold-300" aria-hidden="true" />
        <span>{climateData.breeze}</span>
      </div>
    </div>
  );
}
