import React from 'react';
import { 
  ShieldAlert, Lock, Activity, Terminal, Skull, 
  Zap, Workflow, TrendingUp, Layers, FileWarning, 
  ShieldPlus, Database, AlertCircle, ChevronRight,
  Fingerprint, Briefcase, Network, DownloadCloud,
  ShieldCheck, AlertTriangle, Crosshair
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
              No fim do dia, ransomware não é sobre código. <br/>
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




        
      </main>
    </div>
  );
};

export default RansomwareArticle;