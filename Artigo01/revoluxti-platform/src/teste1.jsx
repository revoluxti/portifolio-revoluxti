{/* ---------------------------------------------------------------------
    MÓDULO: WAR GAMES - REVOLUXTI COMMAND CENTER (ULTIMATE EDITION)
---------------------------------------------------------------------- */}
<section className="py-20 px-6 max-w-[1400px] mx-auto border-t border-slate-800 relative overflow-hidden">
  
  {/* Background Dinâmico com Efeito de Pulso */}
  <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-700
    ${warGameMode === 'blue' ? 'bg-blue-950/10' : 'bg-red-950/10'}`}>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
    {/* Radar Scan Effect (Centralizado) */}
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-opacity-5 opacity-10 animate-[spin_20s_linear_infinite]
      ${warGameMode === 'blue' ? 'border-blue-500 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(59,130,246,0.2)_360deg)]' : 'border-red-500 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(239,68,68,0.2)_360deg)]'}`}>
    </div>
  </div>

  {/* ================= HEADER & CONTROLS ================= */}
  <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-6 relative z-10">
    <div className="flex items-center gap-5">
       <div className={`p-4 rounded-xl border transition-all duration-500 shadow-2xl ${warGameMode === 'blue' ? 'bg-blue-950 border-blue-500/50 text-blue-400' : 'bg-red-950 border-red-500/50 text-red-500'}`}>
          {warGameMode === 'blue' ? <Shield className="w-12 h-12 animate-pulse" /> : <Swords className="w-12 h-12 animate-bounce" />}
       </div>
       <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            War Games <span className={warGameMode === 'blue' ? 'text-blue-500' : 'text-red-600'}>Simulation</span>
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <span className={`relative flex h-3 w-3`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${warGameMode === 'blue' ? 'bg-blue-400' : 'bg-red-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${warGameMode === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}></span>
            </span>
            <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">
              Scenario: <span className="text-white font-bold">{warGameMode === 'blue' ? 'DEFCON 3 (ACTIVE DEFENSE)' : 'OPERATION RED STORM (APT)'}</span>
            </p>
          </div>
       </div>
    </div>

    {/* TACTICAL SWITCH */}
    <div className="flex bg-[#050101] p-1.5 rounded-xl border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] mt-6 md:mt-0 backdrop-blur-md">
      <button
        onClick={() => setWarGameMode('blue')}
        className={`relative flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 uppercase tracking-wider ${
          warGameMode === 'blue' 
            ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.6)]' 
            : 'text-slate-500 hover:text-blue-400'
        }`}
      >
        <Shield className="w-4 h-4" /> Blue Team
      </button>

      <button
        onClick={() => setWarGameMode('red')}
        className={`relative flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 uppercase tracking-wider ${
          warGameMode === 'red' 
            ? 'bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.6)]' 
            : 'text-slate-500 hover:text-red-400'
        }`}
      >
        <Swords className="w-4 h-4" /> Red Team
      </button>
    </div>
  </div>

  {/* ================= MAIN DASHBOARD GRID ================= */}
  <div className="grid lg:grid-cols-12 gap-6 relative z-10 min-h-[600px]">
    
    {/* COLUNA ESQUERDA: KPIs & VISUALIZER (3 Colunas) */}
    <div className="lg:col-span-3 space-y-4 flex flex-col">
       {/* KPI CARD 1 */}
       <div className={`p-5 rounded-xl border bg-[#0a0202]/80 backdrop-blur ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex justify-between items-start mb-2">
             <h4 className={`text-[10px] uppercase tracking-widest font-bold ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>
               {warGameMode === 'blue' ? 'MTTR (Response)' : 'Dwell Time'}
             </h4>
             <Activity className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-500' : 'text-red-500'}`} />
          </div>
          <div className="text-3xl font-bold text-white mb-1">
             {warGameMode === 'blue' ? '12m 15s' : '14 Days'}
          </div>
          <p className="text-[10px] text-slate-500">Global Average: {warGameMode === 'blue' ? '45m' : '21 Days'}</p>
       </div>

       {/* KPI CARD 2 */}
       <div className={`p-5 rounded-xl border bg-[#0a0202]/80 backdrop-blur ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex justify-between items-start mb-2">
             <h4 className={`text-[10px] uppercase tracking-widest font-bold ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>
               {warGameMode === 'blue' ? 'Defensive Health' : 'Privilege Level'}
             </h4>
             <ShieldCheck className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-500' : 'text-red-500'}`} />
          </div>
          <div className={`text-3xl font-bold ${warGameMode === 'blue' ? 'text-emerald-400' : 'text-red-500'}`}>
             {warGameMode === 'blue' ? '98.4%' : 'SYSTEM'}
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
             <div className={`h-full w-[98%] ${warGameMode === 'blue' ? 'bg-emerald-500' : 'bg-red-600 animate-pulse'}`}></div>
          </div>
       </div>

       {/* RADAR VISUALIZER */}
       <div className={`flex-1 rounded-xl border bg-[#050101] relative overflow-hidden group min-h-[250px] flex items-center justify-center
           ${warGameMode === 'blue' ? 'border-blue-900/30' : 'border-red-900/30'}`}>
           <div className="absolute top-4 left-4 z-10">
              <h3 className="text-white text-xs font-bold flex items-center gap-2 uppercase tracking-wider">
                <Globe className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-500' : 'text-red-500'}`} />
                {warGameMode === 'blue' ? 'Live Monitoring' : 'Attack Surface'}
              </h3>
           </div>
           
           {/* Visual Effects */}
           {warGameMode === 'blue' ? (
              <div className="relative">
                 <div className="w-40 h-40 rounded-full border border-blue-500/30 flex items-center justify-center animate-[pulse_4s_infinite]">
                    <Shield className="w-12 h-12 text-blue-500" />
                 </div>
                 {/* Rotating Satellites */}
                 <div className="absolute inset-0 w-full h-full border border-blue-500/10 rounded-full animate-[spin_8s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
                 </div>
              </div>
           ) : (
              <div className="relative">
                 <div className="w-40 h-40 rounded-full border-2 border-dashed border-red-500/30 flex items-center justify-center">
                    <Crosshair className="w-16 h-16 text-red-500 animate-[spin_5s_linear_infinite]" />
                 </div>
                 <div className="absolute top-0 right-0 -mr-12 -mt-6 text-[10px] text-red-500 font-mono animate-pulse bg-red-950/50 px-2 rounded">LOCKING TARGET...</div>
              </div>
           )}
       </div>
    </div>

    {/* COLUNA CENTRAL: DOUTRINA & STRATEGY (5 Colunas) - Recuperando o conteúdo rico */}
    <div className="lg:col-span-5 space-y-6">
       
       {/* ============ BLUE TEAM STRATEGY ============ */}
       {warGameMode === 'blue' && (
         <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full">
            <div className="h-full p-6 rounded-xl border border-blue-900/30 bg-gradient-to-br from-blue-950/20 to-[#0f0202] relative overflow-hidden group">
               <div className="flex items-center gap-2 mb-6 border-b border-blue-900/30 pb-3">
                 <Database className="w-5 h-5 text-blue-400" />
                 <h3 className="font-bold text-white">Architecture & Governance</h3>
               </div>
               
               <div className="space-y-8">
                 {/* NIST SECTION */}
                 <div>
                   <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Layers className="w-3 h-3" /> NIST CSF 2.0 Flow
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {['GOVERN', 'IDENTIFY', 'PROTECT', 'DETECT', 'RESPOND', 'RECOVER'].map((item) => (
                       <div key={item} className="px-3 py-1.5 rounded bg-blue-900/20 border border-blue-500/20 text-[10px] text-blue-100 font-mono hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                         {item}
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* ZERO TRUST SECTION */}
                 <div>
                   <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-3">Zero Trust Pillars</h4>
                   <div className="grid grid-cols-2 gap-3">
                     <div className="p-3 rounded bg-blue-950/30 border border-blue-900/30 flex items-center gap-3">
                        <Fingerprint className="w-5 h-5 text-blue-500" />
                        <div>
                           <strong className="text-white text-xs block">Identity</strong>
                           <span className="text-[10px] text-slate-400">MFA & SSO</span>
                        </div>
                     </div>
                     <div className="p-3 rounded bg-blue-950/30 border border-blue-900/30 flex items-center gap-3">
                        <Cpu className="w-5 h-5 text-blue-500" />
                        <div>
                           <strong className="text-white text-xs block">Device</strong>
                           <span className="text-[10px] text-slate-400">Compliance Check</span>
                        </div>
                     </div>
                     <div className="p-3 rounded bg-blue-950/30 border border-blue-900/30 flex items-center gap-3">
                        <Wifi className="w-5 h-5 text-blue-500" />
                        <div>
                           <strong className="text-white text-xs block">Network</strong>
                           <span className="text-[10px] text-slate-400">Micro-segmentation</span>
                        </div>
                     </div>
                     <div className="p-3 rounded bg-blue-950/30 border border-blue-900/30 flex items-center gap-3">
                        <Database className="w-5 h-5 text-blue-500" />
                        <div>
                           <strong className="text-white text-xs block">Data</strong>
                           <span className="text-[10px] text-slate-400">Encryption & DLP</span>
                        </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
         </div>
       )}

       {/* ============ RED TEAM STRATEGY ============ */}
       {warGameMode === 'red' && (
         <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full">
            <div className="h-full p-6 rounded-xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-[#0f0202] relative overflow-hidden group">
               <div className="flex items-center gap-2 mb-6 border-b border-red-900/30 pb-3">
                 <Crosshair className="w-5 h-5 text-red-400" />
                 <h3 className="font-bold text-white">MITRE ATT&CK Strategy</h3>
               </div>
               
               <div className="space-y-8">
                 {/* KILL CHAIN VISUAL */}
                 <div>
                   <div className="flex justify-between items-end mb-2">
                      <h4 className="text-xs font-bold text-red-300 uppercase tracking-widest">Cyber Kill Chain</h4>
                      <span className="text-[10px] text-red-500 animate-pulse">PHASE 6: C2 ACTIVE</span>
                   </div>
                   
                   <div className="space-y-3">
                     <div className="relative">
                        <div className="text-[10px] text-slate-400 mb-1 flex justify-between">
                           <span>Recon</span>
                           <span>Weaponization</span>
                           <span>Delivery</span>
                           <span>Exploitation</span>
                           <span>Installation</span>
                           <span className="text-red-400 font-bold">C2</span>
                           <span>Actions</span>
                        </div>
                        <div className="h-2 bg-red-900/20 rounded-full overflow-hidden">
                           <div className="h-full w-[85%] bg-gradient-to-r from-red-900 via-red-600 to-red-500 animate-pulse"></div>
                        </div>
                     </div>
                   </div>
                 </div>

                 {/* ADVANCED TACTICS */}
                 <div>
                   <h4 className="text-xs font-bold text-red-300 uppercase tracking-widest mb-3">Advanced Tactics (APT)</h4>
                   <div className="grid grid-cols-2 gap-3">
                     <div className="p-3 border border-red-900/40 bg-red-950/20 rounded hover:border-red-500/50 transition-colors">
                        <strong className="text-red-400 text-xs block mb-1">Kerberoasting</strong>
                        <p className="text-[10px] text-slate-400 leading-tight">Extração de hash de serviço TGS para crackear senhas offline.</p>
                     </div>
                     <div className="p-3 border border-red-900/40 bg-red-950/20 rounded hover:border-red-500/50 transition-colors">
                        <strong className="text-red-400 text-xs block mb-1">DLL Hijacking</strong>
                        <p className="text-[10px] text-slate-400 leading-tight">Injeção de código malicioso via substituição de DLLs confiáveis.</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
         </div>
       )}
    </div>

    {/* COLUNA DIREITA: OPERATIONS & ARSENAL (4 Colunas) - Interatividade + Tools */}
    <div className="lg:col-span-4 space-y-6 flex flex-col">
       
       {/* ============ BLUE TEAM OPS ============ */}
       {warGameMode === 'blue' && (
         <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col gap-6">
            
            {/* TOOL STACK */}
            <div className="p-5 rounded-xl border border-blue-900/30 bg-blue-950/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <Siren className="w-24 h-24 text-blue-500" />
               </div>
               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Eye className="w-4 h-4 text-blue-400" /> Defense Stack
               </h4>
               <div className="flex flex-wrap gap-2 relative z-10">
                  <div className="group relative">
                     <span className="px-2 py-1 bg-[#0a0202] border border-blue-800 rounded text-xs text-white font-mono cursor-help">Splunk</span>
                  </div>
                  <span className="px-2 py-1 bg-[#0a0202] border border-blue-800 rounded text-xs text-white font-mono">CrowdStrike</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-blue-800 rounded text-xs text-white font-mono">Wazuh</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-blue-800 rounded text-xs text-white font-mono">MISP</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-blue-800 rounded text-xs text-white font-mono">TheHive</span>
               </div>
            </div>

            {/* INTERACTIVE PROTOCOLS */}
            <div className="flex-1 p-5 rounded-xl border border-blue-900/30 bg-gradient-to-b from-[#0a0202] to-blue-950/10">
               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                 <TerminalSquare className="w-4 h-4 text-blue-400" /> Response Protocols
               </h4>
               <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded text-xs font-mono transition-all border bg-blue-950/30 border-blue-900/50 hover:border-blue-500 text-blue-300 hover:text-white group">
                    <div className="flex items-center gap-3">
                      <ShieldAlert className="w-4 h-4" /> DEPLOY HONEYPOT
                    </div>
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded text-xs font-mono transition-all border bg-blue-950/30 border-blue-900/50 hover:border-blue-500 text-blue-300 hover:text-white group">
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4" /> THREAT HUNTING SCAN
                    </div>
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded text-xs font-mono transition-all border bg-blue-950/30 border-blue-900/50 hover:border-blue-500 text-blue-300 hover:text-white group">
                    <div className="flex items-center gap-3">
                      <Lock className="w-4 h-4" /> ISOLATE COMPROMISED HOST
                    </div>
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
               </div>
            </div>
         </div>
       )}

       {/* ============ RED TEAM OPS ============ */}
       {warGameMode === 'red' && (
         <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col gap-6">
            
            {/* ARSENAL STACK */}
            <div className="p-5 rounded-xl border border-red-900/30 bg-red-950/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <Flame className="w-24 h-24 text-red-500" />
               </div>
               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                 <TerminalSquare className="w-4 h-4 text-red-400" /> Black Ops Arsenal
               </h4>
               <div className="flex flex-wrap gap-2 relative z-10">
                  <span className="px-2 py-1 bg-[#0a0202] border border-red-800 rounded text-xs text-white font-mono">Cobalt Strike</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-red-800 rounded text-xs text-white font-mono">Metasploit</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-red-800 rounded text-xs text-white font-mono">Mimikatz</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-red-800 rounded text-xs text-white font-mono">BloodHound</span>
                  <span className="px-2 py-1 bg-[#0a0202] border border-red-800 rounded text-xs text-white font-mono">Empire</span>
               </div>
            </div>

            {/* INTERACTIVE EXPLOITS */}
            <div className="flex-1 p-5 rounded-xl border border-red-900/30 bg-gradient-to-b from-[#0a0202] to-red-950/10">
               <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                 <Bug className="w-4 h-4 text-red-400" /> Exploit Modules
               </h4>
               <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded text-xs font-mono transition-all border bg-red-950/30 border-red-900/50 hover:border-red-500 text-red-300 hover:text-white group">
                    <div className="flex items-center gap-3">
                      <Network className="w-4 h-4" /> AD ENUMERATION (LDAP)
                    </div>
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded text-xs font-mono transition-all border bg-red-950/30 border-red-900/50 hover:border-red-500 text-red-300 hover:text-white group">
                    <div className="flex items-center gap-3">
                      <Zap className="w-4 h-4" /> INJECT PAYLOAD (STAGED)
                    </div>
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded text-xs font-mono transition-all border bg-red-950/30 border-red-900/50 hover:border-red-500 text-red-300 hover:text-white group">
                    <div className="flex items-center gap-3">
                      <Database className="w-4 h-4" /> DUMP LSASS MEMORY
                    </div>
                    <Play className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
               </div>
               
               {/* Living off the Land Note */}
               <div className="mt-4 pt-4 border-t border-red-900/30">
                  <div className="flex gap-2">
                    <Zap className="w-4 h-4 text-red-500 shrink-0" />
                    <div>
                      <strong className="text-white text-xs block">Living off the Land (LotL)</strong>
                      <p className="text-[10px] text-slate-400">Uso de PowerShell/WMI para evasão de EDR.</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
       )}
    </div>
  </div>

  {/* ================= LIVE TERMINAL (BOTTOM) ================= */}
  <div className="mt-8 bg-[#080808] rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-56 relative z-10">
    {/* Terminal Header */}
    <div className="flex items-center justify-between px-4 py-2 bg-[#121212] border-b border-slate-800">
       <div className="flex gap-1.5">
         <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
         <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
       </div>
       <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2 uppercase">
          <Code2 className="w-3 h-3" />
          {warGameMode === 'blue' ? 'SOC_MAIN_CHANNEL_01' : 'C2_BEACON_LISTENER'}
       </div>
    </div>

    {/* Terminal Logs */}
    <div className="p-4 font-mono text-xs overflow-y-auto flex-1 space-y-1 custom-scrollbar">
       {warGameMode === 'blue' ? (
         <>
           <div className="text-slate-400 border-l-2 border-blue-500 pl-2 mb-2">
              <span className="text-blue-500 font-bold">SYS_INFO:</span> Active Defense Matrix Loaded.
           </div>
           <p className="text-slate-500">Connecting to SIEM nodes...</p>
           <p className="text-slate-300"><span className="text-emerald-500">✓</span> Node Alpha [ONLINE]</p>
           <p className="text-slate-300"><span className="text-emerald-500">✓</span> Node Beta [ONLINE]</p>
           <p className="text-slate-400 mt-2">[14:02:05] Analyzing traffic patterns...</p>
           <p className="text-slate-200"><span className="text-blue-400">INFO:</span> Anomaly detected in subnet 192.168.40.x</p>
           <p className="text-slate-200"><span className="text-yellow-500">WARN:</span> Multiple failed login attempts (User: Admin)</p>
           <p className="text-slate-200"><span className="text-blue-400">ACTION:</span> Auto-banning IP 45.22.19.112 via Firewall API</p>
           <div className="flex items-center gap-1 mt-1 text-blue-500 animate-pulse">
              <span>_waiting_for_command</span>
              <span className="w-2 h-4 bg-blue-500"></span>
           </div>
         </>
       ) : (
         <>
           <div className="text-slate-400 border-l-2 border-red-500 pl-2 mb-2">
              <span className="text-red-500 font-bold">ROOT_KIT:</span> Offensive Framework Initialized.
           </div>
           <p className="text-slate-500">Loading modules: ms17_010, mimikatz, empire...</p>
           <p className="text-slate-300"><span className="text-red-500">➜</span> Target acquired: 10.10.10.5</p>
           <p className="text-slate-400 mt-2">[14:02:05] Sending staging payload (stager.x64.dll)</p>
           <p className="text-slate-200"><span className="text-emerald-500">[*]</span> Sending stage (20123 bytes) to 10.10.10.5</p>
           <p className="text-slate-200"><span className="text-emerald-500">[*]</span> Meterpreter session 1 opened.</p>
           <p className="text-slate-200"><span className="text-red-400">meterpreter ></span> getuid</p>
           <p className="text-white font-bold">Server username: NT AUTHORITY\SYSTEM</p>
           <div className="flex items-center gap-1 mt-1 text-red-500 animate-pulse">
              <span>_ready_to_exploit</span>
              <span className="w-2 h-4 bg-red-500"></span>
           </div>
         </>
       )}
    </div>
  </div>
</section>