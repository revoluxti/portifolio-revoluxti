{/* ---------------------------------------------------------------------
    CAPÍTULO 7: ORQUESTRAÇÃO DE ELITE (KUBERNETES) #3
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">

{/* Background Decorativo (Padrão Hexagonal Sutil) */}
<div className="absolute inset-0 opacity-10 pointer-events-none" 
     style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
</div>

{/* 1. CABEÇALHO PADRONIZADO */}
<div className="mb-16">
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 rounded-lg border bg-slate-900/50 border-indigo-500/30">
      <Hexagon className="w-6 h-6 text-indigo-500" />
    </div>
    <h3 className="text-2xl font-bold text-white">
      Capítulo 7 – Orquestração de Elite: Kubernetes e Cloud em Escala
    </h3>
  </div>
</div>

{/* 2. INTRODUÇÃO DE IMPACTO */}
<div className="mb-20 text-center relative z-10">
  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
    Escalar sem controle é só <br/>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
      acelerar o colapso.
    </span>
  </h2>
  <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
    "Se a Arquitetura Cloud define onde a aplicação vive, o Kubernetes define <strong className="text-white">como ela sobrevive</strong>."
  </p>
</div>

{/* 3. KUBERNETES: O SISTEMA OPERACIONAL (GRID) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
  
  {/* Card: O Motor */}
  <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Cpu className="w-32 h-32 text-indigo-500" />
    </div>
    <div className="relative z-10">
      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Server className="w-5 h-5 text-indigo-400" /> SO da Nuvem
      </h4>
      <p className="text-slate-400 leading-relaxed mb-4">
        Não é ferramenta para iniciantes — é plataforma para organizações disciplinadas. É o mecanismo que sustenta crescimento sem colapso.
      </p>
      <div className="p-3 bg-indigo-950/20 border-l-2 border-indigo-500 text-indigo-300 text-sm">
        "Quando a arquitetura deixa de funcionar 'bem' e passa a funcionar 'certo'."
      </div>
    </div>
  </div>

  {/* Card: O Risco */}
  <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl relative overflow-hidden group hover:border-red-500/50 transition-all">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <AlertOctagon className="w-32 h-32 text-red-500" />
    </div>
    <div className="relative z-10">
      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-red-400" /> Multiplicador de Risco
      </h4>
      <p className="text-slate-400 leading-relaxed mb-4">
        Kubernetes abstrai a infraestrutura, mas amplia drasticamente a superfície de ataque.
      </p>
      <div className="p-3 bg-red-950/20 border-l-2 border-red-500 text-red-300 text-sm">
        "Sem AppSec prévio, K8s deixa de ser plataforma e vira vetor de ataque altamente sofisticado."
      </div>
    </div>
  </div>

</div>

{/* 4. GITOPS: A VERDADE ÚNICA (BANNER) */}
<div className="mb-24 relative p-8 md:p-10 bg-gradient-to-r from-[#0f172a] to-[#020617] border-y border-slate-800">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="p-4 bg-slate-900 rounded-full border border-slate-700 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
      <GitBranch className="w-8 h-8 text-indigo-400" />
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-bold text-white mb-2">GitOps: A Verdade Única</h3>
      <p className="text-slate-400 max-w-2xl">
        Em orquestração de elite, ninguém roda <code className="bg-black px-1 py-0.5 rounded text-indigo-300 font-mono text-sm">kubectl apply</code> na mão. 
        O estado do cluster espelha o Git. Conecta "Dev" (Código) com "Ops" (K8s) de forma auditável.
      </p>
    </div>
  </div>
</div>

{/* 5. PLATFORM SECURITY (TRÍADE DE ELITE) */}
<div className="mb-24">
  <div className="text-center mb-12">
    <h3 className="text-2xl font-bold text-white mb-4">Platform Security: Defesa em Profundidade</h3>
    <p className="text-slate-400">Em ambientes orquestrados, a segurança acontece em três camadas críticas.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Camada 1: Supply Chain */}
    <div className="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-colors">
      <div className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-3">01. Build</div>
      <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
        <Box className="w-5 h-5" /> Supply Chain
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">
        Assinatura de imagens e scans de vulnerabilidade antes do deploy. O que é sujo não entra no cluster.
      </p>
    </div>

    {/* Camada 2: Admission (O Porteiro) */}
    <div className="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 rounded-bl-full -mr-8 -mt-8"></div>
      <div className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-3">02. Deploy</div>
      <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
        <Lock className="w-5 h-5" /> O Porteiro
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">
        <strong>Admission Controllers & OPA:</strong> O cluster recusa deploy inseguro automaticamente. Tentou rodar como root? O K8s diz "Não".
      </p>
    </div>

    {/* Camada 3: Runtime (O Vigia) */}
    <div className="p-6 bg-[#0a0a0a] border border-slate-800 rounded-xl hover:border-indigo-500/30 transition-colors">
      <div className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-3">03. Runtime</div>
      <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
        <Eye className="w-5 h-5" /> O Vigia Interno
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">
        Monitoramento em tempo real (ex: Falco). Se um pod legítimo começar a rodar comandos estranhos, ele é detectado e isolado.
      </p>
    </div>

  </div>
</div>

{/* 6. CONTROLES ESSENCIAIS (CHECKLIST) */}
<div className="max-w-3xl mx-auto bg-slate-900/20 border border-slate-800 rounded-2xl p-8">
  <h4 className="text-white font-bold mb-6 flex items-center gap-2">
    <Layers className="w-5 h-5 text-indigo-500" /> Controles Essenciais de Sobrevivência
  </h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      "Image Scanning & Assinatura",
      "Network Policies (Isolamento)",
      "Pod Security Standards (PSS)",
      "Gestão de Secrets (Vault/KMS)",
      "RBAC Granular",
      "Policy as Code (Kyverno/OPA)"
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
        {item}
      </div>
    ))}
  </div>
</div>

</section>