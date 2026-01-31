{/* ---------------------------------------------------------------------
    CAPÍTULO 7: ORQUESTRAÇÃO DE ELITE (KUBERNETES & GOVERNANÇA)
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">

{/* Background Texture (Technical Grid) */}
<div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

{/* 1. CABEÇALHO TÉCNICO */}
<div className="mb-16">
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}>
      <Hexagon className="w-6 h-6 text-violet-500" />
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
      Capítulo 7 – Orquestração de Elite: Governança e Segurança em Kubernetes
    </h3>
  </div>
  <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-transparent rounded-full ml-14"></div>
</div>

{/* 2. CONCEITO CENTRAL (O SISTEMA OPERACIONAL) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center relative z-10">
  
  <div className="space-y-8">
    <div>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
        Gerenciando o Caos <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-600">
          com Precisão Cirúrgica.
        </span>
      </h2>
      <p className="text-lg text-slate-400 leading-relaxed text-justify">
        O Kubernetes não é apenas um orquestrador; é o <strong className="text-violet-400">Sistema Operacional da Nuvem</strong>. 
        Na REVOLUXTI, a orquestração vai além da disponibilidade: trata-se de impor conformidade, imutabilidade e 
        segurança em cada container, antes mesmo de ele nascer.
      </p>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-2 gap-4">
       <div className="p-4 bg-slate-900/40 border border-violet-500/20 rounded-lg hover:border-violet-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-2 text-violet-400 font-mono text-xs uppercase">
             <Layers className="w-4 h-4" /> Abstração
          </div>
          <p className="text-white font-bold">Infraestrutura como Dados</p>
       </div>
       <div className="p-4 bg-slate-900/40 border border-violet-500/20 rounded-lg hover:border-violet-500/50 transition-colors">
          <div className="flex items-center gap-2 mb-2 text-violet-400 font-mono text-xs uppercase">
             <Cpu className="w-4 h-4" /> Eficiência
          </div>
          <p className="text-white font-bold">Bin Packing & Auto-Scaling</p>
       </div>
    </div>
  </div>

  {/* VISUAL: ARQUITETURA DE CAMADAS (THE STACK) */}
  <div className="relative">
     {/* Camada 3: Runtime */}
     <div className="absolute top-0 right-0 w-3/4 p-6 bg-[#0f0529] border border-violet-500/30 rounded-xl transform translate-x-4 -translate-y-4 z-10 shadow-2xl">
        <div className="flex justify-between items-center mb-2">
           <span className="text-fuchsia-400 font-bold text-sm">Runtime (Falco/eBPF)</span>
           <Activity className="w-4 h-4 text-fuchsia-500 animate-pulse" />
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
           <div className="h-full w-2/3 bg-fuchsia-500/50"></div>
        </div>
     </div>

     {/* Camada 2: Cluster */}
     <div className="relative p-8 bg-[#0a0a0a] border border-violet-600/30 rounded-xl z-20 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
        <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
           <div className="p-3 bg-violet-900/20 rounded-lg border border-violet-500/30">
              <Hexagon className="w-8 h-8 text-violet-400" />
           </div>
           <div>
              <h4 className="text-white font-bold">Kubernetes Control Plane</h4>
              <p className="text-xs text-slate-500 font-mono">API Server • Etcd • Scheduler • Controller</p>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
           <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> RBAC Enforced</div>
           <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> NetPol Active</div>
           <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> mTLS Enabled</div>
           <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-500" /> Secrets Encrypted</div>
        </div>
     </div>

     {/* Camada 1: Infra */}
     <div className="absolute bottom-0 left-0 w-3/4 p-6 bg-[#050b14] border border-slate-800 rounded-xl transform -translate-x-4 translate-y-4 z-0">
        <span className="text-slate-500 font-bold text-sm">Infrastructure (vSphere/Cloud)</span>
     </div>
  </div>

</div>

{/* 3. OS PILARES DE ELITE (GITOPS & ADMISSION & RUNTIME) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
  
  {/* Pilar 1: GitOps */}
  <div className="group bg-gradient-to-b from-slate-900/50 to-transparent border border-slate-800 p-8 rounded-2xl hover:border-violet-500/40 transition-all">
     <div className="w-12 h-12 bg-violet-950/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-violet-500/20">
        <GitBranch className="w-6 h-6 text-violet-400" />
     </div>
     <h4 className="text-xl font-bold text-white mb-3">1. GitOps: A Verdade Única</h4>
     <p className="text-slate-400 text-sm leading-relaxed mb-4">
        A era do <code>kubectl apply</code> acabou. O estado do cluster espelha o Git. Divergências (Drift) são corrigidas automaticamente.
     </p>
     <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-violet-300 bg-violet-900/10 p-2 rounded border border-violet-500/20">
        <CheckCircle2 className="w-3 h-3" /> Tool: ArgoCD / Flux
     </div>
  </div>

  {/* Pilar 2: Admission Controllers */}
  <div className="group bg-gradient-to-b from-slate-900/50 to-transparent border border-slate-800 p-8 rounded-2xl hover:border-violet-500/40 transition-all">
     <div className="w-12 h-12 bg-violet-950/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-violet-500/20">
        <ShieldCheck className="w-6 h-6 text-violet-400" />
     </div>
     <h4 className="text-xl font-bold text-white mb-3">2. Policy as Code</h4>
     <p className="text-slate-400 text-sm leading-relaxed mb-4">
        O cluster tem "imunidade". Políticas barram deploys inseguros (ex: root user) antes de serem persistidos.
     </p>
     <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-violet-300 bg-violet-900/10 p-2 rounded border border-violet-500/20">
        <CheckCircle2 className="w-3 h-3" /> Tool: OPA Gatekeeper / Kyverno
     </div>
  </div>

  {/* Pilar 3: Runtime Security */}
  <div className="group bg-gradient-to-b from-slate-900/50 to-transparent border border-slate-800 p-8 rounded-2xl hover:border-violet-500/40 transition-all">
     <div className="w-12 h-12 bg-violet-950/30 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-violet-500/20">
        <Activity className="w-6 h-6 text-violet-400" />
     </div>
     <h4 className="text-xl font-bold text-white mb-3">3. Runtime Defense</h4>
     <p className="text-slate-400 text-sm leading-relaxed mb-4">
        Monitoramento de Syscalls em tempo real. Se um processo legítimo tentar abrir um shell reverso, ele é morto.
     </p>
     <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-violet-300 bg-violet-900/10 p-2 rounded border border-violet-500/20">
        <CheckCircle2 className="w-3 h-3" /> Tool: Falco / Tetragon (eBPF)
     </div>
  </div>

</div>

{/* 4. VISUALIZAÇÃO DE FLUXO DE SEGURANÇA (PIPELINE) */}
<div className="mb-24 p-8 border border-slate-800 rounded-2xl bg-[#080808] relative overflow-hidden">
   <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
      <Server className="w-64 h-64 text-white" />
   </div>
   
   <h4 className="text-white font-bold mb-8 flex items-center gap-3">
      <Terminal className="w-5 h-5 text-violet-500" />
      Pipeline de Defesa em Profundidade
   </h4>

   <div className="flex flex-col md:flex-row gap-4 relative z-10">
      
      {/* Step 1 */}
      <div className="flex-1 p-4 rounded bg-slate-900/80 border border-slate-700 flex flex-col gap-2">
         <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">01. Build & Sign</span>
         <div className="text-white font-bold text-sm">Assinatura de Imagem</div>
         <div className="text-[10px] text-slate-400 font-mono mt-auto">Tool: Cosign / Notary</div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex items-center justify-center text-slate-600"><ArrowRight className="w-5 h-5" /></div>

      {/* Step 2 */}
      <div className="flex-1 p-4 rounded bg-slate-900/80 border border-slate-700 flex flex-col gap-2">
         <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">02. Admission</span>
         <div className="text-white font-bold text-sm">Bloqueio de Risco</div>
         <div className="text-[10px] text-slate-400 font-mono mt-auto">Tool: OPA / Kyverno</div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex items-center justify-center text-slate-600"><ArrowRight className="w-5 h-5" /></div>

      {/* Step 3 */}
      <div className="flex-1 p-4 rounded bg-slate-900/80 border border-slate-700 flex flex-col gap-2">
         <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">03. Network</span>
         <div className="text-white font-bold text-sm">Zero Trust (mTLS)</div>
         <div className="text-[10px] text-slate-400 font-mono mt-auto">Tool: Istio / Linkerd</div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex items-center justify-center text-slate-600"><ArrowRight className="w-5 h-5" /></div>

      {/* Step 4 */}
      <div className="flex-1 p-4 rounded bg-slate-900/80 border border-slate-700 flex flex-col gap-2">
         <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">04. Runtime</span>
         <div className="text-white font-bold text-sm">Detecção de Anomalia</div>
         <div className="text-[10px] text-slate-400 font-mono mt-auto">Tool: Falco</div>
      </div>

   </div>
</div>

{/* 5. CHECKLIST FINAL DE SOBREVIVÊNCIA */}
<div className="max-w-4xl mx-auto border-l-4 border-violet-500 bg-slate-900/30 p-8 rounded-r-xl">
   <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
      <AlertOctagon className="w-6 h-6 text-violet-500" />
      Checklist de Segurança para o Examinador
   </h4>
   <p className="text-slate-400 mb-6">
      Para a banca: Kubernetes sem esses controles é um vetor de ataque, não uma plataforma.
   </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
         'RBAC com Privilégio Mínimo (Least Privilege)',
         'Network Policies (Isolamento Leste-Oeste)',
         'Pod Security Standards (Restricted Profile)',
         'Segurança de Secrets (Vault/KMS Externo)',
         'Imutabilidade de Infraestrutura (Read-Only Root FS)'
      ].map((item, i) => (
         <div key={i} className="flex items-center gap-3 text-sm text-slate-300 font-mono bg-black/40 p-2 rounded border border-slate-800/50">
            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
            {item}
         </div>
      ))}
   </div>
</div>

</section>