{/* ---------------------------------------------------------------------
    CAPÍTULO 7: ORQUESTRAÇÃO DE ELITE (NÍVEL BANCA EXAMINADORA)
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-900 bg-[#050101] relative overflow-hidden">

  {/* Background Texture (Hexagons & Data Streams) */}
  <div className="absolute inset-0 bg-[radial-gradient(#2e1065_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none"></div>

  {/* 1. CABEÇALHO PADRONIZADO */}
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}>
        <Hexagon className="w-6 h-6 text-violet-500" />
      </div>
      <h3 className="text-2xl font-bold text-white">
        Capítulo 7 – Orquestração de Elite: Kubernetes e Cloud em Escala
      </h3>
    </div>
  </div>

  {/* 2. HERO SECTION: MATURIDADE & CONTROLE */}
  <div className="mb-20 text-center relative z-10">
    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
      Escalar sem controle é só <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
        acelerar o colapso.
      </span>
    </h2>
    <p className="text-xl text-slate-400 max-w-4xl mx-auto font-light leading-relaxed">
      Se a Arquitetura Cloud define onde a aplicação vive, o <strong className="text-white">Kubernetes (K8s) define como ela sobrevive</strong>.
      Neste estágio, a orquestração deixa de ser operacional e torna-se estratégica: é o motor de padronização, automação e isolamento.
    </p>
  </div>

  {/* 3. KUBERNETES: O SISTEMA OPERACIONAL (COM ÊNFASE EM RISCO) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">

    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-widest border border-violet-500/30 px-3 py-1 rounded-full bg-violet-950/20">
        <Server className="w-3 h-3" /> Cloud Operating System
      </div>
      <h3 className="text-2xl font-bold text-white">
        Padronização ou Vetor de Ataque?
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        O K8s abstrai infraestrutura e transforma ambientes heterogêneos em plataformas previsíveis.
        Porém, ele <span className="text-red-400 font-bold">amplia drasticamente a superfície de ataque</span>.
      </p>
      <p className="text-slate-400 leading-relaxed text-sm">
        Um cluster mal configurado é um convite à escalada de privilégios e movimentação lateral. Sem AppSec, o K8s é apenas um multiplicador de risco eficiente.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-slate-900/50 border-l-2 border-violet-500 rounded-r">
          <span className="block text-white font-bold text-sm">Imutabilidade</span>
          <span className="text-xs text-slate-500">Nodes descartáveis.</span>
        </div>
        <div className="p-4 bg-slate-900/50 border-l-2 border-violet-500 rounded-r">
          <span className="block text-white font-bold text-sm">Self-Healing</span>
          <span className="text-xs text-slate-500">Recuperação automática.</span>
        </div>
      </div>
    </div>

    {/* Visual: Cluster Defense Grid */}
    <div className="relative h-72 bg-[#0a0a0a] border border-violet-900/30 rounded-2xl p-6 flex flex-col justify-between overflow-hidden group">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="flex justify-between items-start relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
        </div>
        <span className="text-[10px] font-mono text-violet-500">K8S_DEFENSE_GRID_V1</span>
      </div>

      <div className="relative z-10 space-y-2 font-mono text-xs">
        <div className="flex justify-between p-2 bg-slate-900/80 border border-slate-800 rounded">
          <span className="text-slate-400">Pod Identity</span>
          <span className="text-green-400">SPIFFE/SPIRE [ACTIVE]</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-900/80 border border-slate-800 rounded">
          <span className="text-slate-400">Network</span>
          <span className="text-green-400">Cilium eBPF [LOCKED]</span>
        </div>
        <div className="flex justify-between p-2 bg-slate-900/80 border border-slate-800 rounded">
          <span className="text-slate-400">Compliance</span>
          <span className="text-green-400">CIS Benchmark [PASS]</span>
        </div>
      </div>
    </div>
  </div>

  {/* 4. GITOPS: A VERDADE ÚNICA (AUDITORIA) */}
  <div className="mb-24 relative p-8 md:p-10 border border-slate-800 bg-[#0a0a0a] rounded-xl overflow-hidden group hover:border-violet-500/30 transition-colors">
    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
      <GitBranch className="w-40 h-40 text-white" />
    </div>

    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <GitBranch className="w-6 h-6 text-fuchsia-500" />
        GitOps: A Verdade Única & Auditável
      </h3>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2 space-y-4">
          <p className="text-slate-400 leading-relaxed text-sm">
            Em orquestração de elite, a imperatividade morre. Ninguém roda <code className="bg-slate-800 px-1 py-0.5 rounded text-slate-300 font-mono text-xs">kubectl apply</code>.
            O estado do cluster espelha estritamente o repositório Git.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            Isso garante <strong>Imutabilidade</strong> e <strong>Auditabilidade</strong>. Se houver "Configuration Drift" (alguém mexer manualmente), o ArgoCD/Flux corrige automaticamente.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-fuchsia-950/30 border border-fuchsia-500/30 text-[10px] text-fuchsia-400 font-mono">ArgoCD</span>
            <span className="px-2 py-1 rounded bg-fuchsia-950/30 border border-fuchsia-500/30 text-[10px] text-fuchsia-400 font-mono">Flux v2</span>
          </div>
        </div>

        {/* GitOps Flow Visual */}
        <div className="md:w-1/2 w-full flex items-center justify-between gap-2 p-6 bg-slate-900/50 rounded-lg border border-slate-800 font-mono text-xs text-center shadow-xl">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-slate-800 rounded-full border border-slate-700 shadow-lg"><GitBranch className="w-5 h-5 text-orange-500" /></div>
            <span className="text-slate-400 font-bold">Git Repo</span>
            <span className="text-[9px] text-slate-600">Source of Truth</span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-600 animate-pulse" />
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-slate-800 rounded-full border border-slate-700 shadow-lg"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
            <span className="text-slate-400 font-bold">Reconciliation</span>
            <span className="text-[9px] text-slate-600">Continuous Sync</span>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-600 animate-pulse" />
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-slate-800 rounded-full border border-slate-700 shadow-lg"><Hexagon className="w-5 h-5 text-violet-500" /></div>
            <span className="text-slate-400 font-bold">Live Cluster</span>
            <span className="text-[9px] text-slate-600">Desired State</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* 5. PLATFORM SECURITY (DEEP DIVE TÉCNICO) */}
  <div className="mb-24">
    <div className="mb-12 border-l-4 border-violet-500 pl-6">
      <h3 className="text-3xl font-black text-white mb-2">Platform Security 2.0</h3>
      <p className="text-slate-400">Defesa em profundidade expandida para atender requisitos de missão crítica.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* 1. Supply Chain & SBOM */}
      <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300">
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 text-blue-400">
          <FileJson className="w-5 h-5" />
        </div>
        <h4 className="text-white font-bold mb-2">Supply Chain & SBOM</h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Não basta scanear. Implementamos <strong>SBOM</strong> (Software Bill of Materials) e assinatura digital (Sigstore/Cosign). Garantia matemática de proveniência.
        </p>
        <div className="w-full bg-slate-800 h-px mb-3"></div>
        <div className="flex gap-2 text-[10px] font-mono text-slate-500">
          <span>Cosign</span> • <span>Trivy</span> • <span>Syft</span>
        </div>
      </div>

      {/* 2. Admission Controllers (OPA) */}
      <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-full"></div>
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 text-violet-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h4 className="text-white font-bold mb-2">Policy as Code (OPA)</h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          O cluster recusa deploy inseguro. Tentou rodar como <code className="text-red-400">root</code>? Tentou montar o host filesystem? O <strong>Gatekeeper</strong> bloqueia.
        </p>
        <div className="flex items-center gap-2 text-[10px] font-mono bg-red-950/20 p-2 rounded border border-red-900/30">
          <XCircle className="w-3 h-3 text-red-500" />
          <span className="text-red-400">Privileged Pod Blocked</span>
        </div>
      </div>

      {/* 3. Service Mesh & Zero Trust */}
      <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300">
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 text-fuchsia-400">
          <Network className="w-5 h-5" />
        </div>
        <h4 className="text-white font-bold mb-2">Zero Trust & mTLS</h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          Identidade baseada em criptografia, não em IP. <strong>Service Mesh</strong> (Istio/Linkerd) garante mTLS (criptografia mútua) entre todos os serviços.
        </p>
        <div className="w-full bg-slate-800 h-px mb-3"></div>
        <div className="flex gap-2 text-[10px] font-mono text-slate-500">
          <span>Istio</span> • <span>Linkerd</span> • <span>SPIFFE</span>
        </div>
      </div>

      {/* 4. Secrets Management */}
      <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300">
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 text-yellow-500">
          <Key className="w-5 h-5" />
        </div>
        <h4 className="text-white font-bold mb-2">External Secrets</h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          Fim das variáveis de ambiente. Segredos são injetados em tempo de execução via <strong>Vault Sidecars</strong> diretamente na memória.
        </p>
      </div>

      {/* 5. Runtime Security */}
      <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300">
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 text-cyan-400">
          <Activity className="w-5 h-5" />
        </div>
        <h4 className="text-white font-bold mb-2">Runtime (eBPF)</h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          E se o ataque for na execução? <strong>Falco/Tetragon</strong> detectam syscalls maliciosas em tempo real direto no kernel.
        </p>
      </div>

      {/* 6. Compliance as Code */}
      <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300">
        <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-800 text-green-400">
          <FileCheck className="w-5 h-5" />
        </div>
        <h4 className="text-white font-bold mb-2">Compliance (CIS)</h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          Auditoria contínua automática contra <strong>CIS Benchmarks</strong> e PCI-DSS. O cluster prova que é seguro.
        </p>
      </div>

    </div>
  </div>

  {/* 6. CHECKLIST DE MATURIDADE (FIM) */}
  <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-slate-900 to-[#0a0a0a] border border-slate-800 rounded-2xl relative overflow-hidden">
    <div className="absolute right-0 top-0 p-4 opacity-5">
      <AlertOctagon className="w-32 h-32 text-violet-500" />
    </div>

    <h4 className="text-white font-bold mb-6 flex items-center gap-2 relative z-10">
      <AlertOctagon className="w-5 h-5 text-violet-500" />
      Checklist de Sobrevivência (Maturidade Nível 5)
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
      {[
        'Network Policies (Default Deny)',
        'Pod Security Standards (Restricted)',
        'Imutabilidade de Infra (Nodes Descartáveis)',
        'Assinatura de Imagens (Cosign/Notary)',
        'Scan de Vulnerabilidades no Registry',
        'Secrets via Vault (Sem Env Vars)',
        'mTLS Mesh (Criptografia em Trânsito)',
        'Audit Logs centralizados (SIEM)'
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-slate-300 border-b border-slate-800/50 pb-2">
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_rgba(139,92,246,0.8)]"></div>
          {item}
        </div>
      ))}
    </div>
  </div>

</section>