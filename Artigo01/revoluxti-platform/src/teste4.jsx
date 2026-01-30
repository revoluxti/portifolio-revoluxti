
  {/* ---------------------------------------------------------------------
      CAPÍTULO 6: RESILIÊNCIA & CHAOS (ESTÉTICA INDESTRUTÍVEL)
  ---------------------------------------------------------------------- */}
  <section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">
  
    {/* Background Texture (Malha de Aço) */}
    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>
  
    {/* HERO SECTION: FALHAR É INEVITÁVEL */}
    <div className="relative z-10 text-center mb-24">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-orange-950/30 border-l-4 border-orange-600 text-[10px] font-mono text-orange-500 uppercase tracking-widest mb-6">
        <ShieldAlert className="w-3 h-3" /> Capítulo 06 :: Anti-Fragility
      </div>
      
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tighter">
        <span className="relative inline-block">
          <span className="absolute -inset-1 translate-x-[2px] translate-y-[2px] text-red-600/50 opacity-50 blur-[1px]">FALHAR</span>
          <span className="relative z-10">FALHAR</span>
        </span> É INEVITÁVEL. <br />
        <span className="text-orange-500">COLAPSAR É OPCIONAL.</span>
      </h2>
      
      <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
        Resiliência não é sorte. É construída por design, reforçada por cultura e validada por ataque.
      </p>
    </div>
  
    {/* GRID DE ARQUITETURA (ENGENHARIA DE RESILIÊNCIA) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative z-10">
      
      {/* Card 1: Padrões de Sobrevivência */}
      <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-sm hover:border-orange-500/50 transition-all group">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-orange-950/30 rounded border border-orange-900/50 group-hover:bg-orange-500 group-hover:text-black transition-colors">
            <Layers className="w-6 h-6 text-orange-500 group-hover:text-black" />
          </div>
          <h3 className="text-2xl font-bold text-white">Resiliência por Arquitetura</h3>
        </div>
        <p className="text-slate-400 mb-6 leading-relaxed">
          Padrões como <span className="text-orange-400 font-mono">Circuit Breaker</span> e <span className="text-orange-400 font-mono">Bulkhead</span> deixam de ser sofisticação. São requisitos. Sistemas resilientes assumem que componentes vão falhar e continuam operando apesar disso.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-300 font-mono bg-black/30 p-2 border-l-2 border-slate-700">
            <Activity className="w-4 h-4 text-orange-500" /> Circuit Breaker: Impede efeito cascata.
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-300 font-mono bg-black/30 p-2 border-l-2 border-slate-700">
            <Anchor className="w-4 h-4 text-orange-500" /> Bulkhead: Isola falhas críticas.
          </div>
        </div>
      </div>
  
      {/* Card 2: O Dilema Fail-Safe (EXPERT NOTE) */}
      <div className="p-8 bg-gradient-to-br from-slate-900/40 to-black border border-slate-800 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-orange-600/20 text-orange-500 text-[10px] font-mono px-2 py-1 uppercase tracking-widest border-bl border-l border-b border-orange-600/50">
          Expert Insight
        </div>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5 text-orange-500" />
          O Dilema: Fail-Open vs. Fail-Safe
        </h3>
        <p className="text-slate-400 text-sm mb-6">
          Na engenharia, queremos que o sistema continue (Fail-Open). Na segurança, se o controle falha, a porta deve trancar (Fail-Safe).
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-xs font-mono text-center">
          <div className="p-3 border border-red-900/30 bg-red-950/10 rounded opacity-50">
            <span className="block text-red-500 font-bold mb-1">FAIL OPEN</span>
            <span className="text-slate-500">Falha → Permite Acesso</span>
            <span className="block mt-2 text-[9px] uppercase">(Inseguro)</span>
          </div>
          <div className="p-3 border border-green-900/50 bg-green-950/20 rounded shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <span className="block text-green-500 font-bold mb-1">FAIL SAFE</span>
            <span className="text-slate-300">Falha → Bloqueia Tudo</span>
            <span className="block mt-2 text-[9px] uppercase text-green-400">(Padrão Revoluxti)</span>
          </div>
        </div>
      </div>
  
    </div>
  
    {/* DISASTER RECOVERY & IMUTABILIDADE */}
    <div className="mb-24 relative p-8 md:p-12 bg-[#0a0a0a] border-y border-slate-800">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 via-yellow-500 to-orange-600"></div>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-black text-white mb-4">
            Disaster Recovery & <span className="text-orange-500">Imutabilidade</span>
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            RTO e RPO guiam decisões arquiteturais. Mas em tempos de Ransomware, backup sem imutabilidade é ilusão.
          </p>
          <p className="text-white text-lg font-light italic border-l-4 border-slate-700 pl-4">
            "Ambientes DevSecOps maduros automatizam recuperação e utilizam <strong className="text-orange-500 font-bold">Backups Imutáveis (WORM)</strong> para garantir que nem mesmo o admin possa apagar o histórico."
          </p>
        </div>
        
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
           <div className="p-4 bg-slate-900 border border-slate-800 text-center rounded">
              <ServerCrash className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">RTO</div>
              <div className="text-[10px] text-slate-500 font-mono uppercase">Tempo Máximo Parado</div>
           </div>
           <div className="p-4 bg-slate-900 border border-slate-800 text-center rounded">
              <RefreshCw className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">RPO</div>
              <div className="text-[10px] text-slate-500 font-mono uppercase">Dados Perdidos Aceitáveis</div>
           </div>
        </div>
      </div>
    </div>
  
    {/* CHAOS SECURITY & CULTURA */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 max-w-5xl mx-auto">
       <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
             <AlertTriangle className="w-6 h-6 text-yellow-500" /> Chaos Engineering
          </h3>
          <p className="text-slate-400">
             A introdução controlada de falhas valida hipóteses. Quando aplicada com foco em segurança, testa se seus controles resistem ou falham silenciosamente.
          </p>
          <ul className="space-y-2">
             {['Capacidade de Detecção', 'Tempo de Resposta', 'Robustez dos Controles'].map((item, i) => (
               <li key={i} className="flex items-center gap-2 text-sm text-slate-300 font-mono">
                 <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> {item}
               </li>
             ))}
          </ul>
       </div>
       
       <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
             <CheckCircle2 className="w-6 h-6 text-green-500" /> Fator Humano
          </h3>
          <p className="text-slate-400">
             Times também falham. Cultura continua sendo o framework mais poderoso.
          </p>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
             <p className="text-white font-bold mb-2">Post-Mortems Sem Culpa</p>
             <p className="text-slate-500 text-sm">
               Erro vira insumo estratégico, não motivo de punição. Incidentes viram aprendizado institucional.
             </p>
          </div>
       </div>
    </div>
  
    {/* GRAND FINALE: SÍNTESE ESTRATÉGICA (TRIANGLE DIAGRAM) */}
    <div className="relative pt-20 border-t border-slate-900 text-center">
      
      <div className="inline-block p-4 rounded-full bg-black border border-slate-800 mb-12 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
         <Triangle className="w-8 h-8 text-white fill-white/10" />
      </div>
  
      <h2 className="text-3xl font-black text-white mb-16 uppercase tracking-widest">
        A Tríade <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600">DevSecOps Elite</span>
      </h2>
  
      {/* O DIAGRAMA TRIANGULAR */}
      <div className="max-w-4xl mx-auto relative h-[300px] md:h-[400px]">
        
        {/* Conectores (Linhas) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-slate-800 rounded-full opacity-30 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-dashed border-slate-700 rounded-full opacity-50"></div>
  
        {/* PONTO 1: ARQUITETURA (Topo) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-48">
           <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10">
              <Layers className="w-6 h-6 text-blue-500" />
           </div>
           <p className="text-blue-400 font-bold text-sm uppercase">Cloud Architecture</p>
           <p className="text-slate-500 text-[10px]">Preventiva & Escalável</p>
        </div>
  
        {/* PONTO 2: OBSERVABILIDADE (Esq Baixo) */}
        <div className="absolute bottom-0 left-0 md:left-20 flex flex-col items-center gap-2 w-48">
           <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] z-10">
              <Activity className="w-6 h-6 text-cyan-500" />
           </div>
           <p className="text-cyan-400 font-bold text-sm uppercase">Observabilidade</p>
           <p className="text-slate-500 text-[10px]">Visibilidade & Resposta</p>
        </div>
  
        {/* PONTO 3: RESILIÊNCIA (Dir Baixo) */}
        <div className="absolute bottom-0 right-0 md:right-20 flex flex-col items-center gap-2 w-48">
           <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)] z-10">
              <ShieldAlert className="w-6 h-6 text-orange-500" />
           </div>
           <p className="text-orange-500 font-bold text-sm uppercase">Resiliência</p>
           <p className="text-slate-500 text-[10px]">Continuidade & Confiança</p>
        </div>
  
        {/* CENTRO: RESULTADO */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-center">
           <p className="text-white font-black text-xl tracking-tight">VANTAGEM<br/>COMPETITIVA</p>
           <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full"></div>
        </div>
  
      </div>
  
      <p className="mt-12 text-slate-500 text-sm max-w-2xl mx-auto italic">
        "Juntos, esses pilares transformam DevSecOps em estratégia de negócio sustentável, não apenas em prática técnica."
      </p>
  
    </div>
  
  </section>