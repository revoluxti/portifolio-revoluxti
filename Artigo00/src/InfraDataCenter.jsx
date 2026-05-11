import React, { useEffect, useState } from 'react';
import {
  Network, Server, Route, Radio, ArrowRightLeft,
  ShieldAlert, Terminal, Zap, Wifi, Target,
  Activity, Layers, Lock, Globe, ShieldCheck, Filter,
  Skull, AlertTriangle
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

  // =======================================================================
  // LÓGICA DO LABORATÓRIO INTERATIVO (SEÇÃO 5)
  // =======================================================================
  const [packetStatus, setPacketStatus] = useState('IDLE');
  const [securityStatus, setSecurityStatus] = useState({
    ddos: 'ACTIVE',
    ngfw: 'ACTIVE',
    waf: 'ACTIVE',
    server: 'READY'
  });
  const [activeAnimation, setActiveAnimation] = useState(null);

  const packetTypes = {
    LEGIT: { id: 'LEGIT', label: 'Pacote Legítimo (HTTPS)', desc: 'Requisição HTTPS GET (Porta 443)', icon: Zap, color: 'cyan' },
    DDOS: { id: 'DDOS', label: 'Ataque DDoS (Volumétrico)', desc: 'Saturação de banda (Camada 3/4)', icon: Skull, color: 'red' },
    BAD_PORT: { id: 'BAD_PORT', label: 'Forbidden Port (SSH)', desc: 'Requisição na Porta 22 (Bloqueio NGFW)', icon: AlertTriangle, color: 'amber' },
    SQLI: { id: 'SQLI', label: 'Payload SQL Injection', desc: 'Dados maliciosos no JSON (Bloqueio WAF)', icon: ShieldAlert, color: 'purple' },
  };

  const triggerSimulation = (packet) => {
    if (activeAnimation) return; // Impede múltiplas execuções

    setPacketStatus('SIMULATING');
    setSecurityStatus({ ddos: 'ACTIVE', ngfw: 'ACTIVE', waf: 'ACTIVE', server: 'READY' });
    setActiveAnimation(packet.id);

    // 1. Camada 01: DDoS Mitigação
    setTimeout(() => {
      if (packet.id === 'DDOS') {
        setSecurityStatus(prev => ({ ...prev, ddos: 'BLOCKING' }));
        setTimeout(() => {
          setSecurityStatus(prev => ({ ...prev, ddos: 'NEUTRALIZED' }));
          setActiveAnimation(null);
          setPacketStatus('IDLE');
        }, 1000);
        return;
      }
      setSecurityStatus(prev => ({ ...prev, ddos: 'PASSED' }));
    }, 800);

    // 2. Camada 02: NGFW (Port check)
    setTimeout(() => {
      if (packet.id === 'BAD_PORT') {
        setSecurityStatus(prev => ({ ...prev, ngfw: 'BLOCKING' }));
        setTimeout(() => {
          setSecurityStatus(prev => ({ ...prev, ngfw: 'NEUTRALIZED' }));
          setActiveAnimation(null);
          setPacketStatus('IDLE');
        }, 1000);
        return;
      }
      setSecurityStatus(prev => ({ ...prev, ngfw: 'PASSED' }));
    }, 1600);

    // 3. Camada 03: WAF (Payload inspection)
    setTimeout(() => {
      if (packet.id === 'SQLI') {
        setSecurityStatus(prev => ({ ...prev, waf: 'BLOCKING' }));
        setTimeout(() => {
          setSecurityStatus(prev => ({ ...prev, waf: 'NEUTRALIZED' }));
          setActiveAnimation(null);
          setPacketStatus('IDLE');
        }, 1000);
        return;
      }
      setSecurityStatus(prev => ({ ...prev, waf: 'PASSED' }));
    }, 2400);

    // 4. Servidor Final
    setTimeout(() => {
      setSecurityStatus(prev => ({ ...prev, server: 'PROCESSING' }));
      setTimeout(() => {
        setSecurityStatus(prev => ({ ...prev, server: 'Venda Confirmada' }));
        setActiveAnimation(null);
        setPacketStatus('IDLE');
      }, 800);
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': case 'READY': return 'text-slate-600';
      case 'BLOCKING': case 'NEUTRALIZED': return 'text-red-500';
      case 'PASSED': case 'PROCESSING': return 'text-emerald-500';
      case 'Venda Confirmada': return 'text-cyan-400 font-bold';
      default: return 'text-slate-300';
    }
  };

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
                  O roteador da loja atua como a <strong>fronteira definitiva</strong> entre o domínio privado e a rede pública. Neste ponto crítico, ocorre o processo de <strong>NAT (Network Address Translation)</strong>, transformando o pacote local em um pacote globalmente roteável. <br />
                  O endereço IP privado do terminal de vendas (caixa da loja) é traduzido para IP público fornecido pelo provedor de internet (ISP), permitindo a comunicação bidirecional com a internet, e que faz que o pacote seja roteável pela internet global.
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


          {/* =====================================================================
              4. O TRÂNSITO GLOBAL: BACKBONE E PROVEDORES (ISP)
          ====================================================================== */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4 bg-slate-950/80 p-8 rounded-t-3xl border-x border-t border-slate-900 backdrop-blur-sm shadow-xl">
              <div className="text-indigo-500 font-black text-4xl font-mono opacity-50">4</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">O Trânsito Global: Backbone e Provedores (ISP)</h2>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-b-3xl border border-slate-900 backdrop-blur-sm -mt-6">

              <p className="text-slate-300 mb-10 text-justify leading-relaxed text-lg">
                Ao sair da LAN local, o pacote de dados abandona o domínio privado e ingressa na colossal infraestrutura do <strong>ISP (Internet Service Provider)</strong>. Neste estágio, o transporte não é mais linear; ele é regido por decisões autônomas tomadas em frações de milissegundo por roteadores de altíssima performance.
              </p>

              {/* --- 4.1 BGP E ROTEAMENTO INTERDOMÍNIO --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-900/30 border border-indigo-800 rounded-lg text-indigo-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">4.1 - Roteamento Interdomínio (BGP)</h4>
                </div>

                <p className="text-slate-300 text-justify leading-relaxed mb-6">
                  Através do protocolo <strong>BGP (Border Gateway Protocol)</strong> — o verdadeiro "mapa" da internet —, os roteadores de borda decidem a melhor rota entre <strong>Sistemas Autônomos (AS)</strong>. O objetivo é que o pacote encontre o caminho mais curto ou mais estável para alcançar os prefixos IP dos servidores de destino.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#050101] border-l-4 border-indigo-500 p-6 rounded-r-xl shadow-lg hover:border-indigo-400 transition-colors">
                    <strong className="text-indigo-400 block mb-2 font-mono uppercase tracking-wider text-sm">Externo: BGP</strong>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Gerencia o tráfego <em>entre</em> diferentes provedores e continentes. É o protocolo que "costura" a internet global, anunciando quais IPs pertencem a quais redes.
                    </p>
                  </div>
                  <div className="bg-[#050101] border-l-4 border-cyan-500 p-6 rounded-r-xl shadow-lg hover:border-cyan-400 transition-colors">
                    <strong className="text-cyan-400 block mb-2 font-mono uppercase tracking-wider text-sm">Interno: OSPF / IS-IS</strong>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Enquanto o BGP olha para o mundo, protocolos como OSPF ou IS-IS gerenciam o roteamento <em>interno</em> dentro da infraestrutura física do próprio provedor (ISP).
                    </p>
                  </div>
                </div>
              </div>

              {/* --- 4.2 SALTO A SALTO (HOP-BY-HOP) --- */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-900/30 border border-purple-800 rounded-lg text-purple-400">
                    <Route className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">4.2 - Salto a Salto (Hop-by-Hop) e Backbone</h4>
                </div>

                <p className="text-slate-300 text-justify leading-relaxed mb-8">
                  O pacote de dados viaja pela rede conectando-se fisicamente através de Pontos de Troca de Tráfego (<strong>IXPs – Internet Exchange Points</strong>). De forma extremamente eficiente, ele atravessa <em>links</em> por diversos roteadores de backbone, utilizando-se de cabos terrestres e <strong>fibras ópticas submarinas</strong> de alta velocidade. A cada roteador no caminho, o destino é reavaliado buscando a menor latência possível.
                </p>

                {/* PAINEL TÁTICO: TRACEROUTE MONITOR */}
                <div className="bg-[#020617] border border-slate-800 rounded-xl p-6 font-mono shadow-2xl relative overflow-hidden mb-8">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <Activity className="w-4 h-4 animate-pulse" />
                      <span className="text-xs uppercase tracking-widest">Live Traceroute Telemetry</span>
                    </div>
                    <span className="text-[10px] text-slate-500">PROTOCOL: ICMP/UDP</span>
                  </div>

                  <div className="space-y-4 relative">
                    {/* Linha vertical conectora */}
                    <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-800 z-0"></div>

                    {/* HOP 1 */}
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-orange-500 flex items-center justify-center text-[10px] font-bold text-orange-500 shrink-0">1</div>
                      <div className="flex-1 bg-slate-900/50 p-3 rounded border border-slate-800 flex justify-between items-center">
                        <div>
                          <span className="text-white block text-sm">192.168.1.1</span>
                          <span className="text-slate-500 text-[10px]">Gateway Local (Loja)</span>
                        </div>
                        <span className="text-emerald-400 text-xs">{"< 1 ms"}</span>
                      </div>
                    </div>

                    {/* HOP 2 */}
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-[10px] font-bold text-cyan-500 shrink-0">2</div>
                      <div className="flex-1 bg-slate-900/50 p-3 rounded border border-slate-800 flex justify-between items-center">
                        <div>
                          <span className="text-white block text-sm">201.x.x.x</span>
                          <span className="text-slate-500 text-[10px]">ISP Edge Router (Provedor)</span>
                        </div>
                        <span className="text-emerald-400 text-xs">4 ms</span>
                      </div>
                    </div>

                    {/* HOP 3 */}
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-[10px] font-bold text-indigo-500 shrink-0">3</div>
                      <div className="flex-1 bg-indigo-950/30 p-3 rounded border border-indigo-900/50 flex justify-between items-center shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                        <div>
                          <span className="text-white block text-sm">ix.br-sp.nic.br</span>
                          <span className="text-indigo-400 text-[10px]">IXP - Ponto de Troca de Tráfego (Backbone)</span>
                        </div>
                        <span className="text-yellow-400 text-xs">12 ms</span>
                      </div>
                    </div>

                    {/* HOP 4 (Destination) */}
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center text-[10px] font-bold text-purple-500 shrink-0">4</div>
                      <div className="flex-1 bg-slate-900/50 p-3 rounded border border-slate-800 flex justify-between items-center">
                        <div>
                          <span className="text-white block text-sm">104.x.x.x</span>
                          <span className="text-slate-500 text-[10px]">Data Center Target (Servidor Destino)</span>
                        </div>
                        <span className="text-orange-400 text-xs">45 ms</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ESPAÇO PARA IMAGEM: Mapa de Cabos Submarinos / IXP */}
                <div className="w-full aspect-video md:aspect-[21/9] bg-[#020617] border border-slate-800 border-dashed rounded-xl flex flex-col items-center justify-center shadow-inner relative overflow-hidden group mb-6">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-950/80 to-slate-950"></div>
                  <Globe className="w-12 h-12 text-slate-700 mb-3 group-hover:text-indigo-500 transition-colors duration-500 z-10" />
                  <span className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.2em] z-10">Inserir Diagrama de Cabos Submarinos / Backbone</span>
                </div>

              </div>

              {/* --- SÍNTESE ESTRATÉGICA (Terminal Style) --- */}
              <div className="mt-8 bg-[#050101] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-indigo-500" />
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Síntese Estratégica: A Teia Global</span>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-slate-300 mb-8 font-light italic text-lg border-l-4 border-slate-700 pl-4">
                    "A internet não é uma nuvem invisível; ela é a maior infraestrutura física já construída pela humanidade."
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 font-mono text-sm mb-10">
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex items-start gap-3">
                      <span className="text-indigo-500 text-lg">▶</span>
                      <p className="text-slate-300">
                        <strong className="text-white block mb-1 text-base">O BGP</strong>
                        Atua como o diplomata geopolítico dos dados, negociando rotas entre megacorporações.
                      </p>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex items-start gap-3">
                      <span className="text-indigo-500 text-lg">▶</span>
                      <p className="text-slate-300">
                        <strong className="text-white block mb-1 text-base">O Backbone</strong>
                        As artérias de fibra óptica submarinas que transportam a economia digital global em milissegundos.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-8 text-center">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                      Nesta camada de trânsito, a velocidade da luz <br className="hidden md:block" />
                      <span className="text-indigo-500 block mt-3 text-2xl md:text-3xl">é o único limite aceitável.</span>
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =====================================================================
              5. O ECOSSISTEMA: SEGURANÇA E PROCESSAMENTO
          ====================================================================== */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4 bg-slate-950/80 p-8 rounded-t-3xl border-x border-t border-slate-900 backdrop-blur-sm shadow-2xl">
              <div className="text-cyan-500 font-black text-4xl font-mono opacity-50">5</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-wider">O Ecossistema: Segurança e Processamento</h2>
            </div>

            <div className="bg-slate-950/80 p-8 rounded-b-3xl border border-slate-900 backdrop-blur-sm -mt-6">

              <p className="text-slate-300 mb-10 text-justify leading-relaxed">
                Após navegar pelo backbone da internet e atingir o IP de destino (Data center ou Cloud), o pacote entra no perímetro do ambiente controlado pelo fornecedor de hospedagem. A segurança e a alta disponibilidade são prioridade absoluta aqui. A recepção é dividida em múltiplas camadas de segurança e distribuição, onde o processo de <strong className="text-cyan-400 font-mono">“desencapsulamento”</strong> e filtragem cirúrgica começa.
              </p>

              {/* --- 5.1 PERÍMETRO DE SEGURANÇA --- */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-cyan-900/30 border border-cyan-800 rounded-lg text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">5.1 - Perímetro de Segurança (Firewall e WAF)</h4>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {/* LAYER 1: DDoS & Firewall */}
                  <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative overflow-hidden group shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Filter className="w-5 h-5 text-cyan-500" />
                      <span className="text-white font-bold text-xs uppercase tracking-widest">Camada 01: NGFW</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 text-justify">
                      O tráfego é inspecionado, o primeiro contato é com o Firewall de próxima geração. Filtros de pacote verificam se a requisição é legítima, se a porta (ex:443 para HTTPS) está aberta e mitigam ataques volumétricos de negação de serviços (DDoS).
                    </p>
                  </div>

                  {/* LAYER 2: WAF Inspection */}
                  <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative overflow-hidden group shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="w-5 h-5 text-blue-500" />
                      <span className="text-white font-bold text-xs uppercase tracking-widest">Camada 02: WAF</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 text-justify">
                      Firewalls de aplicação verificam se a origem não apresenta comportamento malicioso, bloqueando injeções maliciosas (como SQL injection). Se não corresponder aos padrões ou se originar de um IP suspeito, o pacote é descartado para proteção da infraestrutura.
                    </p>
                  </div>

                  {/* LAYER 3: Internal Routing */}
                  <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative overflow-hidden group shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <ArrowRightLeft className="w-5 h-5 text-purple-500" />
                      <span className="text-white font-bold text-xs uppercase tracking-widest">Camada 03: Switching DC</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 text-justify">
                      Apenas requisições legítimas na porta 443 prosseguem. Se aprovado, o pacote atravessa para o gateway de entrada e para o Switch de Data Center (backplane de baixa latência em microssegundos), que o encaminha para o servidor específico que processa a venda.
                    </p>
                  </div>
                </div>

                {/* =====================================================================
                  5.1.L - LABORATÓRIO INTERATIVO: SIMULADOR DE PERÍMETRO (DEEP DIVE)
              ====================================================================== */}
                <div className="mb-16 mt-12 bg-[#020617] border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden group select-none">

                  {/* Background Grid Pattern (Blueprint local) */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] opacity-[0.03] pointer-events-none"></div>

                  <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-900/50 border border-cyan-800 rounded-lg text-cyan-400">
                        <Terminal className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-wider">Laboratório Tático Revoluxti</h4>
                        <p className="text-xs text-slate-500 font-mono">Simulador de Perímetro DC Security // v1.0</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-slate-900 px-3 py-1 rounded-full border border-slate-800 font-mono text-slate-600 tracking-widest hidden md:block">MODE: INTERACTIVE_LAB</span>
                  </div>

                  {/* LOGICA DO SIMULADOR (Injetada diretamente no Componente) */}
                  {(() => {
                    // Estados do Simulador
                    const [packetStatus, setPacketStatus] = useState('IDLE'); // IDLE, DDOS, BAD_PORT, SQLI, LEGIT
                    const [securityStatus, setSecurityStatus] = useState({
                      ddos: 'ACTIVE',
                      ngfw: 'ACTIVE',
                      waf: 'ACTIVE',
                      server: 'READY'
                    });
                    const [activeAnimation, setActiveAnimation] = useState(null);

                    // Tipos de Pacotes e suas definições táticas
                    const packetTypes = {
                      LEGIT: { id: 'LEGIT', label: 'Pacote Legítimo (HTTPS)', desc: 'Requisição HTTPS GET (Porta 443)', icon: Zap, color: 'cyan' },
                      DDOS: { id: 'DDOS', label: 'Ataque DDoS (Volumétrico)', desc: 'Saturação de banda (Camada 3/4)', icon: Skull, color: 'red' },
                      BAD_PORT: { id: 'BAD_PORT', label: 'Forbidden Port (SSH)', desc: 'Requisição na Porta 22 (Bloqueio NGFW)', icon: AlertTriangle, color: 'amber' },
                      SQLI: { id: 'SQLI', label: 'Payload SQL Injection', desc: 'Dados maliciosos no JSON (Bloqueio WAF)', icon: ShieldAlert, color: 'purple' },
                    };

                    // Função para disparar a simulação
                    const triggerSimulation = (packet) => {
                      if (activeAnimation) return; // Impede multiplas execuções simultâneas

                      setPacketStatus('SIMULATING');
                      setSecurityStatus({ ddos: 'ACTIVE', ngfw: 'ACTIVE', waf: 'ACTIVE', server: 'READY' }); // Reseta status visuais
                      setActiveAnimation(packet.id);

                      // Linha do tempo da simulação tática (Sequencial)

                      // 1. Camada 01: DDoS Mitigação
                      setTimeout(() => {
                        if (packet.id === 'DDOS') {
                          setSecurityStatus(prev => ({ ...prev, ddos: 'BLOCKING' }));
                          setTimeout(() => {
                            setSecurityStatus(prev => ({ ...prev, ddos: 'NEUTRALIZED' }));
                            setActiveAnimation(null);
                            setPacketStatus('IDLE');
                          }, 1000);
                          return; // Fim da jornada
                        }
                        setSecurityStatus(prev => ({ ...prev, ddos: 'PASSED' }));
                      }, 800);

                      // 2. Camada 02: NGFW (Port check)
                      setTimeout(() => {
                        if (packet.id === 'BAD_PORT') {
                          setSecurityStatus(prev => ({ ...prev, ngfw: 'BLOCKING' }));
                          setTimeout(() => {
                            setSecurityStatus(prev => ({ ...prev, ngfw: 'NEUTRALIZED' }));
                            setActiveAnimation(null);
                            setPacketStatus('IDLE');
                          }, 1000);
                          return; // Fim da jornada
                        }
                        setSecurityStatus(prev => ({ ...prev, ngfw: 'PASSED' }));
                      }, 1600);

                      // 3. Camada 03: WAF (Payload inspection)
                      setTimeout(() => {
                        if (packet.id === 'SQLI') {
                          setSecurityStatus(prev => ({ ...prev, waf: 'BLOCKING' }));
                          setTimeout(() => {
                            setSecurityStatus(prev => ({ ...prev, waf: 'NEUTRALIZED' }));
                            setActiveAnimation(null);
                            setPacketStatus('IDLE');
                          }, 1000);
                          return; // Fim da jornada
                        }
                        setSecurityStatus(prev => ({ ...prev, waf: 'PASSED' }));
                      }, 2400);

                      // 4. Servidor Final (Processamento)
                      setTimeout(() => {
                        setSecurityStatus(prev => ({ ...prev, server: 'PROCESSING' }));
                        setTimeout(() => {
                          setSecurityStatus(prev => ({ ...prev, server: 'Venda Confirmada' }));
                          setActiveAnimation(null);
                          setPacketStatus('IDLE');
                        }, 800);
                      }, 3000);
                    };

                    // Helper para cor de status
                    const getStatusColor = (status) => {
                      switch (status) {
                        case 'ACTIVE': case 'READY': return 'text-slate-600';
                        case 'BLOCKING': case 'NEUTRALIZED': return 'text-red-500';
                        case 'PASSED': case 'PROCESSING': return 'text-emerald-500';
                        case 'Venda Confirmada': return 'text-cyan-400 font-bold';
                        default: return 'text-slate-300';
                      }
                    };

                    return (
                      <div className="relative z-10 grid md:grid-cols-[250px_1fr] gap-8">

                        {/* PAINEL DE CONTROLE (BOTÕES) */}
                        <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl shadow-inner">
                          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-cyan-600" />
                            Disparador de Pacotes
                          </h5>

                          <div className="space-y-4 font-mono text-[11px]">
                            {Object.values(packetTypes).map(packet => {
                              const Icon = packet.icon;
                              const isSelected = activeAnimation === packet.id;

                              // Definição de cores táticas baseadas no tipo de ataque
                              const buttonColors = {
                                cyan: 'border-cyan-800 bg-cyan-950/20 text-cyan-300 hover:border-cyan-600',
                                red: 'border-red-900 bg-red-950/10 text-red-400 hover:border-red-600',
                                amber: 'border-amber-900 bg-amber-950/10 text-amber-300 hover:border-amber-500',
                                purple: 'border-purple-900 bg-purple-950/10 text-purple-300 hover:border-purple-600',
                              };
                              const selectedColors = {
                                cyan: 'border-cyan-500 bg-cyan-950/80 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]',
                                red: 'border-red-500 bg-red-950/60 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]',
                                amber: 'border-amber-500 bg-amber-950/60 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)]',
                                purple: 'border-purple-500 bg-purple-950/60 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]',
                              };

                              return (
                                <button
                                  key={packet.id}
                                  onClick={() => triggerSimulation(packet)}
                                  disabled={packetStatus === 'SIMULATING'}
                                  className={`w-full border p-4 rounded-lg flex items-start gap-3 transition-all duration-300 text-left relative overflow-hidden ${isSelected ? selectedColors[packet.color] : buttonColors[packet.color]
                                    } ${packetStatus === 'SIMULATING' && !isSelected ? 'opacity-30 cursor-not-allowed' : ''}`}>
                                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-white animate-pulse' : ''}`} />
                                  <div>
                                    <strong className="block text-xs uppercase tracking-wider">{packet.label}</strong>
                                    <span className={`font-sans ${isSelected ? 'text-white/80' : 'text-slate-500'} font-light text-[10px]`}>{packet.desc}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* VISUALIZAÇÃO ARENA (Onde a animação corre) */}
                        <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl relative shadow-inner flex flex-col justify-between">
                          <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6 text-center">Simulação de Fluxo de Perímetro (Desencapsulamento bottom-up)</h5>

                          <div className="space-y-4 relative font-mono text-xs">

                            {/* Linha Vertical Tática */}
                            <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-slate-800/60 z-0"></div>

                            {/* Camada 01: DDoS */}
                            <div className="flex items-center gap-4 relative z-10 transition-opacity duration-300 ${activeAnimation && activeAnimation !== 'DDOS' ? 'opacity-100' : ''}">
                              <div className={`w-10 h-10 bg-slate-950 border ${securityStatus.ddos === 'BLOCKING' ? 'border-red-600' : 'border-slate-800'} rounded flex items-center justify-center text-slate-600 transition-colors`}>
                                <Skull className={`w-5 h-5 ${securityStatus.ddos === 'BLOCKING' || securityStatus.ddos === 'NEUTRALIZED' ? 'text-red-500' : 'text-slate-700'}`} />
                              </div>
                              <div className="flex-1 bg-slate-900 border border-slate-800 p-3 rounded flex justify-between items-center shadow-lg">
                                <span>01. Mitigação DDoS</span>
                                <span className={`${getStatusColor(securityStatus.ddos)}`}>{securityStatus.ddos}</span>
                              </div>
                              {/* Indicador Visual de Bloqueio (Luz vermelha pulsante local) */}
                              {(securityStatus.ddos === 'BLOCKING' || securityStatus.ddos === 'NEUTRALIZED') && <div className="absolute inset-0 bg-red-950/20 blur-xl pointer-events-none rounded transition-opacity duration-300"></div>}
                            </div>

                            {/* Camada 02: NGFW (Firewall) */}
                            <div className="flex items-center gap-4 relative z-10 transition-opacity duration-300 ${activeAnimation && !['LEGIT', 'SQLI'].includes(activeAnimation) ? 'opacity-100' : 'opacity-40'}">
                              <div className={`w-10 h-10 bg-slate-950 border ${securityStatus.ngfw === 'BLOCKING' ? 'border-red-600' : 'border-slate-800'} rounded flex items-center justify-center transition-colors`}>
                                <Filter className={`w-5 h-5 ${securityStatus.ngfw === 'BLOCKING' || securityStatus.ngfw === 'NEUTRALIZED' ? 'text-red-500' : 'text-slate-700'}`} />
                              </div>
                              <div className="flex-1 bg-slate-900 border border-slate-800 p-3 rounded flex justify-between items-center shadow-lg">
                                <span>02. NGFW (Port / IP Check)</span>
                                <span className={`${getStatusColor(securityStatus.ngfw)}`}>{securityStatus.ngfw}</span>
                              </div>
                              {(securityStatus.ngfw === 'BLOCKING' || securityStatus.ngfw === 'NEUTRALIZED') && <div className="absolute inset-0 bg-red-950/20 blur-xl pointer-events-none rounded transition-opacity duration-300"></div>}
                            </div>

                            {/* Camada 03: WAF */}
                            <div className="flex items-center gap-4 relative z-10 transition-opacity duration-300 ${activeAnimation && activeAnimation === 'SQLI' ? 'opacity-100' : 'opacity-40'}">
                              <div className={`w-10 h-10 bg-slate-950 border ${securityStatus.waf === 'BLOCKING' ? 'border-red-600' : 'border-slate-800'} rounded flex items-center justify-center transition-colors`}>
                                <Lock className={`w-5 h-5 ${securityStatus.waf === 'BLOCKING' || securityStatus.waf === 'NEUTRALIZED' ? 'text-red-500' : 'text-slate-700'}`} />
                              </div>
                              <div className="flex-1 bg-slate-900 border border-slate-800 p-3 rounded flex justify-between items-center shadow-lg">
                                <span>03. WAF (Payload Inspection)</span>
                                <span className={`${getStatusColor(securityStatus.waf)}`}>{securityStatus.waf}</span>
                              </div>
                              {(securityStatus.waf === 'BLOCKING' || securityStatus.waf === 'NEUTRALIZED') && <div className="absolute inset-0 bg-red-950/20 blur-xl pointer-events-none rounded transition-opacity duration-300"></div>}
                            </div>

                            {/* Target Server */}
                            <div className="flex items-center gap-4 relative z-10 ${activeAnimation === 'LEGIT' ? 'opacity-100' : 'opacity-40'}">
                              <div className={`w-10 h-10 bg-slate-950 border border-slate-800 rounded flex items-center justify-center transition-colors`}>
                                <Server className={`w-5 h-5 ${securityStatus.server === 'READY' ? 'text-slate-700' : 'text-cyan-500'}`} />
                              </div>
                              <div className="flex-1 bg-slate-900 border border-slate-800 p-3 rounded flex justify-between items-center shadow-lg">
                                <span>Processamento (Web Server)</span>
                                <span className={`${getStatusColor(securityStatus.server)}`}>{securityStatus.server}</span>
                              </div>
                              {securityStatus.server === 'PROCESSING' && <div className="absolute inset-0 bg-cyan-950/20 blur-xl pointer-events-none rounded animate-pulse"></div>}
                            </div>
                          </div>

                          {/* PAINEL DE STATUS FINAL */}
                          <div className="mt-8 border-t border-slate-800 pt-6 text-center min-h-[50px] flex items-center justify-center font-sans">
                            {activeAnimation ? (
                              <div className={`inline-flex items-center gap-3 bg-slate-900 border px-6 py-2 rounded-full text-sm ${securityStatus.ddos === 'NEUTRALIZED' || securityStatus.ngfw === 'NEUTRALIZED' || securityStatus.waf === 'NEUTRALIZED'
                                ? 'border-red-900 text-red-300'
                                : 'border-cyan-800 text-cyan-300'
                                }`}>
                                {securityStatus.ddos === 'NEUTRALIZED' || securityStatus.ngfw === 'NEUTRALIZED' || securityStatus.waf === 'NEUTRALIZED' ? <Skull className="w-4 h-4 text-red-500" /> : <Zap className="w-4 h-4 text-cyan-500" />}
                                <span>Processando: <strong className="font-mono">{packetTypes[activeAnimation].label}</strong>...</span>
                              </div>
                            ) : securityStatus.server === 'Venda Confirmada' ? (
                              <div className="inline-flex items-center gap-3 bg-cyan-950/20 border border-cyan-800/50 px-6 py-2 rounded-full text-sm text-cyan-300 font-bold animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                                <span>RESULTADO: Requisição Confirmada // Venda Processada!</span>
                              </div>
                            ) : securityStatus.ddos === 'NEUTRALIZED' || securityStatus.ngfw === 'NEUTRALIZED' || securityStatus.waf === 'NEUTRALIZED' ? (
                              <div className="inline-flex items-center gap-3 bg-red-950/20 border border-red-900/50 px-6 py-2 rounded-full text-sm text-red-300 font-bold">
                                <AlertTriangle className="w-4 h-4 text-red-500" />
                                <span>RESULTADO: Ameaça Bloqueada e Neutralizada no Perímetro!</span>
                              </div>
                            ) : (
                              <span className="text-slate-600 font-mono text-xs uppercase tracking-widest animate-pulse">Aguardando gatilho do Analista...</span>
                            )}
                          </div>

                        </div>
                      </div>
                    );
                  })()}

                  {/* Borda Neon Inferior */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-b-2xl"></div>
                </div>

                {/* PAUSA PARA ESTUDO: FIREWALLS CLÁSSICOS */}
                <div className="bg-slate-900/50 border-2 border-dashed border-slate-800 p-8 rounded-3xl text-center relative mb-12">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-950 px-6 py-1 border border-slate-800 rounded-full text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em]">
                    Pausa Estratégica de Aprendizado
                  </div>
                  <h5 className="text-xl font-bold text-white mb-4">Interlúdio: Firewalls Clássicos</h5>
                  <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6 italic">
                    "Vamos dar uma pausa na jornada dos dados para aprender sobre firewalls clássicos."
                  </p>
                  <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full text-xs text-cyan-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    Próximo Módulo Ativo: 
                  </div>
                </div>
              </div>

              {/* --- SÍNTESE ESTRATÉGICA --- */}
              <div className="mt-8 bg-[#050101] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-cyan-500" />
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Diagnóstico de Perímetro</span>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-slate-300 mb-8 font-light italic text-lg border-l-4 border-cyan-900 pl-4">
                    "Segurança real não é um portão; é um labirinto de inspeções onde apenas a legitimidade sobrevive."
                  </p>
                  <div className="border-t border-slate-800 pt-8 text-center">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                      No Data Center, cada bit é inspecionado, validado e <br className="hidden md:flex" />
                      <span className="text-cyan-500 block mt-3 text-2xl md:text-3xl">finalmente entregue à inteligência de processamento.</span>
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </section>







          {/* --- 5.2 DEFINIÇÃO OBJETIVA DE FIREWALL --- */}
          <div className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-900/30 border border-emerald-800 rounded-lg text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wide">5.2 - Definição Objetiva de Firewall</h4>
            </div>

            {/* Dossiê de Definição */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl mb-8 border-l-4 border-l-emerald-500 shadow-lg">
              <p className="text-slate-300 leading-relaxed text-justify mb-6 text-sm md:text-base">
                Um firewall é um componente de segurança de rede que monitora e controla o tráfego de dados entre redes com diferentes níveis de confiança. Ele atua como uma barreira intransponível entre uma rede interna confiável e redes externas não confiáveis, filtrando o tráfego com base em regras predefinidas para prevenir acessos não autorizados, ataques cibernéticos e a propagação de malware.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex gap-3">
                  <Target className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <strong className="text-white block mb-1 uppercase tracking-wider text-sm">Objetivo Principal</strong>
                    <p className="text-xs text-slate-400 text-justify leading-relaxed">
                      Criar uma barreira de proteção (entrada e saída) contra ameaças externas e implementar políticas de segurança rígidas, incluindo controle de acesso e monitoramento.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Layers className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <strong className="text-white block mb-1 uppercase tracking-wider text-sm">Defesa em Camadas</strong>
                    <p className="text-xs text-slate-400 text-justify leading-relaxed">
                      Trabalha em conjunto com outras medidas para garantir uma postura robusta, mantendo a confidencialidade, integridade e disponibilidade (Tríade CIA) dos recursos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags de Tipos de Firewall */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-2">Arquiteturas:</span>
                <span className="bg-slate-950 border border-slate-800 text-emerald-400/80 px-3 py-1 rounded text-xs font-mono">Filtro de Pacotes</span>
                <span className="bg-slate-950 border border-slate-800 text-emerald-400/80 px-3 py-1 rounded text-xs font-mono">Estado (Stateful)</span>
                <span className="bg-slate-950 border border-slate-800 text-emerald-400/80 px-3 py-1 rounded text-xs font-mono">Aplicação (WAF)</span>
                <span className="bg-slate-950 border border-slate-800 text-emerald-400/80 px-3 py-1 rounded text-xs font-mono">Circuito</span>
              </div>
            </div>

            {/* Exemplo de Funcionalidade (Terminal View) */}
            <div className="bg-[#050101] border border-slate-800 rounded-xl overflow-hidden mb-12 shadow-2xl relative">
              <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Estudo de Caso: Funcionalidade na Prática</span>
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <p className="text-sm text-slate-300 leading-relaxed text-justify">
                    Suponha que um firewall está configurado para bloquear o tráfego de entrada não solicitado. Se um atacante tentar acessar uma rede interna através de uma porta não autorizada, o firewall identificará esse tráfego como não permitido e bloqueará a tentativa de conexão imediatamente, protegendo a rede contra a invasão.
                  </p>
                </div>
                <div className="shrink-0 bg-slate-900/50 p-4 rounded-lg border border-slate-800 font-mono text-[10px] md:text-xs">
                  <div className="text-red-400 mb-1">INBOUND: TCP PORT 4444 (UNAUTHORIZED)</div>
                  <div className="text-slate-500 mb-1">SOURCE: 185.15.xx.xx</div>
                  <div className="text-cyan-500 flex items-center gap-2 mt-2 pt-2 border-t border-slate-800">
                    <ShieldAlert className="w-3 h-3" />
                    ACTION: DROP & LOG EVENT
                  </div>
                </div>
              </div>
            </div>

            {/* Tabela de Erros e Soluções (Diagnóstico) */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h5 className="text-lg font-bold text-white uppercase tracking-wide">Erros Comuns & Soluções Táticas</h5>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Erro 1: Configuração */}
                <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                  <div className="bg-amber-950/30 p-4 border-b border-slate-800">
                    <strong className="text-amber-500 block uppercase text-xs tracking-wider mb-1">Erro de Configuração</strong>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Bloqueios indevidos ou permissões excessivas que expõem a rede.</p>
                  </div>
                  <div className="p-4 bg-[#050101] flex-1">
                    <span className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest block mb-2">Solução Operacional</span>
                    <p className="text-xs text-slate-300 leading-relaxed">Revisão minuciosa e auditoria das configurações para garantir que as regras de filtragem estejam perfeitamente alinhadas com as políticas de segurança da organização.</p>
                  </div>
                </div>

                {/* Erro 2: Falsos Positivos */}
                <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                  <div className="bg-blue-950/30 p-4 border-b border-slate-800">
                    <strong className="text-blue-400 block uppercase text-xs tracking-wider mb-1">Falsos Positivos</strong>
                    <p className="text-[11px] text-slate-400 leading-relaxed">O firewall bloqueia erroneamente mensagens, tráfego ou usuários legítimos.</p>
                  </div>
                  <div className="p-4 bg-[#050101] flex-1">
                    <span className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest block mb-2">Solução Operacional</span>
                    <p className="text-xs text-slate-300 leading-relaxed">Ajustar os algoritmos de detecção, refinando assinaturas e regras de exceção, reduzindo a taxa de atrito sem comprometer a segurança do perímetro.</p>
                  </div>
                </div>

                {/* Erro 3: Falsos Negativos */}
                <div className="bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                  <div className="bg-red-950/30 p-4 border-b border-slate-800">
                    <strong className="text-red-500 block uppercase text-xs tracking-wider mb-1">Falsos Negativos (Risco Crítico)</strong>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Mensagens e tráfegos maliciosos passam despercebidos pela barreira.</p>
                  </div>
                  <div className="p-4 bg-[#050101] flex-1">
                    <span className="text-cyan-500 font-bold text-[10px] uppercase tracking-widest block mb-2">Solução Operacional</span>
                    <p className="text-xs text-slate-300 leading-relaxed">Aprimorar os mecanismos de detecção com tecnologias Next-Gen, incorporando análise semântica, heurística avançada e algoritmos de aprendizado de máquina (Machine Learning).</p>
                  </div>
                </div>
              </div>
            </div>

          </div>



          {/* =====================================================================
                  5.3 - MODO DE OPERAÇÃO: FIREWALL DE PACOTES
              ====================================================================== */}
          <div className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-900/30 border border-purple-800 rounded-lg text-purple-400">
                <Filter className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wide">5.3 - Modo de Operação: Firewall de Pacotes</h4>
            </div>

            <p className="text-slate-300 leading-relaxed text-justify mb-8">
              O Firewall de Pacotes é o componente fundamental de segurança que opera na <strong>Camada de Rede (Camada 3 do modelo OSI)</strong>. Ele atua como um inspetor de trânsito ultrarrápido: examina pacotes de dados individualmente e toma decisões de filtragem (permitir ou bloquear) com base exclusivamente nas informações contidas nos <strong>cabeçalhos</strong>.
            </p>

            {/* Inspeção de Cabeçalho (Visual) */}
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-6 mb-10 shadow-inner overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 text-purple-400 font-mono text-xs uppercase tracking-widest">
                <Network className="w-4 h-4" />
                <span>Inspeção L3 / L4: Anatomia da Decisão</span>
              </div>
              <div className="flex items-center gap-4 min-w-[600px]">
                {/* Pacote */}
                <div className="flex border border-slate-700 rounded overflow-hidden font-mono text-[10px]">
                  <div className="bg-slate-900 px-3 py-2 border-r border-slate-700 text-slate-400 flex flex-col items-center"><span className="text-blue-400">IP SRC</span><span>192.168.1.5</span></div>
                  <div className="bg-slate-900 px-3 py-2 border-r border-slate-700 text-slate-400 flex flex-col items-center"><span className="text-emerald-400">IP DST</span><span>10.0.0.8</span></div>
                  <div className="bg-slate-900 px-3 py-2 border-r border-slate-700 text-slate-400 flex flex-col items-center"><span className="text-amber-400">PORT SRC</span><span>54321</span></div>
                  <div className="bg-slate-900 px-3 py-2 border-r border-slate-700 text-slate-400 flex flex-col items-center"><span className="text-amber-400">PORT DST</span><span>80</span></div>
                  <div className="bg-slate-900 px-3 py-2 text-slate-400 flex flex-col items-center"><span className="text-purple-400">PROTO</span><span>TCP</span></div>
                </div>

                <div className="text-slate-600 animate-pulse">➔</div>

                {/* Motor de Regras */}
                <div className="bg-purple-950/30 border border-purple-900/50 p-3 rounded flex items-center gap-2">
                  <Filter className="w-5 h-5 text-purple-400" />
                  <span className="text-[10px] font-mono text-purple-300">ACL ENGINE</span>
                </div>

                <div className="text-slate-600 animate-pulse">➔</div>

                {/* Decisão */}
                <div className="flex flex-col gap-1 text-[10px] font-mono font-bold">
                  <div className="bg-emerald-950/30 text-emerald-500 px-2 py-1 rounded border border-emerald-900/50">PERMIT (FORWARD)</div>
                  <div className="bg-red-950/30 text-red-500 px-2 py-1 rounded border border-red-900/50 opacity-30">DENY (DROP)</div>
                </div>
              </div>
            </div>

            {/* MATRIZ DE COMPARAÇÃO: STATELESS VS STATEFUL */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Stateless */}
              <div className="bg-[#050101] border-t-4 border-slate-800 border-x border-b p-6 rounded-b-xl shadow-lg hover:border-t-amber-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <h5 className="text-white font-bold uppercase tracking-wider text-sm">Filtragem Sem Estado (Stateless)</h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 text-justify">
                  O firewall avalia <strong>cada pacote individualmente</strong>, como um evento isolado, sem memória do que aconteceu antes. As decisões baseiam-se em regras estáticas (IP, Porta, Protocolo).
                </p>
                <ul className="text-[10px] font-mono text-slate-500 space-y-2">
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Altamente eficiente e rápido</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Cego ao contexto da conexão</li>
                  <li className="flex items-center gap-2"><span className="text-red-500">✗</span> Suscetível a ataques de falsificação (Spoofing)</li>
                </ul>
              </div>

              {/* Stateful */}
              <div className="bg-[#050101] border-t-4 border-slate-800 border-x border-b p-6 rounded-b-xl shadow-lg hover:border-t-cyan-500 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Activity className="w-24 h-24 text-cyan-500" />
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <Activity className="w-5 h-5 text-cyan-500" />
                  <h5 className="text-white font-bold uppercase tracking-wider text-sm">Filtragem Com Estado (Stateful / SPI)</h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 text-justify relative z-10">
                  O firewall <strong>monitora o estado da conexão</strong>. Ele mantém uma "tabela de estado" na memória para rastrear conexões ativas (<em>Stateful Packet Inspection - SPI</em>), distinguindo pacotes de uma nova tentativa de pacotes de uma sessão já estabelecida.
                </p>
                <ul className="text-[10px] font-mono text-slate-500 space-y-2 relative z-10">
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Inteligência contextual</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Bloqueia tráfego não solicitado nativamente</li>
                  <li className="flex items-center gap-2"><span className="text-amber-500">!</span> Consome mais memória e processamento</li>
                </ul>
              </div>
            </div>

            {/* FUNCIONALIDADES COMPLEMENTARES */}
            <h5 className="text-lg font-bold text-white uppercase tracking-wide mb-6">Mecanismos Complementares</h5>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <ArrowRightLeft className="w-4 h-4" />
                  <strong className="text-xs uppercase tracking-widest">Tradução (NAT)</strong>
                </div>
                <p className="text-[11px] text-slate-400 text-justify">
                  Muitas vezes integrado, o NAT oculta a topologia interna traduzindo IPs privados para IPs públicos externos, conservando endereços roteáveis e adicionando uma camada extra de obscuridade.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Layers className="w-4 h-4" />
                  <strong className="text-xs uppercase tracking-widest">Controle de Protocolos</strong>
                </div>
                <p className="text-[11px] text-slate-400 text-justify">
                  Análise do campo de protocolo no cabeçalho. Permite decisões granulares: autorizar tráfego HTTP (TCP/80) enquanto bloqueia tráfego legado como Telnet (TCP/23) ou restringe pings (ICMP).
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-3 text-red-400">
                  <ShieldCheck className="w-4 h-4" />
                  <strong className="text-xs uppercase tracking-widest">Default Deny</strong>
                </div>
                <p className="text-[11px] text-slate-400 text-justify">
                  A postura de segurança suprema: "Denegação por Padrões". Tudo que não é explicitamente permitido nas regras (ACLs) é sumariamente bloqueado e descartado.
                </p>
              </div>
            </div>

            {/* CARACTERÍSTICAS TÉCNICAS */}
            <div className="bg-[#050101] border-l-4 border-purple-500 p-6 md:p-8 rounded-r-xl shadow-lg mb-12">
              <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Raio-X: Perfil Operacional do Firewall de Pacotes</h5>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <strong className="text-purple-400 text-xs uppercase block mb-1">▶ Baseado em Regras (ACLs)</strong>
                  <p className="text-slate-400 text-[11px] text-justify">Decisões matemáticas binárias baseadas na verificação linha por linha da lista de controle de acesso.</p>
                </div>
                <div>
                  <strong className="text-purple-400 text-xs uppercase block mb-1">▶ Alta Eficiência</strong>
                  <p className="text-slate-400 text-[11px] text-justify">Por operar em baixo nível, lida facilmente com volumes massivos de tráfego de rede (Throughput alto).</p>
                </div>
                <div>
                  <strong className="text-purple-400 text-xs uppercase block mb-1">▶ Baixo Overhead</strong>
                  <p className="text-slate-400 text-[11px] text-justify">Impõe atraso (latência) quase nulo na comunicação, diferente dos pesados firewalls de aplicação.</p>
                </div>
                <div>
                  <strong className="text-red-400 text-xs uppercase block mb-1">▶ Limitado na Inspeção Profunda</strong>
                  <p className="text-slate-400 text-[11px] text-justify">Foca apenas no "envelope" (cabeçalho). Não lê a "carta" (carga útil), o que permite a passagem de malwares embutidos em tráfego autorizado.</p>
                </div>
              </div>
            </div>

            {/* SÍNTESE DO MÓDULO */}
            <div className="border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                <Target className="w-5 h-5 text-emerald-500" />
                <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Diretriz Final & Considerações</span>
              </div>
              <div className="p-6 md:p-8 bg-slate-950/80 backdrop-blur">
                <p className="text-sm text-slate-300 leading-relaxed text-justify mb-6">
                  O <strong>objetivo principal</strong> desta arquitetura é controlar o fluxo de dados na borda, fornecendo uma primeira linha de defesa robusta contra varreduras (port scans) e ataques de negação de serviço (DoS).
                </p>
                <div className="bg-amber-950/20 border-l-2 border-amber-500 p-4 rounded-r">
                  <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block mb-2">Atenção Crítica de Configuração</span>
                  <p className="text-xs text-slate-400 text-justify">
                    A configuração de ACLs precisa ser cirurgicamente planejada. Um erro de sintaxe pode bloquear o tráfego legítimo de toda a organização (Falso Positivo) ou abrir uma brecha direta para o núcleo da rede (Falso Negativo). Sendo limitado na inspeção profunda, ele <strong>jamais deve atuar sozinho</strong>, mas sim compor uma estratégia de "Defesa em Profundidade" com NGFWs e WAFs.
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* =====================================================================
                  5.4 - MODO DE OPERAÇÃO: FIREWALL DE APLICAÇÃO OU PROXY
              ====================================================================== */}
          <div className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-900/30 border border-blue-800 rounded-lg text-blue-400">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wide">5.4 - Modo de Operação: Firewall de Aplicação (Proxy)</h4>
            </div>

            <p className="text-slate-300 leading-relaxed text-justify mb-10">
              Operando no topo da pirâmide (<strong>Camada 7 do modelo OSI</strong>), o Firewall de Aplicações, também conhecido como Proxy, atua de maneira infinitamente mais granular e sofisticada que o Firewall de Pacotes. Ele atua como um <strong>intermediário absoluto</strong> entre os usuários e os servidores de destino, analisando o conteúdo real das aplicações (filtragem de URLs, protocolos específicos e comportamentos de software) através da Inspeção Profunda de Pacotes (DPI).
            </p>

            {/* DIAGRAMA TÁTICO: ARQUITETURA PROXY */}
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-8 mb-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/80 to-slate-950 pointer-events-none"></div>

              <div className="flex items-center gap-2 mb-8 text-blue-400 font-mono text-xs uppercase tracking-widest relative z-10">
                <ArrowRightLeft className="w-4 h-4" />
                <span>Arquitetura de Intermediação Isolada</span>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-10">
                {/* Cliente */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col items-center w-full md:w-1/4 shadow-lg">
                  <Terminal className="w-8 h-8 text-slate-500 mb-2" />
                  <span className="text-white font-bold text-sm">Rede Interna</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-1">CLIENT ORIGIN</span>
                </div>

                {/* Conexão 1 */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-blue-400 font-mono mb-1">CONEXÃO 1</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                    <div className="w-8 md:w-16 h-0.5 bg-blue-900/50 mt-1"></div>
                  </div>
                </div>

                {/* Proxy Core */}
                <div className="bg-[#050101] border-2 border-blue-500 p-6 rounded-xl flex flex-col items-center w-full md:w-1/3 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 pointer-events-none animate-pulse"></div>
                  <ShieldCheck className="w-10 h-10 text-blue-500 mb-3 relative z-10" />
                  <span className="text-white font-black uppercase tracking-widest text-sm relative z-10">Proxy Server</span>
                  <span className="text-[10px] text-blue-300 font-mono mt-2 text-center relative z-10">
                    Inspeção de Payload<br />Filtragem Avançada
                  </span>
                </div>

                {/* Conexão 2 */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-cyan-400 font-mono mb-1">CONEXÃO 2</span>
                  <div className="flex gap-1">
                    <div className="w-8 md:w-16 h-0.5 bg-cyan-900/50 mt-1"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Destino */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-col items-center w-full md:w-1/4 shadow-lg">
                  <Globe className="w-8 h-8 text-cyan-500 mb-2" />
                  <span className="text-white font-bold text-sm">Internet</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-1">TARGET SERVER</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 text-center relative z-10">
                <p className="text-xs text-slate-400 font-mono italic">
                  O cliente <strong>nunca</strong> fala diretamente com o servidor web. O Proxy estabelece a conexão em nome do usuário, quebrando o elo físico e ocultando a origem.
                </p>
              </div>
            </div>

            {/* PILARES OPERACIONAIS */}
            <h5 className="text-lg font-bold text-white uppercase tracking-wide mb-6">Pilares Operacionais</h5>
            <div className="grid md:grid-cols-2 gap-6 mb-12">

              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl hover:border-blue-900/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-blue-400" />
                  <strong className="text-white uppercase text-sm tracking-wider">Inspeção Profunda (DPI)</strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed text-justify">
                  Analisa o conteúdo real das comunicações (camada de aplicação). Isso permite a detecção de ameaças sofisticadas, bloqueando malwares e controlando acessos a aplicativos específicos (ex: bloquear redes sociais, permitir apenas mensageria corporativa).
                </p>
              </div>

              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl hover:border-amber-900/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <strong className="text-white uppercase text-sm tracking-wider">Cache de Conteúdo & Aceleração</strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed text-justify">
                  Otimiza o desempenho armazenando em cache conteúdos frequentemente acessados. Reduz a necessidade de buscar repetidamente os mesmos dados na internet, acelerando o acesso e economizando largura de banda (Banda Larga) da rede corporativa.
                </p>
              </div>

              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl hover:border-emerald-900/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <strong className="text-white uppercase text-sm tracking-wider">Logging e Auditoria</strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed text-justify">
                  Registra informações detalhadas sobre o tráfego, URLs acessadas e comportamento dos usuários. Essencial para auditorias de segurança, monitoramento contínuo e geração de <em>insights</em> sobre eventos de segurança e uso da rede.
                </p>
              </div>

              <div className="bg-[#050101] border border-slate-800 p-6 rounded-xl hover:border-purple-900/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                  <strong className="text-white uppercase text-sm tracking-wider">Controle de Acesso Granular</strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed text-justify">
                  Restringe ações com base em políticas rigorosas de RH ou Segurança. Permite bloqueio de sites maliciosos (Filtro Web), controle de categorias de conteúdo e restrições detalhadas (ex: "Permitir Facebook, mas bloquear envio de arquivos").
                </p>
              </div>
            </div>

            {/* CARACTERÍSTICAS (PROS E CONTRAS) */}
            <div className="bg-slate-900/30 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h5 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Raio-X: Perfil Operacional do Proxy</h5>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-200">Segurança Avançada:</strong>
                    <span className="text-slate-400 block text-xs mt-1">Protege contra ataques de aplicações web e malwares transmitidos por tráfego HTTP/HTTPS. A melhor defesa de camada 7 disponível.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-200">Defesa Complementar:</strong>
                    <span className="text-slate-400 block text-xs mt-1">Trabalha em perfeita sinergia com o Firewall de Pacotes (que segura o volume bruto na borda), focando na precisão cirúrgica do conteúdo.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 mt-0.5">⚠</span>
                  <div>
                    <strong className="text-slate-200">Overhead Adicional (Custo de Performance):</strong>
                    <span className="text-slate-400 block text-xs mt-1">Por ler e reconstruir cada pacote para inspeção profunda, exige um poder computacional massivo, introduzindo maior latência (atraso) na rede.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SÍNTESE DO MÓDULO 5.4: OBJETIVO E CONSIDERAÇÕES --- */}
            <div className="border border-slate-800 rounded-xl overflow-hidden shadow-2xl mt-12 mb-6">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-500" />
                <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Diretriz Final: Proxy & Segurança de Aplicação</span>
              </div>

              <div className="p-6 md:p-8 bg-slate-950/80 backdrop-blur">

                {/* Objetivo Principal */}
                <div className="mb-8 border-b border-slate-800/50 pb-6">
                  <strong className="text-blue-400 font-bold uppercase tracking-widest text-sm block mb-3">Objetivo de Operação</strong>
                  <p className="text-sm text-slate-300 leading-relaxed text-justify">
                    O Proxy é uma solução de segurança desenvolvida para fornecer um controle refinado sobre o tráfego de dados em redes corporativas. Seu principal objetivo é garantir a segurança em nível de aplicação (Layer 7), oferecendo uma defesa robusta contra ameaças cibernéticas e permitindo uma administração extremamente granular das políticas de acesso.
                  </p>
                </div>

                {/* Integração e Camadas */}
                <div className="mb-8 border-b border-slate-800/50 pb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <strong className="text-emerald-400 font-bold uppercase tracking-widest text-sm">Integração e Defesa em Camadas</strong>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed text-justify">
                    A integração eficaz com outras soluções de segurança (como Sistemas de Prevenção de Intrusões - IPS) contribui para a criação de uma estratégia de segurança em camadas, fortalecendo a postura defensiva da rede. O Firewall de Aplicações desempenha um papel crucial na proteção proativa das redes corporativas, garantindo resiliência contra ameaças cibernéticas sofisticadas.
                  </p>
                </div>

                {/* Considerações Adicionais */}
                <div className="bg-blue-950/20 border-l-2 border-blue-500 p-5 rounded-r">
                  <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-3">Considerações Adicionais (Impacto Global)</span>
                  <p className="text-xs text-slate-400 text-justify leading-relaxed">
                    O Firewall de Aplicações é uma peça <strong>vital</strong> na arquitetura de segurança. Ele proporciona: eficácia na detecção de ameaças, controle de acesso a aplicações, controle fino sobre as atividades do usuário, prevenção de vazamento de dados (DLP) e aprimoramento da privacidade. Ao integrar-se às políticas globais da organização, garante a conformidade e consistência em todas as práticas de segurança.
                  </p>
                </div>

              </div>
            </div>

          </div>



          {/* =====================================================================
                  5.5 - MODO DE OPERAÇÃO: FIREWALL DE ESTADO (STATEFUL)
              ====================================================================== */}
          <div className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-900/30 border border-emerald-800 rounded-lg text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wide">5.5 - Modo de Operação: Firewall de Estado</h4>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl mb-10 border-l-4 border-l-emerald-500 shadow-lg">
              <p className="text-slate-300 leading-relaxed text-justify mb-4 text-sm md:text-base">
                O Firewall de Estado é um componente crucial operando no nível da <strong>camada de transporte (Camada 4 do modelo OSI)</strong>. Ele monitora o estado das redes e toma decisões de filtragem com base no <strong>contexto da comunicação</strong>. Em vez de avaliar pacotes isolados, ele considera o estado atual da conexão, mantendo registros ativos que permitem uma abordagem dinâmica na análise e autorização do tráfego.
              </p>
              <p className="text-slate-300 leading-relaxed text-justify text-sm md:text-base">
                Durante a comunicação, o firewall monitora o status registrando informações específicas como IPs, portas e o ciclo de vida da sessão (estabelecimento, manutenção e encerramento). Mantendo uma <strong>tabela dinâmica de estado</strong>, ele atualiza essas informações continuamente, permitindo uma resposta ágil às mudanças.
              </p>
            </div>

            {/* SIMULADOR VISUAL: TABELA DE ESTADO (STATE TABLE) */}
            <div className="bg-[#050101] border border-slate-800 rounded-xl overflow-hidden mb-12 shadow-2xl">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Tabela de Estado Dinâmica (State Table)</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  LIVE TRACKING
                </div>
              </div>
              <div className="p-1 overflow-x-auto">
                <table className="w-full text-left font-mono text-[10px] md:text-xs">
                  <thead>
                    <tr className="text-slate-500 bg-slate-950">
                      <th className="p-3 border-b border-slate-800">PROTO</th>
                      <th className="p-3 border-b border-slate-800">SRC IP:PORT</th>
                      <th className="p-3 border-b border-slate-800">DST IP:PORT</th>
                      <th className="p-3 border-b border-slate-800">STATE</th>
                      <th className="p-3 border-b border-slate-800">TIMEOUT</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-3 border-b border-slate-800/50 text-blue-400">TCP</td>
                      <td className="p-3 border-b border-slate-800/50">192.168.1.10:54322</td>
                      <td className="p-3 border-b border-slate-800/50">203.0.113.5:443</td>
                      <td className="p-3 border-b border-slate-800/50 text-emerald-500 font-bold">ESTABLISHED</td>
                      <td className="p-3 border-b border-slate-800/50">299s</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50 transition-colors bg-slate-950/30">
                      <td className="p-3 border-b border-slate-800/50 text-blue-400">TCP</td>
                      <td className="p-3 border-b border-slate-800/50">192.168.1.15:61001</td>
                      <td className="p-3 border-b border-slate-800/50">104.21.34.8:80</td>
                      <td className="p-3 border-b border-slate-800/50 text-amber-500">SYN_SENT</td>
                      <td className="p-3 border-b border-slate-800/50">15s</td>
                    </tr>
                    <tr className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-3 text-purple-400">UDP</td>
                      <td className="p-3">192.168.1.50:53</td>
                      <td className="p-3">8.8.8.8:53</td>
                      <td className="p-3 text-cyan-400">WAITING</td>
                      <td className="p-3">2s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* COMPARAÇÃO: PACOTES VS ESTADO VS PROXY */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-xl hover:border-slate-600 transition-colors">
                <strong className="text-white block uppercase text-xs tracking-wider mb-2 border-b border-slate-800 pb-2">Inspeção de Pacotes</strong>
                <p className="text-[11px] text-slate-400 leading-relaxed text-justify">
                  Examina dados individuais verificando cabeçalhos. Decide se permite ou bloqueia com base em regras estáticas (IP, Porta, Bandeiras TCP), determinando se atende aos contratos de concessão.
                </p>
              </div>
              <div className="bg-emerald-950/20 border border-emerald-900/50 p-5 rounded-xl hover:border-emerald-600/50 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10"><Activity className="w-12 h-12 text-emerald-500" /></div>
                <strong className="text-emerald-400 block uppercase text-xs tracking-wider mb-2 border-b border-emerald-900/50 pb-2 relative z-10">Inspeção de Estado</strong>
                <p className="text-[11px] text-slate-300 leading-relaxed text-justify relative z-10">
                  Abordagem inteligente que analisa o tráfego em relação às informações armazenadas. A decisão é contextualizada levando em consideração o aspecto dinâmico (sequências de pacotes e estado da comunicação).
                </p>
              </div>
              <div className="bg-blue-950/20 border border-blue-900/50 p-5 rounded-xl hover:border-blue-600/50 transition-colors">
                <strong className="text-blue-400 block uppercase text-xs tracking-wider mb-2 border-b border-blue-900/50 pb-2">Integração: Proxy de Aplicação</strong>
                <p className="text-[11px] text-slate-300 leading-relaxed text-justify">
                  Age como intermediário, implementando proxies para serviços específicos. Fornece segurança adicional com inspeção profunda em nível de aplicação, complementando a filtragem de IPs e portas.
                </p>
              </div>
            </div>

            {/* CARACTERÍSTICAS TÉCNICAS */}
            <h5 className="text-lg font-bold text-white uppercase tracking-wide mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500" />
              Características Técnicas
            </h5>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg flex gap-4 items-start">
                <Zap className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <strong className="text-slate-200 text-sm block mb-1">Filtragem Dinâmica</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify">Ajusta-se dinamicamente às mudanças de estado da conexão. Utiliza informações contextuais para implementar regras que especificam quais conexões são permitidas, evoluindo com a comunicação.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg flex gap-4 items-start">
                <Terminal className="w-6 h-6 text-cyan-500 shrink-0" />
                <div>
                  <strong className="text-slate-200 text-sm block mb-1">Registro de Conexões</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify">Mantém tabela detalhada (sequência, IPs, portas, flags TCP, bytes transferidos, timestamps). Vital para auditorias precisas das atividades de rede.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-purple-500 shrink-0" />
                <div>
                  <strong className="text-slate-200 text-sm block mb-1">Autenticação Avançada & Políticas</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify">Incorpora 2FA e integração LDAP. Exige autenticação antes de liberar acesso à rede protegida, garantindo controle de acesso baseado em identidades, não apenas IPs.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg flex gap-4 items-start">
                <Lock className="w-6 h-6 text-blue-500 shrink-0" />
                <div>
                  <strong className="text-slate-200 text-sm block mb-1">Suporte VPN (IPSec / SSL)</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify">Capacidades integradas para criação de túneis virtuais seguros. Estende a segurança corporativa a ambientes externos e remotos através de redes públicas.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg flex gap-4 items-start">
                <Target className="w-6 h-6 text-red-500 shrink-0" />
                <div>
                  <strong className="text-slate-200 text-sm block mb-1">Inspeção Profunda (DPI)</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify">Examina a carga útil (conteúdo) para identificar padrões maliciosos, oferecendo defesa robusta contra explorações escondidas no tráfego aprovado.</p>
                </div>
              </div>
              <div className="bg-[#050101] border border-slate-800 p-4 rounded-lg flex gap-4 items-start">
                <Network className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <strong className="text-slate-200 text-sm block mb-1">Balanceamento de Carga</strong>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-justify">Otimiza a distribuição de tráfego entre diferentes servidores, gerenciando o fluxo para garantir disponibilidade e maximizar a largura de banda.</p>
                </div>
              </div>
            </div>

            {/* OBJETIVO E ANÁLISE FORENSE */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-12 shadow-2xl">
              <div className="p-6 md:p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Objetivos de Operação e Segurança</h3>
                </div>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed text-justify mb-8">
                  <p>
                    O objetivo principal é impedir tentativas não autorizadas de acesso à rede. O firewall monitora continuamente o estado das conexões e responde ativamente a eventos como varreduras de portas, negação de serviço (DoS), ataques de força bruta e comportamentos suspeitos.
                  </p>
                  <p>
                    Ele reduz drasticamente a superfície de ataque ao otimizar a largura de banda e gerenciar eficientemente o fluxo de rede, garantindo que recursos críticos estejam sempre disponíveis e protegidos.
                  </p>
                </div>

                {/* Caixa de Auditoria Forense */}
                <div className="bg-[#020617] border-l-4 border-cyan-500 p-6 rounded shadow-inner">
                  <h4 className="text-cyan-400 font-bold uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Nota Técnica: Análise Forense
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify mb-3">
                    O registro detalhado das conexões (logging) é essencial para <strong>análises forenses</strong>. No contexto de segurança de rede, isso se refere à investigação técnica para entender a natureza de incidentes: o que aconteceu, como ocorreu e quais foram os impactos.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    A análise forense técnica visa a mitigação e correção de vulnerabilidades, não estando diretamente relacionada a aspectos jurídicos. Contudo, se uma organização for vítima de um ataque, as informações extraídas dos logs de estado do Firewall podem ser formalizadas como evidências em procedimentos legais.
                  </p>
                </div>
              </div>
            </div>

            {/* CONSIDERAÇÕES FINAIS E ASSINATURAS */}
            <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
              <div>
                <strong className="text-red-400 uppercase text-sm tracking-wider block mb-2">Consideração Crítica: Atualização Dinâmica</strong>
                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                  Manter as assinaturas e regras dinâmicas do firewall atualizadas em tempo real é vital. Ameaças emergentes, novas assinaturas de malware e <em>exploits</em> estão em constante evolução. Integrar <em>feeds</em> de inteligência de ameaças (Threat Intelligence) permite que o Firewall de Estado se ajuste proativamente, enfrentando vulnerabilidades de segurança antes que o ataque seja executado na infraestrutura.
                </p>
              </div>
            </div>

          </div>


          {/* =====================================================================
                  5.6 - MODO DE OPERAÇÃO: FIREWALL DE CIRCUITO (CIRCUIT-LEVEL)
              ====================================================================== */}
          <div className="mb-16 mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-900/30 border border-amber-800 rounded-lg text-amber-400">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white uppercase tracking-wide">5.6 - Modo de Operação: Firewall de Circuito</h4>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl mb-8 border-l-4 border-l-amber-500 shadow-lg">
              <p className="text-slate-300 leading-relaxed text-justify mb-4 text-sm md:text-base">
                O firewall de circuito, também conhecido como <em>Circuit-Level Gateway</em>, é um mecanismo de segurança que opera na <strong>Camada de Sessão (Layer 5)</strong> do modelo OSI, sendo responsável por controlar conexões de rede com base no estado da sessão, e não no conteúdo dos dados transmitidos.
              </p>
              <p className="text-slate-300 leading-relaxed text-justify text-sm md:text-base">
                Diferentemente de firewalls mais avançados (como o WAF Layer 7), ele <strong>não inspeciona o payload</strong> (carga útil) dos pacotes, mas valida rigorosamente se a conexão estabelecida entre cliente e servidor é legítima.
              </p>
            </div>

            {/* ADENDO SOCKS */}
            <div className="bg-cyan-950/20 border border-cyan-900/50 rounded-xl p-5 mb-12 flex items-start gap-4">
              <Network className="w-6 h-6 text-cyan-500 shrink-0 mt-1" />
              <div>
                <strong className="text-cyan-400 font-bold uppercase tracking-widest text-xs block mb-2">Adendo Técnico: O Protocolo SOCKS</strong>
                <p className="text-xs text-slate-400 leading-relaxed text-justify">
                  É impossível falar de Firewall de Circuito sem mencionar a sua aplicação mais clássica: os servidores <strong>SOCKS</strong> (SOCKS4 e SOCKS5). Eles são o exemplo perfeito de proxies de circuito. Enquanto um Proxy Web (Layer 7) entende de HTTP, o SOCKS (Layer 5) simplesmente pega o pacote, envelopa e repassa, sem olhar o conteúdo. Isso permite que ele suporte qualquer tipo de tráfego de rede (e-mail, FTP, torrents, etc.), atuando de forma agnóstica à aplicação.
                </p>
              </div>
            </div>

            {/* TIMELINE DE OPERAÇÃO */}
            <h5 className="text-lg font-bold text-white uppercase tracking-wide mb-6">Modo de Operação (Fluxo Técnico)</h5>
            <div className="bg-[#050101] border border-slate-800 rounded-xl p-6 md:p-8 mb-12 shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {/* Linha conectora desktop */}
                <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-slate-800 z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center mb-3">
                    <Terminal className="w-5 h-5 text-amber-500" />
                  </div>
                  <strong className="text-white text-xs uppercase mb-1">1. Solicitação</strong>
                  <p className="text-[10px] text-slate-500">Cliente interno tenta conectar a servidor externo.</p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                  </div>
                  <strong className="text-white text-xs uppercase mb-1">2. Interceptação</strong>
                  <p className="text-[10px] text-slate-500">Firewall atua como intermediário (proxy leve).</p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center mb-3">
                    <Activity className="w-5 h-5 text-emerald-500" />
                  </div>
                  <strong className="text-white text-xs uppercase mb-1">3. Validação</strong>
                  <p className="text-[10px] text-slate-500">Analisa o TCP handshake (SYN, SYN-ACK, ACK).</p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5 text-cyan-500" />
                  </div>
                  <strong className="text-white text-xs uppercase mb-1">4. Circuito Virtual</strong>
                  <p className="text-[10px] text-slate-500">Cria conexão lógica direta entre origem e destino.</p>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center mb-3">
                    <ArrowRightLeft className="w-5 h-5 text-blue-500" />
                  </div>
                  <strong className="text-white text-xs uppercase mb-1">5. Encaminhamento</strong>
                  <p className="text-[10px] text-slate-500">Dados fluem sem inspeção adicional de conteúdo.</p>
                </div>
              </div>

              <div className="mt-8 text-center border-t border-slate-800 pt-6">
                <p className="text-amber-400 font-mono text-sm">
                  "O firewall não se importa com o que está sendo dito, apenas se a conexão tem direito de existir."
                </p>
                <p className="text-xs text-slate-500 mt-2">Tecnicamente, ele estabelece duas conexões separadas isolando as redes fisicamente.</p>
              </div>
            </div>

            {/* CARACTERÍSTICAS E OBJETIVOS (GRID) */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Características */}
              <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl">
                <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                  <Target className="w-4 h-4 text-amber-500" /> Características de Alta Eficiência
                </h5>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-amber-500 mt-0.5">▶</span>
                    <div>
                      <strong className="text-slate-300 text-xs uppercase block">Operação Layer 5</strong>
                      <p className="text-[10px] text-slate-500">Focado exclusivamente em gerenciar conexões completas, não pacotes individuais.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500 mt-0.5">▶</span>
                    <div>
                      <strong className="text-slate-300 text-xs uppercase block">Baixo Consumo (Low Overhead)</strong>
                      <p className="text-[10px] text-slate-500">Não analisa payload. Exige processamento mínimo, gerando alta performance e baixa latência.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500 mt-0.5">▶</span>
                    <div>
                      <strong className="text-slate-300 text-xs uppercase block">Transparência de Rede</strong>
                      <p className="text-[10px] text-slate-500">Oculta a estrutura e os IPs da rede interna. Atua como um escudo invisível.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Objetivos */}
              <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl">
                <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Objetivo de Defesa
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  O objetivo principal é garantir a <strong>legitimidade estrita</strong> das conexões. Ele atua como um porteiro de sessão:
                </p>
                <ul className="text-[11px] text-slate-400 space-y-2 mb-4 font-mono">
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Apenas conexões autorizadas estabelecidas</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Sessões maliciosas bloqueadas na origem</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Prevenção contra Port Scanning</li>
                </ul>
                <div className="bg-[#050101] p-3 rounded border border-slate-800 text-[11px] text-emerald-400 italic text-center">
                  "Protege o início da conversa, não o conteúdo dela."
                </div>
              </div>
            </div>

            {/* ANÁLISE CRÍTICA: RISCOS E VULNERABILIDADES */}
            <h5 className="text-lg font-bold text-white uppercase tracking-wide mb-6">Análise Crítica & Ameaças</h5>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-red-950/20 border-t-4 border-red-500 p-6 rounded-b-xl shadow-lg relative overflow-hidden">
                <Skull className="absolute -right-4 -bottom-4 w-32 h-32 text-red-500/5 pointer-events-none" />
                <strong className="text-red-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4 relative z-10">
                  <ShieldAlert className="w-4 h-4" /> Ameaça Letal: Tunneling Malicioso
                </strong>
                <p className="text-[11px] text-slate-300 leading-relaxed text-justify mb-3 relative z-10">
                  Como não há inspeção de payload, se o handshake for válido, o ataque passa junto com o fluxo autorizado. Esta é a maior vulnerabilidade da arquitetura.
                </p>
                <p className="text-[11px] text-slate-300 leading-relaxed text-justify relative z-10">
                  Um atacante (ou insider malicioso) pode realizar o encapsulamento de um protocolo proibido dentro de uma porta permitida (ex: esconder um túnel de exfiltração SSH dentro da porta HTTPS 443). O firewall valida a conexão e o invasor ganha livre trânsito.
                </p>
              </div>

              <div className="bg-amber-950/20 border-t-4 border-amber-500 p-6 rounded-b-xl shadow-lg">
                <strong className="text-amber-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4" /> Risco: Sessões Persistentes
                </strong>
                <p className="text-[11px] text-slate-300 leading-relaxed text-justify">
                  Após estabelecer a conexão, a vigilância cai. O firewall permite que o tráfego contínuo flua sem revalidação profunda. Isso abre espaço crítico para ataques furtivos (Stealth) e movimentação lateral (Lateral Movement) dentro da rede, pois a sessão confiável pode ser sequestrada (Hijacking) após o estabelecimento.
                </p>
              </div>
            </div>

            {/* ARQUITETURA MODERNA (NGFW OFFLOADING) */}
            <div className="bg-[#050101] border border-slate-800 rounded-xl p-6 md:p-8 mb-12 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h5 className="text-white font-bold uppercase tracking-wide text-sm mb-4 text-cyan-400">Evolução e Absorção Moderna</h5>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify mb-4">
                    Na prática da TI moderna, o Firewall de Circuito puro quase não existe mais. Sua arquitetura de alta performance foi <strong>absorvida como uma funcionalidade (Offloading)</strong> pelos chips dedicados (ASICs) dos Firewalls Stateful e NGFWs.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    Hoje, ele atua como um filtro inicial de altíssima velocidade: o NGFW cria a "sessão de circuito" para tráfegos já validados para poupar a CPU dos equipamentos de segurança antes da inspeção profunda.
                  </p>
                </div>

                {/* Diagrama Stack */}
                <div className="shrink-0 w-full md:w-64 space-y-2 font-mono text-[10px] uppercase tracking-widest text-center">
                  <div className="bg-cyan-950/40 border border-cyan-900 text-cyan-400 py-3 rounded">
                    <span className="block font-bold">1. Circuit Firewall</span>
                    <span className="text-slate-500 text-[8px]">Valida Sessão (Layer 5)</span>
                  </div>
                  <div className="text-slate-600">▼</div>
                  <div className="bg-emerald-950/40 border border-emerald-900 text-emerald-400 py-3 rounded">
                    <span className="block font-bold">2. Stateful Firewall</span>
                    <span className="text-slate-500 text-[8px]">Controla Fluxo (Layer 4)</span>
                  </div>
                  <div className="text-slate-600">▼</div>
                  <div className="bg-blue-950/40 border border-blue-900 text-blue-400 py-3 rounded">
                    <span className="block font-bold">3. WAF / NGFW</span>
                    <span className="text-slate-500 text-[8px]">Protege Aplicação (Layer 7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SÍNTESE FINAL DO MÓDULO */}
            <div className="border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-3">
                <Terminal className="w-5 h-5 text-amber-500" />
                <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">Síntese Estratégica: Circuito</span>
              </div>
              <div className="p-6 md:p-8 bg-slate-950/80 backdrop-blur text-center">
                <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                  O firewall de circuito representa uma evolução intermediária, porém crucial, ao introduzir o conceito de <strong>validação de sessões</strong>. Seu papel permanece relevante como componente de fundação em arquiteturas de Defesa em Profundidade.
                </p>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-snug">
                  Ele não vê o conteúdo da conversa. <br className="hidden md:block" />
                  <span className="text-amber-500 block mt-2 text-2xl md:text-3xl">Mas decide de forma implacável quem pode falar.</span>
                </h3>
              </div>
            </div>

          </div>















        </main>
      </div>
    </div>
  );
};

export default InfraDataCenter;