import React from 'react';
import {
  ShieldAlert, Lock, Activity, Terminal, Skull,
  Zap, Workflow, TrendingUp, Layers, FileWarning,
  ShieldPlus, Database, AlertCircle, ChevronRight,
  Fingerprint, Briefcase, Network, DownloadCloud,
  ShieldCheck, AlertTriangle, Crosshair,
  Clock, Bitcoin, Users, Server, EyeOff, Target, Component,
  Search, Wrench, Send, HardDrive, Radio, Box, MousePointer2,
  Mail, Globe, Key, MonitorPlay, Link2,
  FileCode2, Repeat, Ghost, Radar,
  Unlock, VenetianMask, Cpu, FileKey, ArrowUpRight,
  Share2, Waypoints, ArrowRightLeft, GitBranch,
  Archive, GlobeLock, CloudLightning, Scale, Siren, FileDigit,
  LockKeyhole, Braces, Timer, Trash2, ZapOff, FileX,
  Wifi, Shuffle, Route, Satellite,
  Dna, BoxSelect, MonitorOff, ScanLine, Hourglass,
  Shield, Flame, RefreshCw, BookOpen, AlertOctagon, CheckCircle,
  Grid, CloudOff, UserCheck, Eye, // <-- NOVOS PARA O CAP 12
  Microscope, BrainCircuit, LineChart, Map, // <-- NOVOS PARA O CAP 13
  Gavel, FileSignature, Building, Landmark, // <-- NOVOS PARA O CAP 14
  FlaskConical, PlaySquare, ServerCrash, // <-- NOVOS PARA O CAP 15
  FileText, FileSearch, TrendingDown // <-- OS ÚLTIMOS ÍCONES (CAP 16)
} from 'lucide-react';

const RansomwareArticle = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-red-500/30">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* =====================================================================
            HEADER / TÍTULO PRINCIPAL
        ====================================================================== */}
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-red-600"></div>
            <span className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase font-bold">Intelligence Report // Artigo 03</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 italic uppercase">
            Ransomware
            <span className="block text-2xl md:text-3xl font-light tracking-[0.2em] text-slate-500 mt-4 not-italic">
              A Industrialização da Extorsão Digital
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-y border-slate-800/50 py-8">
            <div className="flex items-center gap-4">
              <Fingerprint className="text-red-600 w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Threat Actor Analysis</span>
            </div>
            <div className="flex items-center gap-4">
              <Briefcase className="text-red-600 w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Business Model Focus</span>
            </div>
            <div className="flex items-center gap-4">
              <Network className="text-red-600 w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Strategic Resilience</span>
            </div>
          </div>
        </header>

        {/* =====================================================================
            SECÇÃO 1: INTRODUÇÃO - O PARADIGMA DO CONTROLO
        ====================================================================== */}
        <section className="relative mb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Bloco de Texto Principal */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <AlertCircle className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Executive Summary</span>
              </div>

              <p className="text-2xl text-white leading-tight font-medium">
                Ransomware não é apenas malware — é estratégia, é modelo de negócio, é a <span className="text-red-600 uppercase italic">industrialização do caos digital</span>.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                Dentro do cenário moderno de cibersegurança, ele emerge como uma das ameaças mais lucrativas e disruptivas, operando com lógica corporativa, métricas de desempenho e uma cadeia de valor bem definida. Não estamos lidando com scripts isolados escritos por curiosos, mas com operações estruturadas que se aproximam de verdadeiras <strong className="text-white underline decoration-red-600 decoration-2 underline-offset-4">startups do crime</strong>. <br /> <br />

                A consolidação desse fenômeno acompanha a própria evolução da superfície de ataque. À medida que organizações expandem sua presença digital, aumentam também suas fragilidades. O ransomware se posiciona exatamente nesse ponto de tensão: onde disponibilidade, confidencialidade e integridade colapsam simultaneamente. Ele não busca apenas invadir — ele busca paralisar, pressionar e monetizar. <br /> <br />

              </p>

              <div className="bg-slate-900/50 border-l-4 border-red-600 p-6 my-8 rounded-r-xl">
                <p className="text-slate-300 italic">
                  "Quando analisamos sob a ótica da Cyber Kill Chain, percebemos que a criptografia dos dados é apenas o 'gran finale'. Antes disso, existe reconhecimento, infiltração e movimentação lateral, escalonamento de privilégios e exfiltração de dados. Ou seja, quando o ransomware aparece, o atacante já venceu várias batalhas silenciosas dentro do ambiente comprometido."
                </p>
              </div>



              <p className="text-slate-400 text-lg leading-relaxed">
                Esse modelo evoluiu rapidamente com a ascensão do <strong className="text-white">Ransomware-as-a-Service (RaaS)</strong>, transformando o cibercrime num ecossistema acessível e escalável. Grupos especializados desenvolvem o malware, enquanto afiliados executam os ataques. É o <span className="font-mono text-red-400 text-sm">"crime como serviço"</span>, plug-and-play, com suporte técnico e divisão de receitas.
              </p>
            </div>

            {/* Painel Tático (Sidebar) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#050101] border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-red-900/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Database className="w-24 h-24 text-red-600" />
                </div>

                <h4 className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4">Paradigma: Dupla Extorsão</h4>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Hoje, os atacantes não apenas criptografam os dados — eles os exfiltram. Isso cria um cenário onde a vítima enfrenta risco reputacional, jurídico e financeiro associado ao vazamento de informações sensíveis.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <ChevronRight className="w-4 h-4 text-red-600" /> ISO/IEC 27035 Response
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <ChevronRight className="w-4 h-4 text-red-600" /> MITRE ATT&CK Mapping
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-950/20 to-transparent border border-red-900/20 rounded-2xl">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <ShieldPlus className="w-5 h-5 text-red-500" /> Arquitetura de Resistência
                </h4>
                <p className="text-sm text-slate-400">
                  O ransomware é o sintoma de falhas acumuladas. Ele é o reflexo de uma arquitetura que não foi desenhada para resistir. Formar operadores que enxergam o ataque como um sistema é o ponto central da REVOLUXTI.
                </p>
              </div>
            </div>
          </div>

          {/* CITAÇÃO FINAL DE IMPACTO */}
          <div className="mt-20 text-center">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-red-900/50 to-transparent w-full mb-8"></div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              No fim do dia, ransomware não é sobre código. <br />
              <span className="text-red-600">É sobre controle.</span>
            </h3>
            <p className="text-slate-500 font-mono text-sm mt-4 uppercase tracking-[0.4em]">Controle do ambiente • Controle da informação • Controle da narrativa</p>
          </div>
        </section>



        {/* =====================================================================
            SECÇÃO 2: DUPLA EXTORSÃO & INTELIGÊNCIA DE AMEAÇAS
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">

          <div className="flex items-center gap-3 mb-12">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Evolução da Ameaça: A Dupla Extorsão</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Bloco de Texto: Dupla Extorsão & ISO 27035 */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Outro ponto crítico é a mudança de paradigma: do simples bloqueio de acesso para a chamada <strong className="text-red-500 font-bold uppercase tracking-wider text-sm">Dupla Extorsão</strong>. Hoje, os atacantes não apenas criptografam os dados — <span className="underline decoration-red-900 decoration-2 underline-offset-4 text-white">eles os exfiltram.</span>
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Isso cria um cenário onde a vítima não enfrenta apenas a indisponibilidade operacional, mas também o risco reputacional, jurídico e financeiro associado ao vazamento de informações sensíveis.
              </p>

              {/* Callout ISO 27035 */}
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl border-l-4 border-l-blue-600 mt-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-blue-500 w-6 h-6" />
                  <h4 className="text-white font-bold tracking-wide uppercase text-sm">Framework de Resposta: ISO/IEC 27035</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Aqui, o framework entra em cena, pois a resposta a incidentes precisa ser rápida, estruturada e orientada à continuidade do negócio.
                </p>
              </div>
            </div>

            {/* Painel Visual: Vetores de Extorsão */}
            <div className="bg-[#050101] border border-slate-800 rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-red-900/5">
              <div className="flex flex-col gap-6 relative z-10">

                {/* Vetor 1: Criptografia */}
                <div className="flex items-center justify-between p-5 bg-slate-900/50 border border-slate-700/50 rounded-lg group hover:border-red-500/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <Lock className="text-red-500 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm tracking-widest">Vetor 01: Criptografia</h5>
                      <span className="text-xs text-slate-500 font-mono">Indisponibilidade Operacional</span>
                    </div>
                  </div>
                  <Zap className="text-slate-600 w-5 h-5 group-hover:text-red-500 transition-colors" />
                </div>

                {/* Conector Visual */}
                <div className="flex items-center justify-center -my-3 relative z-20">
                  <div className="absolute bg-[#050101] p-2 rounded-full border border-slate-800">
                    <span className="text-red-600 text-sm font-black">+</span>
                  </div>
                </div>

                {/* Vetor 2: Exfiltração */}
                <div className="flex items-center justify-between p-5 bg-slate-900/50 border border-slate-700/50 rounded-lg group hover:border-orange-500/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <DownloadCloud className="text-orange-500 w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm tracking-widest">Vetor 02: Exfiltração</h5>
                      <span className="text-xs text-slate-500 font-mono">Vazamento & Risco Jurídico</span>
                    </div>
                  </div>
                  <AlertTriangle className="text-orange-500 w-5 h-5 group-hover:text-orange-500 transition-colors" />
                </div>

              </div>
            </div>
          </div>

          {/* =====================================================================
              BLOCO MITRE ATT&CK
          ====================================================================== */}
          <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden mt-8">
            <Crosshair className="absolute -right-20 -bottom-20 w-96 h-96 text-red-900/5 pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-900/50 text-red-500 text-xs font-mono mb-6 uppercase tracking-wider">
                  <Activity className="w-3 h-3" /> Threat Intelligence
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Mapeamento Tático: MITRE ATT&CK</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Sob a lente de inteligência de ameaças, o ransomware conecta-se diretamente ao MITRE ATT&CK, onde suas <span className="text-white font-semibold">Táticas, Técnicas e Procedimentos (TTPs)</span> são mapeadas com precisão.
                </p>

                <div className="border-l-2 border-red-800 pl-4 py-1">
                  <p className="text-slate-300 italic leading-relaxed text-sm">
                    "Isso permite que equipes defensivas antecipem movimentos, identifiquem padrões e construam estratégias mais resilientes. Em outras palavras, entender ransomware não é apenas saber como ele funciona — <strong className="text-white not-italic">é saber como ele pensa.</strong>"
                  </p> <br />
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  E aqui entra o ponto central da nossa abordagem: formar operadores que enxergam o ataque como um sistema, não como um evento isolado. O ransomware é sintoma de falhas acumuladas — credenciais expostas, sistemas desatualizados, ausência de segmentação, monitoramento ineficiente. Ele é o reflexo de uma arquitetura que não foi desenhada para resistir.
                </p>
              </div>

              {/* Mini-Matriz TTPs do Ransomware */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#020617]/50 border border-slate-800 p-5 rounded-xl hover:bg-slate-900/50 transition-colors">
                  <Terminal className="text-slate-500 w-6 h-6 mb-3" />
                  <h5 className="text-slate-300 font-mono text-xs uppercase mb-1">Execution</h5>
                  <span className="text-slate-600 text-xs block">TA0002</span>
                </div>
                <div className="bg-[#020617]/50 border border-slate-800 p-5 rounded-xl hover:bg-slate-900/50 transition-colors">
                  <ShieldAlert className="text-slate-500 w-6 h-6 mb-3" />
                  <h5 className="text-slate-300 font-mono text-xs uppercase mb-1">Defense Evasion</h5>
                  <span className="text-slate-600 text-xs block">TA0005</span>
                </div>
                <div className="bg-[#020617]/50 border border-slate-800 p-5 rounded-xl hover:bg-slate-900/50 transition-colors">
                  <Network className="text-slate-500 w-6 h-6 mb-3" />
                  <h5 className="text-slate-300 font-mono text-xs uppercase mb-1">Lateral Movement</h5>
                  <span className="text-slate-600 text-xs block">TA0008</span>
                </div>
                <div className="bg-[#020617]/50 border border-red-900/30 p-5 rounded-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-900/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  <FileWarning className="text-red-500 w-6 h-6 mb-3 relative z-10" />
                  <h5 className="text-red-400 font-mono text-xs uppercase mb-1 relative z-10">Impact</h5>
                  <span className="text-slate-500 text-xs block relative z-10">TA0040</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* =====================================================================
            CAPÍTULO 1: ANATOMIA E ECOSSISTEMA DO CIBERCRIME
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">

          <div className="flex items-center gap-3 mb-16">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 1: A Indústria do Caos</h2>
          </div>

          {/* --- BLOCO 1: DEFINIÇÃO & EVOLUÇÃO (2 Colunas) --- */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">

            {/* Coluna Esquerda: Definição Operacional */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <Target className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-bold text-white uppercase">Definição Operacional</h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg">
                Ransomware, na prática, é uma <strong className="text-white">operação coordenada de acesso, domínio e extorsão digital</strong>, onde o objetivo final é monetizar o controle do ambiente comprometido.
              </p>

              <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-red-600"></div>
                <p className="text-sm text-slate-400 font-mono mb-4 uppercase tracking-wider">O Ciclo de Ataque:</p>
                <ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-800">
                  <li className="relative pl-8 text-sm text-slate-300">
                    <span className="absolute left-0 top-1 w-[24px] h-[24px] bg-slate-900 border-2 border-red-900 rounded-full flex items-center justify-center text-[10px] text-red-500 font-bold z-10">1</span>
                    Invasão silenciosa
                  </li>
                  <li className="relative pl-8 text-sm text-slate-300">
                    <span className="absolute left-0 top-1 w-[24px] h-[24px] bg-slate-900 border-2 border-red-900 rounded-full flex items-center justify-center text-[10px] text-red-500 font-bold z-10">2</span>
                    Expansão dentro da rede
                  </li>
                  <li className="relative pl-8 text-sm text-slate-300">
                    <span className="absolute left-0 top-1 w-[24px] h-[24px] bg-slate-900 border-2 border-red-900 rounded-full flex items-center justify-center text-[10px] text-red-500 font-bold z-10">3</span>
                    Coleta de ativos críticos
                  </li>
                  <li className="relative pl-8 text-sm text-white font-bold">
                    <span className="absolute left-0 top-1 w-[24px] h-[24px] bg-red-600 border-2 border-red-900 rounded-full flex items-center justify-center text-[10px] text-white font-bold z-10 animate-pulse">4</span>
                    Pressão financeira (Extorsão)
                  </li>
                </ul>
              </div>

              <p className="text-xl font-bold italic text-slate-500 border-l-2 border-slate-700 pl-4">
                "Não começa na criptografia. Não termina no pagamento. A criptografia é só o 'gran finale'. <span className="text-red-500">O verdadeiro ativo é o controle.</span>"
              </p>
            </div>

            {/* Coluna Direita: Evolução Histórica */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <Clock className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-white uppercase">Evolução Histórica</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">A evolução segue uma lógica quase darwinista — adaptação pura ao ambiente defensivo.</p>

              {/* Timeline Cards */}
              <div className="bg-[#050101] border border-slate-800 p-5 rounded-lg hover:border-slate-600 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-slate-300 font-bold text-sm uppercase">Fase 1: Locker</h4>
                  <span className="text-[10px] px-2 py-1 bg-slate-900 text-slate-500 rounded font-mono">Baixa Sofisticação</span>
                </div>
                <p className="text-xs text-slate-500">Bloqueava a interface do sistema. Impacto superficial e de fácil contorno técnico.</p>
              </div>

              <div className="bg-[#050101] border border-slate-800 p-5 rounded-lg hover:border-orange-900/50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-orange-400 font-bold text-sm uppercase">Fase 2: Crypto</h4>
                  <span className="text-[10px] px-2 py-1 bg-orange-950/30 text-orange-500 rounded font-mono">Impacto Drástico</span>
                </div>
                <p className="text-xs text-slate-500">Criptografia real de arquivos com algoritmos robustos. Surgimento de campanhas em larga escala (ex: WannaCry).</p>
              </div>

              <div className="bg-slate-900/60 border border-red-900/50 p-5 rounded-lg relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-2 opacity-10"><Briefcase className="w-16 h-16 text-red-500" /></div>
                <div className="flex justify-between items-center mb-2 relative z-10">
                  <h4 className="text-red-500 font-bold text-sm uppercase">Fase 3: RaaS</h4>
                  <span className="text-[10px] px-2 py-1 bg-red-950 text-red-400 rounded font-mono">Profissionalização Total</span>
                </div>
                <p className="text-xs text-slate-400 relative z-10">Separação de funções (dev, afiliado, operador) e escala global. O ransomware deixa de ser "ataque" e vira <strong className="text-white">plataforma</strong>.</p>
              </div>
            </div>
          </div>

          {/* --- BLOCO 2: RaaS & GRUPOS (2 Colunas) --- */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-stretch">

            {/* Coluna Esquerda: Modelo de Negócio (RaaS) */}
            <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <Component className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold text-white uppercase">Modelo de Negócio (RaaS)</h3>
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  RaaS é o ponto onde o cibercrime começa a operar como startup. Desenvolvedores criam o ransomware, afiliados executam os ataques e o lucro é dividido (<i className="text-blue-400">revenue share</i>). Simples, escalável e brutalmente eficiente.
                </p>
                <div className="bg-black/30 p-4 rounded-lg mb-6 border border-slate-800">
                  <p className="text-xs font-mono text-slate-400">
                    Os operadores não precisam mais saber programar. Precisam saber explorar. <strong className="text-white">O foco muda de técnica para execução.</strong>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs text-slate-500 uppercase tracking-widest mb-3">Plataformas RaaS oferecem:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 p-3 rounded flex items-center gap-3 text-xs text-slate-300">
                    <Terminal className="w-4 h-4 text-slate-500" /> Painéis de Controle
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded flex items-center gap-3 text-xs text-slate-300">
                    <FileWarning className="w-4 h-4 text-slate-500" /> Geração de Payloads
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded flex items-center gap-3 text-xs text-slate-300">
                    <Activity className="w-4 h-4 text-slate-500" /> Dashboards
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded flex items-center gap-3 text-xs text-slate-300 border border-red-900/30">
                    <Users className="w-4 h-4 text-red-500" /> Suporte Técnico
                  </div>
                </div>
                <p className="text-center mt-6 text-sm text-slate-500 italic">"É SaaS… só que no lado sombrio."</p>
              </div>
            </div>

            {/* Coluna Direita: Grupos Operacionais */}
            <div className="border border-slate-800 bg-[#050101] p-8 rounded-2xl relative overflow-hidden">
              <Skull className="absolute -right-10 -top-10 w-48 h-48 text-slate-900 opacity-50 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <Network className="w-5 h-5 text-red-600" />
                  <h3 className="text-xl font-bold text-white uppercase">Big Players do Underground</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="border-l-2 border-red-600 pl-4 py-1">
                    <h4 className="text-white font-bold text-md tracking-wider">REvil</h4>
                    <p className="text-xs text-slate-400">Altamente direcionados e grandes resgates.</p>
                  </div>
                  <div className="border-l-2 border-orange-500 pl-4 py-1">
                    <h4 className="text-white font-bold text-md tracking-wider">LockBit</h4>
                    <p className="text-xs text-slate-400">Automação forte e modelo RaaS agressivo.</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4 py-1">
                    <h4 className="text-white font-bold text-md tracking-wider">BlackCat</h4>
                    <p className="text-xs text-slate-400">Estrutura moderna (Rust), foco extremo em evasão.</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Esses grupos operam com mentalidade corporativa: <strong className="text-red-500">metas, ROI e otimização de processos</strong>. Crime organizado digital. Sem filtro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- BLOCO 3: ECONOMIA & INSIGHT ESTRATÉGICO (2 Colunas) --- */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Economia do Cibercrime (Ocupa 7 colunas) */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold text-white uppercase mb-2 flex items-center gap-2">
                <Bitcoin className="w-6 h-6 text-yellow-500" /> Economia do Cibercrime
              </h3>
              <p className="text-sm text-slate-400 mb-6">O motor invisível. Ransomware só existe porque paga bem.</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg">
                  <Bitcoin className="w-5 h-5 text-slate-500 mb-2" />
                  <h5 className="text-white text-sm font-bold mb-1">1. Criptomoedas</h5>
                  <p className="text-xs text-slate-500">Meio de pagamento principal. Pseudoanonimato e facilidade global.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg">
                  <Workflow className="w-5 h-5 text-slate-500 mb-2" />
                  <h5 className="text-white text-sm font-bold mb-1">2. Mixers (Tumblers)</h5>
                  <p className="text-xs text-slate-500">Embaralham transações, dificultando o rastreamento (camada extra de anonimização).</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg">
                  <Server className="w-5 h-5 text-slate-500 mb-2" />
                  <h5 className="text-white text-sm font-bold mb-1">3. Infra Descentralizada</h5>
                  <p className="text-xs text-slate-500">Servidores na rede Tor e hospedagem resiliente a takedown.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg">
                  <Database className="w-5 h-5 text-slate-500 mb-2" />
                  <h5 className="text-white text-sm font-bold mb-1">4. Mercado de Dados</h5>
                  <p className="text-xs text-slate-500">Leilões de acesso inicial e venda de informações roubadas.</p>
                </div>
              </div>
            </div>

            {/* Insight Estratégico (Ocupa 5 colunas) */}
            <div className="lg:col-span-5 bg-red-950/20 border border-red-900/50 p-8 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-600 rounded-md">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest">Insight Estratégico</h3>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed mb-6 font-medium">
                  O ecossistema ransomware não é caótico — é <span className="text-red-500">altamente organizado</span>. Ele prospera porque:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-400">Empresas subestimam o risco real.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-400">Usuários continuam sendo o vetor crítico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-400">A superfície de ataque só cresce.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-red-900/50">
                  <p className="text-sm text-slate-500 italic font-mono uppercase">
                    "O ransomware moderno não depende só do resgate. <strong className="text-white">Ele monetiza tudo: acesso, dados, influência.</strong>"
                  </p>
                </div>
              </div>
            </div>

          </div>

        </section>



        {/* =====================================================================
            CAPÍTULO 2: ARQUITETURA DE UM ATAQUE (CYBER KILL CHAIN)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 2: Arquitetura do Ataque</h2>
          </div>

          <header className="max-w-3xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6 font-medium">
              Se o Capítulo 1 expôs o “porquê”, aqui entra o “como”. Um ataque ransomware não nasce no clique da criptografia — ele é <span className="text-red-500 underline decoration-red-900 underline-offset-4">orquestrado em camadas</span>, com disciplina quase militar.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/20 border border-red-900/30 rounded-lg">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <p className="text-xs text-red-400 font-mono uppercase tracking-widest">
                Tradução prática: ransomware é o desfecho. A intrusão começa muito antes.
              </p>
            </div>
          </header>

          {/* GRID DE ETAPAS DA KILL CHAIN */}
          <div className="space-y-12">
            
            {/* ETAPA 2.1 E 2.2 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 2.1 Reconhecimento */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all">
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-900 group-hover:text-red-950/20 transition-colors">2.1</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg"><Search className="text-red-500 w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Reconhecimento</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  O atacante observa antes de tocar. Coleta dados públicos: domínios, superfícies expostas, tecnologias e perfis de colaboradores. <strong className="text-slate-200">Objetivo: reduzir incerteza.</strong>
                </p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.2em] block mb-2">Leitura Estratégica:</span>
                  <p className="text-xs italic text-slate-500 font-mono">Quanto mais previsível o ambiente, menor o custo de ataque.</p>
                </div>
              </div>

              {/* 2.2 Weaponization */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all">
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-900 group-hover:text-red-950/20 transition-colors">2.2</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg"><Wrench className="text-red-500 w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Weaponization</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  A “arma” é montada sob medida. Payload ajustado ao alvo, stack tecnológico e defesas esperadas. <strong className="text-slate-200">Objetivo: maximizar taxa de execução.</strong>
                </p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.2em] block mb-2">Leitura Estratégica:</span>
                  <p className="text-xs italic text-slate-500 font-mono">Não é força bruta; é engenharia de precisão.</p>
                </div>
              </div>
            </div>

            {/* ETAPA 2.3 E 2.4 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 2.3 Delivery */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all">
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-900 group-hover:text-red-950/20 transition-colors">2.3</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg"><Send className="text-red-500 w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Delivery</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Entrega do vetor: e-mail, link ou serviço exposto. <strong className="text-slate-200">Objetivo: colocar o artefato dentro do perímetro lógico da vítima.</strong>
                </p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.2em] block mb-2">Leitura Estratégica:</span>
                  <p className="text-xs italic text-slate-500 font-mono">O elo humano continua sendo o canal mais eficaz.</p>
                </div>
              </div>

              {/* 2.4 Exploitation */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all">
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-900 group-hover:text-red-950/20 transition-colors">2.4</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg"><MousePointer2 className="text-red-500 w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Exploitation</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  O código ganha vida. Uma vulnerabilidade é explorada ou ação do usuário dispara a execução. <strong className="text-slate-200">Objetivo: obter execução inicial (foothold).</strong>
                </p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.2em] block mb-2">Leitura Estratégica:</span>
                  <p className="text-xs italic text-slate-500 font-mono">Aqui nasce o incidente, mesmo que ainda invisível.</p>
                </div>
              </div>
            </div>

            {/* ETAPA 2.5 E 2.6 */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 2.5 Installation */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all">
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-900 group-hover:text-red-950/20 transition-colors">2.5</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg"><HardDrive className="text-red-500 w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Installation</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  O acesso não pode depender de sorte; precisa sobreviver a reinícios. <strong className="text-slate-200">Objetivo: manter presença contínua e resiliente.</strong>
                </p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.2em] block mb-2">Leitura Estratégica:</span>
                  <p className="text-xs italic text-slate-500 font-mono">Persistência compra tempo. Quem controla o tempo, controla o ataque.</p>
                </div>
              </div>

              {/* 2.6 Command & Control (C2) */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all">
                <span className="absolute top-6 right-8 text-4xl font-black text-slate-900 group-hover:text-red-950/20 transition-colors">2.6</span>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 rounded-lg"><Radio className="text-red-500 w-6 h-6" /></div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">Command & Control</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  O ativo passa a “conversar” com a infra do atacante — canais discretos mimetizando tráfego legítimo. <strong className="text-slate-200">Objetivo: orquestrar ações remotamente.</strong>
                </p>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.2em] block mb-2">Leitura Estratégica:</span>
                  <p className="text-xs italic text-slate-500 font-mono">Sem C2, o ataque perde coordenação; com ele, vira operação contínua.</p>
                </div>
              </div>
            </div>

            {/* 2.7 Actions on Objectives (Full Width) */}
            <div className="bg-gradient-to-r from-red-950/20 to-slate-900/50 border border-red-900/40 p-10 rounded-3xl relative overflow-hidden group">
              <Skull className="absolute -right-10 -bottom-10 w-64 h-64 text-red-900/10 pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-5xl font-black text-red-900/30 mb-4 block">2.7</span>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-red-600 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.3)]"><Target className="text-white w-8 h-8" /></div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-widest">Actions on Objectives</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    É o momento de captura de valor. Movimentação lateral, exfiltração de dados e a criptografia final. <strong className="text-white">Objetivo: monetização total.</strong>
                  </p>
                  <div className="bg-black/40 border border-red-900/30 p-4 rounded-lg">
                     <p className="text-xs font-mono text-red-400 italic">
                        "A criptografia é apenas um instrumento. O verdadeiro ativo é a alavancagem sobre a vítima."
                     </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                    <Layers className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Lateral Mov.</span>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                    <DownloadCloud className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Data Exfil.</span>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-center">
                    <TrendingUp className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                    <span className="text-[10px] text-slate-500 uppercase font-mono">Privilege Esc.</span>
                  </div>
                  <div className="bg-red-600 border border-red-400 p-4 rounded-lg text-center animate-pulse">
                    <Lock className="w-5 h-5 text-white mx-auto mb-2" />
                    <span className="text-[10px] text-white uppercase font-mono font-bold">Criptografia</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL */}
          <div className="mt-24 grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <Workflow className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-widest">Interdependência</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Falha cedo, o ataque morre silencioso; sucesso contínuo, o impacto é inevitável.</p>
            </div>
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <Crosshair className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-widest">Timing de Detecção</h4>
              <p className="text-xs text-slate-500 leading-relaxed">A detecção eficaz ocorre ANTES das 'Actions on Objectives'. Depois disso, o custo de resposta dispara.</p>
            </div>
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl border-b-4 border-b-red-600">
              <ShieldPlus className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-white font-bold text-sm uppercase mb-3 tracking-widest">Ponto de Quebra</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Defender não é instalar ferramenta; é quebrar a cadeia no ponto mais fraco — nos estágios iniciais.</p>
            </div>
          </div>

          <div className="mt-16 text-right">
             <p className="text-2xl font-black text-white italic uppercase leading-none">
                Quem enxerga o fluxo, <span className="text-red-600">domina o jogo.</span>
             </p>
             <p className="text-xs font-mono text-slate-500 uppercase mt-2 tracking-[0.3em]">Quem só vê o final, já perdeu o timing.</p>
          </div>

        </section>



        {/* =====================================================================
            CAPÍTULO 3: VETORES DE ACESSO INICIAL
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 3: Vetores de Acesso Inicial</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui não tem glamour técnico — tem <strong className="text-white font-bold tracking-wide uppercase text-red-500">eficiência brutal</strong>. O acesso inicial é onde o atacante compra o “bilhete de entrada” para a sua rede. Sem isso, não existe ransomware. Com isso, o resto vira execução disciplinada.
            </p>
            <div className="bg-slate-900/50 border-l-4 border-red-600 p-6 rounded-r-xl inline-block">
              <p className="text-sm text-slate-400 font-mono">
                Na prática, o atacante não precisa ser genial; precisa ser oportunista e consistente. E oportunidade, em ambientes mal governados, é abundante.
              </p>
            </div>
          </header>

          {/* GRID DE VETORES - LINHA 1 (3 Colunas) */}
          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            
            {/* 3.1 Phishing */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex flex-col group hover:border-red-900/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-950/30 rounded border border-red-900/30">
                  <Mail className="text-red-500 w-5 h-5" />
                </div>
                <h3 className="text-white font-bold uppercase text-sm">3.1 Phishing (Social Eng.)</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 flex-grow">
                Campanha segmentada, contextual e crível. O atacante estuda o alvo, replica linguagem e explora urgência.
              </p>
              <div className="bg-slate-900/50 p-3 rounded mb-4 border border-slate-800/50">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Objetivo:</span>
                <span className="text-xs text-slate-300">Induzir ação legítima em um contexto falso (clique, download, login).</span>
              </div>
              <ul className="text-xs text-slate-500 space-y-2 mb-4 font-mono">
                <li>• Spear phishing com dados reais</li>
                <li>• Domínios semelhantes (typosquatting)</li>
                <li>• Páginas de login idênticas</li>
              </ul>
              <div className="mt-auto pt-4 border-t border-slate-800">
                <p className="text-[10px] text-red-400 font-mono uppercase">
                  <strong>Insight:</strong> O usuário não é o elo mais fraco — é o vetor mais explorado.
                </p>
              </div>
            </div>

            {/* 3.2 Vulnerabilidades */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex flex-col group hover:border-orange-900/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-950/30 rounded border border-orange-900/30">
                  <Globe className="text-orange-500 w-5 h-5" />
                </div>
                <h3 className="text-white font-bold uppercase text-sm">3.2 Exploração (RCE/VPN)</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 flex-grow">
                Serviços expostos à internet são portas — algumas mal trancadas. Falhas RCE e appliances desatualizados.
              </p>
              <div className="bg-slate-900/50 p-3 rounded mb-4 border border-slate-800/50">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Objetivo:</span>
                <span className="text-xs text-slate-300">Obter execução direta sem interação do usuário.</span>
              </div>
              <ul className="text-xs text-slate-500 space-y-2 mb-4 font-mono">
                <li>• VPN corporativa com patch atrasado</li>
                <li>• Aplicações web vulneráveis</li>
                <li>• Serviços administrativos expostos</li>
              </ul>
              <div className="mt-auto pt-4 border-t border-slate-800">
                <p className="text-[10px] text-orange-400 font-mono uppercase">
                  <strong>Insight:</strong> Patching é controle de risco. Cada atraso amplia a janela de exploração.
                </p>
              </div>
            </div>

            {/* 3.3 Credenciais */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex flex-col group hover:border-blue-900/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-950/30 rounded border border-blue-900/30">
                  <Key className="text-blue-500 w-5 h-5" />
                </div>
                <h3 className="text-white font-bold uppercase text-sm">3.3 Credenciais Vazadas</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 flex-grow">
                Usuários reutilizam senhas. Bases vazadas circulam e alimentam ataques automatizados de validação.
              </p>
              <div className="bg-slate-900/50 p-3 rounded mb-4 border border-slate-800/50">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-1">Objetivo:</span>
                <span className="text-xs text-slate-300">Acessar sistemas com credenciais válidas sem suspeita.</span>
              </div>
              <ul className="text-xs text-slate-500 space-y-2 mb-4 font-mono">
                <li>• Testes em massa (credential stuffing)</li>
                <li>• Listas filtradas e direcionadas</li>
                <li>• Combinação com MFA fatigue</li>
              </ul>
              <div className="mt-auto pt-4 border-t border-slate-800">
                <p className="text-[10px] text-blue-400 font-mono uppercase">
                  <strong>Insight:</strong> Quando o login é legítimo, o alerta chega tarde. Identidade virou perímetro.
                </p>
              </div>
            </div>

          </div>

          {/* GRID DE VETORES - LINHA 2 (2 Colunas centralizadas) */}
          <div className="grid lg:grid-cols-2 gap-6">
            
            {/* 3.4 RDP Exposto */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex flex-col lg:flex-row gap-6 group hover:border-slate-600 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <MonitorPlay className="text-slate-300 w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold uppercase text-sm">3.4 Acesso RDP Exposto</h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  RDP aberto para a internet é convite. Com senha fraca ou sem proteção, vira porta de entrada direta.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <p className="text-[10px] text-slate-300 font-mono uppercase">
                    <strong>Insight:</strong> Acesso remoto sem controle rigoroso é dívida técnica com juros compostos.
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Padrões Observados:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  <li>• Força bruta distribuída</li>
                  <li>• Falta de MFA e restrições de IP</li>
                  <li>• Uso de credenciais comprometidas</li>
                </ul>
              </div>
            </div>

            {/* 3.5 Supply Chain */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl flex flex-col lg:flex-row gap-6 group hover:border-slate-600 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-900 rounded border border-slate-700">
                    <Link2 className="text-slate-300 w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold uppercase text-sm">3.5 Supply Chain Attack</h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  O ataque não vem direto — vem por quem você confia. Fornecedores, softwares de terceiros e integrações.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <p className="text-[10px] text-slate-300 font-mono uppercase">
                    <strong>Insight:</strong> Sua segurança é tão forte quanto o elo mais frágil da sua cadeia de confiança.
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 flex flex-col justify-center">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Exemplos Típicos:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  <li>• Software legítimo adulterado</li>
                  <li>• Provedor de serviço comprometido</li>
                  <li>• Integrações com privilégios elevados</li>
                </ul>
              </div>
            </div>

          </div>

          {/* SÍNTESE DO CAPÍTULO */}
          <div className="mt-16 bg-gradient-to-r from-red-950/40 via-[#050101] to-[#050101] border border-red-900/30 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute left-0 top-0 w-2 h-full bg-red-600"></div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3">
                  <Activity className="w-5 h-5 text-red-500" /> Síntese Operacional
                </h3>
                <ul className="text-sm text-slate-300 space-y-3 pl-8 relative before:absolute before:inset-y-0 before:left-3 before:w-[1px] before:bg-slate-800">
                  <li className="relative"><span className="absolute -left-6 top-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full"></span>O acesso inicial raramente depende de técnica única — explora hábitos, falhas e exposição.</li>
                  <li className="relative"><span className="absolute -left-6 top-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full"></span>A maioria dos ataques começa com algo simples mal gerido.</li>
                  <li className="relative"><span className="absolute -left-6 top-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full"></span>Reduzir superfície de ataque aqui tem ROI imediato: menos portas, menos incidentes.</li>
                </ul>
              </div>
              
              <div className="lg:col-span-4 text-right flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
                <p className="text-lg font-bold text-slate-400 uppercase tracking-tight">Sem acesso inicial, não há ransomware.</p>
                <div className="mt-4 flex items-center justify-end gap-3 text-red-500">
                  <Clock className="w-5 h-5 animate-pulse" />
                  <p className="text-sm font-black font-mono uppercase tracking-widest">
                    O relógio começa a contar.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 4: EXECUÇÃO E PERSISTÊNCIA
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 4: Execução e Persistência</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui o ataque deixa de ser hipótese e <strong className="text-white font-bold tracking-wide uppercase text-red-500">vira presença</strong>. Após o acesso inicial, o operador precisa transformar um ponto de entrada frágil em controle contínuo. 
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#050101] border-l-2 border-slate-600 p-5 rounded-r-lg">
                <h4 className="text-white font-mono text-sm uppercase mb-2">1. O Primeiro Suspiro</h4>
                <p className="text-sm text-slate-400">Execução é o primeiro suspiro dentro do ambiente. Se falha, o ataque morre silencioso.</p>
              </div>
              <div className="bg-[#050101] border-l-2 border-red-600 p-5 rounded-r-lg">
                <h4 className="text-red-500 font-mono text-sm uppercase mb-2">2. A Garantia</h4>
                <p className="text-sm text-slate-400">Persistência é a garantia de que esse suspiro não será o último. Se funciona, o invasor ganha tempo — <strong className="text-white">e tempo, nesse jogo, é poder.</strong></p>
              </div>
            </div>
          </header>

          {/* GRID: EXECUÇÃO & PERSISTÊNCIA (2 Colunas) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            {/* 4.1 Técnicas de Execução */}
            <div className="bg-gradient-to-b from-[#050101] to-slate-950 border border-slate-800 p-8 rounded-2xl relative group hover:border-blue-900/50 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <FileCode2 className="text-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">4.1 Técnicas de Execução</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                A execução moderna privilegia discrição. Em vez de depender de binários ruidosos, o atacante usa ferramentas nativas e scripts leves para iniciar suas ações.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                  <h5 className="text-blue-400 font-mono text-xs uppercase mb-1">PowerShell</h5>
                  <p className="text-xs text-slate-400">Versátil e presente por padrão. Permite execução remota e automação sem levantar bandeiras imediatas.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                  <h5 className="text-blue-400 font-mono text-xs uppercase mb-1">Scripts (BAT, VBS, JS)</h5>
                  <p className="text-xs text-slate-400">Simples, diretos e frequentemente negligenciados por políticas básicas.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded border border-slate-800">
                  <h5 className="text-blue-400 font-mono text-xs uppercase mb-1">Loaders</h5>
                  <p className="text-xs text-slate-400">Componentes intermediários que preparam o ambiente e carregam payloads sob demanda.</p>
                </div>
              </div>

              <div className="mt-auto border-t border-slate-800 pt-5">
                <p className="text-xs text-slate-300 mb-2"><span className="text-slate-500 font-bold uppercase text-[10px]">Objetivo:</span> Executar código com o menor atrito possível e máxima evasão inicial.</p>
                <p className="text-xs text-blue-400 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Quanto mais “normal” parecer a execução, menor a chance de detecção precoce.
                </p>
              </div>
            </div>

            {/* 4.2 Persistência */}
            <div className="bg-gradient-to-b from-[#050101] to-slate-950 border border-slate-800 p-8 rounded-2xl relative group hover:border-purple-900/50 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <Repeat className="text-purple-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">4.2 Persistência</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Entrar é fácil. Permanecer é o diferencial. Persistência garante que o acesso sobreviva a reinicializações, quedas de sessão e tentativas básicas de remediação.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-slate-900/50 p-3 rounded border border-slate-800">
                  <Database className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-mono text-xs uppercase mb-1">Registry</h5>
                    <p className="text-xs text-slate-400">Chaves que disparam execução automática no boot ou login.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/50 p-3 rounded border border-slate-800">
                  <Clock className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-mono text-xs uppercase mb-1">Scheduled Tasks</h5>
                    <p className="text-xs text-slate-400">Tarefas programadas que reativam o acesso em intervalos definidos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/50 p-3 rounded border border-slate-800">
                  <Server className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-mono text-xs uppercase mb-1">Services</h5>
                    <p className="text-xs text-slate-400">Serviços instalados que operam em segundo plano com privilégios elevados.</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto border-t border-slate-800 pt-5">
                <p className="text-xs text-slate-300 mb-2"><span className="text-slate-500 font-bold uppercase text-[10px]">Objetivo:</span> Manter presença resiliente e autossustentável.</p>
                <p className="text-xs text-purple-400 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Persistência bem implementada transforma um incidente pontual em comprometimento contínuo.
                </p>
              </div>
            </div>

          </div>

          {/* GRID: LOLBINS & BYPASS (2 Colunas com Destaque Evasivo) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 4.3 LOLBins */}
            <div className="bg-[#020617] border border-slate-700/50 p-8 rounded-2xl relative overflow-hidden group">
              <Ghost className="absolute -right-8 -bottom-8 w-40 h-40 text-slate-800/30 group-hover:text-slate-700/50 transition-colors pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Ghost className="text-slate-300 w-6 h-6" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">4.3 Living off the Land</h3>
                </div>
                <h4 className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-4">A Filosofia Elegante e Perigosa</h4>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Usar o que já existe. O atacante se apoia em binários nativos do sistema operacional — ferramentas legítimas, assinadas e confiáveis — para executar ações maliciosas sem introduzir artefatos suspeitos.
                </p>
                <div className="bg-slate-900/80 backdrop-blur border border-slate-800 p-4 rounded-xl mb-6">
                  <p className="text-xs text-slate-400 font-mono">Ex: Utilitários administrativos, interpretadores de script e ferramentas de automação já presentes no ambiente (LOLBins).</p>
                </div>
                <div className="border-l-2 border-slate-600 pl-4 py-1">
                  <p className="text-xs text-slate-400 font-mono italic">
                    <strong className="text-white not-italic">Leitura Estratégica:</strong> Quando o ataque usa ferramentas legítimas, a linha entre normal e malicioso fica difusa. A detecção exige contexto, não apenas assinatura.
                  </p>
                </div>
              </div>
            </div>

            {/* 4.4 EDR Bypass */}
            <div className="bg-[#050101] border border-orange-900/30 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/50 transition-colors">
              <Radar className="absolute -right-8 -top-8 w-40 h-40 text-orange-900/10 group-hover:text-orange-900/30 transition-colors pointer-events-none animate-[spin_10s_linear_infinite]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <EyeOff className="text-orange-500 w-6 h-6" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">4.4 Bypass de EDR</h3>
                </div>
                <h4 className="text-orange-500/70 font-mono text-xs uppercase tracking-widest mb-4">O Jogo de Gato e Rato</h4>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Soluções evoluíram — os atacantes também. O foco não é “quebrar” a proteção frontalmente, mas contornar, confundir ou atrasar sua capacidade de resposta.
                </p>
                <ul className="space-y-3 text-xs text-slate-400 font-mono mb-6">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Obfuscação de código (evitar assinaturas)</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Execução em memória / Fileless (reduzir rastros)</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Fragmentação de payloads</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Exploração de lacunas de configuração</li>
                </ul>
                <div className="border-l-2 border-orange-600 pl-4 py-1 mt-auto">
                  <p className="text-xs text-orange-200 font-mono italic">
                    <strong className="text-white not-italic">Leitura Estratégica:</strong> Não existe invisibilidade perfeita — existe janela de detecção. O atacante joga para ampliá-la; o defensor precisa encurtá-la.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL (Impact Block) */}
          <div className="bg-gradient-to-br from-[#050101] via-slate-900/50 to-[#020617] border border-slate-700/50 p-10 rounded-3xl relative shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3">
                <Activity className="w-5 h-5 text-red-500" /> Síntese Operacional
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/40 p-5 rounded-xl border border-slate-800/50 text-center">
                <Workflow className="w-6 h-6 text-slate-500 mx-auto mb-3" />
                <p className="text-sm text-slate-300 font-medium">Execução sem persistência é ruído. Persistência sem execução é irrelevante. <strong className="text-white">Os dois precisam coexistir.</strong></p>
              </div>
              <div className="bg-black/40 p-5 rounded-xl border border-slate-800/50 text-center">
                <ShieldAlert className="w-6 h-6 text-slate-500 mx-auto mb-3" />
                <p className="text-sm text-slate-300 font-medium">Ambientes previsíveis e mal monitorados favorecem técnicas <strong className="text-white">silenciosas</strong>.</p>
              </div>
              <div className="bg-black/40 p-5 rounded-xl border border-slate-800/50 text-center">
                <Network className="w-6 h-6 text-slate-500 mx-auto mb-3" />
                <p className="text-sm text-slate-300 font-medium">Defesa eficiente depende de <strong className="text-white">telemetria + correlação + contexto</strong>, não apenas de bloqueio estático.</p>
              </div>
            </div>

            <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-2xl text-center">
              <p className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-3">No fim, essa fase define o ritmo do ataque:</p>
              <h4 className="text-2xl md:text-3xl font-black text-white uppercase italic">
                Ou você detecta cedo e <span className="text-red-500">corta o fluxo…</span><br/>
                <span className="text-slate-500 text-xl md:text-2xl">Ou o invasor se instala, se adapta e dita as regras.</span>
              </h4>
            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 5: ESCALAÇÃO DE PRIVILÉGIOS
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 5: Escalação de Privilégios</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Acesso inicial abre a porta. <strong className="text-white font-bold tracking-wide uppercase text-red-500">Escalação de privilégios entrega as chaves do prédio.</strong> Sem isso, o atacante fica limitado; com isso, ele passa a operar com autoridade suficiente para navegar, extrair e, no fim, paralisar o ambiente.
            </p>
            <div className="inline-flex items-center gap-3 bg-red-950/20 border border-red-900/30 px-6 py-3 rounded-lg">
              <Unlock className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-400 font-mono uppercase tracking-widest">
                É o ponto onde o jogo muda de “presença” para domínio operacional.
              </p>
            </div>
          </header>

          {/* GRID DE ESCALAÇÃO (2x2) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 5.1 Falhas Locais */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <ArrowUpRight className="w-24 h-24 text-red-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <Cpu className="text-red-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">5.1 Exploração Local</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 relative z-10">
                Mesmo após entrar, o invasor frequentemente começa com privilégios restritos. A escalada ocorre explorando vulnerabilidades no próprio sistema — falhas de configuração, permissões mal definidas ou bugs no kernel.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4 relative z-10">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Cenários Típicos:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  <li>• Serviços com permissões excessivas</li>
                  <li>• Binários executáveis com caminhos inseguros</li>
                  <li>• Vulnerabilidades locais não corrigidas</li>
                </ul>
              </div>
              <div className="mt-auto border-t border-slate-800 pt-4 relative z-10">
                <p className="text-[10px] text-red-400 font-mono uppercase">
                  <strong>Insight:</strong> Hardening negligenciado transforma qualquer acesso básico em controle elevado.
                </p>
              </div>
            </div>

            {/* 5.2 Token Impersonation */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-blue-900/50 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <VenetianMask className="w-24 h-24 text-blue-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <VenetianMask className="text-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">5.2 Token Impersonation</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 relative z-10">
                No Windows, tokens representam identidades. Se o atacante acessa ou manipula esses tokens, ele pode “assumir” a identidade de outro usuário — inclusive administradores.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4 relative z-10">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Padrões Comuns:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  <li>• Sequestro de sessões ativas</li>
                  <li>• Abuso de processos com privilégios elevados</li>
                  <li>• Reutilização de tokens válidos</li>
                </ul>
              </div>
              <div className="mt-auto border-t border-slate-800 pt-4 relative z-10">
                <p className="text-[10px] text-blue-400 font-mono uppercase">
                  <strong>Insight:</strong> Identidade é poder. Se o controle de identidade falha, o perímetro colapsa.
                </p>
              </div>
            </div>

            {/* 5.3 Dump de Credenciais (LSASS) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-orange-900/50 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database className="w-24 h-24 text-orange-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <Database className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">5.3 Dump do LSASS</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 relative z-10">
                O processo LSASS armazena credenciais em memória para autenticação. Se comprometido, vira uma mina de ouro para o atacante extrair senhas, hashes e tickets.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4 relative z-10">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">O atacante busca:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  <li>• Credenciais em texto claro</li>
                  <li>• Hashes NTLM para reutilização</li>
                  <li>• Tickets Kerberos para movimentação lateral</li>
                </ul>
              </div>
              <div className="mt-auto border-t border-slate-800 pt-4 relative z-10">
                <p className="text-[10px] text-orange-400 font-mono uppercase">
                  <strong>Insight:</strong> Proteger credenciais em memória é linha de frente contra escalada e propagação.
                </p>
              </div>
            </div>

            {/* 5.4 Mimikatz */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-purple-900/50 transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileKey className="w-24 h-24 text-purple-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <FileKey className="text-purple-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">5.4 Arsenal (Mimikatz)</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 relative z-10">
                Ferramentas especializadas aceleram o processo. O Mimikatz é referência por sua capacidade de interagir diretamente com mecanismos de autenticação do Windows.
              </p>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4 relative z-10">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Função Prática:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono">
                  <li>• Extração de credenciais</li>
                  <li>• Manipulação de tokens</li>
                  <li>• Abuso de autenticação</li>
                </ul>
              </div>
              <div className="mt-auto border-t border-slate-800 pt-4 relative z-10">
                <p className="text-[10px] text-purple-400 font-mono uppercase">
                  <strong>Insight:</strong> Não é a ferramenta, mas a eficiência. Reduz tempo e aumenta o impacto.
                </p>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL (Impact Block) */}
          <div className="bg-slate-900/30 border border-slate-800 p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute left-0 top-0 w-2 h-full bg-red-600"></div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3">
                  <Activity className="w-5 h-5 text-red-500" /> Síntese Operacional
                </h3>
                <ul className="text-sm text-slate-300 space-y-4 font-mono">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-red-500 shrink-0" />
                    <span>Sem privilégios, o atacante é limitado. <strong className="text-white">Com privilégios, ele escala.</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Key className="w-5 h-5 text-red-500 shrink-0" />
                    <span>Credenciais são o ativo mais valioso dentro de uma rede comprometida.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-red-500 shrink-0" />
                    <span>Escalação acelera as fases seguintes: movimentação lateral, exfiltração e criptografia.</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:col-span-5 flex flex-col justify-center bg-[#050101] p-8 rounded-2xl border border-slate-800/50 shadow-2xl">
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-4 font-bold">A Lógica Brutal:</p>
                <p className="text-2xl font-black text-white italic uppercase leading-tight">
                  Quem controla privilégios… <br/>
                  <span className="text-red-600 block mt-2">controla o ambiente.</span>
                </p>
              </div>
            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 6: MOVIMENTO LATERAL
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 6: Movimento Lateral</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui o ataque ganha escala. Se a escalação de privilégios entrega poder, <strong className="text-white font-bold tracking-wide uppercase text-red-500">o movimento lateral distribui esse poder pela rede</strong>. O invasor deixa de ser um ponto isolado e passa a operar como um organismo dentro do ambiente.
            </p>
            <div className="bg-gradient-to-r from-slate-900 to-transparent border-l-4 border-red-600 p-6 rounded-r-xl inline-block shadow-lg">
              <p className="text-lg text-slate-300 font-mono italic">
                "Movimento lateral não é barulho. <span className="text-red-500 font-bold not-italic">É expansão silenciosa.</span>"
              </p>
            </div>
          </header>

          {/* GRID DE EXPANSÃO (Conectado por linhas visuais) */}
          <div className="relative mb-16">
            
            {/* Linha de conexão de fundo (Desktop) */}
            <div className="hidden lg:block absolute left-[50%] top-10 bottom-10 w-[1px] bg-slate-800/50 z-0"></div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              
              {/* 6.1 SMB / PsExec */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all lg:mr-6">
                <div className="hidden lg:block absolute right-[-24px] top-1/2 w-[24px] h-[1px] bg-slate-800 group-hover:bg-red-500 transition-colors"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Share2 className="text-slate-400 w-6 h-6 group-hover:text-red-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">6.1 SMB & PsExec</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Protocolos administrativos são atalhos naturais. SMB permite acesso a compartilhamentos; PsExec operacionaliza execução remota com eficiência.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Padrões Observados:</span>
                  <ul className="text-xs text-slate-400 space-y-2 font-mono">
                    <li>• Execução remota sem interação</li>
                    <li>• Transferência de payloads via SMB</li>
                    <li>• Uso de contas administrativas reutilizadas</li>
                  </ul>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-300 font-mono uppercase">
                    <strong>Insight:</strong> O que foi criado para administração vira vetor de ataque quando não há controle granular.
                  </p>
                </div>
              </div>

              {/* 6.2 WMI e WinRM */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all lg:ml-6 lg:mt-12">
                <div className="hidden lg:block absolute left-[-24px] top-1/2 w-[24px] h-[1px] bg-slate-800 group-hover:bg-blue-500 transition-colors"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Terminal className="text-slate-400 w-6 h-6 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">6.2 WMI e WinRM</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Interfaces de gerenciamento remoto permitem automação legítima — e abuso silencioso com baixo ruído.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Ferramentas de Automação:</span>
                  <ul className="text-xs text-slate-400 space-y-2 font-mono">
                    <li>• <strong className="text-blue-400">WMI:</strong> Execução remota altamente furtiva</li>
                    <li>• <strong className="text-blue-400">WinRM:</strong> Controle via protocolos padrão do Windows</li>
                  </ul>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-300 font-mono uppercase">
                    <strong>Insight:</strong> Quanto mais o ataque se parece com administração normal, menor a chance de detecção.
                  </p>
                </div>
              </div>

              {/* 6.3 Pass-the-Hash / Pass-the-Ticket */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all lg:mr-6">
                <div className="hidden lg:block absolute right-[-24px] top-1/2 w-[24px] h-[1px] bg-slate-800 group-hover:bg-orange-500 transition-colors"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <ArrowRightLeft className="text-slate-400 w-6 h-6 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">6.3 Pass-the-Hash / Ticket</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Aqui o atacante para de “quebrar senha” e começa a reutilizar autenticação. Autentica-se sem conhecer a senha em texto claro.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Técnicas de Reutilização:</span>
                  <ul className="text-xs text-slate-400 space-y-2 font-mono">
                    <li>• <strong className="text-orange-400">PtH:</strong> Uso direto de hashes NTLM</li>
                    <li>• <strong className="text-orange-400">PtT:</strong> Reutilização de tickets Kerberos válidos</li>
                  </ul>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-300 font-mono uppercase">
                    <strong>Insight:</strong> Se credenciais foram expostas, a rede inteira entra em risco. O atacante reutiliza o que já existe.
                  </p>
                </div>
              </div>

              {/* 6.4 Pivoting */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-600 transition-all lg:ml-6 lg:mt-12">
                <div className="hidden lg:block absolute left-[-24px] top-1/2 w-[24px] h-[1px] bg-slate-800 group-hover:bg-purple-500 transition-colors"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <GitBranch className="text-slate-400 w-6 h-6 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">6.4 Pivoting de Rede</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  O atacante usa um sistema comprometido como "ponto de salto" (Pivot) para ultrapassar barreiras internas e alcançar novos segmentos de rede.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Cenários Típicos:</span>
                  <ul className="text-xs text-slate-400 space-y-2 font-mono">
                    <li>• Acesso a sub-redes restritas</li>
                    <li>• Exploração de relações de confiança (Trusts)</li>
                    <li>• Encadeamento de múltiplos hosts comprometidos</li>
                  </ul>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-300 font-mono uppercase">
                    <strong>Insight:</strong> Segmentação fraca transforma a rede inteira num efeito dominó imparável.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SÍNTESE OPERACIONAL (Destaque Dramático) */}
          <div className="bg-[#020617] border border-slate-800 p-10 rounded-3xl relative overflow-hidden group hover:border-red-900/50 transition-colors">
            <Waypoints className="absolute -right-10 -bottom-10 w-64 h-64 text-slate-800/20 group-hover:text-red-900/10 transition-colors pointer-events-none" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                  <Activity className="w-5 h-5 text-red-500" /> Síntese Operacional
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
                    <Waypoints className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm text-slate-300">Movimento lateral transforma acesso local em <strong className="text-white">comprometimento sistêmico</strong>.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
                    <Key className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm text-slate-300">Credenciais válidas são <strong className="text-white">mais perigosas</strong> que exploits complexos.</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
                    <Terminal className="w-5 h-5 text-slate-500 shrink-0" />
                    <span className="text-sm text-slate-300">Protocolos legítimos são os vetores <strong className="text-white">mais difíceis de detectar</strong>.</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 text-right flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-8">
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-4 font-bold">A Dinâmica Implacável:</p>
                <p className="text-lg text-slate-300 italic leading-relaxed mb-4">
                  O invasor não precisa correr — ele só precisa não ser visto enquanto se espalha. Quando você percebe, ele já não está em um ponto…
                </p>
                <h4 className="text-3xl lg:text-4xl font-black text-white uppercase animate-pulse">
                  Ele está em <span className="text-red-600">todos.</span>
                </h4>
              </div>
            </div>
          </div>

        </section>



        {/* =====================================================================
            CAPÍTULO 7: EXFILTRAÇÃO DE DADOS
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 7: Exfiltração de Dados</h2>
          </div>

          <header className="max-w-4xl mb-16 relative">
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-orange-500 to-transparent"></div>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui o jogo muda de eixo. Até então, o atacante construiu acesso, ampliou privilégios e se espalhou. <strong className="text-white font-bold tracking-wide uppercase text-red-500">Agora ele captura valor.</strong> 
            </p>
            <p className="text-lg text-slate-400 mb-6">
              Exfiltração não é “copiar arquivos”; é retirar ativos estratégicos sem ser percebido, preservando a capacidade de negar, pressionar e negociar.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#050101] border border-red-900/50 px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(220,38,38,0.1)]">
              <Siren className="w-6 h-6 text-red-500 animate-pulse" />
              <p className="text-sm text-white font-mono uppercase tracking-widest">
                É o momento em que o <span className="text-red-500">risco técnico</span> vira <span className="text-orange-500">risco de negócio</span>.
              </p>
            </div>
          </header>

          {/* GRID: STEALTH & STAGING (Design Focado em Logística de Dados) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 7.1 Técnicas Stealth */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
              {/* Efeito visual de dados a sair */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900">
                <div className="h-full bg-blue-500/50 w-1/4 animate-[translateX_2s_infinite]"></div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <GlobeLock className="text-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">7.1 Técnicas Stealth</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Exfiltrar sem acionar alarmes exige mimetizar o tráfego legítimo. O atacante usa canais comuns para esconder o extraordinário.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 border-l-2 border-l-blue-500">
                  <h4 className="text-blue-400 font-mono text-xs uppercase mb-1">DNS Tunneling</h4>
                  <p className="text-xs text-slate-400">Dados fragmentados e embutidos em consultas/respostas. Atravessa firewalls com aparência de resolução de nomes (DNS é onipresente).</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 border-l-2 border-l-blue-500">
                  <h4 className="text-blue-400 font-mono text-xs uppercase mb-1">HTTPS (Exfiltração Cifrada)</h4>
                  <p className="text-xs text-slate-400">Tráfego criptografado sobre portas padrão (443). Mistura-se ao fluxo normal da empresa. Sem inspeção, é um corredor silencioso.</p>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-4">
                <p className="text-xs text-blue-400 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Quando tudo parece normal, só a visibilidade profunda (telemetria + contexto) separa operação legítima de vazamento.
                </p>
              </div>
            </div>

            {/* 7.2 Compressão e Staging */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <Archive className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">7.2 Compressão e Staging</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Antes de sair, os dados são preparados. Exfiltração eficiente é logística tática.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Box className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-mono text-xs uppercase mb-1">Staging</h4>
                    <p className="text-xs text-slate-500">Consolidação em pontos intermediários (servidores de alto privilégio). Reduz dispersão e facilita o envio.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Archive className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-mono text-xs uppercase mb-1">Compressão</h4>
                    <p className="text-xs text-slate-500">Empacotamento para diminuir volume, acelerar transferência e ofuscar conteúdo (frequentemente com cifra adicional).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-mono text-xs uppercase mb-1">Fragmentação</h4>
                    <p className="text-xs text-slate-500">Divisão em partes menores para envio gradual, evitando disparar alertas de picos suspeitos.</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-orange-400 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Não é só “o que” sai, mas “como” sai. Padrões de volume, frequência e destino contam a história.
                </p>
              </div>
            </div>

          </div>

          {/* 7.3 DOUBLE EXTORTION (Destaque Central) */}
          <div className="bg-gradient-to-r from-red-950/30 via-[#050101] to-[#050101] border border-red-900/40 p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
            <CloudLightning className="absolute -right-10 -bottom-10 w-64 h-64 text-red-900/10 pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-4 bg-red-600 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Skull className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">7.3 Double Extortion</h3>
                <p className="text-red-400 font-mono text-xs tracking-widest uppercase mt-1">Criptografia + Vazamento</p>
              </div>
            </div>

            <p className="text-lg text-slate-300 mb-8 max-w-3xl relative z-10">
              O ransomware moderno abandonou a dependência exclusiva da criptografia. A estratégia dominante é a dupla extorsão: <strong className="text-white">Exfiltrar dados, Criptografar sistemas e Ameaçar publicação</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-slate-900/80 backdrop-blur border border-slate-800 p-6 rounded-2xl">
                <h4 className="text-white font-bold uppercase text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Cenário 1: Há Backup
                </h4>
                <p className="text-sm text-slate-400">A criptografia perde força — <strong className="text-red-400">mas o vazamento continua sendo arma.</strong> A extorsão foca no impacto legal e reputacional.</p>
              </div>
              <div className="bg-slate-900/80 backdrop-blur border border-red-900/50 p-6 rounded-2xl">
                <h4 className="text-white font-bold uppercase text-sm mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" /> Cenário 2: Não Há Backup
                </h4>
                <p className="text-sm text-slate-400">O caos é total. A pressão operacional (paralisação) soma-se ao risco reputacional e legal. Extorsão máxima.</p>
              </div>
            </div>

            <div className="mt-8 border-l-4 border-red-600 pl-6 relative z-10">
              <p className="text-sm text-slate-300 font-mono italic">
                <strong>Leitura Estratégica:</strong> O ativo não é o arquivo — é a exposição potencial. Regulatório, reputação, vantagem competitiva: tudo entra na conta.
              </p>
            </div>
          </div>

          {/* SINAIS DE DETECÇÃO & IMPACTO (Interface Tipo Terminal / SOC Dashboard) */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            
            {/* Terminal de Detecção (7 Colunas) */}
            <div className="lg:col-span-7 bg-[#0a0a0a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-mono text-slate-400 uppercase">SOC_Detection_Rules.log</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm text-emerald-500/80 space-y-4 flex-grow bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 to-transparent">
                <p className="text-slate-500 mb-2">{'// Sinais e Superfícies de Detecção (Visão Prática)'}</p>
                <div className="flex gap-3"><span className="text-red-500">ERR_01</span> <p>Aumento atípico de consultas DNS com padrões incomuns (payload em TXT/A records).</p></div>
                <div className="flex gap-3"><span className="text-red-500">ERR_02</span> <p>Transferências persistentes em HTTPS para destinos não habituais ou IPs sem reputação.</p></div>
                <div className="flex gap-3"><span className="text-red-500">ERR_03</span> <p>Criação de arquivos compactados volumosos (.zip, .rar, .7z) em hosts críticos.</p></div>
                <div className="flex gap-3"><span className="text-red-500">ERR_04</span> <p>Movimentação maciça de dados entre segmentos que normalmente não se comunicam.</p></div>
                <div className="flex gap-3"><span className="text-red-500">ERR_05</span> <p>Picos de tráfego de saída (Outbound) fora do horário operacional.</p></div>
                
                <div className="mt-6 pt-4 border-t border-emerald-900/30 text-emerald-400">
                  <span className="text-slate-500">{'/*'}</span> Detecção depende de baseline. Sem referência de "normal", não existe "anômalo". <span className="text-slate-500">{'*/'}</span>
                </div>
              </div>
            </div>

            {/* Impacto de Negócio (5 Colunas) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-orange-500" /> Impacto de Negócio
              </h3>
              
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex items-center gap-4 hover:border-slate-600 transition-colors">
                <Scale className="w-8 h-8 text-slate-500" />
                <div>
                  <h5 className="text-white font-bold text-sm uppercase">LGPD & Compliance</h5>
                  <p className="text-xs text-slate-400">Risco de sanções milionárias e notificações obrigatórias.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex items-center gap-4 hover:border-slate-600 transition-colors">
                <Users className="w-8 h-8 text-slate-500" />
                <div>
                  <h5 className="text-white font-bold text-sm uppercase">Reputação</h5>
                  <p className="text-xs text-slate-400">Perda de confiança irreversível de clientes, mercado e parceiros.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex items-center gap-4 hover:border-slate-600 transition-colors">
                <Activity className="w-8 h-8 text-slate-500" />
                <div>
                  <h5 className="text-white font-bold text-sm uppercase">Operação</h5>
                  <p className="text-xs text-slate-400">Paralisação contínua, retrabalho massivo e custos indiretos.</p>
                </div>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-4 rounded-xl flex items-center gap-4">
                <Bitcoin className="w-8 h-8 text-red-500" />
                <div>
                  <h5 className="text-white font-bold text-sm uppercase">Negociação</h5>
                  <p className="text-xs text-slate-400">Pressão severa para pagamento sob múltiplas frentes de ameaça.</p>
                </div>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL (Final Punch) */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center justify-center p-10 bg-gradient-to-b from-transparent to-[#020617] w-full border-b-2 border-red-600">
              <FileDigit className="w-12 h-12 text-slate-700 mb-6" />
              <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
                Exfiltração bem-sucedida transforma incidente técnico em crise estratégica. Canais legítimos são os melhores disfarces. <strong className="text-white">Preparação é metade do sucesso; evasão é a outra metade.</strong>
              </p>
              
              <p className="text-sm text-red-500 font-mono uppercase tracking-[0.3em] mb-4">A Lógica é Implacável:</p>
              
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                Não é sobre impedir que um arquivo saia — <br/>
                <span className="text-red-600">É sobre impedir que o seu negócio vire moeda de troca.</span>
              </h3>
            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 8: CRIPTOGRAFIA E EXECUÇÃO DO PAYLOAD
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 8: Criptografia e Execução</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/50 border border-red-900 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest">System Override Initiated</span>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Chegamos ao clímax operacional. Tudo o que foi construído até aqui converge para um único objetivo: <strong className="text-white font-bold tracking-wide uppercase text-red-500">negar acesso e impor urgência</strong>.
            </p>
            <p className="text-lg text-slate-400">
              A criptografia não é só técnica — é instrumento de pressão. Executada no timing certo, com privilégios elevados e visibilidade mínima, ela transforma o ambiente em refém.
            </p>
          </header>

          {/* 8.1 FLUXO INTERNO DA CRIPTOGRAFIA (Timeline Horizontal) */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <LockKeyhole className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">8.1 Funcionamento Interno (Kill Chain do Payload)</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 relative">
              {/* Linha conectora desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -z-10"></div>
              
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 absolute -top-4 left-6">1</div>
                <Search className="w-6 h-6 text-slate-500 mb-4 mt-2" />
                <h4 className="text-white font-bold text-sm uppercase mb-2">Descoberta</h4>
                <p className="text-xs text-slate-400">Identifica ativos de alto valor: DBs, documentos, shares de rede.</p>
              </div>
              
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-orange-700 flex items-center justify-center text-xs font-bold text-orange-500 absolute -top-4 left-6">2</div>
                <ZapOff className="w-6 h-6 text-orange-500 mb-4 mt-2" />
                <h4 className="text-white font-bold text-sm uppercase mb-2">Bloqueio</h4>
                <p className="text-xs text-slate-400">Kill de processos que mantêm arquivos abertos para liberar a gravação.</p>
              </div>

              <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl relative">
                <div className="absolute inset-0 bg-red-500/5 animate-pulse rounded-xl"></div>
                <div className="w-8 h-8 rounded-full bg-red-900 border-2 border-red-500 flex items-center justify-center text-xs font-bold text-white absolute -top-4 left-6 z-10">3</div>
                <Lock className="w-6 h-6 text-red-500 mb-4 mt-2 relative z-10" />
                <h4 className="text-white font-bold text-sm uppercase mb-2 relative z-10">Criptografia</h4>
                <p className="text-xs text-slate-300 relative z-10">Encriptação em lote (local e em recursos de rede).</p>
              </div>

              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative">
                <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 absolute -top-4 left-6">4</div>
                <FileX className="w-6 h-6 text-slate-500 mb-4 mt-2" />
                <h4 className="text-white font-bold text-sm uppercase mb-2">Renomeação</h4>
                <p className="text-xs text-slate-400">Substituição por extensões próprias do ataque (.locked, .encrypted).</p>
              </div>
            </div>
            <div className="mt-4 text-right">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest"><strong className="text-red-500">Objetivo:</strong> Maximizar indisponibilidade no menor tempo possível.</p>
            </div>
          </div>

          {/* GRID: ALGORITMOS & ESTRATÉGIAS */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 8.2 Algoritmos Comuns (Painel Matemático) */}
            <div className="bg-[#020617] border border-slate-800 rounded-2xl overflow-hidden flex flex-col group">
              <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex items-center gap-3">
                <Braces className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">8.2 Motor Híbrido (AES + RSA)</h3>
              </div>
              <div className="p-8 flex-grow relative">
                <p className="text-sm text-slate-400 mb-6">Ransomware moderno usa criptografia híbrida para equilibrar velocidade extrema com controle absoluto de chaves.</p>
                
                {/* Fórmula Visual */}
                <div className="bg-[#050101] border border-slate-700 rounded-lg p-6 mb-6 font-mono text-center shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <span className="text-slate-300 text-lg md:text-xl flex flex-wrap justify-center items-center gap-2">
                    <span className="text-white font-bold">C</span> = 
                    <span className="text-blue-400">AES<sub className="text-[10px] text-slate-500">k</sub></span>(M), 
                    <span className="text-white font-bold ml-4">k</span> = 
                    <span className="text-orange-400">RSA<sub className="text-[10px] text-slate-500">pub</sub></span>(k<sub className="text-[10px] text-slate-500">s</sub>)
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                    <p className="text-xs text-slate-300"><strong className="text-blue-400">AES (Simétrico):</strong> Rápido para criptografar grandes volumes de dados (O Payload).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5"></div>
                    <p className="text-xs text-slate-300"><strong className="text-orange-400">RSA (Assimétrico):</strong> Protege a chave de sessão (kₛ), impedindo recuperação sem a chave privada do atacante.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 p-4 border-t border-slate-800">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong>Insight:</strong> Quebrar a criptografia não é viável. O foco defensivo é prevenção e resiliência.
                </p>
              </div>
            </div>

            {/* 8.3 Partial Encryption & 8.4 Backups */}
            <div className="flex flex-col gap-8">
              
              {/* 8.3 Partial Encryption */}
              <div className="bg-[#050101] border border-slate-800 p-6 rounded-2xl relative group">
                <div className="flex items-center gap-3 mb-4">
                  <Timer className="w-5 h-5 text-red-500" />
                  <h3 className="text-md font-bold text-white uppercase tracking-wider">8.3 Partial Encryption</h3>
                </div>
                <p className="text-xs text-slate-400 mb-6">Criptografar tudo pode ser lento. Operadores avançados otimizam impacto focando no que destrói o arquivo mais rápido.</p>
                
                {/* Visual Representation of Partial Encryption */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-16 rounded border border-slate-700 bg-slate-900 relative overflow-hidden flex flex-col">
                    <div className="h-1/3 w-full bg-red-600/80 border-b border-red-500 relative flex items-center justify-center">
                      <Lock className="w-3 h-3 text-white" />
                    </div>
                    <div className="h-2/3 w-full bg-transparent flex flex-col justify-evenly px-2">
                      <div className="h-[1px] w-full bg-slate-700"></div>
                      <div className="h-[1px] w-full bg-slate-700"></div>
                      <div className="h-[1px] w-3/4 bg-slate-700"></div>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1 font-mono">
                    <li>• Cifra apenas blocos iniciais/finais</li>
                    <li>• Prioriza bancos de dados (DBs)</li>
                    <li>• Ataca shares de rede primeiro</li>
                  </ul>
                </div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-widest border-t border-slate-800 pt-3">Impacto não depende de volume — depende de atingir o que dói primeiro.</p>
              </div>

              {/* 8.4 Exclusão de Backups */}
              <div className="bg-red-950/10 border border-red-900/30 p-6 rounded-2xl relative group hover:bg-red-950/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <h3 className="text-md font-bold text-white uppercase tracking-wider">8.4 Extermínio de Backups</h3>
                </div>
                <p className="text-xs text-slate-400 mb-4">Antes da criptografia, o atacante corta as pontes de salvação locais para garantir a dependência do resgate.</p>
                <div className="bg-black/50 border border-red-900/50 p-3 rounded font-mono text-[10px] text-red-400 mb-4 flex items-center gap-2">
                  <Terminal className="w-3 h-3 shrink-0" />
                  <code>vssadmin.exe Delete Shadows /All /Quiet</code>
                </div>
                <p className="text-[10px] text-red-300 font-mono uppercase tracking-widest border-t border-red-900/30 pt-3">
                  Backup só é backup se estiver isolado, testado e imutável. O resto é ilusão operacional.
                </p>
              </div>

            </div>
          </div>

          {/* SÍNTESE OPERACIONAL (Final Punch - "O Ambiente Silencia") */}
          <div className="relative mt-24">
            <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-10"></div>
            
            <div className="bg-gradient-to-b from-[#0a0202] to-[#050101] border border-red-900/50 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
              <Skull className="absolute right-0 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] text-red-900/5 pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-8">
                  <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" /> Síntese Operacional
                </h3>
                
                <div className="space-y-6 mb-12">
                  <p className="text-lg text-slate-300 border-l-2 border-red-600 pl-4">Criptografia é o meio; <strong className="text-white">pressão é o fim</strong>.</p>
                  <p className="text-lg text-slate-300 border-l-2 border-red-600 pl-4">Algoritmos robustos tornam a recuperação via quebra <strong className="text-white">impraticável</strong>.</p>
                  <p className="text-lg text-slate-300 border-l-2 border-red-600 pl-4">Sem backups resilientes, a negociação deixa de ser opção e <strong className="text-white">vira imposição</strong>.</p>
                </div>

                <div className="mt-12 pt-8 border-t border-red-900/30">
                  <p className="text-sm text-red-500 font-mono uppercase tracking-[0.3em] mb-4">No fim, é simples e brutal:</p>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                    Quando o payload executa, <br/>
                    <span className="text-slate-500 text-3xl md:text-4xl">o ambiente silencia —</span><br/>
                    <span className="text-red-600 inline-block mt-2 border-b-4 border-red-600 pb-2 animate-pulse">e o atacante dita o ritmo.</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

        </section>



        {/* =====================================================================
            CAPÍTULO 9: COMMAND & CONTROL (C2)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-cyan-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 9: Command & Control (C2)</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <div className="flex items-center gap-4 mb-6">
               <div className="relative flex h-4 w-4">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
               </div>
               <span className="text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase">Uplink Established // Secure Channel</span>
            </div>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Se a execução acende a máquina, <strong className="text-cyan-400 font-bold tracking-wide uppercase">o C2 é o sistema nervoso</strong>. É aqui que o ataque deixa de ser evento e vira operação contínua.
            </p>
            <p className="text-lg text-slate-400">
              Sem C2, o invasor age às cegas; com C2, ele orquestra, ajusta e escala em tempo real. É comando, controle e inteligência fluindo por canais que tentam se parecer com o “normal”.
            </p>
          </header>

          {/* GRID: BEACONING & EVASÃO */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 9.1 Comunicação Remota (Beaconing) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-900/50 transition-colors">
              <Radar className="absolute -right-10 -bottom-10 w-48 h-48 text-cyan-900/10 pointer-events-none group-hover:text-cyan-900/20 transition-colors animate-[spin_4s_linear_infinite]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Wifi className="text-cyan-500 w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">9.1 Comunicação (Beaconing)</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  O ativo comprometido comunica-se periodicamente com infraestrutura externa para carregar instruções, exfiltrar dados e sincronizar ações.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 flex items-start gap-3">
                    <Activity className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-white font-mono text-xs uppercase mb-1">Beaconing & Jitter</h4>
                      <p className="text-xs text-slate-400">Conexões em intervalos definidos (fixos ou com jitter/variação para despistar).</p>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 flex items-start gap-3">
                    <Route className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-white font-mono text-xs uppercase mb-1">Perfis de Tráfego</h4>
                      <p className="text-xs text-slate-400">Imitam aplicações legítimas e usam canais cifrados (HTTPS) para evitar inspeção.</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-2 border-cyan-600 pl-4">
                  <p className="text-xs text-cyan-200 font-mono italic">
                    <strong className="text-white not-italic">Leitura Estratégica:</strong> C2 bem implementado não “grita”; ele sussurra no mesmo tom do seu tráfego diário.
                  </p>
                </div>
              </div>
            </div>

            {/* 9.2 Técnicas de Evasão */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <Shuffle className="text-purple-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">9.2 Evasão Dinâmica</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                O C2 moderno não fica parado — ele se adapta para sobreviver a bloqueios e investigações. A infraestrutura "move-se".
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-purple-900/30">
                  <Globe className="w-5 h-5 text-purple-400 mb-2" />
                  <h4 className="text-white font-mono text-xs uppercase mb-2">Domain Fronting</h4>
                  <p className="text-xs text-slate-500">O tráfego aparenta ir para um domínio confiável, mas o destino real é outro, oculto na camada de aplicação. Confunde firewalls.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-purple-900/30">
                  <Repeat className="w-5 h-5 text-purple-400 mb-2" />
                  <h4 className="text-white font-mono text-xs uppercase mb-2">Fast Flux</h4>
                  <p className="text-xs text-slate-500">Rotação rápida de IPs associados a um domínio. Distribui o risco e inutiliza listas de bloqueio estáticas (Blacklists).</p>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-purple-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Bloquear um IP é tática; o C2 responde com movimento. A defesa precisa pensar em comportamento.
                </p>
              </div>
            </div>

          </div>

          {/* 9.3 INFRAESTRUTURA DESCENTRALIZADA */}
          <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl mb-16 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-900/20 blur-[50px] rounded-full"></div>
            
            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-4">
                  <Satellite className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">9.3 Infra Descentralizada</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Em vez de um servidor central facilmente derrubável (Single Point of Failure), o atacante distribui funções e redundâncias.
                </p>
                <div className="bg-[#050101] p-4 rounded-xl border border-emerald-900/30">
                  <p className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest leading-relaxed">
                    Quanto mais descentralizado, maior a resiliência do ataque — e maior o custo de erradicação.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg text-center group hover:border-emerald-900/50 transition-colors">
                  <Network className="w-6 h-6 text-slate-600 group-hover:text-emerald-500 mx-auto mb-2 transition-colors" />
                  <h5 className="text-xs text-white font-bold uppercase mb-1">Múltiplos Nós</h5>
                  <p className="text-[10px] text-slate-500">Papéis distintos: comando, relay e coleta de dados.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg text-center group hover:border-emerald-900/50 transition-colors">
                  <Waypoints className="w-6 h-6 text-slate-600 group-hover:text-emerald-500 mx-auto mb-2 transition-colors" />
                  <h5 className="text-xs text-white font-bold uppercase mb-1">Redes Mesh</h5>
                  <p className="text-[10px] text-slate-500">Redes distribuídas que encaminham tráfego entre si internamente.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg text-center group hover:border-emerald-900/50 transition-colors">
                  <Layers className="w-6 h-6 text-slate-600 group-hover:text-emerald-500 mx-auto mb-2 transition-colors" />
                  <h5 className="text-xs text-white font-bold uppercase mb-1">Serviços Legítimos</h5>
                  <p className="text-[10px] text-slate-500">Uso de APIs públicas (Telegram, AWS, etc) como camadas intermediárias.</p>
                </div>
              </div>
            </div>
          </div>

          {/* PAINEL SIGINT (Signals Intelligence) - DETECÇÃO */}
          <div className="bg-[#020617] border border-cyan-900/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.05)] mb-16">
             <div className="bg-cyan-950/40 px-6 py-4 border-b border-cyan-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Radio className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm">SIGINT // Sinais e Superfícies de Detecção</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-cyan-500 font-mono uppercase animate-pulse">Monitoring Active</span>
                </div>
             </div>
             
             <div className="p-0 grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-cyan-900/30">
                {/* Rules List */}
                <div className="lg:col-span-3 p-6 space-y-4 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px]">
                  <div className="flex gap-4 items-start group">
                    <span className="text-cyan-500 font-mono text-xs mt-0.5 group-hover:text-white transition-colors">[FREQ_01]</span>
                    <p className="text-sm text-slate-300 font-mono">Padrões de beaconing (periodicidade incomum, jitter característico).</p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <span className="text-cyan-500 font-mono text-xs mt-0.5 group-hover:text-white transition-colors">[DEST_02]</span>
                    <p className="text-sm text-slate-300 font-mono">Conexões persistentes a destinos raros/novos para aquele ambiente.</p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <span className="text-cyan-500 font-mono text-xs mt-0.5 group-hover:text-white transition-colors">[FLUX_03]</span>
                    <p className="text-sm text-slate-300 font-mono">Mudanças frequentes de IP para um mesmo domínio (Fast Flux).</p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <span className="text-cyan-500 font-mono text-xs mt-0.5 group-hover:text-white transition-colors">[SNI_04]</span>
                    <p className="text-sm text-slate-300 font-mono">Discrepâncias entre SNI/Host e conteúdo da aplicação (Domain Fronting).</p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <span className="text-cyan-500 font-mono text-xs mt-0.5 group-hover:text-white transition-colors">[CRYPT_05]</span>
                    <p className="text-sm text-slate-300 font-mono">Tráfego cifrado anômalo fora do perfil esperado por aplicação/usuário.</p>
                  </div>
                </div>
                
                {/* Visual Analyzer */}
                <div className="lg:col-span-2 bg-[#050101] p-6 flex flex-col justify-center items-center relative overflow-hidden">
                   <div className="w-full flex items-end justify-between gap-1 h-24 mb-4 opacity-70">
                     {/* Bars representing frequency analysis */}
                     {[...Array(16)].map((_, i) => (
                       <div key={i} className={`w-full bg-cyan-500/20 rounded-t-sm relative overflow-hidden`} style={{ height: `${Math.max(20, Math.random() * 100)}%` }}>
                         <div className="absolute bottom-0 left-0 w-full bg-cyan-400 animate-[pulse_1s_ease-in-out_infinite]" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                       </div>
                     ))}
                   </div>
                   <p className="text-center text-[10px] text-cyan-600 font-mono uppercase tracking-widest mt-auto border-t border-cyan-900/50 pt-4 w-full">
                     Sem baseline, não há anomalia. C2 esconde-se na normalidade.
                   </p>
                </div>
             </div>
          </div>

          {/* SÍNTESE OPERACIONAL (Final Punch) */}
          <div className="flex flex-col items-center justify-center text-center mt-24">
            <div className="w-full max-w-3xl bg-gradient-to-b from-slate-900/40 to-transparent border-t border-slate-800 p-10 rounded-t-3xl">
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3 mb-6">
                <Activity className="w-5 h-5 text-cyan-500" /> Dinâmica & Síntese
              </h3>
              
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                O C2 é o que transforma intrusão em operação coordenada. Evasão baseada em movimento (fast flux) e disfarce (fronting) eleva a resiliência. A infraestrutura descentralizada remove os "botões de desligar" fáceis.
              </p>

              <div className="bg-cyan-950/20 border border-cyan-900/30 p-6 rounded-2xl">
                <p className="text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">A Equação Direta:</p>
                <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-tight">
                  Se o C2 respira, <span className="text-cyan-400">o ataque vive.</span>
                </h4>
                <p className="mt-4 text-sm text-slate-300">
                  Corte o canal cedo — e o organismo perde coordenação <br className="hidden md:block"/> antes de causar o dano máximo.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* =====================================================================
            CAPÍTULO 10: TÉCNICAS DE EVASÃO
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-slate-500"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 10: Técnicas de Evasão</h2>
          </div>

          <header className="max-w-4xl mb-16 relative">
            <Ghost className="absolute -left-16 top-0 w-32 h-32 text-slate-800/20 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Se o ataque é a lâmina, <strong className="text-slate-100 font-bold tracking-wide uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">evasão é o véu</strong>. Não adianta ter payload potente se ele aciona alarme na porta. 
              </p>
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-slate-400 font-mono">
                  Aqui o objetivo é ganhar tempo invisível — minutos que viram horas, horas que viram dias. E nesse intervalo, o invasor consolida acesso, escala privilégios e prepara o impacto. <strong className="text-white">Evasão não é um recurso isolado; é uma camada transversal que permeia toda a operação.</strong>
                </p>
              </div>
            </div>
          </header>

          {/* GRID: O JOGO DE SOMBRAS (2x2) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 10.1 Obfuscação de Código */}
            <div className="bg-[#050101] border border-dashed border-slate-700 p-8 rounded-2xl relative group hover:border-solid hover:border-slate-500 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-slate-800 transition-colors">
                  <VenetianMask className="text-slate-300 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">10.1 Obfuscação</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                O código deixa de ser legível para humanos e ferramentas estáticas. Strings são embaralhadas, fluxos distorcidos, funções fragmentadas. <strong className="text-white">O que era direto vira labirinto.</strong>
              </p>
              
              <div className="bg-black p-4 rounded-xl border border-slate-800/80 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMWUyOTNiIi8+PC9zdmc+')] opacity-50 pointer-events-none"></div>
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2 relative z-10">Táticas Comuns:</span>
                <ul className="text-xs text-slate-400 space-y-2 font-mono relative z-10 blur-[0.5px] group-hover:blur-none transition-all duration-500">
                  <li>• Encoding/packing de payloads</li>
                  <li>• Fragmentação de rotinas críticas</li>
                  <li>• Renomeação dinâmica de funções/variáveis</li>
                  <li>• Execução em memória (Fileless)</li>
                </ul>
              </div>
              
              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-300 font-mono italic">
                  <strong>Insight:</strong> Não é esconder para sempre; é esconder o suficiente para passar pelo primeiro filtro.
                </p>
              </div>
            </div>

            {/* 10.2 Anti-Debugging / Anti-VM */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group overflow-hidden">
              <div className="absolute right-0 top-0 w-2 h-full bg-orange-600/20 group-hover:bg-orange-500 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <MonitorOff className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">10.2 Anti-VM / Debug</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Ambientes de análise são detectados e, quando identificados, o comportamento do código muda — ou simplesmente não executa.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 bg-slate-900/40 p-3 rounded border border-slate-800/50">
                  <ScanLine className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-400">Verificação de artefatos de virtualização (drivers, MACs) e checagem de ferramentas de debug ativas.</p>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/40 p-3 rounded border border-slate-800/50">
                  <Hourglass className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-400">Atrasos intencionais para driblar timeouts de análise e condições lógicas exclusivas de ambientes “reais”.</p>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-orange-300 font-mono italic">
                  <strong>Insight:</strong> O atacante não quer ser estudado; quer ser efetivo no mundo real.
                </p>
              </div>
            </div>

            {/* 10.3 Polimorfismo */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-fuchsia-900/50 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-fuchsia-950 transition-colors">
                  <Dna className="text-fuchsia-500 w-6 h-6 group-hover:animate-spin" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">10.3 Polimorfismo</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                O mesmo malware, múltiplas formas. A cada execução ou distribuição, o código se altera — estrutura, hashes, assinaturas. Funcionalmente idêntico, visualmente diferente.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-fuchsia-950/30 text-fuchsia-400 border border-fuchsia-900/30 rounded text-[10px] uppercase font-bold tracking-widest">Mutação de Código</span>
                <span className="px-3 py-1 bg-fuchsia-950/30 text-fuchsia-400 border border-fuchsia-900/30 rounded text-[10px] uppercase font-bold tracking-widest">Reempacotamento</span>
                <span className="px-3 py-1 bg-fuchsia-950/30 text-fuchsia-400 border border-fuchsia-900/30 rounded text-[10px] uppercase font-bold tracking-widest">Artefatos Únicos</span>
              </div>
              
              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-fuchsia-300 font-mono italic">
                  <strong>Insight:</strong> Se cada amostra é “nova”, listas de bloqueio (assinaturas) ficam sempre um passo atrás.
                </p>
              </div>
            </div>

            {/* 10.4 Detecção de Sandbox */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                  <BoxSelect className="text-yellow-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">10.4 Detecção de Sandbox</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Sandboxes automatizam análise. O malware responde evitando revelar-se nesses ambientes frios.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] uppercase text-yellow-500 font-bold block mb-2">Indicadores:</span>
                  <ul className="text-[10px] text-slate-400 space-y-1 font-mono">
                    <li>• Tempo curto demais</li>
                    <li>• Zero interação humana</li>
                    <li>• Configs genéricas</li>
                  </ul>
                </div>
                <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] uppercase text-yellow-500 font-bold block mb-2">Reações:</span>
                  <ul className="text-[10px] text-slate-400 space-y-1 font-mono">
                    <li>• Dormir (Sleep)</li>
                    <li>• Execução parcial</li>
                    <li>• Abortar rotina</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-yellow-300 font-mono italic">
                  <strong>Insight:</strong> O código não precisa enganar todo mundo — só precisa enganar primeiro.
                </p>
              </div>
            </div>

          </div>

          {/* SINAIS DE DETECÇÃO & DINÂMICA INTEGRADA (Split View) */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            
            {/* Dinâmica Integrada */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-6">
                <Workflow className="w-5 h-5 text-slate-400" /> Dinâmica Integrada
              </h3>
              <ul className="space-y-4 text-sm font-mono text-slate-300">
                <li className="flex gap-3"><span className="text-slate-500">1.</span> Obfuscação dificulta análise estática.</li>
                <li className="flex gap-3"><span className="text-slate-500">2.</span> Anti-VM reduz visibilidade em laboratório.</li>
                <li className="flex gap-3"><span className="text-slate-500">3.</span> Polimorfismo quebra detecção por assinatura.</li>
                <li className="flex gap-3"><span className="text-slate-500">4.</span> Sandbox Evasion garante passagem pela triagem.</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-sm text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Resultado: Janela de operação ampliada.
                </p>
              </div>
            </div>

            {/* Sinais de Detecção (Trace Log) */}
            <div className="lg:col-span-7 bg-[#050101] border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none"></div>
              <h3 className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-6 relative z-10">
                <Radar className="w-5 h-5 text-red-500" /> Sinais e Superfícies
              </h3>
              <p className="text-sm text-slate-400 mb-6 relative z-10">Mesmo com evasão, rastros existem:</p>
              
              <div className="space-y-3 relative z-10">
                <div className="p-3 bg-red-950/10 border border-red-900/20 rounded flex items-center gap-3">
                  <Activity className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-slate-300 font-mono">Execução em memória com pouca evidência em disco.</p>
                </div>
                <div className="p-3 bg-red-950/10 border border-red-900/20 rounded flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-slate-300 font-mono">Processos com comportamento atípico (spawn incomum, parâmetros suspeitos).</p>
                </div>
                <div className="p-3 bg-red-950/10 border border-red-900/20 rounded flex items-center gap-3">
                  <Hourglass className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-slate-300 font-mono">Atrasos e temporizações fora do padrão da aplicação.</p>
                </div>
                <div className="p-3 bg-red-950/10 border border-red-900/20 rounded flex items-center gap-3">
                  <FileWarning className="w-4 h-4 text-red-500 shrink-0" />
                  <p className="text-xs text-slate-300 font-mono">Discrepâncias entre o que o binário declara e o que faz em runtime.</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-6 relative z-10">
                <strong className="text-white">Leitura:</strong> Detecção eficaz migra de assinatura para comportamento e contexto.
              </p>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL (Final Punch) */}
          <div className="mt-20">
            <div className="bg-[#020617] p-10 md:p-16 border-y-2 border-slate-800 text-center relative overflow-hidden">
              <EyeOff className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-slate-900/30 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.4em] mb-8">Síntese Operacional</h3>
                
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 max-w-4xl mx-auto">
                  <div className="flex-1 bg-[#050101] border border-slate-800 p-4 rounded-lg">
                    <p className="text-xs text-slate-400 font-mono">Evasão não elimina detecção; <strong className="text-white">adianta detecção.</strong></p>
                  </div>
                  <div className="flex-1 bg-[#050101] border border-slate-800 p-4 rounded-lg">
                    <p className="text-xs text-slate-400 font-mono">O atacante compra tempo; a defesa precisa <strong className="text-white">encurtar a janela.</strong></p>
                  </div>
                  <div className="flex-1 bg-[#050101] border border-slate-800 p-4 rounded-lg">
                    <p className="text-xs text-slate-400 font-mono">Ferramentas são insuficientes sem <strong className="text-white">telemetria rica e correlação.</strong></p>
                  </div>
                </div>

                <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-4">No fim, a verdade nua e crua:</p>
                
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight tracking-tighter">
                  O ataque não vence por ser invisível — <br className="hidden md:block"/>
                  <span className="text-red-600 block mt-4 animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    Vence porque é visto tarde demais.
                  </span>
                </h2>
              </div>
            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 11: RESPOSTA A INCIDENTES (IR)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-blue-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 11: Resposta a Incidentes (IR)</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-900/30 border border-blue-500/50 rounded flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Protocolo ISO/IEC 27035 Ativo
              </div>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui o jogo muda de ofensivo para <strong className="text-blue-400 font-bold tracking-wide uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">cirúrgico</strong>. Se ransomware é velocidade e impacto, resposta a incidentes é controle sob pressão.
            </p>
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-sm text-slate-400 font-mono italic">
                Não existe improviso bem-sucedido aqui — existe processo, disciplina e execução coordenada. O objetivo não é “apagar o incêndio”, é <strong className="text-white not-italic">evitar que ele vire colapso sistêmico.</strong>
              </p>
            </div>
          </header>

          {/* O CICLO DE IR (Grid 3 Top / 2 Bottom) */}
          <div className="relative mb-16">
            
            {/* Conector Visual de Ciclo (Fundo) */}
            <div className="hidden lg:block absolute top-[40%] left-[10%] right-[10%] h-[2px] bg-slate-800/50 z-0"></div>

            {/* Linha 1: Identificação, Contenção, Erradicação */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8 relative z-10">
              
              {/* 11.1 Identificação */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-blue-900/50 transition-colors">
                <span className="absolute -top-3 -right-3 text-6xl font-black text-slate-900/50 group-hover:text-blue-900/20 transition-colors pointer-events-none">1</span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Search className="text-blue-500 w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">11.1 Identificação</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Tudo começa com detecção. Correlação de sinais (Logs anômalos, picos de tráfego, alertas EDR/SIEM), não apenas alertas isolados.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <p className="text-[10px] uppercase text-blue-500 font-bold block mb-1">Objetivo:</p>
                  <p className="text-xs text-slate-300 font-mono">Confirmar que não é ruído, mas incidente real em andamento.</p>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-400 font-mono uppercase">
                    <strong className="text-blue-400">Insight:</strong> Quem demora a identificar perde a vantagem temporal. Minutos valem arquitetura inteira.
                  </p>
                </div>
              </div>

              {/* 11.2 Contenção */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-yellow-900/50 transition-colors">
                <span className="absolute -top-3 -right-3 text-6xl font-black text-slate-900/50 group-hover:text-yellow-900/20 transition-colors pointer-events-none">2</span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <AlertOctagon className="text-yellow-500 w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">11.2 Contenção</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  O foco muda para limitar o impacto. Isolamento de hosts, segmentação emergencial e bloqueio de comunicação suspeita.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <p className="text-[10px] uppercase text-yellow-500 font-bold block mb-1">Objetivo:</p>
                  <p className="text-xs text-slate-300 font-mono">Parar o avanço lateral e congelar o raio de impacto.</p>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-400 font-mono uppercase">
                    <strong className="text-yellow-400">Insight:</strong> Contenção bem executada transforma desastre em incidente gerenciável.
                  </p>
                </div>
              </div>

              {/* 11.3 Erradicação */}
              <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors">
                <span className="absolute -top-3 -right-3 text-6xl font-black text-slate-900/50 group-hover:text-red-900/20 transition-colors pointer-events-none">3</span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Flame className="text-red-500 w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">11.3 Erradicação</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  O atacante é removido. Limpeza de persistências, remoção de artefatos, revogação de credenciais e patch de vulnerabilidades.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                  <p className="text-[10px] uppercase text-red-500 font-bold block mb-1">Objetivo:</p>
                  <p className="text-xs text-slate-300 font-mono">Eliminar completamente o vetor de comprometimento.</p>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="text-[10px] text-slate-400 font-mono uppercase">
                    <strong className="text-red-400">Insight:</strong> Erradicação falha quando se confunde ausência de evidência com ausência de ameaça.
                  </p>
                </div>
              </div>

            </div>

            {/* Linha 2: Recuperação, Lições Aprendidas */}
            <div className="grid lg:grid-cols-2 gap-8 lg:px-24 relative z-10">
              
              {/* 11.4 Recuperação */}
              <div className="bg-emerald-950/10 border border-emerald-900/30 p-8 rounded-2xl relative group hover:bg-emerald-950/20 transition-colors">
                <span className="absolute -top-3 -right-3 text-6xl font-black text-emerald-900/10 group-hover:text-emerald-900/20 transition-colors pointer-events-none">4</span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-900/30 border border-emerald-700/50 rounded-lg">
                    <RefreshCw className="text-emerald-500 w-5 h-5 group-hover:animate-spin" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">11.4 Recuperação</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Restaurar operação com segurança. Restauração de backups íntegros, validação de sistemas e reintrodução gradual na rede.
                </p>
                <div className="bg-black/40 p-4 rounded-xl border border-emerald-900/30 mb-4">
                  <p className="text-[10px] uppercase text-emerald-500 font-bold block mb-1">Objetivo:</p>
                  <p className="text-xs text-slate-300 font-mono">Retomar operação com confiança operacional e monitoramento intensivo.</p>
                </div>
                <div className="border-t border-emerald-900/30 pt-4">
                  <p className="text-[10px] text-emerald-400 font-mono uppercase">
                    <strong>Insight:</strong> Recuperação sem validação é apenas o reinício do problema.
                  </p>
                </div>
              </div>

              {/* 11.5 Lições Aprendidas */}
              <div className="bg-purple-950/10 border border-purple-900/30 p-8 rounded-2xl relative group hover:bg-purple-950/20 transition-colors">
                <span className="absolute -top-3 -right-3 text-6xl font-black text-purple-900/10 group-hover:text-purple-900/20 transition-colors pointer-events-none">5</span>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-900/30 border border-purple-700/50 rounded-lg">
                    <BookOpen className="text-purple-500 w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">11.5 Lições Aprendidas</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  A camada que separa maturidade de repetição de erro. Análise de causa raiz, mapeamento de falhas e atualização de políticas.
                </p>
                <div className="bg-black/40 p-4 rounded-xl border border-purple-900/30 mb-4">
                  <p className="text-[10px] uppercase text-purple-500 font-bold block mb-1">Objetivo:</p>
                  <p className="text-xs text-slate-300 font-mono">Transformar o incidente em evolução estrutural de segurança.</p>
                </div>
                <div className="border-t border-purple-900/30 pt-4">
                  <p className="text-[10px] text-purple-400 font-mono uppercase">
                    <strong>Insight:</strong> Quem não aprende, replica o ataque em versão 2.0.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SÍNTESE OPERACIONAL (Impact Block Final) */}
          <div className="mt-24">
            <div className="bg-gradient-to-tr from-[#020617] to-slate-900 border border-slate-800 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl">
              <CheckCircle className="absolute right-0 top-0 w-64 h-64 text-slate-800/20 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
              
              <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                    <Activity className="w-5 h-5 text-blue-500" /> Dinâmica de Processo
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-600 pl-4 py-1">
                      <p className="text-sm text-slate-300 font-mono">IR não é reação — é <strong className="text-white">processo estruturado sob pressão</strong>.</p>
                    </div>
                    <div className="border-l-2 border-blue-600 pl-4 py-1">
                      <p className="text-sm text-slate-300 font-mono">Cada fase depende da anterior, mas <strong className="text-white">nenhuma pode ser ignorada</strong>.</p>
                    </div>
                    <div className="border-l-2 border-blue-600 pl-4 py-1">
                      <p className="text-sm text-slate-300 font-mono">A velocidade da resposta <strong className="text-white">define o impacto final</strong> do incidente.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center">
                  <p className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-4">A Lógica Direta e Sem Poesia:</p>
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight tracking-tighter">
                    Não vence quem <br className="hidden md:block"/> não sofre ataque —<br/>
                    <span className="text-blue-500 block mt-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      Vence quem sofre, responde rápido e não repete o erro.
                    </span>
                  </h2>
                </div>

              </div>
            </div>
          </div>

        </section>



        {/* =====================================================================
            CAPÍTULO 12: MITIGAÇÕES E DEFESA (ATUALIZADO)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-emerald-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 12: Mitigações e Defesa</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Se ransomware é uma operação de avanço contínuo, defesa não é “barreira” — é <strong className="text-emerald-400 font-bold tracking-wide uppercase drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">arquitetura de contenção inteligente</strong>. Aqui não existe solução única. Existe engenharia de resiliência: camadas que quebram a lógica do atacante, aumentam o custo operacional e reduzem a janela de impacto.
            </p>
            <div className="bg-emerald-950/20 border-l-4 border-emerald-600 p-4 rounded-r-lg inline-block">
              <p className="text-sm text-emerald-400 font-mono italic">
                "A defesa madura não tenta eliminar risco. Ela tenta torná-lo economicamente inviável."
              </p>
            </div>
          </header>

          {/* GRID: PILARES DE DEFESA (2 Colunas) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            {/* 12.1 Segmentação de Rede */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-emerald-800/50 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-emerald-950/30 transition-colors">
                  <Grid className="text-emerald-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">12.1 Segmentação de Rede</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Rede plana é um convite para movimento lateral. Segmentação quebra esse fluxo, reduzindo o alcance de qualquer comprometimento inicial.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 flex-grow">
                <span className="text-[10px] uppercase text-emerald-500 font-bold block mb-2">Estratégia:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono mb-4">
                  <li>• Dividir ambientes por função e criticidade</li>
                  <li>• Controlar tráfego entre zonas com regras explícitas</li>
                  <li>• Aplicar princípio de menor privilégio também na rede</li>
                </ul>
                <div className="pt-3 border-t border-slate-800/50">
                  <p className="text-[10px] text-slate-500 uppercase"><strong className="text-emerald-400">Objetivo:</strong> Transformar comprometimento total em incidente isolado.</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-emerald-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Sem segmentação, o atacante não precisa escalar — ele só precisa entrar uma vez.
                </p>
              </div>
            </div>

            {/* 12.2 Backup Offline */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-emerald-800/50 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-emerald-950/30 transition-colors">
                  <CloudOff className="text-emerald-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">12.2 Backup Offline (Air Gap)</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Backup online é backup sob risco. O verdadeiro diferencial está no isolamento físico ou lógico do dado.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 flex-grow">
                <span className="text-[10px] uppercase text-emerald-500 font-bold block mb-2">Práticas Vitais:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono mb-4">
                  <li>• Air gap: desconexão total do ambiente produtivo</li>
                  <li>• Cópias imutáveis ou write-once</li>
                  <li>• Versionamento com retenção segura</li>
                </ul>
                <div className="pt-3 border-t border-slate-800/50">
                  <p className="text-[10px] text-slate-500 uppercase"><strong className="text-emerald-400">Objetivo:</strong> Garantir recuperação mesmo sob criptografia total.</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-emerald-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Backup não é sobre ter cópia — é sobre garantir independência do atacante.
                </p>
              </div>
            </div>

            {/* 12.3 Hardening */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-emerald-800/50 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-emerald-950/30 transition-colors">
                  <ShieldPlus className="text-emerald-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">12.3 Hardening de Sistemas</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Reduz a superfície de ataque antes mesmo do atacante existir no sistema.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 flex-grow">
                <span className="text-[10px] uppercase text-emerald-500 font-bold block mb-2">Práticas Essenciais:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono mb-4">
                  <li>• Remoção de serviços desnecessários</li>
                  <li>• Configuração restritiva de permissões</li>
                  <li>• Desativação de protocolos legados inseguros</li>
                  <li>• Atualização contínua de sistemas (Patching)</li>
                </ul>
                <div className="pt-3 border-t border-slate-800/50">
                  <p className="text-[10px] text-slate-500 uppercase"><strong className="text-emerald-400">Objetivo:</strong> Reduzir oportunidades de exploração desde a origem.</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-emerald-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Sistema seguro não é o que responde ao ataque — é o que nunca oferece caminho fácil.
                </p>
              </div>
            </div>

            {/* 12.4 MFA & Zero Trust */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-emerald-800/50 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-emerald-950/30 transition-colors">
                  <UserCheck className="text-emerald-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">12.4 MFA e Zero Trust</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Identidade é o novo perímetro — e perímetro sem verificação é ficção. Nunca confiar por padrão, sempre validar o contexto.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 flex-grow">
                <span className="text-[10px] uppercase text-emerald-500 font-bold block mb-2">Princípios Arquiteturais:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono mb-4">
                  <li>• Verificação contínua (MFA obrigatório)</li>
                  <li>• Acesso mínimo necessário</li>
                  <li>• Autenticação baseada em risco</li>
                </ul>
                <div className="pt-3 border-t border-slate-800/50">
                  <p className="text-[10px] text-slate-500 uppercase"><strong className="text-emerald-400">Objetivo:</strong> Impedir que credenciais roubadas se tornem acesso válido.</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-emerald-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Confiança implícita é o maior erro arquitetural moderno.
                </p>
              </div>
            </div>

          </div>

          {/* 12.5 SIEM (DESTAQUE FULL WIDTH) */}
          <div className="bg-gradient-to-br from-[#020617] to-slate-900/80 border border-emerald-900/30 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden group">
            <Eye className="absolute -right-10 -top-10 w-64 h-64 text-emerald-900/10 pointer-events-none group-hover:text-emerald-900/20 transition-colors" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-900/30 border border-emerald-700/50 rounded-lg">
                    <Activity className="text-emerald-500 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">12.5 Monitoramento com SIEM</h3>
                </div>
                <p className="text-lg text-slate-300">
                  Sem visibilidade, não existe defesa — <strong className="text-white">existe apenas reação tardia.</strong>
                </p>
                <p className="text-sm text-slate-400">
                  Soluções SIEM consolidam eventos de múltiplas fontes para correlacionar sinais fracos e transformá-los em padrões de ataque reais. O ataque raramente aparece como um evento único.
                </p>
                <div className="border-l-2 border-emerald-600 pl-4 py-1 mt-4">
                  <p className="text-xs text-emerald-400 font-mono italic uppercase">
                    <strong>Objetivo:</strong> Correlacionar anomalias isoladas antes que virem um comprometimento sistêmico.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-5 bg-black/40 p-6 rounded-2xl border border-slate-800/50">
                <h4 className="text-slate-500 uppercase text-[10px] font-bold tracking-widest mb-4">Fontes de Correlação:</h4>
                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-3"><Terminal className="w-4 h-4 text-emerald-500" /> Logs de sistemas e autenticação</li>
                  <li className="flex items-center gap-3"><Network className="w-4 h-4 text-emerald-500" /> Eventos e fluxos de rede</li>
                  <li className="flex items-center gap-3"><ShieldAlert className="w-4 h-4 text-emerald-500" /> Alertas de segurança (EDR/AV)</li>
                  <li className="flex items-center gap-3"><Users className="w-4 h-4 text-emerald-500" /> Análise de comportamento de usuários (UBA)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SÍNTESE OPERACIONAL FINAL DO CAPÍTULO */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="bg-[#020617] border-y-2 border-emerald-600 py-16 px-6 md:px-12 text-center relative z-10 shadow-2xl">
              
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.4em] mb-10">Síntese Operacional da Defesa</h3>
              
              <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 text-left">
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center group hover:border-emerald-900/50">
                  <Grid className="w-5 h-5 text-emerald-600 mb-2" />
                  <p className="text-[10px] text-slate-400 font-mono"><strong className="text-white">Segmentação</strong> limita o raio de impacto.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center group hover:border-emerald-900/50">
                  <CloudOff className="w-5 h-5 text-emerald-600 mb-2" />
                  <p className="text-[10px] text-slate-400 font-mono"><strong className="text-white">Backup offline</strong> quebra a alavancagem.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center group hover:border-emerald-900/50">
                  <ShieldPlus className="w-5 h-5 text-emerald-600 mb-2" />
                  <p className="text-[10px] text-slate-400 font-mono"><strong className="text-white">Hardening</strong> reduz superfície de exploração.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center group hover:border-emerald-900/50">
                  <UserCheck className="w-5 h-5 text-emerald-600 mb-2" />
                  <p className="text-[10px] text-slate-400 font-mono"><strong className="text-white">Zero Trust</strong> ataca a identidade.</p>
                </div>
                <div className="bg-[#050101] border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center group hover:border-emerald-900/50 sm:col-span-2 lg:col-span-1">
                  <Eye className="w-5 h-5 text-emerald-600 mb-2" />
                  <p className="text-[10px] text-slate-400 font-mono"><strong className="text-white">SIEM</strong> transforma ruído em inteligência.</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-4">No fim, defesa eficiente não é sobre impedir tudo.</p>
              <p className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2">É sobre garantir uma coisa essencial:</p>
              
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mt-4">
                Quando algo quebrar, <br/>
                <span className="text-emerald-500">o sistema não quebra junto.</span>
              </h2>
            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 13: THREAT INTELLIGENCE
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-violet-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 13: Threat Intelligence</h2>
          </div>

          <header className="max-w-4xl mb-16 relative">
            <BrainCircuit className="absolute -left-12 top-0 w-32 h-32 text-violet-900/20 pointer-events-none animate-pulse" />
            <div className="relative z-10">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Threat Intelligence é onde a segurança sai do modo reativo e entra no <strong className="text-violet-400 font-bold tracking-wide uppercase drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">modo antecipação estruturada</strong>. Não se trata de olhar para o que já aconteceu — isso é forense. 
              </p>
              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm mb-6">
                <p className="text-sm text-slate-400 font-mono">
                  Aqui o foco é entender padrões, comportamento e intenção para prever o próximo movimento antes que ele se materialize.
                </p>
              </div>
              <p className="text-lg text-slate-300 border-l-4 border-violet-600 pl-4 py-1 italic">
                "Em ransomware, isso muda o jogo: você deixa de 'apagar incêndios' e passa a mapear <strong className="text-white not-italic">onde o fósforo está sendo produzido.</strong>"
              </p>
            </div>
          </header>

          {/* GRID: ARTEFATOS VS COMPORTAMENTO (IoC vs TTP) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            
            {/* 13.1 IoCs (Indicadores de Compromisso) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-violet-900/50 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-violet-950/30 transition-colors">
                  <Fingerprint className="text-violet-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">13.1 IoCs (A Fotografia)</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Indicadores de Compromisso (IoCs) são os vestígios técnicos deixados pelo atacante. Eles indicam que algo já aconteceu ou está acontecendo.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 flex-grow">
                <span className="text-[10px] uppercase text-violet-500 font-bold block mb-2">Exemplos Comuns:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-violet-600 rounded-full"></div> Hashes de arquivos maliciosos</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-violet-600 rounded-full"></div> Domínios e IPs de infra C2</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-violet-600 rounded-full"></div> URLs de entrega de payloads</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-violet-600 rounded-full"></div> Padrões anômalos em logs</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-[10px] text-slate-500 uppercase mb-2"><strong className="text-violet-400">Objetivo:</strong> Detectar presença baseada em artefatos observáveis.</p>
                <p className="text-xs text-violet-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> IoC é o passado recente. Útil, mas insuficiente sozinho — o atacante muda rápido.
                </p>
              </div>
            </div>

            {/* 13.2 TTPs (MITRE ATT&CK) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-violet-900/50 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:bg-violet-950/30 transition-colors">
                  <Crosshair className="text-violet-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">13.2 TTPs (A Estrutura)</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Se IoCs são o “o quê”, TTPs são o “como”. O framework MITRE ATT&CK organiza o comportamento do adversário.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 flex-grow flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-violet-400 font-black font-mono text-sm">T</span>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">Táticas</p>
                      <p className="text-xs text-slate-300 font-mono">O objetivo tático (ex: execução, persistência).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-violet-400 font-black font-mono text-sm">T</span>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">Técnicas</p>
                      <p className="text-xs text-slate-300 font-mono">Como o objetivo é exatamente alcançado.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-violet-400 font-black font-mono text-sm">P</span>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">Procedimentos</p>
                      <p className="text-xs text-slate-300 font-mono">A implementação específica usada pelo grupo.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-[10px] text-slate-500 uppercase mb-2"><strong className="text-violet-400">Objetivo:</strong> Entender o comportamento estrutural do ataque.</p>
                <p className="text-xs text-violet-300 font-mono italic">
                  <strong>Leitura Estratégica:</strong> Dois ataques podem ter IoCs distintos, mas TTPs idênticas. Aqui a inteligência ganha profundidade.
                </p>
              </div>
            </div>

          </div>

          {/* GRID: CAMPANHAS & DOSSIÊS (2 Colunas com Visual de Mapa/Tracking) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 13.3 Análise de Campanhas Reais */}
            <div className="bg-[#020617] border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
              <LineChart className="absolute -right-8 -bottom-8 w-40 h-40 text-violet-900/10 pointer-events-none group-hover:text-violet-900/20 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Map className="text-indigo-500 w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">13.3 Tracking de Campanhas</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Campanhas de ransomware não são eventos isolados — são operações contínuas com adaptação em tempo real.
                </p>
                
                <div className="bg-[#050101] p-4 rounded-xl border border-slate-800 mb-4 flex-grow">
                  <span className="text-[10px] uppercase text-indigo-400 font-bold block mb-3">Escopo de Análise:</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-300 font-mono block">Vetor Inicial</span>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-300 font-mono block">Cadeia Completa</span>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-300 font-mono block">Evolução Tática</span>
                    </div>
                    <div className="bg-slate-900/50 p-2 rounded border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-300 font-mono block">Alvos/Setores</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 mt-auto">
                  <p className="text-xs text-indigo-300 font-mono italic">
                    <strong>Leitura Estratégica:</strong> Campanha não é incidente. É estratégia de negócio aplicada no mundo real.
                  </p>
                </div>
              </div>
            </div>

            {/* 13.4 Perfis de Grupos Ransomware */}
            <div className="bg-[#020617] border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
              <Users className="absolute -right-8 -top-8 w-40 h-40 text-indigo-900/10 pointer-events-none group-hover:text-indigo-900/20 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
                    <Briefcase className="text-indigo-500 w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">13.4 Perfis e Dossiers</h3>
                </div>
                <p className="text-sm text-slate-400 mb-6">
                  Grupos operam como organizações estruturadas, com especializações e “assinaturas operacionais”.
                </p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-300 font-mono">Foco em Volume / Massivo</span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded">Baixa Person.</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-300 font-mono">Alto Valor (Big Game Hunting)</span>
                    <span className="text-[10px] bg-indigo-900/50 text-indigo-400 px-2 py-1 rounded">Sofisticado</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-300 font-mono">Ecossistemas RaaS</span>
                    <span className="text-[10px] bg-violet-900/50 text-violet-400 px-2 py-1 rounded">Afiliados</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 mt-auto">
                  <p className="text-xs text-indigo-300 font-mono italic">
                    <strong>Leitura Estratégica:</strong> Entender o grupo é entender a lógica do ataque antes dele acontecer.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL (Impact Block Final de CTI) */}
          <div className="mt-20">
            <div className="bg-gradient-to-b from-[#050101] to-[#020617] border border-violet-900/30 p-10 md:p-16 rounded-3xl relative shadow-2xl">
              
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                    <Microscope className="w-6 h-6 text-violet-500" /> Síntese Operacional
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded border border-slate-800/50">
                      <Fingerprint className="w-5 h-5 text-violet-500 shrink-0" />
                      <p className="text-sm text-slate-300 font-mono"><strong className="text-white">IoCs</strong> são sinais fotográficos — não são o contexto completo.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded border border-slate-800/50">
                      <Crosshair className="w-5 h-5 text-violet-500 shrink-0" />
                      <p className="text-sm text-slate-300 font-mono"><strong className="text-white">TTPs</strong> (MITRE ATT&CK) revelam o blueprint e a estrutura do ataque.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded border border-slate-800/50">
                      <Map className="w-5 h-5 text-violet-500 shrink-0" />
                      <p className="text-sm text-slate-300 font-mono"><strong className="text-white">Campanhas</strong> mostram a evolução e adaptação no mundo real.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-black/40 p-3 rounded border border-slate-800/50">
                      <Users className="w-5 h-5 text-violet-500 shrink-0" />
                      <p className="text-sm text-slate-300 font-mono"><strong className="text-white">Perfis</strong> de grupos permitem previsão de comportamento futuro.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-12">
                  <p className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.3em] mb-4">A Filosofia da Inteligência:</p>
                  
                  <p className="text-xl text-slate-300 mb-6 italic">
                    No fim, threat intelligence não é sobre saber mais.<br/>
                    <strong className="text-white">É sobre errar menos antes do impacto acontecer.</strong>
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mt-4">
                    Quem entende padrões, <br/>
                    <span className="text-violet-500 animate-pulse drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                      enxerga o ataque antes dele deixar de ser hipótese.
                    </span>
                  </h2>
                </div>
              </div>

            </div>
          </div>

        </section>



        {/* =====================================================================
            CAPÍTULO 14: ASPECTOS LEGAIS E ÉTICOS (PALETA REVOLUXTI)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 14: Aspectos Legais e Éticos</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui a conversa sai do campo técnico e entra no campo de <strong className="text-red-500 font-bold tracking-wide uppercase">responsabilidade corporativa e impacto jurídico real</strong>. Ransomware não termina na infraestrutura comprometida — ele continua em auditorias, notificações regulatórias e processos legais.
            </p>
            <div className="bg-[#050101] border-l-4 border-red-600 p-5 rounded-r-lg">
              <p className="text-sm text-slate-400 font-mono italic">
                Segurança sem base legal e ética é operação incompleta. <strong className="text-white not-italic">E, no mundo real, isso custa caro.</strong>
              </p>
            </div>
          </header>

          {/* GRID SIMÉTRICO: LEGISLAÇÃO, RISCO, EVIDÊNCIA E COMPLIANCE (2x2) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 14.1 LGPD e Vazamento (Azul pontual no ícone, Red no destaque) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-blue-500/50 transition-colors">
                  <Landmark className="text-blue-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">14.1 LGPD e Vazamentos</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                A LGPD estabelece regras claras sobre tratamento e resposta a incidentes. Com exfiltração, os dados são expostos e a notificação é obrigatória.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Impactos Diretos:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Multas e sanções administrativas</li>
                  <li>• Danos reputacionais severos</li>
                  <li>• Perda de confiança do mercado</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Vazamento não é só incidente de segurança — é evento jurídico com consequência financeira.
                </p>
              </div>
            </div>

            {/* 14.2 Pagamento de Resgate (Amarelo pontual no ícone, Red no destaque) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-yellow-500/50 transition-colors">
                  <Gavel className="text-yellow-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">14.2 O Risco do Resgate</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                O pagamento parece uma decisão operacional, mas envolve camadas críticas de risco, violação de compliance e exposição a sanções.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Camadas de Risco:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Exposição a sanções dependendo da jurisdição</li>
                  <li>• Risco de reincidência (financiamento do crime)</li>
                  <li>• Ausência de garantia de recuperação</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Pagar não é solução técnica — é decisão de risco controlado sob pressão extrema.
                </p>
              </div>
            </div>

            {/* 14.3 Cadeia de Custódia (Slate no ícone, Red no destaque) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-slate-500/50 transition-colors">
                  <FileSignature className="text-slate-300 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">14.3 Cadeia de Custódia</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Em um incidente de segurança, evidências digitais precisam ser tratadas com rigor técnico e jurídico para garantir sua validade.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Princípios Essenciais:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Preservação da integridade dos dados</li>
                  <li>• Registro estrito de acesso (quem, quando, como)</li>
                  <li>• Rastreabilidade completa da coleta à análise</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Sem cadeia de custódia, investigação vira relato — não prova.
                </p>
              </div>
            </div>

            {/* 14.4 Compliance Corporativo (Verde pontual no ícone, Red no destaque) */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-emerald-500/50 transition-colors">
                  <Building className="text-emerald-500 w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">14.4 Compliance Corporativo</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Compliance é a camada que conecta segurança, legislação e governança. Garante operação em limites legais, mesmo sob incidente.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-slate-500 font-bold block mb-2">Pilares de Governança:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Aderência a normas regulatórias e auditorias</li>
                  <li>• Gestão de riscos e controles documentados</li>
                  <li>• Treinamento e conscientização organizacional</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Compliance define se o ataque vira crise gerenciável ou colapso institucional.
                </p>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL: A REALIDADE DIRETA (Estritamente Paleta Revoluxti) */}
          <div className="mt-20">
            <div className="bg-gradient-to-b from-[#0a0202] to-[#050101] border border-red-900/50 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
              
              <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-6 space-y-6">
                  <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-6">
                    <ShieldCheck className="w-6 h-6 text-red-500" /> Governança & Realidade
                  </h3>
                  
                  <div className="space-y-4 font-mono text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">1.</span>
                      <p><strong className="text-white">LGPD</strong> transforma incidente técnico em obrigação legal imediata.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">2.</span>
                      <p><strong className="text-white">Pagamento</strong> é decisão de alto risco, não solução padrão.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">3.</span>
                      <p><strong className="text-white">Custódia</strong> garante validade jurídica das evidências.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">4.</span>
                      <p><strong className="text-white">Compliance</strong> sustenta governança e reduz impacto sistêmico.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-12">
                  <p className="text-red-500 uppercase text-[10px] font-bold tracking-[0.3em] mb-4">O Veridito Corporativo:</p>
                  
                  <p className="text-lg text-slate-400 mb-6 italic">
                    Segurança técnica sem estrutura legal é incompleta — <strong className="text-white not-italic">e, em ransomware, incompleto significa vulnerável.</strong>
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mt-4">
                    Aqui, o jogo não é só sobreviver ao ataque. <br/>
                    <span className="text-red-600 block mt-2 border-l-4 border-red-600 pl-4 text-2xl md:text-3xl">
                      É sobreviver sem destruir a própria governança no processo.
                    </span>
                  </h2>
                </div>
              </div>

            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 15: LABORATÓRIOS PRÁTICOS (CRPO)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 15: Laboratórios Práticos (CRPO)</h2>
          </div>

          <header className="max-w-4xl mb-16 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-950/20 border border-red-900/50 rounded flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest">
                <FlaskConical className="w-4 h-4" /> Containment Zone // Lab Active
              </div>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui a teoria deixa de ser discurso e vira <strong className="text-red-500 font-bold tracking-wide uppercase">competência mensurável</strong>. Sem laboratório, segurança é opinião. Com laboratório, vira engenharia aplicada. 
            </p>
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#b3120c_10px,#b3120c_20px)] opacity-50"></div>
              <p className="text-sm text-slate-400 font-mono">
                Este é o ponto em que o aluno deixa de “entender ransomware” e passa a observar o comportamento do ataque em condições controladas. <strong className="text-white">Tudo aqui deve ser ético, isolado e orientado a aprendizado — não a execução real em ambientes produtivos.</strong>
              </p>
            </div>
          </header>

          {/* GRID SIMÉTRICO: SIMULAÇÃO E ISOLAMENTO (2x2) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 15.1 Simulação de Ataque Controlado */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <PlaySquare className="text-slate-300 group-hover:text-red-500 transition-colors w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">15.1 Simulação Controlada</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                A simulação reproduz o ciclo completo do ataque em ambiente seguro, permitindo visualizar cada fase sem risco operacional. <span className="text-slate-300">Não é “executar malware”, é replicar comportamento.</span>
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Objetivos:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Entender a cadeia completa (acesso à criptografia)</li>
                  <li>• Observar transições entre etapas do ataque</li>
                  <li>• Identificar pontos de detecção e falha defensiva</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Quem nunca viu o ataque rodar em laboratório tende a reagir tarde no mundo real.
                </p>
              </div>
            </div>

            {/* 15.2 Ambiente Isolado (Lab Virtual) */}
            <div className="bg-[#050101] border border-dashed border-slate-700 p-8 rounded-2xl relative group hover:border-solid hover:border-red-900/50 transition-all flex flex-col">
              <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <Box className="text-slate-300 group-hover:text-red-500 transition-colors w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">15.2 Lab Virtual Isolado</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow relative z-10">
                O laboratório precisa ser uma realidade paralela absolutamente controlada para garantir experimentação sem risco e com total rastreabilidade.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4 relative z-10">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Características Essenciais:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Máquinas virtuais estritamente segmentadas</li>
                  <li>• Rede isolada (sem acesso à produção/internet)</li>
                  <li>• Snapshots para rollback imediato</li>
                  <li>• Monitoramento completo de logs e tráfego</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto relative z-10">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Isolamento não é detalhe técnico — é pré-requisito de responsabilidade.
                </p>
              </div>
            </div>

            {/* 15.3 Execução de Ransomware Educativo */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <ServerCrash className="text-slate-300 group-hover:text-red-500 transition-colors w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">15.3 Malware Educativo</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Simulações não destrutivas, criadas para fins didáticos. O foco é entender como o ataque se comporta sem impactar dados reais.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">O que se Observa:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Fluxo de execução passo a passo</li>
                  <li>• Criação e renomeação de arquivos simulados</li>
                  <li>• Mudanças de estado do sistema (Registry/Services)</li>
                  <li>• Geração de eventos e logs do Windows</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Ver o ransomware agir muda completamente a percepção de prioridade na defesa.
                </p>
              </div>
            </div>

            {/* 15.4 Análise de Comportamento */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <Microscope className="text-slate-300 group-hover:text-red-500 transition-colors w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">15.4 Análise Comportamental</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                A camada mais importante do laboratório: transformar a execução mecânica do malware em inteligência acionável e padrões reutilizáveis.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Foco Analítico:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Sequência exata de eventos do sistema</li>
                  <li>• Padrões anômalos de rede e execução</li>
                  <li>• Uso de recursos (CPU/Disco) e processos</li>
                  <li>• Correlação lógica entre as ações do atacante</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> IoC expira. Comportamento não.
                </p>
              </div>
            </div>

          </div>

          {/* SÍNTESE OPERACIONAL: A TRANSIÇÃO (Revoluxti Core Design) */}
          <div className="mt-20">
            <div className="bg-[#050101] border-y-2 border-red-600 p-10 md:p-16 relative overflow-hidden shadow-2xl">
              <Target className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] text-slate-900/20 pointer-events-none" />
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3 mb-10 text-center">
                  <Activity className="w-5 h-5 text-red-500" /> Síntese Operacional
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-lg flex items-start gap-4">
                    <span className="text-red-500 font-mono font-bold mt-0.5">01</span>
                    <p className="text-sm text-slate-300 font-mono">Laboratório é onde o <strong className="text-white">conhecimento vira habilidade</strong>.</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-lg flex items-start gap-4">
                    <span className="text-red-500 font-mono font-bold mt-0.5">02</span>
                    <p className="text-sm text-slate-300 font-mono">Simulação permite <strong className="text-white">errar sem impacto real</strong>.</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-lg flex items-start gap-4">
                    <span className="text-red-500 font-mono font-bold mt-0.5">03</span>
                    <p className="text-sm text-slate-300 font-mono">Ambiente isolado garante <strong className="text-white">segurança e repetibilidade</strong>.</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-lg flex items-start gap-4">
                    <span className="text-red-500 font-mono font-bold mt-0.5">04</span>
                    <p className="text-sm text-slate-300 font-mono">Análise comportamental constrói <strong className="text-white">capacidade de detecção</strong>.</p>
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-slate-800/80">
                  <p className="text-slate-500 uppercase text-xs font-bold tracking-[0.3em] mb-6">A Lógica é Simples e Inegociável:</p>
                  
                  <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight tracking-tighter mb-4">
                    Quem nunca treinou o ataque, reage; <br className="hidden md:block"/>
                    <span className="text-red-600">Quem treinou, antecipa.</span>
                  </h2>
                  
                  <div className="inline-block mt-4 bg-red-950/30 border border-red-900/50 px-6 py-3 rounded-lg">
                    <p className="text-sm md:text-base text-slate-300 italic">
                      "Aqui é onde o profissional deixa de estudar segurança <br className="hidden md:block"/> <strong className="text-white not-italic uppercase tracking-widest text-red-400">e começa a operar como segurança.</strong>"
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>


        {/* =====================================================================
            CAPÍTULO 16: RELATÓRIOS PROFISSIONAIS (ENTREGA FINAL)
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Capítulo 16: Relatórios Profissionais</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Aqui o ciclo fecha. Se o ataque é execução e a defesa é resposta, o relatório é o que transforma caos em <strong className="text-red-500 font-bold tracking-wide uppercase">inteligência utilizável</strong>. Sem ele, o incidente vira apenas ruído técnico.
            </p>
            <div className="bg-[#050101] border-l-4 border-red-600 p-5 rounded-r-lg shadow-lg">
              <p className="text-sm text-slate-400 font-mono italic">
                Com ele, vira ativo estratégico, evidência auditável e base de decisão executiva. <strong className="text-white not-italic uppercase tracking-widest text-red-500 block mt-2">Relatório profissional não é documentação. É produto de segurança corporativa.</strong>
              </p>
            </div>
          </header>

          {/* GRID SIMÉTRICO REVOLUXTI (2x2) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 16.1 Estrutura de Relatório */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <FileText className="text-slate-300 group-hover:text-red-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">16.1 Estrutura Técnica</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Um relatório sólido precisa ser direto, rastreável e orientado a decisão. Nada de narrativa solta — <strong className="text-white">aqui é engenharia de comunicação.</strong>
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Estrutura Recomendada:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li><strong className="text-white">1. Sumário Executivo:</strong> Visão C-level e status.</li>
                  <li><strong className="text-white">2. Escopo:</strong> Sistemas afetados e vetores.</li>
                  <li><strong className="text-white">3. Timeline:</strong> Da detecção à contenção.</li>
                  <li><strong className="text-white">4. Análise Técnica:</strong> Kill chain e TTPs.</li>
                  <li><strong className="text-white">5. Impacto & Recomendações:</strong> Curto a longo prazo.</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Relatório fraco gera decisão fraca. Relatório forte orienta investimento.
                </p>
              </div>
            </div>

            {/* 16.2 Evidências */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <FileSearch className="text-slate-300 group-hover:text-red-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">16.2 Matriz de Evidências</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                A camada forense. Tudo o que é afirmado precisa ser rastreável, verificável e matematicamente reproduzível.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Elementos Críticos:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• Logs de autenticação e sistema</li>
                  <li>• Hashes de arquivos maliciosos</li>
                  <li>• Artefatos de rede (IP, domínios, conexões)</li>
                  <li>• Capturas de memória (quando aplicável)</li>
                  <li>• Linha do tempo correlacionada</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Evidência mal organizada é evidência inutilizada.
                </p>
              </div>
            </div>

            {/* 16.3 Impacto no Negócio */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <TrendingDown className="text-slate-300 group-hover:text-red-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">16.3 Impacto no Negócio</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Segurança não fala só com servidores — fala com o negócio. Impactos devem ser traduzidos em linguagem financeira e institucional.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Tradução Executiva:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li><strong className="text-white">Operacional:</strong> Interrupção de serviços críticos.</li>
                  <li><strong className="text-white">Financeiro:</strong> Custos diretos de recuperação e perda de receita.</li>
                  <li><strong className="text-white">Reputacional:</strong> Quebra de confiança de clientes e parceiros.</li>
                  <li><strong className="text-white">Regulatório:</strong> Exposição a multas (LGPD/GDPR).</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> O C-level não compra “malware”; compra impacto.
                </p>
              </div>
            </div>

            {/* 16.4 Plano de Remediação */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <Wrench className="text-slate-300 group-hover:text-red-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">16.4 Plano de Remediação</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Aqui o relatório deixa de ser diagnóstico e vira ação. É o plano diretor para impedir a reincidência.
              </p>
              
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 mb-4">
                <span className="text-[10px] uppercase text-red-500 font-bold block mb-2">Fases do Plano:</span>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  <li>• <strong className="text-white">Imediata:</strong> Hotfix, contenção e eliminação do risco ativo.</li>
                  <li>• <strong className="text-white">Estrutural:</strong> Hardening, revisão de arquitetura e acessos.</li>
                  <li>• <strong className="text-white">Evolução:</strong> Monitoramento contínuo e melhoria de detecção.</li>
                  <li>• <strong className="text-white">Prevenção:</strong> Treinamento, simulações e novas políticas.</li>
                </ul>
              </div>

              <div className="border-t border-slate-800 pt-4 mt-auto">
                <p className="text-xs text-slate-400 font-mono italic">
                  <strong className="text-red-500 uppercase not-italic">Insight:</strong> Remediação não encerra o incidente — ela redefine o nível de maturidade da organização.
                </p>
              </div>
            </div>

          </div>

          {/* O FECHAMENTO DO CICLO (The Final Punch) */}
          <div className="mt-24">
            <div className="bg-[#020617] border border-slate-800 p-10 md:p-16 relative overflow-hidden shadow-2xl rounded-3xl group hover:border-red-900/50 transition-all duration-700">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-900 via-red-600 to-red-900 opacity-50"></div>
              
              <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                
                <div className="flex-1 space-y-6">
                  <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-8">
                    <Activity className="w-5 h-5 text-red-500" /> Síntese Operacional
                  </h3>
                  
                  <ul className="space-y-4 font-mono text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p>Relatório técnico transforma incidente em <strong className="text-white">inteligência acionável</strong>.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p>Evidências sustentam validação <strong className="text-white">técnica e jurídica</strong>.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p>Impacto traduz segurança para <strong className="text-white">linguagem de negócio</strong>.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <p>Remediação fecha o ciclo e <strong className="text-white">eleva a maturidade defensiva</strong>.</p>
                    </li>
                  </ul>
                </div>

                <div className="flex-1 border-t lg:border-t-0 lg:border-l border-slate-800 pt-8 lg:pt-0 lg:pl-12">
                  <p className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.3em] mb-6">O Veredito Definitivo:</p>
                  
                  <p className="text-lg text-slate-300 mb-6 italic">
                    No fim, a verdade é simples e decisiva: quem não documenta bem, não aprende — <strong className="text-white not-italic">e quem não aprende, repete o ataque.</strong>
                  </p>
                  
                  <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-xl mt-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-2 h-full bg-red-600"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
                      Aqui fecha o ciclo completo: <br/>
                      <span className="text-red-500 block mt-2">Do vetor inicial ao relatório final.</span>
                    </h2>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* =====================================================================
            GRAN FINALE: REFERÊNCIAS NORMATIVAS E SÍNTESE
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Referencial Normativo</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Este relatório assenta num conjunto consolidado de frameworks, padrões e relatórios globais de cibersegurança e gestão de incidentes. 
            </p>
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl">
              <p className="text-sm text-slate-400 font-mono">
                Abaixo está a lista de fontes técnicas e normativas alinhadas ao padrão internacional que sustentam toda a arquitetura de defesa e inteligência aqui descrita. <strong className="text-white">Não há achismos; há compliance e engenharia aplicada.</strong>
              </p>
            </div>
          </header>

          {/* GRID SIMÉTRICO: FONTES DE PESQUISA (3 Colunas) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            
            {/* 1. Gestão de Incidentes (Ícone Azul) */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-blue-500 w-5 h-5" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Gestão de Incidentes</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-mono flex-grow">
                <li><strong className="text-white">ISO/IEC 27035</strong><br/>Base para o ciclo de resposta a incidentes.</li>
                <li><strong className="text-white">ISO/IEC 27001</strong><br/>Estrutura de gestão de segurança (ISMS).</li>
                <li><strong className="text-white">NIST SP 800-61</strong><br/>Referência global de processos de IR.</li>
              </ul>
            </div>

            {/* 2. Modelos de Ataque (Ícone Vermelho) */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Crosshair className="text-red-500 w-5 h-5" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Modelos de Ataque</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-mono flex-grow">
                <li><strong className="text-white">Cyber Kill Chain</strong><br/>Estrutura base da arquitetura de ataque.</li>
                <li><strong className="text-white">MITRE ATT&CK</strong><br/>Taxonomia de TTPs (Táticas, Técnicas e Procedimentos).</li>
              </ul>
            </div>

            {/* 3. Threat Intelligence (Ícone Roxo) */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Radar className="text-violet-500 w-5 h-5" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Threat Intelligence</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-mono flex-grow">
                <li><strong className="text-white">Microsoft</strong> Digital Defense Report</li>
                <li><strong className="text-white">IBM X-Force</strong> Threat Intelligence Index</li>
                <li><strong className="text-white">Verizon DBIR</strong> (Data Breach Investigations)</li>
              </ul>
            </div>

            {/* 4. Ransomware Ecosystem (Ícone Laranja) */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Skull className="text-orange-500 w-5 h-5" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Ecossistema Cibercrime</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-mono flex-grow">
                <li><strong className="text-white">ENISA</strong> Threat Landscape</li>
                <li><strong className="text-white">Europol IOCTA</strong> Report</li>
                <li><strong className="text-white">Mandiant</strong> Intel Reports</li>
                <li>Análise de grupos RaaS (LockBit, REvil, BlackCat).</li>
              </ul>
            </div>

            {/* 5. Arquitetura e Defesa (Ícone Verde) */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <ShieldPlus className="text-emerald-500 w-5 h-5" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Arquitetura de Defesa</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-mono flex-grow">
                <li><strong className="text-white">Zero Trust Architecture</strong><br/>Modelo de verificação contínua.</li>
                <li><strong className="text-white">SIEM & SOC</strong><br/>Monitoramento e correlação de eventos.</li>
                <li><strong className="text-white">Defense in Depth</strong><br/>Práticas de hardening em múltiplas camadas.</li>
              </ul>
            </div>

            {/* 6. Forense e Economia (Ícone Amarelo/Slate) */}
            <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Bitcoin className="text-yellow-500 w-5 h-5" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Forense & Economia</h3>
              </div>
              <ul className="space-y-3 text-xs text-slate-400 font-mono flex-grow">
                <li><strong className="text-white">Digital Forensics</strong><br/>Frameworks NIST e ISO alinhados.</li>
                <li><strong className="text-white">Cadeia de Custódia</strong><br/>Aplicada a evidências digitais.</li>
                <li><strong className="text-white">Chainalysis Reports</strong><br/>Estudos de cibercrime e criptomoedas.</li>
              </ul>
            </div>

          </div>

          {/* SÍNTESE EXECUTIVA (Revoluxti Core Style) */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 bg-[#020617] border border-slate-800 p-10 rounded-3xl relative overflow-hidden">
              <Target className="absolute -right-10 -bottom-10 w-64 h-64 text-slate-800/10 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center gap-3 mb-8">
                  <Activity className="w-5 h-5 text-red-500" /> Síntese Executiva
                </h3>
                <p className="text-sm text-slate-400 mb-6">Este documento foi estruturado como uma fusão de normas e frameworks globais:</p>
                
                <ul className="space-y-4 font-mono text-sm text-slate-300">
                  <li className="flex items-center justify-between border-b border-slate-800/50 pb-2">
                    <span className="text-white font-bold">ISO 27035</span>
                    <span className="text-red-500 uppercase text-xs tracking-widest">Resposta a Incidentes</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-800/50 pb-2">
                    <span className="text-white font-bold">NIST SP 800-61</span>
                    <span className="text-red-500 uppercase text-xs tracking-widest">Operação de IR</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-800/50 pb-2">
                    <span className="text-white font-bold">MITRE ATT&CK</span>
                    <span className="text-red-500 uppercase text-xs tracking-widest">Comportamento Adversário</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-800/50 pb-2">
                    <span className="text-white font-bold">Cyber Kill Chain</span>
                    <span className="text-red-500 uppercase text-xs tracking-widest">Fluxo de Ataque</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-slate-800/50 pb-2">
                    <span className="text-white font-bold">Zero Trust + SIEM</span>
                    <span className="text-red-500 uppercase text-xs tracking-widest">Defesa Moderna</span>
                  </li>
                  <li className="flex items-center justify-between pb-2">
                    <span className="text-white font-bold">Threat Intel Reports</span>
                    <span className="text-red-500 uppercase text-xs tracking-widest">Validação Real</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* NOTA TÉCNICA (Disclaimer Final) */}
            <div className="lg:col-span-5 bg-red-950/20 border border-red-900/50 p-10 rounded-3xl flex flex-col justify-center text-center lg:text-left relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-600 rounded-t-3xl"></div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
                <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm">Nota Técnica</h4>
              </div>
              <p className="text-lg text-slate-300 font-mono italic mb-6">
                Não existe uma "norma internacional de ransomware".
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                O que existe é um ecossistema normativo híbrido. Ransomware só é mitigado quando analisado através da união de <strong className="text-white">gestão de risco, resposta a incidentes, inteligência de ameaça, segurança arquitetural e forense digital.</strong>
              </p>
            </div>
          </div>

          {/* ASSINATURA FINAL REVOLUXTI */}
          <div className="mt-20 flex flex-col items-center justify-center border-t border-slate-800 pt-16 pb-8">
            <div className="w-16 h-16 bg-[#050101] border-2 border-red-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(179,18,12,0.3)]">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest mb-2">Revoluxti DevSecOps</h1>
            <p className="text-red-500 font-mono text-xs uppercase tracking-[0.4em]">Intelligence Report // End of File</p>
          </div>

        </section>

        {/* =====================================================================
            APÊNDICE: FONTES BIBLIOGRÁFICAS E TÉCNICAS
        ====================================================================== */}
        <section className="relative mb-32 border-t border-slate-800/50 pt-16">
          
          <div className="flex items-center gap-3 mb-10">
            <div className="h-[1px] w-8 bg-red-600"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Acervo Bibliográfico e Técnico</h2>
          </div>

          <header className="max-w-4xl mb-16">
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Abaixo está a lista consolidada de fontes de pesquisa, publicações acadêmicas e documentação técnica de padrão internacional que fundamentam este <strong className="text-red-500 font-bold uppercase tracking-widest">Intelligence Report</strong>.
            </p>
          </header>

          {/* GRID BIBLIOGRÁFICO: MASONRY/FLEX LAYOUT (2 Colunas) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            
            {/* 1. Fundamentos de Segurança */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <BookOpen className="text-slate-400 group-hover:text-red-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">1. Fundamentos e Gestão</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-red-600 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Anderson, Ross J.</p>
                  <h4 className="text-white font-bold text-sm mb-1">Security Engineering (3rd Edition)</h4>
                  <p className="text-xs text-slate-400">Base para arquitetura de segurança e pensamento de risco sistêmico.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-red-600 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Stallings, William</p>
                  <h4 className="text-white font-bold text-sm mb-1">Cryptography and Network Security</h4>
                  <p className="text-xs text-slate-400">Fundamentos de criptografia (AES, RSA, modelos híbridos).</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-red-600 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Whitman, M. E.; Mattord, H. J.</p>
                  <h4 className="text-white font-bold text-sm mb-1">Principles of Information Security</h4>
                  <p className="text-xs text-slate-400">Base de governança, risco e resposta a incidentes.</p>
                </div>
              </div>
            </div>

            {/* 2. Resposta a Incidentes e Forense */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-blue-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-blue-500/50 transition-colors">
                  <Search className="text-slate-400 group-hover:text-blue-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">2. IR e Forense Digital</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-blue-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Cichonski, Paul et al. (NIST)</p>
                  <h4 className="text-white font-bold text-sm mb-1">Computer Security Incident Handling Guide (SP 800-61 Rev. 2)</h4>
                  <p className="text-xs text-slate-400">Referência mundial em IR (Identificação, Contenção, Erradicação, Recuperação).</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-blue-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Casey, Eoghan</p>
                  <h4 className="text-white font-bold text-sm mb-1">Digital Evidence and Computer Crime (3rd Ed.)</h4>
                  <p className="text-xs text-slate-400">Cadeia de custódia, evidência digital e investigação forense.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-blue-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Tan, Kevin</p>
                  <h4 className="text-white font-bold text-sm mb-1">Incident Response & Computer Forensics</h4>
                  <p className="text-xs text-slate-400">Aplicação prática de resposta a incidentes.</p>
                </div>
              </div>
            </div>

            {/* 3. Ransomware e Cibercrime */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-purple-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-purple-500/50 transition-colors">
                  <Skull className="text-slate-400 group-hover:text-purple-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">3. Ransomware e Cibercrime</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-purple-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Andress, Jason</p>
                  <h4 className="text-white font-bold text-sm mb-1">The Basics of Information Security</h4>
                  <p className="text-xs text-slate-400">Fundamentos de ameaças modernas.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-purple-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Chainalysis</p>
                  <h4 className="text-white font-bold text-sm mb-1">Crypto Crime Report (Anual)</h4>
                  <p className="text-xs text-slate-400">Economia do ransomware e uso de criptomoedas.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-purple-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">EUROPOL & ENISA</p>
                  <h4 className="text-white font-bold text-sm mb-1">IOCTA Report & Threat Landscape Report</h4>
                  <p className="text-xs text-slate-400">Análise de grupos ransomware, ecossistema europeu e tendências globais.</p>
                </div>
              </div>
            </div>

            {/* 4. MITRE ATT&CK e Modelos de Ataque */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-emerald-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-emerald-500/50 transition-colors">
                  <Crosshair className="text-slate-400 group-hover:text-emerald-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">4. Modelos de Ataque</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-emerald-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Strom, B.; Kerns, A.; et al. (MITRE)</p>
                  <h4 className="text-white font-bold text-sm mb-1">MITRE ATT&CK Framework Documentation</h4>
                  <p className="text-xs text-slate-400">Base de TTPs (Tactics, Techniques and Procedures).</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-emerald-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Hutchins, E. M.; Clapp, M. J.; Amin, R. M.</p>
                  <h4 className="text-white font-bold text-sm mb-1">Intelligence-Driven Computer Network Defense (Lockheed Martin, 2011)</h4>
                  <p className="text-xs text-slate-400">Origem do modelo Cyber Kill Chain.</p>
                </div>
              </div>
            </div>

            {/* 5. Segurança Moderna */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-yellow-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-yellow-500/50 transition-colors">
                  <ShieldCheck className="text-slate-400 group-hover:text-yellow-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">5. Segurança Moderna</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-yellow-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Rose, S.; Barrett, M.; et al. (NIST)</p>
                  <h4 className="text-white font-bold text-sm mb-1">Zero Trust Architecture (SP 800-207)</h4>
                  <p className="text-xs text-slate-400">Modelo Zero Trust formalizado pelo governo americano.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-yellow-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Scarfone, Karen; et al. (NIST)</p>
                  <h4 className="text-white font-bold text-sm mb-1">Guide to Intrusion Detection and Prevention Systems (SP 800-94)</h4>
                  <p className="text-xs text-slate-400">Base para SIEM, IDS e monitoramento corporativo.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-yellow-500 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Kim, G.; Behr, K.; Spafford, G.</p>
                  <h4 className="text-white font-bold text-sm mb-1">The Phoenix Project</h4>
                  <p className="text-xs text-slate-400">Cultura operacional de TI, governança e DevSecOps.</p>
                </div>
              </div>
            </div>

            {/* 6. Criptografia */}
            <div className="bg-[#050101] border border-slate-800 p-8 rounded-2xl relative group hover:border-red-900/50 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-red-500/50 transition-colors">
                  <LockKeyhole className="text-slate-400 group-hover:text-red-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">6. Criptografia de Sistemas</h3>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-red-600 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Diffie, Whitfield; Hellman, Martin</p>
                  <h4 className="text-white font-bold text-sm mb-1">New Directions in Cryptography (1976)</h4>
                  <p className="text-xs text-slate-400">Base da criptografia assimétrica (conceitual do RSA moderno).</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-4 group-hover:border-red-600 transition-colors">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Menezes, A. J.; van Oorschot, P. C.; Vanstone, S. A.</p>
                  <h4 className="text-white font-bold text-sm mb-1">Handbook of Applied Cryptography</h4>
                  <p className="text-xs text-slate-400">Referência técnica profunda em algoritmos criptográficos.</p>
                </div>
              </div>
            </div>

            {/* 7. Threat Intelligence (Span 2 Columns for symmetry) ok */}
            <div className="bg-[#020617] border border-slate-800 p-8 rounded-2xl relative group hover:border-cyan-900/50 transition-colors lg:col-span-2 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                  <Radar className="text-slate-400 group-hover:text-cyan-500 w-6 h-6 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">7. Threat Intelligence & Segurança Operacional</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 flex-grow">
                <div className="space-y-6">
                  <div className="border-l-2 border-slate-700 pl-4 group-hover:border-cyan-500 transition-colors">
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Microsoft Security</p>
                    <h4 className="text-white font-bold text-sm mb-1">Microsoft Digital Defense Report</h4>
                    <p className="text-xs text-slate-400">Inteligência global sobre ataques, tendências de ransomware e defesas aplicadas.</p>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4 group-hover:border-cyan-500 transition-colors">
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">IBM Security</p>
                    <h4 className="text-white font-bold text-sm mb-1">X-Force Threat Intelligence Index</h4>
                    <p className="text-xs text-slate-400">Estatísticas, tendências e padrões de ataque mapeados globalmente.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-slate-700 pl-4 group-hover:border-cyan-500 transition-colors">
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Mandiant (Google Cloud)</p>
                    <h4 className="text-white font-bold text-sm mb-1">M-Trends Report (Anual)</h4>
                    <p className="text-xs text-slate-400">Casos reais de intrusão, tempo de permanência (dwell time) e operações de ransomware.</p>
                  </div>
                  <div className="border-l-2 border-slate-700 pl-4 group-hover:border-cyan-500 transition-colors">
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">Hutchins et al. (MITRE / Lockheed Martin)</p>
                    <h4 className="text-white font-bold text-sm mb-1">Adversary Campaigns Analysis</h4>
                    <p className="text-xs text-slate-400">Base teórica e operacional para análise de campanhas e comportamento adversário.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>



      </main>
    </div>
  );
};

export default RansomwareArticle;