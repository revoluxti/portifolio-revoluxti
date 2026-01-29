{/* INTEGRAÇÃO APM + SIEM (Banner Horizontal) */}
<div className="relative p-8 md:p-12 border border-slate-800 bg-gradient-to-r from-slate-900/50 to-slate-950 mb-24 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
  <Database className="w-64 h-64 text-slate-500" />
</div>

<div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
  <div className="md:w-1/2">
    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
      <Activity className="w-6 h-6 text-cyan-400" />
      APM encontra SIEM
    </h3>
    <p className="text-slate-400 leading-relaxed mb-6">
      Vulnerabilidades exploradas, padrões suspeitos de uso de APIs e comportamentos fora do baseline.
      Aqui, a aplicação passa a se defender <strong className="text-white">observando o próprio comportamento</strong>.
    </p>
    <ul className="space-y-2 font-mono text-xs text-cyan-500/80">
      <li className="flex items-center gap-2">✓ O QUE falhou</li>
      <li className="flex items-center gap-2">✓ ONDE falhou</li>
      <li className="flex items-center gap-2">✓ POR QUE falhou</li>
    </ul>
  </div>
  
  {/* Mini Dashboard Visual */}
  <div className="md:w-1/2 w-full bg-[#0a0a0a] border border-slate-800 p-4 rounded-lg font-mono text-xs shadow-2xl">
    <div className="flex justify-between text-slate-500 mb-2 border-b border-slate-800 pb-2">
      <span>LIVE METRICS</span>
      <span className="text-red-500 animate-pulse">● REC</span>
    </div>
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-slate-400 mb-1">
          <span>Auth Failures</span>
          <span className="text-red-400">890/s (CRITICAL)</span>
        </div>
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 w-[90%]"></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-slate-400 mb-1">
          <span>API Latency</span>
          <span className="text-cyan-400">45ms (NORMAL)</span>
        </div>
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-500 w-[30%]"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


{/* 4. GOVERNANÇA: ERROR BUDGET (FEATURE BOX) */}
<div className="relative bg-slate-900/30 border border-slate-800 p-8 md:p-12 text-center rounded-sm mb-24">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-4 py-1 border border-slate-800 text-xs font-mono text-yellow-500 uppercase tracking-widest flex items-center gap-2">
  <Scale className="w-4 h-4" /> Controle de Risco
</div>

<h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
  SLOs, SLAs e <span className="text-yellow-500">Error Budget</span>
</h3>
<p className="max-w-3xl mx-auto text-slate-300 text-lg mb-8 leading-relaxed">
  Error budget vira instrumento de governança: se o sistema está instável ou sob ataque, <strong className="text-white bg-red-900/20 px-1">o ritmo de mudanças diminui automaticamente.</strong>
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
  <div className="p-4 border border-slate-800 bg-black/20">
    <div className="flex items-center gap-2 mb-2 text-yellow-500 font-bold font-mono text-sm">
      <AlertTriangle className="w-4 h-4" /> SINAL DE ALERTA
    </div>
    <p className="text-sm text-slate-400">
      Aumento de falhas de autenticação não é ruído operacional; é um indicador de ataque. O pipeline deve desacelerar.
    </p>
  </div>
  <div className="p-4 border border-slate-800 bg-black/20">
    <div className="flex items-center gap-2 mb-2 text-emerald-500 font-bold font-mono text-sm">
      <ShieldCheck className="w-4 h-4" /> DECISÃO TÉCNICA
    </div>
    <p className="text-sm text-slate-400">
      O risco passa a ser controlado por dados reais, não por pressão de agenda ou intuição da diretoria.
    </p>
  </div>
</div>
</div>

{/* FECHAMENTO: FEEDBACK LOOP */}
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-950/30 border border-emerald-900/50 mb-6">
  <Activity className="w-6 h-6 text-emerald-500" />
</div>
<h3 className="text-3xl font-bold text-white mb-6">Produção vira Laboratório</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
  Cada deploy gera sinais. Cada dado gera aprendizado. <br />
  A observabilidade fecha o ciclo do DevSecOps: <br />
  <span className="text-emerald-500 font-mono font-bold mt-4 block">
    CÓDIGO &rarr; PRODUÇÃO &rarr; DADOS &rarr; MELHORIA
  </span>
</p>
<p className="text-sm text-slate-600 font-mono">
  Segurança deixa de ser suposição e passa a ser evidência mensurável.
</p>
</div>
