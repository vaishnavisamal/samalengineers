import React, { useState } from 'react';
import { Menu, X, Zap, Phone, Mail, Clock, ShieldCheck, ChevronUp, Compass, ArrowUpRight, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HomeView from './components/HomeView';
import CompanyLogo from './components/CompanyLogo';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Estimators' },
    { id: 'team', label: 'Our Specialists' },
    { id: 'portfolio', label: 'Portfolio & Clients' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView onNavigate={(tab) => handleTabChange(tab)} />;
      case 'services':
        return <ServicesSection />;
      case 'team':
        return <TeamSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeView onNavigate={(tab) => handleTabChange(tab)} />;
    }
  };

  return (
    <div id="samal-engineers-app" className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      
      {/* Main sticky Navigation bar with frosted glass accent */}
      <header id="main-header" className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-lg border-b border-slate-200/60 shadow-3xs transition-shadow">
        <div className="max-w-7xl mx-auto px-6 h-18 py-3 flex items-center justify-between">
          
          {/* Brand Identity */}
          <button
            id="brand-logo-trigger"
            onClick={() => handleTabChange('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            {/* Real high-fidelity official logo representing brand identity updated from PDF */}
            <CompanyLogo size={44} className="cursor-pointer group-hover:scale-105 transition-transform shrink-0" />
            <div className="leading-tight select-none">
              <h1 className="text-xl font-serif font-bold text-slate-900 tracking-tight transition-colors">
                <span className="text-[#1a7abf]">S</span>amal <span className="text-[#1a7abf]">E</span>ngineers
              </h1>
              <span className="text-[9.5px] text-slate-500 font-bold uppercase tracking-[0.22em] block mt-0.5 font-sans">
                Consultancy &amp; Contracting
              </span>
            </div>
          </button>

          {/* Desktop Navigation Link buttons */}
          <nav className="hidden lg:flex items-center gap-1.5 list-none">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    id={`nav-link-${item.id}`}
                    onClick={() => handleTabChange(item.id)}
                    className={`px-4 py-2.5 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                      isActive
                        ? 'bg-blue-50/90 text-blue-600 border border-blue-100/50 shadow-3xs font-bold'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/50 font-semibold'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </nav>

          {/* Call-to-action button */}
          <div className="hidden lg:block">
            <button
              id="header-cta-quote"
              onClick={() => handleTabChange('contact')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer flex items-center gap-1 btn-premium-interactive"
            >
              Get Free Assessment
              <ArrowUpRight className="size-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="block lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down navigation drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-slate-200/50 overflow-hidden bg-slate-50/95 backdrop-blur-md absolute top-18 left-0 right-0 z-30 shadow-lg block lg:hidden"
            >
              <div className="py-4 px-6 space-y-2">
                {navigationItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full text-left p-3 text-xs font-bold rounded-xl transition-all ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 border-t border-slate-200 mt-2">
                  <button
                    id="mobile-header-cta"
                    onClick={() => handleTabChange('contact')}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl text-center shadow-md shadow-blue-100 flex items-center justify-center gap-1"
                  >
                    Get Free Assessment
                    <ArrowUpRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Primary Dynamic Content Screen */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {getActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Standard Corporate Footer */}
      <footer id="main-footer" className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & short company credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white rounded-lg shadow-sm border border-slate-800 flex items-center justify-center shrink-0">
                <CompanyLogo size={36} />
              </div>
              <div className="leading-tight select-none">
                <span className="text-white font-serif font-bold text-base block">
                  <span className="text-[#2a9dd4]">S</span>amal <span className="text-[#2a9dd4]">E</span>ngineers
                </span>
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em] block mt-0.5">
                  Consultancy &amp; Contracting
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs">
              Meticulous engineering design and Turnkey contracting consultancy based at Pune. Built on theoretical mastery, multi-domain alignment, and 30 years of execution fidelity.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/amar-samal"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-slate-800 hover:bg-[#0077b5] text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-transparent"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="size-4 fill-current" />
              </a>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-2">
              ESTD. 1995 • PUNE, MH
            </div>
          </div>

          {/* Quick Nav directory */}
          <div>
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider mb-4">
              Website Fast Directory
            </h4>
            <ul className="space-y-2 text-[11px]">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-dir-link-${item.id}`}
                    onClick={() => handleTabChange(item.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Sizing standards parameters */}
          <div>
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider mb-4">
              Compliance Alignments
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>• National Building Code (NBC) of India</li>
              <li>• ASHRAE Heat Load parameters</li>
              <li>• IS Sizing Standard Guidelines</li>
              <li>• State Electricity Board (MSEB) rules</li>
              <li>• Tariff Advisory Committee (TAC) Rules</li>
            </ul>
          </div>

          {/* Pune Site Core details */}
          <div className="space-y-4">
            <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wider mb-2">
              Representative Office
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              480, Guruwar Peth,<br />
              Pune - 411042,<br />
              Maharashtra, India.
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              Tel: +91-9860799787 
            </p>
          </div>
        </div>

        {/* Back to top/Sub-footer */}
        <div className="border-t border-slate-800 py-6 px-6 bg-slate-950/40 text-slate-500 text-[10px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p>
              Copyright &copy; {new Date().getFullYear()} Samal Engineers. All rights reserved. Registered proprietary consulting entity state of Maharashtra.
            </p>

            <button
              id="scroll-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              Scroll To Top
              <ChevronUp className="size-3" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Active Communication Nodes */}
      <WhatsAppWidget />

    </div>
  );
}
