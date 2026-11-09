import { useEffect, useState, type FormEvent } from 'react';
import { ArrowLeft, CalendarCheck, CheckCircle2, Loader2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { suiteCategories } from '@/lib/siteData';
import { suitesInCategory } from '@/lib/suites';

type BookingProps = {
  selectedSuite: string;
  onSuiteChange: (suite: string) => void;
};

type Step = 'details' | 'review' | 'done';

type BookingDetails = {
  arrival: string;
  departure: string;
  guests: string;
  suite: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const todayIso = () => new Date().toLocaleDateString('en-CA');

const nightsBetween = (arrival: string, departure: string) => {
  const ms = new Date(departure).getTime() - new Date(arrival).getTime();
  return Math.round(ms / 86_400_000);
};

const emptyDetails = (suite: string): BookingDetails => ({
  arrival: '',
  departure: '',
  guests: '2',
  suite,
  name: '',
  email: '',
  phone: '',
  notes: '',
});

const inputClass =
  'mt-2 w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-700/50 transition focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300/60';

const labelClass = 'block text-sm font-medium text-ink-800';

export default function Booking({ selectedSuite, onSuiteChange }: BookingProps) {
  const [step, setStep] = useState<Step>('details');
  const [details, setDetails] = useState<BookingDetails>(() => emptyDetails(selectedSuite));
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const nights = nightsBetween(details.arrival, details.departure);

  useEffect(() => {
    setDetails((prev) => ({ ...prev, suite: selectedSuite }));
  }, [selectedSuite]);

  const update = (field: keyof BookingDetails) => (event: { target: { value: string } }) => {
    setDetails((prev) => ({ ...prev, [field]: event.target.value }));
    if (field === 'suite') onSuiteChange(event.target.value);
  };

  const handleCheck = (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!details.arrival || !details.departure) {
      setError('Please choose your arrival and departure dates.');
      return;
    }
    if (details.arrival < todayIso()) {
      setError('Arrival date cannot be in the past.');
      return;
    }
    if (nights < 1) {
      setError('Departure must be at least one night after arrival.');
      return;
    }
    setStep('review');
  };

  const handleSubmit = async () => {
    setError(null);
    if (!details.name.trim() || !/^\S+@\S+\.\S+$/.test(details.email.trim())) {
      setError('Please add your full name and a valid email address.');
      return;
    }
    setSubmitting(true);
    const { error: insertError } = await supabase.from('booking_requests').insert({
      arrival_date: details.arrival,
      departure_date: details.departure,
      guests: Number(details.guests),
      suite_name: details.suite || null,
      guest_name: details.name.trim(),
      guest_email: details.email.trim(),
      guest_phone: details.phone.trim() || null,
      notes: details.notes.trim() || null,
    });
    setSubmitting(false);
    if (insertError) {
      setError('We could not send your request. Please try again or call us directly.');
      return;
    }
    setStep('done');
  };

  const reset = () => {
    setDetails(emptyDetails(''));
    onSuiteChange('');
    setStep('details');
  };

  return (
    <section id="booking" className="bg-ink-900 py-24 text-white lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-300">Reservations</p>
          <h2 className="mt-4 text-4xl font-medium text-white sm:text-5xl">Check Availability</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Choose your dates and suite. Our team confirms every request personally.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-14 rounded-3xl bg-white p-6 text-ink-900 shadow-2xl sm:p-10">
          {step === 'done' ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-gold-500" aria-hidden="true" />
              <h3 className="mt-6 text-3xl font-medium">Thank you, your request is received</h3>
              <p className="mt-4 max-w-md leading-relaxed text-ink-700">
                Our team will review your dates and contact you by email to confirm your stay.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold transition-all hover:bg-ink-900 hover:text-white"
              >
                Make another request
              </button>
            </div>
          ) : step === 'details' ? (
            <form onSubmit={handleCheck} className="grid gap-6 sm:grid-cols-2">
              <label className={labelClass}>
                Arrival date
                <input
                  type="date"
                  required
                  min={todayIso()}
                  value={details.arrival}
                  onChange={update('arrival')}
                  className={inputClass}
                />
              </label>
              <label className={labelClass}>
                Departure date
                <input
                  type="date"
                  required
                  min={details.arrival || todayIso()}
                  value={details.departure}
                  onChange={update('departure')}
                  className={inputClass}
                />
              </label>
              <label className={labelClass}>
                Number of guests
                <select value={details.guests} onChange={update('guests')} className={inputClass}>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((count) => (
                    <option key={count} value={count}>
                      {count} {count === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Suite
                <select value={details.suite} onChange={update('suite')} className={inputClass}>
                  <option value="">Any suite (no preference)</option>
                  {suiteCategories.map((category) => (
                    <optgroup key={category.id} label={category.title}>
                      {suitesInCategory(category.id).map((suite) => (
                        <option key={suite.name} value={suite.name}>
                          {suite.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>

              {error && <p className="text-sm font-medium text-red-700 sm:col-span-2">{error}</p>}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-gold-600 sm:w-auto"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Check Availability
                </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6">
                <h3 className="text-2xl font-medium">Your stay summary</h3>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-ink-700">Arrival</dt>
                    <dd className="mt-1 font-semibold">{details.arrival}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-700">Departure</dt>
                    <dd className="mt-1 font-semibold">{details.departure}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-700">Nights and guests</dt>
                    <dd className="mt-1 font-semibold">
                      {nights} {nights === 1 ? 'night' : 'nights'}, {details.guests}{' '}
                      {details.guests === '1' ? 'guest' : 'guests'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-700">Suite</dt>
                    <dd className="mt-1 font-semibold">{details.suite || 'Any suite'}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-ink-700">Price</dt>
                    <dd className="mt-1 font-serif text-xl text-ink-900">
                      Rates and total confirmed by our team
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className={labelClass}>
                  Full name
                  <input
                    required
                    value={details.name}
                    onChange={update('name')}
                    autoComplete="name"
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  Email
                  <input
                    type="email"
                    required
                    value={details.email}
                    onChange={update('email')}
                    autoComplete="email"
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  Phone (optional)
                  <input
                    type="tel"
                    value={details.phone}
                    onChange={update('phone')}
                    autoComplete="tel"
                    className={inputClass}
                  />
                </label>
                <label className={labelClass}>
                  Special requests (optional)
                  <input value={details.notes} onChange={update('notes')} className={inputClass} />
                </label>
              </div>

              {error && <p className="text-sm font-medium text-red-700">{error}</p>}

              <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-gold-600"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Edit dates
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                  Send Booking Request
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
