{/* ---------------------------------------------------------------------
    MÓDULO: REVOLUXTI WAR ROOM - TRAINING SIMULATOR
---------------------------------------------------------------------- */}
<section className="py-20 px-4 max-w-[1400px] mx-auto border-t border-slate-800 relative overflow-hidden">
  
  {/* 1. LAYER DE AMBIENTE (Fundo Dinâmico) */}
  <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-1000
    ${warGameMode === 'blue' ? 'bg-blue-950/10' : 'bg-red-950/10'}`}>
    {/* Grid Tático de Fundo */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03))] z-0 bg-[length:100%_4px,50px_100%] pointer-events-none opacity-20"></div>
    
    {/* Radar Giratório (Apenas visual) */}
    <div className={`absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full border border-opacity-5 opacity-10 animate-[spin_20s_linear_infinite]
      ${warGameMode === 'blue' ? 'border-blue-500 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(59,130,246,0.3)_360deg)]' : 'border-red-500 bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(239,68,68,0.3)_360deg)]'}`}>
    </div>
  </div>

  {/* 2. HEADER DE COMANDO */}
  <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-6 relative z-10">
    <div className="flex items-center gap-5">
       {/* Insígnia do Time */}
       <div className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] 
          ${warGameMode === 'blue' ? 'bg-blue-950/50 border-blue-500/50 text-blue-400' : 'bg-red-950/50 border-red-500/50 text-red-500'}`}>
          {warGameMode === 'blue' ? <Shield className="w-12 h-12" /> : <Swords className="w-12 h-12" />}
       </div>
       
       <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            War Room <span className={warGameMode === 'blue' ? 'text-blue-500' : 'text-red-600'}>
              {warGameMode === 'blue' ? 'DEFENSE' : 'OFFENSE'}
            </span>
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-widest ${warGameMode === 'blue' ? 'bg-blue-900/30 border-blue-500 text-blue-300' : 'bg-red-900/30 border-red-500 text-red-300'}`}>
              {warGameMode === 'blue' ? 'Protocol: NIST CSF 2.0' : 'Protocol: MITRE ATT&CK'}
            </span>
            <div className="flex items-center gap-2">
              <span className={`relative flex h-2 w-2`}>
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${warGameMode === 'blue' ? 'bg-emerald-400' : 'bg-orange-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${warGameMode === 'blue' ? 'bg-emerald-500' : 'bg-orange-500'}`}></span>
              </span>
              <p className="text-slate-400 text-xs font-mono uppercase">
                System: <span className="text-white font-bold">ONLINE</span>
              </p>
            </div>
          </div>
       </div>
    </div>

    {/* SELETOR DE TIME (Cyberpunk Style) */}
    <div className="flex bg-[#050101] p-1.5 rounded-xl border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] mt-8 md:mt-0 backdrop-blur-md">
      <button
        onClick={() => setWarGameMode('blue')}
        className={`relative flex items-center gap-3 px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 uppercase tracking-wider ${
          warGameMode === 'blue' 
            ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.6)]' 
            : 'text-slate-500 hover:text-blue-400 hover:bg-white/5'
        }`}
      >
        <ShieldCheck className="w-4 h-4" /> Blue Team
      </button>

      <button
        onClick={() => setWarGameMode('red')}
        className={`relative flex items-center gap-3 px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 uppercase tracking-wider ${
          warGameMode === 'red' 
            ? 'bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.6)]' 
            : 'text-slate-500 hover:text-red-400 hover:bg-white/5'
        }`}
      >
        <Crosshair className="w-4 h-4" /> Red Team
      </button>
    </div>
  </div>

  {/* 3. CONTEÚDO PRINCIPAL (LAYOUT GRID) */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
    
    {/* =======================================================================
        COLUNA ESQUERDA: DOUTRINA & FRAMEWORKS (Teoria)
        span-4 (Ocupa 1/3 da tela)
       ======================================================================= */}
    <div className="lg:col-span-4 space-y-6">
      
      {/* CARD: Framework Principal */}
      <div className={`p-6 rounded-2xl border bg-[#0a0202]/90 backdrop-blur-sm relative overflow-hidden group
         ${warGameMode === 'blue' ? 'border-blue-900/50 hover:border-blue-500/50' : 'border-red-900/50 hover:border-red-500/50'}`}>
         
         <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            {warGameMode === 'blue' ? <Layers className="w-32 h-32 text-blue-500" /> : <Target className="w-32 h-32 text-red-500" />}
         </div>

         <div className="flex items-center gap-3 mb-6 relative z-10">
            {warGameMode === 'blue' ? <Database className="w-5 h-5 text-blue-400" /> : <Crosshair className="w-5 h-5 text-red-400" />}
            <h3 className="font-bold text-white text-lg">
               {warGameMode === 'blue' ? 'Architecture & Governance' : 'Attack Doctrine'}
            </h3>
         </div>

         {/* CONTEÚDO BLUE: NIST & ZERO TRUST */}
         {warGameMode === 'blue' && (
           <div className="space-y-6 relative z-10">
             <div>
               <h4 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <Shield className="w-3 h-3" /> NIST CSF 2.0
               </h4>
               <div className="flex flex-wrap gap-1.5">
                 {['GOVERN', 'IDENTIFY', 'PROTECT', 'DETECT', 'RESPOND', 'RECOVER'].map((item) => (
                   <span key={item} className="px-2 py-1 rounded bg-blue-900/20 border border-blue-500/30 text-[9px] text-blue-100 font-mono hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                     {item}
                   </span>
                 ))}
               </div>
             </div>
             
             <div className="pt-4 border-t border-blue-900/30">
               <h4 className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-3">Zero Trust Pillars</h4>
               <ul className="grid grid-cols-1 gap-2">
                  <li className="flex items-center gap-3 text-xs text-slate-300 bg-blue-950/20 p-2 rounded border border-blue-900/30">
                    <Fingerprint className="w-4 h-4 text-blue-500" /> 
                    <span><strong>Identity:</strong> MFA & SSO (Okta/Entra)</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-slate-300 bg-blue-950/20 p-2 rounded border border-blue-900/30">
                    <Cpu className="w-4 h-4 text-blue-500" /> 
                    <span><strong>Device:</strong> Endpoint Compliance</span>
                  </li>
                  <li className="flex items-center gap-3 text-xs text-slate-300 bg-blue-950/20 p-2 rounded border border-blue-900/30">
                    <Network className="w-4 h-4 text-blue-500" /> 
                    <span><strong>Network:</strong> Microsegmentation</span>
                  </li>
               </ul>
             </div>
           </div>
         )}

         {/* CONTEÚDO RED: KILL CHAIN & TACTICS */}
         {warGameMode === 'red' && (
           <div className="space-y-6 relative z-10">
             <div>
               <h4 className="text-[10px] font-bold text-red-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                 <Skull className="w-3 h-3" /> Cyber Kill Chain
               </h4>
               <div className="space-y-3">
                  <div className="relative pt-1">
                    <div className="flex mb-1 items-center justify-between">
                      <span className="text-[10px] font-semibold text-red-200">PHASE 6: C2 (Command & Control)</span>
                      <span className="text-[10px] font-bold text-red-500 animate-pulse">ACTIVE</span>
                    </div>
                    <div className="h-1.5 w-full bg-red-900/20 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-[85%] shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
                    </div>
                  </div>
               </div>
             </div>

             <div className="pt-4 border-t border-red-900/30">
               <h4 className="text-[10px] font-bold text-red-300 uppercase tracking-widest mb-3">Advanced Tactics (APT)</h4>
               <div className="space-y-2">
                  <div className="p-3 border border-red-900/40 bg-red-950/10 rounded group/card hover:bg-red-900/20 transition-colors">
                     <strong className="text-red-400 text-xs block mb-1 group-hover/card:text-white">Kerberoasting</strong>
                     <p className="text-[10px] text-slate-400">Exploração de tickets Kerberos para extração offline de senhas de serviço.</p>
                  </div>
                  <div className="p-3 border border-red-900/40 bg-red-950/10 rounded group/card hover:bg-red-900/20 transition-colors">
                     <strong className="text-red-400 text-xs block mb-1 group-hover/card:text-white">DLL Hijacking</strong>
                     <p className="text-[10px] text-slate-400">Injeção de código malicioso via carregamento inseguro de bibliotecas.</p>
                  </div>
               </div>
             </div>
           </div>
         )}
      </div>

      {/* KPI STATS (Métricas Rápidas) */}
      <div className="grid grid-cols-2 gap-3">
         {warGameMode === 'blue' ? (
            <>
               <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-xl text-center">
                  <p className="text-[9px] text-blue-300 uppercase tracking-widest mb-1">MTTR</p>
                  <p className="text-xl font-bold text-white">12m 15s</p>
               </div>
               <div className="bg-blue-950/20 border border-blue-900/30 p-3 rounded-xl text-center">
                  <p className="text-[9px] text-blue-300 uppercase tracking-widest mb-1">Coverage</p>
                  <p className="text-xl font-bold text-emerald-400">98.4%</p>
               </div>
            </>
         ) : (
            <>
               <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl text-center">
                  <p className="text-[9px] text-red-300 uppercase tracking-widest mb-1">Compromise</p>
                  <p className="text-xl font-bold text-white">2h 14m</p>
               </div>
               <div className="bg-red-950/20 border border-red-900/30 p-3 rounded-xl text-center">
                  <p className="text-[9px] text-red-300 uppercase tracking-widest mb-1">Dwell Time</p>
                  <p className="text-xl font-bold text-white">14 Days</p>
               </div>
            </>
         )}
      </div>
    </div>


    {/* =======================================================================
        COLUNA CENTRAL: OPERAÇÕES VISUAIS (Visualizer & Tools)
        span-4 (Ocupa 1/3 da tela)
       ======================================================================= */}
    <div className="lg:col-span-4 flex flex-col gap-6">
       
       {/* 1. MAPA DE REDE / SUPERFÍCIE DE ATAQUE (Visualizer) */}
       <div className={`flex-1 min-h-[300px] rounded-2xl border bg-[#050101] relative overflow-hidden flex items-center justify-center
          ${warGameMode === 'blue' ? 'border-blue-900/30' : 'border-red-900/30'}`}>
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

          <div className="absolute top-4 left-4 z-10">
             <h3 className="text-white font-bold text-xs flex items-center gap-2 uppercase tracking-widest">
               {warGameMode === 'blue' ? <Network className="w-4 h-4 text-blue-500" /> : <Globe className="w-4 h-4 text-red-500" />}
               {warGameMode === 'blue' ? 'Network Topology' : 'Attack Surface'}
             </h3>
          </div>

          {/* ANIMAÇÃO CENTRAL (O CORAÇÃO DO VISUAL) */}
          <div className="relative">
             {warGameMode === 'blue' ? (
                // BLUE MODE: SHIELD ROTATIVO
                <>
                   <div className="w-40 h-40 rounded-full border border-blue-500/20 flex items-center justify-center animate-[pulse_4s_infinite]">
                      <ShieldCheck className="w-16 h-16 text-blue-500" />
                   </div>
                   {/* Orbitais */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-dashed border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]">
                      <div className="absolute -top-1 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_blue]"></div>
                   </div>
                </>
             ) : (
                // RED MODE: MIRA E LOCK-ON
                <>
                   <div className="w-40 h-40 rounded-full border-2 border-red-500/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 border-t-2 border-b-2 border-red-600/50 rounded-full animate-[spin_3s_linear_infinite]"></div>
                      <Crosshair className="w-16 h-16 text-red-600" />
                   </div>
                   {/* Linhas de Mira */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-red-900/50"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[120%] bg-red-900/50"></div>
                   <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[10px] text-red-500 font-mono animate-pulse">
                      TARGET_LOCK: 10.10.10.5
                   </div>
                </>
             )}
          </div>
       </div>

       {/* 2. ARSENAL (FERRAMENTAS) */}
       <div className={`p-5 rounded-2xl border bg-gradient-to-br from-[#0a0202] to-slate-900 
          ${warGameMode === 'blue' ? 'border-blue-900/40' : 'border-red-900/40'}`}>
          <div className="flex items-center gap-2 mb-4">
             {warGameMode === 'blue' ? <Box className="w-4 h-4 text-blue-400" /> : <TerminalSquare className="w-4 h-4 text-red-400" />}
             <h3 className="text-white font-bold text-sm uppercase tracking-wider">
               {warGameMode === 'blue' ? 'Defense Stack (Tooling)' : 'Black Ops Arsenal'}
             </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {(warGameMode === 'blue' 
               ? ['Splunk (SIEM)', 'CrowdStrike (EDR)', 'Wazuh (XDR)', 'MISP (Intel)', 'Nessus'] 
               : ['Cobalt Strike', 'Metasploit', 'Mimikatz', 'BloodHound', 'Burp Suite']
            ).map((tool) => (
              <span key={tool} className={`px-2.5 py-1.5 rounded text-xs font-mono border transition-all hover:scale-105 cursor-default
                ${warGameMode === 'blue' 
                  ? 'bg-[#050101] border-blue-800 text-blue-200 hover:border-blue-500' 
                  : 'bg-[#050101] border-red-800 text-red-200 hover:border-red-500'}`}>
                {tool}
              </span>
            ))}
          </div>
       </div>
    </div>


    {/* =======================================================================
        COLUNA DIREITA: SIMULAÇÃO INTERATIVA (Console & Actions)
        span-4 (Ocupa 1/3 da tela)
       ======================================================================= */}
    <div className="lg:col-span-4 flex flex-col gap-6">
      
      {/* 1. PAINEL DE AÇÃO (Botões que "fazem coisas") */}
      <div className={`p-6 rounded-2xl border bg-[#0a0202] ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
         <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
           <Play className="w-3 h-3" />
           {warGameMode === 'blue' ? 'Execute Countermeasures' : 'Launch Exploits'}
         </h4>
         
         <div className="space-y-3">
            {[
               { icon: warGameMode === 'blue' ? ShieldAlert : Bug, label: warGameMode === 'blue' ? 'DEPLOY HONEYPOT' : 'INJECT PAYLOAD' },
               { icon: warGameMode === 'blue' ? Search : Network, label: warGameMode === 'blue' ? 'SCAN IOCs' : 'ENUMERATE AD' },
               { icon: warGameMode === 'blue' ? Lock : Database, label: warGameMode === 'blue' ? 'ISOLATE HOST' : 'DUMP HASHES' }
            ].map((action, idx) => (
               <button key={idx} className={`w-full flex items-center justify-between p-3.5 rounded-lg text-xs font-mono font-bold transition-all border group relative overflow-hidden
                 ${warGameMode === 'blue' 
                   ? 'bg-blue-950/20 border-blue-900/50 hover:border-blue-500 text-blue-300 hover:text-white hover:bg-blue-900/40' 
                   : 'bg-red-950/20 border-red-900/50 hover:border-red-500 text-red-300 hover:text-white hover:bg-red-900/40'}`}>
                 <div className="flex items-center gap-3 relative z-10">
                   <action.icon className="w-4 h-4" />
                   {action.label}
                 </div>
                 <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
               </button>
            ))}
         </div>
      </div>

      {/* 2. LIVE TERMINAL (Onde a mágica acontece) */}
      <div className="flex-1 bg-[#080808] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col min-h-[250px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-slate-800">
           <div className="flex gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
           </div>
           <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2 uppercase tracking-wide">
              <TerminalSquare className="w-3 h-3" />
              {warGameMode === 'blue' ? 'SOC_MAIN_CHANNEL' : 'ROOT@TARGET:~#'}
           </div>
        </div>

        {/* Terminal Logs */}
        <div className="p-4 font-mono text-[11px] leading-relaxed overflow-y-auto flex-1 space-y-1.5 opacity-90">
           {warGameMode === 'blue' ? (
             <>
               <div className="text-slate-400 border-l-2 border-blue-500 pl-2 mb-3">
                  <span className="text-blue-500 font-bold">SYS_INFO:</span> Active Defense Matrix Loaded.
               </div>
               <p className="text-slate-500">Connecting to SIEM nodes...</p>
               <p className="text-slate-300"><span className="text-emerald-500">✓</span> Node Alpha [ONLINE]</p>
               <p className="text-slate-300"><span className="text-emerald-500">✓</span> Node Beta [ONLINE]</p>
               <p className="text-slate-400 mt-2">[14:02:05] Analyzing traffic patterns...</p>
               <p className="text-slate-200"><span className="text-blue-400">INFO:</span> Anomaly detected in subnet 192.168.40.x</p>
               <p className="text-slate-200"><span className="text-yellow-500">WARN:</span> Failed login attempts (User: Admin)</p>
               <p className="text-white bg-blue-900/20 p-1 rounded inline-block mt-1 border-l-2 border-blue-500"><span className="text-blue-400">ACTION:</span> Auto-banning IP 45.22.19.112</p>
               <div className="flex items-center gap-1 mt-2 text-blue-500 animate-pulse">
                  <span>_waiting_for_command</span>
                  <span className="w-1.5 h-3 bg-blue-500"></span>
               </div>
             </>
           ) : (
             <>
               <div className="text-slate-400 border-l-2 border-red-500 pl-2 mb-3">
                  <span className="text-red-500 font-bold">ROOT_KIT:</span> Offensive Framework Initialized.
               </div>
               <p className="text-slate-500">Loading modules: ms17_010, mimikatz...</p>
               <p className="text-slate-300"><span className="text-red-500">➜</span> Target acquired: 10.10.10.5</p>
               <p className="text-slate-400 mt-2">[14:02:05] Sending staging payload...</p>
               <p className="text-slate-200"><span className="text-emerald-500">[*]</span> Sending stage (20123 bytes)</p>
               <p className="text-white bg-red-900/20 p-1 rounded inline-block mt-1 border-l-2 border-red-500"><span className="text-emerald-500">[*]</span> Meterpreter session 1 opened.</p>
               <p className="text-slate-200 mt-1"><span className="text-red-400">meterpreter ></span> getuid</p>
               <p className="text-white font-bold">Server username: NT AUTHORITY\SYSTEM</p>
               <div className="flex items-center gap-1 mt-2 text-red-500 animate-pulse">
                  <span>_ready_to_exploit</span>
                  <span className="w-1.5 h-3 bg-red-500"></span>
               </div>
             </>
           )}
        </div>
      </div>
    </div>

  </div>
</section>