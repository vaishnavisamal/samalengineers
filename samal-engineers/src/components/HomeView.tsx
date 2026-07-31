import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Zap, 
  Wind, 
  ShieldAlert, 
  Droplet, 
  Building, 
  CheckCircle2, 
  Layers, 
  Award, 
  Compass, 
  BadgeCheck,
  Building2,
  FileText,
  Phone,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';
import HeroSection from './HeroSection';

// @ts-ignore
import imgGuhring from '../assets/images/project_factory_no_people_1782500195371.jpg';
// @ts-ignore
import imgPersistent from '../assets/images/project_office_no_people_1782500210719.jpg';
// @ts-ignore
import imgTapadia from '../assets/images/project_villa_landscape_1782499783202.jpg';
// @ts-ignore
import imgHonda from '../assets/images/project_car_showroom_1782499796683.jpg';
// @ts-ignore
import imgChildrenClinic from '../assets/images/project_clinic_no_people_1782500223010.jpg';
// @ts-ignore
import imgBankBranch from '../assets/images/project_bank_no_people_1782500234622.jpg';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [activeSection, setActiveActiveSection] = useState<string>('hero');
  const [enquiryStatus, setEnquiryStatus] = useState<string>('');
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });

  // Track scroll position to update active quick navigation dot
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      const sections = [
        { id: 'hero', top: 0 },
        { id: 'services', el: document.getElementById('services') },
        { id: 'clients', el: document.getElementById('clients') },
        { id: 'projects', el: document.getElementById('projects') },
        { id: 'contact', el: document.getElementById('contact') }
      ];

      let current = 'hero';
      for (const sec of sections) {
        if (sec.id === 'hero') continue;
        if (sec.el && sec.el.offsetTop <= scrollY) {
          current = sec.id;
        }
      }
      setActiveActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquiryStatus('Saving');
    setTimeout(() => {
      setEnquiryStatus('Success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        description: ''
      });
    }, 850);
  };

  const services = [
    {
      id: 'electrical',
      title: 'Electrical',
      desc: 'Complete HT & LT electrical design and execution based on IS codes and MSEB rules.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      bullets: [
        'HT & LT line and cable installation',
        'Transformer installation',
        'Industrial & commercial wiring',
        'D.G. set capacity calculation',
        'Tender document preparation',
        'Earthing & lightning protection'
      ],
      icon: <svg className="size-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    },
    {
      id: 'hvac',
      title: 'HVAC',
      desc: 'Heat load calculation, system design and complete air-conditioning solutions as per IS standards.',
      image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80',
      bullets: [
        'Heat load calculation & design',
        'VRV / VRF systems',
        'Detailed drawing & estimation',
        'BOQ preparation',
        'Contractor appointment & monitoring'
      ],
      icon: <svg className="size-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2A9 9 0 0121 11C21 15 18.5 18 15 19.5M12 2A9 9 0 003 11C3 15 5.5 18 9 19.5M12 2v20M3 12h18"/></svg>
    },
    {
      id: 'firefighting',
      title: 'Fire Fighting',
      desc: 'Compliant fire protection systems under National Building Code and Tariff Advisory Committee guidelines.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
      bullets: [
        'External & internal fire hydrant',
        'Wet riser cum Downcomer',
        'Sprinkler & spray systems',
        'Fire storage tank & pump room'
      ],
      icon: <svg className="size-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    },
    {
      id: 'architecture',
      title: 'Architecture',
      desc: 'Creative and functional architectural design from residential bungalows to large commercial complexes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      bullets: [
        'Residential & commercial design',
        'Factory renovation & planning',
        'School & hospital design',
        'Project management consultancy'
      ],
      icon: <svg className="size-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22V12h6v10"/></svg>
    },
    {
      id: 'interior',
      title: 'Interior Design',
      desc: 'Thoughtful, bespoke interior solutions for residential, corporate and hospitality spaces.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      bullets: [
        'Residential flat & bungalow interiors',
        'Office & corporate workspaces',
        'Clinic & hospitality interiors',
        'Kitchen, bedroom & living areas'
      ],
      icon: <svg className="size-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    },
    {
      id: 'security',
      title: 'Security & Networking',
      desc: 'Complete surveillance, access control and data networking infrastructure for modern buildings.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      bullets: [
        'CCTV & surveillance systems',
        'Access control & fire alarms',
        'Structured data networking',
        'AMC & maintenance services'
      ],
      icon: <svg className="size-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path strokeLinecap="round" d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
    }
  ];

  const clients = [
    "Persistent Systems Ltd", "Affinity Express India", "Guhring India Ltd", "Tox Pressotechnik",
    "Bajaj Allianz", "Bharat Forge Ltd", "Hotel Taj Blue Diamond", "Hotel The Pride",
    "Ruby Hall Hospital", "Aditya Birla Hospital", "Bharti Airtel Ltd", "BMS Software Ltd",
    "Veritas Software", "Ernst & Young", "Sandvik Asia", "Godrej",
    "Saraswat Bank", "SBI Bank", "ICICI Bank", "St. Andrews Academy",
    "Geometric SDRC", "Imagination Technologies", "Tata Blue Scope", "NCL Pashan"
  ];

  const projects = [
    {
      title: "Guhring India Ltd, Pirangut",
      category: "Industrial",
      scale: "Factory Renovation (6,000 sq.ft.)",
      desc: "Complete factory renovation — design, execution & interiors for the German precision tools manufacturer.",
      bg: "#0F6E56",
      tagBg: "#E1F5EE",
      tagText: "#0F6E56",
      image: imgGuhring
    },
    {
      title: "Persistent Systems Ltd, Pune",
      category: "Commercial",
      scale: "HVAC & Electrical Consultancy",
      desc: "HVAC (VRV) and electrical consultancy for the leading software company's Pune office campus.",
      bg: "#185FA5",
      tagBg: "#E6F1FB",
      tagText: "#185FA5",
      image: imgPersistent
    },
    {
      title: "Mr. Tapadia, Vijaynagar Dhayari",
      category: "Residential",
      scale: "1.6-Acre Landscaping Design",
      desc: "1.6-acre landscape design and project management consultancy for premium residential property.",
      bg: "#3B6D11",
      tagBg: "#EAF3DE",
      tagText: "#3B6D11",
      image: imgTapadia
    },
    {
      title: "Mr. Rohit Shah, Baramati",
      category: "Commercial",
      scale: "Honda Showroom Complex (20,000 sq.ft.)",
      desc: "Honda showroom combined with residential scheme — 20,000 sq.ft. integrated layout.",
      bg: "#BA7517",
      tagBg: "#FAEEDA",
      tagText: "#BA7517",
      image: imgHonda
    },
    {
      title: "Dr. Gojumgunde, Latur",
      category: "Healthcare",
      scale: "Modern Children's Clinic",
      desc: "Full architectural design and execution for a modern medical center at Latur.",
      bg: "#993C1D",
      tagBg: "#FAECE7",
      tagText: "#993C1D",
      image: imgChildrenClinic
    },
    {
      title: "Multiple Bank Branches, Maharashtra",
      category: "Security & AMC",
      scale: "20+ Bank Branches Setup",
      desc: "Fire alarm, CCTV & security system installation and annual maintenance contracting.",
      bg: "#3C3489",
      tagBg: "#EEEDFE",
      tagText: "#3C3489",
      image: imgBankBranch
    }
  ];

  const team = [
    {
      name: "Mr. A. K. Vaidya",
      desc: "B.E. (Electrical), Retd. S.E. MSEB — Consultant across multiple industry verticals"
    },
    {
      name: "Mr. M. K. Karandikar",
      desc: "M.Tech (IIT Powai) Electrical Engg. — 25+ years in design & execution"
    },
    {
      name: "Ar. Anand Gandle",
      desc: "B.Arch Pune, DIDD Interior Designer — Architecture & interior consultancy"
    },
    {
      name: "Mr. Amar R. Samal",
      desc: "18+ years in execution of Electrical, HT/LT, Networking & Security systems"
    }
  ];

  return (
    <div className="relative bg-white font-sans text-brand-dark selection:bg-brand-blue-pale selection:text-[#0e5a8a]">
      
      {/* QUICK NAV SIDEBAR */}
      <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-[1000] flex-col gap-3.5">
        {[
          { id: 'hero', label: 'Home' },
          { id: 'services', label: 'Services' },
          { id: 'clients', label: 'Clients' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' }
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="flex items-center gap-0 relative group text-left cursor-pointer border-0 bg-transparent outline-none"
            >
              <span className={`w-3.5 h-3.5 rounded-full border-2 border-brand-blue transition-all duration-300 ${
                isActive ? 'bg-brand-blue scale-125' : 'bg-transparent hover:bg-brand-blue/30'
              }`} />
              <span className="absolute left-6 bg-brand-blue text-white text-[11px] font-bold px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* HERO SECTION */}
      <div id="hero">
        <HeroSection onNavigate={(tab) => {
          if (tab === 'services') handleScrollTo('services');
          else if (tab === 'contact') handleScrollTo('contact');
          else onNavigate(tab);
        }} />
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#e4e8ed]">
        <div className="text-left space-y-4 mb-16">
          <span className="inline-block text-[11px] font-bold tracking-widest text-[#1a7abf] bg-[#e6f4fb] px-4 py-1.5 rounded-full uppercase">
            What we do
          </span>
          <h2 className="text-3xl lg:text-[42px] font-bold text-brand-dark tracking-tight leading-none font-serif">
            Integrated Building Services
          </h2>
          <p className="text-sm font-sans text-brand-gray max-w-2xl leading-relaxed">
            From concept to commissioning — we bring together specialist teams across every discipline your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-brand-gray-mid rounded-xl overflow-hidden hover:border-brand-blue-mid hover:-translate-y-1 transition-all duration-300 relative group hover:shadow-xl hover:shadow-brand-blue/5 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#1a7abf] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              
              {/* Premium relevant service image banner */}
              <div className="h-44 w-full relative overflow-hidden bg-slate-100 border-b border-brand-gray-mid">
                <img 
                  src={(service as any).image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Overlapping icon block */}
                  <div className="w-12 h-12 bg-[#e6f4fb] rounded-xl flex items-center justify-center mb-5 -mt-14 relative z-10 border-2 border-white shadow-md">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-normal mb-5">
                    {service.desc}
                  </p>
                </div>
                
                <ul className="space-y-2 border-t border-brand-gray-mid/60 pt-4 mt-auto">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-[11.5px] text-[#555] flex items-start gap-1.5 leading-relaxed">
                      <span className="text-[#1a7abf] font-mono leading-none">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-24 max-w-7xl mx-auto px-6 border-b border-[#e4e8ed]">
        <div className="text-left space-y-4 mb-16">
          <span className="inline-block text-[11px] font-bold tracking-widest text-[#1a7abf] bg-[#e6f4fb] px-4 py-1.5 rounded-full uppercase">
            Our clients
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-brand-dark tracking-tight leading-none font-serif">
            Trusted by Leading Organisations
          </h2>
          <p className="text-sm font-sans text-brand-gray max-w-2xl leading-normal">
            From IT parks and banks to hospitals and hotels — our portfolio spans diverse sectors across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white border border-brand-gray-mid rounded-lg p-5 font-semibold text-xs text-brand-gray text-center hover:border-brand-blue-mid hover:text-[#1a7abf] hover:bg-[#e6f4fb] transition-all duration-200"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-brand-gray-light border-b border-[#e4e8ed]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left space-y-4 mb-16">
            <span className="inline-block text-[11px] font-bold tracking-widest text-[#1a7abf] bg-[#e6f4fb] px-4 py-1.5 rounded-full uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold text-brand-dark tracking-tight leading-none font-serif">
              Selected Projects
            </h2>
            <p className="text-sm font-sans text-brand-gray max-w-2xl leading-normal">
              A snapshot of the diverse projects completed and currently in progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white border border-brand-gray-mid rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-[9px] font-extrabold tracking-widest text-white uppercase px-2.5 py-1 rounded shadow-xs"
                        style={{ backgroundColor: project.bg }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-brand-dark hover:text-[#1a7abf] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-brand-gray leading-relaxed h-[52px] line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brand-gray-mid/60 flex items-center justify-between text-[10.5px]">
                    <span className="font-semibold text-brand-gray">
                      Scale: {project.scale}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CONTACT */}
      <section id="contact" className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Contact Details Block */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div className="space-y-4">
                <span className="inline-block text-[11px] font-bold tracking-widest text-brand-blue-mid bg-white/10 px-4 py-1.5 rounded-full uppercase">
                  Get in touch
                </span>
                <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight leading-none font-serif text-white">
                  Let's Build Something Together
                </h2>
                <p className="text-xs text-white/60 leading-relaxed font-sans max-w-sm">
                  Tell us about your project and we&apos;ll get back to you within one business day.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/10">
                
                <div className="flex gap-4 items-start">
                  <div className="size-11 rounded-lg bg-white/80 flex items-center justify-center shrink-0">
                    <svg className="size-5 text-brand-blue-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-0.5">Address</h4>
                    <p className="text-xs text-white font-sans leading-normal">
                      480, Guruwar Peth<br />Pune – 411 042, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-11 rounded-lg bg-white/80 flex items-center justify-center shrink-0">
                    <svg className="size-5 text-brand-blue-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-0.5">Phone</h4>
                    <p className="text-xs text-white font-sans leading-normal">
                      +91 98607 99787
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-11 rounded-lg bg-white/80 flex items-center justify-center shrink-0">
                    <svg className="size-5 text-brand-blue-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-0.5">Email</h4>
                    <p className="text-xs text-white font-sans leading-normal">
                      samal_engineers2004@yahoo.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-11 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg className="size-5 text-white fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L0 24l6.562-1.371A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.395l-.37-.22-3.896.815.823-3.787-.24-.39A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#25D366] mb-0.5">WhatsApp</h4>
                    <p className="text-xs font-sans leading-normal">
                      <a 
                        href="https://wa.me/919860799787?text=Hello%20Samal%20Engineers%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#5DCAA5] hover:underline font-bold text-xs"
                      >
                        Chat with us on WhatsApp ↗
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Contact Form Interactive Block */}
            <div className="lg:col-span-1" /> {/* Spacer */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-xl p-8 lg:p-10 w-full">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 flex flex-col">
                    <label className="text-slate-400 text-xs font-medium">First name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Rajesh" 
                      required
                      className="bg-white/5 border border-white/15 rounded-lg p-3 text-xs text-white placeholder-white/30 focus:border-brand-blue-mid focus:bg-white/10 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 flex flex-col">
                    <label className="text-slate-400 text-xs font-medium">Last name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Sharma" 
                      required
                      className="bg-white/5 border border-white/15 rounded-lg p-3 text-xs text-white placeholder-white/30 focus:border-brand-blue-mid focus:bg-white/10 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label className="text-slate-400 text-xs font-medium">Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rajesh@company.com" 
                    required
                    className="bg-white/5 border border-white/15 rounded-lg p-3 text-xs text-white placeholder-white/30 focus:border-brand-blue-mid focus:bg-white/10 outline-none w-full transition-colors"
                  />
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label className="text-slate-400 text-xs font-medium">Phone number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98000 00000" 
                    required
                    className="bg-white/5 border border-white/15 rounded-lg p-3 text-xs text-white placeholder-white/30 focus:border-brand-blue-mid focus:bg-white/10 outline-none w-full transition-colors"
                  />
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label className="text-slate-400 text-xs font-medium">Service required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border border-white/15 rounded-lg p-3 text-xs text-white focus:border-brand-blue-mid outline-none w-full select-dark-options transition-all"
                  >
                    <option className="bg-[#1a1a1a]" value="">Select a service</option>
                    <option className="bg-[#1a1a1a]" value="Electrical">Electrical</option>
                    <option className="bg-[#1a1a1a]" value="HVAC">HVAC</option>
                    <option className="bg-[#1a1a1a]" value="Fire Fighting">Fire Fighting</option>
                    <option className="bg-[#1a1a1a]" value="Architecture">Architecture</option>
                    <option className="bg-[#1a1a1a]" value="Interior Design">Interior Design</option>
                    <option className="bg-[#1a1a1a]" value="Security & Networking">Security & Networking</option>
                    <option className="bg-[#1a1a1a]" value="Plumbing">Plumbing</option>
                    <option className="bg-[#1a1a1a]" value="Multiple Services">Multiple Services</option>
                  </select>
                </div>

                <div className="space-y-1.5 flex flex-col">
                  <label className="text-slate-400 text-xs font-medium">Project description</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your project — location, size, requirements…" 
                    required
                    className="bg-white/5 border border-white/15 rounded-lg p-3 text-xs text-white placeholder-white/30 focus:border-brand-blue-mid focus:bg-white/10 outline-none h-28 resize-y w-full transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1a7abf] hover:bg-brand-blue-light text-white font-bold p-3.5 rounded-lg text-xs tracking-wide cursor-pointer transition-colors"
                >
                  {enquiryStatus === 'Saving' ? 'Sending Enquiry...' : 'Send Enquiry →'}
                </button>

                {enquiryStatus === 'Success' && (
                  <p className="text-xs text-emerald-400 text-center font-semibold pt-2">
                    Thank you! We will contact you shortly.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
