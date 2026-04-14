import React, { useState } from 'react';

const RiskSimulator = () => {
  // Estados Iniciais
  const [employees, setEmployees] = useState(1000);
  const [ctr, setCtr] = useState(15);
  const [costPerIncident, setCostPerIncident] = useState(5000);
  const [trainingActive, setTrainingActive] = useState(false);

  // Lógica de Negócio (Matemática do Risco)
  // AJUSTADO PARA 0.62 (62%) PARA BATER COM O TEXTO DA SECÇÃO 11
  const trainingEffectiveness = 0.62; 
  const grossRisk = employees * (ctr / 100) * costPerIncident;
  
  const currentCtr = trainingActive ? ctr * (1 - trainingEffectiveness) : ctr;
  const currentRisk = employees * (currentCtr / 100) * costPerIncident;
  
  const potentialSavings = grossRisk - currentRisk;

  // Formatador de Moeda Padrão
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Formatador do Eixo Y (Abreviações K e M) - CORRIGIDO O ARREDONDAMENTO
  const formatAxis = (value) => {
    if (value >= 1000000) return `$${Number((value / 1000000).toFixed(1))}M`;
    if (value >= 1000) return `$${Number((value / 1000).toFixed(1))}K`;
    return `$${value}`;
  };

  // Cálculo Dinâmico do Eixo Y Máximo
  const getScaleMax = (value) => {
    if (value === 0) return 1000;
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    let ceil = Math.ceil(value / magnitude);
    return ceil * magnitude;
  };
  const maxY = getScaleMax(grossRisk > 0 ? grossRisk : 1000);

  // Status de Risco
  const getRiskStatus = () => {
    if (currentRisk > 1000000) return { label: "RISCO CRÍTICO", color: "text-red-500", desc: "Ameaça iminente à continuidade dos negócios." };
    if (currentRisk > 250000) return { label: "RISCO ALTO", color: "text-orange-500", desc: "Exposição financeira significativa." };
    if (currentRisk > 50000) return { label: "RISCO MODERADO", color: "text-yellow-500", desc: "Vulnerabilidade tática detetada." };
    return { label: "RISCO CONTROLADO", color: "text-emerald-500", desc: "Postura defensiva estabilizada." };
  };

  const status = getRiskStatus();

  return (
    <div className="bg-[#1a1b23] border border-slate-700/50 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl font-sans text-slate-300">
      
      {/* HEADER DA CALCULADORA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-white font-bold tracking-widest text-sm md:text-base">REVOLUXTI // QUANTITATIVE RISK ANALYZER</h3>
          <div className="flex items-center gap-2 mt-2 text-xs font-mono">
            <span className={`font-bold ${status.color}`}>▶ STATUS: {status.label}.</span>
            <span className="text-slate-500 hidden sm:inline">{status.desc}</span>
          </div>
        </div>
        <div className="flex gap-4 md:gap-8 text-right">
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase">Risco Bruto</div>
            <div className="font-mono text-white font-bold">{formatCurrency(grossRisk)}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase">Risco Atual</div>
            <div className={`font-mono font-bold transition-colors duration-500 ${trainingActive ? 'text-emerald-400' : 'text-red-400'}`}>
              {formatCurrency(currentRisk)}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase">Economia Pot.</div>
            <div className="font-mono text-cyan-400 font-bold transition-all">{formatCurrency(potentialSavings)}</div>
          </div>
        </div>
      </div>

      {/* DISPLAY DO TERMINAL & GRÁFICO */}
      <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-6 mb-8 relative overflow-hidden flex flex-col lg:flex-row gap-8">
        {/* Grid Background Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        {/* Console Data (Lado Esquerdo) */}
        <div className="font-mono text-sm space-y-2 relative z-10 flex-1">
          <div className="text-cyan-400 font-bold border-b border-slate-800 pb-2 mb-4 inline-block">PHISHING_RISK_MATRIX_V1.1</div>
          <div className="text-slate-400"><span className="text-slate-600">&gt;</span> FUNCIONÁRIOS: <span className="text-slate-200">{employees.toLocaleString('pt-BR')}</span></div>
          <div className="text-slate-400"><span className="text-slate-600">&gt;</span> TAXA_CLIQUE: <span className="text-slate-200">{ctr}%</span></div>
          <div className="text-slate-400"><span className="text-slate-600">&gt;</span> IMPACTO_UNIT: <span className="text-slate-200">{formatCurrency(costPerIncident)}</span></div>
          <div className="text-slate-400"><span className="text-slate-600">&gt;</span> TREINAMENTO: <span className={`transition-colors ${trainingActive ? "text-emerald-400 font-bold" : "text-slate-500"}`}>{trainingActive ? "ATIVADO (-62%)" : "DESATIVADO"}</span></div>
          
          <div className="pt-4 mt-2">
            <span className={`font-bold transition-colors ${trainingActive ? "text-emerald-500" : "text-red-500"}`}>
              [!] EXPOSIÇÃO_TÁTICA_ATUAL: {formatCurrency(currentRisk)}
            </span>
          </div>
        </div>

        {/* Gráfico Dinâmico (Lado Direito) */}
        <div className="relative z-10 flex-1 w-full max-w-sm mx-auto mt-4 lg:mt-0 pb-6">
          <div className="text-center text-[10px] font-mono text-slate-500 mb-6 uppercase tracking-widest">Impacto Financeiro Anual</div>
          
          <div className="flex items-end justify-center gap-12 sm:gap-20 h-40 border-b border-l border-slate-800 relative">
            
            {/* Eixo Y Dinâmico */}
            <div className="absolute -left-14 bottom-0 h-full flex flex-col justify-between text-[10px] font-mono text-slate-600 items-end pr-2 w-14 pb-1">
              <span>{formatAxis(maxY)}</span>
              <span>{formatAxis(maxY / 2)}</span>
              <span>$0</span>
            </div>

            {/* Linhas de Grade */}
            <div className="absolute left-0 bottom-1/2 w-full h-px bg-slate-800/50 border-b border-dashed border-slate-800 pointer-events-none"></div>
            <div className="absolute left-0 top-0 w-full h-px bg-slate-800/50 border-b border-dashed border-slate-800 pointer-events-none"></div>

            {/* Barra 1: Risco Bruto */}
            <div className="w-12 sm:w-16 h-full relative group">
              <div 
                className="absolute bottom-0 w-full bg-slate-800 border-t-2 border-slate-600 rounded-t-sm transition-all duration-300 ease-out"
                style={{ height: `${(grossRisk / maxY) * 100}%` }}
              >
                {/* Tooltip Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[11px] font-mono text-white bg-black px-2 py-1 rounded border border-slate-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-xl">
                  {formatCurrency(grossRisk)}
                </div>
              </div>
              <div className="absolute -bottom-6 w-full text-center text-[9px] font-bold text-slate-500 uppercase">Risco Bruto</div>
            </div>

            {/* Barra 2: Risco Atual */}
            <div className="w-12 sm:w-16 h-full relative group">
              <div 
                className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-500 ease-out border-t-2 ${trainingActive ? 'bg-emerald-900/60 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'bg-red-900/60 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]'}`}
                style={{ height: `${(currentRisk / maxY) * 100}%` }}
              >
                {/* Tooltip Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[11px] font-mono text-white bg-black px-2 py-1 rounded border border-slate-500/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-xl">
                  {formatCurrency(currentRisk)}
                </div>
              </div>
              <div className="absolute -bottom-6 w-full text-center text-[9px] font-bold text-slate-300 uppercase">Risco Atual</div>
            </div>

          </div>
        </div>
      </div>

      {/* CONTROLO DOS SLIDERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        
        {/* Colaboradores */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xs font-bold text-slate-400 w-32">Colaboradores</label>
          <input 
            type="range" min="10" max="10000" step="10" 
            value={employees} onChange={(e) => setEmployees(Number(e.target.value))}
            className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-300" 
          />
          <div className="bg-[#0f111a] border border-slate-700 px-3 py-1 rounded text-xs font-mono w-20 text-center">{employees}</div>
        </div>

        {/* CTR Atual */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xs font-bold text-slate-400 w-32">CTR Atual (%)</label>
          <input 
            type="range" min="1" max="50" step="1" 
            value={ctr} onChange={(e) => setCtr(Number(e.target.value))}
            className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-300" 
          />
          <div className="bg-[#0f111a] border border-slate-700 px-3 py-1 rounded text-xs font-mono w-20 text-center">{ctr}%</div>
        </div>

        {/* Custo / Incidente */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xs font-bold text-slate-400 w-32">Custo/Incidente</label>
          <input 
            type="range" min="1000" max="50000" step="1000" 
            value={costPerIncident} onChange={(e) => setCostPerIncident(Number(e.target.value))}
            className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-300" 
          />
          <div className="bg-[#0f111a] border border-slate-700 px-3 py-1 rounded text-xs font-mono w-20 text-center">${costPerIncident}</div>
        </div>

        {/* Toggle Treino */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xs font-bold text-slate-400 w-32">Treino REVOLUXTI</label>
          <div className="flex-1 flex justify-end pr-2">
            <button 
              onClick={() => setTrainingActive(!trainingActive)}
              className={`w-14 h-7 rounded-full transition-colors duration-300 relative flex items-center shadow-inner ${trainingActive ? 'bg-emerald-500' : 'bg-slate-700'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ease-out transform ${trainingActive ? 'translate-x-8' : 'translate-x-1'}`}></div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RiskSimulator;