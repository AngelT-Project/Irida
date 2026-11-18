import { useEffect, useState } from 'react';
import { Volume2, VolumeX, Waves } from 'lucide-react';
import { soundscape } from '@/lib/soundscape';

export default function SoundscapePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    return () => {
      soundscape.stop();
    };
  }, []);

  const handleToggle = async () => {
    setHasInteracted(true);
    const active = await soundscape.toggle();
    setIsPlaying(Boolean(active));
  };

  return (
    <aside
      aria-label="Coastal Soundscape Player"
      className="fixed bottom-6 left-6 z-40 hidden sm:block"
    >
      <button
        type="button"
        onClick={handleToggle}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying
            ? 'Mute Ionian sea soundscape'
            : 'Listen to ambient Ionian sea waves soundscape'
        }
        className={`group flex items-center gap-2.5 rounded-full border px-3.5 py-2 text-xs font-medium shadow-lg backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
          isPlaying
            ? 'border-gold-500/80 bg-ink-900/90 text-gold-300 shadow-gold-500/10'
            : 'border-sand-300/80 bg-sand-50/90 text-ink-800 hover:border-gold-400 hover:bg-white hover:text-gold-700'
        }`}
        title={
          isPlaying
            ? 'Ambient waves active. Click to pause.'
            : 'Experience the gentle soundscape of the Ionian Sea (muted by default).'
        }
      >
        {isPlaying ? (
          <>
            {/* Animated Equalizer Waveform */}
            <span className="flex h-3.5 items-end gap-0.5" aria-hidden="true">
              <span className="h-full w-0.5 rounded-full bg-gold-400 animate-pulse [animation-duration:800ms]" />
              <span className="h-2 w-0.5 rounded-full bg-gold-400 animate-pulse [animation-duration:1100ms] [animation-delay:200ms]" />
              <span className="h-3 w-0.5 rounded-full bg-gold-400 animate-pulse [animation-duration:700ms] [animation-delay:400ms]" />
              <span className="h-1.5 w-0.5 rounded-full bg-gold-400 animate-pulse [animation-duration:950ms] [animation-delay:150ms]" />
            </span>
            <span className="font-serif text-sm tracking-wide text-white">Ionian Waves</span>
            <Volume2 className="h-3.5 w-3.5 text-gold-400 transition-transform group-hover:scale-110" aria-hidden="true" />
          </>
        ) : (
          <>
            <Waves className="h-3.5 w-3.5 text-gold-600 transition-transform group-hover:scale-110" aria-hidden="true" />
            <span className="tracking-wide">Coastal Waves</span>
            <VolumeX className="h-3.5 w-3.5 text-ink-400 group-hover:text-gold-600" aria-hidden="true" />
          </>
        )}
      </button>

      {/* Discrete initial tooltip prompt on first view if user hasn't interacted */}
      {!hasInteracted && (
        <span className="pointer-events-none absolute -top-8 left-0 whitespace-nowrap rounded-md bg-ink-900/85 px-2 py-0.5 text-[10px] text-white/90 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
          Sound of the Ionian Sea
        </span>
      )}
    </aside>
  );
}
