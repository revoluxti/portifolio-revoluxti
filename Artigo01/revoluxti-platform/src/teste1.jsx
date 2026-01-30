{/* ---------------------------------------------------------------------
    CAPÍTULO 6: RESILIÊNCIA & CHAOS (ENGINEERING STYLE)
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">

  {/* ELEMENTO DE FUNDO: GRID ESTRUTURAL */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

  {/* HERO SECTION: "FALHAR É INEVITÁVEL" */}
  <div className="relative z-10 text-center mb-24">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-orange-500/30 bg-orange-950/20 text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-6">
      <ShieldCheck className="w-3 h-3" /> Capítulo 06 :: Anti-Fragility
    </div>

    <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter uppercase">
      <span className="relative inline-block text-slate-600 line-through decoration-red-500 decoration-4">
        Falhar é Inevitável.
      </span>
    </h2>
    <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 tracking-tighter uppercase mb-8">
      Colapsar é Opcional.
    </h2>

    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
      Resiliência não é sorte; é engenharia. É a capacidade de continuar entregando valor mesmo sob <strong className="text-white">erro humano, falha de infraestrutura ou ataque massivo</strong>.
    </p>
  </div>

  {/* GRID DE PADRÕES DE ENGENHARIA (RESILIÊNCIA POR ARQUITETURA) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 relative z-10">

    {/* Pattern 1: Circuit Breaker */}
    <div className="bg-[#0a0a0a] border border-slate-800 p-8 group hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
      <Zap className="w-10 h-10 text-orange-500 mb-6" />
      <h3 className="text-white font-bold text-xl mb-2">Circuit Breaker</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        Impede que uma falha em um serviço derrube todo o ecossistema. Se o sistema falha, cortamos a energia daquele módulo para salvar o resto.
      </p>
      <div className="text-xs font-mono text-orange-500 uppercase">Limit Impact Protocol</div>
    </div>

    {/* Pattern 2: Bulkhead (Compartimentação) */}
    <div className="bg-[#0a0a0a] border border-slate-800 p-8 group hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
      <Anchor className="w-10 h-10 text-orange-500 mb-6" />
      <h3 className="text-white font-bold text-xl mb-2">Bulkheads</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        Assim como em submarinos. Compartimentos estanques garantem que, se um serviço for comprometido ou alagado, o navio continua flutuando.
      </p>
      <div className="text-xs font-mono text-orange-500 uppercase">Isolation Strategy</div>
    </div>

    {/* Pattern 3: FAIL-SAFE (O Add-on Estratégico) */}
    <div className="bg-gradient-to-b from-slate-900 to-[#0a0a0a] border border-slate-700 p-8 relative overflow-hidden ring-1 ring-orange-500/20">
      <div className="absolute top-4 right-4 animate-pulse">
        <AlertOctagon className="w-6 h-6 text-red-500" />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">Fail-Safe vs. Fail-Open</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 border-l-2 border-slate-700 pl-4 my-4">
        <span className="block mb-2"><strong className="text-slate-200">Engenharia:</strong> "Mantenha rodando." (Fail-Open)</span>
        <span className="block"><strong className="text-red-400">Segurança:</strong> "Bloqueie tudo." (Fail-Safe)</span>
      </p>
      <p className="text-slate-400 text-sm">
      Na REVOLUXTI, controles de acesso falham "fechados". Se a auth cair, ninguém entra. Segurança > Disponibilidade neste contexto.
      </p>
    </div>

  </div>

  {/* DISASTER RECOVERY & HUMAN FACTOR (LAYOUT ASSIMÉTRICO) */}
  <div className="flex flex-col lg:flex-row gap-12 items-stretch mb-24 relative z-10">

    {/* Lado Esquerdo: O Cofre (Imutabilidade) */}
    <div className="lg:w-1/2 bg-slate-900/30 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 opacity-5">
        <Lock className="w-64 h-64" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <RefreshCw className="w-6 h-6 text-green-500" /> Disaster Recovery 2.0
      </h3>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-1 h-full bg-slate-700 rounded-full"></div>
          <div>
            <h4 className="text-slate-200 font-bold text-sm uppercase mb-1">Backup Imutável</h4>
            <p className="text-slate-400 text-sm">
              A única vacina contra Ransomware. Seus backups são "Write-Once, Read-Many". Nem mesmo o admin pode deletá-los antes do prazo.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-1 h-full bg-slate-700 rounded-full"></div>
          <div>
            <h4 className="text-slate-200 font-bold text-sm uppercase mb-1">RTO & RPO Realistas</h4>
            <p className="text-slate-400 text-sm">
              Backup sem teste de restore é apenas uma esperança. Automatizamos a validação periódica.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Lado Direito: Chaos & Cultura */}
    <div className="lg:w-1/2 flex flex-col justify-between">

      {/* Bloco Chaos */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <ServerCrash className="w-6 h-6 text-red-500" /> Chaos Security
        </h3>
        <p className="text-slate-400 leading-relaxed mb-4">
          Introduzimos falhas controladas para validar a detecção. <span className="text-white italic">"Derrubamos o firewall interno às 14h. O SIEM gritou?"</span>
        </p>
        <div className="inline-block px-3 py-1 bg-red-950/30 border border-red-900/50 text-red-400 text-xs font-mono rounded">
          Test Detection • Test Response • Test People
        </div>
      </div>

      {/* Bloco Cultura (Post-Mortem) */}
      <div className="p-6 bg-[#0f0f0f] border-l-4 border-orange-500 rounded-r-xl">
        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
          <LifeBuoy className="w-4 h-4 text-orange-500" /> O Fator Humano
        </h4>
        <p className="text-slate-400 text-sm italic">
          "Post-mortems sem culpa (Blameless) garantem que incidentes virem aprendizado institucional, não motivo de demissão. Cultura é o framework mais forte."
        </p>
      </div>

    </div>
  </div>

  {/* SÍNTESE ESTRATÉGICA (O TRIÂNGULO FINAL) */}
  <div className="relative py-16 border-t border-slate-800 bg-gradient-to-b from-[#050101] to-slate-950 text-center">

    <div className="mb-10">
      <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-2">A Tríade DevSecOps</h3>
      <p className="text-slate-500 font-mono text-sm">REVOLUXTI STRATEGIC FRAMEWORK</p>
    </div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">

      {/* Conectores Visuais (Linhas) - Apenas Desktop */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

      {/* Pilar 1: Cloud Architecture */}
      <div className="relative z-10 bg-[#0a0a0a] border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
        <Layers className="w-8 h-8 text-blue-500 mx-auto mb-4" />
        <h4 className="text-white font-bold text-sm uppercase mb-2">Arquitetura</h4>
        <p className="text-slate-500 text-xs">Preventiva & Escalável</p>
      </div>

      {/* Pilar 2: Observability (Centro) */}
      <div className="relative z-10 bg-[#0a0a0a] border border-cyan-500/50 p-8 rounded-xl scale-110 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <Activity className="w-10 h-10 text-cyan-400 mx-auto mb-4 animate-pulse" />
        <h4 className="text-white font-bold text-sm uppercase mb-2">Observabilidade</h4>
        <p className="text-slate-500 text-xs">Visibilidade & Controle</p>
      </div>

      {/* Pilar 3: Resilience */}
      <div className="relative z-10 bg-[#0a0a0a] border border-slate-800 p-6 rounded-xl hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
        <RefreshCw className="w-8 h-8 text-orange-500 mx-auto mb-4" />
        <h4 className="text-white font-bold text-sm uppercase mb-2">Resiliência</h4>
        <p className="text-slate-500 text-xs">Continuidade & Confiança</p>
      </div>

    </div>

    <p className="mt-12 text-slate-400 max-w-2xl mx-auto text-sm">
      [cite_start]"Juntos, esses pilares transformam DevSecOps em <strong className="text-white">vantagem competitiva sustentável</strong>, não apenas em prática técnica." [cite: 1]
    </p>

  </div>

</section>