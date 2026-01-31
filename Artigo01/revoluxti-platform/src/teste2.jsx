{/* ---------------------------------------------------------------------
    CAPÍTULO 7: ORQUESTRAÇÃO DE ELITE (KUBERNETES) #2
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">

{/* Background Hexagons (K8s Pattern) */}
<div className="absolute inset-0 opacity-10 pointer-events-none" 
     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}>
</div>

{/* HEADER PADRONIZADO */}
<div className="mb-12 relative z-10">
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}>
      <Hexagon className="w-6 h-6 text-blue-500" />
    </div>
    <h3 className="text-2xl font-bold text-white">
      Capítulo 7 – Orquestração de Elite: Kubernetes e Cloud em Escala
    </h3>
  </div>
</div>

{/* HERO: ESCALAR SEM CONTROLE */}
<div className="text-center mb-20 relative z-10">
  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
    "Escalar sem controle é só <br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
      acelerar o colapso
    </span>."
  </h2>
  <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
    Se a Arquitetura Cloud define onde a aplicação vive, o <strong className="text-blue-400">Kubernetes</strong> define como ela sobrevive.
  </p>
</div>

{/* INTRODUÇÃO: O SISTEMA OPERACIONAL DA NUVEM */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center relative z-10">
  <div className="space-y-6">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-500/30 text-xs font-mono text-blue-400">
      <Server className="w-3 h-3" /> K8s: THE CLOUD OS
    </div>
    <p className="text-slate-300 text-lg leading-relaxed">
      Não é ferramenta para iniciantes — é plataforma para organizações disciplinadas. O Kubernetes abstrai a infraestrutura, padroniza a execução e automatiza decisões.
    </p>
    <div className="p-4 bg-slate-900/50 border-l-4 border-blue-500 rounded-r-lg">
      <p className="text-slate-400 italic text-sm">
        "Quando a arquitetura deixa de funcionar 'bem' e passa a funcionar <strong className="text-white">'certo'</strong>."
      </p>
    </div>
  </div>
  
  {/* Visual: K8s as a Multiplier */}
  <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl relative overflow-hidden">
    <div className="absolute top-0 right-0 p-2 opacity-20"><Hexagon className="w-32 h-32 text-blue-500" /></div>
    <h4 className="text-white font-bold mb-4">O Multiplicador</h4>
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 bg-red-950/20 border border-red-900/30 rounded">
        <span className="text-red-400 text-sm font-mono">Sem AppSec</span>
        <span className="text-red-500 font-bold text-xs uppercase">Risco Exponencial</span>
      </div>
      <div className="flex items-center justify-center text-slate-500 text-xs py-1">VS</div>
      <div className="flex items-center justify-between p-3 bg-blue-950/20 border border-blue-900/30 rounded">
        <span className="text-blue-400 text-sm font-mono">Com AppSec</span>
        <span className="text-blue-500 font-bold text-xs uppercase">Controle Total</span>
      </div>
    </div>
  </div>
</div>

{/* ELITE SECTION: GITOPS & ADMISSION CONTROLLERS */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24 relative z-10">
  
  {/* CARD 1: GITOPS (A Verdade Única) */}
  <div className="lg:col-span-1 bg-[#0a0a0a] border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-colors group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-purple-950/30 rounded border border-purple-500/30">
        <GitBranch className="w-5 h-5 text-purple-400" />
      </div>
      <h4 className="text-white font-bold">GitOps</h4>
    </div>
    <p className="text-slate-400 text-sm mb-6">
      Ninguém roda <code>kubectl apply</code> na mão. O estado do cluster espelha o Git. Auditável e reversível.
    </p>
    {/* Visual Flow GitOps */}
    <div className="flex items-center justify-between text-xs font-mono text-slate-500 bg-black p-3 rounded border border-slate-800">
      <span className="text-purple-400">GIT</span>
      <ArrowRight className="w-3 h-3" />
      <span className="text-slate-300">SYNC</span>
      <ArrowRight className="w-3 h-3" />
      <span className="text-blue-400">CLUSTER</span>
    </div>
  </div>

  {/* CARD 2: ADMISSION CONTROLLER (O Porteiro) */}
  <div className="lg:col-span-2 bg-[#0a0a0a] border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-colors relative overflow-hidden">
    <div className="flex items-center justify-between mb-6 relative z-10">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-green-950/30 rounded border border-green-500/30">
          <Shield className="w-5 h-5 text-green-400" />
        </div>
        <h4 className="text-white font-bold">Admission Controllers</h4>
      </div>
      <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">POLICY AS CODE</span>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
      <p className="text-slate-400 text-sm">
        O cluster recusa deploy inseguro automaticamente. Se o dev tentar subir como <code>root</code>, o K8s diz <strong className="text-red-500">"Não"</strong>. Governança automatizada.
      </p>

      {/* Visual Diagram: The Gatekeeper */}
      <div className="relative p-4 bg-black/50 rounded-lg border border-slate-800">
         {/* Linha 1: Bad Pod */}
         <div className="flex items-center gap-3 mb-3 opacity-50">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="text-xs font-mono text-slate-400">Pod (Root)</div>
            <div className="h-px w-8 bg-red-900/50"></div>
            <XCircle className="w-4 h-4 text-red-500" />
            <div className="text-[10px] text-red-500 font-bold uppercase ml-auto">Blocked</div>
         </div>
         {/* Linha 2: Good Pod */}
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="text-xs font-mono text-white">Pod (Secure)</div>
            <div className="h-px w-8 bg-green-900/50"></div>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <div className="text-[10px] text-green-500 font-bold uppercase ml-auto">Deployed</div>
         </div>
      </div>
    </div>
  </div>

</div>

{/* RUNTIME SECURITY & CONTROLES (Grid Final) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
  
  {/* Esquerda: Runtime Security (Sonar Visual) */}
  <div className="relative">
    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
      <Activity className="w-5 h-5 text-orange-500" />
      O Vigia Interno (Runtime)
    </h4>
    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
      Segurança de imagens acontece antes. Mas e se o ataque for <em className="text-white">durante</em> a execução? O monitoramento em tempo real (Falco) detecta comportamentos anômalos.
    </p>
    
    {/* Radar Visual */}
    <div className="bg-[#0f172a] border border-slate-800 rounded-lg p-6 relative overflow-hidden h-40 flex items-center justify-center">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)] z-10"></div>
       {/* Grid Line */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
       
       {/* Pulse Effect */}
       <div className="relative z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative w-3 h-3 bg-orange-500 rounded-full border-2 border-[#0f172a]"></div>
       </div>
       
       {/* Detected Label */}
       <div className="absolute bottom-4 right-4 bg-red-950/80 border border-red-500/30 px-2 py-1 rounded text-[10px] font-mono text-red-400 animate-pulse z-20">
          ! SHELL SPAWNED IN POD
       </div>
    </div>
  </div>

  {/* Direita: Checklist de Sobrevivência */}
  <div>
    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <Box className="w-5 h-5 text-blue-500" />
      Controles de Sobrevivência
    </h4>
    <div className="space-y-3">
      {[
        { label: "Image Scanning & Signing", sub: "Supply Chain Seguro" },
        { label: "Network Policies", sub: "Microsegmentação (Zero Trust)" },
        { label: "Pod Security Standards", sub: "Baseline de Hardening" },
        { label: "Secrets Management", sub: "Vault externo, nunca no env" },
        { label: "RBAC Granular", sub: "Menor privilégio sempre" }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4 p-3 rounded border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-950/30 flex items-center justify-center border border-blue-500/20 text-blue-400 font-mono text-xs">
            0{i+1}
          </div>
          <div>
            <div className="text-white font-medium text-sm">{item.label}</div>
            <div className="text-slate-500 text-xs">{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  </div>

</div>

</section>