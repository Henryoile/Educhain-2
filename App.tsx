/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, Shield, Wallet, GraduationCap, Building2 } from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-start p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-edu-primary/30 transition-all duration-300 w-full" style={{ animationDelay: delay }}>
      <div className="p-3 rounded-lg bg-edu-light text-edu-primary mb-4 group-hover:bg-edu-primary group-hover:text-white transition-colors">
         <Icon size={24} />
      </div>
      <h3 className="font-serif text-xl text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-edu-primary selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-edu-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-blue-500/30">E</div>
            <span className={`font-serif font-bold text-xl tracking-tight transition-opacity text-slate-900`}>
              EduChain
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-500">
            <a href="#problem" onClick={scrollToSection('problem')} className="hover:text-edu-primary transition-colors cursor-pointer">The Problem</a>
            <a href="#solution" onClick={scrollToSection('solution')} className="hover:text-edu-primary transition-colors cursor-pointer">Solution</a>
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-edu-primary transition-colors cursor-pointer">Key Features</a>
            <a href="#roadmap" onClick={scrollToSection('roadmap')} className="hover:text-edu-primary transition-colors cursor-pointer">Roadmap</a>
            <button className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-edu-primary transition-colors shadow-sm cursor-pointer font-medium">
              Launch DApp
            </button>
          </div>

          <button className="md:hidden text-slate-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#problem" onClick={scrollToSection('problem')} className="hover:text-edu-primary">The Problem</a>
            <a href="#solution" onClick={scrollToSection('solution')} className="hover:text-edu-primary">Solution</a>
            <a href="#features" onClick={scrollToSection('features')} className="hover:text-edu-primary">Features</a>
            <button className="px-8 py-3 bg-edu-primary text-white rounded-full shadow-lg">
              Launch DApp
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(248,250,252,0.8)_0%,rgba(248,250,252,0.95)_60%,#F8FAFC_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-1.5 border border-edu-primary/20 bg-blue-50 text-edu-primary text-xs tracking-widest uppercase font-bold rounded-full">
            Trustless Credential Verification
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 text-slate-900 tracking-tight">
            Secure the Future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-edu-primary to-edu-accent">Academic Records</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-light">
            A blockchain-powered platform enabling instant verification of diplomas, transcripts, and certifications for students, institutions, and employers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="#features" onClick={scrollToSection('features')} className="px-8 py-4 bg-edu-primary text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                Explore Platform
             </a>
             <a href="#problem" onClick={scrollToSection('problem')} className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Learn More
             </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <ArrowDown className="text-slate-400" />
        </div>
      </header>

      <main>
        {/* Problem Statement */}
        <section id="problem" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-slate-500 uppercase">Problem Statement</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-slate-900">The Crisis of Credential Fraud</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Academic fraud is a global issue. Forged diplomas and falsified transcripts undermine the integrity of education and hiring processes. 
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold mt-1">!</span>
                      <span>Employers struggle to verify qualifications efficiently.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold mt-1">!</span>
                      <span>Genuine graduates face delays and skepticism.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold mt-1">!</span>
                      <span>Traditional verification is costly, slow, and manual.</span>
                  </li>
              </ul>
            </div>
            <div className="md:col-span-7">
               <PerformanceMetricDiagram />
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-edu-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-slate-200 shadow-sm">
                        <Shield size={14}/> PROJECT OBJECTIVES
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">Blockchain-Powered Trust</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                       EduChain creates a tamper-proof infrastructure where institutions issue credentials directly to the blockchain. Students hold these in a secure wallet, and employers verify them instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="font-serif text-2xl mb-4 text-slate-900">How It Works</h3>
                        <p className="text-slate-600 mb-6">
                            When an institution issues a diploma, a cryptographic hash is stored on the Ethereum blockchain via IPFS. This creates an immutable record that cannot be forged or altered.
                        </p>
                        <p className="text-slate-600 mb-6">
                            Smart contracts facilitate the interaction between all parties, ensuring that data access is controlled and payments for verification (if any) are automated.
                        </p>
                    </div>
                    <div>
                        <SurfaceCodeDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Tech Stack / Methodology */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-edu-primary blur-[100px] absolute top-[-100px] right-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-purple-600 blur-[100px] absolute bottom-[-100px] left-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1">
                        <TransformerDecoderDiagram />
                     </div>
                     <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-edu-accent text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-slate-700">
                            METHODOLOGY
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Smart Contract Hiring</h2>
                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                            Beyond simple verification, EduChain enables <strong>Smart Contract Job Offers</strong>. Payments can be locked in escrow and released automatically upon verification of credentials or completion of milestones.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm font-mono text-slate-400 mt-8">
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-edu-primary rounded-full"></div>React.js Frontend</div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-edu-primary rounded-full"></div>Node.js & Express</div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-edu-primary rounded-full"></div>Ethereum Smart Contracts</div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-edu-primary rounded-full"></div>IPFS Storage</div>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-slate-500 uppercase">CORE FUNCTIONALITY</div>
                    <h2 className="font-serif text-4xl mb-6 text-slate-900">Platform Features</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard 
                        title="Academic Wallet" 
                        desc="A secure digital wallet for students to store and showcase verified transcripts globally."
                        icon={Wallet}
                        delay="0s"
                    />
                    <FeatureCard 
                        title="Instant Verification" 
                        desc="Employers can confirm candidate qualifications with a single click, eliminating fraud."
                        icon={Shield}
                        delay="0.1s"
                    />
                    <FeatureCard 
                        title="Institution Portal" 
                        desc="Universities can easily upload and mint tamper-proof academic records to the blockchain."
                        icon={Building2}
                        delay="0.2s"
                    />
                    <FeatureCard 
                        title="Smart Hiring" 
                        desc="Automated contract agreements that secure payments based on verified credentials."
                        icon={GraduationCap}
                        delay="0.3s"
                    />
                </div>
            </div>
        </section>

        {/* Roadmap / Impact */}
        <section id="roadmap" className="py-24 bg-[#F8FAFC] border-t border-slate-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-white rounded-xl overflow-hidden relative border border-slate-200 shadow-md">
                        <QuantumComputerScene />
                        <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-slate-400 font-mono">Immutable Digital Credential Visualization</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-slate-500 uppercase">FUTURE SCOPE</div>
                    <h2 className="font-serif text-4xl mb-6 text-slate-900">Roadmap & Scalability</h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        The current prototype demonstrates the core verification loop. Future development phases will focus on mass adoption and advanced integrations.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-slate-400">1</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Prototype Phase</h4>
                                <p className="text-sm text-slate-600">Web3 wallet integration and basic issuance/verification logic.</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-edu-primary">2</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Expansion</h4>
                                <p className="text-sm text-slate-600">Mobile app development for "On-the-go" credentials and AI job matching.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 flex-shrink-0 bg-white border border-slate-200 rounded-full flex items-center justify-center font-bold text-slate-400">3</div>
                            <div>
                                <h4 className="font-bold text-slate-900">Global Standard</h4>
                                <p className="text-sm text-slate-600">Partnerships with international universities for cross-border verification.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2 flex items-center gap-2">
                    <div className="w-8 h-8 bg-edu-primary rounded flex items-center justify-center text-sm">E</div>
                    EduChain
                </div>
                <p className="text-sm max-w-sm mt-4">Empowering students and employers with trustless, blockchain-verified academic credentials.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors">Documentation</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">Whitepaper</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-slate-600 border-t border-slate-800 pt-8">
            © 2024 EduChain Project. Built with React & Ethereum.
        </div>
      </footer>
    </div>
  );
};

export default App;