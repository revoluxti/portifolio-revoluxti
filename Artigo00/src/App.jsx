import React, { useState } from 'react';
import HistoryInfographic from './HistoryInfographic';
import MotherboardOnboardArticle from './MotherboardOnboardArticle';
import MotherboardOffboardArticle from './MotherboardOffboardArticle';

const App = () => {
  const [currentChapter, setCurrentChapter] = useState('00'); // Começando no Cap 02 para testar

  return (
    <div className="flex flex-col h-screen bg-slate-950 overflow-hidden font-sans">
      
      {/* Barra de Navegação Superior Fixa */}
      <nav className="h-14 border-b border-slate-800 bg-slate-900/95 backdrop-blur flex items-center justify-between px-6 z-50 shrink-0 shadow-lg shadow-black/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          <span className="text-slate-200 font-bold tracking-widest text-sm">
            MUSEU <span className="text-slate-500">DO HARDWARE</span>
          </span>
        </div>

        {/* Menu de Capítulos */}
        <div className="flex gap-2 bg-slate-950/50 p-1 rounded-full border border-slate-800">
          
          <button 
            onClick={() => setCurrentChapter('00')}
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
              currentChapter === '00' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            CAP 00
          </button>

          <button 
            onClick={() => setCurrentChapter('01')}
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
              currentChapter === '01' 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            CAP 01
          </button>

          <button 
            onClick={() => setCurrentChapter('02')}
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
              currentChapter === '02' 
                ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-900/50 scale-105' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            CAP 02
          </button>

          <button 
             onClick={() => setCurrentChapter('03')}
             className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
              currentChapter === '03' 
                ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' 
                : 'text-slate-600 hover:text-slate-300 hover:bg-slate-900'
            }`}
          >
            CAP 03
          </button>

        </div>

        <div className="text-[10px] text-slate-500 font-mono hidden md:block opacity-60">
          V.1.0.5 | SYSTEM READY
        </div>
      </nav>

      {/* CORREÇÃO AQUI: 
         overflow-y-auto: Permite rolar o conteúdo verticalmente.
         scroll-smooth: Deixa a rolagem suave.
      */}
      <div className="flex-1 relative overflow-y-auto scroll-smooth bg-slate-950">
        
        {currentChapter === '00' && <HistoryInfographic />}
        {currentChapter === '01' && <MotherboardOnboardArticle />}
        {currentChapter === '02' && <MotherboardOffboardArticle />}

        {currentChapter === '03' && (
          <div className="flex flex-col items-center justify-center min-h-full text-white font-mono bg-black relative">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
            <div className="z-10 text-center p-12 border border-green-500/30 rounded-2xl bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-green-900/20">
              <h1 className="text-6xl font-black text-green-500 mb-4 tracking-tighter animate-pulse">CAPÍTULO 03</h1>
              <h2 className="text-3xl text-slate-200 font-light mb-8">PROCESSADORES</h2>
              <div className="text-green-400/60 text-sm font-mono border-t border-green-500/20 pt-4">
                STATUS: AGUARDANDO DADOS...
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;