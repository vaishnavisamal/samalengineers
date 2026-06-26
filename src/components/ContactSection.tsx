import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, FileCheck, Check, Clock, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Electrical Sizing',
    loadArea: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    // Animate successful state
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Electrical Sizing',
      loadArea: '',
      comments: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Left block */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100/30">
                Reach Out Today
              </span>
              <h2 className="text-3xl font-black text-indigo-950 tracking-tight mt-3">
                Establish Connection
              </h2>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                Connect with Mr. Amar Samal and our principal engineering consultants for full-scale corporate, commercial, or industrial project assessments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white border border-slate-150 rounded-2xl flex gap-4 items-start shadow-2xs">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                    REPRESENTATIVE HEADQUARTERS
                  </span>
                  <p className="text-sm font-bold text-slate-800 mt-1">
                    480, Guruwar Peth, Pune - 411042
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-150 rounded-2xl flex gap-4 items-start shadow-2xs">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                    TELECOMMUNICATIONS
                  </span>
                  <p className="text-sm font-bold text-slate-800 mt-1 flex flex-wrap gap-x-1.5">
                    <span>+91-9860799787</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Mon - Sat (09:00 AM - 07:00 PM)
                  </p>
                </div>
              </div>

              {/* Directly requested High-Visibility WhatsApp Click-to-Chat Service Card */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex gap-4 items-start shadow-2xs hover:shadow-xs transition-shadow">
                <div className="p-2.5 bg-emerald-600 text-white rounded-xl shrink-0">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.415 1.258 4.864l-1.127 4.12 4.22-1.107c1.405.766 3.003 1.2 4.637 1.2 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.721 14.193c-.207.585-1.012 1.134-1.638 1.255-.562.112-1.295.207-3.791-.827-3.189-1.321-5.234-4.568-5.393-4.781-.16-.213-1.282-1.705-1.282-3.251 0-1.546.808-2.308 1.096-2.611.288-.303.628-.378.835-.378.207 0 .415.004.595.012.189.008.441-.072.693.535.257.621.881 2.147.957 2.304.076.157.125.34.02.553-.104.213-.157.345-.313.528-.157.182-.329.406-.471.545-.16.157-.329.329-.141.653.189.32 1.341 2.213 2.87 3.576 1.157 1.029 2.133 1.349 2.453 1.48.32.131.503.111.693-.104.189-.214.811-.945 1.027-1.272.216-.327.433-.272.73-.162.297.109 1.881.887 2.203 1.047.322.16.537.24.615.375.078.135.078.784-.129 1.369z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="block text-[10px] text-emerald-800 font-bold uppercase tracking-wider font-mono">
                      DIRECT WHATSAPP MESSENGER
                    </span>
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-100/85 text-emerald-800 rounded-full font-bold uppercase shrink-0">
                      Primary Helpline
                    </span>
                  </div>
                  <a
                    href="https://wa.me/919860799787?text=Hello%20Samal%20Engineers%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20engineering%20consultancy%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    id="link-whatsapp-direct"
                    className="text-base font-black text-slate-900 hover:text-emerald-700 transition-colors mt-1 block flex items-center gap-1.5"
                  >
                    +91-9860799787
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-100 px-1.5 py-0.5 rounded text-center">
                      CLICK TO CHAT
                    </span>
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                    Message regarding electrical heat loads, load parameters, or bidding invitations. Instantly consults with Principal Engineer Amar Samal.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-150 rounded-2xl flex gap-4 items-start shadow-2xs">
                <div className="p-2.5 bg-blue-50 text-blue-750 rounded-lg shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                    SECURE MAILS
                  </span>
                  <a
                    href="mailto:samal_engineers2004@yahoo.com"
                    id="link-corp-email"
                    className="text-sm font-bold text-blue-600 hover:underline mt-1 block"
                  >
                    samal_engineers2004@yahoo.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Response time within 24 hours
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50/30 border border-blue-100 rounded-2xl flex gap-4 items-start shadow-2xs hover:bg-blue-50/50 transition-colors">
                <div className="p-2.5 bg-[#0077b5] text-white rounded-lg shrink-0">
                  <Linkedin className="size-5 fill-current" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                    PROFESSIONAL NETWORK
                  </span>
                  <a
                    href="https://www.linkedin.com/in/amar-samal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-slate-900 hover:text-blue-700 hover:underline mt-1 block flex items-center gap-1.5"
                  >
                    linkedin.com/in/amar-samal
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Principal Consultant Profile
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/40 p-4 rounded-xl flex gap-3 items-center text-amber-900 text-xs">
              <Clock className="size-4 text-amber-700 shrink-0" />
              <span>
                <strong>Convert to Pvt. Ltd:</strong> Samal Engineers is currently undergoing a strategic structural transition from a proprietary consult to a Private Limited entity.
              </span>
            </div>
          </div>

          {/* Interactive Form Right block */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 lg:p-8 rounded-2xl shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900">Consultation Request Submission</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Provide parameters to request an official compliance site visit.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Mr. Amol Rane"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. amol.rane@guhring.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Cell Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="e.g. +91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Select Relevant Service
                      </label>
                      <select
                        id="contact-service-dropdown"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-500 bg-white outline-none transition-all"
                      >
                        <option>Electrical HT/LT contracting</option>
                        <option>HVAC Sizing & Duct engineering</option>
                        <option>Firefighting / Alarm setup</option>
                        <option>Hydraulic Plumbing setup</option>
                        <option>Workspace Interior Design</option>
                        <option>General consultation inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Corporate Site Area (approx. Sq.Ft. if relevant)
                    </label>
                    <input
                      id="contact-area"
                      type="text"
                      placeholder="e.g. 15,000 sq ft factory floor"
                      value={formData.loadArea}
                      onChange={(e) => setFormData({ ...formData, loadArea: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Brief project specification comments
                    </label>
                    <textarea
                      id="contact-comments"
                      rows={3}
                      placeholder="Explain your electrical grid, heat load requirements or interior scope..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-slate-200 rounded-lg focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md cursor-pointer transition-all flex items-center justify-center gap-2 btn-premium-interactive"
                  >
                    <Send className="size-3.5" />
                    Submit Request to Principal Executor
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="size-16 bg-emerald-100 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <Check className="size-8" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Proposal Request Allocated</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you, {formData.name}. Your specifications representing <strong>{formData.serviceType}</strong> have been logged successfully.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left space-y-1 text-[11px] text-slate-600">
                    <span className="font-bold text-slate-800 uppercase block mb-1">RECORD COPIES LOGGED:</span>
                    <p>• <strong>Sender Name:</strong> {formData.name}</p>
                    <p>• <strong>Corporate Email:</strong> {formData.email}</p>
                    <p>• <strong>Site Area Parameter:</strong> {formData.loadArea || "Not specified"}</p>
                    <p>• <strong>Selected Domain:</strong> {formData.serviceType}</p>
                  </div>

                  <div className="pt-4">
                    <button
                      id="contact-reset"
                      onClick={handleReset}
                      className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                    >
                      Submit Another Site Request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
