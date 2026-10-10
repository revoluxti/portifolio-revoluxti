import React, { useState } from 'react';
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
    Activity
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
                    Arquitetura de Redes &amp; Modelos de Comunicação
                </h1>
                <blockquote className="mt-3 border-l-4 border-cyan-500 pl-4 italic text-slate-400 text-sm sm:text-base font-mono">
                    "Uma informação só possui valor quando consegue chegar ao destino."
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-4xl text-justify">
                    Até este ponto, compreendemos como a informação é quantificada, codificada e empacotada em nível binário. No entanto, um dado isolado em uma máquina perde sua utilidade se não puder ser transportado por um meio físico ou lógico até o seu destino final. Neste capítulo, investigamos como a engenharia estruturou a comunicação entre sistemas heterogêneos através de modelos conceituais padronizados, permitindo que hardwares de fabricantes distintos troquem dados de maneira transparente e segura.
                </p>
            </header>

            {/* ==================== CONTEÚDO PRINCIPAL EM GRID ==================== */}
            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                
                {/* ==================== COLUNA ESQUERDA ==================== */}
                <div className="space-y-6">

                    {/* SEÇÃO 1: INTRODUÇÃO */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                            <Cpu className="w-5 h-5 text-emerald-400" />
                            <h2 className="text-lg font-bold text-white">1. Introdução à Comunicação de Dados</h2>
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
                            <h2 className="text-lg font-bold text-white">2. Da Comutação de Circuitos ao Packet Switching</h2>
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

                    {/* SEÇÃO 5: MODELO HÍBRIDO MODERNO */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
                            <Activity className="w-5 h-5 text-blue-400" />
                            <h2 className="text-lg font-bold text-white">5. O Modelo Híbrido Moderno</h2>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            Na prática da engenharia contemporânea, os profissionais utilizam um <strong>Modelo Híbrido de Referência</strong>.
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify">
                            Ele combina a precisão descritiva das 7 camadas do <strong>Modelo OSI</strong> (essencial para diagnósticos profundos no Wireshark e análises de tráfego) com a robustez prática da pilha universal <strong>TCP/IP</strong> que efetivamente opera em todos os sistemas operacionais modernos.
                        </p>
                    </section>

                </div>

                {/* ==================== COLUNA DIREITA ==================== */}
                <div className="space-y-6">

                    {/* SEÇÃO 3: O MODELO OSI (INTERATIVO) */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-purple-400" />
                                <h2 className="text-lg font-bold text-white">3. O Modelo OSI (ISO)</h2>
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
                                    className={`w-full text-left px-3 py-2 rounded-lg font-mono text-xs transition-all flex items-center justify-between cursor-pointer ${
                                        selectedOsiLayer === layer.id
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

                    {/* SEÇÃO 4: O MODELO TCP/IP */}
                    <section className="bg-[#080d1a] border border-slate-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                            <div className="flex items-center gap-2">
                                <Server className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-lg font-bold text-white">4. O Modelo TCP/IP (DoD)</h2>
                            </div>
                            <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-bold">
                                4 Camadas
                            </span>
                        </div>
                        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                            Desenvolvido pelo Departamento de Defesa dos EUA, é a fundação prática real da internet global. Agrupa as funções do OSI em 4 camadas operacionais:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                                <span className="font-bold text-cyan-400 block mb-1">1. Acesso à Rede</span>
                                <p className="text-slate-400 text-[11px]">Combina as camadas Física e Enlace do OSI, interagindo diretamente com o hardware local.</p>
                            </div>
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                                <span className="font-bold text-cyan-400 block mb-1">2. Internet</span>
                                <p className="text-slate-400 text-[11px]">Equivalente à camada de Rede do OSI, focada no protocolo IP e roteamento global.</p>
                            </div>
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                                <span className="font-bold text-cyan-400 block mb-1">3. Transporte</span>
                                <p className="text-slate-400 text-[11px]">Gerencia fluxos ponta a ponta via TCP e UDP, controlando portas e integridade.</p>
                            </div>
                            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                                <span className="font-bold text-cyan-400 block mb-1">4. Aplicação</span>
                                <p className="text-slate-400 text-[11px]">Agrupa Sessão, Apresentação e Aplicação do OSI em protocolos de alto nível.</p>
                            </div>
                        </div>
                    </section>

                </div>

            </main>

            {/* ==================== RODAPÉ COM REFERÊNCIAS ABNT (PADRÃO UTFPR/REVOLUXTI) ==================== */}
            <footer className="mt-12 border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden font-sans">
                {/* Efeito de luz azul de fundo */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                {/* CAVEIRA GIGANTE SUAVE NO FUNDO */}
                <div className="absolute -bottom-1 -left-10 opacity-[0.05] pointer-events-none rotate-12 z-0">
                    <Skull size={300} className="text-lime-400 blur-sm" />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="flex flex-col items-center gap-4 mb-10 opacity-70">
                        <div className="p-3 bg-slate-900 rounded-full border border-slate-800">
                            <BookOpen className="w-6 h-6 text-slate-400" />
                        </div>
                        <h3 className="uppercase tracking-[0.2em] text-sm font-bold text-slate-400">Referências Bibliográficas</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
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
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-3">
                            <p>
                                VINT, Cerf; KAHN, Robert. A Protocol for Packet Network Intercommunication. <em>IEEE Transactions on Communications</em>, v. 22, n. 5, p. 637–648, 1974.
                            </p>
                            <p>
                                ZIMMERMANN, Hubert. OSI Reference Model—The ISO Model of Architecture for Open Systems Interconnection. <em>IEEE Transactions on Communications</em>, v. 28, n. 4, p. 425–432, 1980.
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
    */

        </div>
    );
}