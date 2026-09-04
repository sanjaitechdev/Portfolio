import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Send, MapPin, Phone, CheckCircle2,
  AlertCircle, Loader2, Sparkles, ArrowUpRight,
  Copy, Check, Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 6) {
      newErrors.message = 'Minimum 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _subject: `✨ Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent to my inbox. I will reply shortly.');

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E3280C', '#FF4D4D', '#111111', '#FFFFFF']
        });

        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Email send error:', err);
      setStatus('error');
      setStatusMessage('Could not deliver automatically. Please email directly at ' + portfolioData.contact.email);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-white text-neutral-900 overflow-hidden border-t-2 border-neutral-200">

      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neutral-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-300 text-xs sm:text-sm font-mono text-[#E3280C] font-black mb-3 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span className="uppercase tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-neutral-950 tracking-tight leading-tight">
              Let's connect & build<span className="text-[#E3280C]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed font-sans mt-3">
              Have an open developer role, project idea, or question? Send a message directly.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border-2 border-neutral-300 text-xs sm:text-sm font-mono font-bold text-neutral-900 shadow-sm self-start md:self-end">
            <Clock size={15} className="text-[#E3280C]" />
            <span>IST (UTC +5:30)</span>
          </div>
        </div>

        {/* Clean 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Direct Contact Details & Socials (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">

            <div className="space-y-4">
              {/* Email Card with Copy */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border-2 border-neutral-300 hover:border-[#E3280C] transition-all flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-red-100 text-[#E3280C] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-wide">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-sm sm:text-base font-black text-neutral-950 hover:text-[#E3280C] transition-colors truncate block mt-0.5"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(portfolioData.contact.email, 'email')}
                  title="Copy email"
                  className="p-2.5 rounded-xl bg-white border-2 border-neutral-300 hover:bg-[#E3280C] hover:text-white text-neutral-900 transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-600 font-bold" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone / WhatsApp Card with Copy */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border-2 border-neutral-300 hover:border-[#E3280C] transition-all flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-red-100 text-[#E3280C] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-wide">Phone / WhatsApp</div>
                    <a
                      href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-black text-neutral-950 hover:text-[#E3280C] transition-colors truncate block mt-0.5"
                    >
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(portfolioData.contact.phone, 'phone')}
                  title="Copy phone"
                  className="p-2.5 rounded-xl bg-white border-2 border-neutral-300 hover:bg-[#E3280C] hover:text-white text-neutral-900 transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-600 font-bold" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border-2 border-neutral-300 flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-neutral-200 text-neutral-900 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-wide">Location Base</div>
                  <div className="text-sm sm:text-base font-black text-neutral-950 mt-0.5">
                    {portfolioData.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-2.5">
                Tech Profiles & Code
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#E3280C] text-neutral-950 hover:text-white border-2 border-neutral-300 hover:border-[#E3280C] transition-all flex items-center justify-center gap-2 shadow-xs group"
                >
                  <GithubIcon size={18} />
                  <span className="text-xs sm:text-sm font-black font-sans">GitHub</span>
                </a>

                <a
                  href={portfolioData.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#E3280C] text-neutral-950 hover:text-white border-2 border-neutral-300 hover:border-[#E3280C] transition-all flex items-center justify-center gap-2 shadow-xs group"
                >
                  <LeetcodeIcon size={18} />
                  <span className="text-xs sm:text-sm font-black font-sans">LeetCode</span>
                </a>

                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#F8F9FA] hover:bg-[#E3280C] text-neutral-950 hover:text-white border-2 border-neutral-300 hover:border-[#E3280C] transition-all flex items-center justify-center gap-2 shadow-xs group"
                >
                  <LinkedinIcon size={18} />
                  <span className="text-xs sm:text-sm font-black font-sans">LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Direct Form Container (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#F8F9FA] border-2 border-neutral-300 shadow-lg h-full flex flex-col justify-between">

              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-black text-neutral-950 mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base font-medium font-sans mb-6">
                  Fill in your details below and it will reach my inbox instantly.
                </p>

                {status === 'success' ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                      <CheckCircle2 size={26} />
                    </div>
                    <h4 className="text-lg font-sans font-black text-neutral-950">Message Sent Successfully!</h4>
                    <p className="text-neutral-800 text-sm font-medium">
                      {statusMessage}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-full bg-[#E3280C] text-white text-xs font-mono font-bold uppercase transition-all shadow-md cursor-pointer"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {status === 'error' && (
                      <div className="p-3 rounded-xl bg-red-50 border-2 border-red-300 text-red-800 text-xs font-mono font-bold flex items-start gap-2">
                        <AlertCircle size={16} className="text-[#E3280C] shrink-0 mt-0.5" />
                        <div>{statusMessage}</div>
                      </div>
                    )}

                    {/* Name & Email in 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-900 mb-1.5 font-bold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex"
                          className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.name ? 'border-[#E3280C]' : 'border-neutral-300 focus:border-[#E3280C]'
                            } text-neutral-950 font-bold placeholder-neutral-400 focus:outline-none transition-all text-sm`}
                        />
                        {errors.name && (
                          <p className="text-[#E3280C] text-xs mt-1 font-mono font-bold">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-900 mb-1.5 font-bold">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alex@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.email ? 'border-[#E3280C]' : 'border-neutral-300 focus:border-[#E3280C]'
                            } text-neutral-950 font-bold placeholder-neutral-400 focus:outline-none transition-all text-sm`}
                        />
                        {errors.email && (
                          <p className="text-[#E3280C] text-xs mt-1 font-mono font-bold">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-900 mb-1.5 font-bold">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message, project idea, or opportunity..."
                        className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.message ? 'border-[#E3280C]' : 'border-neutral-300 focus:border-[#E3280C]'
                          } text-neutral-950 font-bold placeholder-neutral-400 focus:outline-none transition-all text-sm resize-none`}
                      />
                      {errors.message && (
                        <p className="text-[#E3280C] text-xs mt-1 font-mono font-bold">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 px-6 rounded-xl bg-[#E3280C] hover:bg-neutral-950 text-white font-sans font-black text-sm uppercase tracking-wider shadow-md shadow-red-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
