<section>
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
            "Escalar sem controle é só <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              acelerar o colapso
            </span>."
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Se a Arquitetura Cloud define onde a aplicação vive, o <strong className="text-blue-400">Kubernetes</strong> define como ela sobrevive.
          </p>
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

        

        {/* PLATFORM SECURITY: AS 3 CAMADAS (Elite Concept) */}
        <div className="mb-24 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Platform Security: Defesa em Profundidade</h3>
            <p className="text-slate-400">Em ambientes orquestrados, a segurança acontece em três camadas críticas.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* 1. O PORTEIRO (ADMISSION CONTROLLERS) */}
            <div className="group relative p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-green-500/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-green-500 to-slate-800 opacity-50"></div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-500" /> O Porteiro
                  </h4>
                  <p className="text-xs font-mono text-green-500 uppercase tracking-wider">Admission Controllers</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                O cluster recusa deploy inseguro automaticamente. Políticas como código (OPA/Kyverno) garantem governança na porta de entrada.
              </p>

              {/* Visual Gatekeeper */}
              <div className="font-mono text-xs bg-black p-4 rounded border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-slate-500">
                  <span>$ deploy --image=nginx:latest --user=root</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 border-l-2 border-red-500 pl-2">
                  <XCircle className="w-3 h-3" /> DENIED: Container running as ROOT.
                </div>
                <div className="flex justify-between items-center text-slate-500 pt-2 border-t border-slate-900 mt-2">
                  <span>$ deploy --image=nginx:alpine --user=1001</span>
                </div>
                <div className="flex items-center gap-2 text-green-400 border-l-2 border-green-500 pl-2">
                  <CheckCircle2 className="w-3 h-3" /> ALLOWED: Security Context Valid.
                </div>
              </div>
            </div>

            {/* 2. O VIGIA INTERNO (RUNTIME SECURITY) */}
            <div className="group relative p-8 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-red-500/30 transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-red-500 to-slate-800 opacity-50"></div>

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                    <Radio className="w-5 h-5 text-red-500" /> O Vigia Interno
                  </h4>
                  <p className="text-xs font-mono text-red-500 uppercase tracking-wider">Runtime Security</p>
                </div>
                {/* Radar Pulse Effect */}
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 bg-red-500 rounded-full"></div>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                E se o ataque acontecer <em className="text-white">durante</em> a execução? Monitoramento de comportamento em tempo real detecta anomalias.
              </p>

              {/* Visual Terminal Log */}
              <div className="font-mono text-xs bg-black p-4 rounded border border-slate-800">
                <div className="flex items-center gap-2 text-slate-500 mb-2 border-b border-slate-900 pb-2">
                  <Terminal className="w-3 h-3" /> FALCO SECURITY LOGS
                </div>
                <div className="space-y-1">
                  <p className="text-slate-600">[INFO] Pod started (nginx-deployment-x8z)</p>
                  <p className="text-red-400 animate-pulse">
                    [ALERT] Unexpected shell spawned in container!
                  </p>
                  <p className="text-slate-500 text-[10px] pl-4">
                    &gt; Command: /bin/bash (User: www-data)
                  </p>
                  <p className="text-slate-500 text-[10px] pl-4">
                    &gt; Action: Connection to 192.168.1.55 (Mining Pool?)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5. PLATFORM SECURITY (TRÍADE DE ELITE) */}
        <div className="mb-24">
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


        



      </section>