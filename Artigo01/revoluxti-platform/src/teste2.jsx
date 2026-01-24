import React, { useState } from 'react';
import { 
  Shield, Lock, Server, Zap, Globe, AlertTriangle, 
  Terminal, Activity, Box, Database, Search, 
  GitBranch, Code, Eye, RefreshCw, Cpu,
  Users, ArrowLeftCircle, GraduationCap,
  Target, FileCheck, BarChart3, ShieldAlert, 
  CheckCircle, Play, Bug, X, ChevronRight,
  Github, Linkedin, Facebook, Mail, Fingerprint, Smartphone, Key, Hash, ShieldCheck,
  Container, CloudLightning, Layers, Network, Radar, Workflow, Siren, Radio,
  LifeBuoy, ZapOff, TimerReset, HardDrive, RefreshCcw
} from 'lucide-react';

// -----------------------------------------------------------------------------
// SUB-COMPONENTE 1: SIMULADOR DE PIPELINE
// -----------------------------------------------------------------------------
const PipelineSimulator = ({ colors }) => {
  const [status, setStatus] = useState('IDLE'); 
  const [logs, setLogs] = useState(['> SYSTEM READY...', '> WAITING FOR COMMIT...']);
  
  const runPipeline = () => {
    setStatus('RUNNING');
    setLogs(['> INITIATING PIPELINE...', '> CLONING REPO...', '> RUNNING SAST CHECK...']);
    setTimeout(() => {
      setLogs(prev => [...prev, '> SAST: PASSED (0 Critical)', '> RUNNING SCA (DEPENDENCY CHECK)...']);
      setTimeout(() => {
        setLogs(prev => [
           ...prev, '> SCA: ANALYZING PACKAGES...', '> CRITICAL VULNERABILITY FOUND: log4j-core:2.14.1', 
           '> CVE-2021-44228 DETECTED', '> BLOCKING DEPLOYMENT...'
        ]);
        setStatus('BLOCKED');
      }, 1500);
    }, 1500);
  };

  const resetPipeline = () => {
     setStatus('IDLE');
     setLogs(['> SYSTEM RESET.', '> WAITING FOR COMMIT...']);
  };

  return (
    <div className="rounded-xl border shadow-2xl overflow-hidden relative" style={{ backgroundColor: '#020617', borderColor: status === 'BLOCKED' ? colors.principal : colors.borda }}>
       <div className="px-4 py-2 border-b flex items-center justify-between bg-[#0f0202]" style={{ borderColor: colors.borda }}>
          <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
          </div>
          <div className="text-[10px] font-mono text-slate-500">CI/CD SECURITY CONSOLE</div>
       </div>
       <div className="p-6 font-mono text-xs h-64 overflow-y-auto custom-scrollbar flex flex-col-reverse">
          <div className="space-y-2">
             {logs.map((log, i) => (
                <div key={i} className={`${log.includes('CRITICAL') || log.includes('BLOCKING') ? 'text-red-500 font-bold animate-pulse' : log.includes('PASSED') ? 'text-green-500' : 'text-slate-400'}`}>{log}</div>
             ))}
             {status === 'RUNNING' && <div className="text-slate-500 animate-pulse">_ processing...</div>}
          </div>
       </div>
       <div className="p-4 border-t bg-[#0f0202] flex justify-between items-center" style={{ borderColor: colors.borda }}>
          <div className="flex items-center gap-2">
             {status === 'IDLE' && <div className="w-2 h-2 rounded-full bg-slate-500"></div>}
             {status === 'RUNNING' && <div className="w-2 h-2 rounded-full bg-yellow-500 animate-spin"></div>}
             {status === 'BLOCKED' && <ShieldAlert className="w-5 h-5 text-red-600 animate-bounce" />}
             <span className="text-xs font-bold" style={{ color: status === 'BLOCKED' ? colors.principal : colors.textoSec }}>STATUS: {status}</span>
          </div>
          {status === 'IDLE' ? (
             <button onClick={runPipeline} className="px-4 py-2 rounded text-xs font-bold text-white flex items-center gap-2 hover:brightness-110 transition-all" style={{ backgroundColor: colors.abobora }}><Play className="w-3 h-3" /> DEPLOY CODE</button>
          ) : (
             <button onClick={resetPipeline} className="px-4 py-2 rounded text-xs font-bold text-white border hover:bg-slate-800 transition-all" style={{ borderColor: colors.textoSec }}>RESET SIMULATION</button>
          )}
       </div>
       {status === 'BLOCKED' && (
          <div className="absolute inset-0 bg-red-950/20 pointer-events-none flex items-center justify-center">
             <div className="bg-black/90 border border-red-600 p-4 rounded-xl text-center shadow-[0_0_30px_rgba(220,38,38,0.5)] transform animate-in zoom-in duration-300">
                <Bug className="w-12 h-12 text-red-500 mx-auto mb-2" />
                <h3 className="text-red-500 font-bold text-xl">DEPLOY ABORTED</h3>
                <p className="text-red-300 text-xs mt-1">Policy Violation: High Severity CVE Detected</p>
             </div>
          </div>
       )}
    </div>
  );
};

// -----------------------------------------------------------------------------
// SUB-COMPONENTE 2: SIMULADOR DE DISASTER RECOVERY
// -----------------------------------------------------------------------------
const DisasterRecoverySim = ({ colors }) => {
  const [drState, setDrState] = useState('NORMAL'); 
  const [uptime, setUptime] = useState(99.99);

  const triggerDisaster = () => {
     setDrState('CRITICAL');
     setUptime(0.00);
  };

  const activateRecovery = () => {
     setDrState('RESTORING');
     setTimeout(() => {
        setDrState('NORMAL');
        setUptime(99.95); 
     }, 2500);
  };

  return (
    <div className="border rounded-xl p-6 relative overflow-hidden shadow-2xl" 
         style={{ backgroundColor: '#050101', borderColor: drState === 'CRITICAL' ? colors.principal : colors.borda }}>
       
       <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
             <div className={`w-3 h-3 rounded-full ${drState === 'NORMAL' ? 'bg-green-500 animate-pulse' : drState === 'CRITICAL' ? 'bg-red-600 animate-ping' : 'bg-yellow-500'}`}></div>
             <span className="font-mono text-xs text-slate-300">SYSTEM_HEARTBEAT</span>
          </div>
          <div className="font-mono text-xs">
             UPTIME: <span style={{ color: drState === 'NORMAL' ? '#22c55e' : colors.principal }}>{uptime}%</span>
          </div>
       </div>

       <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3].map((server) => (
             <div key={server} className={`w-16 h-24 rounded border-2 flex flex-col justify-end items-center p-2 transition-all duration-500 ${
                drState === 'NORMAL' ? 'border-slate-700 bg-slate-900' :
                drState === 'CRITICAL' ? 'border-red-600 bg-red-950/30 animate-shake' :
                'border-yellow-500 bg-yellow-950/30'
             }`}>
                <div className="w-full h-[1px] bg-slate-800 mb-1"></div>
                <div className="w-full h-[1px] bg-slate-800 mb-1"></div>
                <div className="w-full h-[1px] bg-slate-800 mb-2"></div>
                <div className={`w-2 h-2 rounded-full ${
                   drState === 'NORMAL' ? 'bg-green-500' : 
                   drState === 'CRITICAL' ? 'bg-red-500' : 'bg-yellow-500'
                }`}></div>
             </div>
          ))}
       </div>

       <div className="bg-[#1a0505] rounded-lg p-4 border border-dashed" style={{ borderColor: colors.borda }}>
          {drState === 'NORMAL' && (
             <div className="text-center">
                <p className="text-xs text-slate-400 mb-3">SYSTEM OPERATING NORMALLY</p>
                <button onClick={triggerDisaster} className="w-full py-2 bg-slate-800 hover:bg-red-900/50 text-white text-xs font-bold rounded flex items-center justify-center gap-2 transition-all border border-slate-700 hover:border-red-500">
                  <ZapOff className="w-4 h-4" /> SIMULATE RANSOMWARE
                </button>
             </div>
          )}

          {drState === 'CRITICAL' && (
             <div className="text-center animate-in fade-in zoom-in duration-300">
                <p className="text-xs font-bold mb-3 animate-pulse" style={{ color: colors.principal }}>⚠️ CRITICAL FAILURE: DATA ENCRYPTED</p>
                <button onClick={activateRecovery} className="w-full py-2 text-black text-xs font-bold rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(253,143,0,0.5)] hover:scale-105" style={{ backgroundColor: colors.abobora }}>
                  <RefreshCcw className="w-4 h-4 animate-spin" /> INITIATE DISASTER RECOVERY
                </button>
             </div>
          )}

          {drState === 'RESTORING' && (
             <div className="text-center">
                <p className="text-xs text-yellow-500 mb-2">RESTORING FROM IMMUTABLE BACKUP...</p>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-yellow-500 animate-[width_2s_ease-in-out]" style={{ width: '100%' }}></div>
                </div>
             </div>
          )}
       </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// COMPONENTE PRINCIPAL
// -----------------------------------------------------------------------------
const DevSecOpsArticle = () => {
  const [warGameMode, setWarGameMode] = useState('blue');
  const [showAuthModal, setShowAuthModal] = useState(false); 
  const [authMode, setAuthMode] = useState('LOGIN'); 

  const colors = {
    principal: '#b3120c',       
    borda: '#631212',           
    textoSec: '#a09494',        
    dourado: '#ffcc00',         
    abobora: '#fd8f00',         
    fundoCard: '#1a0505',       
    bgPage: '#020617'           
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#b3120c]/30 pb-24 relative" style={{ backgroundColor: colors.bgPage, color: '#e2e8f0' }}>
      
      {/* MODAL DE AUTH */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="w-full max-w-lg border-2 shadow-[0_0_50px_rgba(253,143,0,0.15)] relative overflow-hidden font-mono" style={{ borderColor: colors.borda, backgroundColor: '#000' }}>
                <div className="flex justify-between items-center px-4 py-0 border-b bg-[#0f0202]" style={{ borderColor: colors.borda }}>
                    <div className="flex">
                        <button onClick={() => setAuthMode('LOGIN')} className={`px-4 py-3 text-[10px] font-bold tracking-widest uppercase transition-colors border-r ${authMode === 'LOGIN' ? 'bg-[#2a0505] text-[#fd8f00]' : 'text-slate-600 hover:text-white'}`} style={{ borderColor: colors.borda }}>[ ACCESS_LOGIN ]</button>
                        <button onClick={() => setAuthMode('REGISTER')} className={`px-4 py-3 text-[10px] font-bold tracking-widest uppercase transition-colors border-r ${authMode === 'REGISTER' ? 'bg-[#2a0505] text-[#fd8f00]' : 'text-slate-600 hover:text-white'}`} style={{ borderColor: colors.borda }}>[ NEW_OPERATOR ]</button>
                    </div>
                    <button onClick={() => setShowAuthModal(false)} className="text-slate-500 hover:text-red-500 p-2"><X className="w-5 h-5" /></button>
                </div>
                <div className="p-8 relative min-h-[450px]" style={{ backgroundColor: 'rgba(253, 143, 0, 0.08)' }}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[size:100%_2px,3px_100%]"></div>
                    <div className="relative z-10">
                        <div className="text-green-500 text-xs mb-6 typing-effect leading-relaxed font-mono">
                            &gt; ENCRYPTED CHANNEL ESTABLISHED (TLS 1.3)<br/>
                            &gt; IDENTITY PROVIDER: <span className="text-[#fd8f00]">REVOLUXTI_AUTH_V2</span><br/>
                            &gt; WAITING FOR CREDENTIALS...
                        </div>
                        {authMode === 'LOGIN' ? (
                            <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div><label className="block text-[10px] text-green-600 mb-1 uppercase tracking-widest">Codename / Email</label><div className="flex items-center gap-2 border-b border-green-800/50 pb-1 focus-within:border-green-500 transition-colors"><ChevronRight className="w-3 h-3 text-green-500" /><input type="text" className="bg-transparent w-full text-green-400 outline-none text-sm font-bold placeholder-green-900/30" placeholder="operator@revoluxti.com" autoFocus /></div></div>
                                
                                {/* SECURITY CODE INPUT (CONFIRMANDO A MUDANÇA) */}
                                <div><label className="block text-[10px] text-green-600 mb-1 uppercase tracking-widest">Security Code (Token)</label><div className="flex items-center gap-2 border-b border-green-800/50 pb-1 focus-within:border-green-500 transition-colors"><Hash className="w-3 h-3 text-green-500" /><input type="text" className="bg-transparent w-full text-green-400 outline-none text-sm font-bold placeholder-green-900/30" placeholder="XK9-###-###" /></div></div>

                                <button className="w-full mt-2 py-3 bg-green-600 hover:bg-green-500 text-black font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(22,163,74,0.3)] clip-path-polygon"><Fingerprint className="w-4 h-4" /> AUTHENTICATE</button>
                                <div className="mt-8 pt-6 border-t border-dashed border-green-900/30">
                                    <p className="text-[9px] text-center text-green-700 uppercase tracking-[0.2em] mb-4 bg-transparent relative"><span className="bg-transparent px-2">Or Use Federated Identity (OAuth 2.0)</span></p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="flex items-center gap-3 p-2 rounded border border-green-900/40 bg-green-950/10 hover:bg-green-900/30 hover:border-green-500/50 transition-all group"><Github className="w-4 h-4 text-green-600 group-hover:text-white" /><div className="text-left"><div className="text-[10px] font-bold text-green-500 group-hover:text-white">GITHUB</div><div className="text-[8px] text-green-800">Dev_Access_Token</div></div></button>
                                        <button className="flex items-center gap-3 p-2 rounded border border-green-900/40 bg-green-950/10 hover:bg-green-900/30 hover:border-green-500/50 transition-all group"><Mail className="w-4 h-4 text-green-600 group-hover:text-white" /><div className="text-left"><div className="text-[10px] font-bold text-green-500 group-hover:text-white">GOOGLE</div><div className="text-[8px] text-green-800">Workspace_SSO</div></div></button>
                                        <button className="flex items-center gap-3 p-2 rounded border border-green-900/40 bg-green-950/10 hover:bg-green-900/30 hover:border-green-500/50 transition-all group"><Linkedin className="w-4 h-4 text-green-600 group-hover:text-white" /><div className="text-left"><div className="text-[10px] font-bold text-green-500 group-hover:text-white">LINKEDIN</div><div className="text-[8px] text-green-800">Corp_Verification</div></div></button>
                                        <button className="flex items-center gap-3 p-2 rounded border border-green-900/40 bg-green-950/10 hover:bg-green-900/30 hover:border-green-500/50 transition-all group"><Facebook className="w-4 h-4 text-green-600 group-hover:text-white" /><div className="text-left"><div className="text-[10px] font-bold text-green-500 group-hover:text-white">FACEBOOK</div><div className="text-[8px] text-green-800">Meta_Graph_API</div></div></button>
                                    </div>
                                    <div className="flex justify-center mt-3 gap-2"><div className="flex items-center gap-1 px-2 py-1 rounded bg-green-950/30 border border-green-900/50 text-[8px] text-green-600"><Lock className="w-2 h-2" /> E2E_ENCRYPTED</div><div className="flex items-center gap-1 px-2 py-1 rounded bg-green-950/30 border border-green-900/50 text-[8px] text-green-600"><Smartphone className="w-2 h-2" /> MFA_READY</div></div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div><label className="block text-[10px] text-green-600 mb-1 uppercase tracking-widest">Create Codename</label><div className="flex items-center gap-2 border-b border-green-800 pb-1"><ChevronRight className="w-3 h-3 text-green-500 animate-pulse" /><input type="text" className="bg-transparent w-full text-green-400 outline-none text-sm font-bold placeholder-green-900/50" placeholder="Type_Your_Alias" autoFocus /></div></div>
                                <div><label className="block text-[10px] text-green-600 mb-1 uppercase tracking-widest">Secure Frequency (Email)</label><div className="flex items-center gap-2 border-b border-green-800 pb-1"><ChevronRight className="w-3 h-3 text-green-500" /><input type="email" className="bg-transparent w-full text-green-400 outline-none text-sm font-bold placeholder-green-900/50" placeholder="user@encrypted.net" /></div></div>
                                <div><label className="block text-[10px] text-green-600 mb-2 uppercase tracking-widest">Select Allegiance</label><div className="grid grid-cols-2 gap-3"><button className="border border-green-800 hover:bg-green-900/30 text-green-500 text-xs py-2 px-3 rounded text-left transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Blue Team</button><button className="border border-green-800 hover:bg-green-900/30 text-green-500 text-xs py-2 px-3 rounded text-left transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Red Team</button></div></div>
                                <button className="w-full mt-6 py-3 bg-green-600 hover:bg-green-500 text-black font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(22,163,74,0.4)]"><Terminal className="w-4 h-4" /> Execute_Join_Command</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden border-b" style={{ borderColor: colors.borda }}>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a0505] via-slate-950 to-slate-950 opacity-90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(179,18,12,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(179,18,12,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded bg-[#2a0505] border text-xs font-mono tracking-widest uppercase" style={{ borderColor: colors.principal, color: colors.abobora }}>Edição Final #01</span>
            <span className="px-3 py-1 rounded bg-[#2a0505] border text-xs font-mono tracking-widest uppercase" style={{ borderColor: colors.principal, color: colors.dourado }}>ISO 20000 Compliant</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">REVOLUXTI <span style={{ color: colors.principal }}>2000</span></h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed mb-8" style={{ color: colors.textoSec }}>O Playbook Definitivo de <strong className="text-white">DevSecOps</strong>. A quebra de silos e a evolução da entrega de valor.<br /><span className="text-sm font-mono mt-2 block" style={{ color: colors.abobora }}>&gt; SYSTEM_STATUS: RED_RHINO_OPERATIONAL</span></p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => { setShowAuthModal(true); setAuthMode('REGISTER'); }} className="px-6 py-3 text-white font-bold rounded flex items-center gap-2 transition-all hover:brightness-110 shadow-[0_0_20px_rgba(179,18,12,0.4)] hover:scale-105 active:scale-95" style={{ backgroundColor: colors.principal }}><Terminal className="w-5 h-5" /> Iniciar Protocolo</button>
            <button onClick={() => { setShowAuthModal(true); setAuthMode('LOGIN'); }} className="px-6 py-3 bg-slate-900 text-white font-bold rounded flex items-center gap-2 transition-all border hover:bg-slate-800" style={{ borderColor: colors.borda }}><Lock className="w-5 h-5 text-[#fd8f00]" /> Acesso Restrito</button>
          </div>
        </div>
      </section>

      {/* CAP 1: CULTURA */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t mt-12" style={{ borderColor: colors.borda }}>
        <div className="mb-12"><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Globe className="w-6 h-6" style={{ color: colors.dourado }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 1: A Convergência de Culturas</h3></div><p className="leading-relaxed text-lg max-w-4xl" style={{ color: colors.textoSec }}>Onde a <strong className="text-white">ISO 20000</strong> encontra o Manifesto Ágil.</p></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group p-6 rounded-xl border transition-all hover:-translate-y-1" style={{ backgroundColor: 'rgba(26, 5, 5, 0.4)', borderColor: colors.borda }}><div className="flex items-start gap-4"><div className="p-3 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.borda }}><Users className="w-6 h-6" style={{ color: colors.abobora }} /></div><div><h4 className="font-bold text-lg mb-2 text-white">A Nova Era da TI</h4><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>A quebra de silos entre Desenvolvimento, Segurança e Operações.</p></div></div></div>
          <div className="group p-6 rounded-xl border transition-all hover:-translate-y-1" style={{ backgroundColor: 'rgba(26, 5, 5, 0.4)', borderColor: colors.borda }}><div className="flex items-start gap-4"><div className="p-3 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.borda }}><RefreshCw className="w-6 h-6" style={{ color: colors.principal }} /></div><div><h4 className="font-bold text-lg mb-2 text-white">Do Waterfall ao DevOps</h4><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>A evolução da entrega de valor.</p></div></div></div>
          <div className="group p-6 rounded-xl border transition-all hover:-translate-y-1 md:col-span-2 relative overflow-hidden" style={{ backgroundColor: 'rgba(26, 5, 5, 0.6)', borderColor: colors.principal }}><div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-red-900/20 rounded-bl-full"></div><div className="flex items-start gap-4 relative z-10"><div className="p-3 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><ArrowLeftCircle className="w-6 h-6" style={{ color: colors.dourado }} /></div><div><h4 className="font-bold text-lg mb-2 text-white flex items-center gap-2">Conceito Shift-Left<span className="text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider" style={{ borderColor: colors.abobora, color: colors.abobora }}>Estratégia Vital</span></h4><p className="text-sm leading-relaxed max-w-2xl" style={{ color: colors.textoSec }}>Antecipar a segurança para as fases de <strong>design e codificação</strong>.</p></div></div></div>
          <div className="group p-6 rounded-xl border transition-all hover:-translate-y-1 md:col-span-2" style={{ backgroundColor: 'rgba(26, 5, 5, 0.4)', borderColor: colors.borda }}><div className="flex items-start gap-4"><div className="p-3 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.borda }}><GraduationCap className="w-6 h-6" style={{ color: '#fff' }} /></div><div><h4 className="font-bold text-lg mb-2 text-white">Cultura Sem Culpa</h4><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>O papel do Educador (CCEP). Foco no processo, não na pessoa.</p></div></div></div>
        </div>
      </section>

      {/* CAP 2: INFRA */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"><div><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Server className="w-6 h-6" style={{ color: colors.abobora }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 2: Infraestrutura Blindada</h3></div><p className="leading-relaxed text-lg max-w-2xl" style={{ color: colors.textoSec }}>Construindo pontes seguras (VLANs, BGP, Firewalls).</p></div><div className="px-4 py-2 rounded border bg-[#1a0505] text-xs font-mono" style={{ borderColor: colors.dourado, color: colors.dourado }}>NETWORK_SEGMENTATION: ACTIVE</div></div>
        <div className="relative p-8 rounded-2xl border overflow-hidden" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}>
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(${colors.borda} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>
           <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div className="relative group"><div className="absolute -top-3 left-4 px-2 text-[10px] font-bold bg-[#0f0202] border rounded uppercase tracking-widest" style={{ borderColor: colors.abobora, color: colors.abobora }}>VLAN 10 (DMZ)</div><div className="h-full p-6 rounded-xl border border-dashed hover:border-solid transition-all" style={{ borderColor: colors.textoSec, backgroundColor: 'rgba(253, 143, 0, 0.05)' }}><Globe className="w-8 h-8 mb-4 opacity-80" style={{ color: colors.textoSec }} /><h4 className="text-white font-bold mb-2">Frontend & LB</h4><p className="text-xs" style={{ color: colors.textoSec }}>Zona exposta.</p></div></div>
              <div className="relative group"><div className="absolute -top-3 left-4 px-2 text-[10px] font-bold bg-[#0f0202] border rounded uppercase tracking-widest" style={{ borderColor: colors.principal, color: colors.principal }}>VLAN 20 (APP)</div><div className="h-full p-6 rounded-xl border-2 transition-all shadow-[0_0_20px_rgba(179,18,12,0.1)]" style={{ borderColor: colors.principal, backgroundColor: 'rgba(179, 18, 12, 0.05)' }}><Server className="w-8 h-8 mb-4" style={{ color: colors.principal }} /><h4 className="text-white font-bold mb-2">Microservices</h4><p className="text-xs" style={{ color: colors.textoSec }}>Coração do sistema.</p></div></div>
              <div className="relative group"><div className="absolute -top-3 left-4 px-2 text-[10px] font-bold bg-[#0f0202] border rounded uppercase tracking-widest" style={{ borderColor: colors.dourado, color: colors.dourado }}>VLAN 30 (DATA)</div><div className="h-full p-6 rounded-xl border border-dashed hover:border-solid transition-all" style={{ borderColor: colors.textoSec, backgroundColor: 'rgba(255, 204, 0, 0.05)' }}><Database className="w-8 h-8 mb-4 opacity-80" style={{ color: colors.dourado }} /><h4 className="text-white font-bold mb-2">Bancos de Dados</h4><p className="text-xs" style={{ color: colors.textoSec }}>Santuário dos dados.</p></div></div>
           </div>
        </div>
      </section>

      {/* CAP 3: DORA */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12"><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Activity className="w-6 h-6" style={{ color: colors.dourado }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 3: Governança & Métricas</h3></div><p className="leading-relaxed text-lg max-w-3xl" style={{ color: colors.textoSec }}>A elite da engenharia mede a eficiência através das <strong>DORA Metrics</strong>.</p></div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
             <div className="p-6 rounded-xl border transition-all hover:bg-[#1a0505]" style={{ borderColor: colors.borda }}><div className="flex items-center gap-3 mb-3"><Target className="w-5 h-5" style={{ color: colors.abobora }} /><h4 className="font-bold text-white">SLA, SLO e SLI</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>A trindade da confiabilidade.</p></div>
             <div className="p-6 rounded-xl border transition-all hover:bg-[#1a0505] group" style={{ borderColor: colors.principal }}><div className="flex items-center gap-3 mb-3"><FileCheck className="w-5 h-5" style={{ color: colors.principal }} /><h4 className="font-bold text-white">Compliance Automatizado</h4></div><p className="text-sm leading-relaxed mb-4" style={{ color: colors.textoSec }}><strong>OPA (Open Policy Agent)</strong> para garantir ISO 27001.</p><div className="p-3 bg-black rounded border border-dashed font-mono text-xs" style={{ borderColor: colors.borda }}><span style={{ color: colors.textoSec }}>$ check_compliance --target=prod</span><br/><span style={{ color: colors.principal }}>&gt; STATUS: PASSED (ISO_27001)</span></div></div>
          </div>
          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-[#b3120c] to-transparent"><div className="h-full bg-[#0a0202] rounded-xl p-6 relative overflow-hidden"><div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(253,143,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[size:10px_10px]"></div><div className="relative z-10"><div className="flex justify-between items-center mb-6"><h4 className="font-bold text-white flex items-center gap-2"><BarChart3 className="w-5 h-5" style={{ color: colors.abobora }} /> DORA Metrics</h4><span className="text-[10px] px-2 py-1 rounded bg-[#2a0505] border animate-pulse" style={{ borderColor: colors.principal, color: colors.principal }}>LIVE_FEED</span></div><div className="space-y-6"><div><div className="flex justify-between text-xs mb-2"><span style={{ color: colors.textoSec }}>Deployment Freq</span><span className="font-bold" style={{ color: colors.dourado }}>ON-DEMAND (Elite)</span></div><div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full rounded-full animate-[width_2s_ease-in-out]" style={{ width: '98%', backgroundColor: colors.principal, boxShadow: `0 0 10px ${colors.principal}` }}></div></div></div><div><div className="flex justify-between text-xs mb-2"><span style={{ color: colors.textoSec }}>Lead Time</span><span className="font-bold" style={{ color: colors.abobora }}>&lt; 1 HOUR (Elite)</span></div><div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="h-full rounded-full animate-[width_2.5s_ease-in-out]" style={{ width: '92%', backgroundColor: colors.abobora, boxShadow: `0 0 10px ${colors.abobora}` }}></div></div></div></div></div></div></div>
        </div>
      </section>

      {/* CAP 4: APPSEC */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12"><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Code className="w-6 h-6" style={{ color: colors.abobora }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 4: AppSec & Simulador</h3></div><p className="leading-relaxed text-lg max-w-3xl" style={{ color: colors.textoSec }}>Segurança como código. <strong>Guardrails</strong> que impedem falhas.</p></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6"><div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Search className="w-5 h-5" style={{ color: colors.dourado }} /><h4 className="font-bold text-white">SAST</h4></div><p className="text-sm" style={{ color: colors.textoSec }}>Analisa código fonte parado.</p></div><div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Box className="w-5 h-5" style={{ color: colors.abobora }} /><h4 className="font-bold text-white">SCA</h4></div><p className="text-sm" style={{ color: colors.textoSec }}>Verifica bibliotecas (Log4j).</p></div><div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><ShieldAlert className="w-5 h-5" style={{ color: colors.principal }} /><h4 className="font-bold text-white">Guardrails</h4></div><p className="text-sm" style={{ color: colors.textoSec }}>Se não for seguro, o build quebra.</p></div></div>
           <PipelineSimulator colors={colors} />
        </div>
      </section>

      {/* CAP 5: IA */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Cpu className="w-6 h-6" style={{ color: colors.dourado }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 5: A Nova Fronteira (IA & LLMs)</h3></div><p className="leading-relaxed text-lg max-w-2xl" style={{ color: colors.textoSec }}>Dominar o <strong>OWASP Top 10 for LLMs</strong> é crítico.</p></div><div className="flex items-center gap-2 px-4 py-2 rounded bg-[#1a0505] border text-xs font-mono animate-pulse" style={{ borderColor: colors.abobora, color: colors.abobora }}><AlertTriangle className="w-3 h-3" /> THREAT_LEVEL: CRITICAL</div></div>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
           <div className="space-y-6"><div className="p-6 rounded-xl border relative overflow-hidden group hover:border-red-500 transition-colors" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="relative z-10"><div className="flex items-center gap-3 mb-3"><Terminal className="w-5 h-5" style={{ color: colors.principal }} /><h4 className="font-bold text-white">Prompt Injection</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>O novo "SQL Injection".</p></div><div className="absolute inset-0 bg-red-900/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div></div><div className="p-6 rounded-xl border relative overflow-hidden group hover:border-yellow-500 transition-colors" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="relative z-10"><div className="flex items-center gap-3 mb-3"><Database className="w-5 h-5" style={{ color: colors.dourado }} /><h4 className="font-bold text-white">Data Poisoning</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>Envenenamento de dados de treino.</p></div></div><div className="p-6 rounded-xl border relative overflow-hidden" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-3"><ShieldCheck className="w-5 h-5" style={{ color: colors.abobora }} /><h4 className="font-bold text-white">LLM Firewall</h4></div><p className="text-sm leading-relaxed mb-4" style={{ color: colors.textoSec }}>Validação antes e depois.</p></div></div>
           <div className="bg-black border rounded-xl p-1 relative shadow-2xl" style={{ borderColor: colors.borda }}><div className="h-full bg-[#050101] rounded-lg p-6 font-mono text-xs relative overflow-hidden flex flex-col justify-between"><div className="flex justify-between items-center mb-4 border-b pb-2 border-slate-800"><span className="text-slate-500">root@revoluxti:~/ai-security#</span><div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div><div className="w-2 h-2 rounded-full bg-yellow-500"></div></div></div><div className="space-y-3 flex-1"><div className="text-slate-300"><span style={{ color: colors.principal }}>$</span> scan_model --target="GPT-Enterprise-v4"</div><div className="text-slate-500 italic">&gt; Testing for OWASP LLM-01 (Prompt Injection)...</div><div className="p-3 bg-red-950/20 border border-red-900/50 rounded mt-2"><span className="text-red-500 font-bold block mb-1">[ALERT] JAILBREAK DETECTED</span></div></div><div className="mt-6 pt-4 border-t border-slate-800"><p className="font-bold typing-effect" style={{ color: colors.dourado }}>&gt; STATUS: VULNERABILITY MITIGATED._</p></div></div></div>
        </div>
      </section>

      {/* CAP 6: KUBERNETES */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12"><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Container className="w-6 h-6" style={{ color: colors.abobora }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 6: Orquestração de Elite (K8s)</h3></div><p className="leading-relaxed text-lg max-w-3xl" style={{ color: colors.textoSec }}>Cluster Kubernetes com <strong>eBPF</strong> e <strong>Service Mesh</strong>.</p></div>
        <div className="grid lg:grid-cols-12 gap-8">
           <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-xl border relative overflow-hidden group hover:translate-x-2 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Activity className="w-5 h-5" style={{ color: colors.principal }} /><h4 className="font-bold text-white">Runtime com eBPF</h4></div><p className="text-xs leading-relaxed" style={{ color: colors.textoSec }}>Monitoramento de Kernel.</p></div>
              <div className="p-5 rounded-xl border relative overflow-hidden group hover:translate-x-2 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Network className="w-5 h-5" style={{ color: colors.dourado }} /><h4 className="font-bold text-white">Service Mesh (mTLS)</h4></div><p className="text-xs leading-relaxed" style={{ color: colors.textoSec }}>Zero Trust no cluster.</p></div>
              <div className="p-5 rounded-xl border relative overflow-hidden group hover:translate-x-2 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Layers className="w-5 h-5" style={{ color: colors.abobora }} /><h4 className="font-bold text-white">Assinatura de Imagens</h4></div><p className="text-xs leading-relaxed" style={{ color: colors.textoSec }}>Cosign/Notary.</p></div>
           </div>
           <div className="lg:col-span-8 bg-[#050101] border rounded-xl p-6 relative overflow-hidden" style={{ borderColor: colors.borda }}>
              <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-2"><div className="flex items-center gap-2"><CloudLightning className="w-4 h-4 text-slate-400" /><span className="text-xs font-mono text-slate-300">K8S_CLUSTER</span></div><div className="flex gap-2 text-[10px] font-mono"><span className="text-green-500">HEALTH: 100%</span></div></div>
              <div className="grid grid-cols-4 gap-4 relative z-10">{[...Array(8)].map((_, i) => (<div key={i} className="aspect-square relative group cursor-pointer"><div className="absolute inset-0 bg-[#1a0505] border hover:border-white transition-all duration-300 flex flex-col items-center justify-center rounded-lg" style={{ borderColor: colors.borda }}><Box className="w-6 h-6 mb-2 group-hover:animate-bounce" style={{ color: i % 2 === 0 ? colors.abobora : colors.principal }} /><div className="text-[8px] font-mono text-slate-500">POD-0{i+1}</div></div></div>))}</div>
              <div className="absolute inset-0 pointer-events-none overflow-hidden"><div className="w-full h-1 bg-green-500/30 blur-sm absolute top-0 animate-[scan_3s_linear_infinite]"></div></div>
           </div>
        </div>
      </section>

      {/* CAP 7: SECOPS */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12"><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><Radar className="w-6 h-6" style={{ color: colors.dourado }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 7: Vigilância Total (SecOps)</h3></div><p className="leading-relaxed text-lg max-w-3xl" style={{ color: colors.textoSec }}>Unificamos logs no <strong>SIEM</strong> e automatizamos com <strong>SOAR</strong>.</p></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="relative flex justify-center items-center py-8"><div className="relative w-80 h-80 rounded-full border border-slate-800 bg-[#050101] flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"><div className="absolute inset-0 rounded-full border border-slate-800 scale-75"></div><div className="absolute inset-0 rounded-full border border-slate-800 scale-50"></div><div className="absolute w-full h-[1px] bg-slate-800/50"></div><div className="absolute h-full w-[1px] bg-slate-800/50"></div><div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(253,143,0,0.1)_60deg,rgba(253,143,0,0.5)_360deg)] animate-[spin_4s_linear_infinite] border-r border-[#fd8f00]/50 mask-image-radial-gradient"></div><div className="absolute top-16 right-20 group"><div className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute"></div><div className="w-3 h-3 bg-red-600 rounded-full relative z-10 cursor-pointer"></div></div><div className="absolute z-20 bg-[#1a0505] p-2 rounded-full border" style={{ borderColor: colors.principal }}><Eye className="w-6 h-6" style={{ color: colors.principal }} /></div></div><div className="absolute bottom-0 right-0 p-3 bg-black/80 border border-slate-800 rounded font-mono text-[10px]"><div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div><span className="text-red-500">THREATS: ACTIVE</span></div></div></div>
           <div className="space-y-6">
              <div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Activity className="w-5 h-5" style={{ color: colors.abobora }} /><h4 className="font-bold text-white">SIEM</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>Visibilidade e correlação.</p></div>
              <div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><Workflow className="w-5 h-5" style={{ color: colors.dourado }} /><h4 className="font-bold text-white">SOAR</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>Resposta automática.</p></div>
              <div className="p-6 rounded-xl border relative overflow-hidden" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="absolute top-2 right-2 opacity-20"><Siren className="w-10 h-10 text-red-600" /></div><div className="flex items-center gap-3 mb-2"><Search className="w-5 h-5" style={{ color: colors.principal }} /><h4 className="font-bold text-white">Ciclo PICERL</h4></div><p className="text-xs mt-2" style={{ color: colors.textoSec }}>Prep, Ident, Contenção, Recuperação.</p></div>
           </div>
        </div>
      </section>

      {/* CAP 8: DISASTER RECOVERY */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
        <div className="mb-12"><div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg border" style={{ backgroundColor: colors.fundoCard, borderColor: colors.principal }}><LifeBuoy className="w-6 h-6" style={{ color: colors.abobora }} /></div><h3 className="text-2xl font-bold text-white">Capítulo 8: Resiliência Cibernética</h3></div><p className="leading-relaxed text-lg max-w-3xl" style={{ color: colors.textoSec }}>Continuidade de Negócios (BCP) e Recuperação de Desastres (DR).</p></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-6">
              <div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><TimerReset className="w-5 h-5" style={{ color: colors.dourado }} /><h4 className="font-bold text-white">RTO & RPO</h4></div><ul className="text-sm space-y-2" style={{ color: colors.textoSec }}><li>RTO: Tempo máx parado.</li><li>RPO: Perda máx de dados.</li></ul></div>
              <div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><HardDrive className="w-5 h-5" style={{ color: colors.principal }} /><h4 className="font-bold text-white">Backup Imutável</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>Contra Ransomware (WORM).</p></div>
              <div className="p-6 rounded-xl border group hover:-translate-y-1 transition-transform relative overflow-hidden" style={{ backgroundColor: '#0f0202', borderColor: colors.borda }}><div className="flex items-center gap-3 mb-2"><RefreshCcw className="w-5 h-5" style={{ color: colors.abobora }} /><h4 className="font-bold text-white">Active-Active</h4></div><p className="text-sm leading-relaxed" style={{ color: colors.textoSec }}>Redundância geográfica total.</p></div>
           </div>
           <DisasterRecoverySim colors={colors} />
        </div>
      </section>

      {/* WAR GAMES */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t" style={{ borderColor: colors.borda }}>
         <div className="flex justify-between items-end mb-8 border-b pb-4" style={{ borderColor: colors.borda }}><div><h2 className="text-3xl font-bold text-white mb-2">War Games: Estratégias</h2><p style={{ color: colors.textoSec }}>Escolha seu lado na simulação.</p></div><div className="flex bg-slate-900 p-1 rounded-lg border" style={{ borderColor: colors.borda }}><button onClick={() => setWarGameMode('blue')} className={`px-4 py-2 rounded text-xs font-bold transition-all ${warGameMode === 'blue' ? 'text-slate-900' : 'text-slate-500 hover:text-white'}`} style={{ backgroundColor: warGameMode === 'blue' ? colors.abobora : 'transparent' }}>BLUE TEAM</button><button onClick={() => setWarGameMode('red')} className={`px-4 py-2 rounded text-xs font-bold transition-all ${warGameMode === 'red' ? 'text-white shadow-[0_0_15px_rgba(179,18,12,0.5)]' : 'text-slate-500 hover:text-white'}`} style={{ backgroundColor: warGameMode === 'red' ? colors.principal : 'transparent' }}>RED TEAM</button></div></div>
         <div className="bg-slate-900/40 border rounded-2xl p-8 min-h-[300px] relative overflow-hidden transition-all duration-500" style={{ borderColor: colors.borda }}><div className={`absolute inset-0 opacity-10 transition-colors duration-500`} style={{ backgroundColor: warGameMode === 'blue' ? colors.abobora : colors.principal }}></div>{warGameMode === 'blue' ? (<div className="relative z-10 animate-in fade-in slide-in-from-left-4 duration-500"><div className="flex items-center gap-3 mb-6"><Shield className="w-8 h-8" style={{ color: colors.abobora }} /><h3 className="text-2xl font-bold text-white">Estratégias Defensivas</h3></div><ul className="space-y-4"><li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: colors.abobora }}></div><div><strong className="block" style={{ color: colors.abobora }}>Zero Trust (ZTNA)</strong></div></li><li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: colors.abobora }}></div><div><strong className="block" style={{ color: colors.abobora }}>Forense Digital</strong></div></li></ul></div>) : (<div className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500"><div className="flex items-center gap-3 mb-6"><Zap className="w-8 h-8" style={{ color: colors.principal }} /><h3 className="text-2xl font-bold text-white">Operações Ofensivas</h3></div><ul className="space-y-4"><li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: colors.principal }}></div><div><strong className="block" style={{ color: colors.principal }}>Bug Bounty</strong></div></li><li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: colors.principal }}></div><div><strong className="block" style={{ color: colors.principal }}>Chaos Engineering</strong></div></li></ul></div>)}</div>
      </section>

      {/* ROADMAP */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t" style={{ borderColor: colors.borda }}>
         <div className="text-center mb-12"><h2 className="text-3xl font-bold text-white mb-4">Roadmap de Execução</h2><p className="max-w-2xl mx-auto" style={{ color: colors.textoSec }}>O plano de batalha para transformar a cultura em 100 dias.</p></div>
         <div className="relative"><div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div><div className="space-y-12">
               <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group"><div className="md:w-5/12 text-right"><h3 className="text-xl font-bold text-white mb-2">Dia 1-30: Quick Wins</h3><p className="text-sm" style={{ color: colors.textoSec }}>MFA, SCA e Diagnóstico.</p></div><div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-[#0f0202] shadow-[0_0_15px_rgba(253,143,0,0.3)]" style={{ borderColor: colors.abobora }}><span className="font-bold text-xs" style={{ color: colors.abobora }}>30D</span></div><div className="md:w-5/12 p-4 rounded-xl border bg-[#1a0505]/50" style={{ borderColor: colors.borda }}><ul className="space-y-2 text-xs" style={{ color: colors.textoSec }}><li>Análise de Vulnerabilidades</li><li>Ativação de MFA</li></ul></div></div>
               <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 group"><div className="md:w-5/12 text-left"><h3 className="text-xl font-bold text-white mb-2">Dia 31-60: Automação</h3><p className="text-sm" style={{ color: colors.textoSec }}>Pipeline e Guardrails.</p></div><div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-[#0f0202] shadow-[0_0_15px_rgba(179,18,12,0.3)]" style={{ borderColor: colors.principal }}><span className="font-bold text-xs" style={{ color: colors.principal }}>60D</span></div><div className="md:w-5/12 p-4 rounded-xl border bg-[#1a0505]/50" style={{ borderColor: colors.borda }}><ul className="space-y-2 text-xs" style={{ color: colors.textoSec }}><li>Pipeline com OPA</li><li>Security Champions</li></ul></div></div>
               <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group"><div className="md:w-5/12 text-right"><h3 className="text-xl font-bold text-white mb-2">Dia 61-90: Governança</h3><p className="text-sm" style={{ color: colors.textoSec }}>DORA, Dashboards e Auditoria.</p></div><div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 bg-[#0f0202] shadow-[0_0_15px_rgba(255,204,0,0.3)]" style={{ borderColor: colors.dourado }}><span className="font-bold text-xs" style={{ color: colors.dourado }}>90D</span></div><div className="md:w-5/12 p-4 rounded-xl border bg-[#1a0505]/50" style={{ borderColor: colors.borda }}><ul className="space-y-2 text-xs" style={{ color: colors.textoSec }}><li>DORA Metrics</li><li>Simulação de Crise</li></ul></div></div>
         </div><div className="mt-16 text-center"><div className="inline-block px-8 py-4 rounded-2xl border bg-gradient-to-r from-[#b3120c] to-[#631212] text-white font-bold shadow-2xl hover:scale-105 transition-transform cursor-pointer" style={{ borderColor: colors.dourado }}>PRONTO PARA INICIAR A TRANSFORMAÇÃO?</div></div></div>
      </section>

    </div>
  );
};

export default DevSecOpsArticle;