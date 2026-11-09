import { useState, type FormEvent } from 'react';
import { Loader2, Mail, MapPin, Phone, Waves } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { hotelContact, navLinks } from '@/lib/siteData';

type Status = 'idle' | 'sending' | 'subscribed' | 'error';

const UNIQUE_VIOLATION = '23505';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();
    const cleaned = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(cleaned)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const { error } = await supabase.from('newsletter_subscribers').insert({ email: cleaned });
    if (error && error.code !== UNIQUE_VIOLATION) {
      setStatus('error');
      return;
    }
    setEmail('');
    setStatus('subscribed');
  };

  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <a href="#home" className="flex items-center gap-2 font-serif text-2xl font-semibold text-white">
            <Waves className="h-6 w-6 text-gold-400" aria-hidden="true" />
            Irida Hotel
          </a>
          <p className="mt-4 max-w-xs leading-relaxed text-white/70">
            An elegant Mediterranean boutique hotel on the Ionian coast of Parga, Greece.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Explore</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 transition-colors hover:text-gold-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Contact</h3>
          <ul className="mt-5 space-y-4 text-white/80">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
              Parga, Greece
            </li>
            <li>
              <a href={hotelContact.phoneHref} className="flex items-center gap-3 hover:text-gold-300">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
                {hotelContact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${hotelContact.email}`} className="flex items-center gap-3 hover:text-gold-300">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-400" aria-hidden="true" />
                {hotelContact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Newsletter</h3>
          <p className="mt-5 leading-relaxed text-white/70">
            Receive news, seasonal offers, and stories from Irida Hotel.
          </p>
          <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/40"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
              Subscribe
            </button>
          </form>
          {status === 'subscribed' && (
            <p className="mt-3 text-sm text-gold-300">Thank you for subscribing.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-red-300">Please enter a valid email address and try again.</p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>{new Date().getFullYear()} Irida Hotel. All rights reserved.</p>
          <p>Parga, Greece</p>
        </div>
      </div>
    </footer>
  );
}
