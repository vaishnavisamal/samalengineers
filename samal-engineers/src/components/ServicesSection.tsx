import React, { useState } from 'react';
import { Zap, Wind, Shield, Droplet, Grid, CheckCircle2, FileText, Compass, ChevronDown, ChevronUp } from 'lucide-react';
import { Service } from '../types';
import { companyServices } from '../data/companyData';
import { motion, AnimatePresence } from 'motion/react';
import EstimatorTool from './EstimatorTool';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>('electrical');
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="size-5" />;
      case 'Wind': return <Wind className="size-5" />;
      case 'Shield': return <Shield className="size-5" />;
      case 'Droplet': return <Droplet className="size-5" />;
      case 'Grid': return <Grid className="size-5" />;
      default: return <Compass className="size-5" />;
    }
  };

  const activeService = companyServices.find(s => s.id === selectedService) || companyServices[0];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100/30">
            Our Domain Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight mt-3">
            Multi-Disciplinary Engineering &amp; Strategic Advisory
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
            Rendering meticulous designs and Turnkey contracting consulting in Hydro-Electro-Mechanical (MEPH) Utilities across Maharashtra.
          </p>
        </div>

        {/* Dynamic Service selection Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {companyServices.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <button
                key={service.id}
                id={`btn-service-${service.id}`}
                onClick={() => {
                  setSelectedService(service.id);
                  setExpandedSection(0); // auto-expand first section of new service
                }}
                className={`flex flex-col items-center md:items-start p-4 rounded-xl border text-center md:text-left transition-all duration-200 cursor-pointer btn-premium-interactive ${
                  isSelected
                    ? 'bg-indigo-600 border-indigo-605 text-white shadow-lg shadow-indigo-100'
                    : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-100 hover:border-slate-350'
                }`}
              >
                <div className={`p-2 rounded-lg mb-2.5 ${isSelected ? 'bg-indigo-505 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {getIcon(service.icon)}
                </div>
                <span className="text-xs font-bold leading-tight block truncate w-full">
                  {service.title.split(' & ')[0]}
                </span>
                <span className="text-[10px] hidden md:block opacity-75 mt-1 block truncate w-full">
                  {service.shortDesc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Detailed specifications column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
              <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
                DETAILED COMPLIANCE &amp; PRACTICE SPECIFICATIONS
              </span>
              <h3 className="text-2xl font-black tracking-tight mt-1">{activeService.title}</h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {activeService.shortDesc}
              </p>
            </div>

            <div className="space-y-3">
              {activeService.details.map((detail, idx) => {
                const isExpanded = expandedSection === idx;
                return (
                  <div
                    key={idx}
                    id={`service-detail-card-${idx}`}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors"
                  >
                    <button
                      id={`btn-expand-detail-${idx}`}
                      onClick={() => setExpandedSection(isExpanded ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-slate-800 hover:bg-slate-100/60 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-indigo-600 font-mono text-sm">0{idx + 1}.</span>
                        <span className="text-sm md:text-base">{detail.title}</span>
                      </div>
                      <div className="text-slate-400">
                        {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 border-t border-slate-200/60 bg-white">
                            {/* Standard code compliance tag */}
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-800 bg-amber-50 shrink-0 w-max px-2.5 py-0.5 rounded-full mt-3 mb-4">
                              <FileText className="size-3 text-amber-700" />
                              <span>{detail.basis}</span>
                            </div>

                            <ul className="space-y-2.5">
                              {detail.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                                  <CheckCircle2 className="size-4 shrink-0 text-indigo-500 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick specs / sidebar column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/80 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              {/* Service Relevant Visual Image */}
              <div className="relative rounded-xl overflow-hidden h-44 shadow-inner bg-slate-200 group border border-slate-200">
                <img
                  src={
                    selectedService === 'electrical'
                      ? 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
                      : selectedService === 'hvac'
                      ? 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80'
                      : selectedService === 'firefighting'
                      ? 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80'
                      : selectedService === 'plumbing'
                      ? 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80'
                      : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
                  }
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-bold text-white bg-blue-600/90 backdrop-blur-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {selectedService === 'electrical'
                      ? 'HT & LT Grid Substation Wiring'
                      : selectedService === 'hvac'
                      ? 'VRV VRF Central Cooling & Vent'
                      : selectedService === 'firefighting'
                      ? 'CCTV & Fire Containment Systems'
                      : selectedService === 'plumbing'
                      ? 'Sanitary & Environmental Hydraulics'
                      : 'Architectural PMC & Corporate Interiors'}
                  </span>
                </div>
              </div>

              <h4 className="text-sm font-extrabold text-slate-900 tracking-wider uppercase border-b border-slate-200 pb-3">
                MEPH Engineering Mandates
              </h4>

              <div className="space-y-4">
                <div className="bg-white border border-slate-150 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full uppercase">
                    IS &amp; NBC Code Alignment
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                    We maintain strict alignment with the <strong>National Building Code (NBC) of India</strong> and State Electricity regulations. This minimizes administrative delays and regulatory audit issues.
                  </p>
                </div>

                <div className="bg-white border border-slate-150 p-4 rounded-xl shadow-xs">
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full uppercase">
                    Execution Fidelity
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                    All cabling setups, duct calculations, and fire Storage sizing undergo validation before site execution. On-site audits check tolerances, preventing post-commission grid tripping or cooling losses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 text-slate-400 text-[11px] leading-relaxed">
              Based at Pune, rendering professional Hydro-Electro-Mechanical consulting services to software centers, industrial areas, banking institutes, and clinics state-wide.
            </div>
          </div>
        </div>

        {/* Insert the premium calculation tool inside services tab view for max contextual value! */}
        <div className="mt-14 border-t border-slate-100 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">Need Initial Load Estimates?</h3>
            <p className="text-xs text-slate-500 mt-1">
              Give your facilities some initial numeric boundaries. Use our digital parameters software matching Pune regional compliance specifications.
            </p>
          </div>
          <EstimatorTool />
        </div>
      </div>
    </section>
  );
}
