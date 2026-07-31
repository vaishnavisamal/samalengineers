import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import CompanyLogo from './CompanyLogo';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export default function HeroSection({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-[#0a2d47] via-[#1a7abf] to-[#2a9dd4] overflow-hidden text-white">
      {/* Background radial highlight rings matching template benchmark */}
      <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[120%] bg-white/5 rounded-l-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-64 h-64 border border-white/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full"
          >
            <div className="h-4.5 w-4.5 bg-white rounded-full flex items-center justify-center p-0.5 shadow-xs overflow-hidden select-none">
              <CompanyLogo size={16} />
            </div>
            <span className="text-[11px] font-bold tracking-widest text-[#6bbfe0] uppercase">
              Est. 1995 • Pune, Maharashtra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] font-serif"
          >
            Engineering &amp;<br />
            <span className="text-[#6bbfe0] italic font-serif font-normal">Design</span> Solutions<br />
            that Endure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-white/80 font-sans max-w-xl leading-relaxed"
          >
            A multidisciplinary group of Electrical, HVAC, Architecture, Interior Design, Firefighting and Security specialists — delivering complete building and hydro-electro-mechanical utility solutions across Pune and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3.5 bg-white text-[#1a7abf] hover:text-[#0e5a8a] font-bold text-sm rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              Explore Services
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-transparent text-white font-medium text-sm rounded-lg border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>

        {/* Right Column: High Fidelity Stats Bento Card grid from the benchmark */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Prominent Logo Showcase Card */}
            <div className="col-span-full bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-5 hover:bg-white/15 transition-all">
              <div className="h-20 w-20 bg-white rounded-2xl shadow-xl border border-white/20 flex items-center justify-center p-2.5 shrink-0 select-none">
                <CompanyLogo size={64} />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-none">
                  Samal Engineers
                </h3>
                <span className="text-[10px] text-[#6bbfe0] font-bold uppercase tracking-widest block mt-1">
                  Consultancy &amp; Contracting
                </span>
                <p className="text-[11px] text-white/70 leading-relaxed pt-1.5 font-sans">
                  Proprietary engineering expertise delivering world-class HVAC, electrical, and architectural installations since 1995.
                </p>
              </div>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/13 transition-colors">
              <span className="block text-4xl lg:text-[42px] font-bold text-white font-serif leading-none">30+</span>
              <span className="text-xs text-white/60 mt-2 block font-sans font-medium uppercase tracking-wide leading-relaxed">
                Years of execution experience
              </span>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/13 transition-colors">
              <span className="block text-4xl lg:text-[42px] font-bold text-white font-serif leading-none">230+</span>
              <span className="text-xs text-white/60 mt-2 block font-sans font-medium uppercase tracking-wide leading-relaxed">
                Prestigious projects delivered
              </span>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/13 transition-colors">
              <span className="block text-4xl lg:text-[42px] font-bold text-white font-serif leading-none">7</span>
              <span className="text-xs text-white/60 mt-2 block font-sans font-medium uppercase tracking-wide leading-relaxed">
                Core service disciplines
              </span>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/13 transition-colors">
              <span className="block text-4xl lg:text-[42px] font-bold text-white font-serif leading-none">25+</span>
              <span className="text-xs text-white/60 mt-2 block font-sans font-medium uppercase tracking-wide leading-relaxed">
                Years of team expertise
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
