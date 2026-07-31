import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  // Show a gentle preview bubble prompt after 4 seconds to invite conversation block
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = '919860799787';
  const prefilledText = encodeURIComponent(
    'Hello Samal Engineers, I visited your website and would like to inquire about your engineering, HVAC, electrical, or structural consultancy services.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledText}`;

  const handleOpenChat = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-6 right-6 z-50 font-sans pointer-events-none">
      <div className="flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Automatic Invitation Prompt */}
        <AnimatePresence>
          {showPrompt && !isOpen && (
            <motion.div
              id="whatsapp-invitation-prompt"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="bg-white border border-slate-200/80 p-3.5 rounded-2xl shadow-xl max-w-[280px] relative flex flex-col gap-2 cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              <button
                id="close-prompt-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPrompt(false);
                }}
                className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white rounded-full p-0.5 hover:bg-slate-700 transition"
              >
                <X className="size-2.5" />
              </button>

              <div className="flex items-center gap-2">
                <span className="relative flex size-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  ACTIVE TECHNICAL HELPLINE
                </span>
              </div>

              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Need immediate heat loads or electrical capacity estimates? 
                <span className="text-indigo-600 font-bold block mt-1 group-hover:underline">
                  Chat directly with us &rarr;
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Mini Panel Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="whatsapp-mini-panel"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden w-80 max-w-full"
            >
              {/* Header block with company theme */}
              <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 font-bold text-sm">
                    SE
                  </div>
                  <div className="leading-tight">
                    <span className="text-xs font-black block tracking-tight">Samal Engineers</span>
                    <span className="text-[9px] text-slate-400 font-semibold block mt-0.5">Typically replies instantly</span>
                  </div>
                </div>

                <button
                  id="close-chat-panel"
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {/* Chat Message simulation area */}
              <div className="p-4 bg-slate-55/70 relative">
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
                
                <div className="space-y-3 relative z-10">
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl max-w-[85%] text-left text-xs text-slate-600 leading-relaxed shadow-3xs">
                    <span className="font-bold text-slate-900 block mb-1">Mr. Amar R. Samal</span>
                    Hi there! 👋 How can we help you coordinate your upcoming commercial design or MEPH project execution parameters in Pune?
                  </div>
                  
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl max-w-[85%] text-left text-xs text-slate-600 leading-relaxed shadow-3xs">
                    Please click below to start a secure WhatsApp message. Our representatives will assess your load query immediately!
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 border-t border-slate-100 bg-slate-50">
                <button
                  id="whatsapp-chat-trigger-btn"
                  onClick={handleOpenChat}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-100 transition-all cursor-pointer"
                >
                  <Send className="size-3.5" />
                  Initiate Secure Chat
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Floating Launcher Badge Button */}
        <button
          id="whatsapp-launcher-badge"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPrompt(false);
          }}
          className={`size-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-105 active:scale-95 ${
            isOpen
              ? 'bg-slate-900 text-white shadow-slate-200'
              : 'bg-emerald-600 text-white shadow-emerald-200/50'
          }`}
        >
          {isOpen ? (
            <X className="size-6" />
          ) : (
            <div className="relative">
              {/* WhatsApp custom simplified vector representation icon */}
              <svg viewBox="0 0 24 24" className="size-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.415 1.258 4.864l-1.127 4.12 4.22-1.107c1.405.766 3.003 1.2 4.637 1.2 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.721 14.193c-.207.585-1.012 1.134-1.638 1.255-.562.112-1.295.207-3.791-.827-3.189-1.321-5.234-4.568-5.393-4.781-.16-.213-1.282-1.705-1.282-3.251 0-1.546.808-2.308 1.096-2.611.288-.303.628-.378.835-.378.207 0 .415.004.595.012.189.008.441-.072.693.535.257.621.881 2.147.957 2.304.076.157.125.34.02.553-.104.213-.157.345-.313.528-.157.182-.329.406-.471.545-.16.157-.329.329-.141.653.189.32 1.341 2.213 2.87 3.576 1.157 1.029 2.133 1.349 2.453 1.48.32.131.503.111.693-.104.189-.214.811-.945 1.027-1.272.216-.327.433-.272.73-.162.297.109 1.881.887 2.203 1.047.322.16.537.24.615.375.078.135.078.784-.129 1.369z" />
              </svg>
              {/* Pulsing indicator light */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-white"></span>
              </span>
            </div>
          )}
        </button>

      </div>
    </div>
  );
}
