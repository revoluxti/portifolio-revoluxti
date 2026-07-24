import React, { useState, useEffect } from 'react';
import { Terminal, Network } from 'lucide-react';

// IMPORT DO NOVO ARTIGO (MÓDULO 02 - REDES / DEVSECOPS)
import EngenhariaRedes from './EngenhariaRedes';

const App = () => {
  // O estado inicial já começa no capítulo 05 e no modo correto
  const [currentChapter, setCurrentChapter] = useState('05');
  const systemMode = 'DEVSECOPS'; 

  const brandRed = '#b3120c';

  // --- SISTEMA DE DEFESA ATIVA REVOLUXTI ---
  useEffect(() => {
    // Mensagem de aviso estilizada direto no Console
    console.log(
      "%c[ AMBIENTE SECURE REVOLUXTI ]\n%c⚠️ Monitoramento Ativo. Tentativas de engenharia reversa, injeção de payload ou manipulação do DOM são registradas.",
      "color: #b3120c; font-size: 18px; font-weight: 900; font-family: monospace;",
      "color: #a09494; font-size: 12px; font-family: monospace;"
    );

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      // Bloqueia F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C e Ctrl+U (Maiúsculas e Minúsculas)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
        alert("⚠️ SECURITY WARNING: Ambiente monitorado Revoluxti. O acesso aos recursos de inspeção foi bloqueado pelas políticas de segurança.");
      }
    };

    // Adiciona os Listeners ao montar o componente
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup dos Listeners ao desmontar o componente
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavigation = (cap) => {
    setCurrentChapter(cap);
  };

  // Matriz exclusiva para os capítulos de Redes/DevSecOps
  const networkChapters = [
    { id: '05', color: 'bg-emerald-600', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]' },
    { id: '06', color: 'bg-teal-600', shadow: 'shadow-[0_0_15px_rgba(20,184,166,0.4)]' },
    { id: '07', color: 'bg-yellow-600', shadow: 'shadow-[0_0_15px_rgba(202,138,4,0.4)]' },
    { id: '08', color: 'bg-orange-600', shadow: 'shadow-[0_0_15px_rgba(234,88,12,0.4)]' },
    { id: '09', color: 'bg-red-600', shadow: 'shadow-[0_0_15px_rgba(220,38,38,0.4)]' },
  ];

  return (
    <div className="flex flex-col h-screen bg-slate-950 overflow-hidden font-sans selection:bg-[#b3120c]/30">
      
      {/* --- BARRA DE NAVEGAÇÃO SUPERIOR (HUD) --- */}
      <nav className="h-16 border-b border-slate-800 bg-slate-900/95 backdrop-blur flex items-center justify-between px-2 md:px-6 z-50 shrink-0 shadow-lg shadow-black/40 relative overflow-hidden">
        
        {/* Lado Esquerdo: Identidade do Módulo 2 */}
        <div className="flex items-center gap-2 md:gap-3 w-auto shrink-0 z-10">
           <div className="p-1.5 md:p-2 rounded-lg border transition-all duration-500 flex items-center justify-center bg-[#2a0505] border-[#b3120c]/50 text-[#fd8f00]">
              <Network className="w-4 h-4 md:w-5 md:h-5" />
           </div>
           
           <div className="flex-col hidden sm:flex">
              <span className="text-[10px] text-[#a09494] font-mono tracking-widest uppercase">Módulo Ativo</span>
              <span className="text-xs font-bold transition-colors duration-500" style={{ color: brandRed }}>
                 {systemMode}
              </span>
           </div>
        </div>

        {/* Centro: Controlador de Capítulos (Apenas 05 ao 09) */}
        <div className="flex-1 flex justify-center overflow-x-auto no-scrollbar mx-2 z-10 py-1">
          <div className="flex items-center gap-2 bg-slate-950 p-1 md:p-1.5 rounded-full border border-slate-800 shadow-2xl shrink-0">
            
            <div className="flex gap-1">
              {networkChapters.map((cap) => (
                <button 
                  key={cap.id}
                  onClick={() => handleNavigation(cap.id)}
                  className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 ${
                    currentChapter === cap.id 
                      ? `${cap.color} text-white ${cap.shadow} border border-${cap.color.split('-')[1]}-400/50` 
                      : 'text-[#a09494] hover:text-white hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  CAP {cap.id}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Lado Direito: Status do Sistema */}
        <div className="w-auto md:w-40 flex-col items-end opacity-70 hidden lg:flex shrink-0 z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#a09494]">
             <span className="w-2 h-2 rounded-full animate-pulse bg-[#fd8f00]"></span>
             SYSTEM ONLINE
          </div>
          <div className="text-[9px] font-mono mt-0.5 text-[#ffcc00]">
             SECURE: ESTABLISHED
          </div>
        </div>

      </nav>

      {/* --- ÁREA DE CONTEÚDO PRINCIPAL --- */}
      <div className="flex-1 relative overflow-y-auto scroll-smooth bg-slate-950 custom-scrollbar">
        
        {/* Renderização Condicional dos Módulos */}
        {currentChapter === '05' && <EngenhariaRedes />}
        
        {/* MENSAGEM DE STANDBY (Aparece para os capítulos 06 a 09) */}
        {['06', '07', '08', '09'].includes(currentChapter) && (
          <div className="w-full h-full flex flex-col items-center justify-center">
             <Terminal className="w-16 h-16 text-slate-700 mb-4 animate-pulse" />
             <h2 className="text-xl font-bold text-slate-500 font-mono tracking-widest uppercase">inicializando ..</h2>
             <p className="text-slate-600 text-sm mt-2">Aguardando inserção dos dados do Capítulo {currentChapter}...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;