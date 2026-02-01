{/* ---------------------------------------------------------------------
          CAPÍTULO 8: IAM & COMPLIANCE (MODELO V2 - CONSOLE & RADAR)
      ---------------------------------------------------------------------- */}
      <section className={`py-24 px-6 max-w-7xl mx-auto border-t border-slate-800 ${themeCap8.bg} relative overflow-hidden`}>

        {/* Fundo Cibernético (Scanlines) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* 1. HERO CENTERED (Foco no Título) */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-6">
            <Fingerprint className="w-3 h-3" /> Identity & Governance
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            IAM e Automação de Compliance: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400">
              Governança como Código
            </span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Em ambientes distribuídos, <strong className="text-white">Identidade e Compliance</strong> caminham juntos ou falham juntos. O perímetro virou código.
          </p>
        </div>

        {/* 2. O PERÍMETRO DE IDENTIDADE (LAYOUT "RADAR") */}
        <div className="mb-24 relative z-10">
          <div className={`rounded-3xl border ${themeCap8.border} bg-[#0f172a]/50 p-8 md:p-12 text-center relative overflow-hidden`}>
             
             {/* Efeito Radar de Fundo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-500/5 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-sky-500/10 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-sky-500/20 rounded-full"></div>

             <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-sky-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">O Novo Perímetro é a Identidade</h3>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                  Esqueça firewalls de borda. Em DevSecOps, o acesso é validado continuamente para cada entidade.
                </p>

                {/* Grid de Entidades */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                   <div className="p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg flex flex-col items-center gap-2 hover:border-sky-500/50 transition-colors">
                      <Users className="w-6 h-6 text-sky-400" />
                      <span className="text-slate-300 text-sm font-bold">Pessoas</span>
                   </div>
                   <div className="p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg flex flex-col items-center gap-2 hover:border-sky-500/50 transition-colors">
                      <RefreshCw className="w-6 h-6 text-indigo-400" />
                      <span className="text-slate-300 text-sm font-bold">Serviços</span>
                   </div>
                   <div className="p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg flex flex-col items-center gap-2 hover:border-sky-500/50 transition-colors">
                      <Code className="w-6 h-6 text-violet-400" />
                      <span className="text-slate-300 text-sm font-bold">Pipelines</span>
                   </div>
                   <div className="p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg flex flex-col items-center gap-2 hover:border-sky-500/50 transition-colors">
                      <Key className="w-6 h-6 text-sky-200" />
                      <span className="text-slate-300 text-sm font-bold">APIs</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* 3. ZERO TRUST PIPELINE (VISUAL HORIZONTAL) */}
        <div className="mb-24 relative z-10">
           <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Lock className="w-5 h-5 text-sky-400" /> Zero Trust Pipeline
           </h3>
           
           <div className="flex flex-col md:flex-row gap-4">
              {/* Step 1 */}
              <div className="flex-1 p-6 bg-slate-900/40 border border-slate-800 rounded-xl relative overflow-hidden group hover:bg-slate-900/60 transition-colors">
                 <div className="absolute top-0 left-0 w-1 h-full bg-sky-500"></div>
                 <h4 className="text-white font-bold mb-1">1. Identidade</h4>
                 <p className="text-xs text-slate-500">Quem é você?</p>
                 <div className="mt-4 text-xs font-mono text-sky-400 bg-sky-950/20 inline-block px-2 py-1 rounded border border-sky-900">MFA CHECK</div>
              </div>
              
              {/* Seta Visual (Apenas Desktop) */}
              <div className="hidden md:flex items-center justify-center">
                 <ArrowRight className="w-5 h-5 text-slate-700" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 p-6 bg-slate-900/40 border border-slate-800 rounded-xl relative overflow-hidden group hover:bg-slate-900/60 transition-colors">
                 <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                 <h4 className="text-white font-bold mb-1">2. Contexto</h4>
                 <p className="text-xs text-slate-500">Device seguro?</p>
                 <div className="mt-4 text-xs font-mono text-indigo-400 bg-indigo-950/20 inline-block px-2 py-1 rounded border border-indigo-900">DEVICE TRUST</div>
              </div>

              {/* Seta Visual */}
              <div className="hidden md:flex items-center justify-center">
                 <ArrowRight className="w-5 h-5 text-slate-700" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 p-6 bg-slate-900/40 border border-slate-800 rounded-xl relative overflow-hidden group hover:bg-slate-900/60 transition-colors">
                 <div className="absolute top-0 left-0 w-1 h-full bg-violet-500"></div>
                 <h4 className="text-white font-bold mb-1">3. JIT Access</h4>
                 <p className="text-xs text-slate-500">Acesso temporário</p>
                 <div className="mt-4 text-xs font-mono text-violet-400 bg-violet-950/20 inline-block px-2 py-1 rounded border border-violet-900">1 HOUR TTL</div>
              </div>
           </div>
        </div>

        {/* 4. TÉCNICA AVANÇADA (JIT & WORKLOAD) - LADO A LADO COMPACTO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
           
           {/* JIT Card */}
           <div className={`p-8 border ${themeCap8.border} rounded-2xl bg-gradient-to-b from-[#162032] to-[#0B1120]`}>
              <Clock className="w-8 h-8 text-sky-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Just-in-Time (JIT)</h3>
              <p className="text-slate-400 text-sm mb-6">
                 Standing Privileges (acesso eterno) são eliminados. O admin só "está" admin quando necessário.
              </p>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full w-1/2 bg-sky-500 animate-pulse"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2">
                 <span>START</span>
                 <span>AUTO-REVOKE (60m)</span>
              </div>
           </div>

           {/* Workload Identity Card */}
           <div className={`p-8 border ${themeCap8.border} rounded-2xl bg-gradient-to-b from-[#162032] to-[#0B1120]`}>
              <Key className="w-8 h-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Workload Identity</h3>
              <p className="text-slate-400 text-sm mb-6">
                 Fim das Access Keys estáticas. Pipelines usam tokens OIDC de curta duração.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono bg-black/40 p-3 rounded border border-slate-800">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 <span className="text-slate-300">Token: <span className="text-green-400">eyJhbGciOi...</span></span>
              </div>
           </div>

        </div>

        {/* 5. COMPLIANCE AS CODE (VISUAL TERMINAL) */}
        <div className="mb-24 relative z-10">
           <div className="flex items-end justify-between mb-6">
              <div>
                 <h3 className="text-2xl font-bold text-white">Compliance as Code</h3>
                 <p className="text-slate-400 text-sm">Auditoria Contínua & CSPM</p>
              </div>
              <FileCheck className="w-6 h-6 text-sky-500" />
           </div>

           {/* O Terminal */}
           <div className="w-full rounded-lg border border-slate-800 bg-[#0a0a0a] shadow-2xl font-mono text-sm overflow-hidden">
              {/* Barra de Título */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
                 <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                 <span className="ml-2 text-xs text-slate-500">revoluxti-cspm — audit</span>
              </div>
              {/* Conteúdo do Terminal */}
              <div className="p-6 text-slate-300 space-y-2">
                 <div>
                    <span className="text-green-400">➜</span> <span className="text-sky-400">~</span> run compliance-check --target=aws-prod
                 </div>
                 <div className="text-slate-500 pb-2">Initializing CSPM scanner v2.4.0...</div>
                 
                 <div className="grid grid-cols-[1fr_auto] gap-4 py-1 border-b border-slate-800/50">
                    <span>[IAM] Root MFA Enabled</span>
                    <span className="text-green-500">[PASS]</span>
                 </div>
                 <div className="grid grid-cols-[1fr_auto] gap-4 py-1 border-b border-slate-800/50">
                    <span>[S3] Public Access Blocked</span>
                    <span className="text-green-500">[PASS]</span>
                 </div>
                 <div className="grid grid-cols-[1fr_auto] gap-4 py-1 border-b border-slate-800/50">
                    <span>[EC2] Security Group Open 0.0.0.0</span>
                    <span className="text-red-500">[FAIL] - Auto-remediated</span>
                 </div>
                 <div className="grid grid-cols-[1fr_auto] gap-4 py-1">
                    <span>[K8S] Privileged Containers</span>
                    <span className="text-green-500">[PASS]</span>
                 </div>

                 <div className="pt-4 text-green-400">
                    ✔ Audit Complete. Score: 98/100
                 </div>
              </div>
           </div>
        </div>

        {/* 6. CONCLUSÃO */}
        <div className="text-center max-w-2xl mx-auto relative z-10">
           <div className="p-6 border border-sky-500/20 bg-sky-900/10 rounded-2xl backdrop-blur-sm">
              <p className="text-slate-300 italic text-lg leading-relaxed">
                 "Governança moderna não desacelera o negócio. Ela evita que o negócio tenha que frear bruscamente lá na frente."
              </p>
           </div>
        </div>

      </section>