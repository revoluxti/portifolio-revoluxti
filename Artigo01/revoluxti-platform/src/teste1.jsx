// Cores para manter consistência interna deste capítulo
const theme = {
  bg: "bg-[#0B1120]", // Azul Profundo (Midnight)
  accent: "text-sky-400",
  border: "border-sky-900/30",
  cardBg: "bg-[#162032]"
};



{/* ---------------------------------------------------------------------
    CAPÍTULO 8: IAM & GOVERNANÇA (THEME: MIDNIGHT BLUE)
---------------------------------------------------------------------- */}
{(() => {
  // Definindo tema local apenas para este bloco para não conflitar
  const theme = {
    bg: "bg-[#0B1120]", 
    border: "border-sky-900/30",
    cardBg: "bg-[#162032]"
  };

  return (
    <section className={`py-24 px-6 max-w-7xl mx-auto border-t border-slate-800 ${theme.bg} relative overflow-hidden`}>

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"></div>
      
      {/* Glow Superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* 1. CABEÇALHO */}
      <div className="mb-16 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl border ${theme.border} bg-sky-950/30`}>
            <Fingerprint className="w-8 h-8 text-sky-400" />
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Capítulo 8 – IAM e Automação de Compliance
            </h3>
            <p className="text-slate-400 text-lg mt-1">Governança como Código</p>
          </div>
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-sky-500 to-transparent rounded-full"></div>
      </div>

      {/* 2. INTRODUÇÃO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
            Governança contínua em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              ambientes de alta velocidade.
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6 text-justify">
            Com ambientes escaláveis em plena operação, o foco migra para o controle. O desafio é governar quem pode fazer o quê, quando e por quê — sem travar o negócio.
          </p>
          <div className="p-4 border-l-4 border-sky-500 bg-sky-950/10">
            <p className="text-sky-200 italic font-medium">
              "Identidade e compliance caminham juntos ou falham juntos."
            </p>
          </div>
        </div>

        {/* Card: Perímetro de Identidade */}
        <div className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} relative group`}>
           <div className="absolute top-4 right-4 p-2 bg-sky-500/10 rounded-lg">
             <ShieldCheck className="w-6 h-6 text-sky-400" />
           </div>
           <h3 className="text-xl font-bold text-white mb-4">Identidade como Perímetro</h3>
           <p className="text-slate-400 mb-6">
             O perímetro não é mais a rede física; é a identidade validada continuamente. O IAM atua como o sistema nervoso central da segurança.
           </p>
           <ul className="space-y-3">
             {['Pessoas', 'Serviços', 'Pipelines', 'APIs'].map((item, i) => (
               <li key={i} className="flex items-center gap-3 text-slate-300 bg-slate-900/50 p-2 rounded border border-slate-700/50">
                 <div className="w-2 h-2 rounded-full bg-sky-400"></div> {item}
               </li>
             ))}
           </ul>
        </div>
      </div>

      {/* 3. ZERO TRUST GRID */}
      <div className="mb-24 relative z-10">
        <div className="text-center mb-12">
           <h3 className="text-2xl font-bold text-white mb-4">Zero Trust Operacional</h3>
           <p className="text-slate-400 max-w-2xl mx-auto">
             Nenhuma entidade é confiável por padrão. Sem IAM robusto, não existe Zero Trust; há apenas esperança.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className={`p-6 rounded-xl border ${theme.border} hover:border-sky-400/50 transition-all group ${theme.cardBg}`}>
              <Users className="w-8 h-8 text-sky-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Identidade</h4>
              <p className="text-sm text-slate-400">Quem é? (MFA, Biometria)</p>
           </div>
           <div className={`p-6 rounded-xl border ${theme.border} hover:border-sky-400/50 transition-all group ${theme.cardBg}`}>
              <ShieldCheck className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Contexto</h4>
              <p className="text-sm text-slate-400">De onde vem? Dispositivo seguro?</p>
           </div>
           <div className={`p-6 rounded-xl border ${theme.border} hover:border-sky-400/50 transition-all group ${theme.cardBg}`}>
              <Scale className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Comportamento</h4>
              <p className="text-sm text-slate-400">O padrão é anômalo?</p>
           </div>
           <div className={`p-6 rounded-xl border ${theme.border} hover:border-sky-400/50 transition-all group ${theme.cardBg}`}>
              <Clock className="w-8 h-8 text-sky-200 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Tempo</h4>
              <p className="text-sm text-slate-400">Acesso temporário (JIT).</p>
           </div>
        </div>
      </div>

      {/* 4. JIT ACCESS & WORKLOAD IDENTITY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 relative z-10">
        
        {/* Card JIT */}
        <div className={`p-8 rounded-2xl border ${theme.border} bg-gradient-to-br from-[#162032] to-[#0f172a]`}>
           <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-sky-400" />
              <h3 className="text-xl font-bold text-white">Revolução JIT (Just-in-Time)</h3>
           </div>
           <p className="text-slate-400 mb-6 text-sm leading-relaxed">
             O administrador não "é" admin; ele "está" admin. Credenciais permanentes (*Standing Privileges*) morrem aqui.
           </p>
           <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-500">
                 <span>Request</span>
                 <span>Approve</span>
                 <span>Access (1h)</span>
                 <span>Revoke</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative">
                 <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-sky-600 to-indigo-500"></div>
              </div>
              <div className="flex items-center gap-2 text-sky-300 bg-sky-950/30 p-2 rounded border border-sky-900/50">
                 <CheckCircle2 className="w-4 h-4" /> Auto-Revogação Ativa
              </div>
           </div>
        </div>

        {/* Card Workload Identity */}
        <div className={`p-8 rounded-2xl border ${theme.border} bg-gradient-to-br from-[#162032] to-[#0f172a]`}>
           <div className="flex items-center gap-3 mb-6">
              <Key className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Workload Identity Federation</h3>
           </div>
           <p className="text-slate-400 mb-6 text-sm leading-relaxed">
             Pipelines não devem ter senhas. Trocamos chaves estáticas (Access Keys) por tokens efêmeros assinados.
           </p>
           <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded bg-red-950/20 border border-red-900/30 flex flex-col items-center text-center opacity-50">
                 <span className="text-red-400 font-bold text-xs mb-1">ANTES</span>
                 <span className="text-slate-500 text-[10px]">Static AWS Keys</span>
                 <AlertCircle className="w-4 h-4 text-red-500 mt-2" />
              </div>
              <div className="p-3 rounded bg-green-950/20 border border-green-900/30 flex flex-col items-center text-center">
                 <span className="text-green-400 font-bold text-xs mb-1">AGORA</span>
                 <span className="text-slate-300 text-[10px]">OIDC Token</span>
                 <CheckCircle2 className="w-4 h-4 text-green-500 mt-2" />
              </div>
           </div>
        </div>
      </div>

      {/* 5. COMPLIANCE AS CODE */}
      <div className="mb-24 relative z-10">
         <div className="flex items-center gap-3 mb-8">
            <FileCheck className="w-6 h-6 text-sky-400" />
            <h3 className="text-2xl font-bold text-white">Compliance as Code & CSPM</h3>
         </div>
         
         <div className={`p-8 rounded-2xl border ${theme.border} ${theme.cardBg} relative overflow-hidden`}>
            <div className="absolute right-0 top-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="md:w-2/3">
                  <p className="text-slate-300 text-lg mb-6">
                     Auditoria deixa de ser um evento traumático retrospectivo e vira um <strong className="text-white">subproduto natural da operação</strong>.
                  </p>
                  <ul className="space-y-3 mb-6">
                     <li className="flex items-center gap-3 text-slate-400">
                        <Lock className="w-4 h-4 text-sky-500" /> Policy as Code (Bloqueio no Pipeline)
                     </li>
                     <li className="flex items-center gap-3 text-slate-400">
                        <RefreshCw className="w-4 h-4 text-sky-500" /> CSPM: Detecção de Drift em Tempo Real
                     </li>
                     <li className="flex items-center gap-3 text-slate-400">
                        <FileCheck className="w-4 h-4 text-sky-500" /> Auditoria Contínua (Sem Excel)
                     </li>
                  </ul>
               </div>
               <div className="md:w-1/3 w-full bg-[#0B1120] border border-slate-800 rounded-lg p-4 font-mono text-xs">
                  <div className="flex justify-between mb-2 text-slate-500">
                     <span>COMPLIANCE_SCORE</span>
                     <span className="text-green-400">98%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full mb-4">
                     <div className="w-[98%] h-full bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between">
                        <span className="text-slate-400">Storage Encrypted</span>
                        <span className="text-green-500">[PASS]</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-slate-400">MFA Enabled</span>
                        <span className="text-green-500">[PASS]</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-slate-400">Public Access</span>
                        <span className="text-green-500">[BLOCKED]</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 6. CONCLUSÃO */}
      <div className="text-center relative z-10 max-w-3xl mx-auto">
         <h4 className="text-xl font-bold text-white mb-6">O Acelerador Estratégico</h4>
         <div className="p-6 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-900/20 to-indigo-900/20">
            <p className="text-slate-300 italic text-lg">
               "Governança moderna não desacelera o negócio. <br/>
               Ela evita que o negócio tenha que frear bruscamente lá na frente."
            </p>
         </div>
      </div>

    </section>
  );
})()}