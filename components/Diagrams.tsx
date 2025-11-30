/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Shield, FileText, Database, UserCheck, Clock, ArrowRight, Lock } from 'lucide-react';

// --- CREDENTIAL HASHING DEMO ---
export const SurfaceCodeDiagram: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'hashing' | 'verified'>('idle');
  const [hash, setHash] = useState('0x...');

  const handleVerify = () => {
    if (status === 'hashing') return;
    setStatus('hashing');
    setHash('Generating Hash...');
    
    let steps = 0;
    const interval = setInterval(() => {
        setHash('0x' + Math.random().toString(16).substr(2, 24) + '...');
        steps++;
        if (steps > 10) {
            clearInterval(interval);
            setHash('0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069');
            setStatus('verified');
        }
    }, 100);
  };

  const reset = () => {
      setStatus('idle');
      setHash('0x...');
  }

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-edu-primary/10 my-8">
      <h3 className="font-serif text-xl mb-4 text-edu-dark">Interactive: Immutable Verification</h3>
      <p className="text-sm text-slate-500 mb-6 text-center max-w-md">
        Click verify to generate a cryptographic hash of the diploma and match it against the blockchain ledger.
      </p>
      
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8 w-full justify-center">
          {/* Document */}
          <div className="relative w-32 h-40 bg-white border border-slate-200 shadow-md rounded flex flex-col items-center justify-center p-2 group">
              <div className="w-full h-2 bg-slate-100 mb-2"></div>
              <div className="w-3/4 h-2 bg-slate-100 mb-4 self-start"></div>
              <Shield className="text-edu-primary opacity-20 mb-2" size={32} />
              <div className="w-full h-1 bg-slate-100 mb-1"></div>
              <div className="w-full h-1 bg-slate-100"></div>
              {status === 'verified' && (
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute inset-0 bg-green-500/10 flex items-center justify-center rounded border-2 border-green-500"
                  >
                      <Check className="text-green-600 bg-white rounded-full p-1" size={32} />
                  </motion.div>
              )}
          </div>

          <ArrowRight className={`text-slate-300 ${status === 'hashing' ? 'animate-pulse text-edu-primary' : ''}`} />

          {/* Blockchain Node */}
          <div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 ${status === 'verified' ? 'border-green-500 bg-green-50' : 'border-edu-primary/20 bg-slate-50'}`}>
               <Database className={status === 'verified' ? 'text-green-600' : 'text-slate-400'} size={32} />
               <div className="text-[10px] font-mono mt-2 text-slate-500">{status === 'verified' ? 'MATCH FOUND' : 'LEDGER'}</div>
          </div>
      </div>

      <div className="w-full max-w-md bg-slate-900 rounded p-3 mb-6 font-mono text-xs text-green-400 overflow-hidden text-center">
          {hash}
      </div>

      <button 
        onClick={status === 'verified' ? reset : handleVerify}
        className={`px-6 py-2 rounded-full font-medium transition-colors shadow-sm ${status === 'verified' ? 'bg-slate-200 text-slate-700 hover:bg-slate-300' : 'bg-edu-primary text-white hover:bg-blue-700'}`}
      >
          {status === 'verified' ? 'Reset Demo' : status === 'hashing' ? 'Verifying...' : 'Verify Credential'}
      </button>
    </div>
  );
};

// --- SMART CONTRACT FLOW DIAGRAM ---
export const TransformerDecoderDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-slate-900 rounded-xl border border-slate-800 my-8">
      <h3 className="font-serif text-xl mb-4 text-white">Smart Contract Hiring Ecosystem</h3>
      <p className="text-sm text-slate-400 mb-8 text-center max-w-md">
        Automating the trust layer between institutions, students, and employers.
      </p>

      <div className="relative w-full max-w-lg h-32 flex items-center justify-between px-4">
         {/* Connecting Line */}
         <div className="absolute left-10 right-10 top-1/2 h-0.5 bg-slate-700 -z-0"></div>
         <motion.div 
            className="absolute left-10 h-0.5 bg-edu-primary z-0"
            animate={{ width: `${step * 33}%` }}
         />

         {/* Institution */}
         <div className="relative z-10 flex flex-col items-center gap-3">
             <motion.div 
                animate={{ scale: step === 0 ? 1.2 : 1, borderColor: step >= 0 ? '#2563EB' : '#334155' }}
                className="w-12 h-12 rounded-full bg-slate-800 border-2 flex items-center justify-center text-white"
             >
                 <Database size={18} />
             </motion.div>
             <span className={`text-[10px] uppercase font-bold tracking-wider ${step >= 0 ? 'text-edu-primary' : 'text-slate-600'}`}>Issue</span>
         </div>

         {/* Student */}
         <div className="relative z-10 flex flex-col items-center gap-3">
             <motion.div 
                animate={{ scale: step === 1 ? 1.2 : 1, borderColor: step >= 1 ? '#2563EB' : '#334155' }}
                className="w-12 h-12 rounded-full bg-slate-800 border-2 flex items-center justify-center text-white"
             >
                 <UserCheck size={18} />
             </motion.div>
             <span className={`text-[10px] uppercase font-bold tracking-wider ${step >= 1 ? 'text-edu-primary' : 'text-slate-600'}`}>Wallet</span>
         </div>

         {/* Smart Contract */}
         <div className="relative z-10 flex flex-col items-center gap-3">
             <motion.div 
                animate={{ scale: step === 2 ? 1.2 : 1, borderColor: step >= 2 ? '#2563EB' : '#334155' }}
                className="w-12 h-12 rounded-full bg-slate-800 border-2 flex items-center justify-center text-white"
             >
                 <FileText size={18} />
             </motion.div>
             <span className={`text-[10px] uppercase font-bold tracking-wider ${step >= 2 ? 'text-edu-primary' : 'text-slate-600'}`}>Contract</span>
         </div>

         {/* Employer */}
         <div className="relative z-10 flex flex-col items-center gap-3">
             <motion.div 
                animate={{ scale: step === 3 ? 1.2 : 1, borderColor: step >= 3 ? '#10B981' : '#334155' }}
                className="w-12 h-12 rounded-full bg-slate-800 border-2 flex items-center justify-center text-white"
             >
                 <Check size={18} />
             </motion.div>
             <span className={`text-[10px] uppercase font-bold tracking-wider ${step >= 3 ? 'text-green-500' : 'text-slate-600'}`}>Verify</span>
         </div>
      </div>

      <div className="mt-8 bg-slate-800/50 p-3 rounded text-xs text-slate-300 font-mono w-full text-center">
         {step === 0 && "University mints degree NFT to blockchain..."}
         {step === 1 && "Student receives credential in secure Academic Wallet..."}
         {step === 2 && "Employer initiates Smart Contract job offer..."}
         {step === 3 && "Credential automatically verified. Payment released."}
      </div>
    </div>
  );
};

// --- PERFORMANCE CHART ---
export const PerformanceMetricDiagram: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 p-8 bg-white rounded-xl my-8 border border-slate-200 shadow-sm">
            <h3 className="font-serif text-xl text-edu-dark">Verification Efficiency</h3>
            
            {/* Traditional */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-500 font-medium">
                    <span>Traditional Methods (Phone/Email)</span>
                    <span>2-4 Weeks</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-slate-400 rounded-full"
                    />
                </div>
            </div>

            {/* EduChain */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-edu-primary font-bold">
                    <span className="flex items-center gap-2"><Lock size={14}/> EduChain</span>
                    <span>Instant (&lt; 2s)</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden relative">
                     <div className="absolute inset-0 bg-blue-100 opacity-20"></div>
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '5%' }} // Represents instant relative to weeks
                        viewport={{ once: true }}
                        transition={{ type: 'spring', damping: 10 }}
                        className="h-full bg-edu-primary rounded-full"
                    />
                </div>
            </div>

            <div className="mt-4 p-4 bg-slate-50 rounded-lg flex items-start gap-3">
                <Clock className="text-edu-primary mt-1" size={20} />
                <div>
                    <h4 className="text-sm font-bold text-slate-800">Eliminate Delays</h4>
                    <p className="text-xs text-slate-600 mt-1">Employers save thousands in administrative costs and weeks of waiting time by switching to automated blockchain verification.</p>
                </div>
            </div>
        </div>
    )
}