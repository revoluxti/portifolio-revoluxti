{/* ---------------------------------------------------------------------
    CAPÍTULO 6: RESILIÊNCIA OPERACIONAL (FORTRESS DESIGN)
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">

  {/* Background Texture (Malha de Aço) */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.02)_2px,transparent_2px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

  {/* HERO SECTION: FALHAR É INEVITÁVEL */}
  <div className="relative z-10 text-center mb-24">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-orange-900/50 bg-orange-950/20 text-[10px] font-mono text-orange-500 uppercase tracking-widest mb-8">
      <ShieldAlert className="w-3 h-3" /> Capítulo 06 :: Anti-Fragility
    </div>

    <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-6">
      <span className="relative inline-block">
        FALHAR É
        <span className="absolute -inset-1 bg-red-500/20 blur-xl animate-pulse"></span>
      </span> <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500">INEVITÁVEL.</span>
    </h2>

    <div className="h-px w-32 bg-orange-500 mx-auto my-6"></div>

    <h3 className="text-2xl md:text-3xl font-bold text-orange-500 uppercase tracking-wide">
      Colapsar é Opcional.
    </h3>

    <p className="text-slate-400 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
      Resiliência é a capacidade de continuar entregando valor mesmo sob falha, erro humano ou ataque.
      Em DevSecOps, ela é <strong className="text-white">construída por design</strong> e validada por dados.
    </p>
  </div>

  {/* GRID DE PADRÕES DE ENGENHARIA (BENTO GRID) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">

    {/* Card 1: Circuit Breaker */}
    <div className="p-6 bg-slate-900/30 border border-slate-800 hover:border-orange-500/50 transition-colors group">
      <Zap className="w-8 h-8 text-slate-500 group-hover:text-yellow-400 mb-4 transition-colors" />
      <h4 className="text-white font-bold mb-2">Circuit Breaker</h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        Impede que falhas em um serviço derrubem o sistema todo. Se falhar, "corta a energia" e evita o efeito cascata.
      </p>
    </div>

    {/* Card 2: Bulkhead */}
    <div className="p-6 bg-slate-900/30 border border-slate-800 hover:border-orange-500/50 transition-colors group">
      <Anchor className="w-8 h-8 text-slate-500 group-hover:text-orange-400 mb-4 transition-colors" />
      <h4 className="text-white font-bold mb-2">Bulkhead</h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        Compartimentalização estilo submarino. Se um módulo inunda (falha), os outros continuam secos e operacionais.
      </p>
    </div>

    {/* Card 3: Retry Inteligente */}
    <div className="p-6 bg-slate-900/30 border border-slate-800 hover:border-orange-500/50 transition-colors group">
      <RefreshCw className="w-8 h-8 text-slate-500 group-hover:text-green-400 mb-4 transition-colors" />
      <h4 className="text-white font-bold mb-2">Smart Retry</h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        Tentar de novo, mas com inteligência (Backoff). Evita sobrecarregar um sistema que já está pedindo socorro.
      </p>
    </div>

    {/* Card 4: Graceful Degradation */}
    <div className="p-6 bg-slate-900/30 border border-slate-800 hover:border-orange-500/50 transition-colors group">
      <Layers className="w-8 h-8 text-slate-500 group-hover:text-blue-400 mb-4 transition-colors" />
      <h4 className="text-white font-bold mb-2">Degradação Suave</h4>
      <p className="text-xs text-slate-400 leading-relaxed">
        O sistema não morre, ele simplifica. Se a personalização falhar, mostre o conteúdo genérico. Entregue valor parcial.
      </p>
    </div>
  </div>

  {/* O DILEMA DE SEGURANÇA (FAIL-OPEN vs FAIL-SAFE) */}
  <div className="mb-24 bg-gradient-to-r from-slate-900 to-[#0a0a0a] border-y border-slate-800 p-8 md:p-12 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5">
      <Lock className="w-40 h-40 text-white" />
    </div>

    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-white mb-4">
          Resiliência Ofensiva: <span className="text-orange-500">Fail-Safe</span>
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">
          Ataques modernos não visam apenas indisponibilidade; visam exaustão e degradação.
          A engenharia tradicional tende ao <em>"Fail-Open"</em> (manter funcionando), mas a Segurança exige o <strong>"Fail-Safe"</strong> (travar para proteger).
        </p>
        <div className="p-4 bg-orange-950/20 border-l-2 border-orange-500 text-orange-200 text-sm italic">
          "Limitação de impacto e isolamento transformam ataques em incidentes controlados, não em crises corporativas."
        </div>
      </div>

      <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fail Open Visual */}
        <div className="p-4 rounded border border-slate-800 opacity-50">
          <div className="text-xs font-mono uppercase text-slate-500 mb-2">Engenharia Padrão</div>
          <div className="text-white font-bold">Fail-Open</div>
          <p className="text-[10px] text-slate-500 mt-1">"O show tem que continuar." (Risco de vazamento)</p>
        </div>
        {/* Fail Safe Visual */}
        <div className="p-4 rounded border border-orange-500/50 bg-orange-950/10 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
          <div className="text-xs font-mono uppercase text-orange-400 mb-2">Segurança REVOLUXTI</div>
          <div className="text-white font-bold">Fail-Safe</div>
          <p className="text-[10px] text-slate-400 mt-1">"Se a tranca quebra, a porta permanece fechada."</p>
        </div>
      </div>
    </div>
  </div>

  {/* DISASTER RECOVERY & CHAOS ENGINEERING */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">

    {/* Bloco 1: DR & Imutabilidade */}
    <div className="border border-slate-800 p-8 rounded-2xl relative group hover:bg-slate-900/20 transition-colors">
      <div className="absolute -top-6 left-8 bg-[#050101] px-4 py-1 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
        <Server className="w-3 h-3 text-green-500" /> DISASTER RECOVERY
      </div>
      <h4 className="text-xl font-bold text-white mb-4">Backup sem teste é ilusão.</h4>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        RTO e RPO guiam decisões arquiteturais. Ambientes maduros automatizam o failover.
      </p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-green-500" /> Recuperação Automatizada
        </li>
        <li className="flex items-center gap-2 text-slate-300">
          <Lock className="w-4 h-4 text-green-500" />
          <span className="text-white font-bold bg-green-950/30 px-1 rounded">Backups Imutáveis</span> (Anti-Ransomware)
        </li>
      </ul>
    </div>

    {/* Bloco 2: Chaos Security */}
    <div className="border border-slate-800 p-8 rounded-2xl relative group hover:bg-slate-900/20 transition-colors">
      <div className="absolute -top-6 left-8 bg-[#050101] px-4 py-1 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
        <AlertTriangle className="w-3 h-3 text-red-500" /> CHAOS ENGINEERING
      </div>
      <h4 className="text-xl font-bold text-white mb-4">Quebre antes que o hacker o faça.</h4>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        A introdução controlada de falhas valida a detecção e o tempo de resposta. Resiliência deixa de ser crença e vira evidência.
      </p>
      <div className="flex gap-2 text-xs font-mono mt-6">
        <span className="px-2 py-1 bg-red-950/20 border border-red-900 text-red-400 rounded">Detecção</span>
        <span className="px-2 py-1 bg-red-950/20 border border-red-900 text-red-400 rounded">Resposta</span>
        <span className="px-2 py-1 bg-red-950/20 border border-red-900 text-red-400 rounded">Comunicação</span>
      </div>
    </div>

  </div>

  {/* SÍNTESE ESTRATÉGICA (O TRIÂNGULO FINAL) */}
  <div className="relative text-center max-w-4xl mx-auto pt-16 border-t border-slate-900">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050101] px-6 text-slate-500 font-mono text-sm tracking-widest uppercase">
      Síntese Estratégica
    </div>

    <p className="text-slate-400 mb-12">
      Juntos, esses pilares transformam DevSecOps em vantagem competitiva sustentável.
    </p>

    {/* Diagrama Visual Conceitual */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">

      {/* Pilar 1 */}
      <div className="flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-950/20 transition-all">
          <Cloud className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
        </div>
        <h5 className="text-white font-bold text-sm">Arquitetura Cloud</h5>
        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Preventiva & Escalável</span>
      </div>

      {/* Conector */}
      <div className="hidden md:block w-12 h-px bg-slate-800"></div>

      {/* Pilar 2 */}
      <div className="flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-950/20 transition-all">
          <Activity className="w-6 h-6 text-slate-400 group-hover:text-cyan-400" />
        </div>
        <h5 className="text-white font-bold text-sm">Observabilidade</h5>
        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Visibilidade & Controle</span>
      </div>

      {/* Conector */}
      <div className="hidden md:block w-12 h-px bg-slate-800"></div>

      {/* Pilar 3 */}
      <div className="flex flex-col items-center gap-3 group">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-950/20 transition-all">
          <ShieldAlert className="w-6 h-6 text-slate-400 group-hover:text-orange-400" />
        </div>
        <h5 className="text-white font-bold text-sm">Resiliência</h5>
        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Continuidade & Confiança</span>
      </div>

    </div>
  </div>

</section>