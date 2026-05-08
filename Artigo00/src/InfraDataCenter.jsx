import React, { useEffect } from 'react';
import {
  Network, Server, Route, Radio, ArrowRightLeft,
  ShieldAlert, Terminal, Zap, Wifi, Target,
  Activity, Layers, Lock, Globe
} from 'lucide-react';

const InfraDataCenter = () => {
  // =======================================================================
  // PROTOCOLO DE BLINDAGEM REVOLUXTI ATIVADO
  // Bloqueio de F12, Inspecionar, Cópia, Seleção e Drag & Drop
  // =======================================================================
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'S' || e.key === 'C'))
      ) {
        e.preventDefault();
      }
    };

    const preventContextMenu = (e) => e.preventDefault();
    const preventSelect = (e) => e.preventDefault();
    const preventDrag = (e) => e.preventDefault();

    // Monta os escudos
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('selectstart', preventSelect);
    document.addEventListener('dragstart', preventDrag);

    // Desmonta os escudos caso o componente seja fechado (Cleanup de segurança)
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('selectstart', preventSelect);
      document.removeEventListener('dragstart', preventDrag);
    };
  }, []);



  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-cyan-500/30 select-none">

      {/* =====================================================================================
                CABEÇALHO E INTRODUÇÃO (Baseado na Capa e Resumo)
      ===================================================================================== */}
      <header className="relative bg-slate-900 border-b border-slate-800 pt-24 pb-20 px-4 overflow-hidden z-20 shadow-2xl">
        {/* Efeito de fundo Blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <hgroup>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              SALA DO ENIAC 1946 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Capítulo 04</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-10 leading-relaxed">
              A Jornada dos Dados<br />
            </h2>
            <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-2"><span className="hidden md:inline">| </span>Universidade Tecnológica Federal do Paraná<span className="hidden md:inline"> |</span></p>
            <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-10"><span className="hidden md:inline">| </span>Câmpus Pato Branco<span className="hidden md:inline"> |</span></p>
          </hgroup>

          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-800/50 p-6 md:p-2 md:pr-6 rounded-2xl md:rounded-full border border-slate-700 backdrop-blur-sm max-w-[90%] mx-auto shadow-lg">
            <span className="bg-cyan-500 text-slate-900 p-3 rounded-full">
              <Terminal size={20} />
            </span>
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Autor do Artigo</p>
              <p className="text-white font-bold">Lucas de Oliveira Santos</p>
            </div>
            <div className="h-8 w-px bg-slate-700 hidden md:block mx-4"></div>
            <div className="text-center md:text-left border-t border-slate-700 pt-4 md:pt-0 md:border-0 w-full md:w-auto mt-4 md:mt-0">
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Curso</p>
              <p className="text-white">Engenharia de Computação</p>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================================
          ÁREA DO CONTEÚDO (Com Fundo Quadriculado Blueprint)
      ====================================================================== */}
      <div className="relative">

        {/* BACKGROUND QUADRICULADO (Grid Pattern) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6)_0%,transparent_100%)] pointer-events-none z-0"></div>

        <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16 text-slate-300">

          {/* --- RESUMO (Destaque Centralizado) --- */}
          <section className="mb-20 max-w-4xl mx-auto">
            <div className="bg-[#050101]/90 backdrop-blur-sm border border-slate-800 p-8 md:p-12 rounded-2xl relative shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>

              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-6 flex items-center justify-center gap-3">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                Resumo
              </h3>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8 text-justify font-light">
                Este artigo descreve o ciclo de vida técnico de um pacote de dados originado ao processar uma venda, a sua trajetória completa em uma transação comercial, percorrendo desde a camada de aplicação no terminal de venda no evento físico do PDV (Ponto de Venda), até a persistência definitiva no banco de dados hospedado nos servidores. No cenário atual de varejo físico e digital, a latência e a integridade dos dados são cruciais e depende de uma cadeia complexa de ativos de rede. Analisaremos as camadas do modelo OSI envolvidas, os protocolos de comunicação e de roteamento, os saltos de rede (hops) e barreiras de segurança, componentes de infraestrutura como hardwares e processos lógicos necessários que garantem a velocidade, confidencialidade, integridade e a disponibilidade da informação em um ambiente de missão crítica. Baseando-se em pesquisa bibliográfica exploratória, fundamentada em literaturas clássicas de redes (Kuruse; Tanenbaum), normas de infraestrutura (Uptime Institute; ASHRAE) e frameworks de segurança (NIST; MITRE). Os resultados demonstram a evolução das topologias locais até o armazenamento em larga escala (SAN/NAS), culminando na constatação de que a hiperfocalização na segurança de software negligencia vetores de ataque físicos e de firmware (como interfaces iLO/iDRAC e dispositivos IoT). Conclui-se que a verdadeira resiliência cibernética exige a intersecção entre o conhecimento teórico de redes, a realidade operacional dos fabricantes e a blindagem em nível de <em>bare-metal</em>.
              </p>

              <div className="border-t border-slate-800 pt-6 text-center">
                <span className="text-[10px] uppercase text-cyan-500 font-bold block mb-2 tracking-[0.2em]">Palavras-chave:</span>
                <p className="text-xs text-slate-300 font-mono inline-flex flex-wrap justify-center gap-2">
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">Infraestrutura de Redes</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">Data Centers</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">Vulnerabilidades de Hardware</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">Roteamento</span>
                  <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">Segurança Física</span>
                </p>
              </div>
            </div>
          </section>

          {/* --- 1. INTRODUÇÃO --- */}
          <section className="mb-20 bg-slate-950/80 p-8 rounded-3xl border border-slate-900 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-4">
              <div className="text-cyan-500 font-black text-4xl font-mono opacity-50">1</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">Introdução</h2>
            </div>

            <div className="space-y-6 text-slate-300 text-justify leading-relaxed">

              <p>
                O tráfego de informações na internet é frequentemente abstraído para o usuário final, ocultando a complexa teia de hardwares e meios de transmissão que possibilita a comunicação.
              </p>

              <p>
                Quando um usuário clica em um link ou envia uma mensagem, o dado inicia uma jornada física invisível, porém rigorosamente coreografada. Antes de alcançar os complexos algoritmos de nuvem, essa informação precisa ser convertida em pulsos elétricos, ondas de rádio ou feixes de luz, atravessando uma infraestrutura robusta de roteadores, <em>switches</em> e cabeamentos estruturados até atingir os servidores de destino.
              </p>

              <p>
                Apesar de a academia e a indústria de TI dedicarem vastos recursos à proteção de sistemas operacionais e aplicações <em>web</em>, o suporte de toda essa superestrutura é o hardware físico. O objetivo geral deste artigo é desmistificar a arquitetura de redes e servidores, ensinando desde a concepção básica dos equipamentos de trânsito de dados até as engenharias de armazenamento em <em>Data Centers</em>.
              </p>



              <p>
                A relevância deste estudo reside na compreensão holística do ecossistema de TI. Conforme o paradigma das ameaças evolui, atacantes têm mirado a base da pirâmide estrutural. Assim, a pesquisa demonstra conexão direta entre a engenharia de comunicação e as vulnerabilidades modernas, destacando que a segurança efetiva começa no controle absoluto da camada física.
              </p>
            </div>
          </section>

          {/* --- 2. REVISÃO DE LITERATURA --- */}
          <section className="mb-20 bg-slate-950/80 p-8 rounded-3xl border border-slate-900 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4">
              <div className="text-cyan-500 font-black text-4xl font-mono opacity-50">2</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">Revisão de Literatura</h2>
            </div>

            <p className="text-slate-300 mb-12 text-justify">
              A compreensão da infraestrutura de TI exige uma análise em camadas, partindo da conectividade básica até o armazenamento corporativo. Esta revisão fundamenta-se nas principais referências de redes, engenharia de <em>Data Centers</em> e segurança de hardware.
            </p>

            {/* 2.1 A Jornada do Dado */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-3">
                <Route className="w-6 h-6 text-cyan-500" />
                2.1 A Jornada do Dado e os Equipamentos de Conectividade
              </h3>

              <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
                <p>
                  A comunicação em rede obedece a modelos conceituais, como o OSI e o TCP/IP, que padronizam como diferentes hardwares interagem. Na prática, a jornada começa no computador do cliente, cuja Placa de Interface de Rede (NIC) converte o sinal digital para o meio de transmissão.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================================
                        2.1 APROFUNDAMENTO: MEIOS FÍSICOS E BORDA SEM FIO
                     ====================================================================== */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4 bg-slate-950/80 p-8 rounded-t-3xl border-x border-t border-slate-900 backdrop-blur-sm">
              <div className="text-cyan-500 font-black text-4xl font-mono opacity-50">2.2</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">Meios Físicos e Borda Sem Fio</h2>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-b-3xl border border-slate-900 backdrop-blur-sm -mt-6">

              <p className="text-slate-300 mb-12 text-justify leading-relaxed">
                Os meios físicos constituem a camada tangível da comunicação de dados, responsável pela propagação de sinais entre dispositivos. Tradicionalmente, dividem-se em meios guiados (cabos) e não guiados (sem fio), ambos regidos por normas técnicas amplamente difundidas por organizações como o IEEE.
              </p>

              {/* --- MEIOS GUIADOS: Cobre e Fibra --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-900/30 border border-cyan-800 rounded-lg">
                    <Zap className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Meios Guiados: Cobre e Fibra Óptica</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-6">
                  Os cabos de par trançado (<em>twisted pair</em>), amplamente utilizados em redes Ethernet (padrão IEEE 802.3), operam por meio de sinais elétricos transmitidos por pares de fios entrelaçados. Esse entrelaçamento reduz interferências eletromagnéticas (EMI) e diafonia (<em>crosstalk</em>), garantindo maior integridade do sinal. Categorias como Cat5e, Cat6 e Cat6a definem limites de frequência, largura de banda e alcance.
                </p>

                <p className="text-slate-300 leading-relaxed text-justify mb-6">
                  Por outro lado, as fibras ópticas representam o estado da arte em transmissão de dados. Utilizando pulsos de luz ao invés de eletricidade, oferecem:
                </p>

                <ul className="grid md:grid-cols-3 gap-4 mb-8 font-mono text-sm">
                  <li className="bg-[#050101] border border-slate-800 hover:border-cyan-700/50 transition-colors p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 shadow-lg">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    <span className="text-cyan-300">Altíssima largura de banda</span>
                  </li>
                  <li className="bg-[#050101] border border-slate-800 hover:border-cyan-700/50 transition-colors p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 shadow-lg">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    <span className="text-cyan-300">Baixa atenuação em longas distâncias</span>
                  </li>
                  <li className="bg-[#050101] border border-slate-800 hover:border-cyan-700/50 transition-colors p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 shadow-lg">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                    <span className="text-cyan-300">Imunidade a interferências eletromagnéticas</span>
                  </li>
                </ul>

                <p className="text-slate-300 leading-relaxed mb-4">Dividem-se essencialmente em:</p>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="flex-1 bg-slate-900/50 border border-slate-800 border-l-4 border-l-blue-500 p-5 rounded-r-xl">
                    <strong className="text-white block mb-1 text-lg">Monomodo (SMF)</strong>
                    <span className="text-sm text-slate-400">Longas distâncias, backbone de operadoras.</span>
                  </div>
                  <div className="flex-1 bg-slate-900/50 border border-slate-800 border-l-4 border-l-purple-500 p-5 rounded-r-xl">
                    <strong className="text-white block mb-1 text-lg">Multimodo (MMF)</strong>
                    <span className="text-sm text-slate-400">Curtas distâncias, ambientes corporativos.</span>
                  </div>
                </div>

                <div className="bg-cyan-950/30 border-l-4 border-cyan-500 p-5 rounded-r-lg text-sm text-cyan-100 font-mono mb-10 shadow-inner">
                  A escolha entre cobre e fibra não é apenas técnica — é estratégica. Enquanto o cobre domina a borda pela flexibilidade e custo, a fibra reina no núcleo pela performance e estabilidade.
                </div>

                {/* ESPAÇO PARA IMAGEM 1: Cabos/Fibras */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950/80 to-slate-950"></div>
                  <Route className="w-12 h-12 text-slate-700 mb-3 group-hover:text-cyan-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Diagrama de Meios Guiados</span>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                  </div>
                </div>
              </div>

              {/* --- MEIOS NÃO GUIADOS: Wireless --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-900/30 border border-cyan-800 rounded-lg">
                    <Wifi className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Meios Não Guiados: Comunicação Sem Fio</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-6">
                  Nas conexões sem fio, o paradigma muda: a informação trafega pelo ar na forma de ondas eletromagnéticas. Nesse cenário, o dispositivo cliente (laptop, smartphone, IoT) comunica-se com um <strong>Access Point (AP)</strong>, que atua como ponte entre o domínio sem fio e a infraestrutura cabeada.
                </p>

                <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl mb-8 shadow-lg">
                  <p className="text-cyan-500 font-bold uppercase tracking-wider text-xs mb-4">O AP desempenha funções críticas:</p>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      Conversão de radiofrequência (RF) em sinais elétricos
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      Gerenciamento de autenticação e associação de clientes
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      Controle de canais e potência de transmissão
                    </li>
                  </ul>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-6">
                  Os padrões Wi-Fi, definidos pelo IEEE (família 802.11), evoluíram para suportar altas taxas de transmissão e múltiplos dispositivos simultâneos, com tecnologias como:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-10 font-mono text-xs md:text-sm">
                  <div className="bg-slate-900/40 p-5 rounded-lg border border-slate-800 hover:border-cyan-600 transition-colors">
                    <strong className="text-cyan-400 block mb-2 text-base">MIMO</strong>
                    <span className="text-slate-400">(Multiple Input Multiple Output)<br />Múltiplas antenas para maior throughput.</span>
                  </div>
                  <div className="bg-slate-900/40 p-5 rounded-lg border border-slate-800 hover:border-cyan-600 transition-colors">
                    <strong className="text-cyan-400 block mb-2 text-base">OFDM</strong>
                    <span className="text-slate-400">(Orthogonal Frequency Division Multiplexing)<br />Eficiência espectral.</span>
                  </div>
                  <div className="bg-slate-900/40 p-5 rounded-lg border border-slate-800 hover:border-cyan-600 transition-colors">
                    <strong className="text-cyan-400 block mb-2 text-base">Beamforming</strong>
                    <span className="text-slate-400"><br />Direcionamento inteligente do sinal.</span>
                  </div>
                </div>

                {/* ESPAÇO PARA IMAGEM 2: AP e Wireless */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950/80 to-slate-950"></div>
                  <Radio className="w-12 h-12 text-slate-700 mb-3 group-hover:text-cyan-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Diagrama de Access Point / RF</span>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                  </div>
                </div>
              </div>

              {/* --- A BORDA DA REDE E O RISCO --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-900/20 border border-red-900/50 rounded-lg">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">A Borda da Rede: Onde a Física Encontra o Risco</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-8">
                  A chamada “borda” (<em>edge</em>) da rede — composta por dispositivos finais e conexões sem fio — representa simultaneamente ponto de acesso e superfície de ataque. Diferente dos meios guiados, onde há controle físico do canal, o meio sem fio é inerentemente aberto e compartilhado. Isso introduz desafios relevantes:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#050101] border-t-2 border-red-600 p-6 rounded-b-xl shadow-lg">
                    <Target className="w-6 h-6 text-red-500 mb-4 opacity-80" />
                    <strong className="text-white block mb-2 font-mono text-sm uppercase">Interferência</strong>
                    <p className="text-sm text-slate-400">Degradação causada por sinais externos operando nas mesmas frequências.</p>
                  </div>
                  <div className="bg-[#050101] border-t-2 border-orange-500 p-6 rounded-b-xl shadow-lg">
                    <Target className="w-6 h-6 text-orange-500 mb-4 opacity-80" />
                    <strong className="text-white block mb-2 font-mono text-sm uppercase">Degradação Física</strong>
                    <p className="text-sm text-slate-400">Perda de sinal devido a obstáculos físicos (paredes, estruturas metálicas, etc).</p>
                  </div>
                  <div className="bg-[#050101] border-t-2 border-purple-600 p-6 rounded-b-xl shadow-lg">
                    <Target className="w-6 h-6 text-purple-500 mb-4 opacity-80" />
                    <strong className="text-white block mb-2 font-mono text-sm uppercase">Ataques Ativos</strong>
                    <p className="text-sm text-slate-400">Suscetibilidade a interceptação (<em>sniffing</em>), <em>deauthentication</em> e <em>evil twin</em>.</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-8 bg-slate-900/30 p-5 rounded-lg border border-slate-800">
                  Do ponto de vista de segurança, protocolos como <strong>WPA2 e WPA3</strong> foram desenvolvidos para mitigar esses riscos, mas sua eficácia depende de correta implementação e gestão.
                </p>

                {/* ESPAÇO PARA IMAGEM 3: Vetores de Risco */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-slate-950/80 to-slate-950"></div>
                  <ShieldAlert className="w-12 h-12 text-slate-700 mb-3 group-hover:text-red-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Tabela/Diagrama de Riscos</span>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                  </div>
                </div>
              </div>

              {/* --- SÍNTESE ESTRATÉGICA (Terminal Estilo Revoluxti) --- */}
              <div className="mt-8 bg-[#050101] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Síntese Estratégica</span>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-slate-300 mb-8 font-light italic text-lg border-l-4 border-slate-700 pl-4">
                    "A infraestrutura de comunicação não é apenas um conjunto de cabos e ondas invisíveis — é um ecossistema onde física, engenharia e segurança convergem."
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 font-mono text-sm mb-10">
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-2">
                      <span className="text-cyan-500 text-lg">▶ O Cobre</span>
                      <p className="text-white">Entrega <span className="text-cyan-400 font-bold">capilaridade</span></p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-2">
                      <span className="text-cyan-500 text-lg">▶ A Fibra</span>
                      <p className="text-white">Entrega <span className="text-cyan-400 font-bold">desempenho</span></p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-2">
                      <span className="text-cyan-500 text-lg">▶ O Wireless</span>
                      <p className="text-white">Entrega mobilidade — <span className="text-red-500 font-bold">e risco</span></p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                      Em última análise, dominar os meios físicos é dominar o fluxo da informação. <br className="hidden md:block" />
                      <span className="text-cyan-500 block mt-3 text-2xl md:text-3xl">E quem controla o fluxo… controla o sistema.</span>
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =====================================================================
              2.3 APROFUNDAMENTO: A CAMADA DE ORIGEM E O END-POINT
          ====================================================================== */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4 bg-slate-950/80 p-8 rounded-t-3xl border-x border-t border-slate-900 backdrop-blur-sm">
              <div className="text-cyan-500 font-black text-4xl font-mono opacity-50">2.3</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">A Camada de Origem: O End-Point</h2>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-b-3xl border border-slate-900 backdrop-blur-sm -mt-6">

              <p className="text-slate-300 mb-10 text-justify leading-relaxed">
                No cenário contemporâneo, quando um usuário que está navegando na web clica em um link, envia uma mensagem ou executa uma ação em uma loja física ou digital, o dado inicia uma jornada física invisível, uma sequência complexa de eventos telemáticos. Este fluxo não é apenas uma transferência de bits, mas uma <strong className="text-cyan-400">coreografia rigorosa</strong> entre hardware local, protocolos de rede global e clusters de alta disponibilidade. Antes de alcançar os complexos algoritmos da nuvem, essa informação precisa ser convertida em pulsos elétricos, ondas de rádio ou feixes de luz, atravessando uma infraestrutura robusta de roteadores, switches e cabeamentos estruturados até atingir os servidores de destino.
              </p>

              {/* --- A GÊNESE DO PACOTE --- */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-purple-900/30 border border-purple-800 rounded-lg">
                    <Layers className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">A Gênese do Pacote: Da Aplicação ao Enlace</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-8">
                  A jornada inicia-se na <strong className="text-white">Camada 7 (Aplicação)</strong> na interface do usuário (UI). Ao finalizar uma venda, o terminal da loja gera uma requisição estruturada HTTP POST geralmente via protocolo HTTP/HTTPS, iniciando o processo de encapsulamento <em>bottom-up</em>.
                </p>

                <div className="space-y-4 font-mono text-sm mb-12">

                  {/* Evento & Payload (Grid de 2 Colunas) */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-[#050101] border-l-4 border-l-cyan-500 border border-slate-800 p-6 rounded-r-xl shadow-lg hover:border-cyan-900/50 transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal className="w-5 h-5 text-cyan-500" />
                        <strong className="text-white uppercase tracking-wider text-base">Evento</strong>
                      </div>
                      <p className="text-slate-400 text-xs md:text-sm font-sans leading-relaxed">
                        Requisição <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono">POST /venda</code> via protocolo HTTP/HTTPS na camada de aplicação.
                      </p>
                    </div>

                    <div className="flex-1 bg-[#050101] border-l-4 border-l-blue-500 border border-slate-800 p-6 rounded-r-xl shadow-lg hover:border-blue-900/50 transition-colors">
                      <div className="flex items-center gap-2 mb-3">
                        <Activity className="w-5 h-5 text-blue-500" />
                        <strong className="text-white uppercase tracking-wider text-base">Payload</strong>
                      </div>
                      <p className="text-slate-400 text-xs md:text-sm font-sans leading-relaxed">
                        Objeto JSON contendo ID do produto, quantidade, <em>timestamp</em> e metadados vitais da transação.
                      </p>
                    </div>
                  </div>

                  {/* Encapsulamento & Protocolos */}
                  <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-xl shadow-inner mt-4">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                      <Layers className="w-6 h-6 text-purple-500" />
                      <strong className="text-white uppercase tracking-widest text-lg">Encapsulamento & Transporte</strong>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-justify text-sm md:text-base font-sans mb-8">
                      Os dados brutos são transformados em um <em>payload JSON</em> e segmentados em pacotes. Descendo para a camada de transporte, recebem cabeçalhos que garantem a entrega ordenada e portas de origem/destino. Em seguida, são encapsulados em <strong>quadros Ethernet</strong> e enviados ao switch local. Aqui, o encaminhamento é baseado no <strong>MAC Address</strong> (<em>Media Access Control</em>). O switch garante que o tráfego da rede interna da loja seja organizado antes de atingir o <em>gateway</em> de saída.
                    </p>

                    {/* TCP e IP */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#050101] p-5 rounded-lg border border-slate-800 shadow-md">
                        <div className="flex items-center gap-2 mb-3">
                          <ArrowRightLeft className="w-5 h-5 text-emerald-500" />
                          <strong className="text-emerald-400 uppercase text-sm tracking-wider">Protocolo TCP</strong>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm font-sans leading-relaxed">
                          Utiliza-se o protocolo TCP na camada de transporte para garantir que nenhum pacote seja perdido, estabelecendo um rigoroso <strong>Three-way Handshake</strong> (SYN, SYN-ACK, ACK) entre a loja e o servidor.
                        </p>
                      </div>

                      <div className="bg-[#050101] p-5 rounded-lg border border-slate-800 shadow-md">
                        <div className="flex items-center gap-2 mb-3">
                          <Network className="w-5 h-5 text-orange-500" />
                          <strong className="text-orange-400 uppercase text-sm tracking-wider">Identificação (IP)</strong>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm font-sans leading-relaxed">
                          Aqui nasce o pacote roteável, adicionando o cabeçalho de rede (Camada 3). Ele carrega o <strong>IP de origem</strong> (da loja/cliente) e o <strong>IP de destino</strong> (do servidor), permitindo o trânsito na infraestrutura global.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ESPAÇO PARA IMAGEM: Encapsulamento OSI */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-slate-950/80 to-slate-950"></div>
                  <Layers className="w-12 h-12 text-slate-700 mb-3 group-hover:text-purple-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Diagrama de Encapsulamento OSI</span>
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                  </div>
                </div>

              </div>
            </div>
          </section>


          {/* =====================================================================
              3. INFRAESTRUTURA DE REDE LOCAL (LAN) E GATEWAY
          ====================================================================== */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4 bg-slate-950/80 p-8 rounded-t-3xl border-x border-t border-slate-900 backdrop-blur-sm">
              <div className="text-cyan-500 font-black text-4xl font-mono opacity-50">3</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">Infraestrutura de Rede Local (LAN)</h2>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-b-3xl border border-slate-900 backdrop-blur-sm -mt-6">

              <p className="text-slate-300 mb-10 text-justify leading-relaxed">
                Antes de atingir a rede externa, o sistema gera uma requisição de rede, onde o pacote navega pela LAN local (<em>Local Network Address Transition</em>), atravessando o hardware interno. O pacote atinge o <strong>Switch L2</strong> da loja, operando na Camada 2 do modelo OSI (Enlace).
              </p>

              {/* --- 3.1 SWITCH & TABLA CAM --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-900/30 border border-blue-800 rounded-lg text-blue-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">3.1 - Switch: Orquestração Interna</h4>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <p className="text-slate-300 text-justify leading-relaxed text-sm md:text-base">
                      O Switch identifica que o destino está fora da rede local e utiliza a <strong>Tabela CAM</strong> (<em>Content Addressable Memory</em>) para encaminhar os frames baseando-se no MAC Address. Ele identifica a porta de saída correta para alcançar o Gateway da rede. Sua função primordial é garantir que o tráfego interno da loja não colida e chegue eficientemente ao gateway (dispositivo de conversão que interliga redes com protocolos e tecnologias diferentes).
                    </p>
                    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 border-l-2 border-l-blue-500">
                      <p className="text-xs text-slate-400 font-mono italic">
                        "O switch atua como o dispositivo de convergência que interliga a micro-infraestrutura antes da conversão de protocolos para a rede externa."
                      </p>
                    </div>
                  </div>

                  {/* MINI DASHBOARD CAM TABLE */}
                  <div className="bg-[#050101] border border-slate-800 rounded-xl p-6 font-mono text-[10px] md:text-xs shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Layers className="w-20 h-20 text-blue-500" />
                    </div>
                    <div className="text-blue-500 mb-4 border-b border-slate-800 pb-2 flex justify-between">
                      <span>CONTENT ADDRESSABLE MEMORY</span>
                      <span className="animate-pulse">STATUS: ACTIVE</span>
                    </div>
                    <table className="w-full text-left opacity-80">
                      <thead>
                        <tr className="text-slate-500 uppercase">
                          <th className="pb-2">Port</th>
                          <th className="pb-2">MAC Address</th>
                          <th className="pb-2">VLAN</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        <tr><td className="py-1">Fa0/1</td><td>00-0C-29-4F-8B-3C</td><td>10</td></tr>
                        <tr className="text-blue-400 font-bold"><td className="py-1">Gi0/1</td><td>GATEWAY_UP_LINK</td><td>TRUNK</td></tr>
                        <tr><td className="py-1">Fa0/5</td><td>00-0C-29-77-11-20</td><td>10</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                  <p className="text-slate-300 leading-relaxed text-justify text-sm md:text-base font-sans mb-8">
                    Diferentemente dos <em>hubs</em> — dispositivos legados que simplesmente replicavam o tráfego para todas as portas — o switch introduz inteligência na comutação, reduzindo colisões e elevando a eficiência da rede. Esse comportamento é fundamentado em padrões definidos pelo IEEE, especialmente no contexto das redes Ethernet (IEEE 802.3). O funcionamento do switch baseia-se em um mecanismo dinâmico conhecido como aprendizado de endereços MAC. Ao receber um quadro Ethernet, o switch executa um processo de três etapas:
                  </p>
              </div>



              {/* --- TABELA CAM E APRENDIZADO --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-900/30 border border-cyan-800 rounded-lg">
                    <Activity className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Aprendizado de Endereços e Tabela MAC</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-8">
                  O funcionamento do switch baseia-se em um mecanismo dinâmico conhecido como aprendizado de endereços MAC. Ao receber um quadro Ethernet, o switch executa um processo de três etapas:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8 relative">
                  {/* Linha conectora (visível apenas em telas grandes) */}
                  <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

                  <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center relative z-10 shadow-lg">
                    <div className="w-10 h-10 bg-cyan-900/50 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-bold font-mono mb-4">1</div>
                    <strong className="text-white mb-2">Análise de Origem</strong>
                    <p className="text-xs text-slate-400">Analisa o endereço MAC de origem do quadro recebido.</p>
                  </div>

                  <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center relative z-10 shadow-lg">
                    <div className="w-10 h-10 bg-cyan-900/50 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-bold font-mono mb-4">2</div>
                    <strong className="text-white mb-2">Associação Lógica</strong>
                    <p className="text-xs text-slate-400">Associa esse endereço à porta de entrada física específica.</p>
                  </div>

                  <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl flex flex-col items-center text-center relative z-10 shadow-lg">
                    <div className="w-10 h-10 bg-cyan-900/50 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-bold font-mono mb-4">3</div>
                    <strong className="text-white mb-2">Armazenamento (CAM)</strong>
                    <p className="text-xs text-slate-400">Armazena essa relação em uma tabela interna de alta velocidade (CAM Table).</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-6">
                  Com isso, quando um quadro precisa ser encaminhado, o switch consulta essa tabela e envia o tráfego exclusivamente para a porta correspondente ao destino, evitando transmissões desnecessárias. Se o endereço de destino for desconhecido, o switch realiza um processo chamado <strong>flooding</strong>, enviando o quadro para todas as portas (exceto a de origem), até aprender a localização correta.
                </p>

                {/* ESPAÇO PARA IMAGEM: CAM Table */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950/80 to-slate-950"></div>
                  <Network className="w-12 h-12 text-slate-700 mb-3 group-hover:text-cyan-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Diagrama: CAM Table & Flooding</span>
                </div>

                <div className="bg-slate-950/80 p-8 rounded-b-3xl border border-slate-900 backdrop-blur-sm -mt-6">

              

              

              {/* --- EFICIÊNCIA OPERACIONAL E VLANS --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-900/30 border border-blue-800 rounded-lg">
                    <Layers className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Domínios de Colisão e Segmentação (VLANs)</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-6">
                  Cada porta de um switch representa um domínio de colisão isolado, o que elimina o problema clássico de colisões presente em redes baseadas em <em>hubs</em>. Além disso, switches modernos operam em modo <em>full-duplex</em>, permitindo transmissão e recepção simultâneas. Essa arquitetura resulta em: <span className="text-cyan-400 font-mono">Redução de latência</span>, <span className="text-cyan-400 font-mono">Aumento de throughput</span> e <span className="text-cyan-400 font-mono">Melhor aproveitamento de banda</span>.
                </p>

                <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl mb-8">
                  <h5 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Segmentação Lógica (IEEE 802.1Q)
                  </h5>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Além da comutação básica, switches gerenciáveis permitem a criação de Redes Locais Virtuais (VLANs). As VLANs introduzem uma camada de abstração lógica sobre a infraestrutura física, permitindo:
                  </p>
                  <ul className="grid md:grid-cols-3 gap-4 font-mono text-xs text-blue-300">
                    <li className="bg-[#050101] border border-slate-800 p-3 rounded">Segmentação por departamento/função</li>
                    <li className="bg-[#050101] border border-slate-800 p-3 rounded">Isolamento de domínios de broadcast</li>
                    <li className="bg-[#050101] border border-slate-800 p-3 rounded">Melhoria drástica na segurança da rede</li>
                  </ul>
                  <p className="text-sm text-slate-400 leading-relaxed mt-4 italic">
                    Na prática, dispositivos em VLANs distintas comportam-se como se estivessem em redes físicas separadas, mesmo compartilhando o mesmo hardware.
                  </p>
                </div>

                <div className="bg-[#050101] border-l-4 border-purple-500 p-5 rounded-r-lg shadow-md mb-10">
                  <strong className="text-white block mb-2">Evolução: Switches de Camada 3</strong>
                  <p className="text-sm text-slate-400">
                    Embora tradicionalmente associados à Camada 2, switches modernos evoluíram para incorporar funcionalidades de Camada 3, permitindo roteamento direto entre VLANs (<em>inter-VLAN routing</em>). Essa convergência reduz a necessidade de dispositivos adicionais (roteadores dedicados) e melhora massivamente a performance em ambientes corporativos.
                  </p>
                </div>

                {/* ESPAÇO PARA IMAGEM: VLANs */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/80 to-slate-950"></div>
                  <Layers className="w-12 h-12 text-slate-700 mb-3 group-hover:text-blue-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Diagrama: Topologia VLAN</span>
                </div>
              </div>

              {/* --- RISCOS E SUPERFÍCIE DE ATAQUE --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-900/20 border border-red-900/50 rounded-lg">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Riscos e Superfície de Ataque</h4>
                </div>

                <p className="text-slate-300 leading-relaxed text-justify mb-8">
                  Apesar de sua eficiência, switches também representam vetores potenciais de ataque. O acesso físico a uma porta de rede mal configurada pode comprometer todo o domínio de comutação. Entre as ameaças mais críticas estão:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#050101] border border-red-900/30 p-5 rounded-xl hover:border-red-600 transition-colors">
                    <strong className="text-red-500 block mb-2 font-mono text-sm uppercase">MAC Flooding</strong>
                    <p className="text-xs text-slate-400">Saturação da tabela CAM com endereços falsos, forçando o switch a entrar em estado de <em>fail-open</em> (comportamento similar a um hub), vazando tráfego.</p>
                  </div>
                  <div className="bg-[#050101] border border-red-900/30 p-5 rounded-xl hover:border-red-600 transition-colors">
                    <strong className="text-red-500 block mb-2 font-mono text-sm uppercase">VLAN Hopping</strong>
                    <p className="text-xs text-slate-400">Acesso indevido entre VLANs explorando portas de tronco (<em>Trunk</em>) mal configuradas ou o protocolo DTP (Dynamic Trunking Protocol).</p>
                  </div>
                  <div className="bg-[#050101] border border-red-900/30 p-5 rounded-xl hover:border-red-600 transition-colors">
                    <strong className="text-red-500 block mb-2 font-mono text-sm uppercase">ARP Spoofing</strong>
                    <p className="text-xs text-slate-400">Interceptação de tráfego interno enganando o switch e os clientes sobre a real associação entre um IP e um MAC (Man-in-the-Middle).</p>
                  </div>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-900/30 p-6 rounded-xl">
                  <h5 className="text-emerald-500 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Práticas de Hardening Recomendadas
                  </h5>
                  <div className="flex flex-wrap gap-3 font-mono text-sm">
                    <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1.5 rounded border border-emerald-800/50">Port Security</span>
                    <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1.5 rounded border border-emerald-800/50">DHCP Snooping</span>
                    <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1.5 rounded border border-emerald-800/50">Dynamic ARP Inspection (DAI)</span>
                    <span className="bg-emerald-900/40 text-emerald-300 px-3 py-1.5 rounded border border-emerald-800/50">Desativação de Portas Inativas</span>
                  </div>
                </div>
              </div>

              {/* --- SÍNTESE ESTRATÉGICA (Terminal Style) --- */}
              <div className="mt-8 bg-[#050101] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Síntese Estratégica Executiva</span>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-slate-300 mb-8 font-light italic text-lg border-l-4 border-slate-700 pl-4">
                    "O switch não é apenas um distribuidor de tráfego — é o orquestrador da comunicação interna."
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 font-mono text-sm mb-10">
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-2">
                      <span className="text-cyan-500 text-lg">▶ Aprende</span>
                      <p className="text-white">Padrões de endereçamento.</p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-2">
                      <span className="text-cyan-500 text-lg">▶ Segmenta</span>
                      <p className="text-white">Fluxos logicos e físicos.</p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-2">
                      <span className="text-cyan-500 text-lg">▶ Impõe</span>
                      <p className="text-white">Ordem ao caos dos pacotes.</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                      Em um ambiente corporativo, onde cada milissegundo impacta desempenho e cada pacote pode carregar risco, <br className="hidden md:block" />
                      <span className="text-cyan-500 block mt-3 text-2xl md:text-3xl">o switch atua como um guardião silencioso — invisível na operação, mas crítico na estabilidade.</span>
                    </h3>
                  </div>
                </div>
              </div>

            </div>
              </div>

              {/* --- 3.2 ROTEAMENTO DE BORDA (GATEWAY) E NAT --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-orange-900/30 border border-orange-800 rounded-lg text-orange-400">
                    <Route className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">3.2 - Roteamento de Borda (Gateway) e NAT</h4>
                </div>

                <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl flex gap-6 items-start mt-6 shadow-lg">
            <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20 shrink-0">
              <Route className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">O Roteador (A Fronteira WAN)</h4>
              <p className="text-sm text-slate-300">
                Para que a informação saia da rede local e ganhe a internet (WAN), ela passa pelo <strong>Roteador</strong>. Operando na Camada 3, ele lê endereços IP e calcula a melhor rota global para o pacote de dados chegar ao destino, conectando redes distintas (STALLINGS).
              </p>
            </div>
          </div>

                <p className="text-slate-300 mb-8 text-justify leading-relaxed">
                  O roteador da loja atua como a <strong>fronteira definitiva</strong> entre o domínio privado e a rede pública. Neste ponto crítico, ocorre o processo de <strong>NAT (Network Address Translation)</strong>, transformando o pacote local em um pacote globalmente roteável.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* CARD NAT PROCESS */}
                  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-orange-500/10 p-3 rounded-full border border-orange-500/20">
                        <ArrowRightLeft className="w-6 h-6 text-orange-400" />
                      </div>
                      <h5 className="text-white font-bold uppercase tracking-widest text-sm">Tradução de Endereços (NAT)</h5>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      O endereço IP privado do terminal de vendas (IP interno) é traduzido para o <strong>IP Público</strong> fornecido pelo provedor (ISP). Isso permite a comunicação bidirecional com a internet e mascara a estrutura interna da loja.
                    </p>
                  </div>

                  {/* CARD GLOBAL ROUTABILITY */}
                  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-cyan-500/10 p-3 rounded-full border border-cyan-500/20">
                        <Globe className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h5 className="text-white font-bold uppercase tracking-widest text-sm">Roteabilidade Global</h5>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      Sem o NAT, o pacote morreria no primeiro salto fora da rede local. Com a tradução, o pacote recebe o selo de autenticidade para navegar pela infraestrutura global do ISP até o seu destino final.
                    </p>
                  </div>
                </div>

                {/* VISUAL NAT CONVERSION DIAGRAM (PRE-CONFIGURED) */}
                <div className="w-full bg-[#050101] border border-slate-800 rounded-xl p-8 relative overflow-hidden group mb-12 shadow-inner">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Route className="w-32 h-32 text-orange-500" />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-center">
                      <span className="text-[10px] text-slate-500 font-mono block mb-2 uppercase">Internal IP (Private)</span>
                      <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded font-mono text-orange-400">192.168.1.50</div>
                    </div>

                    <div className="flex-1 flex items-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
                      <div className="bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/50 text-[10px] text-orange-300 font-bold uppercase tracking-tighter">NAT Engine</div>
                      <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
                    </div>

                    <div className="text-center">
                      <span className="text-[10px] text-slate-500 font-mono block mb-2 uppercase">Global IP (Public)</span>
                      <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded font-mono text-cyan-400">201.45.188.12</div>
                    </div>
                  </div>

                  <div className="mt-8 text-center border-t border-slate-800 pt-6">
                    <span className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em]">Fluxo de Saída: Borda da Rede Local</span>
                  </div>
                </div>
              </div>

              {/* --- SÍNTESE ESTRATÉGICA (Terminal Style) --- */}
              <div className="mt-8 bg-[#050101] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-orange-500" />
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Resumo Operacional: Fronteira</span>
                </div>
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 font-mono text-sm mb-10">
                    <div className="flex items-start gap-4">
                      <span className="text-orange-500 text-lg">▶</span>
                      <p className="text-slate-300 leading-relaxed">
                        <strong className="text-white block mb-1">O Switch</strong>
                        Organiza o caos interno, segmenta o domínio de colisão e entrega o pacote ao ponto de saída.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-orange-500 text-lg">▶</span>
                      <p className="text-slate-300 leading-relaxed">
                        <strong className="text-white block mb-1">O Gateway (NAT)</strong>
                        Realiza a metamorfose do endereço, habilitando a existência do pacote no ecossistema global.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8 text-center">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                      Na Borda da LAN, a rede interna morre e a <br className="hidden md:block" />
                      <span className="text-orange-500 block mt-3 text-2xl md:text-3xl underline decoration-orange-900 underline-offset-8">Comunicação Global ganha vida.</span>
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </section>





          





        </main>
      </div>
    </div>
  );
};

export default InfraDataCenter;