{/* ---------------------------------------------------------------------
    MÓDULO: REVOLUXTI COMMAND CENTER - ULTIMATE EDITION
---------------------------------------------------------------------- */}
<section className="py-20 px-4 max-w-[1400px] mx-auto border-t border-slate-800 relative overflow-hidden">
  
  {/* 1. AMBIENTE IMERSIVO (Background Dinâmico) */}
  <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-1000
    ${warGameMode === 'blue' ? 'bg-blue-950/10' : 'bg-red-950/10'}`}>
    {/* Scanlines e Ruído */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] opacity-20"></div>
    {/* Glow Ambiental Central */}
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[100px] opacity-10 
      ${warGameMode === 'blue' ? 'bg-blue-600' : 'bg-red-600'}`}></div>
  </div>

  {/* 2. HEADER TÁTICO & CONTROLES */}
  <div className="flex flex-col lg:flex-row justify-between items-end mb-10 border-b border-slate-800 pb-6 relative z-10 gap-6">
    <div className="flex items-center gap-5">
       {/* Insígnia do Modo */}
       <div className={`p-4 rounded-2xl border backdrop-blur-md shadow-2xl transition-all duration-500
          ${warGameMode === 'blue' ? 'bg-blue-950/50 border-blue-500/50 text-blue-400' : 'bg-red-950/50 border-red-500/50 text-red-500'}`}>
          {warGameMode === 'blue' ? <Shield className="w-12 h-12 animate-pulse" /> : <Swords className="w-12 h-12 animate-bounce" />}
       </div>
       
       <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-1">
            War Games <span className="text-slate-600">|</span> <span className={warGameMode === 'blue' ? 'text-blue-500' : 'text-red-600'}>
              {warGameMode === 'blue' ? 'DEFENSE' : 'OFFENSE'}
            </span>
          </h2>
          <div className="flex items-center gap-3">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border
              ${warGameMode === 'blue' ? 'bg-blue-900/30 border-blue-500/30 text-blue-300' : 'bg-red-900/30 border-red-500/30 text-red-300'}`}>
              {warGameMode === 'blue' ? 'SIMULATION: ACTIVE DEFENSE' : 'SIMULATION: RED STORM'}
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono uppercase">
               <span className={`relative flex h-2 w-2`}>
                 <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${warGameMode === 'blue' ? 'bg-blue-400' : 'bg-red-400'}`}></span>
                 <span className={`relative inline-flex rounded-full h-2 w-2 ${warGameMode === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}></span>
               </span>
               System Online
            </span>
          </div>
       </div>
    </div>

    {/* Switch de Times (Estilo Cyberpunk) */}
    <div className="flex bg-[#050101]/80 p-1.5 rounded-xl border border-slate-700/50 shadow-2xl backdrop-blur-sm">
      <button onClick={() => setWarGameMode('blue')}
        className={`relative flex items-center gap-2 px-8 py-3 rounded-lg text-xs font-bold transition-all duration-300 uppercase tracking-wider
        ${warGameMode === 'blue' ? 'bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.6)]' : 'text-slate-500 hover:text-blue-400 hover:bg-blue-900/20'}`}>
        <Shield className="w-4 h-4" /> BLUE TEAM
      </button>
      <button onClick={() => setWarGameMode('red')}
        className={`relative flex items-center gap-2 px-8 py-3 rounded-lg text-xs font-bold transition-all duration-300 uppercase tracking-wider
        ${warGameMode === 'red' ? 'bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.6)]' : 'text-slate-500 hover:text-red-400 hover:bg-red-900/20'}`}>
        <Swords className="w-4 h-4" /> RED TEAM
      </button>
    </div>
  </div>

  {/* 3. DASHBOARD PRINCIPAL (GRID COMPLEXO) */}
  <div className="grid lg:grid-cols-12 gap-6 relative z-10">
    
    {/* --- ESQUERDA: ESTRATÉGIA & KPI (Colspan 3) --- */}
    <div className="lg:col-span-3 space-y-4">
       {/* KPI CARD 1 */}
       <div className={`p-5 rounded-xl border bg-[#0a0202]/90 backdrop-blur transition-colors ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex justify-between mb-2">
             <span className={`text-[10px] font-bold uppercase tracking-widest ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>
               {warGameMode === 'blue' ? 'MTTD (Detection)' : 'Time to Compromise'}
             </span>
             <TimerReset className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-500' : 'text-red-500'}`} />
          </div>
          <div className="text-3xl font-bold text-white tracking-tight">{warGameMode === 'blue' ? '4m 32s' : '2h 14m'}</div>
       </div>

       {/* KPI CARD 2 */}
       <div className={`p-5 rounded-xl border bg-[#0a0202]/90 backdrop-blur transition-colors ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex justify-between mb-2">
             <span className={`text-[10px] font-bold uppercase tracking-widest ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>
               {warGameMode === 'blue' ? 'MTTR (Response)' : 'Dwell Time'}
             </span>
             <Activity className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-500' : 'text-red-500'}`} />
          </div>
          <div className="text-3xl font-bold text-white tracking-tight">{warGameMode === 'blue' ? '12m 15s' : '14 Days'}</div>
       </div>

       {/* DOUTRINA LIST (NIST / MITRE) */}
       <div className={`p-5 rounded-xl border bg-gradient-to-br from-[#0a0202] to-slate-900/50 ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
             <BookOpen className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`} />
             <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                {warGameMode === 'blue' ? 'NIST CSF 2.0' : 'Cyber Kill Chain'}
             </h3>
          </div>
          <div className="space-y-2">
            {warGameMode === 'blue' ? (
               // Blue List
               ['GOVERN', 'IDENTIFY', 'PROTECT', 'DETECT', 'RESPOND', 'RECOVER'].map((item, i) => (
                  <div key={item} className="flex items-center justify-between text-xs text-slate-400 p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors">
                     <span>0{i+1}. {item}</span>
                     <CheckCircle2 className="w-3 h-3 text-blue-500" />
                  </div>
               ))
            ) : (
               // Red List
               ['Reconnaissance', 'Weaponization', 'Delivery', 'Exploitation', 'Installation', 'C2', 'Actions on Obj.'].map((item, i) => (
                  <div key={item} className="flex items-center justify-between text-xs text-slate-400 p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors">
                     <span>Phase {i+1}: {item}</span>
                     {i === 5 ? <span className="text-[9px] bg-red-600 text-white px-1 rounded animate-pulse">ACTIVE</span> : <CheckCircle2 className="w-3 h-3 text-red-900" />}
                  </div>
               ))
            )}
          </div>
       </div>
    </div>

    {/* --- CENTRO: RADAR & VISUALIZAÇÃO (Colspan 5) --- */}
    <div className="lg:col-span-6 flex flex-col gap-4">
       
       {/* COMPONENTE VISUAL PRINCIPAL (RADAR) */}
       <div className={`flex-1 min-h-[400px] rounded-xl border bg-[#050101] relative overflow-hidden group
           ${warGameMode === 'blue' ? 'border-blue-900/30' : 'border-red-900/30'}`}>
           
           {/* Grid de Fundo */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
           
           {/* Título do Radar */}
           <div className="absolute top-4 left-4 z-10">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full border bg-black/50 backdrop-blur ${warGameMode === 'blue' ? 'border-blue-500/30 text-blue-400' : 'border-red-500/30 text-red-400'}`}>
                 <Radar className={`w-4 h-4 ${warGameMode === 'blue' ? 'animate-spin-slow' : 'animate-pulse'}`} />
                 <span className="text-xs font-bold uppercase tracking-widest">{warGameMode === 'blue' ? 'Network Topology' : 'Target Surface'}</span>
              </div>
           </div>

           {/* VISUALIZAÇÃO CENTRAL */}
           <div className="absolute inset-0 flex items-center justify-center">
              {warGameMode === 'blue' ? (
                 // BLUE MODE: ESCUDO E SATÉLITES
                 <div className="relative">
                    {/* Core Shield */}
                    <div className="w-40 h-40 rounded-full border-4 border-blue-500/20 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-pulse">
                       <ShieldCheck className="w-16 h-16 text-blue-500" />
                    </div>
                    {/* Orbit 1 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]">
                       <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_blue] -translate-x-1/2 -translate-y-1.5"></div>
                    </div>
                    {/* Orbit 2 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                       <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_emerald] -translate-x-1/2 translate-y-1"></div>
                    </div>
                    {/* Data Streams */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent -rotate-45"></div>
                 </div>
              ) : (
                 // RED MODE: CROSSHAIR & LOCK-ON
                 <div className="relative">
                    {/* Core Target */}
                    <div className="w-40 h-40 rounded-full border-2 border-dashed border-red-500/40 flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.3)] animate-[spin_20s_linear_infinite]">
                       <Crosshair className="w-16 h-16 text-red-600" />
                    </div>
                    {/* Locking Brackets */}
                    <div className="absolute -inset-10 border-2 border-red-500/30 rounded-lg border-t-0 border-b-0 animate-pulse"></div>
                    <div className="absolute -inset-10 border-2 border-red-500/30 rounded-lg border-l-0 border-r-0 animate-pulse scale-90"></div>
                    {/* Lock Text */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-red-600 text-black px-2 py-0.5 text-[10px] font-bold font-mono rounded">
                       LOCK_ESTABLISHED
                    </div>
                    {/* Laser Lines */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-900/50"></div>
                    <div className="absolute top-0 left-1/2 h-full w-[1px] bg-red-900/50"></div>
                 </div>
              )}
           </div>
       </div>
    </div>

    {/* --- DIREITA: ARSENAL & OPS (Colspan 3) --- */}
    <div className="lg:col-span-3 space-y-4">
       
       {/* CARD DE STACK TECNOLÓGICO */}
       <div className={`p-5 rounded-xl border bg-gradient-to-br from-[#0a0202] to-slate-900/50 ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
             <Layers className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`} />
             <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                {warGameMode === 'blue' ? 'Defense Stack' : 'Offense Stack'}
             </h3>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
             {warGameMode === 'blue' ? (
                // Blue Tools
                ['Splunk', 'CrowdStrike', 'Wazuh', 'MISP'].map(tool => (
                   <span key={tool} className="px-2 py-1 bg-[#050101] border border-blue-900/50 rounded text-[10px] text-blue-100 font-mono shadow-sm">
                      {tool}
                   </span>
                ))
             ) : (
                // Red Tools
                ['Cobalt Strike', 'Metasploit', 'Mimikatz', 'BloodHound'].map(tool => (
                   <span key={tool} className="px-2 py-1 bg-[#050101] border border-red-900/50 rounded text-[10px] text-red-100 font-mono shadow-sm">
                      {tool}
                   </span>
                ))
             )}
          </div>

          {/* Destaque Tático */}
          <div className={`p-3 rounded border ${warGameMode === 'blue' ? 'bg-blue-950/20 border-blue-900/30' : 'bg-red-950/20 border-red-900/30'}`}>
             <div className="flex items-center gap-2 mb-1">
                {warGameMode === 'blue' ? <Search className="w-3 h-3 text-blue-400" /> : <Zap className="w-3 h-3 text-red-400" />}
                <strong className={`text-xs ${warGameMode === 'blue' ? 'text-blue-300' : 'text-red-300'}`}>
                   {warGameMode === 'blue' ? 'Threat Hunting' : 'Living off the Land'}
                </strong>
             </div>
             <p className="text-[10px] text-slate-400 leading-tight">
                {warGameMode === 'blue' 
                   ? 'Busca proativa por anomalias de comportamento e TTPs desconhecidos.' 
                   : 'Uso de binários nativos (PowerShell/WMI) para evitar detecção.'}
             </p>
          </div>
       </div>

       {/* CARD DE AÇÕES INTERATIVAS (Os Botões que você pediu) */}
       <div className={`p-5 rounded-xl border bg-gradient-to-br from-[#0a0202] to-slate-900/50 ${warGameMode === 'blue' ? 'border-blue-900/50' : 'border-red-900/50'}`}>
          <div className="flex items-center gap-2 mb-4">
             <TerminalSquare className={`w-4 h-4 ${warGameMode === 'blue' ? 'text-blue-400' : 'text-red-400'}`} />
             <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Protocol Actions
             </h3>
          </div>
          
          <div className="space-y-2">
             {/* Action 1 */}
             <button className={`w-full flex items-center justify-between p-2.5 rounded text-[11px] font-bold uppercase transition-all border group
                ${warGameMode === 'blue' 
                ? 'bg-blue-950/30 border-blue-900 hover:bg-blue-600 hover:border-blue-500 text-blue-300 hover:text-white' 
                : 'bg-red-950/30 border-red-900 hover:bg-red-600 hover:border-red-500 text-red-300 hover:text-white'}`}>
                <span className="flex items-center gap-2">
                   {warGameMode === 'blue' ? <ShieldAlert className="w-3 h-3" /> : <Bug className="w-3 h-3" />}
                   {warGameMode === 'blue' ? 'Deploy Honeypot' : 'Inject Payload'}
                </span>
                <Play className="w-3 h-3 opacity-50 group-hover:opacity-100" />
             </button>

             {/* Action 2 */}
             <button className={`w-full flex items-center justify-between p-2.5 rounded text-[11px] font-bold uppercase transition-all border group
                ${warGameMode === 'blue' 
                ? 'bg-blue-950/30 border-blue-900 hover:bg-blue-600 hover:border-blue-500 text-blue-300 hover:text-white' 
                : 'bg-red-950/30 border-red-900 hover:bg-red-600 hover:border-red-500 text-red-300 hover:text-white'}`}>
                <span className="flex items-center gap-2">
                   {warGameMode === 'blue' ? <Network className="w-3 h-3" /> : <Fingerprint className="w-3 h-3" />}
                   {warGameMode === 'blue' ? 'Scan for IOCs' : 'Enumerate AD'}
                </span>
                <Play className="w-3 h-3 opacity-50 group-hover:opacity-100" />
             </button>

             {/* Action 3 */}
             <button className={`w-full flex items-center justify-between p-2.5 rounded text-[11px] font-bold uppercase transition-all border group
                ${warGameMode === 'blue' 
                ? 'bg-blue-950/30 border-blue-900 hover:bg-blue-600 hover:border-blue-500 text-blue-300 hover:text-white' 
                : 'bg-red-950/30 border-red-900 hover:bg-red-600 hover:border-red-500 text-red-300 hover:text-white'}`}>
                <span className="flex items-center gap-2">
                   {warGameMode === 'blue' ? <Lock className="w-3 h-3" /> : <Database className="w-3 h-3" />}
                   {warGameMode === 'blue' ? 'Isolate Host' : 'Dump Hashes'}
                </span>
                <Play className="w-3 h-3 opacity-50 group-hover:opacity-100" />
             </button>
          </div>
       </div>
    </div>

  </div>

  {/* 4. LIVE TERMINAL CONSOLE (Footer) */}
  <div className="mt-6 rounded-xl border border-slate-800 bg-[#080808] font-mono text-xs overflow-hidden shadow-2xl relative z-10">
     {/* Terminal Header */}
     <div className="flex items-center justify-between px-4 py-2 bg-[#121212] border-b border-slate-800">
        <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-2">
           <Code2 className="w-3 h-3" />
           {warGameMode === 'blue' ? 'SOC_INTEGRATED_CONSOLE_V4' : 'ROOT@KALI:~/OPS/RED_STORM'}
        </div>
     </div>

     {/* Logs Body */}
     <div className="p-4 h-48 overflow-y-auto space-y-1.5 opacity-90">
        {warGameMode === 'blue' ? (
           <>
              <p className="text-slate-400 border-l-2 border-blue-500 pl-2">
                 <span className="text-blue-500 font-bold">SYSTEM:</span> Initializing Active Defense Matrix...
              </p>
              <p className="text-slate-500">[14:30:01] Connected to Splunk Enterprise Security.</p>
              <p className="text-slate-300"><span className="text-emerald-500">✓</span> Threat Intelligence Feeds (MISP) synced.</p>
              <p className="text-slate-300"><span className="text-emerald-500">✓</span> EDR Agents (CrowdStrike) reporting status: <span className="text-emerald-400">HEALTHY</span></p>
              <p className="text-slate-400 mt-2">[14:32:15] <span className="text-yellow-500 animate-pulse">ALERT:</span> Suspicious PowerShell execution detected on Host-009.</p>
              <p className="text-slate-200 ml-4">Command: <code>Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass..."</code></p>
              <p className="text-blue-400">[AUTOMATION] Triggering Playbook: "Isolate_Machine_Tier1"</p>
              <p className="text-emerald-400">[SUCCESS] Host-009 isolated from main VLAN.</p>
              <div className="flex items-center gap-1 mt-2 text-blue-500">
                 <span className="animate-pulse">_waiting_for_analyst_input</span><span className="w-2 h-4 bg-blue-500 animate-blink"></span>
              </div>
           </>
        ) : (
           <>
              <p className="text-slate-400 border-l-2 border-red-500 pl-2">
                 <span className="text-red-500 font-bold">ROOT:</span> Loaded framework: Metasploit Pro.
              </p>
              <p className="text-slate-500">[14:30:01] Setting LHOST=10.10.14.5, LPORT=443</p>
              <p className="text-slate-300"><span className="text-red-500">➜</span> Scanning target subnet 192.168.10.0/24...</p>
              <p className="text-slate-400 mt-2">[+] Found Target: 192.168.10.55 (Windows Server 2019)</p>
              <p className="text-slate-400">[*] Service identified: SMB (Port 445)</p>
              <p className="text-red-400">msf6 > use exploit/multi/handler</p>
              <p className="text-red-400">msf6 > set payload windows/x64/meterpreter/reverse_https</p>
              <p className="text-emerald-500">[*] Sending stage (20026 bytes) to 192.168.10.55</p>
              <p className="text-white font-bold bg-red-900/20 p-1 inline-block">[!] Meterpreter session 1 opened.</p>
              <div className="flex items-center gap-1 mt-2 text-red-500">
                 <span>meterpreter ></span><span className="w-2 h-4 bg-red-500 animate-blink"></span>
              </div>
           </>
        )}
     </div>
  </div>

</section>