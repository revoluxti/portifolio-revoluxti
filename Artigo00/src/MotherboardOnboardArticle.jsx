/*
  ARQUIVO: src/MotherboardOnboardArticle.jsx
  CAPÍTULO 01: PLACA MÃE - Refatorado com base no design do Capítulo 00
*/
import React, { useState, useEffect, useRef } from 'react'; // Adicionado useState
import {
    Cpu, Wifi, Zap, Server, Activity, Layers, ArrowRight, ShieldCheck,
    Speaker, Radio, Thermometer, Anchor, Skull, Grid, Crosshair,
    AlertTriangle, ChevronRight, Terminal, Database, Lock,
    Microchip, BarChart3,
    CircuitBoard // <--- ADICIONADO ESTES DOIS ÍCONES FALTANTES
} from 'lucide-react';

/* =====================================================================================
   DESIGN SYSTEM (Componentes Reutilizáveis)
   =====================================================================================
*/

const SectionHeader = ({ icon: Icon, title, subtitle, color = "cyan" }) => {
    const colors = {
        cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
        purple: "text-purple-400 border-purple-500/30 bg-purple-950/20",
        yellow: "text-yellow-400 border-yellow-500/30 bg-yellow-950/20",
        red: "text-red-400 border-red-500/30 bg-red-950/20",
    };

    return (
        <div className="flex items-start gap-4 mb-10 group cursor-default">
            <div className={`p-3 rounded-lg border backdrop-blur-md transition-all group-hover:scale-110 ${colors[color]}`}>
                <Icon className="w-8 h-8" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-slate-100 font-sans tracking-tight">
                    {title}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className={`h-px w-8 bg-${color}-500`}></div>
                    <p className="text-slate-400 font-mono text-sm">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

const TechCard = ({ children, className = "", highlight = false }) => (
    <div className={`relative bg-slate-900/60 backdrop-blur-md border ${highlight ? 'border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'border-slate-800'} p-6 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 group ${className}`}>
        {children}
    </div>
);

const SpecBadge = ({ label, value, highlight = false }) => (
    <div className={`flex justify-between items-center text-xs font-mono py-2 border-b ${highlight ? 'border-cyan-500/30 text-cyan-300' : 'border-slate-800 text-slate-400'}`}>
        <span className="uppercase tracking-wider opacity-80">{label}</span>
        <span className={highlight ? 'font-bold' : ''}>{value}</span>
    </div>
);

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

const MotherboardOnboardArticle = () => {
    const [networkTab, setNetworkTab] = useState('intel');
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 pb-20 overflow-x-hidden w-full">

            {/* =====================================================================================
                CABEÇALHO (Estilo Capítulo 00)
                ===================================================================================== */}
            <header className="relative bg-slate-900 border-b border-slate-800 pt-24 pb-20 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <hgroup>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            SALA DO ENIAC 1946 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                Capítulo 01
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-10 leading-relaxed">
                            Placa Mãe On-board<br />
                            <strong>A espinha dorçal:</strong><br />  da PCB simples aos Hubs complexos.
                        </h2>
                        <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Universidade Tecnológica Federal do Paraná<span className="hidden md:inline">|</span></p>
                        <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Câmpus pato Branco<span className="hidden md:inline">|</span></p>
                    </hgroup>

                    <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-800/50 p-6 md:p-2 md:pr-6 rounded-2xl md:rounded-full border border-slate-700 backdrop-blur-sm mt-8 max-w-[90%] mx-auto">
                        <span className="bg-cyan-500 text-slate-900 p-3 rounded-full">
                            <Cpu size={20} />
                        </span>
                        <div className="text-center md:text-left">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Autor</p>
                            <p className="text-white font-bold">Lucas de Oliveira Santos</p>
                        </div>
                        <div className="h-8 w-px bg-slate-700 hidden md:block mx-4"></div>
                        <div className="text-center md:text-left w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-slate-700 md:border-0">
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Curso</p>
                            <p className="text-white">Engenharia de Computação</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* =====================================================================================
                SEÇÃO 1: EVOLUÇÃO E CONTEXTO HISTÓRICO
                ===================================================================================== */}
            <main className="relative z-10 max-w-6xl mx-auto px-4 py-16 space-y-32">
                <section className="py-24 px-4 relative overflow-hidden">
                    <article>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono uppercase tracking-widest text-slate-500">
                            <div>
                                <span className="block text-slate-700 font-bold">Autor</span>
                                Lucas de Oliveira Santos
                            </div>
                            <div>
                                <span className="block text-slate-700 font-bold">Curso</span>
                                Eng. Computação - UTFPR
                            </div>
                            <div>
                                <span className="block text-slate-700 font-bold">Tema</span>
                                Arquitetura de Computadores
                            </div>
                            <div>
                                <span className="block text-slate-700 font-bold">Data</span>
                                2025
                            </div>
                        </div> <br />
                        <div className="max-w-6xl mx-auto">

                            {/* Marcador de Linha do Tempo */}
                            <div className="flex items-center gap-4 mb-12">
                                <div className="bg-cyan-500 h-px w-16"></div>
                                <span className="text-cyan-400 font-mono font-bold text-lg">1970 - Hoje: A Evolução O Alicerce Digital</span>
                                <div className="bg-slate-800 h-px flex-1"></div>
                            </div>

                            <div className="grid md:grid-cols-12 gap-12 items-start">
                                {/* Coluna Esquerda: Texto */}
                                <div className="md:col-span-5 relative z-10">

                                    <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                                        De PCB Simples a <span className="text-cyan-400">Hub Central</span>
                                    </h2>
                                    <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10 border-l-4 border-cyan-500 pl-6">
                                        "Historicamente, as placas iniciaram-se como simples circuitos impressos (PCB) na década de 1970".
                                    </p>
                                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                                        <h3 className="font-bold text-white">1. Introdução</h3>
                                        Tecnicamente denominada mainboard ou motherboard. A placa-mãe é o coração do computador, é o componente
                                        central de um dispositivo desktop, atuando como o alicerce, ela é responsável pela interconexão física
                                        de todo o hardware, permitindo que a Unidade Central de Processamento (CPU), memória ram, unidade de
                                        armazenamento e periféricos de entrada e saída operam em conjunto. A qualidade de sua construção, a
                                        capacidade de velocidade de seus barramentos, impactam diretamente no desempenho global do sistema.
                                    </p>
                                    <h4 className="font-bold text-white">1.1 Contexto histórico:</h4>
                                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                                        Historicamente, as placas iniciaram-se como simples circuitos impressos (PCB)
                                        na década de 1970, forneciam suporte e conectividade básica para os componentes essenciais
                                        de um computador, no início da era dos computadores pessoais nos anos 70. Ofereciam suporte
                                        para processadores Intel 8080 e o Motorola 6800, esse período as placas representavam a base
                                        primordial para a computação doméstica e ofereciam apenas o básico em relação à
                                        conectividade, tinha um papel crucial, suas capacidades eram limitadas, e com interfaces
                                        destinadas principalmente à CPU, memoria, armazenamento e algumas portas de I/O
                                        (entrada e saída). </p>
                                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                                        Com o passar das décadas, a placa-mãe sofreu uma evolução exponencial e impressionante,
                                        transformando-se de uma peça de conectividade passiva para um complexo centro de gerenciamento de dados.
                                        E hoje são alicerces fundamentais para um computador moderno, verdadeiros complexos centros de
                                        conectividade e poder de processamento, arquiteturas modernas integram controladores que antes exigiam
                                        placas separadas, otimizando custos e espaços </p>

                                    {/* Destaque Visual */}
                                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 mt-8">
                                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <Anchor className="text-cyan-500" /> On-board vs. Off-board
                                        </h3>
                                        <p className="text-sm text-slate-400 text-justify">
                                            O estudo conclui que, embora soluções integradas (on-board) atendam ao mercado mainstream por custo e eficiência,
                                            as arquiteturas dedicadas (off-board) permanecem indispensáveis para aplicações profissionais de alta demanda.
                                        </p>
                                    </div>
                                </div>

                                {/* Coluna Direita: Imagem Tunnel e Cards */}
                                <div className="md:col-span-7 space-y-6 relative z-10 mt-8 md:mt-0">
                                    <div className="w-full aspect-video bg-slate-600 rounded-xl border-4 border-slate-700 flex items-center justify-center relative overflow-hidden group shadow-2xl">

                                        <TunnelImage src="publi2.jpeg" alt="Evolução Placa Mãe" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-slate-900/50 p-4 rounded border-l-2 border-cyan-500 text-sm text-slate-400 italic">
                                        "A placa-mãe moderna atua como a espinha dorsal, integrando controladores que antes exigiam hardware separado, otimizando custos e espaço."
                                    </div>



                                    {/* Cards de Dados */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors">
                                            <Cpu className="text-cyan-400 mb-3" />
                                            <h4 className="text-white font-bold mb-1">Processamento</h4>
                                            <p className="text-xs text-slate-400">Suporte a CPUs Multi-Core de 5GHz+</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 hover:border-purple-500/30 transition-colors">
                                            <Layers className="text-purple-400 mb-3" />
                                            <h4 className="text-white font-bold mb-1">Integração</h4>
                                            <p className="text-xs text-slate-400">Áudio, Rede e I/O no mesmo PCB</p>
                                        </div>
                                    </div>
                                    {/* Diagrama Visual Conceitual */}
                                    <div className="relative group">
                                        {/* Glow externo (Mantido) */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                                        {/* Container Principal */}
                                        <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-8 h-80 flex items-center justify-center overflow-hidden">

                                            {/* --- AQUI ENTRA A IMAGEM --- */}
                                            {/* Usamos 'absolute inset-0' para ela cobrir todo o fundo. */}
                                            {/* 'object-cover' garante que ela preencha sem distorcer. */}
                                            {/* 'opacity-50' ou 'mix-blend-overlay' ajuda a misturar com o fundo escuro. */}
                                            <img
                                                src="placa-revoluxti.jpeg"
                                                alt="Background Grid"
                                                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
                                            />

                                            {/* Grid CSS antigo (Opcional: você pode remover esta div abaixo se a imagem já tiver o grid que você quer) */}
                                            {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div> */}

                                            {/* Conteúdo (Icone e Texto) */}
                                            {/* O z-10 é importante para o texto ficar POR CIMA da imagem */}
                                            <div className="z-10 text-center relative">
                                                <Cpu size={64} className="text-cyan-500 mx-auto mb-4 animate-pulse" />
                                                <div className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] bg-slate-900/50 px-2 py-1 rounded">
                                                    REVOLUXTI System Integration
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                                        Hoje, elas evoluíram de peças de conectividade passiva para complexos centros de gerenciamento de dados.
                                        A arquitetura moderna integra controladores que antes exigiam placas separadas (Rede, Áudio, Controladoras),
                                        otimizando custos e espaço físico dentro do gabinete.
                                    </p>
                                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                                        Esse artigo de pesquisa busca compreender essa evolução e usa de exemplos algumas das arquiteturas disponíveis
                                        hoje no mercado, e para melhor compreensão dessa evolução, vale conectar alguns tipos nostálgicos ao que temos
                                        disponíveis no mercado atualmente — levando em conta a evolução dos modelos e especificamente a distinção
                                        entre on-board e off-board. Durante o desenvolvimento dessa presente pesquisa navegaremos sobre as placas
                                        mais vendidas e recomendadas; mais planejadas e desejadas em uma arquitetura no mercado de tecnologia da
                                        informação atualmente. — Estudo fundamental para Engenheiros, Cientistas e profissionais de Tecnologia da
                                        Informação que buscam otimizar custos e desempenho.
                                    </p>
                                    <h4 className="font-bold text-white">2. Arquiteturas de componentes: On-board vs. Off-Board</h4>
                                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                                        Para aprofundar o entendimento técnico, analisaremos as duas principais abordagens de construção:

                                        On-board.

                                        Off-board.

                                        Vamos em busca de um pouco mais de entendimento nos aprofundando no assunto, e fazendo um checklist pelas duas arquiteturas, explorando
                                        vantagens e desvantagens, modelos e custos-benefícios, compatibilidades e performance entre hardwares. </p>
                                </div>
                            </div>
                        </div>
                    </article>

                    <SectionHeader
                        icon={CircuitBoard}
                        title="2.1 Placas on-board:"
                        subtitle="DACs, ADCs e a busca pelo SNR perfeito"
                        color="purple"
                    />

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Texto Técnico */}
                        <div className="lg:col-span-7 space-y-6">
                            <p>Na arquitetura on-board os controladores de áudio, rede (LAN/WIFI), SATA controler,
                                RGB controler, e USB, esses acessórios e componentes na sua maioria já vem embutidos
                                e soldados direto na PCB (placa de circuito interno) e são gerenciadas por um ou mais
                                microchips dedicados que oferecem uma solução completa e de baixo consumo energético.
                            </p>

                            <p>
                                <strong>Exemplo:</strong> Ao adquirir uma placa mãe moderna, o subsistema de áudio Exemplo:<br />
                                (Realtek, ALC897 e ALC 4080) já estão integrados. Não é opcional, você comprou,
                                está lá goste ou não. E hoje praticamente todas as placas têm áudio on-board e até
                                gráficos on-board esses microchips são integrados e dedicados, cada tarefa precisa
                                de um chip especialista (quando combinados com CPUs que tem GPU integradas). <br />
                                Isso elimina a necessidade de compra de hardware adicional para funcionalidades básicas.
                            </p>
                            <h4><strong>2.1- Resumo:</strong></h4>
                            <p>
                                <strong>Áudio on-board:</strong> O áudio on-board é fornecido por pequenos controladores (chips),
                                integrado e especializados (codec) que gerencia (codificadores/decodificadores),
                                geralmente da família Realtek ALC soldado diretamente na placa-mãe, como os modelos
                                ALC897 e ALC4050. <br />
                                Esses componentes funcionam como cérebro do subsistema de áudio
                                incorporando conversores digitais-analógicos <strong>(DAC/ADC)</strong> analógicas-digitais ,
                                amplificadores simples e
                                controladores de I/0 de áudio na placa-mãe, executando tarefas essenciais como
                                conversão entre sinais digitais e analógicos, controle de entrada e saída e
                                gerenciamento básico de processamento sonoro.
                            </p>



                            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10 border-l-4 border-cyan-500 pl-6">
                                Diferente do passado, chips modernos como o <strong>ALC1220</strong> eliminam o <em>overhead</em> da CPU e oferecem suporte a <strong>Surround 7.1</strong> <br />
                                (7 canais + 1 subwoofer para frequências abaixo de 120Hz).
                            </p>

                            {/* Gráfico de SNR */}
                            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                                <h4 className="text-sm font-bold text-slate-100 mb-4 flex items-center gap-2">
                                    <Activity size={16} className="text-purple-500" /> Comparativo SNR (Signal-to-Noise Ratio) [cite: 128, 129]
                                </h4>
                                <div className="space-y-4 font-mono text-xs">
                                    <div>
                                        <div className="flex justify-between mb-1 text-slate-400">
                                            <span>Realtek ALC897 (Entrada)</span>
                                            <span>90-95 dB</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[70%] bg-slate-600"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1 text-purple-300">
                                            <span>Realtek ALC4080 (High-End)</span>
                                            <span>120 dB</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full w-[95%] bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cards Visuais */}
                        <div className="lg:col-span-5 space-y-4">
                            <TechCard className="h-full border-purple-500/20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-purple-500/10 rounded-full">
                                        <Radio className="text-purple-400" size={24} />
                                    </div>
                                    <div>

                                        <h3 className="font-bold text-white">2.2 - Um codec moderno costuma <br />
                                            oferecer suporte ao padrão HD 7.1.</h3>
                                        <p className="text-xs text-slate-400">Interferência Eletromagnética</p>

                                    </div>
                                </div>
                                <p>Esse suporte não significa que todas as saídas físicas existam no painel —
                                    mas sim o que o codec é capaz de trabalhar com esse número de canais.

                                    O subwoofer é o canal de áudio exclusivo para sons de baixa frequência,
                                    normalmente abaixo de 120 Hz. <br />

                                    Isso inclui: <br />

                                    Pancadas de explosões <br />

                                    Batidas graves de música, <br />

                                    Impacto de efeitos sonoros,<br />

                                    Vibrações profundas. <br /> <br />

                                    Ele existe porque graves precisam de mais potência e precisam ser reproduzidos
                                    separadamente para não distorcer o resto do sistema. E estando no padrão
                                    5.1 ou 7.1, o “1” é justamente o subwoofer. <br /> <br />

                                    <strong>Então um sistema HD 7.1 tem:</strong> <br />
                                    Frente direita/esquerda <br />
                                    Traseiro direita/esquerda <br />
                                    Lateral direita/esquerda <br />
                                    Central <br />
                                    Subwoofer. <br />
                                    Por que ele tem um canal separado? <br />

                                    <strong>Porque o subwoofer:</strong> <br />
                                    Exige mais potência elétrica, <br />
                                    Precisa reproduzir frequências muito baixas, <br />
                                    Vibra fisicamente (emitindo <strong>“punch”</strong>), <br />
                                    Não deve misturar com médios/agudos.
                                </p>
                                <br />
                            </TechCard>
                        </div>
                    </div>
                </section>


                {/* =====================================================================================
                SEÇÃO 2: O ÁUDIO ON-BOARD (Realtek)
                ===================================================================================== */}

                <section className="py-24 px-4 bg-slate-900 border-y border-slate-800 relative">
                    <article>
                        <div className="max-w-6xl mx-auto">

                            <div className="flex items-center gap-4 mb-12">
                                <div className="bg-purple-500 h-px w-16"></div>
                                <span className="text-purple-400 font-mono font-bold text-lg">Subsistema de Áudio</span>
                                <div className="bg-slate-800 h-px flex-1"></div>
                            </div>

                            <div className="grid md:grid-cols-12 gap-10">
                                {/* Coluna Esquerda: Conteúdo Técnico */}
                                <div className="md:col-span-8">
                                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Speaker className="text-purple-500 w-8 h-8" />Subwoofeer, Codecs e High-Fidelity
                                    </h2>

                                    <div className="prose prose-invert max-w-none text-slate-300 text-lg leading-relaxed text-justify mb-8">
                                        <p>
                                            Separar o grave dá controle e fidelidade muito maiores.
                                            Exclusivo para as frequências graves do áudio. Ele é responsável por impacto, profundidade e
                                            sensação física do som <strong>(punch)</strong>. Diretamente relacionada a batida seca, do bumbo da bateria,
                                            é o impacto de uma explosão em filme, o golpe grave que faz o peito vibrar.

                                            Não é só ouvir — é sentir aquela batida que empurra o ar e parece “dar um tapa” no ambiente. <br />

                                            Na prática: <br />

                                            1. O sistema operacional reconhece o chip automaticamente, plugou, reconheceu e operou. <br />

                                            2. Os drives funcionam sem gambiarras, <br />

                                            3. Os recursos do chip entrada e saída canais, efeitos básicos ficam disponíveis para qualquer
                                            software que quiser usar. <br />

                                            4. Não rola aquele drama de “instalou, reiniciou, morreu, não funcionou”. <br /> <br />

                                            Então minimiza o overhead no barramento: <br />

                                            1. O chip de áudio não fica entupindo o tráfego de dedos. <br />

                                            2. Ele não consome largura de banda desnecessária. <br />

                                            3. Ele não sobrecarrega o chipset. <br />

                                            4. Ele não faz a CPU perder tempo com tarefas que o próprio chip poderia resolver. <br />

                                            5. Evita travadinhas, latência desnecessária, gargalo e aquela sensação de que tudo está “pesado sem motivo”
                                            Antigamente, áudio de qualidade exigia placas dedicadas. Hoje, chips integrados (Codecs)
                                            como os da família <strong>Realtek ALC</strong> dominam o mercado. <br />
                                            6. Eles atuam como o cérebro do subsistema,
                                            incorporando conversores DAC (Digital-to-Analog) e ADC (Analog-to-Digital).
                                        </p>
                                        <p className="mt-4">
                                            Um codec moderno oferece suporte ao padrão <strong>HD 7.1</strong> (7 canais + 1 subwoofer).
                                            O subwoofer é crucial pois frequências baixas (graves abaixo de 120Hz) exigem mais potência e vibram fisicamente ("punch").
                                            Separar o grave evita distorção nos médios e agudos.
                                        </p> <br />
                                        <h3><strong>Surround - Como on-board trata isso?</strong></h3>
                                        <p className="mt-4">
                                            Surround é um formato de áudio multicanal criado para produzir a sensação de que o som vem de várias
                                            direções ao redor do ouvinte — Frente, atrás, lados e até para cima (nos sistemas mais modernos).
                                        </p>
                                    </div>

                                    {/* CARD INTERATIVO DE COMPARAÇÃO SNR */}
                                    <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-xl group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                            <Activity size={100} className="text-purple-500" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                            <Activity className="text-green-500" /> SNR (Signal-to-Noise Ratio)
                                        </h3>

                                        <div className="space-y-6">
                                            {/* Barra 1 */}
                                            <div>
                                                <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                                                    <span>ALC897 (Entrada)</span>
                                                    <span>90-95 dB</span>
                                                </div>
                                                <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                                                    <div className="h-full w-[75%] bg-slate-600 relative group-hover:bg-slate-500 transition-colors"></div>
                                                </div>
                                            </div>

                                            {/* Barra 2 */}
                                            <div>
                                                <div className="flex justify-between text-xs font-mono text-purple-300 mb-2">
                                                    <span className="font-bold">ALC1220 / ALC4080 (Premium)</span>
                                                    <span className="font-bold">120 dB</span>
                                                </div>
                                                <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-purple-900/50">
                                                    <div className="h-full w-[95%] bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-sm text-slate-500 text-justify">
                                            * SNR mais alto significa menos chiado, menos interferência elétrica e mais clareza.
                                            Placas modernas usam <strong>Isolamento de PCB</strong> (trilhas iluminadas) e <strong>Capacitores Japoneses</strong> para garantir essa qualidade.
                                        </p>
                                    </div>
                                    <h3><strong>SNR (Signal-to-Noise Ratio) – Por que esse número importa?</strong></h3>
                                    <p>
                                        As placas mais modernas suportam saídas com alto SNR, o que significa qualidade de áudio elevada. 
                                        É literalmente a razão entre sinal útil e o ruído indesejado.<br />
                                        ALC897 → SNR costuma ser 90-95 dB (básico)<br />
                                        ALC1220/ALC4080 → 110 – 120 dB (muito melhor)<br />
                                        Isso significa quanto maior melhor: <br />
                                        Menos chiado,<br />
                                        Menos interferência elétrica,<br />
                                        Mais clareza,<br />
                                        Mais volume útil antes de distorcer,<br />
                                        Para on-board,120 dB é considerado um patamar “premium”. <br /> <br />
                                    </p>
                                        <h3><strong>Realtek ALCxxxx – o que esse sufixo representa?</strong></h3>
                                    <p>
                                        <strong>Cada modelo varia em:</strong> <br />

                                        SNR.<br />
                                        Números de canais. <br />
                                        Suporte a amplificadores frontais. <br />
                                        Taxa de amostragem (sample rate). <br />
                                        Interface usada (HD Áudio vs. USB interna). <br />
                                        Ruido interno. <br />
                                        Capacidade de entrada (line-in, mic, SPDIF). <br /> <br />
                                        
                                        Saber o número é essencial para entender a qualidade do áudio da placa-mãe. <br /> <br />
                                        O DAC conversão digital-analógica <strong>(Digital-to-Analogic Converter)</strong> 
                                        é o componente responsável por transformar: <br />

                                        <strong>Sinal digital (bits) → sinal analógico (ondas) sonoras analógicas</strong> <br /> <br />
                                        O ADC conversão analógica-digital (Analog-to-Digital Converter) é o componente responsável por transformar:

                                        Sinal analógico (voz do microfone) → para dados de sinal digital.

                                        Ou seja, é o coração da qualidade do áudio.

                                        Nos chips on-board:

                                        O DAC ADC é simples

                                        Integrado no codec

                                        Sujeito a interferências da placa-mãe

                                        Limitado por custo e espaço
                                    </p>
                                </div>

                                {/* Coluna Direita: Cards Visuais */}
                                <div className="md:col-span-4 flex flex-col gap-4">
                                    {/* Card Overhead */}

                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                                        <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                            <Radio className="w-4 h-4" /> Surround
                                        </h4>
                                        <p className="text-sm text-slate-400 leading-relaxed text-justify">
                                            No áudio comum estéreo, você tem 2 canais: <br />
                                            Esquerdo (L) <br />
                                            Direito (R) <br />

                                            No <strong>surround</strong> você tem vários canais, por exemplo: <br />

                                            <strong>5.1:</strong> <br />

                                            Frontal esquerdo <br />

                                            Frontal direito <br />

                                            Central <br />

                                            Traseiro esquerdo <br />

                                            Traseiro direito <br />

                                            <strong>.1 Subwoofer (grave)</strong><br />

                                            <strong>7.1:</strong><br />

                                            Cima <br />

                                            Baixo <br />

                                            Frontal esquerdo <br />

                                            Frontal direito <br />

                                            Central <br />

                                            Traseiro esquerdo <br />

                                            Traseiro direito <br />

                                            Traseiro <br />

                                            <strong>.1 Subwoofer (grave)</strong><br /> <br />
                                        </p>
                                        <p className="text-sm text-slate-300 mb-4 text-justify">
                                            O surround proporciona um som mais imersivo, percepção de direção
                                            (tiros, passos, carros, chuva, explosões, diálogos), experiencias mais realistas
                                            em filmes e games <strong>por exemplo:</strong> <br />

                                            1. Passos atrás, <br />
                                            2. Vozes a esquerda,<br />
                                            3. Explosão a frente, <br />
                                            4. Impactos à direita, <br />
                                            5. Helicóptero passando por cima. <br />
                                            6. Em músicas está presente quando temos a impressão de que o baterista deu
                                            uma volta na nossa cabeça, ou quando a bateria parece atravessar nossa
                                            cabeça de um lado ao outro. <br /> <br />
                                            O sistema simula essa movimentação usando
                                            múltiplos canais.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                                        <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                            <Radio className="w-4 h-4" /> Surround
                                        </h4>
                                        <p className="text-sm text-slate-400 leading-relaxed text-justify">
                                            <strong>O áudio Surround depende de três fatores:</strong><br />

                                            1. Capacidade do codec (ex: ALC1220) <br />

                                            2. Roteamento da placa mãe (quantidade de jacks no painel) <br />

                                            3. Software/drive capaz de processar o áudio multicanal. <br /> <br />

                                            No on-board, o processamento é normalmente simples. <br />
                                            A entrega do 7.1 é aceitável, mas inferior que uma boa placa dedicada fornece em: <br />

                                            1. Separação espacial. <br />

                                            2. Fidelidade. <br />

                                            3. Potência de saída. <br />

                                            4. Ruído de fundo. <br />
                                        </p>
                                        <p className="text-sm text-slate-300 mb-4 text-justify">
                                        </p>

                                    </div>


                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                                        <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                                            <Cpu className="w-4 h-4" /> Overhead Nulo
                                        </h4>
                                        <p className="text-sm text-slate-400 leading-relaxed text-justify">
                                            O chip de áudio opera de forma independente. Ele não consome largura de banda da GPU ou NVMe e não sobrecarrega a CPU com tarefas básicas de conversão.
                                        </p>







                                        <p className="text-sm text-slate-300 mb-4 text-justify">
                                            Placas modernas usam <strong>Isolamento do PCB</strong> (trilhas iluminadas que separam o circuito de áudio) e <strong>Capacitores Japoneses</strong> (Nichicon/ELNA) para filtrar o ruído elétrico da CPU/GPU, garantindo um som "quente" e natural[cite: 224, 226].
                                        </p>
                                    </div>

                                    {/* Card Surround */}
                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
                                        <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                                            <Radio className="w-4 h-4" /> Surround 7.1
                                        </h4>
                                        <div className="grid grid-cols-3 gap-2 mt-3 text-[10px] font-mono text-center text-slate-300">
                                            <div className="bg-slate-900 p-1 rounded border border-slate-600">Front L/R</div>
                                            <div className="bg-slate-900 p-1 rounded border border-slate-600">Center</div>
                                            <div className="bg-slate-900 p-1 rounded border border-slate-600">Rear L/R</div>
                                            <div className="bg-slate-900 p-1 rounded border border-slate-600">Side L/R</div>
                                            <div className="col-span-2 bg-purple-900/30 border border-purple-500/30 p-1 rounded text-purple-200 font-bold">.1 Subwoofer</div>
                                        </div>
                                    </div>

                                    {/* Card Exemplo Real */}
                                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                        <h4 className="text-white font-bold mb-2 text-sm">Exemplo High-End</h4>
                                        <p className="text-xs text-slate-500 mb-2">ASUS ROG Maximus Z790 Apex</p>
                                        <div className="h-32 w-full bg-slate-900 rounded overflow-hidden relative">
                                            <img src="rog-audio-chip.jpg" className="object-cover w-full h-full opacity-60" alt="Chip Audio" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">ALC4080</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* =====================================================================================
                SEÇÃO 3: REDE E CONECTIVIDADE (A Guerra dos Chips)
                ===================================================================================== */}
                <section className="py-24 px-4 relative overflow-hidden bg-black">
                    {/* Efeito de Fundo */}
                    <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">A Guerra dos Chips de Rede</h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Intel vs. Killer vs. Realtek. Quem gerencia seus pacotes?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* CARD INTEL */}
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden group hover:border-blue-500/80 transition-all duration-300 flex flex-col p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-blue-900/20 rounded-full text-blue-400">
                                        <Server size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Intel Ethernet</h3>
                                </div>
                                <div className="flex-1 text-slate-400 text-sm text-justify space-y-4">
                                    <p><strong>Modelos:</strong> I219-V, I225-V (2.5G)</p>
                                    <p>Foco em estabilidade e baixo uso de CPU. Drivers extremamente maduros e compatibilidade impecável com Windows e Linux. É a escolha padrão para Workstations e servidores.</p>
                                    <div className="bg-blue-900/10 p-3 rounded border border-blue-800/30 text-xs text-blue-300 font-mono">
                                        Vantagem: Menor latência real e overhead mínimo.
                                    </div>
                                </div>
                            </div>

                            {/* CARD KILLER */}
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden group hover:border-red-500/80 transition-all duration-300 flex flex-col p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-red-900/20 rounded-full text-red-400">
                                        <Crosshair size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Killer Networking</h3>
                                </div>
                                <div className="flex-1 text-slate-400 text-sm text-justify space-y-4">
                                    <p><strong>Modelos:</strong> E2600, AX1650</p>
                                    <p>Originalmente Rivet Networks, hoje Intel. Foca no público Gamer com software de priorização de pacotes (QoS automático) para reduzir lag em jogos.</p>
                                    <div className="bg-red-900/10 p-3 rounded border border-red-800/30 text-xs text-red-300 font-mono">
                                        Destaque: Integração Wi-Fi + Ethernet (DoubleShot).
                                    </div>
                                </div>
                            </div>

                            {/* CARD REALTEK */}
                            <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden group hover:border-cyan-500/80 transition-all duration-300 flex flex-col p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-cyan-900/20 rounded-full text-cyan-400">
                                        <Grid size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Realtek</h3>
                                </div>
                                <div className="flex-1 text-slate-400 text-sm text-justify space-y-4">
                                    <p><strong>Modelos:</strong> RTL8125 (2.5G)</p>
                                    <p>O padrão do mercado mainstream. Custo extremamente acessível, permitindo que placas de entrada tenham rede 2.5Gbps. A estabilidade melhorou muito nas séries recentes.</p>
                                    <div className="bg-cyan-900/10 p-3 rounded border border-cyan-800/30 text-xs text-cyan-300 font-mono">
                                        Fato: Democratizou a rede de alta velocidade.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BLOCÃO CNVi (Wi-Fi) Estilo Vitrine */}
                        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl border border-slate-700 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            {/* Efeito Glow */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-yellow-500/20 transition-colors"></div>

                            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                        <Wifi className="text-yellow-400" /> A Revolução CNVi
                                    </h3>
                                    <p className="text-slate-300 text-lg text-justify leading-relaxed mb-4">
                                        Diferente do que muitos pensam, o Wi-Fi moderno raramente é soldado na placa.
                                        A Intel criou a arquitetura <strong>CNVi (Integrated Connectivity)</strong>, que moveu a parte lógica cara (MAC) para dentro do Processador/Chipset.
                                    </p>
                                    <p className="text-slate-400 text-sm text-justify">
                                        O módulo M.2 que você vê (CRF - Companion RF) contém apenas a antena física.
                                        Isso barateou drasticamente a implementação do Wi-Fi 6 e 7, tornando-o padrão em placas intermediárias.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-video bg-slate-950 rounded-xl border border-slate-700 flex items-center justify-center shadow-inner">
                                        {/* Placeholder Imagem Wi-Fi */}
                                        <Wifi size={80} className="text-yellow-600/50" />
                                        <span className="absolute bottom-4 text-xs font-mono text-slate-500">Módulo M.2 Key-E</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================================================
                SEÇÃO 4: VRM e GARGALOS (Energia e Memória)
                ===================================================================================== */}
                <section className="py-24 px-4 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto">

                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-red-500 h-px w-16"></div>
                            <span className="text-red-400 font-mono font-bold text-lg">Energia e Desempenho</span>
                            <div className="bg-slate-800 h-px flex-1"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* COLUNA VRM */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">O Coração: VRM</h2>
                                <p className="text-slate-300 text-lg mb-6 text-justify">
                                    A fonte entrega 12V brutos, letais para a CPU. O <strong>Módulo Regulador de Tensão</strong> (VRM) é a refinaria
                                    que converte isso para 1.2V estáveis. É composto por:
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-yellow-500 shadow-lg">
                                        <h4 className="font-bold text-white">1. MOSFETs</h4>
                                        <p className="text-xs text-slate-400">Os "interruptores" de alta velocidade. São os componentes que mais esquentam.</p>
                                    </div>
                                    <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-slate-500 shadow-lg">
                                        <h4 className="font-bold text-white">2. Chokes (Bobinas)</h4>
                                        <p className="text-xs text-slate-400">Armazenam energia em campo magnético para suavizar a corrente e impedir picos.</p>
                                    </div>
                                    <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-cyan-500 shadow-lg">
                                        <h4 className="font-bold text-white">3. Capacitores</h4>
                                        <p className="text-xs text-slate-400">Reservatórios que garantem estabilidade mesmo quando a CPU exige carga máxima repentina.</p>
                                    </div>
                                </div>

                                {/* Alerta Thermal Throttling (Estilo Magenta do Cap 00) */}
                                <div className="mt-8 bg-red-950/20 border-r-4 border-red-500 p-6 rounded-l-xl backdrop-blur-sm relative overflow-hidden">
                                    <h4 className="text-xl font-bold text-red-400 flex items-center gap-3 mb-2">
                                        <Thermometer className="w-6 h-6" /> VRM Thermal Throttling
                                    </h4>
                                    <p className="text-slate-300 text-sm text-justify leading-relaxed">
                                        Placas baratas com VRMs fracos superaquecem (&gt;100°C).
                                        Para evitar derretimento, a placa corta a energia da CPU (Clock cai).
                                        Você paga por um i9, mas recebe o desempenho de um i5 porque a "estrada" elétrica é estreita.
                                    </p>
                                </div>
                            </div>

                            {/* COLUNA UMA & CHIPSET */}
                            <div className="flex flex-col gap-8">
                                {/* Chipset Card */}
                                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Database className="text-blue-500" /> Chipset (PCH)
                                    </h3>
                                    <p className="text-sm text-slate-300 text-justify mb-4">
                                        O gerente logístico. Controla USBs, SATA, e Rede. Comunica-se com a CPU via <strong>DMI</strong>.
                                        Placas topo de linha (Z790) têm um "DMI" mais largo, permitindo mais SSDs NVMe sem engarrafar o tráfego.
                                    </p>
                                </div>

                                {/* UMA / Vídeo Integrado */}
                                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
                                    <h3 className="text-2xl font-bold text-white mb-4">O Preço da Integração (UMA)</h3>
                                    <p className="text-sm text-slate-300 text-justify mb-6">
                                        Ao usar vídeo on-board (iGPU), ocorre a <strong>Unified Memory Architecture</strong>.
                                        A placa não tem memória própria, então "rouba" da RAM do sistema (até 2GB).
                                    </p>

                                    <div className="bg-slate-950 p-4 rounded-lg border border-cyan-500/30">
                                        <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
                                            <span>TOTAL RAM: 8GB</span>
                                            <span className="text-red-400 font-bold">DISPONÍVEL: 6GB</span>
                                        </div>
                                        <div className="w-full h-4 bg-slate-800 rounded-full flex overflow-hidden">
                                            <div className="w-[25%] bg-red-500 flex items-center justify-center text-[8px] font-bold text-white">VÍDEO</div>
                                            <div className="w-[75%] bg-cyan-600"></div>
                                        </div>
                                        <p className="mt-3 text-xs text-cyan-300 italic text-center">
                                            "Dual Channel é obrigatório aqui. Em Single Channel, o desempenho cai pela metade pois CPU e GPU brigam pelo mesmo pente de memória."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                [cite_start]{/* 3. REDE E CONECTIVIDADE [cite: 231-315] */}
                <section>
                    <SectionHeader
                        icon={Wifi}
                        title="Network Stack"
                        subtitle="Intel vs Killer vs Realtek & A Revolução CNVi"
                        color="cyan"
                    />

                    {/* Navegação de Abas */}
                    <div className="flex gap-2 mb-6 border-b border-slate-800">
                        {['intel', 'killer', 'realtek'].map((chip) => (
                            <button
                                key={chip}
                                onClick={() => setNetworkTab(chip)}
                                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${networkTab === chip
                                    ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20'
                                    : 'border-transparent text-slate-500 hover:text-slate-300'
                                    }`}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 min-h-[300px]">
                        {/* Conteúdo Dinâmico */}
                        <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
                            {networkTab === 'intel' && (
                                <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Intel Ethernet (I219-V / I225-V)</h3>
                                    [cite_start]<p className="text-slate-300 mb-4 text-sm">[cite: 241, 270]</p>
                                    <ul className="space-y-3 text-sm text-slate-400">
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5" /> Baixo uso de CPU (Offloading eficiente).</li>
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5" /> Estabilidade corporativa e drivers maduros.</li>
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-blue-500 mt-0.5" /> Padrão em placas de alto desempenho.</li>
                                    </ul>
                                </div>
                            )}
                            {networkTab === 'killer' && (
                                <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                                    <h3 className="text-2xl font-bold text-red-500 mb-2">Killer Networking (E2600 / AX)</h3>
                                    [cite_start]<p className="text-slate-300 mb-4 text-sm">[cite: 242, 289]</p>
                                    <ul className="space-y-3 text-sm text-slate-400">
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-red-500 mt-0.5" /> Priorização de pacotes para Gamers (QoS).</li>
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-red-500 mt-0.5" /> Integração com Wi-Fi 6E (DoubleShot Pro).</li>
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-red-500 mt-0.5" /> Drivers podem ser instáveis e software pesado.</li>
                                    </ul>
                                </div>
                            )}
                            {networkTab === 'realtek' && (
                                <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Realtek (RTL8125 2.5GbE)</h3>
                                    [cite_start]<p className="text-slate-300 mb-4 text-sm">[cite: 243, 305]</p>
                                    <ul className="space-y-3 text-sm text-slate-400">
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-cyan-500 mt-0.5" /> Custo acessível, permitindo 2.5GbE em placas de entrada.</li>
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-cyan-500 mt-0.5" /> Consome ciclos de CPU marginalmente maiores.</li>
                                        <li className="flex items-start gap-2"><ArrowRight size={16} className="text-cyan-500 mt-0.5" /> Padrão da indústria mainstream.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Card CNVi */}
                        <TechCard className="border-yellow-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Wifi className="text-yellow-400" />
                                <h3 className="font-bold text-white">Arquitetura CNVi</h3>
                            </div>
                            <p className="text-sm text-slate-300 mb-4 text-justify">
                                O Wi-Fi "on-board" moderno raramente é soldado. [cite_start]A arquitetura evoluiu para o sistema híbrido <strong>CNVi</strong> (Intel Integrated Connectivity)[cite: 310, 314].
                            </p>
                            <div className="space-y-2 text-xs font-mono text-slate-400">
                                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                                    <span className="text-yellow-500">1. Parte Lógica (MAC):</span> Movida para dentro do Chipset/CPU para reduzir custos.
                                </div>
                                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                                    <span className="text-yellow-500">2. [cite_start]Módulo CRF (PHY):</span> O cartão M.2 contém apenas a antena física[cite: 315].
                                </div>
                            </div>
                        </TechCard>
                    </div>
                </section>

                [cite_start]{/* 4. ENERGIA (VRM) E CHIPSET [cite: 370-410] */}
                <section>
                    <SectionHeader
                        icon={Zap}
                        title="Engenharia de Energia"
                        subtitle="VRM, MOSFETs e Chipset"
                        color="yellow"
                    />

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* VRM - Módulo Regulador de Tensão */}
                        <div className="lg:col-span-2 bg-slate-900 p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/10 blur-3xl"></div>

                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                [cite_start]<Thermometer className="text-yellow-500" /> Anatomia do VRM [cite: 376]
                            </h3>
                            <p className="text-sm text-slate-400 mb-6 text-justify">
                                O VRM converte os 12V da fonte para 1.1V-1.4V precisos para a CPU. [cite_start]Se falhar, o PC desliga ou queima[cite: 375].
                            </p>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-slate-950 p-4 rounded-lg border-t-2 border-yellow-500">
                                    <h4 className="text-white font-bold mb-1 text-sm">1. MOSFETs</h4>
                                    <p className="text-[10px] text-slate-400">Os "interruptores" de alta velocidade. [cite_start]Geram calor massivo[cite: 378].</p>
                                </div>
                                <div className="bg-slate-950 p-4 rounded-lg border-t-2 border-orange-500">
                                    <h4 className="text-white font-bold mb-1 text-sm">2. Chokes</h4>
                                    [cite_start]<p className="text-[10px] text-slate-400">Bobinas que filtram e suavizam a corrente elétrica[cite: 380].</p>
                                </div>
                                <div className="bg-slate-950 p-4 rounded-lg border-t-2 border-red-500">
                                    <h4 className="text-white font-bold mb-1 text-sm">3. Capacitores</h4>
                                    [cite_start]<p className="text-[10px] text-slate-400">Reservatórios de energia para estabilidade instantânea[cite: 381].</p>
                                </div>
                            </div>

                            {/* Thermal Throttling Warning */}
                            <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded flex gap-4 items-center">
                                <Lock className="text-red-400 shrink-0" />
                                <div>
                                    <span className="text-red-400 font-bold text-sm">Gargalo: Thermal Throttling</span>
                                    <p className="text-xs text-red-200/70 mt-1 text-justify">
                                        [cite_start]Em placas baratas, MOSFETs 100°C forçam a CPU a reduzir o clock (velocidade) para evitar derretimento[cite: 384, 388].
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Chipset (PCH) */}
                        <div className="space-y-4">
                            <TechCard className="h-full flex flex-col">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Microchip className="text-cyan-500" /> Chipset (PCH)
                                </h3>
                                <p className="text-sm text-slate-300 text-justify mb-4 flex-1">
                                    O "Gerente de Logística". Controla USB, SATA, Áudio e PCIe secundário. [cite_start]Conecta-se à CPU via <strong>DMI</strong>[cite: 393, 407].
                                </p>
                                <div className="bg-slate-950 p-4 rounded border border-slate-800 font-mono text-xs space-y-2">
                                    <SpecBadge label="Entrada (H610)" value="DMI Estreito" />
                                    <SpecBadge label="Topo (Z790)" value="DMI Largo" highlight />
                                    <p className="text-[10px] text-slate-500 mt-2 text-center pt-2 border-t border-slate-800">
                                        [cite_start]Mais pistas = Mais SSDs NVMe sem gargalo[cite: 410].
                                    </p>
                                </div>
                            </TechCard>
                        </div>
                    </div>
                </section>

                [cite_start]{/* 5. GARGALO UMA (MEMÓRIA) [cite: 344-366] */}
                <section>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <BarChart3 size={200} />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6">O Custo da Integração: UMA</h2>

                            <div className="flex flex-col md:flex-row gap-12">
                                <div className="flex-1">
                                    <p className="text-slate-300 text-lg mb-4 text-justify">
                                        Ao utilizar vídeo on-board (iGPU), ocorre a <strong>UMA (Unified Memory Architecture)</strong>. [cite_start]A placa não tem VRAM dedicada e "sequestra" parte da RAM do sistema[cite: 344, 351].
                                    </p>
                                    <div className="bg-slate-800/50 p-4 rounded-l-lg border-l-4 border-cyan-500 italic text-cyan-200 text-sm">
                                        [cite_start]"O processador e o vídeo brigam pelo mesmo cano de dados. Dual Channel é obrigatório para não cortar o desempenho pela metade." [cite: 347, 348]
                                    </div>
                                </div>

                                {/* Visualização de Alocação de Memória */}
                                <div className="w-full md:w-80 bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-2xl">
                                    <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
                                        <span>TOTAL RAM: 8GB</span>
                                        <span>STATUS: GARGALO</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-8 rounded-full overflow-hidden flex mb-4">
                                        <div className="w-[25%] bg-red-500 flex items-center justify-center text-[10px] font-bold text-white" title="Vídeo (UMA)">VÍDEO</div>
                                        <div className="w-[40%] bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">OS/APPS</div>
                                        <div className="w-[35%] bg-slate-700"></div>
                                    </div>
                                    <ul className="text-xs space-y-2 text-slate-400">
                                        <li className="flex justify-between">
                                            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Vídeo Reservado</span>
                                            <span className="font-mono text-white">~2 GB</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Sistema</span>
                                            <span className="font-mono text-white">3.2 GB</span>
                                        </li>
                                        <li className="flex justify-between pt-2 border-t border-slate-800">
                                            <span className="font-bold text-cyan-400">Performance</span>
                                            <span className="font-mono text-red-400 font-bold">Comprometida</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* =====================================================================================
                FOOTER E REFERÊNCIAS (Padrão Cap 00 com Caveira Neon)
                ===================================================================================== */}
            <footer className="mt-0 border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                {/* CAVEIRA DE FUNDO (Canto Esquerdo) */}
                <div className="absolute -bottom-1 -left-10 opacity-[0.05] pointer-events-none rotate-12 z-0">
                    <Skull size={300} className="text-cyan-400 blur-sm" />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="flex flex-col items-center gap-4 mb-10 opacity-70">
                        <div className="p-3 bg-slate-900 rounded-full border border-slate-800">
                            <Database className="w-6 h-6 text-slate-400" />
                        </div>
                        <h3 className="uppercase tracking-[0.2em] text-sm font-bold text-slate-400">Referências & Datasheets</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono space-y-2">
                            <p>REALTEK. ALC1220-VB: High Performance Audio Codec. 2017.</p>
                            <p>INTEL CORP. Ethernet Controller I225-V Datasheet. 2021.</p>
                            <p>AUDIO SCIENCE REVIEW. ALC1220 Measurements. 2020.</p>
                            <p>GIGABYTE TECHNOLOGY. AORUS Audio Implementation. 2023.</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono space-y-2">
                            <p>INTEL. 600 Series Chipset PCH Datasheet. 2022.</p>
                            <p>AMD. Ryzen Processor Architecture Whitepaper. 2021.</p>
                            <p>INFINEON. VRM Power Delivery Solutions. 2022.</p>
                            <p>IEEE 802.3az-2010: Energy Efficient Ethernet.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center border-t border-slate-900 pt-8">
                        {/* CAVEIRA NEON CENTRAL (Ciano para este cap) */}
                        <Skull
                            className="mb-6 w-12 h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.9)] hover:scale-110 transition-transform duration-300"
                            strokeWidth={1.5}
                        />

                        <p className="text-slate-300 font-bold mb-2">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
                        <p className="text-slate-500 text-sm mb-1">Engenharia de Computação</p>
                        <p className="text-cyan-600 text-xs font-mono mt-4">REVOLUXTI 2025 - Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MotherboardOnboardArticle;