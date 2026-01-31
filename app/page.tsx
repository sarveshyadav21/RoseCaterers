'use client';

import { useState } from 'react';

/* --------------------------------
   Gallery Images (Online)
-------------------------------- */
const galleryImages = [
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
  'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
];

/* ================================
   MAIN DASHBOARD PAGE
================================ */
export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12 space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">Rose Caterers</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Trusted catering service delivering authentic Indian cuisine with
            elegance, hygiene, and timely service.
          </p>
        </header>

        {/* Testimonials Intro */}
        <section className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold text-rose-600">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-slate-600">
            Experiences from people who trusted Rose Caterers.
          </p>
        </section>

        {/* Testimonials */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Ananya Sharma"
            event="Wedding Ceremony"
            message="Rose Caterers exceeded all our expectations. The food was delicious,
            presentation was elegant, and every guest appreciated the quality."
          />
          <TestimonialCard
            name="Rohit Mehta"
            event="Corporate Event"
            message="Very punctual and well-organized team. The menu was customized perfectly
            for our corporate guests."
          />
          <TestimonialCard
            name="Priya Verma"
            event="Birthday Party"
            message="Amazing taste and hygiene. The staff was polite and service was on time.
            Will definitely book Rose Caterers again."
          />
        </section>

        {/* AUTO-SCROLLING GALLERY */}
        <section className="py-16">
          <h2 className="mb-8 text-center text-3xl font-semibold text-slate-900">
            Our Cuisine & Events
          </h2>

          <div className="overflow-hidden">
            <div
              className="flex gap-6"
              style={{
                animation: 'scroll 25s linear infinite',
                width: '200%',
              }}
            >
              {[...galleryImages, ...galleryImages].map((src, i) => (
                <div
                  key={i}
                  style={{ width: 300, height: 200 }}
                  className="flex-shrink-0 overflow-hidden rounded-xl shadow-md bg-white"
                >
                  <img
                    src={src}
                    alt="Rose Caterers"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Inline animation (StackBlitz-safe) */}
          <style jsx>{`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-rose-50 border border-rose-100 p-10 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Make your next event memorable
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            From weddings to corporate events, Rose Caterers brings taste,
            tradition, and trust to your celebration.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-xl bg-rose-600 px-8 py-3 font-semibold text-white transition hover:bg-rose-700 hover:scale-105"
          >
            Contact Rose Caterers
          </button>
        </section>

        {/* Contact Modal */}
        {open && <ContactModal onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
}

/* ================================
   TESTIMONIAL CARD
================================ */
function TestimonialCard({
  name,
  event,
  message,
}: {
  name: string;
  event: string;
  message: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm transition hover:shadow-md hover:-translate-y-1">
      <p className="text-slate-700 leading-relaxed">“{message}”</p>
      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-sm font-medium text-rose-600">{event}</p>
      </div>
    </div>
  );
}

/* ================================
   CONTACT MODAL (WHATSAPP)
================================ */
function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const trimmedName = name.trim();
    const mobileRegex = /^[0-9]{10}$/;

    if (!trimmedName) {
      setError('Name is required');
      return;
    }

    if (!mobileRegex.test(mobile)) {
      setError('Mobile number must be exactly 10 digits');
      return;
    }

    setError('');
    setSuccess(true);

    const date = new Date().toLocaleString('en-IN');

    const text = encodeURIComponent(
      `Hello Rose Caterers,
  New enquiry received.
  
  Name: ${trimmedName}
  Mobile: ${mobile}
  Date: ${date}`
    );

    const businessNumber = '918529527734';

    setTimeout(() => {
      window.open(`https://wa.me/${businessNumber}?text=${text}`, '_blank');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {!success ? (
          <>
            <h3 className="text-xl font-semibold text-slate-900">
              Contact Rose Caterers
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Enter your details and submit your enquiry.
            </p>

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 text-black"
              />

              <input
                type="tel"
                placeholder="10-digit Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                maxLength={10}
                className="w-full rounded-xl border border-slate-300 px-4 py-2 text-black"
              />

              {error && (
                <p className="text-sm text-red-600 font-medium">{error}</p>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="rounded-lg bg-rose-600 px-6 py-2 font-semibold text-white hover:bg-rose-700"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          /* SUCCESS STATE */
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-rose-100 flex items-center justify-center">
              ✅
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Enquiry Submitted
            </h3>
            <p className="mt-2 text-slate-600">
              Thank you! Our team will contact you shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
