import React, { useState } from 'react';
import HistoryInfographic from './HistoryInfographic';
import MotherboardOnboardArticle from './MotherboardOnboardArticle';
import MotherboardOffboardArticle from './MotherboardOffboardArticle';
import ProcessorsArticle from './ProcessorsArticle';

const App = () => {
  const [currentChapter, setCurrentChapter] = useState('00'); // Começando no Cap 02 para testar

  return (
    <div className="flex flex-col h-screen bg-slate-950 overflow-hidden font-sans">
      
      {/* Barra de Navegação Superior Fixa */}
      {/* Adicionado 'relative' para permitir o posicionamento absoluto do menu central */}
      <nav className="h-14 border-b border-slate-800 bg-slate-900/95 backdrop-blur flex items-center justify-between px-6 z-50 shrink-0 shadow-lg shadow-black/20 relative">
        
        {/* Lado Esquerdo: Logo */}
        

        {/* Centro: Menu de Capítulos */}
        {/* Adicionado 'absolute left-1/2 -translate-x-1/2' para centralização perfeita */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-2 bg-slate-950/50 p-1 rounded-full border border-slate-800">
          
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

        {/* Lado Direito: Versão */}
        <div className="text-[10px] text-slate-500 font-mono hidden md:block opacity-60">
          V.1.0.5 | SYSTEM READY
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <div className="flex-1 relative overflow-y-auto scroll-smooth bg-slate-950">
        
        {currentChapter === '00' && <HistoryInfographic />}
        {currentChapter === '01' && <MotherboardOnboardArticle />}
        {currentChapter === '02' && <MotherboardOffboardArticle />}
        {currentChapter === '03' && <ProcessorsArticle />}
        

      </div>
    </div>
  );
};

export default App;