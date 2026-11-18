import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { conciergeFaqs, hotelContact } from '@/lib/siteData';

export default function ConciergeFAQ() {
  const [openId, setOpenId] = useState<string | null>(conciergeFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gold-600 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
            Concierge FAQ
          </div>
          <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Boutique Concierge &amp; Inquiries</h2>
          <p className="mt-4 text-base italic text-gold-600">
            Thoughtfully answered details to ensure your journey to Parga is effortless from the first moment.
          </p>
        </Reveal>

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {conciergeFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <Reveal key={faq.id} delay={index * 60}>
                <div className="overflow-hidden rounded-2xl border border-sand-300/80 bg-white shadow-sm transition-all duration-300 hover:border-gold-300 hover:shadow-md">
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                  >
                    <span className="font-serif text-xl font-medium text-ink-900 sm:text-2xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sand-100 text-ink-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-gold-100 text-gold-800' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-sand-100 px-6 pb-6 pt-3 text-base leading-relaxed text-ink-700">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Tailored Assistance Card */}
        <Reveal delay={300} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gold-300/60 bg-gradient-to-r from-sand-50 via-white to-sand-50 p-8 text-center shadow-md sm:flex-row sm:text-left">
            <div>
              <h3 className="font-serif text-2xl font-medium text-ink-900">Have a unique inquiry or special arrival?</h3>
              <p className="mt-1 text-sm text-ink-700">
                Our front desk concierge is pleased to assist with customized itineraries, VIP transfers, and dietary requests.
              </p>
            </div>
            <a
              href={hotelContact.phoneHref}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-gold-600 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Concierge
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
