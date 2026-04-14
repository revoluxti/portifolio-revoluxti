import React, { useEffect } from 'react';
import RiskSimulator from './RiskSimulator';
import { 
  BarChart3, Activity, Zap, Database, Globe2, 
  ShieldAlert, Mail, AlertTriangle, Fish, 
  Terminal, Lock, Eye, Target, Users, 
  BrainCircuit, CloudLightning, ShieldOff, Key,
  Clock, ShieldCheck, BookOpen, Crosshair,
  History, GitCommit, Gift, TrendingUp,
  Smartphone, PhoneCall, QrCode, Copy,
  UserX, FileText, Link, Paperclip, Search,
  Network, MonitorOff, Unlock, Building2, Coins,
  Layers, Cpu, Brain, Globe, Radar, Server, CheckCircle,
  FileSearch, Calculator
} from 'lucide-react';

// CSS de animação para o radar
const RadarAnimationStyles = () => (
  <style>{`
    @keyframes sweep {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}</style>
);

const PhishingArticle = () => {
  // Paleta de cores Cyber/Red Team
  const colors = {
    principal: '#b3120c',
    borda: '#631212',
    fundoCard: '#0f0202',
    textoSec: '#94a3b8',
    hackerGreen: '#10b981',
  };

  // =========================================================================
  // BLINDAGEM DE CÓDIGO (Anti-Inspect)
  // =========================================================================
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      // Bloqueia F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
        console.warn("REVOLUXTI SECURITY: Acesso ao terminal bloqueado. Incidente registado.");
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-red-500/30 pb-24">
      
      {/* =====================================================================
          HEADER / HERO SECTION
      ====================================================================== */}
      <header className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-900/10 rounded-full pointer-events-none animate-[ping_3s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-900/20 rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <Terminal className="w-4 h-4" /> SALA DO ENIAC 1946 | REVOLUXTI
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            A Anatomia do <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Phishing</span> Moderno
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            O elo mais fraco de qualquer arquitetura de segurança não é o código, é a mente humana. 
            Em 2026, a IA e a infraestrutura de Cloud transformaram o phishing numa arma de precisão impossível de travar com defesas tradicionais.
          </p>
        </div>
      </header>

      <main className="py-16 px-6 max-w-6xl mx-auto space-y-24">
        
        {/* =====================================================================
            INTRODUÇÃO: PREFÁCIO ESTRATÉGICO (2 Colunas)
        ====================================================================== */}
        <section className="relative z-10 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-900/50 border border-slate-700/50 rounded-xl">
              <BookOpen className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Prefácio Estratégico</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Introdução ao Vetor Humano</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Coluna da Esquerda (Texto e Objetivos) - Ocupa 7 colunas */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-400 text-justify leading-relaxed">
                A transformação digital ampliou exponencialmente a superfície de ataque das organizações. Entre as diversas ameaças cibernéticas contemporâneas, o phishing destaca-se como um dos vetores mais eficazes de comprometimento inicial, explorando não vulnerabilidades técnicas, mas sim <strong className="text-white">falhas cognitivas humanas</strong>.
              </p>
              <p className="text-slate-400 text-justify leading-relaxed">
                Diferente de ataques puramente técnicos, o phishing opera no campo da engenharia social, manipulando emoções como urgência, autoridade, curiosidade e medo.
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-red-500" /> O objetivo deste estudo é:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Investigar as raízes estruturais do phishing",
                    "Analisar sua evolução histórica",
                    "Examinar os vetores contemporâneos de ataque",
                    "Propor metodologias estratégicas de mitigação"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 group">
                      <span className="mt-1 w-1.5 h-1.5 bg-red-500 rounded-sm shrink-0 group-hover:scale-150 transition-transform"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coluna da Direita (O Paradoxo Fundamental) - Card de Citação */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-b from-[#1a0505] to-[#0f0202] border border-red-900/30 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.05)] group hover:border-red-500/50 transition-colors">
                
                {/* Efeito de Glow no Fundo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-red-700/20 transition-colors"></div>
                
                <div className="text-[10px] font-mono text-red-500 tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  O Paradoxo Fundamental
                </div>
                
                <blockquote className="relative">
                  {/* Aspas decorativas gigantes */}
                  <div className="absolute -top-6 -left-4 text-7xl text-red-900/30 font-serif leading-none select-none">"</div>
                  
                  <p className="text-lg md:text-xl text-white font-medium leading-relaxed relative z-10 italic">
                    Quanto mais sofisticadas se tornam as tecnologias de defesa, mais os atacantes direcionam seus esforços para <span className="text-red-400 font-bold border-b border-red-500/30">explorar o fator humano</span>.
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 2: ORIGEM E EVOLUÇÃO (TIMELINE E RADAR TÁTICO)
        ====================================================================== */}
        <RadarAnimationStyles /> {/* Embedded styles */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-xl">
              <History className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-red-400 tracking-widest uppercase">Evolução Histórica</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">A Origem do Phishing</h2>
            </div>
          </div>

          {/* Etimologia - Estilo Terminal (Mantém Full Width) */}
          <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg font-mono text-sm mb-12 max-w-2xl">
            <div className="text-slate-500 mb-2">// Etimologia do termo</div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <div className="text-slate-300">
                <span className="text-red-500 font-bold">Fishing</span> = Ato de lançar uma isca
              </div>
              <div className="hidden sm:block text-slate-700">+</div>
              <div className="text-slate-300">
                <span className="text-blue-500 font-bold">Phreaking</span> = Manipulação de telecom.
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500 border-t border-slate-800 pt-3">
              Historicamente, surgiu na década de 1990 em comunidades ligadas à exploração de serviços online.
            </div>
          </div>

          {/* NOVO PARENT GRID CONTAINER PARA PREENCHER O VAZIO */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Coluna da Esquerda: Timeline Content */}
            <div className="lg:col-span-1">
              {/* TIMELINE VERTICAL */}
              <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12 pb-8">
                
                {/* 1990 - Era AOL */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#020617] rounded-full border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  </div>
                  <div className="mb-1">
                    <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">1990</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Era AOL</h4>
                  <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl inline-block w-full max-w-lg hover:border-slate-600 transition-colors">
                    <div className="text-sm text-slate-400 mb-2"><strong className="text-slate-200">Objetivo:</strong> Roubo de contas, spam e recolha de credenciais.</div>
                    <div className="text-sm text-slate-400"><strong className="text-slate-200">Técnica predominante:</strong> Mensagens falsas de suporte técnico.</div>
                  </div>
                </div>

                {/* 2000 - E-commerce */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#020617] rounded-full border-2 border-slate-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  </div>
                  <div className="mb-1">
                    <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">2000</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Expansão do E-commerce</h4>
                  <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl inline-block w-full max-w-lg hover:border-slate-500 transition-colors">
                    <p className="text-sm text-slate-400 mb-3">Criminosos passam a focar em serviços de pagamento, marketplaces e sistemas bancários online.</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] font-mono bg-red-950/30 text-red-400 px-2 py-1 rounded border border-red-900/50">Páginas falsas</span>
                      <span className="text-[10px] font-mono bg-red-950/30 text-red-400 px-2 py-1 rounded border border-red-900/50">Formulários de captura</span>
                    </div>
                  </div>
                </div>

                {/* 2006-2010 - Spear Phishing */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#020617] rounded-full border-2 border-orange-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                  </div>
                  <div className="mb-1">
                    <span className="text-xs font-mono text-orange-400 bg-orange-950/30 px-2 py-1 rounded border border-orange-900/50">2006 - 2010</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Phishing Direcionado</h4>
                  <div className="bg-[#0f0202] border border-orange-900/30 p-4 rounded-xl inline-block w-full max-w-lg hover:border-orange-500/50 transition-colors">
                    <p className="text-sm text-slate-300 mb-2 font-bold">Nasce o Spear Phishing.</p>
                    <ul className="text-sm text-slate-400 space-y-1 ml-4 list-disc marker:text-orange-500">
                      <li>Ataques personalizados</li>
                      <li>Recolha prévia de informações da vítima</li>
                      <li>Campanhas direcionadas a empresas</li>
                    </ul>
                  </div>
                </div>

                {/* 2010-2020 - BEC */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#020617] rounded-full border-2 border-red-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  </div>
                  <div className="mb-1">
                    <span className="text-xs font-mono text-red-400 bg-red-950/30 px-2 py-1 rounded border border-red-900/50">2010 - 2020</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Fraude Corporativa</h4>
                  <div className="bg-gradient-to-br from-[#1a0505] to-[#0f0202] border border-red-900/40 p-4 rounded-xl inline-block w-full max-w-lg hover:border-red-500/50 transition-colors">
                    <p className="text-sm text-slate-400 mb-3">A evolução para ataques de alto impacto financeiro corporativo.</p>
                    <div className="bg-red-950/40 border border-red-900/50 p-2 rounded mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-red-400" />
                      <span className="text-xs font-bold text-red-300">BEC - Business Email Compromise</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-[10px] bg-black/50 text-slate-300 px-2 py-1 rounded border border-slate-800">Falsificação de executivos</span>
                      <span className="text-[10px] bg-black/50 text-slate-300 px-2 py-1 rounded border border-slate-800">Fraude em pagamentos</span>
                    </div>
                  </div>
                </div>

                {/* 2020-Presente - IA */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#020617] rounded-full border-2 border-purple-500 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping absolute"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <div className="absolute -left-[2px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent"></div>

                  <div className="mb-1">
                    <span className="text-xs font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-500/50">2020 - Presente</span>
                  </div>
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">Era da Automação e IA</h4>
                  
                  <div className="bg-gradient-to-br from-[#1a0b2e] to-[#0a0410] border border-purple-500/30 p-5 rounded-xl inline-block w-full max-w-lg shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-shadow">
                    <p className="text-sm font-medium text-purple-200 mb-4 italic border-l-2 border-purple-500 pl-3">
                      "O phishing torna-se industrializado."
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-purple-950/30 border border-purple-900/50 p-2 rounded flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-[10px] text-purple-200 leading-tight">Geração massiva IA</span>
                      </div>
                      <div className="bg-purple-950/30 border border-purple-900/50 p-2 rounded flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-[10px] text-purple-200 leading-tight">Deepfakes</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* NOVA COLUNA DIREITA: FRAME COM RADAR TÁTICO (Hidden on mobile) */}
            <div className="lg:col-span-1 lg:pl-10 relative hidden lg:block h-full min-h-[500px]">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg">
                   <Target className="w-5 h-5 text-slate-500" />
                 </div>
                 <h3 className="text-xl font-bold text-white">Inteligência Visual</h3>
              </div>
              
              <div className="bg-[#0f0202] border border-slate-800 rounded-2xl p-6 relative overflow-hidden h-full min-h-[500px] shadow-[0_0_30px_rgba(239,68,68,0.02)] group hover:border-red-500/30 transition-colors">
                
                {/* Background Radar Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="absolute border border-slate-900 rounded-full pointer-events-none"
                      style={{ width: `${100 + i * 80}px`, height: `${100 + i * 80}px` }}
                    ></div>
                  ))}
                </div>

                {/* Sweep Animation */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                   <div className="absolute w-[2px] h-[300px] bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)] transform-origin-bottom animate-[sweep_10s_linear_infinite]"></div>
                </div>

                {/* Simulated Targets (blips) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   {[
                     { top: '30%', left: '70%', delay: '0s', type: colors.hackerGreen },
                     { top: '60%', left: '40%', delay: '1.5s', type: 'red-500' },
                     { top: '80%', left: '80%', delay: '3s', type: colors.hackerGreen },
                     { top: '15%', left: '15%', delay: '4.5s', type: 'red-500' },
                     { top: '50%', left: '85%', delay: '6s', type: colors.hackerGreen },
                   ].map((target, i) => (
                     <div key={i} 
                        className={`absolute w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.3)] animate-ping`}
                        style={{ top: target.top, left: target.left, animationDelay: target.delay, animationDuration: '3s', backgroundColor: target.type }}
                     ></div>
                   ))}
                </div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-slate-700 leading-tight">
                   RADAR_SCAN_FEED | IN_PROGRESS...<br/>
                   TARGETS_IDENTIFIED: 5<br/>
                   REVOLUXTI_SECURITY_CHAMPION_LIVE
                </div>
                
                {/* Noise effect */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 3: ENGENHARIA SOCIAL E EXPLORAÇÃO COGNITIVA
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-pink-950/30 border border-pink-900/50 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-pink-500/20 blur-xl group-hover:bg-pink-500/40 transition-colors"></div>
              <BrainCircuit className="w-6 h-6 text-pink-500 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-pink-400 tracking-widest uppercase">O Hack da Mente Humana</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Engenharia Social: Exploração Cognitiva</h2>
            </div>
          </div>

          <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl mb-10 max-w-4xl border-l-4 border-l-pink-500">
            <p className="text-slate-300 text-lg">
              O sucesso do phishing está ancorado em <strong className="text-white">viéses cognitivos humanos</strong>. Não se trata de quebrar a criptografia, mas sim de explorar as vulnerabilidades do nosso próprio "sistema operacional".
            </p>
          </div>

          {/* GRID DE GATILHOS (3 em cima, 2 em baixo) */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* 1. Urgência (Ocupa 2 colunas) */}
            <div className="md:col-span-2 bg-[#0a0202] border border-orange-900/30 p-6 rounded-2xl group hover:border-orange-500/50 transition-all hover:-translate-y-1">
              <div className="w-10 h-10 bg-orange-950/40 rounded-lg flex items-center justify-center mb-4 border border-orange-900/50">
                <Clock className="w-5 h-5 text-orange-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Urgência</h4>
              <div className="text-xs font-mono text-orange-400 bg-orange-950/20 p-2 rounded mb-3 border border-orange-900/20">
                "Sua conta será bloqueada" <br/> "Pagamento pendente"
              </div>
              <p className="text-sm text-slate-400">
                Mensagens que exigem ação imediata. O cérebro humano, sob pressão temporal, <strong className="text-slate-200">reduz a sua análise crítica</strong>.
              </p>
            </div>

            {/* 2. Autoridade (Ocupa 2 colunas) */}
            <div className="md:col-span-2 bg-[#020617] border border-blue-900/30 p-6 rounded-2xl group hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-10 h-10 bg-blue-950/40 rounded-lg flex items-center justify-center mb-4 border border-blue-900/50">
                <ShieldAlert className="w-5 h-5 text-blue-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Autoridade</h4>
              <div className="flex gap-2 mb-3">
                <span className="text-[10px] bg-blue-950/30 text-blue-300 px-2 py-1 rounded border border-blue-900/50">Bancos</span>
                <span className="text-[10px] bg-blue-950/30 text-blue-300 px-2 py-1 rounded border border-blue-900/50">Governo</span>
                <span className="text-[10px] bg-blue-950/30 text-blue-300 px-2 py-1 rounded border border-blue-900/50">Executivos</span>
              </div>
              <p className="text-sm text-slate-400">
                Exploração da hierarquia social. O indivíduo tem a tendência de <strong className="text-slate-200">obedecer automaticamente</strong> a figuras de autoridade.
              </p>
            </div>

            {/* 3. Familiaridade (Ocupa 2 colunas) */}
            <div className="md:col-span-2 bg-[#020617] border border-emerald-900/30 p-6 rounded-2xl group hover:border-emerald-500/50 transition-all hover:-translate-y-1">
              <div className="w-10 h-10 bg-emerald-950/40 rounded-lg flex items-center justify-center mb-4 border border-emerald-900/50">
                <Users className="w-5 h-5 text-emerald-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">Familiaridade</h4>
              <div className="text-xs font-mono text-emerald-400 bg-emerald-950/20 p-2 rounded mb-3 border border-emerald-900/20">
                Ex: E-mail falso de colega
              </div>
              <p className="text-sm text-slate-400">
                Simulação de marcas ou pessoas conhecidas. A confiança prévia faz com que a vítima <strong className="text-slate-200">baixe as defesas naturais</strong>.
              </p>
            </div>

            {/* 4. Reciprocidade (Ocupa 3 colunas na base) */}
            <div className="md:col-span-3 bg-[#1a0516] border border-pink-900/30 p-6 rounded-2xl group hover:border-pink-500/50 transition-all hover:-translate-y-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-12 h-12 bg-pink-950/40 rounded-xl flex items-center justify-center shrink-0 border border-pink-900/50">
                <Gift className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Reciprocidade</h4>
                <p className="text-sm text-slate-400 mb-2">Promessas de recompensa ativam o gatilho da ganância ou oportunidade.</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-950/30 px-2 py-0.5 rounded border border-pink-900/30">Vale-presente</span>
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-950/30 px-2 py-0.5 rounded border border-pink-900/30">Bônus</span>
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-950/30 px-2 py-0.5 rounded border border-pink-900/30">Prêmios</span>
                </div>
              </div>
            </div>

            {/* 5. Prova Social (Ocupa 3 colunas na base) */}
            <div className="md:col-span-3 bg-[#020a0f] border border-cyan-900/30 p-6 rounded-2xl group hover:border-cyan-500/50 transition-all hover:-translate-y-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-12 h-12 bg-cyan-950/40 rounded-xl flex items-center justify-center shrink-0 border border-cyan-900/50">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-1">Prova Social</h4>
                <p className="text-sm text-slate-400 mb-2">Este mecanismo ativa o <strong className="text-slate-200">comportamento coletivo (efeito manada)</strong>.</p>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/20 p-2 rounded border border-cyan-900/20 inline-block">
                  "500 pessoas já atualizaram seus dados."
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================================
            CAPÍTULO 2: PHISHING POR IA & A QUEDA DAS SEGs
        ====================================================================== */}
        <section className="relative z-10 border-t border-slate-800 pt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-950/30 border border-purple-900/50 rounded-xl">
              <ShieldOff className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">Capítulo 2</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Por que as SEGs já não são a defesa crítica</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-400 text-justify">
                No início de 2026, os tradicionais <strong>Safe Email Gateways (SEGs)</strong>, que dependem de assinaturas e listas de reputação, perderam a corrida armamentista. 
                Os ataques gerados por IA saltaram para <strong className="text-white">56% de todos os incidentes direcionados ao setor corporativo</strong>.
              </p>
              
              <div className="bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-200 text-sm">
                  <strong>A Ilusão da Segurança:</strong> A IA elevou as taxas de cliques (CTR) de 12% para 54%. O utilizador não clica por negligência — <em>clica porque a falsificação é visualmente indistinguível.</em>
                </p>
              </div>
            </div>

            {/* Terminal Visual - SOC Blind Spot */}
            <div className="bg-[#050101] border border-slate-800 rounded-xl p-6 font-mono text-sm relative shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                <Terminal className="w-4 h-4 text-slate-500" />
                <span className="text-slate-500 text-xs">SOC_alert_monitor.log</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-yellow-500">[11:27:03] WARN: Fragmented alerts flood.</div>
                <div className="text-slate-500">[11:27:05] SEG: Scan signature matched -&gt; False Negative.</div>
                <div className="mt-4 p-2 bg-red-950/20 border border-red-900/30 text-red-400">
                  <strong className="block mb-1">CRITICAL BLIND SPOT:</strong>
                  Sem analisadores nativos de IA, o SOC não visualiza o "quadro geral".
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            CAPÍTULO 3: INFRAESTRUTURA ARMADILHADA (CLOUD)
        ====================================================================== */}
        <section className="relative z-10 border-t border-slate-800 pt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-950/30 border border-blue-900/50 rounded-xl">
              <CloudLightning className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Capítulo 3</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Nuvem Armadilhada: O Sequestro da Confiança</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Diagrama Visual Cloud Phishing */}
            <div className="bg-[#020617] border border-slate-800 rounded-2xl p-6 relative overflow-hidden order-2 lg:order-1">
               <div className="flex justify-between items-center mb-6 relative z-10">
                 <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-emerald-950/30 border border-emerald-500/50 rounded-lg flex items-center justify-center mb-2">
                     <Lock className="w-6 h-6 text-emerald-500" />
                   </div>
                   <span className="text-[10px] font-mono text-emerald-400">TLS Válido</span>
                 </div>
                 
                 <div className="h-px w-16 bg-slate-800 relative">
                   <ArrowRight className="absolute -top-2 right-0 w-4 h-4 text-slate-600" />
                 </div>
                 
                 <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-blue-950/30 border border-blue-500/50 rounded-lg flex items-center justify-center mb-2">
                     <CloudLightning className="w-6 h-6 text-blue-500" />
                   </div>
                   <span className="text-[10px] font-mono text-blue-400">Azure / AWS</span>
                 </div>
                 
                 <div className="h-px w-16 bg-slate-800 relative">
                   <ArrowRight className="absolute -top-2 right-0 w-4 h-4 text-slate-600" />
                 </div>
                 
                 <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-red-950/30 border border-red-500/50 rounded-lg flex items-center justify-center mb-2 animate-pulse">
                     <Fish className="w-6 h-6 text-red-500" />
                   </div>
                   <span className="text-[10px] font-mono text-red-400">Phishing Kit</span>
                 </div>
               </div>
               
               <div className="bg-slate-900 border border-slate-800 p-3 rounded text-center text-xs font-mono text-slate-400">
                 URL: https://storage-account.<span className="text-emerald-500">blob.core.windows.net</span>/login
               </div>
               <p className="text-[10px] text-center mt-3 text-slate-500">
                 Domínio de alta reputação. Filtros tradicionais aprovam a requisição.
               </p>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-slate-400 text-justify">
                Kits de phishing hospedados na infraestrutura dos principais fornecedores de nuvem usam <strong className="text-white">TLS válido e domínios base de reputação corporativa</strong> como cobertura.
              </p>
              <p className="text-slate-400 text-justify">
                Atuam como proxys AitM (Adversary-in-the-Middle) em tempo real, intercetando os tokens de Autenticação Multifator (MFA).
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            CAPÍTULO 4: CHECKLIST DE ADAPTAÇÃO ESTRATÉGICA
        ====================================================================== */}
        <section className="relative z-10 border-t border-slate-800 pt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 mb-4 uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3" /> Resposta Tática
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
               Checklist de Adaptação à Nova Ameaça
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#020617] border border-slate-800 p-6 rounded-xl group hover:border-emerald-500/30 transition-colors">
              <Key className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="text-white font-bold mb-2">MFA Resistente a Phishing (FIDO2)</h4>
              <p className="text-sm text-slate-400">
                Abolir o SMS. Transitar para chaves de hardware físicas ou passkeys. O phishing proxy interceta facilmente códigos OTP.
              </p>
            </div>

            <div className="bg-[#020617] border border-slate-800 p-6 rounded-xl group hover:border-emerald-500/30 transition-colors">
              <Target className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="text-white font-bold mb-2">Segurança LLM-Nativa</h4>
              <p className="text-sm text-slate-400">
                Ferramentas de segurança que utilizem redes neurais para analisar a intenção e semântica, ignorando falsificações perfeitas de cabeçalhos.
              </p>
            </div>

            <div className="bg-[#020617] border border-slate-800 p-6 rounded-xl group hover:border-emerald-500/30 transition-colors">
              <Eye className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="text-white font-bold mb-2">Análise Visual de Código</h4>
              <p className="text-sm text-slate-400">
                Auditoria profunda à procura de contêineres SVG usados para mascarar a execução de scripts em ambiente corporativo.
              </p>
            </div>

            <div className="bg-[#020617] border border-slate-800 p-6 rounded-xl group hover:border-emerald-500/30 transition-colors">
              <BrainCircuit className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="text-white font-bold mb-2">Consciência Dinâmica</h4>
              <p className="text-sm text-slate-400">
                Testes trimestrais são insuficientes. Se um funcionário falhar, deve receber instantaneamente treino adaptativo.
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================================
            SECÇÃO 4: VETORES DE ATAQUE MULTICANAL
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-900/50 border border-slate-700/50 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-slate-500/10 blur-xl group-hover:bg-slate-500/20 transition-colors"></div>
               <Terminal className="w-6 h-6 text-slate-400 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Superfície de Exposição</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Vetores de Ataque em Phishing</h2>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-slate-400 text-lg border-l-2 border-slate-700 pl-4">
              O phishing não se limita ao e-mail corporativo. Atualmente, os atacantes utilizam <strong className="text-white">múltiplos canais</strong> para contornar perímetros de defesa e atingir o utilizador onde ele está mais desatento.
            </p>
          </div>

          {/* GRID DE VETORES (3 Colunas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Email Phishing (Azul) */}
            <div className="bg-[#020617] border border-blue-900/30 p-6 rounded-2xl group hover:border-blue-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mail className="w-20 h-20 text-blue-500" />
              </div>
              <div className="w-10 h-10 bg-blue-950/40 rounded-lg flex items-center justify-center mb-4 border border-blue-900/50 relative z-10">
                <Mail className="w-5 h-5 text-blue-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2 relative z-10">Email Phishing</h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10">A forma clássica e mais volumosa de ataque.</p>
              <ul className="text-xs font-mono text-blue-300 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Links maliciosos</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Anexos infetados (PDF, DOCX)</li>
              </ul>
            </div>

            {/* 2. Spear Phishing (Vermelho) */}
            <div className="bg-[#1a0505] border border-red-900/30 p-6 rounded-2xl group hover:border-red-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-20 h-20 text-red-500" />
              </div>
              <div className="w-10 h-10 bg-red-950/40 rounded-lg flex items-center justify-center mb-4 border border-red-900/50 relative z-10">
                <Target className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2 relative z-10">Spear Phishing</h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10">Ataques cirúrgicos direcionados a alvos de alto valor.</p>
              <ul className="text-xs font-mono text-red-300 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Executivos (C-Level)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Administradores de Sistemas</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Equipas Financeiras</li>
              </ul>
            </div>

            {/* 3. Smishing (Verde Esmeralda) */}
            <div className="bg-[#02120b] border border-emerald-900/30 p-6 rounded-2xl group hover:border-emerald-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Smartphone className="w-20 h-20 text-emerald-500" />
              </div>
              <div className="w-10 h-10 bg-emerald-950/40 rounded-lg flex items-center justify-center mb-4 border border-emerald-900/50 relative z-10">
                <Smartphone className="w-5 h-5 text-emerald-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2 relative z-10">Smishing</h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10">Phishing via SMS. Contorna frequentemente firewalls corporativos.</p>
              <ul className="text-xs font-mono text-emerald-300 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Links encurtados (bit.ly, etc)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Falsas notificações bancárias</li>
              </ul>
            </div>

            {/* 4. Vishing (Laranja) */}
            <div className="bg-[#120702] border border-orange-900/30 p-6 rounded-2xl group hover:border-orange-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <PhoneCall className="w-20 h-20 text-orange-500" />
              </div>
              <div className="w-10 h-10 bg-orange-950/40 rounded-lg flex items-center justify-center mb-4 border border-orange-900/50 relative z-10">
                <PhoneCall className="w-5 h-5 text-orange-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2 relative z-10">Vishing</h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10">Ataques por voz (telefone). Usa urgência em tempo real.</p>
              <ul className="text-xs font-mono text-orange-300 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span> Falso suporte técnico (Helpdesk)</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span> Simulação de banco/governo</li>
              </ul>
            </div>

            {/* 5. Quishing (Roxo) */}
            <div className="bg-[#0b0212] border border-purple-900/30 p-6 rounded-2xl group hover:border-purple-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <QrCode className="w-20 h-20 text-purple-500" />
              </div>
              <div className="w-10 h-10 bg-purple-950/40 rounded-lg flex items-center justify-center mb-4 border border-purple-900/50 relative z-10">
                <QrCode className="w-5 h-5 text-purple-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2 relative z-10">Quishing</h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10">Uso de QR Codes maliciosos para mascarar a URL de destino.</p>
              <ul className="text-xs font-mono text-purple-300 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Cartazes e menus falsos</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span> Boletos armadilhados</li>
              </ul>
            </div>

            {/* 6. Clone Phishing (Ciano) */}
            <div className="bg-[#021012] border border-cyan-900/30 p-6 rounded-2xl group hover:border-cyan-500/50 transition-all hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Copy className="w-20 h-20 text-cyan-500" />
              </div>
              <div className="w-10 h-10 bg-cyan-950/40 rounded-lg flex items-center justify-center mb-4 border border-cyan-900/50 relative z-10">
                <Copy className="w-5 h-5 text-cyan-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2 relative z-10">Clone Phishing</h4>
              <p className="text-sm text-slate-400 mb-4 relative z-10">Cópia exata de um e-mail legítimo enviado previamente.</p>
              <ul className="text-xs font-mono text-cyan-300 space-y-2 relative z-10">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Substituição subtil do Link</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Anexo malicioso injetado</li>
              </ul>
            </div>

          </div>
        </section>


        {/* =====================================================================
            SECÇÃO 5: ANATOMIA DE UM ATAQUE DE PHISHING
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-500/10 blur-xl group-hover:bg-red-500/20 transition-colors"></div>
               <Search className="w-6 h-6 text-red-500 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-red-400 tracking-widest uppercase">Perícia Forense Digital</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Anatomia de um E-mail Malicioso</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* COLUNA ESQUERDA: Os 5 Indicadores */}
            <div className="space-y-4">
              <p className="text-slate-400 text-lg mb-6">
                Um e-mail de phishing clássico contém sinais estruturais característicos. A dissecação destes elementos é a base da deteção visual.
              </p>

              {/* 1. Spoofing */}
              <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl flex gap-4 items-start group hover:border-red-500/30 transition-colors">
                <div className="mt-1 bg-red-950/40 p-2 rounded-lg border border-red-900/50 text-red-500 font-mono font-bold shrink-0">[1]</div>
                <div>
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">Spoofing <UserX className="w-4 h-4 text-slate-500"/></h4>
                  <p className="text-xs text-slate-400 mb-2">Falsificação do remetente com uso de carateres similares (Typosquatting).</p>
                  <div className="text-[10px] font-mono text-slate-500 bg-black/50 p-2 rounded border border-slate-800">
                    <span className="line-through decoration-red-500">support@microsoft.com</span><br/>
                    <span className="text-red-400">support@micros0ft.com</span>
                  </div>
                </div>
              </div>

              {/* 2. Mensagem Genérica */}
              <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl flex gap-4 items-start group hover:border-orange-500/30 transition-colors">
                <div className="mt-1 bg-orange-950/40 p-2 rounded-lg border border-orange-900/50 text-orange-500 font-mono font-bold shrink-0">[2]</div>
                <div>
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">Mensagem Genérica <FileText className="w-4 h-4 text-slate-500"/></h4>
                  <p className="text-xs text-slate-400 mb-2">Ausência de personalização. Atacantes em massa não têm o seu nome.</p>
                  <div className="text-[10px] font-mono text-orange-400 bg-orange-950/20 p-2 rounded border border-orange-900/20">
                    "Prezado cliente"
                  </div>
                </div>
              </div>

              {/* 3. Gatilho de Urgência */}
              <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl flex gap-4 items-start group hover:border-yellow-500/30 transition-colors">
                <div className="mt-1 bg-yellow-950/40 p-2 rounded-lg border border-yellow-900/50 text-yellow-500 font-mono font-bold shrink-0">[3]</div>
                <div>
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">Gatilho de Urgência <Clock className="w-4 h-4 text-slate-500"/></h4>
                  <p className="text-xs text-slate-400 mb-2">Coação temporal para forçar a ação impulsiva.</p>
                  <div className="text-[10px] font-mono text-yellow-400 bg-yellow-950/20 p-2 rounded border border-yellow-900/20">
                    "Sua conta será suspensa em 24h"
                  </div>
                </div>
              </div>

              {/* 4. Link Mascarado */}
              <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl flex gap-4 items-start group hover:border-blue-500/30 transition-colors">
                <div className="mt-1 bg-blue-950/40 p-2 rounded-lg border border-blue-900/50 text-blue-500 font-mono font-bold shrink-0">[4]</div>
                <div>
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">Link Mascarado <Link className="w-4 h-4 text-slate-500"/></h4>
                  <p className="text-xs text-slate-400 mb-2">O texto de âncora difere do destino real.</p>
                  <div className="text-[10px] font-mono bg-black/50 p-2 rounded border border-slate-800 flex flex-col gap-1">
                    <span className="text-slate-400">Texto: <span className="text-blue-400 underline">paypal.com</span></span>
                    <span className="text-red-400">Destino: paypalsecure-login.ru</span>
                  </div>
                </div>
              </div>

              {/* 5. Anexo Malicioso */}
              <div className="bg-[#0f0202] border border-slate-800 p-4 rounded-xl flex gap-4 items-start group hover:border-purple-500/30 transition-colors">
                <div className="mt-1 bg-purple-950/40 p-2 rounded-lg border border-purple-900/50 text-purple-500 font-mono font-bold shrink-0">[5]</div>
                <div>
                  <h4 className="text-white font-bold mb-1 flex items-center gap-2">Anexos Maliciosos <Paperclip className="w-4 h-4 text-slate-500"/></h4>
                  <p className="text-xs text-slate-400 mb-2">Ficheiros portadores de payloads ou exploits.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-900/50">.zip</span>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-900/50">.exe</span>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-900/50">.docm</span>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-900/50">.pdf (exploit)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUNA DIREITA: Visualização do E-mail Intercetado */}
            <div className="bg-[#050101] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative sticky top-24 h-fit">
              
              {/* Header do Client de Email */}
              <div className="bg-slate-900/50 border-b border-slate-800 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 ml-4">INBOX - MENSAGEM INTERCETADA</div>
              </div>

              <div className="p-6 text-sm">
                
                {/* 1. Cabeçalho do Email (Spoofing) */}
                <div className="relative pl-10 border-b border-slate-800 pb-5 mb-5">
                  <span className="absolute left-0 top-0 text-[11px] bg-red-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]">1</span>
                  <div className="mb-2">
                    <span className="text-slate-500 w-12 inline-block">De:</span> Suporte Técnico <span className="text-red-400 font-mono text-xs ml-1 bg-red-950/30 px-1.5 py-0.5 rounded border border-red-900/30">&lt;support@micros0ft.com&gt;</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-slate-500 w-12 inline-block">Para:</span> <span className="text-slate-300">funcionario@suaempresa.com.br</span>
                  </div>
                  <div>
                    <span className="text-slate-500 w-12 inline-block">Assunto:</span> <span className="text-white font-bold">AÇÃO NECESSÁRIA: Verificação de Segurança</span>
                  </div>
                </div>

                {/* Corpo do Email */}
                <div className="text-slate-300 space-y-5">
                  
                  {/* 2. Mensagem Genérica */}
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-0 text-[11px] bg-orange-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]">2</span>
                    <span className="border-b border-dashed border-orange-500 pb-0.5 text-orange-200 block w-fit mb-3">Prezado cliente,</span>
                    <p className="leading-relaxed">Detetamos uma tentativa de login não autorizada na sua conta a partir de um novo dispositivo (IP: 192.168.x.x).</p>
                  </div>

                  {/* 3. Urgência */}
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-3 text-[11px] bg-yellow-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(234,179,8,0.4)]">3</span>
                    <div className="p-3 bg-yellow-950/10 border border-yellow-900/30 rounded inline-block w-full">
                      <span className="text-yellow-400 font-bold">Sua conta será suspensa em 24h</span> se não confirmar a sua identidade imediatamente.
                    </div>
                  </div>

                  {/* 4. Link Mascarado */}
                  <div className="relative pl-10">
                    <p className="mb-3">Para evitar o bloqueio, por favor, valide as suas credenciais no nosso portal seguro:</p>
                    <div className="relative inline-block group cursor-pointer mb-2">
                      <span className="absolute -left-10 top-1 text-[11px] bg-blue-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]">4</span>
                      <span className="text-blue-400 underline underline-offset-4 decoration-blue-500/50 text-base font-bold">
                        https://paypal.com/secure-login
                      </span>
                      {/* Tooltip simulando o destino real ao passar o rato */}
                      <div className="absolute top-8 left-0 bg-black border border-red-500 text-red-400 text-[11px] font-mono p-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-xl">
                        Destino real: http://paypalsecure-login.ru/x891a
                      </div>
                    </div>
                  </div>

                  <div className="pl-10">
                    <p>Atenciosamente,<br/>Equipa de Segurança</p>
                  </div>
                </div>

                {/* 5. Anexos */}
                <div className="mt-8 border-t border-slate-800 pt-5 relative pl-10">
                  <span className="absolute left-0 top-5 text-[11px] bg-purple-500 text-white font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]">5</span>
                  <span className="text-xs text-slate-500 mb-3 block">1 Anexo:</span>
                  <div className="flex items-center gap-3 bg-[#0a0208] border border-purple-900/30 p-2.5 w-fit rounded hover:border-purple-500/50 transition-colors cursor-not-allowed">
                    <div className="bg-purple-950/50 p-2 rounded">
                      <Paperclip className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-300 font-bold">Relatorio_Acessos.zip</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">245 KB</div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Marca de Água Oculta no Fundo */}
              <div className="absolute bottom-4 right-4 opacity-5 rotate-[-15deg] pointer-events-none">
                <ShieldAlert className="w-40 h-40 text-red-500" />
              </div>
            </div>

          </div>
        </section>

        


        {/* =====================================================================
            SECÇÃO 6: RAÍZES ESTRUTURAIS DO PROBLEMA
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-900/50 border border-slate-700/50 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-slate-500/10 blur-xl group-hover:bg-slate-500/20 transition-colors"></div>
               <Network className="w-6 h-6 text-slate-400 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Análise de Causa Raiz</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Raízes Estruturais do Problema</h2>
            </div>
          </div>

          <div className="mb-10 max-w-4xl">
            <p className="text-slate-300 text-lg">
              Para compreender o phishing de forma científica, é necessário ir além do ataque em si e focar na infraestrutura socio-técnica. As principais <strong className="text-white">causas estruturais</strong> que alimentam este ecossistema são:
            </p>
          </div>

          {/* GRID DE DIAGNÓSTICO (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 1. Alfabetização Digital */}
            <div className="bg-[#050101] border border-slate-800 rounded-2xl p-6 group hover:border-slate-500/50 transition-all relative overflow-hidden shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-600"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-700 group-hover:border-slate-500 transition-colors">
                  <MonitorOff className="w-6 h-6 text-slate-400" />
                </div>
                <span className="text-5xl font-black text-slate-800/30 absolute -right-2 -top-2 select-none group-hover:text-slate-700/40 transition-colors">01</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">Baixa Alfabetização Digital</h4>
              <p className="text-slate-400 text-sm relative z-10">
                A vasta maioria dos utilizadores não possui treino adequado para identificar anomalias, Typosquatting ou sinais subtis de fraude em comunicações digitais.
              </p>
            </div>

            {/* 2. Design Inseguro */}
            <div className="bg-[#1a0505] border border-red-900/30 rounded-2xl p-6 group hover:border-red-500/50 transition-all relative overflow-hidden shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 bg-red-950/40 rounded-lg flex items-center justify-center border border-red-900/50 group-hover:border-red-500/50 transition-colors">
                  <Unlock className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-5xl font-black text-red-900/20 absolute -right-2 -top-2 select-none group-hover:text-red-900/40 transition-colors">02</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">Design Inseguro de Sistemas</h4>
              <p className="text-slate-400 text-sm mb-4 relative z-10">
                Muitos serviços priorizam a "fricção zero" (UX) em vez da segurança, falhando na implementação de defesas vitais:
              </p>
              <div className="flex gap-2 relative z-10">
                <span className="text-xs font-mono text-red-300 bg-red-950/40 px-2.5 py-1 rounded border border-red-900/50 flex items-center gap-1"><Lock className="w-3 h-3"/> Autenticação Forte</span>
                <span className="text-xs font-mono text-red-300 bg-red-950/40 px-2.5 py-1 rounded border border-red-900/50 flex items-center gap-1"><Search className="w-3 h-3"/> Verificação Contextual</span>
              </div>
            </div>

            {/* 3. Cultura Organizacional */}
            <div className="bg-[#120702] border border-orange-900/30 rounded-2xl p-6 group hover:border-orange-500/50 transition-all relative overflow-hidden shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 bg-orange-950/40 rounded-lg flex items-center justify-center border border-orange-900/50 group-hover:border-orange-500/50 transition-colors">
                  <Building2 className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-5xl font-black text-orange-900/20 absolute -right-2 -top-2 select-none group-hover:text-orange-900/40 transition-colors">03</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">Cultura Organizacional Fraca</h4>
              <p className="text-slate-400 text-sm relative z-10">
                Empresas frequentemente priorizam a <strong className="text-orange-400">produtividade em detrimento da segurança</strong>. Políticas rigorosas são vistas como entraves operacionais em vez de pilares estratégicos.
              </p>
            </div>

            {/* 4. Economia do Cibercrime */}
            <div className="bg-[#02120b] border border-emerald-900/30 rounded-2xl p-6 group hover:border-emerald-500/50 transition-all relative overflow-hidden shadow-lg hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 bg-emerald-950/40 rounded-lg flex items-center justify-center border border-emerald-900/50 group-hover:border-emerald-500/50 transition-colors">
                  <Coins className="w-6 h-6 text-emerald-500" />
                </div>
                <span className="text-5xl font-black text-emerald-900/20 absolute -right-2 -top-2 select-none group-hover:text-emerald-900/40 transition-colors">04</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">Economia do Cibercrime</h4>
              <p className="text-slate-400 text-sm mb-4 relative z-10">
                O phishing é um modelo de negócio altamente lucrativo (Phishing-as-a-Service). A barreira de entrada é baixa.
              </p>
              <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded text-[11px] text-emerald-400 font-mono relative z-10 border-l-2 border-l-emerald-500">
                "Com custo operacional mínimo, sindicatos criminosos podem atingir milhões de vítimas."
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 7: METODOLOGIAS DE DEFESA (DEFENSE IN DEPTH)
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-colors"></div>
               <Layers className="w-6 h-6 text-emerald-500 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Estratégia de Mitigação</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Defesa em Profundidade (3 Camadas)</h2>
            </div>
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-4xl">
            Nenhuma solução isolada consegue travar ataques baseados em engenharia social. Uma estratégia de cibersegurança eficaz e resiliente necessita de atuar de forma holística em <strong className="text-white">três camadas fundamentais</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Camada 1 - Tecnologia */}
            <div className="bg-[#020a12] border border-cyan-900/30 rounded-2xl p-6 group hover:border-cyan-500/50 transition-all relative overflow-hidden hover:-translate-y-1 shadow-[0_0_15px_rgba(6,182,212,0.02)]">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu className="w-32 h-32 text-cyan-500" />
              </div>
              <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded inline-block mb-4 border border-cyan-900/50">
                CAMADA 01
              </div>
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                Tecnologia
              </h4>
              <p className="text-slate-400 text-sm mb-6 relative z-10">Implementação de controlos técnicos para filtrar ameaças antes que cheguem ao utilizador.</p>
              
              <ul className="space-y-3 relative z-10">
                <li className="text-xs font-mono text-cyan-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-sm"></span> SPF, DKIM & DMARC</li>
                <li className="text-xs font-mono text-cyan-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-sm"></span> Filtros de E-mail Avançados</li>
                <li className="text-xs font-mono text-cyan-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-sm"></span> Sandbox de Anexos</li>
                <li className="text-xs font-mono text-cyan-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-sm"></span> Análise Comportamental</li>
              </ul>
            </div>

            {/* Camada 2 - Treinamento Cognitivo */}
            <div className="bg-[#021206] border border-emerald-900/30 rounded-2xl p-6 group hover:border-emerald-500/50 transition-all relative overflow-hidden hover:-translate-y-1 shadow-[0_0_15px_rgba(16,185,129,0.02)]">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Brain className="w-32 h-32 text-emerald-500" />
              </div>
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded inline-block mb-4 border border-emerald-900/50">
                CAMADA 02
              </div>
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                Treino Cognitivo
              </h4>
              <p className="text-slate-400 text-sm mb-6 relative z-10">O objetivo é transformar os utilizadores no <strong className="text-emerald-400">último sensor de segurança</strong> da organização.</p>
              
              <ul className="space-y-3 relative z-10">
                <li className="text-xs font-mono text-emerald-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span> Simulações de Phishing</li>
                <li className="text-xs font-mono text-emerald-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span> Educação em Eng. Social</li>
                <li className="text-xs font-mono text-emerald-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span> Campanhas de Consciência</li>
                <li className="text-xs font-mono text-emerald-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm"></span> Micro-treinos Adaptativos</li>
              </ul>
            </div>

            {/* Camada 3 - Inteligência de Ameaças */}
            <div className="bg-[#100212] border border-purple-900/30 rounded-2xl p-6 group hover:border-purple-500/50 transition-all relative overflow-hidden hover:-translate-y-1 shadow-[0_0_15px_rgba(168,85,247,0.02)]">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-32 h-32 text-purple-500" />
              </div>
              <div className="text-[10px] font-mono text-purple-400 bg-purple-950/30 px-2 py-1 rounded inline-block mb-4 border border-purple-900/50">
                CAMADA 03
              </div>
              <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                Threat Intelligence
              </h4>
              <p className="text-slate-400 text-sm mb-6 relative z-10">Mapeamento proativo para identificar campanhas e infraestrutura criminosa antes do ataque.</p>
              
              <ul className="space-y-3 relative z-10">
                <li className="text-xs font-mono text-purple-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></span> Monitoramento de DNS</li>
                <li className="text-xs font-mono text-purple-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></span> Análise de Typosquatting</li>
                <li className="text-xs font-mono text-purple-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></span> OSINT de Campanhas</li>
                <li className="text-xs font-mono text-purple-200 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-sm"></span> Caça a Domínios Maliciosos</li>
              </ul>
            </div>

          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 8: MODELO PHISH-RESIST FRAMEWORK
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-500/10 blur-xl group-hover:bg-red-500/20 transition-colors"></div>
               <ShieldCheck className="w-6 h-6 text-red-500 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-red-400 tracking-widest uppercase">Arquitetura de Resiliência</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Modelo Estratégico PHISH-RESIST</h2>
            </div>
          </div>

          <div className="mb-12 max-w-4xl">
            <p className="text-slate-300 text-lg">
              Para consolidar as táticas de defesa num formato acionável, propõe-se o <strong className="text-white">PHISH-RESIST Framework</strong>. Uma abordagem modular que transforma a postura de segurança de reativa para proativa.
            </p>
          </div>

          {/* O FRAMEWORK ACROSTIC (P-H-I-S-H) */}
          <div className="flex flex-col gap-4 relative">
            
            {/* Linha conectora vertical (visível em desktop) */}
            <div className="hidden md:block absolute left-[3.25rem] top-8 bottom-8 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 opacity-20"></div>

            {/* P - Prevention */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#020617] border border-blue-900/50 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:border-blue-500/50 transition-colors relative z-10">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">P</span>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex-1 group-hover:border-blue-900/50 transition-colors shadow-sm">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-500"/> Prevention <span className="text-sm font-normal text-slate-500 ml-2 hidden sm:inline">(Prevenção)</span>
                </h4>
                <p className="text-slate-400">
                  <strong className="text-blue-300">Controlo técnico de entrada.</strong> A primeira linha de defesa. Bloqueio ao nível de DNS, filtragem de reputação de IP, políticas rigorosas de DMARC e gateways de e-mail baseados em IA.
                </p>
              </div>
            </div>

            {/* H - Human Awareness */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#020617] border border-emerald-900/50 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:border-emerald-500/50 transition-colors relative z-10">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-emerald-600">H</span>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex-1 group-hover:border-emerald-900/50 transition-colors shadow-sm">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-emerald-500"/> Human Awareness <span className="text-sm font-normal text-slate-500 ml-2 hidden sm:inline">(Consciência Humana)</span>
                </h4>
                <p className="text-slate-400">
                  <strong className="text-emerald-300">Treino psicológico e educacional.</strong> Desconstruir viéses cognitivos através de educação contínua. Ensinar os colaboradores a reconhecerem urgência artificial e falsificação de autoridade.
                </p>
              </div>
            </div>

            {/* I - Intelligence */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#020617] border border-purple-900/50 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:border-purple-500/50 transition-colors relative z-10">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600">I</span>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex-1 group-hover:border-purple-900/50 transition-colors shadow-sm">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Radar className="w-5 h-5 text-purple-500"/> Intelligence <span className="text-sm font-normal text-slate-500 ml-2 hidden sm:inline">(Inteligência)</span>
                </h4>
                <p className="text-slate-400">
                  <strong className="text-purple-300">Recolha de dados sobre ameaças.</strong> Consumo de feeds de Threat Intelligence (CTI). Identificação proativa de domínios recém-registados e campanhas ativas direcionadas ao setor da organização.
                </p>
              </div>
            </div>

            {/* S - Simulation */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#020617] border border-orange-900/50 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:border-orange-500/50 transition-colors relative z-10">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">S</span>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex-1 group-hover:border-orange-900/50 transition-colors shadow-sm">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500"/> Simulation <span className="text-sm font-normal text-slate-500 ml-2 hidden sm:inline">(Simulação)</span>
                </h4>
                <p className="text-slate-400">
                  <strong className="text-orange-300">Campanhas internas controladas.</strong> Aplicação prática do treino cognitivo. Exercícios de Red Team simulando ataques de phishing multicanal (Email, SMS, QR Code) para medir métricas de clique e reporte.
                </p>
              </div>
            </div>

            {/* H - Hardening */}
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#020617] border border-red-900/50 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.1)] group-hover:border-red-500/50 transition-colors relative z-10">
                <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600">H</span>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex-1 group-hover:border-red-900/50 transition-colors shadow-sm">
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Server className="w-5 h-5 text-red-500"/> Hardening <span className="text-sm font-normal text-slate-500 ml-2 hidden sm:inline">(Endurecimento)</span>
                </h4>
                <p className="text-slate-400">
                  <strong className="text-red-300">Fortalecimento de infraestrutura.</strong> Assumir a falha. Se o utilizador clicar e a prevenção falhar, a arquitetura deve resistir: implementação de Zero Trust, MFA baseada em hardware (FIDO2) e segmentação rigorosa de rede.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 9: IMPACTO EMPÍRICO (ESTATÍSTICAS GLOBAIS)
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-950/30 border border-blue-900/50 rounded-xl relative overflow-hidden">
               <BarChart3 className="w-6 h-6 text-blue-500 relative z-10" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Evidência Empírica</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Métricas de Impacto Global</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl relative">
              <span className="text-slate-500 text-[10px] font-mono block mb-2">FONTE: IBM COST OF DATA BREACH</span>
              <div className="text-4xl font-black text-white mb-2">$4.88M</div>
              <p className="text-sm text-slate-400">Custo médio global de uma violação de dados em 2024/2025, onde o phishing continua a ser o vetor inicial mais caro.</p>
            </div>
            
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl relative">
              <span className="text-slate-500 text-[10px] font-mono block mb-2">FONTE: VERIZON DBIR</span>
              <div className="text-4xl font-black text-blue-500 mb-2">74%</div>
              <p className="text-sm text-slate-400">Das violações incluem o elemento humano, através de erro, privilégios indevidos ou ataques de engenharia social.</p>
            </div>

            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl relative">
              <span className="text-slate-500 text-[10px] font-mono block mb-2">FONTE: MICROSOFT THREAT REPORT</span>
              <div className="text-4xl font-black text-red-500 mb-2">30K</div>
              <p className="text-sm text-slate-400">Tentativas de phishing por minuto bloqueadas em ambientes corporativos, evidenciando a industrialização da ameaça.</p>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 10: CYBER KILL CHAIN DO PHISHING
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-xl">
               <Activity className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <span className="text-xs font-mono text-red-400 tracking-widest uppercase">Fluxo de Ataque</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Análise de Kill Chain</h2>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                { title: "Recon", desc: "Coleta de OSINT sobre alvos e infraestrutura.", icon: <Search className="w-4 h-4"/> },
                { title: "Prep", desc: "Criação de iscas, kits de phishing e infra Cloud.", icon: <Terminal className="w-4 h-4"/> },
                { title: "Delivery", desc: "Disparo multicanal (Email, SMS, QR Code).", icon: <Mail className="w-4 h-4"/> },
                { title: "Exploit", desc: "Interação da vítima e captura de tokens/MFA.", icon: <Unlock className="w-4 h-4"/> },
                { title: "Persist", desc: "Exfiltração de dados e acesso lateral na rede.", icon: <Database className="w-4 h-4"/> }
              ].map((step, i) => (
                <div key={i} className="bg-[#020617] border border-slate-800 p-5 rounded-xl hover:border-red-500/50 transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 mb-4 group-hover:text-red-500 transition-colors">
                    0{i+1}
                  </div>
                  <div className="flex items-center gap-2 text-white font-bold mb-2">
                    {step.icon} {step.title}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECÇÃO 11: MODELO MATEMÁTICO DE RISCO (REVOLUXTI FORMULA)
        ====================================================================== */}
        <section className="relative z-10 mb-20 pt-16 border-t border-slate-800/50">
          
          {/* Teoria e Experimento Prático */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-xl">
                   <Calculator className="w-6 h-6 text-emerald-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Modelo de Risco Quantitativo</h2>
              </div>
              <p className="text-slate-400 mb-6">
                Para objetivar a análise, aplicamos a função de probabilidade de compromisso baseada na exposição de superfície e eficácia do treino cognitivo.
              </p>
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl font-mono text-xl text-center text-emerald-400 shadow-inner">
                R = (P × V) / Σ(D<sub>i</sub>)
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-mono text-slate-500 uppercase text-center">
                <div>P: Probabilidade</div>
                <div>V: Valor do Ativo</div>
                <div>D: Defesas Ativas</div>
              </div>
            </div>

            <div className="bg-[#0f0202] border border-red-900/30 p-8 rounded-3xl relative overflow-hidden group hover:border-red-500/50 transition-colors shadow-lg hover:-translate-y-1">
              <div className="relative z-10">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <FileSearch className="w-5 h-5 text-red-500"/> Experimento Prático
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Em simulações controladas pela <strong className="text-white">REVOLUXTI</strong>, observou-se que a implementação de micro-treinos imediatos após a falha reduz a taxa de recorrência em <span className="text-emerald-400 font-bold bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">62% num período de 90 dias</span>, validando a eficácia da Camada Cognitiva sobre a Puramente Técnica.
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe2 className="w-40 h-40 text-red-500" />
              </div>
            </div>
          </div>

          {/* Integração do Simulador de Risco */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="text-center mb-10">
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                O phishing moderno é um jogo de números. Um único colaborador num universo de 10.000 pode ser o ponto de entrada. Utilize o <strong className="text-white">Simulador REVOLUXTI</strong> abaixo para calcular a exposição tática da infraestrutura em tempo real.
              </p>
            </div>
            
            {/* TAG DO COMPONENTE AQUI */}
            <RiskSimulator />
            
          </div>
        </section>


        {/* =====================================================================
            SECÇÃO 9: CONCLUSÃO (SÍNTESE TÁTICA)
        ====================================================================== */}
        <section className="relative z-10 pt-16 border-t border-slate-800/50">
          
          <div className="bg-gradient-to-b from-[#050101] to-[#020617] border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl text-center max-w-4xl mx-auto group hover:border-slate-600 transition-colors">
            
            {/* Efeito de background sutil */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-slate-800/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <div className="p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-inner">
                <CheckCircle className="w-8 h-8 text-slate-300" />
              </div>
            </div>

            <span className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4 block relative z-10">Síntese Tática</span>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Conclusão do Estudo</h2>

            <p className="text-lg text-slate-400 mb-6 leading-relaxed relative z-10">
              O phishing não é apenas um ataque técnico, mas sim um <strong className="text-white">fenómeno sociotécnico</strong> que explora vulnerabilidades humanas dentro de sistemas digitais. A evolução desta ameaça demonstra, de forma inequívoca, que soluções puramente tecnológicas são insuficientes.
            </p>

            <p className="text-slate-400 mb-10 relative z-10">
              A defesa eficaz contra a engenharia social moderna exige a integração obrigatória de três pilares:
            </p>

            {/* Badges dos 3 Pilares Finais */}
            <div className="flex flex-wrap justify-center gap-4 relative z-10 mb-8">
              <div className="flex items-center gap-2 bg-[#020617] border border-emerald-900/50 px-4 py-2 rounded-full shadow-sm">
                <Brain className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold text-emerald-100">Educação</span>
              </div>
              <div className="flex items-center gap-2 bg-[#020617] border border-red-900/50 px-4 py-2 rounded-full shadow-sm">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span className="text-sm font-bold text-red-100">Arquitetura Segura</span>
              </div>
              <div className="flex items-center gap-2 bg-[#020617] border border-purple-900/50 px-4 py-2 rounded-full shadow-sm">
                <Radar className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-bold text-purple-100">Inteligência de Ameaças</span>
              </div>
            </div>

            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl relative z-10">
              <p className="text-sm text-slate-300 font-medium">
                "Somente a integração destes elementos pode reduzir de forma significativa o impacto do phishing nas organizações modernas."
              </p>
            </div>

          </div>

          {/* FIM DE FICHEIRO - Estilo Terminal */}
          <div className="mt-20 flex flex-col items-center justify-center gap-2 opacity-50 select-none pointer-events-none">
            <div className="h-10 w-px bg-gradient-to-b from-slate-600 to-transparent"></div>
            <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-3 h-3" /> EOF_REVOLUXTI_ARTICLE_02
            </div>
          </div>

        </section>

      </main>
    </div>
  );
};

// Ícone Auxiliar ArrowRight
const ArrowRight = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

export default PhishingArticle;