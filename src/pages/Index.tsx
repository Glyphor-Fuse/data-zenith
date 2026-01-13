import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowRight, LuCheck, LuZap, LuNetwork, LuShield, LuMenu } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';
import { SignatureEffect } from '../components/effects/SignatureEffect';

export default function Index() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e4e4e7] selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Space+Grotesk:wght@300;400;600;700&display=swap');
        
        :root {
          --font-display: 'Space Grotesk', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }
        
        body {
          font-family: var(--font-display);
        }

        .font-mono {
          font-family: var(--font-mono);
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #09090b;
        }
        ::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen">

        {/* LEFT RAIL (Sticky/Fixed) */}
        <aside className="hidden lg:flex flex-col justify-between h-screen sticky top-0 border-r border-white/5 bg-[#08080a] p-8 z-50">
          <div>
            <div className="mb-12 group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all duration-300"></div>
                <span className="font-bold text-xl tracking-tighter text-white">NEXUS_</span>
              </div>
              <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Intelligence Layer v2.0</p>
            </div>

            <nav className="space-y-6">
              {['Platform', 'Solutions', 'Developers'].map((item) => (
                <a key={item} href="#" className="nav-item block group">
                  <div className="flex items-center justify-between text-zinc-400 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">{item}</span>
                    <LuArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                  <div className="nav-line h-[1px] w-0 bg-zinc-800 mt-2 transition-all duration-300 group-hover:w-full group-hover:bg-indigo-500"></div>
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-mono text-xs text-zinc-600 mb-6 space-y-2">
              <div className="flex justify-between">
                <span>SYSTEM</span>
                <span className="text-emerald-500">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>LATENCY</span>
                <span>12ms</span>
              </div>
              <div className="flex justify-between">
                <span>UPTIME</span>
                <span>99.99%</span>
              </div>
            </div>
            <button className="w-full py-3 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium text-sm tracking-wide uppercase">
              Request Access
            </button>
          </div>
        </aside>

        {/* MOBILE HEADER */}
        <header className="lg:hidden flex justify-between items-center p-6 border-b border-white/10 bg-[#08080a] sticky top-0 z-50">
          <span className="font-bold text-xl tracking-tighter text-white">NEXUS_</span>
          <button className="text-white">
            <LuMenu className="text-xl" />
          </button>
        </header>

        {/* RIGHT SCROLLABLE CONTENT */}
        <main className="relative">
            
          {/* HERO SECTION */}
          <section className="relative min-h-[90vh] flex flex-col justify-end p-6 lg:p-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                   alt="Abstract Technology Grid" 
                   className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[2s] scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-4xl">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-3 py-1 border border-indigo-500/30 rounded-full bg-indigo-500/10 mb-8">
                  <SignatureEffect effect="pulse">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 block"></span>
                  </SignatureEffect>
                  <span className="font-mono text-xs text-indigo-300 tracking-wider">INTELLIGENCE ENGINE V2.0 LIVE</span>
                </div>
              </Reveal>
              
              <SignatureInteraction type="text-reveal">
                <h1 className="text-6xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                  DECODE<br />
                  THE NOISE.
                </h1>
              </SignatureInteraction>
              
              <Reveal delay={0.2}>
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <p className="text-zinc-400 text-lg lg:text-xl max-w-md leading-relaxed">
                    Transform raw data into predictive clarity. Nexus provides the backbone for next-generation enterprise decision making.
                  </p>
                  <div className="flex flex-col gap-2 font-mono text-sm text-zinc-500">
                    <div className="flex items-center gap-4">
                      <LuCheck className="text-emerald-500" />
                      <span>Real-time ingestion</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <LuCheck className="text-emerald-500" />
                      <span>Zero-latency query</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* STATS TICKER */}
          <div className="border-y border-white/10 overflow-hidden bg-black py-4">
            <SignatureInteraction type="marquee">
              <div className="flex gap-12 font-mono text-sm text-zinc-500 uppercase tracking-widest pr-12">
                <span>/// Processing: 45.2 TB/s</span>
                <span>/// Nodes Active: 8,492</span>
                <span>/// Threat Level: Low</span>
                <span>/// Encryption: AES-256</span>
                <span>/// Global Latency: 14ms</span>
              </div>
            </SignatureInteraction>
          </div>

          {/* FEATURES GRID */}
          <section className="p-6 lg:p-20">
            <Reveal>
              <div className="mb-20">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Architecture of <span className="text-indigo-500">Insight</span></h2>
                <div className="h-1 w-20 bg-indigo-500"></div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Reveal>
                <div className="glass-panel p-10 group hover:bg-white/5 transition-all duration-500 h-full">
                  <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <LuZap className="text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Instant Query</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    Query petabytes of data with sub-second latency. Our columnar storage engine is optimized for high-concurrency environments.
                  </p>
                  <div className="font-mono text-xs text-indigo-400 flex items-center gap-2">
                    READ_DOCS(QUERY_ENGINE) <LuArrowRight />
                  </div>
                </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={0.1}>
                <div className="glass-panel p-10 group hover:bg-white/5 transition-all duration-500 h-full">
                  <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <LuNetwork className="text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Neural Mapping</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    Automatically visualize relationships between disparate datasets. Discover hidden correlations without writing a single join.
                  </p>
                  <div className="font-mono text-xs text-indigo-400 flex items-center gap-2">
                    READ_DOCS(GRAPH_API) <LuArrowRight />
                  </div>
                </div>
              </Reveal>

              {/* Card 3 */}
              <Reveal>
                <div className="glass-panel p-10 group hover:bg-white/5 transition-all duration-500 h-full">
                  <div className="h-12 w-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <LuShield className="text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sovereign Security</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">
                    Enterprise-grade encryption at rest and in transit. Granular role-based access control down to the row level.
                  </p>
                  <div className="font-mono text-xs text-indigo-400 flex items-center gap-2">
                    READ_DOCS(SECURITY) <LuArrowRight />
                  </div>
                </div>
              </Reveal>

              {/* Card 4 (Image Card) */}
              <Reveal delay={0.1}>
                <div className="glass-panel relative overflow-hidden group h-full min-h-[300px]">
                  <SignatureInteraction type="clip-reveal" className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Data Dashboard" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  </SignatureInteraction>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
                  <div className="relative z-10 p-10 h-full flex flex-col justify-end pointer-events-none">
                    <h3 className="text-2xl font-bold mb-2">Visual Command</h3>
                    <p className="text-zinc-400 text-sm">Build stunning dashboards in minutes.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* BIG IMAGE BREAK */}
          <SignatureInteraction type="parallax" className="w-full h-[60vh]">
            <div className="relative w-full h-full">
              <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80" alt="Block Chain Abstract" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-mono text-sm text-indigo-400 mb-4 tracking-[0.2em]">SCALE WITHOUT LIMITS</p>
                  <h2 className="text-5xl lg:text-8xl font-bold text-white tracking-tighter">100M+</h2>
                  <p className="text-zinc-400 mt-2">Events Processed / Second</p>
                </div>
              </div>
            </div>
          </SignatureInteraction>

          {/* FINAL CTA */}
          <section className="p-6 lg:p-20 py-32 bg-[#08080a] border-t border-white/5">
            <Reveal>
              <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                  Ready to optimize your <span className="text-zinc-600">infrastructure?</span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SignatureInteraction type="hover">
                    <button className="px-8 py-4 bg-indigo-600 text-white font-bold tracking-wide hover:bg-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] w-full sm:w-auto">
                      START FREE TRIAL
                    </button>
                  </SignatureInteraction>
                  <SignatureInteraction type="hover">
                    <button className="px-8 py-4 border border-white/10 text-white font-mono hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
                      SCHEDULE DEMO
                    </button>
                  </SignatureInteraction>
                </div>
              </div>
            </Reveal>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 p-6 lg:p-12 bg-black">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
              <div className="col-span-1">
                <span className="font-bold text-lg tracking-tighter text-white">NEXUS_</span>
                <p className="text-zinc-500 mt-4"> 2024 Nexus Analytics Inc.</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-zinc-500 mb-2">PRODUCT</span>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">Features</a>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">Pricing</a>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">API</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-zinc-500 mb-2">COMPANY</span>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">About</a>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">Careers</a>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">Legal</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-zinc-500 mb-2">SOCIAL</span>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">Twitter / X</a>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">GitHub</a>
                <a href="#" className="text-zinc-300 hover:text-indigo-400 transition-colors">Discord</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
