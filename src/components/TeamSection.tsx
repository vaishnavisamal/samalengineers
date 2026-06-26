import React, { useState } from 'react';
import { GraduationCap, Award, Briefcase, ChevronRight, User2, ShieldAlert, CheckCircle2, Star, Clock, Linkedin, Github } from 'lucide-react';
import { companyMembers } from '../data/companyData';
import { Member } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function TeamSection() {
  const [selectedId, setSelectedId] = useState<string>('amar-samal');

  const selectedMember = companyMembers.find(m => m.id === selectedId) || companyMembers[0];

  // Calculate combined experience securely (18+25+35+22+13+15 = 128)
  const totalCombinedExperience = 128;

  return (
    <section id="team-experience-section" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Header with aggregate team metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100/50 px-3.5 py-1.5 rounded-full inline-block">
              ENGINEERING CREDENTIALS &amp; FIELD EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight mt-3">
              The Collective Intellect of Seasoned Consultants
            </h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed font-sans">
              We coordinate theoretical engineering excellence from premier institutions (like IIT Powai) with heavy, hands-on industrial contracting experience across Pune.
            </p>
          </div>

          {/* Quick Stats Summary Card Widget */}
          <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl shadow-3xs flex items-center gap-4 shrink-0 lg:max-w-xs w-full lg:w-auto">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
              <Clock className="size-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider font-mono">
                COMBINED DEPLOYED AUTHORITY
              </span>
              <span className="text-2xl font-black text-slate-900 leading-tight block mt-0.5">
                {totalCombinedExperience}+ Years
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                Of Pune Site-Level Executions
              </span>
            </div>
          </div>
        </div>

        {/* Multi-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Professional Selector Column with Inline Experience pill badges */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="flex items-center justify-between px-1 mb-2">
              <h4 className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                SELECT PROFESSIONAL PROFILE
              </h4>
              <span className="text-[9px] font-bold text-slate-400">
                {companyMembers.length} Core Advisors
              </span>
            </div>
            
            <div className="space-y-2">
              {companyMembers.map((member) => {
                const isSelected = selectedId === member.id;
                return (
                  <button
                    key={member.id}
                    id={`btn-team-select-${member.id}`}
                    onClick={() => setSelectedId(member.id)}
                    className={`w-full flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer btn-premium-interactive ${
                      isSelected
                        ? 'bg-white border-blue-600 shadow-md shadow-blue-50/50 text-slate-900'
                        : 'bg-white/80 border-slate-200/70 text-slate-600 hover:bg-slate-50 hover:border-slate-350'
                    }`}
                  >
                    {/* Compact initial circle */}
                    <div className={`size-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-150 text-slate-500'
                    }`}>
                      {member.name.replace('Mr. ', '').replace('Arc. ', '').replace('Ar. ', '').charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="text-xs font-black text-slate-900 block truncate">
                          {member.name}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.5 font-bold rounded-md shrink-0 uppercase tracking-tight font-mono ${
                          isSelected ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {member.experience.replace(' Experience', '')}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Premium Experienced Profile Detail Canvas Card Panel */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-xs relative min-h-[500px] flex flex-col justify-between overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 size-48 bg-radial-gradient from-blue-50/50 to-transparent pointer-events-none -mr-16 -mt-16 rounded-full" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 relative z-10"
              >
                {/* Header card info with large professional title */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs shrink-0">
                      <User2 className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-black text-slate-900 tracking-tight leading-tight">
                        {selectedMember.name}
                      </h3>
                      <div className="flex items-center gap-2.5 mt-1 flex-wrap">
                        <span className="text-xs font-bold text-blue-600">
                          {selectedMember.role}
                        </span>
                        {selectedMember.linkedin && (
                          <a
                            href={selectedMember.linkedin.startsWith('http') ? selectedMember.linkedin : `https://${selectedMember.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0077b5] hover:text-[#005582] hover:bg-[#0077b5]/10 bg-[#0077b5]/5 border border-[#0077b5]/20 px-2 py-0.5 rounded-md transition-colors duration-150"
                          >
                            <Linkedin className="size-3" />
                            LinkedIn
                          </a>
                        )}
                        {selectedMember.github && (
                          <a
                            href={selectedMember.github.startsWith('http') ? selectedMember.github : `https://${selectedMember.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-700 hover:text-black hover:bg-slate-100 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md transition-colors duration-150"
                          >
                            <Github className="size-3" />
                            GitHub
                          </a>
                        )}
                      </div>
                      {selectedMember.keyMilestone && (
                        <p className="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block font-medium mt-1">
                          ★ {selectedMember.keyMilestone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Mega-Sized Experience Indicator Widget */}
                  <div className="bg-slate-900 text-white px-5 py-4 rounded-xl text-center self-start md:self-auto min-w-[130px] shrink-0 border border-slate-800 shadow-sm relative">
                    <span className="text-[8px] text-slate-400 font-extrabold uppercase tracking-widest block font-mono">
                      SENIORITY LEVEL
                    </span>
                    <span className="text-3xl font-black text-indigo-400 block tracking-tight leading-tight mt-1">
                      {selectedMember.experience}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold block mt-0.5">
                      Consulting History
                    </span>
                  </div>
                </div>

                {/* Narrative Biography segment */}
                <div>
                  <h4 className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">
                    BIOGRAPHICAL PROFILE
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans font-medium">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Custom Split Grid showing Credentials & Project Fieldwork details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  
                  {/* Credentials Module */}
                  <div className="bg-slate-50/80 border border-slate-200/60 p-4.5 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-indigo-600 uppercase flex items-center gap-1.5 mb-3">
                        <GraduationCap className="size-4 text-indigo-500" />
                        Credentials &amp; Education
                      </span>
                      <ul className="space-y-2.5">
                        {selectedMember.qualifications.map((qual, qIdx) => (
                          <li key={qIdx} className="text-[11px] text-slate-600 leading-normal flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-indigo-500 shrink-0 mt-0.5" />
                            <span className="font-medium">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational execution Focus Area */}
                  <div className="bg-slate-50/80 border border-slate-200/60 p-4.5 rounded-xl">
                    <span className="text-[10px] font-black tracking-widest text-emerald-700 uppercase flex items-center gap-1.5 mb-3">
                      <Award className="size-4 text-emerald-600" />
                      Key Safety Focus Areas
                    </span>
                    <ul className="space-y-2.5 text-[11px] text-slate-600 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>IS Codes, NBC guidelines &amp; local IE Rules compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Rigorous pre-commissioning testing to ensure safety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Zero-tolerance layout auditing preventing execution failures</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Highly Visible Deployed Field Work Milestones Section */}
                {selectedMember.detailedExperience && selectedMember.detailedExperience.length > 0 && (
                  <div className="p-4 bg-indigo-50/30 border border-indigo-100/60 rounded-xl mt-4">
                    <span className="text-[10px] font-black tracking-widest text-slate-800 uppercase flex items-center gap-1.5 mb-3 font-mono">
                      <Briefcase className="size-3.5 text-indigo-600" />
                      DIRECT FIELDWORK &amp; PROJECT EXPERIENCE MILESTONES
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedMember.detailedExperience.map((xp, xIdx) => (
                        <div key={xIdx} className="flex gap-2.5 items-start">
                          <span className="px-1.5 py-0.5 bg-indigo-600 text-[10px] text-white font-mono font-bold rounded shrink-0 leading-none mt-0.5">
                            {(xIdx + 1).toString().padStart(2, '0')}
                          </span>
                          <p className="text-[11px] text-slate-700 leading-relaxed font-sans font-medium">
                            {xp}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

            {/* Bottom Disclaimer info */}
            <div className="text-[9px] text-slate-400 mt-6 pt-4 border-t border-slate-100 leading-normal font-sans font-medium">
              Disclaimer: At Samal Engineers, site layouts and contracting are directly and personally validated on-site by these specific consultants, preventing reliance on secondary third-party sub-contractors on active projects.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
