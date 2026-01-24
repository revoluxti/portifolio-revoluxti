import React, { useState } from 'react';
import { Cpu, ShieldCheck, Terminal } from 'lucide-react';

// IMPORTS DOS SEUS ARTIGOS EXISTENTES
import HistoryInfographic from './HistoryInfographic';
import MotherboardOnboardArticle from './MotherboardOnboardArticle';
import MotherboardOffboardArticle from './MotherboardOffboardArticle';
import ProcessorsArticle from './ProcessorsArticle';

const App = () => {
  const [currentChapter, setCurrentChapter] = useState('00');
  const [systemMode, setSystemMode] = useState('HARDWARE'); // HARDWARE ou DEVSECOPS

  // Paleta Revoluxti para referência inline
  const brandRed = '#b3120c';

  const handleNavigation = (cap, mode) => {
    setCurrentChapter(cap);
    setSystemMode(mode);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-950 overflow-hidden font-sans selection:bg-[#b3120c]/30">
      
      {/* --- BARRA DE NAVEGAÇÃO SUPERIOR (HUD) --- */}
      <nav className="h-16 border-b border-slate-800 bg-slate-900/95 backdrop-blur flex items-center justify-between px-6 z-50 shrink-0 shadow-lg shadow-black/40 relative">
        
        {/* Lado Esquerdo: Identidade Dinâmica */}
        <div className="flex items-center gap-3 w-40">
           <div className={`p-2 rounded-lg border transition-all duration-500 ${
              systemMode === 'DEVSECOPS' 
                ? 'bg-[#2a0505] border-[#b3120c]/50 text-[#fd8f00]' // Revoluxti Theme
                : 'bg-blue-950/50 border-blue-500/50 text-blue-400'
           }`}>
              {systemMode === 'DEVSECOPS' ? <ShieldCheck className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] text-[#a09494] font-mono tracking-widest uppercase">Módulo Ativo</span>
              <span className={`text-xs font-bold transition-colors duration-500`} 
                    style={{ color: systemMode === 'DEVSECOPS' ? brandRed : '#60a5fa' }}>
                 {systemMode}
              </span>
           </div>
        </div>

        {/* Centro: Controlador de Capítulos (Ilha Flutuante) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-950 p-1.5 rounded-full border border-slate-800 shadow-2xl">
          
          {/* GRUPO 1: HARDWARE (Eniac Room) */}
          <div className="flex gap-1 pr-3 border-r border-slate-800 mr-1">
            <button 
              onClick={() => handleNavigation('00', 'HARDWARE')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentChapter === '00' 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'text-[#a09494] hover:text-white hover:bg-slate-900'
              }`}
            >
              CAP 00
            </button>

            <button 
              onClick={() => handleNavigation('01', 'HARDWARE')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentChapter === '01' 
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                  : 'text-[#a09494] hover:text-white hover:bg-slate-900'
              }`}
            >
              CAP 01
            </button>

            <button 
              onClick={() => handleNavigation('02', 'HARDWARE')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentChapter === '02' 
                  ? 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.4)]' 
                  : 'text-[#a09494] hover:text-white hover:bg-slate-900'
              }`}
            >
              CAP 02
            </button>

            <button 
              onClick={() => handleNavigation('03', 'HARDWARE')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentChapter === '03' 
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' 
                  : 'text-[#a09494] hover:text-white hover:bg-slate-900'
              }`}
            >
              CAP 03
            </button>
          </div>


        </div>

        {/* Lado Direito: Status do Sistema */}
        <div className="w-40 flex flex-col items-end opacity-70 hidden md:flex">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#a09494]">
             <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: systemMode === 'DEVSECOPS' ? '#fd8f00' : '#10b981' }}></span>
             SYSTEM ONLINE
          </div>
          <div className="text-[9px] font-mono mt-0.5" style={{ color: systemMode === 'DEVSECOPS' ? '#ffcc00' : '#475569' }}>
             ISO 20000: COMPLIANT
          </div>
        </div>

      </nav>

      {/* --- ÁREA DE CONTEÚDO PRINCIPAL --- */}
      <div className="flex-1 relative overflow-y-auto scroll-smooth bg-slate-950 custom-scrollbar">
        
        {/* Renderização Condicional dos Módulos */}
        
        {/* Niche 1: Hardware Lab */}
        {currentChapter === '00' && <HistoryInfographic />}
        {currentChapter === '01' && <MotherboardOnboardArticle />}
        {currentChapter === '02' && <MotherboardOffboardArticle />}
        {currentChapter === '03' && <ProcessorsArticle />}

      </div>
    </div>
  );
};

export default App;