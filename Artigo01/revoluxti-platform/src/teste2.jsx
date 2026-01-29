{/* ---------------------------------------------------------------------
    MÓDULO: PLAYBOOK DE IMPLEMENTAÇÃO (ESTILO TÁTICO/HUD)
---------------------------------------------------------------------- */}
<section className="py-20 px-4 max-w-7xl mx-auto bg-[#08090c] border-t border-slate-900 overflow-hidden relative">

{/* Background Grid Tático (Fundo de Engenharia) */}
<div className="absolute inset-0 pointer-events-none opacity-20" 
     style={{ 
       backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', 
       backgroundSize: '40px 40px' 
     }}>
</div>

{/* TÍTULO DA SEÇÃO */}
<div className="text-center mb-16 relative z-10">
  <h2 className="text-4xl md:text-5xl font-black text-orange-600 mb-2 uppercase tracking-tighter">
    Playbook de Implementação
  </h2>
  <p className="text-orange-900/80 font-bold text-lg uppercase tracking-widest">
    Roteiro Prático: Do Dia 1 ao Dia 100+
  </p>
</div>

{/* CONTAINER "ELITE MODULE" */}
<div className="relative max-w-6xl mx-auto bg-[#0f1115] border border-slate-800 p-8 md:p-12 shadow-2xl">
  
  {/* Cantos Táticos (Corner Brackets) - O detalhe vermelho da imagem */}
  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600"></div>
  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600"></div>
  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600"></div>
  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600"></div>

  {/* Label do Módulo */}
  <div className="absolute -top-3 left-10 bg-[#0f1115] px-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
    Elite Module: Execution_v1.0
  </div>

  {/* LINHA DO TEMPO HORIZONTAL (GRADIENTE LARANJA -> CIANO) */}
  <div className="relative mt-12 mb-16 hidden md:block">
    {/* A Linha em si */}
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-300 to-cyan-500 -translate-y-1/2 shadow-[0_0_15px_rgba(234,88,12,0.4)]"></div>
    
    {/* Setas/Marcadores nas pontas */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-orange-600"></div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-cyan-500"></div>
  </div>

  {/* GRID DE COLUNAS (OS 4 PASSOS) */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
    
    {/* --- DIA 1-30: FUNDAÇÃO (LARANJA) --- */}
    <div className="flex flex-col items-center text-center group">
      {/* Ícone Superior */}
      <div className="mb-6 relative">
        <Database className="w-12 h-12 text-slate-400 group-hover:text-orange-500 transition-colors duration-300" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f1115] border-4 border-orange-600 rounded-full z-20 hidden md:block"></div>
      </div>
      
      {/* Texto Principal */}
      <div className="mt-4 md:mt-8">
        <h3 className="text-xl font-bold text-white uppercase leading-tight">
          Dia 1-30:<br/><span className="text-orange-500">Fundação</span>
        </h3>
        <div className="h-0.5 w-12 bg-orange-600 mx-auto my-4"></div>
      </div>

      {/* Lista de Tarefas */}
      <ul className="text-sm text-slate-400 space-y-3 text-left w-full px-4">
        <li className="flex items-start gap-2">
          <Search className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
          <span>Mapeamento de Ativos & Superfície.</span>
        </li>
        <li className="flex items-start gap-2">
          <Activity className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
          <span>Matriz de Riscos Críticos.</span>
        </li>
        <li className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
          <span>Início Cultural (No Blame).</span>
        </li>
      </ul>
    </div>

    {/* --- DIA 31-60: ESTRUTURAÇÃO (AMARELO/LARANJA CLARO) --- */}
    <div className="flex flex-col items-center text-center group">
      <div className="mb-6 relative">
        <Network className="w-12 h-12 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f1115] border-4 border-amber-400 rounded-full z-20 hidden md:block"></div>
      </div>
      
      <div className="mt-4 md:mt-8">
        <h3 className="text-xl font-bold text-white uppercase leading-tight">
          Dia 31-60:<br/><span className="text-amber-400">Estruturação</span>
        </h3>
        <div className="h-0.5 w-12 bg-amber-400 mx-auto my-4"></div>
      </div>

      <ul className="text-sm text-slate-400 space-y-3 text-left w-full px-4">
        <li className="flex items-start gap-2">
          <Lock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <span>MFA Global (FIDO2).</span>
        </li>
        <li className="flex items-start gap-2">
          <Network className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <span>Segmentação (VLANs/ZTNA).</span>
        </li>
        <li className="flex items-start gap-2">
          <Terminal className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
          <span>SAST no Pipeline.</span>
        </li>
      </ul>
    </div>

    {/* --- DIA 61-90: OTIMIZAÇÃO (CIANO CLARO) --- */}
    <div className="flex flex-col items-center text-center group">
      <div className="mb-6 relative">
        <Settings2 className="w-12 h-12 text-slate-400 group-hover:text-cyan-300 transition-colors duration-300" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f1115] border-4 border-cyan-300 rounded-full z-20 hidden md:block"></div>
      </div>
      
      <div className="mt-4 md:mt-8">
        <h3 className="text-xl font-bold text-white uppercase leading-tight">
          Dia 61-90:<br/><span className="text-cyan-300">Otimização</span>
        </h3>
        <div className="h-0.5 w-12 bg-cyan-300 mx-auto my-4"></div>
      </div>

      <ul className="text-sm text-slate-400 space-y-3 text-left w-full px-4">
        <li className="flex items-start gap-2">
          <Target className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
          <span>DORA Metrics.</span>
        </li>
        <li className="flex items-start gap-2">
          <Terminal className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
          <span>Policy as Code (OPA).</span>
        </li>
        <li className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-cyan-300 mt-0.5 shrink-0" />
          <span>Security Champions.</span>
        </li>
      </ul>
    </div>

    {/* --- DIA 100+: MELHORIA CONTÍNUA (CIANO/AZUL) --- */}
    <div className="flex flex-col items-center text-center group">
      <div className="mb-6 relative">
        <RotateCw className="w-12 h-12 text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0f1115] border-4 border-cyan-500 rounded-full z-20 hidden md:block shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
      </div>
      
      <div className="mt-4 md:mt-8">
        <h3 className="text-xl font-bold text-white uppercase leading-tight">
          Dia 100+:<br/><span className="text-cyan-500">Melhoria Contínua</span>
        </h3>
        <div className="h-0.5 w-12 bg-cyan-500 mx-auto my-4 shadow-[0_0_10px_cyan]"></div>
      </div>

      <ul className="text-sm text-slate-400 space-y-3 text-left w-full px-4">
        <li className="flex items-start gap-2">
          <RotateCw className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
          <span>Ciclo PDCA.</span>
        </li>
        <li className="flex items-start gap-2">
          <Zap className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
          <span>War Games (Purple Team).</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
          <span>Revisão de SLAs.</span>
        </li>
      </ul>
    </div>

  </div>

  {/* Efeito de Scanline Vertical (Opcional, para dar vida) */}
  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-800/50 hidden md:block"></div>
</div>

</section>