import React, { useState } from 'react';
import { Zap, Wind, Calculator, ShieldCheck, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function EstimatorTool() {
  const [activeTab, setActiveTab] = useState<'hvac' | 'electrical'>('hvac');

  // HVAC state
  const [spaceType, setSpaceType] = useState<'server' | 'industrial' | 'office' | 'bank'>('office');
  const [area, setArea] = useState<number>(1200);
  const [people, setPeople] = useState<number>(15);
  const [appliances, setAppliances] = useState<number>(3000); // in Watts
  const [exposure, setExposure] = useState<'low' | 'med' | 'high'>('med');

  // Electrical state
  const [machineryKw, setMachineryKw] = useState<number>(30);
  const [computersCount, setComputersCount] = useState<number>(40);
  const [safetyMargin, setSafetyMargin] = useState<number>(25); // in %
  const [requiresHT, setRequiresHT] = useState<boolean>(false);

  // HVAC calculations
  const calculateHVAC = () => {
    // Basic area factor (BTU/hr per sqft)
    let areaFactor = 35; // office standard
    if (spaceType === 'server') areaFactor = 65;
    if (spaceType === 'industrial') areaFactor = 45;
    if (spaceType === 'bank') areaFactor = 40;

    let baseBtu = area * areaFactor;

    // Person load: add 400 BTU per person
    const peopleBtu = people * 400;

    // Appliance load: 1 Watt = 3.412 BTU/hr
    const applianceBtu = appliances * 3.412;

    // Sunlight exposure factor
    let sunFactor = 1.0;
    if (exposure === 'low') sunFactor = 0.9;
    if (exposure === 'high') sunFactor = 1.15;

    const totalBtu = (baseBtu + peopleBtu + applianceBtu) * sunFactor;

    // Tonnage (1 TR = 12,000 BTU/hr)
    const tonnage = totalBtu / 12000;

    return {
      btu: Math.round(totalBtu),
      tonnage: Number(tonnage.toFixed(1)),
      safetyMarginTR: Number((tonnage * 1.15).toFixed(1)) // with 15% system redundancy
    };
  };

  // Electrical calculations
  const calculateElectrical = () => {
    // 1 computer config uses ~250 Watts
    const computeWatts = computersCount * 250;
    // HVAC estimated tonnage load: assume base HVAC exists.
    // Standard rule: 1 TR of AC draws ~1.2 kW of power
    const hvacLoadEst = (area / 150) * 1.2 * 1000; // estimated in Watts

    const baseKw = machineryKw + (computeWatts / 1000) + (hvacLoadEst / 1000);
    const finalKw = baseKw * (1 + safetyMargin / 100);

    // KVA: power factor of 0.8
    // kW = kVA * PF => kVA = kW / 0.8
    const finalKva = finalKw / 0.8;

    return {
      baseLoadKw: Number(baseKw.toFixed(1)),
      peakLoadKw: Number(finalKw.toFixed(1)),
      recommendedDGkva: Math.round(finalKva)
    };
  };

  const hvacResult = calculateHVAC();
  const eleResult = calculateElectrical();

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-5 mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Calculator className="text-indigo-600 size-5" />
            Load Estimator & Sizing Suite
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Engineered tools for initial layout capacity testing
          </p>
        </div>

        <div className="flex bg-slate-200/70 p-1 rounded-lg mt-4 md:mt-0 max-w-xs">
          <button
            id="tab-hvac"
            onClick={() => setActiveTab('hvac')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'hvac'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Wind className="size-3.5" />
            HVAC Heat Sizing
          </button>
          <button
            id="tab-elec"
            onClick={() => setActiveTab('electrical')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'electrical'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="size-3.5" />
            Power / DG Set Sizing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-7 space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === 'hvac' ? (
              <motion.div
                key="hvac-inputs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Commercial Space Application
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { id: 'office', label: 'Office Layout', icon: '🏢' },
                      { id: 'server', label: 'Server Room', icon: '🖥️' },
                      { id: 'industrial', label: 'Factory Site', icon: '🏭' },
                      { id: 'bank', label: 'Bank Vault', icon: '🏦' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        id={`space-${type.id}`}
                        onClick={() => setSpaceType(type.id as any)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          spaceType === type.id
                            ? 'bg-indigo-50 border-indigo-500/50 text-indigo-900 font-medium'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-lg mb-1">{type.icon}</span>
                        <span className="text-[11px] block leading-tight">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                    <span>Floor Area (Sq.Ft.)</span>
                    <span className="text-indigo-600 font-mono text-sm">{area.toLocaleString()} sqft</span>
                  </div>
                  <input
                    id="input-area"
                    type="range"
                    min="100"
                    max="15000"
                    step="50"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>100 sqft</span>
                    <span>5,000 sqft</span>
                    <span>10,000 sqft</span>
                    <span>15,000 sqft</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                      <span>Occupants count</span>
                      <span className="text-indigo-600 font-mono text-sm">{people} persons</span>
                    </div>
                    <input
                      id="input-occupants"
                      type="range"
                      min="1"
                      max="150"
                      value={people}
                      onChange={(e) => setPeople(Number(e.target.value))}
                      className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                      <span>Equipments power load</span>
                      <span className="text-indigo-600 font-mono text-sm">{(appliances / 1000).toFixed(1)} kW</span>
                    </div>
                    <input
                      id="input-equipment"
                      type="range"
                      min="500"
                      max="25000"
                      step="500"
                      value={appliances}
                      onChange={(e) => setAppliances(Number(e.target.value))}
                      className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Solar Radiation Exposure
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'low', label: 'Shaded (North)', desc: 'Low heat input' },
                      { id: 'med', label: 'Moderate', desc: 'Average solar load' },
                      { id: 'high', label: 'Direct Sun (West)', desc: 'Peak solar heat' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        id={`exposure-${opt.id}`}
                        onClick={() => setExposure(opt.id as any)}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                          exposure === opt.id
                            ? 'bg-indigo-50 border-indigo-500/50 text-indigo-900 font-medium'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className="block text-xs font-bold">{opt.label}</span>
                        <span className="text-[10px] text-slate-400 block leading-tight mt-0.5">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="electrical-inputs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                    <span>Industrial Machinery Base (kW)</span>
                    <span className="text-indigo-600 font-mono text-sm">{machineryKw} kW</span>
                  </div>
                  <input
                    id="input-machinery"
                    type="range"
                    min="0"
                    max="500"
                    step="5"
                    value={machineryKw}
                    onChange={(e) => setMachineryKw(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>0 kW (Light Commercial)</span>
                    <span>250 kW</span>
                    <span>500 kW (Heavy Industrial)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                    <span>IT Workstations / Computers</span>
                    <span className="text-indigo-600 font-mono text-sm">{computersCount} Units</span>
                  </div>
                  <input
                    id="input-computers"
                    type="range"
                    min="5"
                    max="300"
                    step="5"
                    value={computersCount}
                    onChange={(e) => setComputersCount(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>5 computers</span>
                    <span>150 units</span>
                    <span>300 units (Call center load)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                    <span>Future Expansion Reserve</span>
                    <span className="text-indigo-600 font-mono text-sm">+{safetyMargin}% load margin</span>
                  </div>
                  <input
                    id="input-reserve"
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={safetyMargin}
                    onChange={(e) => setSafetyMargin(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-slate-800">Requires Dedicated HT Line?</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">HT Connections are advisable for loads exceeding 100 kW</span>
                  </div>
                  <input
                    id="input-ht-checkbox"
                    type="checkbox"
                    checked={machineryKw > 85 ? true : requiresHT}
                    disabled={machineryKw > 85}
                    onChange={(e) => setRequiresHT(e.target.checked)}
                    className="size-5 accent-indigo-600 cursor-pointer"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* OUTPUTS/RESULTS COLUMN */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase block mb-1">
              SAMAL ENGINEERS SIZING ALGORITHM
            </span>
            <h4 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Preliminary Specifications Recommendation
            </h4>

            <AnimatePresence mode="wait">
              {activeTab === 'hvac' ? (
                <motion.div
                  key="hvac-output"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-4 space-y-4"
                >
                  <div>
                    <span className="text-xs text-slate-400 block">Estimated Heat Load</span>
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">
                      {hvacResult.btu.toLocaleString()} <span className="text-sm font-medium">BTU/hr</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block">Minimum Sizing</span>
                      <span className="text-xl font-bold text-slate-800 font-mono">
                        {hvacResult.tonnage} <span className="text-xs">TR</span>
                      </span>
                    </div>
                    <div className="bg-indigo-50/50 border border-indigo-100 p-3 rounded-xl">
                      <span className="text-[10px] text-indigo-600 uppercase font-bold block">Refined Sizing (+Reserve)</span>
                      <span className="text-xl font-bold text-indigo-700 font-mono">
                        {hvacResult.safetyMarginTR} <span className="text-xs">TR</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-amber-50/30 border border-amber-200/50 rounded-lg p-3 text-amber-900 text-xs mt-2 flex items-start gap-2">
                    <Info className="size-4 shrink-0 mt-0.5 text-amber-700" />
                    <div>
                      <span className="font-bold text-amber-800 block">Sizing Advice:</span>
                      {spaceType === 'server' ? (
                        <span>Severe constant thermal loads require 24/7 Precision AC or VRV. Ensure backup dampers are in reserve.</span>
                      ) : spaceType === 'industrial' ? (
                        <span>For factory floors, centralized ducting combined with a chilled-water grid minimizes power leakage.</span>
                      ) : (
                        <span>Highly suited for multi-split inverter systems or multi-module VRV units to balance partial space loads.</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="elec-output"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-4 space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">Base Power Load</span>
                      <span className="text-xl font-bold text-slate-800 font-mono">
                        {eleResult.baseLoadKw} <span className="text-xs">kW</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Peak (+Margin)</span>
                      <span className="text-xl font-bold text-slate-800 font-mono">
                        {eleResult.peakLoadKw} <span className="text-xs">kW</span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 block">Recommended Diesel Generator Set</span>
                    <span className="text-3xl font-extrabold text-indigo-600 font-mono block mt-1">
                      {eleResult.recommendedDGkva} <span className="text-base font-semibold">kVA</span>
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Calculated assuming standard 0.8 Power Factor</span>
                  </div>

                  <div className="bg-indigo-50/20 border border-indigo-100 rounded-lg p-3 text-slate-700 text-xs flex items-start gap-2">
                    <ShieldCheck className="size-4 shrink-0 mt-0.5 text-indigo-600" />
                    <div>
                      <span className="font-bold text-slate-900 block">Engineering Regulation:</span>
                      {eleResult.recommendedDGkva > 120 || machineryKw > 85 ? (
                        <span>Advisable to coordinate secondary HT sub-station setup inside utility yards conforming to Maharashtra MSEB standards.</span>
                      ) : (
                        <span>Complies with standard LT distributions. Sizing supports standard automatic mains failure (AMF) control panels.</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-4">
            <p className="text-[10px] text-slate-400 text-center leading-relaxed">
              *Calculations are for mock estimation purposes according to standard IS Heat Sizing coefficients. Real configurations require rigorous physical thermal and electrical site assessments by mechanical engineers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
