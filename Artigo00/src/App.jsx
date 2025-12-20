import React, { useState } from 'react';
import HistoryInfographic from './HistoryInfographic'; // Seu Cap 00
import MotherboardOnboardArticle from './MotherboardOnboardArticle'; // Seu Cap 01

function App() {
  // Estado para controlar qual capítulo está sendo exibido
  // '00' para ENIAC, '01' para Placa Mãe
  const [currentChapter, setCurrentChapter] = useState('01'); 

  return (
    <div>
      {/* Menu de Navegação Temporário (Só para você testar) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-slate-800 p-2 flex justify-center gap-4">
        <button 
          onClick={() => setCurrentChapter('00')}
          className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${currentChapter === '00' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'}`}
        >
          CAP 00: ENIAC
        </button>
        <button 
          onClick={() => setCurrentChapter('01')}
          className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${currentChapter === '01' ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'}`}
        >
          CAP 01: ON-BOARD
        </button>
      </nav>

      {/* Renderização Condicional */}
      {currentChapter === '00' && <HistoryInfographic />}
      {currentChapter === '01' && <MotherboardOnboardArticle />}
    </div>
  );
}

export default App;