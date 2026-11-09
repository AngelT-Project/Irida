import { useState, type FormEvent } from 'react';
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { hotelContact } from '@/lib/siteData';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'mt-2 w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-700/50 transition focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-300/60';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const { error } = await supabase.from('contact_messages').insert({
      full_name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    if (error) {
      setStatus('error');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
    setStatus('sent');
  };

  return (
    <section id="contact" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Contact</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">We would love to hear from you</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Questions about suites, dining, or arranging something special? Reach out and our team will respond
            promptly.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-ink-700">Phone</p>
                <a href={hotelContact.phoneHref} className="text-lg font-semibold text-ink-900 hover:text-gold-600">
                  {hotelContact.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-ink-700">Email</p>
                <a
                  href={`mailto:${hotelContact.email}`}
                  className="text-lg font-semibold text-ink-900 hover:text-gold-600"
                >
                  {hotelContact.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gold-600 shadow-sm">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-ink-700">Location</p>
                <p className="text-lg font-semibold text-ink-900">Parga, Greece</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-6 shadow-lg sm:p-10">
            <label className="block text-sm font-medium text-ink-800">
              Full name
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium text-ink-800">
              Email
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                className={inputClass}
              />
            </label>
            <label className="block text-sm font-medium text-ink-800">
              Message
              <textarea
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={`${inputClass} resize-none`}
              />
            </label>

            {status === 'error' && (
              <p className="text-sm font-medium text-red-700">
                We could not send your message. Please check the fields and try again.
              </p>
            )}
            {status === 'sent' && (
              <p className="text-sm font-medium text-green-800">Thank you. Your message has been sent.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4" aria-hidden="true" />
              )}
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
