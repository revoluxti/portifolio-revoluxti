import React, { useState } from 'react';
import { Cpu, ShieldCheck, Terminal } from 'lucide-react';

// IMPORTS DOS SEUS ARTIGOS EXISTENTES
import HistoryInfographic from './HistoryInfographic';
import MotherboardOnboardArticle from './MotherboardOnboardArticle';
import MotherboardOffboardArticle from './MotherboardOffboardArticle';
import ProcessorsArticle from './ProcessorsArticle';
import InfraDataCenter from './InfraDataCenter'; // <-- NOVO IMPORT

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
      <nav className="h-16 border-b border-slate-800 bg-slate-900/95 backdrop-blur flex items-center justify-between px-2 md:px-6 z-50 shrink-0 shadow-lg shadow-black/40 relative overflow-hidden">
        
        {/* Lado Esquerdo: Identidade Dinâmica (Fica menor em telas pequenas) */}
        <div className="flex items-center gap-2 md:gap-3 w-auto shrink-0 z-10">
           <div className={`p-1.5 md:p-2 rounded-lg border transition-all duration-500 ${
              systemMode === 'DEVSECOPS' 
                ? 'bg-[#2a0505] border-[#b3120c]/50 text-[#fd8f00]' 
                : 'bg-blue-950/50 border-blue-500/50 text-blue-400'
           }`}>
              {systemMode === 'DEVSECOPS' ? <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" /> : <Cpu className="w-4 h-4 md:w-5 md:h-5" />}
           </div>
           {/* Esconde o texto "Hardware" se o iframe for muito estreito */}
           <div className="flex-col hidden sm:flex">
              <span className="text-[10px] text-[#a09494] font-mono tracking-widest uppercase">Módulo Ativo</span>
              <span className={`text-xs font-bold transition-colors duration-500`} 
                    style={{ color: systemMode === 'DEVSECOPS' ? brandRed : '#60a5fa' }}>
                 {systemMode}
              </span>
           </div>
        </div>

        {/* Centro: Controlador de Capítulos (Flexível e Responsivo) */}
        <div className="flex-1 flex justify-center overflow-x-auto no-scrollbar mx-2 z-10">
          <div className="flex items-center gap-1 bg-slate-950 p-1 md:p-1.5 rounded-full border border-slate-800 shadow-2xl shrink-0">
            
            {/* GRUPO 1: HARDWARE */}
            <div className="flex gap-1">
              <button 
                onClick={() => handleNavigation('00', 'HARDWARE')}
                className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  currentChapter === '00' 
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'text-[#a09494] hover:text-white hover:bg-slate-900'
                }`}
              >
                CAP 00
              </button>

              <button 
                onClick={() => handleNavigation('01', 'HARDWARE')}
                className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  currentChapter === '01' 
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                    : 'text-[#a09494] hover:text-white hover:bg-slate-900'
                }`}
              >
                CAP 01
              </button>

              <button 
                onClick={() => handleNavigation('02', 'HARDWARE')}
                className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  currentChapter === '02' 
                    ? 'bg-fuchsia-600 text-white shadow-[0_0_15px_rgba(192,38,211,0.4)]' 
                    : 'text-[#a09494] hover:text-white hover:bg-slate-900'
                }`}
              >
                CAP 02
              </button>

              <button 
                onClick={() => handleNavigation('03', 'HARDWARE')}
                className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  currentChapter === '03' 
                    ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' 
                    : 'text-[#a09494] hover:text-white hover:bg-slate-900'
                }`}
              >
                CAP 03
              </button>
              
              {/* NOVO BOTÃO CAP 04 */}
              <button 
                onClick={() => handleNavigation('04', 'HARDWARE')}
                className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
                  currentChapter === '04' 
                    ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.4)]' 
                    : 'text-[#a09494] hover:text-white hover:bg-slate-900'
                }`}
              >
                CAP 04
              </button>
            </div>

          </div>
        </div>

        {/* Lado Direito: Status do Sistema (Esconde em iframes muito curtos) */}
        <div className="w-auto md:w-40 flex-col items-end opacity-70 hidden lg:flex shrink-0 z-10">
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
        {currentChapter === '04' && <InfraDataCenter />} {/* <-- NOVA RENDERIZAÇÃO */}

      </div>
    </div>
  );
};

export default App;