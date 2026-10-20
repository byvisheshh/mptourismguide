import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../utils/seo';
import { Phone, Mail, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSeo(
      {
        primaryKeyword: 'Madhya Pradesh tourism contact',
        secondaryKeywords: ['MP tourism helpline', 'Madhya Pradesh tourist inquiry'],
        title: 'Contact & Tourist Helplines | MP Tourism Guide',
        metaDescription:
          'Official contact directories and traveler assistance for Madhya Pradesh Tourism. Verified state tourist helpline numbers and inquiry assistance.',
      },
      '/contact',
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact & Tourist Helplines | MP Tourism Guide',
        description:
          'Official contact directories and traveler assistance for Madhya Pradesh Tourism. Verified state tourist helpline numbers and inquiry assistance.',
      }
    );
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'Contact' }]} onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>Traveler Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Contact & Tourist Helplines
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed font-serif italic">
            "We are here to assist your journey across the Heart of Incredible India."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Official Helplines Directory */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-700" />
                <span>Official Tourist Helplines</span>
              </h2>

              <div className="space-y-3 text-xs text-stone-700 divide-y divide-stone-100">
                <div className="pt-2">
                  <span className="font-semibold text-stone-900 block">
                    Madhya Pradesh Tourism Toll-Free Helpline:
                  </span>
                  <span className="font-mono text-base font-bold text-amber-800 mt-1 block">
                    1800-233-7777
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Operates 10:00 AM to 06:00 PM (Monday through Saturday) for booking assistance and travel inquiries.
                  </span>
                </div>

                <div className="pt-3">
                  <span className="font-semibold text-stone-900 block">
                    Emergency Police Assistance:
                  </span>
                  <span className="font-mono text-stone-900 font-semibold mt-0.5 block">
                    112 (Pan-India Unified Emergency)
                  </span>
                </div>

                <div className="pt-3">
                  <span className="font-semibold text-stone-900 block">
                    Medical & Ambulance Helpline:
                  </span>
                  <span className="font-mono text-stone-900 font-semibold mt-0.5 block">
                    108
                  </span>
                </div>

                <div className="pt-3">
                  <span className="font-semibold text-stone-900 block">
                    Railway Traveler Inquiry (IRCTC):
                  </span>
                  <span className="font-mono text-stone-900 font-semibold mt-0.5 block">
                    139
                  </span>
                </div>
              </div>
            </div>

            {/* Clearly Marked Project Contact Placeholder */}
            <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 text-xs text-stone-800 space-y-3">
              <h3 className="font-serif font-bold text-amber-950 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700" />
                <span>Student / Project Submitter Contact</span>
              </h3>
              <p className="text-stone-700 leading-relaxed">
                <em>Project Contact Field:</em>
              </p>
              <div className="p-3 bg-white rounded-xl border border-amber-300/80 font-mono text-[11px] text-stone-700">
                Email: [contact@your-university-project.edu / User Contact Placeholder]
              </div>
              <p className="text-[11px] text-stone-500">
                *In accordance with project guidelines, student contact details can be configured directly in this field.
              </p>
            </div>
          </div>

          {/* Interactive Traveler Inquiry Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-4 my-auto">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. We have logged your travel inquiry regarding Madhya Pradesh. A response will be dispatched to <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'general', message: '' });
                  }}
                  className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Travel Inquiry & Feedback Form
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Have questions about darshan timings, safari permits, or routes? Send us your message.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="general">General Travel Inquiry</option>
                    <option value="omkareshwar">Omkareshwar & Ujjain Jyotirlinga Darshan</option>
                    <option value="safari">Tiger Safari & Forest Permits</option>
                    <option value="heritage">Khajuraho & Sanchi Heritage</option>
                    <option value="feedback">Website Feedback / Correction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your travel dates, group size, or questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
