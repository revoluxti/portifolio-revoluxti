{/* ---------------------------------------------------------------------
    CAPÍTULO 8: IAM & COMPLIANCE (MODELO: GOVERNANCE ENGINE)
---------------------------------------------------------------------- */}
<section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800 bg-[#0B1120] relative overflow-hidden font-sans">

{/* Background: Digital Noise / Data Stream */}
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none"></div>

{/* 1. CABEÇALHO TÉCNICO (HUD STYLE) */}
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 border-b border-sky-900/30 pb-8 relative z-10">
  <div>
    <div className="flex items-center gap-2 text-sky-500 font-mono text-xs uppercase tracking-[0.2em] mb-2">
      <Activity className="w-4 h-4" /> System Governance: Active
    </div>
    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">
      Capítulo 08
    </h3>
    <h4 className="text-2xl text-slate-400 font-light mt-1">
      IAM & <span className="text-sky-400 font-medium">Compliance as Code</span>
    </h4>
  </div>
  <div className="mt-6 md:mt-0 text-right hidden md:block">
    <div className="text-xs font-mono text-slate-500">SECURITY_LEVEL</div>
    <div className="text-xl font-bold text-sky-400">ZERO TRUST ENFORCED</div>
  </div>
</div>

{/* 2. INTRODUÇÃO: IDENTIDADE COMO PERÍMETRO (LAYOUT ASSIMÉTRICO) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 relative z-10">
  
  {/* Coluna de Texto (Larga) */}
  <div className="lg:col-span-7 flex flex-col justify-center">
    <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
      O perímetro morreu. <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
        Longa vida à Identidade.
      </span>
    </h2>
    <p className="text-slate-400 text-lg leading-relaxed mb-8">
      Em ambientes distribuídos, não existe "dentro" ou "fora" da rede. O IAM atua como o sistema nervoso central, validando cada interação. 
      <strong className="text-white"> Identidade e compliance caminham juntos ou falham juntos.</strong>
    </p>
    
    {/* Mini Dashboard de Métricas */}
    <div className="grid grid-cols-3 gap-4 border-t border-sky-900/30 pt-6">
      <div>
        <div className="text-2xl font-mono text-white">100%</div>
        <div className="text-xs text-sky-500 uppercase">MFA Adoption</div>
      </div>
      <div>
        <div className="text-2xl font-mono text-white">0</div>
        <div className="text-xs text-slate-500 uppercase">Static Keys</div>
      </div>
      <div>
        <div className="text-2xl font-mono text-white">&lt;1h</div>
        <div className="text-xs text-slate-500 uppercase">Session TTL</div>
      </div>
    </div>
  </div>

  {/* Coluna Visual (Card de Acesso Holográfico) */}
  <div className="lg:col-span-5 relative">
    <div className="relative bg-[#162032] border border-sky-900/50 rounded-lg p-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-transparent"></div>
      
      {/* Header do Card */}
      <div className="flex justify-between items-start mb-8">
        <Fingerprint className="w-12 h-12 text-sky-500 opacity-80" />
        <div className="text-right">
          <div className="text-[10px] font-mono text-slate-500">ID_VERIFICATION</div>
          <div className="text-green-400 text-xs font-bold flex items-center justify-end gap-1">
            <CheckCircle className="w-3 h-3" /> VERIFIED
          </div>
        </div>
      </div>

      {/* Dados do Usuário (Simulação) */}
      <div className="space-y-4 font-mono text-sm">
        <div className="flex justify-between border-b border-sky-900/30 pb-2">
          <span className="text-slate-500">User</span>
          <span className="text-white">DevSecOps_Admin</span>
        </div>
        <div className="flex justify-between border-b border-sky-900/30 pb-2">
          <span className="text-slate-500">Context</span>
          <span className="text-white">Corporate_Device</span>
        </div>
        <div className="flex justify-between border-b border-sky-900/30 pb-2">
          <span className="text-slate-500">Risk Score</span>
          <span className="text-sky-400">LOW (12/100)</span>
        </div>
      </div>

      {/* Efeito de Scan */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-500/10 to-transparent animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
    </div>
  </div>
</div>

{/* 3. ZERO TRUST PIPELINE (FLUXO HORIZONTAL) */}
<div className="mb-24 relative z-10">
  <div className="flex items-center gap-4 mb-8">
    <div className="h-px flex-1 bg-sky-900/30"></div>
    <h3 className="text-xl font-bold text-white uppercase tracking-widest text-center">Protocolo Zero Trust</h3>
    <div className="h-px flex-1 bg-sky-900/30"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    {[
      { icon: UserCheck, title: "1. Identidade", desc: "Quem é você? (Biometria/MFA)" },
      { icon: Shield, title: "2. Contexto", desc: "Seu dispositivo é seguro?" },
      { icon: Activity, title: "3. Comportamento", desc: "O que você está fazendo?" },
      { icon: Clock, title: "4. Tempo", desc: "Acesso expira em minutos." },
    ].map((step, idx) => (
      <div key={idx} className="bg-[#0f1623] border border-sky-900/20 p-6 rounded-sm hover:border-sky-500/50 transition-all group relative">
        <div className="absolute top-0 right-0 p-2 text-sky-900 font-black text-4xl opacity-20 group-hover:opacity-40 select-none">
          0{idx + 1}
        </div>
        <step.icon className="w-8 h-8 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
        <h4 className="text-white font-bold mb-1">{step.title}</h4>
        <p className="text-xs text-slate-400">{step.desc}</p>
      </div>
    ))}
  </div>
</div>

{/* 4. PRIVILEGE MANAGEMENT (PAINEL DUPLO TÉCNICO) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
  
  {/* Bloco JIT (Esquerda) */}
  <div className="bg-[#162032] border-l-4 border-sky-500 p-8 rounded-r-lg relative overflow-hidden">
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
        <Clock className="w-6 h-6 text-sky-400" /> JIT Access
      </h3>
      <p className="text-slate-400 text-sm mb-6">
        Privilégios permanentes são falhas de segurança. O acesso agora é efêmero.
      </p>

      {/* Visualização de Timer */}
      <div className="bg-[#0B1120] rounded border border-sky-900/50 p-4 font-mono">
        <div className="flex justify-between items-center mb-2 text-xs text-slate-500">
          <span>SESSION_TIMER</span>
          <span className="text-red-400 animate-pulse">EXPIRING_SOON</span>
        </div>
        <div className="text-3xl font-black text-white tracking-widest text-center mb-2">
          00:45:12
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="w-[75%] h-full bg-sky-500"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Bloco Workload Identity (Direita) */}
  <div className="bg-[#162032] border-l-4 border-indigo-500 p-8 rounded-r-lg relative overflow-hidden">
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
        <Server className="w-6 h-6 text-indigo-400" /> Workload Identity
      </h3>
      <p className="text-slate-400 text-sm mb-6">
        Pipelines sem senhas. Adeus Access Keys estáticas, olá Tokens OIDC.
      </p>

      {/* Comparativo Visual */}
      <div className="flex items-center gap-2 text-xs font-mono bg-[#0B1120] p-3 rounded border border-indigo-900/30">
        <div className="flex-1 text-center opacity-50">
          <div className="mb-1 text-red-500"><Lock className="w-4 h-4 mx-auto mb-1" /></div>
          <span className="line-through text-slate-600">AWS_ACCESS_KEY</span>
        </div>
        <div className="text-slate-600">➔</div>
        <div className="flex-1 text-center">
          <div className="mb-1 text-green-500"><Shield className="w-4 h-4 mx-auto mb-1" /></div>
          <span className="text-indigo-300">JWT_TOKEN</span>
        </div>
      </div>
    </div>
  </div>

</div>

{/* 5. COMPLIANCE ENGINE (VISUAL TERMINAL) */}
<div className="mb-24 relative z-10">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-white">Compliance as Code</h3>
      <p className="text-slate-400 text-sm">Auditoria não é mais Excel. É Código.</p>
    </div>

    <div className="bg-[#0f1623] border border-slate-800 rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
      {/* Barra de Título do Terminal */}
      <div className="bg-[#1e293b] px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="text-slate-400 text-xs flex items-center gap-2">
          <Terminal className="w-3 h-3" /> cspm-scanner — v2.4
        </div>
      </div>

      {/* Conteúdo do Terminal */}
      <div className="p-6 text-slate-300 space-y-2">
        <div>
          <span className="text-green-400">➜</span> <span className="text-sky-400">~</span> run compliance-check --target=production
        </div>
        <div className="text-slate-500 py-2 italic">Initiating scan on 42 resources...</div>
        
        <div className="grid gap-2 border-l-2 border-slate-700 pl-4 my-4">
          <div className="flex justify-between">
            <span>[CHECK] S3 Public Access Block</span>
            <span className="text-green-400 font-bold">PASS</span>
          </div>
          <div className="flex justify-between">
            <span>[CHECK] Root MFA Enabled</span>
            <span className="text-green-400 font-bold">PASS</span>
          </div>
          <div className="flex justify-between">
            <span>[CHECK] Security Group Port 22</span>
            <span className="text-red-400 font-bold flex items-center gap-2">
              FAIL <AlertTriangle className="w-3 h-3" />
            </span>
          </div>
        </div>

        <div>
          <span className="text-yellow-500">⚠ Drift Detected:</span> Security Group 'sg-web' allows 0.0.0.0/0 on port 22.
        </div>
        <div className="text-sky-400">
          ➜ Auto-remediation triggered. Correcting rule... <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  </div>
</div>

{/* 6. MENSAGEM FINAL (ESTILO NOTIFICAÇÃO) */}
<div className="max-w-2xl mx-auto relative z-10">
  <div className="bg-gradient-to-r from-sky-900/20 to-indigo-900/20 border border-sky-500/30 rounded-full p-1 pl-6 pr-2 flex items-center justify-between backdrop-blur-sm">
    <p className="text-slate-300 text-sm italic">
      "Governança moderna não desacelera. Ela evita que o negócio freie bruscamente."
    </p>
    <div className="bg-sky-500 text-[#0B1120] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
      Accelerate
    </div>
  </div>
</div>

</section>