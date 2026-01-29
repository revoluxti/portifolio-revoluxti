import { useState } from 'react';
import { 
  Hammer, Workflow, GitGraph, Bot, 
  CheckCircle2, Cpu, Zap, Layers, ArrowRight,
  Shield, Lock, Network, Database // Ícones da sua lista
} from 'lucide-react';

// ... (Dentro do seu componente principal)

// STATE PARA O NOVO MATURITY MODEL
const [maturityLevel, setMaturityLevel] = useState(1);

// DADOS ATUALIZADOS COM NOVA PALETA DE CORES (Baseada no Escopo)
const maturityData = {
  1: {
    id: 1,
    title: "LVL 1: LEGACY FRUITION",
    short: "Legacy",
    desc: "Operação reativa baseada em silos. A segurança é um gargalo manual que freia a inovação. O custo do retrabalho é alto.",
    // Vermelho/Laranja para "Perigo/Obsoleto"
    color: "text-rose-500",
    borderColor: "border-rose-500/50",
    shadow: "shadow-rose-500/50",
    bgGradient: "from-rose-950/50 to-slate-950",
    icon: <Hammer className="w-8 h-8" />,
    mainIcon: <Lock className="w-16 h-16 text-rose-500 opacity-80" />,
    features: ["Processos Manuais", "Segurança como Bloqueio", "Visibilidade Zero"]
  },
  2: {
    id: 2,
    title: "LVL 2: AUTOMATED PIPELINES",
    short: "Automated",
    desc: "Introdução de esteiras CI/CD. Scans básicos automatizados reduzem o erro humano, mas ainda falta contexto de negócio.",
    // Azul Elétrico do Escopo
    color: "text-blue-400",
    borderColor: "border-blue-500/50",
    shadow: "shadow-blue-500/50",
    bgGradient: "from-blue-950/50 to-slate-950",
    icon: <Workflow className="w-8 h-8" />,
    mainIcon: <Network className="w-16 h-16 text-blue-400 opacity-80" />,
    features: ["CI/CD Integrado", "SAST/DAST Básico", "Padronização Inicial"]
  },
  3: {
    id: 3,
    title: "LVL 3: INTEGRATED DEFENSE",
    short: "Integrated",
    desc: "Cultura 'Secure by Design'. Segurança integrada no código e na infraestrutura (IaC). Times de Dev e Sec atuam juntos.",
    // Roxo/Violeta do Escopo
    color: "text-violet-400",
    borderColor: "border-violet-500/50",
    shadow: "shadow-violet-500/50",
    bgGradient: "from-violet-950/50 to-slate-950",
    icon: <GitGraph className="w-8 h-8" />,
    mainIcon: <Layers className="w-16 h-16 text-violet-400 opacity-80" />,
    features: ["Policy as Code (OPA)", "Security Champions", "Gestão de Vulnerabilidades"]
  },
  4: {
    id: 4,
    title: "LVL 4: COGNITIVE AUTONOMY",
    short: "REVOLUXTI AI",
    desc: "O estado da arte. IA preditiva, auto-remediação e defesa autônoma em tempo real. Segurança torna-se vantagem competitiva.",
    // Ciano/Turquesa Brilhante (O "Alvo" do Escopo)
    color: "text-cyan-400",
    borderColor: "border-cyan-400/80",
    shadow: "shadow-cyan-400/80",
    bgGradient: "from-cyan-950/50 to-slate-950",
    icon: <Bot className="w-8 h-8 animate-pulse" />,
    mainIcon: <Cpu className="w-16 h-16 text-cyan-400 animate-[spin_10s_linear_infinite] opacity-80" />,
    features: ["IA Threat Hunting", "Self-Healing Infra", "Zero Trust Absoluto"]
  }
};

const activeData = maturityData[maturityLevel];

// ... DENTRO DO RETURN (JSX) ...

{/* ---------------------------------------------------------------------
    MÓDULO: MATURITY MODEL (NEURAL PATHWAY DESIGN)
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800 relative overflow-hidden">
  
  {/* Background Circuit Pattern (Do Escopo) */}
  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30"></div>


  <div className="text-center mb-16 relative z-10">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0202] border border-slate-800 text-xs font-mono text-slate-400 mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <Zap className="w-3 h-3 text-cyan-500" /> EVOLUTION PATHWAY
    </div>
    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
      A Jornada da <span className="text-cyan-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Defesa Cognitiva</span>
    </h2>
    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
      Navegue pelos estágios de maturidade e descubra como a REVOLUXTI transforma a segurança de um gargalo operacional em uma vantagem estratégica.
    </p>
  </div>

  {/* ================= CONDUÍTE NEURAL (NAVEGAÇÃO) ================= */}
  <div className="relative z-20 mb-12">
    {/* Linhas de Conexão (Fundo) */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-900 -translate-y-1/2 rounded-full overflow-hidden">
       {/* Barra de Progresso Luminosa */}
       <div 
         className={`h-full transition-all duration-700 ease-out bg-gradient-to-r 
           ${maturityLevel === 1 ? 'from-rose-900 via-rose-600 to-rose-500 w-[12%]' : 
             maturityLevel === 2 ? 'from-rose-900 via-blue-600 to-blue-500 w-[38%]' : 
             maturityLevel === 3 ? 'from-blue-900 via-violet-600 to-violet-500 w-[63%]' : 
             'from-violet-900 via-cyan-600 to-cyan-400 w-[100%]'}`}
       ></div>
    </div>

    {/* Nós Interativos */}
    <div className="relative flex justify-between items-center max-w-4xl mx-auto">
      {[1, 2, 3, 4].map((level) => {
        const isActive = maturityLevel >= level;
        const isSelected = maturityLevel === level;
        const data = maturityData[level];
        
        return (
          <button
            key={level}
            onClick={() => setMaturityLevel(level)}
            className={`relative group flex flex-col items-center gap-3 transition-all duration-300 outline-none ${isSelected ? 'scale-110' : 'scale-100 hover:scale-105'}`}
          >
            {/* O Nó Hexagonal/Circular */}
            <div className={`w-16 h-16 rounded-2xl rotate-45 flex items-center justify-center border-2 transition-all duration-500 backdrop-blur-md z-10
              ${isActive 
                ? `${data.bgGradient} ${data.borderColor} text-white shadow-[0_0_25px_rgba(0,0,0,0.5)] ${isSelected ? data.shadow : ''}` 
                : 'bg-[#0a0202] border-slate-800 text-slate-600 hover:border-slate-600 hover:text-slate-400'}`}>
              <div className="-rotate-45">
                {React.cloneElement(data.icon, { className: `w-6 h-6 transition-all duration-300 ${isSelected ? data.color : isActive ? 'text-white' : 'text-slate-600'}` })}
              </div>
            </div>
            
            {/* Label do Nó */}
            <div className={`absolute -bottom-10 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300
              ${isSelected ? data.color : isActive ? 'text-slate-300' : 'text-slate-600'}`}>
              {data.short}
            </div>

            {/* Efeito de Conexão Ativa (Ponto de Luz) */}
            {isActive && level < 4 && (
              <div className={`absolute top-1/2 -right-[50%] w-full h-[2px] -translate-y-1/2 hidden md:block overflow-hidden z-0`}>
                 <div className={`w-full h-full bg-gradient-to-r from-transparent via-${data.color.split('-')[1]}-500 to-transparent animate-[shimmer_2s_infinite]`}></div>
              </div>
            )}
          </button>
        );
      })}
    </div>
  </div>
  {/* ================= FIM DO CONDUÍTE ================= */}


  {/* ================= PAINEL HOLOGRÁFICO (CONTEÚDO) ================= */}
  <div className="mt-20 relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
    
    {/* Efeito de Projeção Holográfica (Glow atrás do card) */}
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-${activeData.color.split('-')[1]}-600/10 blur-[80px] rounded-full pointer-events-none transition-colors duration-700`}></div>
    
    <div className={`max-w-5xl mx-auto p-8 md:p-12 rounded-3xl border-2 backdrop-blur-xl bg-gradient-to-b ${activeData.bgGradient} relative overflow-hidden transition-all duration-700 ${activeData.borderColor} shadow-2xl ${activeData.shadow}`}>
      
      {/* Scanlines & Grid Overlay no Painel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${activeData.color.split('-')[1]}-500 to-transparent opacity-50 animate-[scan_3s_linear_infinite]`}></div>

      <div className="flex flex-col md:flex-row gap-10 relative z-10">
        
        {/* Coluna da Esquerda: Título e Ícone Principal */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <div className={`text-sm font-mono font-bold uppercase tracking-widest mb-2 ${activeData.color} opacity-80`}>
              Current State Analysis
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-none">
              {activeData.title}
            </h3>
            <div className="p-6 rounded-2xl bg-[#0a0202]/50 border border-white/10 flex items-center justify-center relative overflow-hidden group">
               {/* Ícone Central Grande */}
               <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                 {activeData.mainIcon}
               </div>
               {/* Efeito de Pulso no Ícone */}
               <div className={`absolute inset-0 bg-${activeData.color.split('-')[1]}-500/20 blur-xl opacity-50 animate-pulse`}></div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-500 text-xs font-mono mt-6 uppercase">
            <Activity className="w-4 h-4" /> System Integrity Check: {maturityLevel * 25}%
          </div>
        </div>

        {/* Coluna da Direita: Descrição e Features */}
        <div className="md:w-2/3 flex flex-col justify-center">
          <div className={`pl-6 border-l-4 ${activeData.borderColor.replace('/50', '/80')}`}>
             <p className="text-lg text-slate-300 leading-relaxed mb-8 font-light">
               {activeData.desc}
             </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm text-white font-bold uppercase tracking-wider flex items-center gap-2 mb-4">
              <Shield className={`w-4 h-4 ${activeData.color}`} /> Key Characteristics
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {activeData.features.map((feat, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-lg bg-[#0a0202]/50 border border-white/10 text-sm text-slate-300 font-medium transition-all hover:bg-white/5 hover:border-${activeData.color.split('-')[1]}-500/50 group`}>
                  <CheckCircle2 className={`w-5 h-5 ${activeData.color} transition-transform group-hover:scale-110`} />
                  {feat}
                </div>
              ))}
            </div>
          </div>
          
          {/* Botão de Ação no Nível 4 */}
          {maturityLevel === 4 && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#0a0202] font-black tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] hover:-translate-y-1">
                 <Cpu className="w-5 h-5" /> Ativar Cognitive Defense
                 <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
</section>