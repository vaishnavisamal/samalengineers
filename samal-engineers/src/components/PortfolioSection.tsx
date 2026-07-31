import React, { useState, useEffect } from 'react';
import { Search, MapPin, Building2, Calendar, HardHat, CheckCircle2, ChevronRight, Award, Compass, Github, GitFork, Star, User, ExternalLink, Globe, RefreshCw } from 'lucide-react';
import { companyProjects, companyClients } from '../data/companyData';
import { Project, Client } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function PortfolioSection() {
  const [subTab, setSubTab] = useState<'projects' | 'clients' | 'github'>('projects');
  
  // Projects filtering states
  const [projectFilter, setProjectFilter] = useState<'All' | 'Completed' | 'At Hand'>('All');
  const [projectCat, setProjectCat] = useState<'All' | 'Factory' | 'Interiors' | 'Showroom' | 'Bungalow' | 'Clinic' | 'Institutional' | 'Civil'>('All');

  // Clients filtering states
  const [clientCat, setClientCat] = useState<'All' | 'Industrial' | 'Corporate & Software' | 'Banks' | 'Medical' | 'Commercial & Showrooms' | 'Residential'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // GitHub integration states
  const [githubUserVal, setGithubUserVal] = useState<string>(() => localStorage.getItem('samal_github_username') || 'samalvaishnavi');
  const [connectedUser, setConnectedUser] = useState<string>(() => localStorage.getItem('samal_github_username') || 'samalvaishnavi');
  const [githubProfile, setGithubProfile] = useState<any | null>(null);
  const [githubRepos, setGithubRepos] = useState<any[]>([]);
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [githubError, setGithubError] = useState<string | null>(null);
  const [githubSearchQuery, setGithubSearchQuery] = useState<string>('');
  const [githubSortBy, setGithubSortBy] = useState<'stars' | 'forks' | 'updated'>('stars');

  const fetchGitHubData = async (username: string) => {
    if (!username.trim()) return;
    setIsGithubLoading(true);
    setGithubError(null);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (!userRes.ok) {
        if (userRes.status === 404) {
          throw new Error(`GitHub user "${username}" not found. Please check spelling.`);
        }
        throw new Error('Could not fetch profile. API limit exceeded or network error.');
      }
      const userData = await userRes.json();
      setGithubProfile(userData);

      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      if (!reposRes.ok) {
        throw new Error('Could not retrieve repositories.');
      }
      const reposData = await reposRes.json();
      setGithubRepos(reposData);
      setConnectedUser(username);
      localStorage.setItem('samal_github_username', username);
    } catch (err: any) {
      setGithubError(err.message || 'An error occurred during GitHub integration.');
      setGithubProfile(null);
      setGithubRepos([]);
    } finally {
      setIsGithubLoading(false);
    }
  };

  useEffect(() => {
    if (subTab === 'github' && !githubProfile) {
      fetchGitHubData(connectedUser);
    }
  }, [subTab, connectedUser]);

  const handleGithubConnect = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGitHubData(githubUserVal);
  };

  // Filtered lists
  const filteredProjects = companyProjects.filter(project => {
    const matchStatus = projectFilter === 'All' || project.type === projectFilter;
    const matchCat = projectCat === 'All' || project.category === projectCat;
    return matchStatus && matchCat;
  });

  const filteredClients = companyClients.filter(client => {
    const matchCat = clientCat === 'All' || client.category === clientCat;
    
    const query = searchQuery.toLowerCase().trim();
    const matchQuery = !query || 
      client.name.toLowerCase().includes(query) ||
      client.location.toLowerCase().includes(query) ||
      (client.scope && client.scope.toLowerCase().includes(query));

    return matchCat && matchQuery;
  });

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100/30">
              Credentials &amp; Record
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight mt-3">
              Executed Works &amp; Client Base
            </h2>
            <p className="text-slate-600 mt-2 text-sm max-w-2xl">
              An exhaustive listing of structural, MEPH utility, and turnkey architectural spaces designed and optimized by our specialists across Maharashtra.
            </p>
          </div>

          <div className="flex bg-slate-200/60 p-1 rounded-xl mt-6 md:mt-0 shadow-inner w-full md:w-max overflow-x-auto gap-0.5">
            <button
              id="subtab-projects"
              onClick={() => setSubTab('projects')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer btn-premium-interactive shrink-0 ${
                subTab === 'projects'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-950'
              }`}
            >
              Completed &amp; Active Projects
            </button>
            <button
              id="subtab-clients"
              onClick={() => setSubTab('clients')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer btn-premium-interactive shrink-0 ${
                subTab === 'clients'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-950'
              }`}
            >
              Prestigious Client base
            </button>
            <button
              id="subtab-github"
              onClick={() => setSubTab('github')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer btn-premium-interactive shrink-0 flex items-center gap-1.5 ${
                subTab === 'github'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-indigo-950'
              }`}
            >
              <Github className="size-3.5" />
              Live GitHub Projects
            </button>
          </div>
        </div>

        {/* PROJECTS TAB COMPONENT */}
        {subTab === 'projects' ? (
          <div>
            {/* Filter Pillbox for Projects */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {(['All', 'Completed', 'At Hand'] as const).map((status) => (
                  <button
                    key={status}
                    id={`btn-prj-status-${status.replace(' ', '-')}`}
                    onClick={() => setProjectFilter(status)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer btn-premium-interactive ${
                      projectFilter === status
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {status === 'All' ? 'All Status' : status}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 border-t md:border-t-0 pt-4 md:pt-0">
                {(['All', 'Factory', 'Interiors', 'Showroom', 'Bungalow', 'Clinic', 'Civil'] as const).map((cat) => (
                  <button
                    key={cat}
                    id={`btn-prj-cat-${cat}`}
                    onClick={() => setProjectCat(cat)}
                    className={`px-3 py-1 text-[11px] font-bold rounded-full border transition-all cursor-pointer btn-premium-interactive ${
                      projectCat === cat
                        ? 'bg-indigo-950 border-indigo-950 text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Project List Rendering */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  id={`project-card-${project.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded shadow-xs border border-slate-200">
                          {project.category}
                        </span>
                        <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded ${
                          project.type === 'Completed'
                            ? 'text-emerald-700 bg-emerald-50 border border-emerald-100'
                            : 'text-amber-700 bg-amber-50 border border-amber-100'
                        }`}>
                          {project.type}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
                          <Building2 className="size-3.5 shrink-0 text-slate-400" />
                          <span>Client: {project.client}</span>
                        </p>
                      </div>

                      {project.scale && (
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-150 text-[11px] text-slate-600">
                          <span className="font-semibold text-slate-800 block">Project Scale:</span>
                          {project.scale}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3 text-slate-400" />
                      {project.location}
                    </span>
                    <span className="text-[10px] text-indigo-600 bg-indigo-50 font-semibold px-2 py-0.5 rounded">
                      Pune Region
                    </span>
                  </div>
                </motion.div>
              ))}

              {filteredProjects.length === 0 && (
                <div id="no-projects-fallback" className="col-span-full py-16 text-center text-slate-400 bg-white border border-dashed border-slate-200 rounded-2xl">
                  <Compass className="size-8 mx-auto text-slate-300 mb-2.5" />
                  <p className="text-sm font-semibold">No finished projects found matching selection.</p>
                  <p className="text-xs text-slate-400 mt-1">Try switching categories or status parameters above.</p>
                </div>
              )}
            </div>

            {/* At Hand Additional Detail Section from PDF */}
            <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
              <h4 className="text-sm font-extrabold text-slate-900 tracking-wider uppercase flex items-center gap-2 mb-4">
                <HardHat className="text-amber-600 size-4" />
                Selected Active Projects at Hand (In Progress)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Landscape Engineering', desc: 'Sizable 1.6-Acre dynamic natural garden design for Mr. Tapadia at Vijaynagar, Dhayari, Pune.' },
                  { name: 'Project Management PMC', desc: 'PMC of turnkey residential scheme space allocation for Mr. Tapadia & Mr. Damale at Vaastushilpa, Dhayari.' },
                  { name: 'Hospital consulting at Baner', desc: 'Full building services assessment, ventilation calculations, and safety regulatory validation for upcoming clinical ward.' },
                  { name: 'Kitchen & Cafeteria Interiors', desc: 'Detailed workspace partition, modern acoustic modular cafe integration for Tox Pressotechnic at Pirangut, Pune.' }
                ].map((active, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-150 shadow-2xs">
                    <span className="p-1 px-2.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold rounded-lg shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">{active.name}</span>
                      <span className="block text-[11px] text-slate-500 leading-normal mt-1">{active.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* CLIENTS TAB COMPONENT */
          <div>
            {/* Search and Category filters */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search field */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <input
                    id="search-client"
                    type="text"
                    placeholder="Search clients by name, location, or scope..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-101 transition-all outline-none"
                  />
                </div>

                <div className="text-xs text-slate-500 font-semibold">
                  Showing {filteredClients.length} of {companyClients.length} Elite Establishments
                </div>
              </div>

              {/* Category buttons */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {(['All', 'Industrial', 'Corporate & Software', 'Banks', 'Medical', 'Commercial & Showrooms', 'Residential'] as const).map((cat) => (
                  <button
                    key={cat}
                    id={`btn-client-cat-${cat.replace(' & ', '-And-').replace(' ', '-')}`}
                    onClick={() => setClientCat(cat)}
                    className={`px-3.5 py-1.5 text-[11px] font-bold rounded-full transition-all cursor-pointer btn-premium-interactive ${
                      clientCat === cat
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-50/50'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Clients card bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredClients.map((client, idx) => (
                <motion.div
                  key={idx}
                  id={`client-card-${idx}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full uppercase">
                        {client.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                        <MapPin className="size-3 text-slate-400" />
                        {client.location}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                        {client.name}
                      </h4>
                      {client.scope && (
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                          {client.scope}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Pune Compliance Sizing</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                      <CheckCircle2 className="size-3" /> Conforming
                    </span>
                  </div>
                </motion.div>
              ))}

              {filteredClients.length === 0 && (
                <div id="no-clients-fallback" className="col-span-full py-16 text-center text-slate-400 bg-white border border-dashed border-slate-200 rounded-2xl">
                  <Compass className="size-8 mx-auto text-slate-300 mb-2.5" />
                  <p className="text-sm font-semibold">No clients match your filter inputs.</p>
                  <p className="text-xs text-slate-400 mt-1">Try resetting search parameters or selecting &ldquo;All&rdquo; above.</p>
                </div>
              )}
            </div>

            {/* Note on Bank branches listed in PDF */}
            <div className="mt-10 bg-indigo-50/30 border border-indigo-150 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
              <div className="space-y-1 max-w-3xl">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                  <Award className="text-indigo-600 size-4 shrink-0" />
                  Pioneering Financial Institution Safe rooms &amp; Branch network MEP
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Samal Engineers has structured robust regulatory security systems, thermal alarms, multi-phase electrical panels, and bank-vault concrete reinforcement guidelines for major banking houses in Pune. Including <strong>14 comprehensive branches of the Rupee Co-operative Bank Ltd.</strong> across Maharashtra.
                </p>
              </div>

              <span className="text-[10px] font-black tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 flex items-center shrink-0 h-max py-1 px-3 rounded-md">
                14+ BANK BRANCH CONFORMITY
              </span>
            </div>
          </div>
        )}

        {subTab === 'github' && (
          <div className="space-y-8">
            {/* GitHub config panel */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <Github className="size-5 text-slate-800" />
                    GitHub Account Integration
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 max-w-xl">
                    Integrate your live GitHub portfolio. Enter your username to dynamically display your public repositories, contributions, and development highlights.
                  </p>
                </div>
                <form onSubmit={handleGithubConnect} className="flex gap-2 w-full lg:w-auto shrink-0">
                  <div className="relative flex-1 lg:w-64">
                    <input
                      type="text"
                      value={githubUserVal}
                      onChange={(e) => setGithubUserVal(e.target.value)}
                      placeholder="Enter GitHub username"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg px-3.5 py-2 text-xs font-semibold text-slate-800 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isGithubLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
                  >
                    {isGithubLoading ? (
                      <RefreshCw className="size-3 animate-spin" />
                    ) : (
                      <RefreshCw className="size-3" />
                    )}
                    Connect
                  </button>
                </form>
              </div>

              {githubError && (
                <div className="mt-4 p-3.5 bg-rose-50 border border-rose-100 rounded-lg text-rose-700 text-xs font-semibold">
                  {githubError}
                </div>
              )}
            </div>

            {isGithubLoading ? (
              <div className="py-24 text-center">
                <RefreshCw className="size-10 mx-auto text-blue-500 animate-spin mb-4" />
                <p className="text-slate-500 font-semibold text-sm">Synchronizing Live GitHub repositories...</p>
                <p className="text-xs text-slate-400 mt-1">Fetching metadata from GitHub API</p>
              </div>
            ) : githubProfile ? (
              <div className="space-y-8">
                {/* Profile Summary Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4.5">
                    <img
                      src={githubProfile.avatar_url}
                      alt={githubProfile.login}
                      referrerPolicy="no-referrer"
                      className="size-16 rounded-full border-2 border-slate-700 shadow-sm shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-lg font-black tracking-tight">{githubProfile.name || githubProfile.login}</h4>
                        <span className="text-[10px] font-mono bg-slate-800 text-blue-400 border border-slate-700 px-2 py-0.5 rounded">
                          @{githubProfile.login}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 max-w-xl">{githubProfile.bio || 'Professional engineering specialist and open-source contributor.'}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 sm:gap-6 text-center shrink-0 w-full md:w-auto border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
                    <div className="flex-1 md:flex-initial min-w-[70px]">
                      <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Repositories</span>
                      <span className="text-xl font-extrabold text-slate-200 mt-0.5 block">{githubProfile.public_repos}</span>
                    </div>
                    <div className="flex-1 md:flex-initial min-w-[70px] border-l border-slate-800 pl-4 sm:pl-6">
                      <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Followers</span>
                      <span className="text-xl font-extrabold text-slate-200 mt-0.5 block">{githubProfile.followers}</span>
                    </div>
                    <div className="flex-1 md:flex-initial pl-4 sm:pl-6">
                      <a
                        href={githubProfile.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all inline-flex items-center gap-1.5 mt-1 border border-slate-700"
                      >
                        <ExternalLink className="size-3.5" />
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>

                {/* Filters / Sorting on Repos */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search repositories..."
                      value={githubSearchQuery}
                      onChange={(e) => setGithubSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-lg pl-9 pr-4 py-1.5 text-xs font-semibold outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <span className="text-[11px] font-bold text-slate-500 shrink-0">Sort By:</span>
                    <select
                      value={githubSortBy}
                      onChange={(e: any) => setGithubSortBy(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 px-3 py-1.5 outline-none focus:border-blue-500"
                    >
                      <option value="stars">Stars Count</option>
                      <option value="forks">Forks Count</option>
                      <option value="updated">Recently Updated</option>
                    </select>
                  </div>
                </div>

                {/* Repos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {githubRepos
                    .filter((repo) =>
                      repo.name.toLowerCase().includes(githubSearchQuery.toLowerCase()) ||
                      (repo.description && repo.description.toLowerCase().includes(githubSearchQuery.toLowerCase()))
                    )
                    .sort((a, b) => {
                      if (githubSortBy === 'stars') return b.stargazers_count - a.stargazers_count;
                      if (githubSortBy === 'forks') return b.forks_count - a.forks_count;
                      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                    })
                    .map((repo) => (
                      <motion.div
                        key={repo.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            {repo.language ? (
                              <span className="text-[9px] font-black tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full uppercase">
                                {repo.language}
                              </span>
                            ) : (
                              <span className="text-[9px] font-black tracking-wider text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full uppercase">
                                Open Source
                              </span>
                            )}
                            <span className="text-[10px] text-slate-400 font-mono">
                              {new Date(repo.updated_at).toLocaleDateString('en-US', {
                                month: 'short',
                                year: 'numeric',
                              })}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-sm font-black text-slate-900 tracking-tight leading-snug break-all hover:text-blue-600 transition-colors">
                              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                              </a>
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                              {repo.description || 'No description provided.'}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-3 text-slate-500">
                            <span className="flex items-center gap-1 font-semibold">
                              <Star className="size-3 text-amber-500 fill-amber-500" />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1 font-semibold">
                              <GitFork className="size-3 text-indigo-500" />
                              {repo.forks_count}
                            </span>
                          </div>

                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-0.5 hover:underline"
                          >
                            Source Code
                            <ExternalLink className="size-3" />
                          </a>
                        </div>
                      </motion.div>
                    ))}

                  {githubRepos.length === 0 && (
                    <div className="col-span-full py-16 text-center text-slate-400 bg-white border border-dashed border-slate-200 rounded-2xl">
                      <Github className="size-8 mx-auto text-slate-300 mb-2.5 animate-pulse" />
                      <p className="text-sm font-semibold">No repositories found.</p>
                      <p className="text-xs text-slate-400 mt-1">This user does not have any public repositories.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <Github className="size-12 mx-auto text-slate-300 mb-4" />
                <h4 className="text-slate-900 font-black text-base tracking-tight">Connect your GitHub profile</h4>
                <p className="text-slate-500 text-xs mt-1 max-w-sm mx-auto">
                  Type in your GitHub username in the connection panel above to load and display your real repositories.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
