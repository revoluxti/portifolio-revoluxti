
import React, { useState, useEffect, useRef } from 'react';
import {
    Network,
    Layers,
    Cpu,
    Globe,
    Radio,
    ShieldAlert,
    Server,
    Terminal,
    BookOpen,
    Skull,
    ChevronRight,
    CheckCircle2,
    CpuIcon,
    Activity,
    Router,
    HardDrive,
    Shield,
    Flame,
    GitMerge,
    ArrowUp,
    ArrowDown,
    ChevronLeft,
    RotateCcw
} from 'lucide-react';

export default function ArquiteturaDeRedes() {
    // Estado para o seletor interativo de camadas OSI
    const [selectedOsiLayer, setSelectedOsiLayer] = useState(3); // Padrão: Camada de Rede

    const osiLayers = [
        { id: 7, name: "Camada 7: Aplicação", proto: "HTTP, FTP, DNS, SMTP", desc: "Interface direta com o usuário e softwares de rede (navegadores, clientes de e-mail, servidores web)." },
        { id: 6, name: "Camada 6: Apresentação", proto: "SSL/TLS, UTF-8, JPEG", desc: "Traduz, criptografa e compacta os dados, garantindo compatibilidade entre sistemas distintos." },
        { id: 5, name: "Camada 5: Sessão", proto: "NetBIOS, RPC, PPTP", desc: "Estabelece, gerencia e encerra as conexões lógicas entre os aplicativos comunicantes." },
        { id: 4, name: "Camada 4: Transporte", proto: "TCP, UDP, Portas Lógicas", desc: "Garante a entrega ponta a ponta (end-to-end), controle de fluxo e retransmissão de segmentos." },
        { id: 3, name: "Camada 3: Rede", proto: "IP (IPv4/IPv6), ICMP, Roteadores", desc: "Responsável pelo roteamento global dos pacotes entre redes distintas com base em topologia." },
        { id: 2, name: "Camada 2: Enlace de Dados", proto: "Ethernet, Endereços MAC, Switches", desc: "Organiza os bits em quadros (frames), gerencia o acesso ao meio e endereçamento físico." },
        { id: 1, name: "Camada 1: Física", proto: "Cabos de Cobre, Fibras, Rádio, Bits", desc: "Transmissão dos bits brutos pelo meio físico. Trata de voltagens, frequências e conectores." }
    ];
    {/*TCP-IP*/ }
    const [selectedTcpLayer, setSelectedTcpLayer] = useState(1);

    const tcpLayers = [
        {
            id: 1,
            name: "1. Acesso à Rede",
            desc: "Combina as camadas Físicas e Enlace do modelo OSI, interagindo diretamente com o hardware local, endereçamento físico e os meios de transmissão.",
            proto: "Ethernet, Wi-Fi, MAC, ARP"
        },
        {
            id: 2,
            name: "2. Internet",
            desc: "Equivalente à camada de Rede do OSI, responsável pelo endereçamento lógico e pelo roteamento global de pacotes entre sistemas distintos na rede.",
            proto: "IP (IPv4/IPv6), ICMP, IPsec"
        },
        {
            id: 3,
            name: "3. Transporte",
            desc: "Gerencia fluxos de dados ponta a ponta via TCP e UDP, controlando portas lógicas, controle de fluxo, confiabilidade e integridade das sessões.",
            proto: "TCP, UDP"
        },
        {
            id: 4,
            name: "4. Aplicação",
            desc: "Agrupa as funções de Sessão, Apresentação e Aplicação do modelo OSI, lidando diretamente com os protocolos de alto nível utilizados pelas aplicações.",
            proto: "HTTP, HTTPS, DNS, SSH, FTP, SMTP"
        }
    ];

    {/*Hibrido*/ }
    const [selectedHybridLayer, setSelectedHybridLayer] = useState(5);

    const hybridLayers = [
        {
            id: 5,
            name: "5. Camada de Aplicação",
            desc: "Combina as camadas de Aplicação, Apresentação e Sessão do modelo OSI. É onde a interação direta com o utilizador e os softwares ocorre, gerando o payload bruto.",
            proto: "HTTP, HTTPS, DNS, SSH, FTP, SMTP"
        },
        {
            id: 4,
            name: "4. Camada de Transporte",
            desc: "Responsável pelo fluxo de dados ponta a ponta, controle de portas lógicas e garantia de integridade nas conexões entre aplicações.",
            proto: "TCP, UDP"
        },
        {
            id: 3,
            name: "3. Camada de Rede (Internet)",
            desc: "Focada no endereçamento lógico global (IP) e no roteamento de pacotes através de diferentes redes e sub-redes topológicas.",
            proto: "IPv4, IPv6, ICMP, BGP, OSPF"
        },
        {
            id: 2,
            name: "2. Camada de Enlace (Data Link)",
            desc: "Gerencia o endereçamento físico local através de endereços MAC, controle de acesso ao meio físico e detecção de erros locais.",
            proto: "Ethernet, MAC, ARP, Switches"
        },
        {
            id: 1,
            name: "1. Camada Física",
            desc: "Converte os frames em sinais elétricos, luminosos ou eletromagnéticos para a transmissão real dos bits brutos pelo hardware de rede.",
            proto: "Cabos de Cobre (UTP), Fibra Ótica, Espectro RF (Wi-Fi), Hubs"
        }
    ];

    const [step, setStep] = React.useState(0);

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleReset = () => {
        setStep(0);
    };


    /* =====================================================================================
   COMPONENTE VISUAL: TUNNEL IMAGE (Mantido do Cap 00)
   ===================================================================================== */
    const TunnelImage = ({ src, alt, className }) => {
        const imgRef = useRef(null);
        const containerRef = useRef(null);

        useEffect(() => {
            const image = imgRef.current;
            const container = containerRef.current;
            if (!image || !container) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        let visibility = entry.intersectionRatio;
                        visibility = Math.min(1, visibility * 1.1);
                        const scale = 0.8 + (visibility * 0.2);
                        image.style.transform = `scale(${scale})`;
                        const shadowOpacity = 1 - visibility;
                        const lightOpacity = visibility;

                        // Efeito Glow Ciano/Azul para combinar com o tema Placa Mãe
                        image.style.boxShadow = `
                        inset 0 0 ${100 * shadowOpacity}px rgba(0,0,0, ${shadowOpacity * 0.9}),
                        0 10px 40px rgba(6, 182, 212, ${lightOpacity * 0.4})
                    `;
                        image.style.filter = `brightness(${0.5 + (visibility * 0.5)})`;
                    });
                },
                { threshold: Array.from({ length: 50 }, (_, i) => i / 50), rootMargin: '0px 0px -50px 0px' }
            );
            observer.observe(container);
            return () => { if (container) observer.unobserve(container); };
        }, []);

        return (
            <div ref={containerRef} className="overflow-visible p-4 flex items-center justify-center">
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className={`${className} rounded-2xl border-4 border-slate-700 transition-transform duration-100 linear`}
                    style={{ transform: 'scale(0.8)', boxShadow: 'inset 0 0 100px rgba(0,0,0, 0.9)', filter: 'brightness(0.5)' }}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="text-cyan-500 text-xs font-mono p-4 border border-cyan-900 rounded bg-slate-900">Imagem não carregada</div>'
                    }}
                />
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#030712] text-slate-100 p-4 sm:p-6 lg:p-8 font-sans space-y-8">

            {/* ==================== CAPA DO ARTIGO ==================== */}
            <div className="flex flex-col items-center justify-center pt-32 pb-20 text-center px-4 relative overflow-hidden border-b border-slate-800/50 shadow-2xl">

                {/* Efeito de brilho ambiente (Glow) baseado na cor do módulo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <h1 className="text-5xl md:text-[5rem] leading-none font-black tracking-tight text-white mb-2 z-10 uppercase font-sans">
                    Sala do Eniac 1946
                </h1>

                <h2 className="text-6xl md:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-8 z-10 drop-shadow-sm">
                    Capítulo 06
                </h2>

                <div className="text-xl md:text-3xl font-light text-slate-200 mb-2 z-10 tracking-wide">
                    Arquitetura de Redes
                </div>
                <div className="text-lg md:text-xl font-light text-slate-400 mb-14 z-10">
                    Da Matemática Binária - Aos Fundamentos de Criptografia II
                </div>

                <div className="text-xs md:text-sm text-cyan-500 tracking-[0.2em] font-mono mb-2 z-10 uppercase">
                    | Universidade Tecnológica Federal do Paraná |
                </div>
                <div className="text-xs md:text-sm text-cyan-500 tracking-[0.2em] font-mono mb-16 z-10 uppercase">
                    | Câmpus Pato Branco |
                </div>

                {/* Badge do Autor */}
                <div className="flex flex-col md:flex-row items-center bg-slate-900/40 border border-slate-700/50 rounded-full px-8 py-3 gap-8 z-10 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                            &gt;_
                        </div>
                        <div className="text-left">
                            <div className="text-[10px] text-slate-400 font-mono tracking-[0.15em] uppercase mb-0.5">Autor do Artigo</div>
                            <div className="text-sm md:text-base font-bold text-white tracking-wide">Lucas de Oliveira Santos</div>
                        </div>
                    </div>

                    <div className="w-px h-10 bg-slate-700 hidden md:block"></div>

                    <div className="text-left hidden md:block">
                        <div className="text-[10px] text-slate-400 font-mono tracking-[0.15em] uppercase mb-0.5">Curso</div>
                        <div className="text-sm md:text-base text-slate-300">Engenharia de Computação e Cibersegurança</div>
                    </div>
                </div>
            </div>

            {/* ==================== CABEÇALHO DO CAPÍTULO ==================== */}
            <header className="max-w-7xl mx-auto border-b border-slate-800 pb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                    <Network className="w-4 h-4" />
                    <span>revoluxti@network-core ~ architecture</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <Globe className="w-8 h-8 text-cyan-400 shrink-0" />
                    1 - Arquitetura de Redes &amp; Modelos de Comunicação
                </h1>
                <blockquote className="mt-3 border-l-4 border-cyan-500 pl-4 italic text-slate-400 text-sm sm:text-base font-mono">
                    "Uma informação só possui valor quando consegue chegar ao destino."
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-4xl text-justify">
                    Até este ponto, compreendemos como a informação é quantificada, codificada e empacotada em nível binário. No entanto, um dado isolado em uma máquina perde sua utilidade se não puder ser transportado por um meio físico ou lógico até o seu destino final. Neste capítulo, investigamos como a engenharia estruturou a comunicação entre sistemas heterogêneos através de modelos conceituais padronizados, permitindo que hardwares de fabricantes distintos troquem dados de maneira transparente e segura.
                </p>
            </header>



            {/* ==================== CONTEÚDO PRINCIPAL EM GRID ==================== */}
            <article className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* ==================== COLUNA ESQUERDA ==================== */}
                <div className="space-y-6">

                    {/* SEÇÃO 1: INTRODUÇÃO */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                            <Cpu className="w-5 h-5 text-emerald-400" />
                            <h2 className="text-lg font-bold text-white">1.1 - Introdução à Comunicação de Dados</h2>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            Nos primórdios da computação, os computadores eram ilhas isoladas. A comunicação entre duas máquinas exigia conexões proprietárias e cabos físicos específicos, onde cada fabricante ditava as próprias regras. Com o crescimento exponencial da necessidade de troca de informações, tornou-se imperativo criar uma linguagem universal.
                        </p>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                            <span className="text-xs font-mono font-bold text-emerald-400 block uppercase">Modularização &amp; Encapsulamento</span>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                A arquitetura de redes resolve esse problema dividindo a complexidade em camadas lógicas menores e independentes. Cada camada executa uma função específica, conversando apenas com as camadas adjacentes e ocultando os detalhes complexos do hardware inferior.
                            </p>
                        </div>
                    </section>

                    {/* SEÇÃO 2: HISTÓRIA DAS REDES */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                            <Layers className="w-5 h-5 text-amber-400" />
                            <h2 className="text-lg font-bold text-white">1.2 - Da Comutação de Circuitos ao Packet Switching</h2>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            A evolução das redes de computadores é marcada pela transição de paradigmas analógicos para digitais:
                        </p>
                        <div className="space-y-3 text-xs sm:text-sm">
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                                <span className="font-bold text-amber-400 block mb-1">📞 Comutação de Circuitos</span>
                                <p className="text-slate-400 text-xs">
                                    Inspirada na telefonia tradicional, exigia a abertura de um circuito físico dedicado entre origem e destino durante toda a sessão. Caso estivesse ociosa, a linha continuava ocupada, gerando enorme desperdício de canal.
                                </p>
                            </div>
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                                <span className="font-bold text-cyan-400 block mb-1">📦 Comutação de Pacotes (Packet Switching)</span>
                                <p className="text-slate-400 text-xs">
                                    Desenvolvida nos anos 1960 com a ARPANET (DARPA). A mensagem é quebrada em pacotes independentes que podem seguir rotas dinâmicas alternativas. Se um nó falha, os pacotes desviam automaticamente, garantindo altíssima resiliência à internet moderna.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SEÇÃO 3: O MODELO OSI (INTERATIVO) */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-purple-400" />
                                <h2 className="text-lg font-bold text-white">1.3 - O Modelo OSI (ISO)</h2>
                            </div>
                            <span className="text-[10px] font-mono bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800 font-bold">
                                7 Camadas
                            </span>
                        </div>
                        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                            Arcabouço conceitual de referência criado no final dos anos 70. Clique em uma camada para inspecionar suas atribuições estruturais:
                        </p>

                        {/* Seletor de Camadas OSI */}
                        <div className="space-y-2 mb-4">
                            {osiLayers.map((layer) => (
                                <button
                                    key={layer.id}
                                    type="button"
                                    onClick={() => setSelectedOsiLayer(layer.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${selectedOsiLayer === layer.id
                                        ? 'bg-purple-950/80 border border-purple-500 text-purple-200 font-bold shadow-lg shadow-purple-900/30'
                                        : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:bg-slate-900'
                                        }`}
                                >
                                    <span>{layer.name}</span>
                                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedOsiLayer === layer.id ? 'rotate-90 text-purple-400' : 'text-slate-600'}`} />
                                </button>
                            ))}
                        </div>

                        {/* Detalhe da Camada Selecionada */}
                        {(() => {
                            const active = osiLayers.find(l => l.id === selectedOsiLayer);
                            return (
                                <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/30 space-y-2 font-mono text-xs">
                                    <div className="text-purple-400 font-bold uppercase tracking-wider">{active.name}</div>
                                    <div className="text-slate-300 font-sans text-xs leading-relaxed">{active.desc}</div>
                                    <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-400">
                                        <strong>Protocolos / Elementos:</strong> {active.proto}
                                    </div>
                                </div>
                            );
                        })()}
                    </section>

                </div>

                {/* ==================== COLUNA DIREITA ==================== */}
                <div className="space-y-6">

                    {/* SEÇÃO 4: O MODELO TCP/IP */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                        {/* Efeito de luz sutil de fundo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10">
                            {/* Cabeçalho */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <div className="flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-cyan-400" />
                                    <h3 className="text-lg font-bold text-white tracking-tight">1.4 - O Modelo TCP/IP (DoD)</h3>
                                </div>
                                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2.5 py-0.5 rounded border border-cyan-800 font-bold">
                                    4 Camadas
                                </span>
                            </div>

                            <p className="text-xs text-slate-300 mb-4 leading-relaxed text-justify">
                                Desenvolvido pelo Departamento de Defesa dos EUA, é a fundação prática real da internet global. Agrupa as funções estruturais do OSI em 4 camadas operacionais. Clique em uma camada para inspecionar suas atribuições estruturais:
                            </p>

                            {/* Seletor de Camadas TCP/IP */}
                            <div className="space-y-2 mb-4">
                                {tcpLayers.map((layer) => (
                                    <button
                                        key={layer.id}
                                        type="button"
                                        onClick={() => setSelectedTcpLayer(layer.id)}
                                        className={`w-full text-left px-3 py-2 rounded-lg font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${selectedTcpLayer === layer.id
                                            ? 'bg-cyan-950/80 border border-cyan-500 text-cyan-200 font-bold shadow-lg shadow-cyan-900/30'
                                            : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:bg-slate-900'
                                            }`}
                                    >
                                        <span>{layer.name}</span>
                                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedTcpLayer === layer.id ? 'rotate-90 text-cyan-400' : 'text-slate-600'}`} />
                                    </button>
                                ))}
                            </div>

                            {/* Detalhe da Camada Selecionada */}
                            {(() => {
                                const active = tcpLayers.find(l => l.id === selectedTcpLayer);
                                return (
                                    <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 space-y-2 font-mono text-xs">
                                        <div className="text-cyan-400 font-bold uppercase tracking-wider">{active.name}</div>
                                        <div className="text-slate-300 font-sans text-xs leading-relaxed">{active.desc}</div>
                                        <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-300">
                                            <strong>Protocolos / Elementos:</strong> {active.proto}
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    </section>

                    {/* SEÇÃO 5: MODELO HÍBRIDO MODERNO */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                        {/* Efeito de luz sutil de fundo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10">
                            {/* Cabeçalho */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <div className="flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-400" />
                                    <h3 className="text-lg font-bold text-white tracking-tight">1.5 - O Modelo Híbrido Moderno</h3>
                                </div>
                                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-800 font-bold">
                                    Referência Prática
                                </span>
                            </div>

                            {/* Texto Descritivo com Citações da Fonte */}
                            <div className="space-y-3 mb-5 text-xs text-slate-300 leading-relaxed text-justify">
                                <p>
                                    Na prática da engenharia contemporânea, os profissionais utilizam um <strong className="text-white">Modelo Híbrido de Referência</strong>[cite: 4].
                                </p>
                                <p>
                                    Ele combina a precisão descritiva das 7 camadas do Modelo OSI (essencial para diagnósticos profundos no Wireshark e análises de tráfego) com a robustez prática da pilha TCP/IP universal que funciona em todos os sistemas operacionais modernos[cite: 4].
                                </p>
                                <p className="text-slate-400 font-mono text-[11px]">
                                    Clique em uma camada abaixo para inspecionar a sua estrutura operacional detalhada:
                                </p>
                            </div>

                            {/* Seletor de Camadas do Modelo Híbrido */}
                            <div className="space-y-2 mb-4">
                                {hybridLayers.map((layer) => (
                                    <button
                                        key={layer.id}
                                        type="button"
                                        onClick={() => setSelectedHybridLayer(layer.id)}
                                        className={`w-full text-left px-3 py-2 rounded-lg font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${selectedHybridLayer === layer.id
                                            ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-200 font-bold shadow-lg shadow-emerald-900/30'
                                            : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:bg-slate-900'
                                            }`}
                                    >
                                        <span>{layer.name}</span>
                                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${selectedHybridLayer === layer.id ? 'rotate-90 text-emerald-400' : 'text-slate-600'}`} />
                                    </button>
                                ))}
                            </div>

                            {/* Detalhe da Camada Selecionada */}
                            {(() => {
                                const active = hybridLayers.find(l => l.id === selectedHybridLayer);
                                return (
                                    <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-2 font-mono text-xs">
                                        <div className="text-emerald-400 font-bold uppercase tracking-wider">{active.name}</div>
                                        <div className="text-slate-300 font-sans text-xs leading-relaxed">{active.desc}</div>
                                        <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-300">
                                            <strong>Protocolos / Elementos:</strong> {active.proto}
                                        </div>
                                    </div>
                                );
                            })()}
                            <TunnelImage src="publi2.jpeg" alt="Evolução Placa Mãe" className="w-full h-full object-cover" />

                        </div>
                    </section>
                </div>




                {/* ==================== SEÇÃO: ANATOMIA DO DADO (RED TEAM) ==================== */}
                <div className="space-y-6">
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">

                        {/* Detalhe visual de fundo estilo radar/cyberpunk */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-950/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="flex flex-col items-center justify-between border-b border-slate-800 pb-4 gap-3 mb-6">
                            <div className="flex items-center justify-between w-full">

                                <div className="text-center w-full">
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 text-rose-400 border border-rose-800/50">
                                        <ShieldAlert className="w-6 h-6" />
                                        <h2 className="text-2xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-3">
                                            2 - A Anatomia do Dado:
                                            Desconstruindo o Encapsulamento para Operações de Red Team
                                        </h2>
                                        <span className="text-xs font-mono text-slate-400 block mt-1">
                                            Modo Ofensivo • Exfiltração, C2 &amp; Evasão de IDS/IPS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">

                            Para um operador de Red Team, a rede não constitui apenas um meio de transporte, mas sim um campo de manobra, exfiltração e comando e controlo (C2).
                            A capacidade de exfiltrar dados, efetuar movimentação lateral através de <strong className="text-cyan-400">spoofing</strong> e <strong className="text-cyan-400">tunneling</strong>,
                            ou evadir sistemas de deteção (IDS/IPS) sem despoletar alarmes, depende estritamente da compreensão de como a informação é empacotada antes de abandonar a interface de rede.   <br /> <br />
                            O conceito central reside no encapsulamento — o processo de adicionar cabeçalhos (headers) e rodapés (trailers) a um bloco de dados à medida que este desce pelas camadas do modelo OSI. <br /> <br />
                            Esta arquitetura assemelha-se a um sistema de bonecas russas (Matryoshka): cada camada adiciona a sua própria camada de controlo à estrutura superior,
                            fornecendo os metadados necessários para que o salto seguinte na rede saiba como processar a informação. <br /> <br />
                            Compreender a distinção rigorosa entre segmento,
                            pacote e frame permite ao operador transitar de uma execução de exploit cega para uma manipulação cirúrgica do tráfego, contornando firewalls e implementando túneis encobertos (como DNS ou ICMP) que passam despercebidos aos sistemas de monitorização
                        </p>

                        {/* Grid de Conceitos-Chave (Matryoshka e Unidades de Dados) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 mb-4">

                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
                                <span className="text-[11px] font-mono font-bold text-rose-400 block uppercase">
                                    1. O Modelo Matryoshka
                                </span>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    O encapsulamento adiciona cabeçalhos e rodapés progressivamente à medida que os dados descem o modelo OSI, assemelhando-se a bonecas russas encaixadas.
                                </p>
                            </div>

                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
                                <span className="text-[11px] font-mono font-bold text-cyan-400 block uppercase">
                                    2. Hierarquia de Unidades
                                </span>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Distinção cirúrgica entre <strong className="text-slate-200">Segmento</strong> (Camada 4), <strong className="text-slate-200">Pacote</strong> (Camada 3) e <strong className="text-slate-200">Frame</strong> (Camada 2).
                                </p>
                            </div>

                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
                                <span className="text-[11px] font-mono font-bold text-emerald-400 block uppercase">
                                    3. Túneis Encobertos
                                </span>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Permite transitar de um exploit cego para canais ocultos (como DNS ou ICMP tunneling) que bypassam firewalls perimetrais comuns.
                                </p>
                            </div>

                        </div>

                        <div className="bg-black/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
                            💡 <strong className="text-slate-200 font-sans">Perspectiva Operacional:</strong> Compreender a anatomia interna do pacote garante que o operador saiba exatamente onde injetar metadados maliciosos ou burlar políticas restritivas de inspeção profunda de pacotes (DPI).
                        </div>
                    </section>

                </div>

                {/* ==================== SEÇÃO: O Conceito de Encapsulamento (RED TEAM) ==================== */}


                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz de fundo sutil */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        2.1 O Conceito de Encapsulamento
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Modularidade • Pilha de Protocolos OSI • Desencapsulamento
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Texto Descritivo */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O encapsulamento funciona de forma modular. Cada camada da pilha de rede recebe os dados provenientes da camada superior e envolve-os com o seu respetivo cabeçalho de controlo. No sentido inverso, quando o destino recebe o fluxo, ocorre o <strong className="text-white">desencapsulamento</strong> (<em className="text-cyan-300 font-mono">de-encapsulation</em>): cada camada retira o seu cabeçalho correspondente e entrega o conteúdo remanescente à camada imediatamente superior, até que apenas o <span className="font-mono text-purple-300">payload</span> original atinja a aplicação.
                        </p>

                        {/* Caixa de Perspetiva de Segurança (Red Team) */}
                        <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 relative overflow-hidden mb-6">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 rounded-full blur-2xl pointer-events-none"></div>

                            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-2">
                                <ShieldAlert className="w-4 h-4 text-red-400" />
                                <span>Perspetiva de Segurança (Red Team)</span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                Para o Red Team, a manipulação destes cabeçalhos permite a injeção de pacotes malformados para induzir falhas de funcionamento (<strong className="text-red-400">Denial of Service</strong>), a alteração de endereços de origem para ocultação de identidade, ou a injeção de comandos em protocolos concebidos para finalidades estritamente distintas.
                            </p>
                        </div>

                        {/* ==================== SIMULADOR INTERATIVO DE ENCAPSULAMENTO ==================== */}
                        <div className="mt-6 pt-6 border-t border-slate-800/80">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h4 className="text-sm font-bold text-cyan-400 font-mono uppercase tracking-wider flex items-center gap-2">
                                        <span>&gt;_</span> Simulador Interativo: Fluxo Matryoshka
                                    </h4>
                                    <p className="text-[11px] text-slate-400">Navegue pelas camadas para inspecionar os headers e o payload encapsulado.</p>
                                </div>

                                {/* Controles de Navegação */}
                                <div className="flex items-center gap-2 font-mono self-stretch sm:self-auto justify-end">
                                    <button
                                        onClick={handlePrev}
                                        disabled={step === 0}
                                        className={`px-3 py-1.5 rounded border text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 ${step === 0
                                            ? 'border-slate-800 text-slate-600 bg-slate-900/40 cursor-not-allowed'
                                            : 'border-cyan-900/80 text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                                            }`}
                                    >
                                        <ChevronLeft className="w-3 h-3" /> Subir
                                    </button>

                                    <button
                                        onClick={handleReset}
                                        title="Resetar"
                                        className="p-1.5 rounded border border-slate-800 text-slate-400 bg-slate-900/60 hover:text-white"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        disabled={step === 4}
                                        className={`px-3 py-1.5 rounded border text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 ${step === 4
                                            ? 'border-slate-800 text-slate-600 bg-slate-900/40 cursor-not-allowed'
                                            : 'border-red-900/80 text-red-400 bg-red-950/40 hover:bg-red-900/40 hover:shadow-[0_0_10px_rgba(220,38,38,0.2)]'
                                            }`}
                                    >
                                        Descer <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Bloco de Camadas Aninhadas */}
                            <div className="font-mono text-xs space-y-2.5 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">

                                {/* Camada 7 / App */}
                                <div className={`p-2.5 rounded border transition-all duration-300 ${step >= 0 ? 'border-purple-500/50 bg-purple-950/20 text-purple-200' : 'border-slate-900 text-slate-700 opacity-30'
                                    }`}>
                                    <div className="flex justify-between items-center text-[11px] mb-1">
                                        <span className="font-bold text-purple-400">[ L7: APLICAÇÃO ]</span>
                                        <span className="text-[10px] text-slate-400">HTTP / Payload Direto</span>
                                    </div>
                                    <div className="bg-black/40 p-1.5 rounded border border-purple-900/30 text-[11px] text-purple-300 truncate">
                                        "GET /index.html HTTP/1.1 \r\n Host: target.corp"
                                    </div>
                                </div>

                                {/* Camada 4 / Transporte */}
                                <div className={`p-2.5 rounded border transition-all duration-300 ${step >= 1 ? 'border-amber-500/50 bg-amber-950/20 text-amber-200' : 'border-slate-900 text-slate-700 opacity-30'
                                    }`}>
                                    <div className="flex justify-between items-center text-[11px] mb-1">
                                        <span className="font-bold text-amber-400">[ L4: TRANSPORTE ]</span>
                                        <span className="text-[10px] text-slate-400">TCP Segment</span>
                                    </div>
                                    <div className="bg-black/40 p-1.5 rounded border border-amber-900/30 text-[11px] text-amber-300">
                                        <span className="text-slate-500">Header TCP:</span> [Src: 51234 | Dst: 443 | Seq: 1 | SYN] {step >= 1 && <span className="text-amber-400 text-[10px] block mt-0.5">↳ Envolve Payload L7</span>}
                                    </div>
                                </div>

                                {/* Camada 3 / Rede */}
                                <div className={`p-2.5 rounded border transition-all duration-300 ${step >= 2 ? 'border-red-500/50 bg-red-950/20 text-red-200' : 'border-slate-900 text-slate-700 opacity-30'
                                    }`}>
                                    <div className="flex justify-between items-center text-[11px] mb-1">
                                        <span className="font-bold text-red-400">[ L3: REDE ]</span>
                                        <span className="text-[10px] text-slate-400">IPv4 Packet</span>
                                    </div>
                                    <div className="bg-black/40 p-1.5 rounded border border-red-900/30 text-[11px] text-red-300">
                                        <span className="text-slate-500">Header IP:</span> [Src: 192.168.1.50 | Dst: 10.0.0.1 | TTL: 64] {step >= 2 && <span className="text-red-400 text-[10px] block mt-0.5">↳ Envolve Segmento L4</span>}
                                    </div>
                                </div>

                                {/* Camada 2 / Enlace */}
                                <div className={`p-2.5 rounded border transition-all duration-300 ${step >= 3 ? 'border-cyan-500/50 bg-cyan-950/20 text-cyan-200' : 'border-slate-900 text-slate-700 opacity-30'
                                    }`}>
                                    <div className="flex justify-between items-center text-[11px] mb-1">
                                        <span className="font-bold text-cyan-400">[ L2: ENLACE ]</span>
                                        <span className="text-[10px] text-slate-400">Ethernet Frame</span>
                                    </div>
                                    <div className="bg-black/40 p-1.5 rounded border border-cyan-900/30 text-[11px] text-cyan-300">
                                        <span className="text-slate-500">Header MAC:</span> [AA:BB:CC... → DD:EE:FF...] | <span className="text-slate-500">FCS:</span> [Valid] {step >= 3 && <span className="text-cyan-400 text-[10px] block mt-0.5">↳ Envolve Pacote L3</span>}
                                    </div>
                                </div>

                                {/* Camada 1 / Física */}
                                <div className={`p-2.5 rounded border transition-all duration-300 ${step >= 4 ? 'border-emerald-500/50 bg-emerald-950/20 text-emerald-200' : 'border-slate-900 text-slate-700 opacity-30'
                                    }`}>
                                    <div className="flex justify-between items-center text-[11px] mb-1">
                                        <span className="font-bold text-emerald-400">[ L1: FÍSICA ]</span>
                                        <span className="text-[10px] text-slate-400">Sinais / Bits</span>
                                    </div>
                                    <div className="bg-black/40 p-1.5 rounded border border-emerald-900/30 text-[10px] text-emerald-300 truncate font-mono">
                                        {step >= 4 ? "01000111 01000101 01010100 00100000 00101111..." : "[ Aguardando modulação de sinal no meio físico... ]"}
                                    </div>
                                </div>

                            </div>

                            {/* Status de Orientação Red Team footer */}
                            <div className="mt-3 p-2.5 rounded bg-slate-900/70 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                                <span><strong className="text-red-400">&gt;_ Estado:</strong> {
                                    step === 0 ? "Payload puro em memória antes do encapsulamento." :
                                        step === 1 ? "Segmentação TCP (Portas e Flags ativas)." :
                                            step === 2 ? "Pacote IP formado (Roteamento e TTL definidos)." :
                                                step === 3 ? "Quadro Ethernet montado (Endereçamento MAC local)." :
                                                    step === 4 ? "Transmissão física efetuada pela interface de rede." :
                                                        "Estado desconhecido"
                                }</span>
                                <span className="text-[10px] text-slate-500 font-mono">Camada Ativa: L{7 - step}</span>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        2.2 O Segmento <br />
                                        Camada de Transporte TCP/UDP — L4
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Controlo de Fluxo • Portas Lógicas • State Tracking
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O processo de estruturação inicia-se na Camada de Transporte (Camada 4), recorrendo habitualmente aos protocolos TCP ou UDP. Quando uma aplicação gera um volume de dados superior à capacidade de transmissão imediata (por exemplo, a execução de um comando <code className="text-cyan-300 font-mono">whoami</code> encapsulado em HTTP), o fluxo é fracionado em unidades menores geríveis, designadas por <strong className="text-white">Segmentos</strong> (no TCP) ou <strong className="text-white">Datagramas</strong> (no UDP).
                        </p>

                        {/* Grid com Detalhes Técnicos e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Detalhes Técnicos */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Detalhes Técnicos</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    O cabeçalho da camada de transporte introduz as portas de origem e de destino. No TCP, o segmento incorpora números de sequência (<strong className="text-slate-200">Sequence Numbers</strong>) para garantir a ordenação rigorosa e <em>flags</em> de controlo de estado (<span className="font-mono text-cyan-300">SYN, ACK, FIN, RST</span>).
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    A manipulação de <em>flags</em> e portas sustenta técnicas avançadas de reconhecimento e evasão. Um <strong className="text-red-400">SYN Scan</strong> (port scanning furtivo), por exemplo, envia um segmento com a <em>flag</em> SYN ativada, mas abstém-se de responder com o ACK final, impedindo o estabelecimento completo da sessão e reduzindo o rasto nos registos de auditoria (logs). Adicionalmente, a rotação de portas (<strong className="text-purple-400">Port Hopping</strong>) e a utilização de portas privilegiadas ou permitidas por omissão otimizam a entrega encoberta.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Network className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        2.3 O Pacote <br />
                                        Camada de Rede — L3
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Encaminhamento Global • Endereçamento IP • TTL Tracking
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O segmento gerado na camada anterior é posteriormente entregue à Camada de Rede, onde sofre um novo encapsulamento para dar origem ao <strong className="text-white">Pacote IP</strong>. Enquanto a camada de transporte assegura a comunicação lógica entre processos e portas, a camada de rede foca-se no encaminhamento global entre sistemas distintos através da topologia de rede.
                        </p>

                        {/* Grid com Detalhes Técnicos e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Detalhes Técnicos */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Detalhes Técnicos</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    O cabeçalho do pacote integra os endereços IP de origem e de destino, o campo de protocolo interno (identificando se transporta TCP, UDP ou ICMP) e o parâmetro <strong className="text-slate-200">TTL (Time to Live)</strong> — um contador decrescente que evita o ciclo infinito de pacotes em rotas corrompidas.
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    É nesta camada que se consolidam táticas como o <strong className="text-red-400">IP Spoofing</strong>, em que a falsificação do endereço de origem permite ludibriar Listas de Controlo de Acesso (ACLs) baseadas em endereços confiáveis. Paralelamente, a análise do valor inicial do campo TTL em pacotes recebidos viabiliza o <strong className="text-purple-400">OS Fingerprinting</strong> passivo, permitindo identificar o sistema operativo da vítima (por exemplo, valores padrão de <span className="font-mono text-cyan-300">64</span> para sistemas baseados em Unix/Linux e <span className="font-mono text-cyan-300">128</span> para ambientes Windows) sem recorrer a testes ativos ruidosos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <HardDrive className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        2.4 O Frame <br />
                                        Camada de Enlace — L2
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Endereçamento Físico • Ethernet • MitM &amp; ARP Poisoning
                                    </span>
                                </div>
                            </div>
                            
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            Antes de alcançar o meio físico de transmissão (cabo de cobre, fibra ótica ou espectro eletromagnético), o pacote IP é encapsulado num <strong className="text-white">Frame</strong> (ou Quadro), predominantemente sob a arquitetura Ethernet.
                        </p>

                        {/* Grid com Detalhes Técnicos e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Detalhes Técnicos */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Detalhes Técnicos</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    O frame opera com endereçamento físico e local através de endereços <strong className="text-slate-200">MAC (Media Access Control)</strong> de origem e destino, sendo complementado por um rodapé de validação denominado <strong className="text-slate-200">FCS (Frame Check Sequence)</strong>, encarregue de detetar eventuais corrupções de dados durante a propagação física.
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Esta camada constitui o vetor primário para operações em redes locais (LAN). Técnicas como o <strong className="text-red-400">ARP Spoofing</strong> (ou <em>ARP Poisoning</em>) e o <strong className="text-red-400">MAC Flooding</strong> adulteram as tabelas de encaminhamento dos switches, permitindo a interceção de frames destinados a terceiros e viabilizando ataques de Homem no Meio (<strong className="text-purple-400">Man-in-the-Middle - MitM</strong>) antes mesmo que o tráfego atinja o gateway de saída.
                                </p>
                            </div>


                        </div><br /> <br />

                        <TunnelImage src="publi2.jpeg" alt="Evolução Placa Mãe" className="w-full h-full object-cover" /> <br />

                    </div>
                </section>



                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo (Tema Red Team) */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-red-950/65 text-red-400 border border-red-800/50">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        2.5 O Payload e a Arte da Camuflagem
                                    </h3>
                                    <span className="text-xs font-mono text-red-400">
                                        Carga Útil • Natureza Recursiva • Técnicas de Evasão
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            Enquanto segmentos, pacotes e frames representam a infraestrutura burocrática de transporte, o <strong className="text-white">payload</strong> (carga útil) traduz o conteúdo substancial que a aplicação pretende transmitir.
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-6">
                            O conceito de payload possui uma natureza estritamente <strong className="text-purple-400">recursiva</strong> ao longo do modelo de camadas: para o <em>frame</em>, o payload é o pacote IP completo; para o pacote IP, o payload corresponde ao segmento TCP/UDP; e para o segmento, o payload constitui o dado bruto da aplicação (seja um comando de <em>shell</em> remoto, um fluxo HTTP ou um objeto exfiltrado).
                        </p>

                        {/* Subtítulo: Técnicas de Evasão e Camuflagem */}
                        <div className="border-t border-slate-800 pt-5 mt-5">
                            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                                <ShieldAlert className="w-4 h-4 text-cyan-400" /> Técnicas de Evasão e Camuflagem
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                                Para o operador ofensivo, o principal desafio reside na ocultação de conteúdos maliciosos perante sistemas de deteção avançados (IDS, IPS e antivírus). Para mitigar a inspeção baseada em assinaturas, aplicam-se metodologias rigorosas:
                            </p>

                            {/* Grid com as Técnicas (Retângulos Horizontais) */}
<div className="grid grid-cols-1 gap-4">
    {/* Tunelamento */}
    <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div>
            <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 block mb-1">
                Tunelamento (Tunneling)
            </span>
            <p className="text-xs text-slate-400 leading-relaxed text-justify">
                Envolve o encapsulamento de protocolos não autorizados dentro de fluxos legítimos e permitidos. Um exemplo clássico é o túnel DNS, no qual comandos operacionais são inseridos em consultas de resolução de nomes, encapsuladas em pacotes UDP e ignoradas por firewalls mal configurados até atingirem o servidor de controlo do atacante.
            </p>
        </div>
    </div>

    {/* Obfuscação e Criptografia */}
    <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div>
            <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400 block mb-1">
                Obfuscação &amp; Criptografia
            </span>
            <p className="text-xs text-slate-400 leading-relaxed text-justify">
                Modificação da representação estrutural ou cifragem do payload para invalidar assinaturas estáticas detetáveis por motores de inspeção profunda de pacotes (DPI).
            </p>
        </div>
    </div>

    {/* Fragmentação */}
    <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div>
            <span className="text-xs sm:text-sm font-mono font-bold text-purple-400 block mb-1">
                Fragmentação
            </span>
            <p className="text-xs text-slate-400 leading-relaxed text-justify">
                A divisão deliberada do conteúdo malicioso em frações diminutas, dificultando a reconstrução temporal e a análise heurística por parte de sondas de segurança na rede.
            </p>
        </div>
    </div>
</div>
                        </div>
                    </div>
                </section>



                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo (Tema Red Team) */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-red-950/65 text-red-400 border border-red-800/50">
                                    <Server className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3 - Infraestrutura de Rede: <br />
                                        A Topologia sob a Ótica de Red Team
                                    </h3>
                                    <span className="text-xs font-mono text-red-400">
                                        Pontos de Controlo • Movimentação Lateral • Evasão de SOC
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            Para um operador de Red Team, equipamentos de rede não são apenas dispositivos de conectividade, mas <strong className="text-white">pontos de controle e cegueira</strong>. Enquanto o Blue Team usa esses aparelhos para criar perímetros de defesa e segmentação, o Red Team os analisa para encontrar vetores de movimentação lateral, pontos de exfiltração e falhas de configuração que permitam o salto entre VLANs.
                        </p>

                        {/* Caixa de Conclusão / Imperativo Tático */}
                        <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 relative overflow-hidden mt-4">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 rounded-full blur-2xl pointer-events-none"></div>

                            <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-2">
                                <ShieldAlert className="w-4 h-4 text-red-400" />
                                <span>Imperativo Tático</span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                Entender a diferença técnica entre eles é a diferença entre disparar um alerta crítico num <strong className="text-red-400">SOC</strong> ou deslizar silenciosamente por uma rede corporativa.
                            </p>
                        </div>
                    </div>
                </section>





                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Radio className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3.1 - Hub  O Ponto Cego
                                       
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Camada Física • Broadcast Cego • Sniffing Passivo
                                    </span>
                                </div>
                            </div>
                            
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O Hub é o equipamento mais primitivo. Ele opera na <strong className="text-white">Camada 1 (Física)</strong> e não possui inteligência de endereçamento.
                        </p>

                        {/* Grid com Mecanismo Técnico e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Mecanismo Técnico */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Mecanismo Técnico</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Quando um Hub recebe um dado em uma de suas portas, ele simplesmente replica esse sinal para todas as outras portas. Ele não sabe quem é o destinatário; ele apenas &quot;grita&quot; a informação para todo o segmento.
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Em redes modernas, Hubs são raros, mas se encontrados, são um paraíso. Como todo o tráfego é transmitido para todas as portas, basta colocar a placa de rede em <strong className="text-red-400">modo promíscuo</strong> para capturar todo o tráfego de todos os usuários conectados ao Hub sem precisar de técnicas complexas como ARP Spoofing. É o cenário ideal para <strong className="text-purple-400">sniffing passivo</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Network className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3.2 - Switch A Inteligência Local
                                        
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Camada 2 (L2) • CAM Table • MAC Flooding &amp; VLAN Hopping
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O Switch opera na <strong className="text-white">Camada 2 (Enlace)</strong> e resolve o problema do Hub. Ele mantém uma tabela interna chamada <strong className="text-cyan-300 font-mono">CAM Table</strong> (Content Addressable Memory), que mapeia qual endereço MAC está em qual porta física.
                        </p>

                        {/* Grid com Mecanismo Técnico e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Mecanismo Técnico */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Mecanismo Técnico</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Ao receber um Frame, o Switch lê o MAC de destino e o encaminha apenas para a porta onde aquele dispositivo está conectado. Isso isola o tráfego e aumenta significativamente a performance e a segurança básica da rede local.
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify mb-2">
                                    O Switch impede o <em className="text-slate-200">sniffing</em> passivo, forçando o operador a atuar de forma ativa. Duas técnicas clássicas exploram esta camada:
                                </p>
                                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                                    <li>
                                        <strong className="text-red-400">MAC Flooding:</strong> Inundar a CAM Table com milhares de MACs falsos até lotá-la. Quando a tabela esgota a capacidade, os switches entram em modo <em>fail-open</em> e passam a comportar-se como Hubs, replicando o tráfego para todas as portas.
                                    </li>
                                    <li>
                                        <strong className="text-purple-400">VLAN Hopping:</strong> Explorar protocolos como o DTP (Dynamic Trunking Protocol) para saltar de uma VLAN menos privilegiada (ex: Visitantes) para outra restrita (ex: Servidores).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Router className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3.3 - Roteador A Fronteira Logística
                                        
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Camada 3 (Rede) • Tabelas de Roteamento • Movimentação Lateral
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O Roteador opera na <strong className="text-white">Camada 3 (Rede)</strong>. Sua função principal é interconectar redes diferentes (por exemplo, a rede local com a Internet) utilizando endereços IP.
                        </p>

                        {/* Grid com Mecanismo Técnico e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Mecanismo Técnico */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Mecanismo Técnico</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Ele utiliza tabelas de roteamento para decidir o melhor caminho para o pacote. O roteador remove o <em>Frame</em> da rede de origem e cria um novo <em>Frame</em> para a rede de destino, mantendo o Pacote IP intacto.
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Roteadores são alvos críticos para <strong className="text-red-400">Movimentação Lateral</strong>. Se um atacante compromete um roteador, ele pode realizar a interceção de tráfego entre sub-redes diferentes ou criar túneis (<span className="font-mono text-cyan-300">VPNs</span>) para persistência, escapando de firewalls internos.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3.4 - Firewall  O Sentinela
                                       
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Camadas 3 a 7 • Stateful vs. NGFW • Evasão de Perímetro
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O Firewall é um dispositivo de segurança que pode operar da <strong className="text-white">Camada 3 à Camada 7</strong>, dependendo de sua complexidade. Ele filtra o tráfego com base em regras predefinidas (<strong className="text-cyan-300 font-mono">ACLs - Access Control Lists</strong>).
                        </p>

                        {/* Grid com Mecanismo Técnico e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Mecanismo Técnico */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-3">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Mecanismo Técnico (Arquiteturas de Filtragem)</span>
                                </div>
                                <ul className="text-xs text-slate-300 space-y-2">
                                    <li>
                                        <strong className="text-cyan-300">Stateless:</strong> Filtra pacotes isolados com base estritamente em parâmetros estáticos (endereço de origem, destino e porta).
                                    </li>
                                    <li>
                                        <strong className="text-cyan-300">Stateful:</strong> Monitora o estado dinâmico da conexão (possui consciência de contexto, sabendo se um pacote <span className="font-mono text-purple-300">ACK</span> é a resposta legítima de um <span className="font-mono text-purple-300">SYN</span> enviado anteriormente).
                                    </li>
                                    <li>
                                        <strong className="text-cyan-300">NGFW (Next Gen):</strong> Executa inspeção profunda de pacotes (<strong className="text-slate-200">DPI - Deep Packet Inspection</strong>), analisando o Payload e o contexto da aplicação para detecção avançada de malware.
                                    </li>
                                </ul>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify mb-2">
                                    O Firewall representa o principal obstáculo perimétrico. Para superá-lo, o operador emprega táticas de desvio avançadas:
                                </p>
                                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                                    <li>
                                        <strong className="text-red-400">Port Hopping:</strong> Mudança dinâmica da porta de comunicação do C2 para evitar bloqueios estáticos.
                                    </li>
                                    <li>
                                        <strong className="text-red-400">Tunneling:</strong> Encapsulamento de tráfego restrito dentro de protocolos permitidos, como <span className="font-mono text-cyan-300">HTTP/HTTPS</span> ou DNS.
                                    </li>
                                    <li>
                                        <strong className="text-red-400">Fragmentation:</strong> Fracionamento intencional do payload em pacotes diminutos para confundir a inspeção de reamostragem do firewall.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <GitMerge className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3.5 - Load Balancer O Distribuidor de Carga
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Camadas 4 ou 7 • Round Robin • Session Affinity
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O Load Balancer (Balanceador de Carga) atua geralmente nas <strong className="text-white">Camadas 4 ou 7</strong>. Ele distribui as requisições de entrada entre vários servidores para evitar que um único servidor fique sobrecarregado.
                        </p>

                        {/* Grid com Mecanismo Técnico e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Mecanismo Técnico */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Mecanismo Técnico</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Ele recebe a conexão do cliente e a repassa para um servidor no <em>backend</em> usando algoritmos de distribuição como <strong className="text-slate-200">Round Robin</strong> ou <strong className="text-slate-200">Least Connections</strong>.
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    O Load Balancer pode causar inconsistência em ataques de sessão. Se você está tentando realizar um <strong className="text-red-400">Brute Force</strong> ou explorar uma vulnerabilidade de sessão, suas requisições podem cair em servidores diferentes. A solução envolve tentar fixar a sessão (<strong className="text-purple-400">Session Affinity / Sticky Sessions</strong>) ou direcionar um ataque focado ao balanceador para derrubar todo o cluster (<strong className="text-red-400">DoS</strong>).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden text-slate-100 font-sans">
                    {/* Efeito de luz sutil de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-lg bg-cyan-950/65 text-cyan-400 border border-cyan-800/50">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                        3.6 - Proxy O Intermediário
                                    </h3>
                                    <span className="text-xs font-mono text-cyan-400">
                                        Camada 7 (Aplicação) • Forward/Reverse • Request Smuggling
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Texto Descritivo Principal */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-5">
                            O Proxy opera principalmente na <strong className="text-white">Camada 7 (Aplicação)</strong>. Ele atua como um &quot;procurador&quot;: o cliente não fala diretamente com o servidor, mas sim com o Proxy, que faz a requisição em seu nome.
                        </p>

                        {/* Grid com Mecanismo Técnico e Visão Red Team */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Caixa de Mecanismo Técnico */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold mb-1">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span>Mecanismo Técnico</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    O Proxy pode fazer <em>cache</em> de conteúdo, filtrar URLs proibidas e mascarar o IP interno da rede. Existem proxies <strong className="text-slate-200">Forward</strong> (voltados para a saída da rede) e <strong className="text-slate-200">Reverse</strong> (voltados para a entrada, protegendo servidores de backend).
                                </p>
                            </div>

                            {/* Caixa de Visão Red Team */}
                            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-red-500/30 space-y-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/10 rounded-full blur-xl pointer-events-none"></div>

                                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold mb-1">
                                    <ShieldAlert className="w-4 h-4 text-red-400" />
                                    <span>Visão Red Team</span>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                    Proxies são frequentemente utilizados para a <strong className="text-red-400">exfiltração de dados</strong>. Se a rede bloqueia conexões diretas para a internet, o atacante configura o seu malware para utilizar o Proxy corporativo. Além disso, o <strong className="text-purple-400">HTTP Request Smuggling</strong> constitui uma técnica avançada que explora divergências de interpretação de requisições HTTP entre o Proxy e o servidor final.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>






            </article>

            {/* ==================== RODAPÉ COM REFERÊNCIAS ABNT (PADRÃO UTFPR/REVOLUXTI) ==================== */}
<footer className="mt-12 border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden font-sans">
    {/* Efeito de luz azul de fundo */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

    {/* CAVEIRA GIGANTE SUAVE NO FUNDO */}
    <div className="absolute -bottom-1 -left-10 opacity-[0.05] pointer-events-none rotate-12 z-0">
        <Skull size={300} className="text-lime-400 blur-sm" />
    </div>

    <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center gap-4 mb-10 opacity-70">
            <div className="p-3 bg-slate-900 rounded-full border border-slate-800">
                <BookOpen className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="uppercase tracking-[0.2em] text-sm font-bold text-slate-400">Referências Bibliográficas</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mb-12">
            {/* Coluna 1 */}
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-3">
                <p>
                    ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. <strong>ABNT NBR 6023</strong>: Informação e documentação — Referências — Elaboração. Rio de Janeiro: ABNT, 2018.
                </p>
                <p>
                    KUROSE, James F.; ROSS, Keith W. <strong>Redes de Computadores e a Internet</strong>: Uma Abordagem Top-Down. 8. ed. São Paulo: Pearson Education do Brasil, 2021.
                </p>
                <p>
                    TANENBAUM, Andrew S.; WETHERALL, David J. <strong>Redes de Computadores</strong>. 5. ed. São Paulo: Pearson Prentice Hall, 2011.
                </p>
                <p>
                    TANENBAUM, A. S. <strong>Redes de computadores</strong>. 5. ed. São Paulo: Pearson, 2011. (Obra fundamental para a definição de arquiteturas de rede e camadas).
                </p>
                <p>
                    FOROUZAN, Behrouz A. <strong>Data Communications and Networking</strong>. (Referência técnica para o funcionamento de protocolos de rede e modelos de interconexão).
                </p>
                <p>
                    UNIVERSIDAD ARTURO MICHELENA. <strong>Informe Teórico sobre Redes</strong>. (Documentação sobre fundamentos de conectividade, classificação de redes e implementação do modelo OSI).
                </p>
            </div>

            {/* Coluna 2 */}
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-3">
                <p>
                    VINT, Cerf; KAHN, Robert. A Protocol for Packet Network Intercommunication. <em>IEEE Transactions on Communications</em>, v. 22, n. 5, p. 637–648, 1974.
                </p>
                <p>
                    ZIMMERMANN, Hubert. OSI Reference Model—The ISO Model of Architecture for Open Systems Interconnection. <em>IEEE Transactions on Communications</em>, v. 28, n. 4, p. 425–432, 1980.
                </p>
                <p>
                    MANUAL DE REDES INFORMÁTICAS. <strong>Manual Completo de Redes Informáticas</strong>. Disponível em: Scribd. (Base para a distinção entre a pilha TCP/IP e o Modelo de Referência OSI).
                </p>
                <p>
                    COMPUTER NETWORKS ESSENTIALS. <strong>Educational Notes on OSI, Routing and Switching</strong>. (Material didático utilizado para as definições de roteamento, comutação e segurança).
                </p>
                <p>
                    FUNDAMENTOS BÁSICOS DE LAS REDES. Material de curso universitário, Venezuela. (Fonte para definições de endereçamento IP e a função de máscaras de rede).
                </p>
            </div>
        </div>

        <div className="flex flex-col items-center border-t border-slate-900 pt-8">
            <Skull
                className="mb-6 w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(220,38,38,0.9)] hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
            />
            <p className="text-slate-300 font-bold mb-2 tracking-wide">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
            <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest">Engenharia de Computação</p>
            <p className="text-cyan-600/60 text-xs font-mono mt-6">REVOLUXTI © 2026 - Todos os direitos reservados</p>
        </div>
    </div>
</footer>

        </div>
    );
}