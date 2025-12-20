/*
  ARQUIVO: src/HistoryInfographic.jsx
  NARRATIVA COMPLETA BASEADA NO PDF (33 PÁGINAS)
*/
import React, { useEffect, useRef } from 'react';
import {
    Cpu, Monitor, Zap, Server, Clock, Database, Layers, ArrowRight, ShieldCheck,
    BookOpen, AlertTriangle, Terminal, Recycle, Crosshair, ChevronRight, Anchor, HardDrive, Skull
} from 'lucide-react';

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
                    // Acelera um pouco para garantir 100%
                    visibility = Math.min(1, visibility * 1.1);

                    // 1. Escala
                    const scale = 0.8 + (visibility * 0.2);
                    image.style.transform = `scale(${scale})`;

                    // 2. Luz e Sombra
                    const shadowOpacity = 1 - visibility;
                    const lightOpacity = visibility;

                    // Off-White Glow (R: 255, G: 250, B: 240)
                    image.style.boxShadow = `
                        inset 0 0 ${100 * shadowOpacity}px rgba(0,0,0, ${shadowOpacity * 0.9}),
                        0 10px 40px rgba(255, 250, 240, ${lightOpacity * 0.6})
                    `;

                    // 3. Brilho
                    const brightness = 0.5 + (visibility * 0.5);
                    image.style.filter = `brightness(${brightness})`;
                });
            },
            {
                threshold: Array.from({ length: 50 }, (_, i) => i / 50),
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(container);

        return () => {
            if (container) observer.unobserve(container);
        };
    }, []);

    return (
        <div ref={containerRef} className="overflow-visible p-4 flex items-center justify-center">
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                // --- AQUI ESTÃO AS MUDANÇAS ---
                // rounded-2xl: Deixa bem redondo
                // border-4: Borda de 4px
                // border-slate-800: Cor da borda (cinza escuro para parecer um monitor/moldura)
                className={`${className} rounded-2xl border-6 border-slate-500 transition-transform duration-100 linear`}
                style={{
                    transform: 'scale(0.8)',
                    boxShadow: 'inset 0 0 100px rgba(0,0,0, 0.9)',
                    filter: 'brightness(0.5)',
                    willChange: 'transform, box-shadow, filter'
                }}
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-red-400 text-xs text-center font-mono p-2">Imagem não encontrada</div>'
                }}
            />
        </div>
    );
};
const HistoryInfographic = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 pb-20 overflow-x-hidden w-full">

            {/* =====================================================================================
                CABEÇALHO E INTRODUÇÃO (Baseado na Capa e Resumo)
                ===================================================================================== 
                */}
            <header className="relative bg-slate-900 border-b border-slate-800 pt-24 pb-20 px-4 overflow-hidden">
                {/* Efeito de fundo */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <hgroup>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            SALA DO ENIAC 1946 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Capítulo 00</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-10 leading-relaxed">
                            Monitor<br /> A evolução e a história da computação, <br /> das válvulas aos pixels autoemissores.
                        </h2>
                        <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Universidade Tecnológica Federal do Paraná<span className="hidden md:inline">|</span></p>
                        <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Câmpus pato Branco<span className="hidden md:inline">|</span></p>
                    </hgroup>

                    <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-slate-800/50 p-6 md:p-2 md:pr-6 rounded-2xl md:rounded-full border border-slate-700 backdrop-blur-sm max-w-[90%] mx-auto">
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

            {/* =====================================================================================
                SEÇÃO 1: A ERA DOS GIGANTES - O ENIAC Pag. 1
                ===================================================================================== 
            */}
            <section className="py-24 px-4 relative overflow-hidden">
                <article>
                    <div className="max-w-6xl mx-auto">
                        {/* Marcador de Linha do Tempo */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-cyan-500 h-px w-16"></div>
                            <span className="text-cyan-400 font-mono font-bold text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg">1946: O Despertar</span>
                            <div className="bg-slate-800 h-px flex-1"></div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-12 items-start">

                            {/* Coluna da Esquerda: Narrativa */}

                            <div className="md:col-span-5 relative z-10">

                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">O Colosso da Pensilvânia: <span className="text-cyan-400">ENIAC</span></h2>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Vamos dar início falando de monitor. O nosso, objeto de estudos inicial
                                    é o ENIAC sigla usada para (Electronic Numerical Integrator and Computer) foi o
                                    primeiro computador digital eletrônico de uso geral desenvolvido pelo exército dos
                                    Estados Unidos da América entre os anos 1943 e 1945 por John Mauchly e J. Presper
                                    Eckert na Escola Moore de Engenharia Elétrica da Universidade da Pensilvânia,
                                    destinado para cálculos de projeções balísticas e bombas, principalmente para
                                    tabelas de artilharia, durante a segunda guerra mundial. <br /><br />
                                    Pesava 30 toneladas em
                                    uma sala de 1.500 pés quadrados, e os seus 40 gabinetes de quase três metros
                                    continham mais de 18.000 tubos a vácuo e 1.500 relés além de centenas de
                                    resistores, capacitores e indutores.
                                </p>
                                {/* Primeira imagem esquerda  PLACEHOLDER DE IMAGEM 3 */}
                                <div className="w-full aspect-video bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                    {<img src="ENIAC_programmers.jpg" alt="ENIAC" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />}
                                </div>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Não utilizava um monitor com interface gráfica e não possuía sistema
                                    operacional ou linguagem de programação como conhecemos hoje. Seus programas
                                    eram implementados fisicamente, através de painéis, switches e cabos conectados
                                    manualmente — o que tornava a reprogramação lenta e trabalhosa.
                                    Sua saída de dados era apresentada de acordo com as tecnologias
                                    disponíveis nos anos de 1940.
                                </p> <br />
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    O ENIAC usava lâmpadas indicadoras (neon ou pequenas luzes de
                                    controle) que acendiam para mostrar valores armazenados em determinados
                                    registradores ou acumuladores. <br />
                                    Um acumulador é um registrador especial dentro da Unidade Lógica e
                                    Aritmética (ULA), responsável por armazenar temporariamente resultados de
                                    operações matemáticas. <br /> <br />
                                    Os dados processados podiam ser exibidos visualmente por
                                    meio dessas luzes que permitiam os operadores visualizar o estado atual das
                                    operações, bit a bit ou digito a digito, ou registrados principalmente em papeis e cartão
                                    perfurados como saída primária, através de dispositivos de saída mecânica como
                                    perfuradores e impressoras (máquinas como a IBM 407) que registravam os dados
                                    em cartões de 80 colunas.
                                </p>
                                {/* PLACEHOLDER DE IMAGEM 2 */}
                                <div className="w-full aspect-video bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                    {<img src="card.png" alt="ENIAC" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />}
                                </div>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Esses cartões podiam ser lidos por outras máquinas para
                                    análises adicionais, e armazenados como registros físicos.
                                    Em algumas situações os operadores liam os valores diretamente nos painéis
                                    de luz e os anotavam manualmente, isso era comum em testes e validações menores,
                                    antes de enviar os dados para perfuração.
                                    Essa grande máquina colossal podia fazer cálculos até 2.500 vezes mais
                                    rápido que um ser humano. Em julho de 1947 recebeu um upgrade na sua memória,
                                    agora podendo receber 5 mil cálculos por segundo e já era mil vezes mais rápido do
                                    que qualquer outra máquina em execução.
                                    Sendo assim no final de 1948 ENIAC foi finalizado. E estima-se que o ENIAC
                                    havia feito mais cálculos durante os dez anos em que esteve em operação do que
                                    toda a humanidade havia feito até então. Marcando um ponto de virada na história da
                                    computação.
                                </p>
                                {/* PLACEHOLDER DE IMAGEM 3 */}
                                <div className="w-full aspect-video bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                    {<img src="eniac.png" alt="Imagem 3 Sala do Eniac 1946" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />}
                                </div>
                                <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                                    <Terminal className="w-6 h-6" /> A Programação Física
                                </h2>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Imagine que o ENIAC estava calculando uma trajetória balística. Os dados
                                    iniciais (ângulo, velocidade etc.) seriam inseridos por cartões perfurados. O ENIAC
                                    realizaria milhões de operações matemáticas. E então o resultado (posição final
                                    tempo de voo etc.) seriam enviados para os painéis de luz, onde o operador veria os
                                    valores instantaneamente, ou para uma perfuradora de cartões que gerava cartões
                                    com os resultados, usados posteriormente por outras máquinas. <br /> <br />
                                    Diferente dos computadores modernos, onde a programação é feita por meio
                                    de linguagens de alto nível e armazenada digitalmente, no ENIAC a programação era
                                    feita de forma física e manual. Ou seja:
                                    Para cada novo programa, os operadores reconfiguravam fisicamente o
                                    hardware do ENIAC. Eles conectavam cabos elétricos (semelhante a cabos
                                    telefónicos da época) e ajustavam interruptores e chaves (switches rotativos e
                                    painéis) que definiam: <br /><br />
                                    <ul>
                                        <li>• Qual acumulador faria qual cálculo,</li>
                                        <li>• A ordem de execução dos cálculos,</li>
                                        <li>• Como os dados seriam transferidos de um módulo para outro,</li>
                                        <li>• Como e onde os resultados seriam enviados.</li>
                                    </ul>
                                </p>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Não havia código fonte como conhecemos hoje. O fluxo de execução era representado
                                    fisicamente, por onde o sinal elétrico deveriam passar de um componente a outro,
                                    fazer esse tipo de alteração exigia horas ou dias desconectando e reconectando
                                    fios além de reconfiguração manual de centenas de chaves, método completamente demorado
                                    e suscetível a erros tornando a programação do ENIAC uma tarefa complexa, minuciosa e artesanal.
                                </p>
                            </div>
                            {/* Coluna da Direita: Cards de Dados */}
                            <div className="md:col-span-7 space-y-6 relative z-10 mt-8 md:mt-0">

                                {/* Card de Especificações */}
                                <div className="bg-slate-900/80 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-cyan-500/10 p-4 rounded-bl-2xl">
                                        <Server className="text-cyan-400" size={24} />
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-6">Especificações</h2>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Válvulas a Vácuo</p>
                                            <p className="text-white text-3xl font-mono font-bold">18.000</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Peso Total</p>
                                            <p className="text-white text-3xl font-mono font-bold">30 Ton.</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Consumo de Energia</p>
                                            <p className="text-white text-3xl font-mono font-bold">150 kW</p>
                                            <p className="text-xs text-slate-500 mt-1">Acendia 2.500 lâmpadas</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                                            <p className="text-slate-400 text-xs uppercase font-bold mb-1">Velocidade</p>
                                            <p className="text-white text-2xl font-mono font-bold">5k <span className=" text-slate-400 text-xs uppercase font-bold mb-1"></span>somas/seg</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card de Tributo às Programadoras (PDF Pág 6) */}
                                <div className="bg-gradient-to-br from-purple-900/40 to-slate-900 p-8 rounded-2xl border border-purple-500/30 relative overflow-hidden">
                                    <div className="absolute -right-10 -bottom-10 opacity-10">
                                        <ShieldCheck size={150} />
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                        <ShieldCheck className="text-purple-400 w-6 h-6" /> Importância histórica:
                                    </h2>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify mb-6 relative z-10">
                                        Se você criasse uma imagem mental dos que trabalhavam no primeiro computador totalmente
                                        eletrônico programável você assumiria que John Mauchly e J. Presper Eckert, eram os únicos
                                        que colocaram a mão na massa em seu desenvolvimento, mas por trás desses homens e sua equipe,
                                        escondidas nos bastidores estavam essas seis mulheres que programavam o computador para calcular
                                        trajetórias balísticas de artilharia em segundos.
                                        A história frequentemente foca nos engenheiros (Mauchly e Eckert) que construíram o hardware, mas ignora quem o fez funcionar. <strong>Seis mulheres</strong>, matemáticas brilhantes, foram as primeiras programadoras da história. Elas decifraram a lógica da máquina sem manuais e realizaram os cálculos complexos da guerra.
                                    </p>

                                    <p>Durante a segunda guerra mundial, a maioria dos homens estava no combate,
                                        então as mulheres foram recrutadas para trabalhar em áreas técnicas e cientificas
                                        nos EUA. Elas foram inicialmente contratadas como “computadores humanos, ou
                                        seja, faziam cálculos manuais, mas depois foram treinadas para operar o ENIAC.
                                        Apesar da complexidade do equipamento elas dominaram seu funcionamento e
                                        programação, mesmo sem manuais e com pouco conhecimento público na época.
                                        Essas mulheres criaram os primeiros algoritmos complexos executados em
                                        uma máquina eletrônica e foram pioneiras na arte da programação, antes mesmo da
                                        existência de linguagens de programação.
                                    </p><br></br>


                                </div>
                                <div className="w-full h-64 md:h-[500px] bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                    <img
                                        src="Girls.png"
                                        alt="ENIAC"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                {/* Card de Tributo às Programadoras (PDF Pág 6) */}
                                <div className="bg-gradient-to-br from-purple-900/40 to-slate-900 p-8 rounded-2xl border border-purple-500/30 relative overflow-hidden">
                                    <div className="absolute -right-10 -bottom-10 opacity-10">
                                        <ShieldCheck size={150} />
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                        <ShieldCheck className="text-purple-400 w-6 h-6" /> As Pioneiras Esquecidas
                                    </h2>

                                    <p className="text-slate-300 text-sm leading-relaxed text-justify mb-6 relative z-10">
                                        Durante décadas, elas não receberam o devido crédito, sendo reconhecidas
                                        publicamente a partir da década de 1980, quando a história do ENIAC passou a ser
                                        recontada sob uma ótica mais que justa. Conhecidas hoje como as “ENIAC Gils” ou
                                        “Women of ENIAC”, a primeira equipe de programadoras do ENIAC era composta por
                                        seis mulheres talentosas:
                                    </p>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {["Frances Spence", "Jean Bartik", "Betty Holberton", "Kay Antonelli", "Marlyn Meltzer", "Ruth Teitelbaum"].map(name => (
                                            <span key={name} className="text-[11px] font-bold uppercase bg-purple-900/60 text-purple-200 px-3 py-1.5 rounded-full border border-purple-400/30 shadow-sm">
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* --- IMAGEM DAS PROGRAMADORAS --- */}
                                <div className="w-full h-auto bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">

                                    <img
                                        src="ENIAC-girls.jpg" alt="Mulheres do ENIAC"
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        // Se der erro, ele avisa qual arquivo está procurando
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="p-4 text-center text-red-400 text-xs">Erro: Não achei o arquivo "125743.213549-ENIAC-girls.jpg" na pasta public</div>'
                                        }}
                                    />

                                    <div className="absolute bottom-0 left-0 bg-black/70 w-full p-2 text-center z-10">
                                        <p className="text-xs text-white font-mono">Referência: PDF Página 4 - As Programadoras</p>
                                    </div>
                                </div>

                                {/* --- IMAGEM Quantidade de Cartões perfurados --- */}
                                <div className="w-full h-auto bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                    <img
                                        src="Programer-girl.png"
                                        alt="Mulheres do ENIAC"
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        // Se der erro, ele avisa qual arquivo está procurando
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="p-4 text-center text-red-400 text-xs">Erro: Não achei o arquivo "125743.213549-ENIAC-girls.jpg" na pasta public</div>'
                                        }}
                                    />

                                    <div className="absolute bottom-0 left-0 bg-black/70 w-full p-2 text-center z-10">
                                        <p className="text-xs text-white font-mono"> Quantidade de Cartões</p>
                                    </div>

                                </div>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Nas décadas seguintes, a computação foi dominada por gigantes corporativos. <br /> <br />
                                    A IBM era tão dominante que o mercado era apelidado de "Branca de Neve e os Sete Anões" (seus competidores).
                                    Entre eles, destacou-se a General Electric (GE), uma gigante industrial que entrou na computação nos anos 50.
                                    A partir da década de 50, mais exatamente por volta de 1955 a computação estava dando seus primeiros passos
                                    fora dos laboratórios militares e centros acadêmicos e começaram a ser vendidos para fins comerciais,
                                    e pesquisas cientificas por grandes empresas e governos.
                                    Por empresas como IBM, UNIVAC (da Remington Rand), e depois a General Eletric nos bastidores preparando sua
                                    entrada mais sólida no mundo dos computadores de grande porte, que competiam para
                                    desenvolver computadores mainframe, que eram sistemas de grande porte voltados para processamento de dados em empresas,
                                    governos e militares. </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* =====================================================================================
                SEÇÃO 2: A ERA DOS MAINFRAMES & GE
            ===================================================================================== */}
            <section className="py-24 px-4 bg-slate-900 border-y border-slate-800 relative">
                <article>
                    <div className="max-w-6xl mx-auto">

                        {/* Marcador de Linha do Tempo */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-blue-500 h-px w-16"></div>

                            <span className="text-blue-400 font-mono font-bold text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg">  1950s - 1970s: A Era do Ferro</span>
                            <div className="bg-slate-800 h-px flex-1"></div>

                        </div>

                        <div className="grid md:grid-cols-12 gap-10">

                            {/* --- COLUNA ESQUERDA (LARGA): Texto Principal + Imagem Grande --- */}
                            <div className="md:col-span-8">
                                <h2 className="text-3xl font-bold text-white mb-6">Mainframes e os "Sete Anões"</h2>

                                <div className="prose prose-invert max-w-none text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-8">
                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        A GE desenvolveu ou utilizou sistemas computacionais específicos,
                                        voltado para suas próprias necessidades industriais ou militares da época provavelmente com os seguintes usos:
                                        Cálculos de processos industriais.
                                        Cálculo científico e de engenharia.
                                        Aplicações militares e de defesa (em parceria com o governo dos EUA).

                                        Aplicações aeronáuticas e espaciais (a GE já trabalhava com turbinas e sistemas complexos).
                                    </p>
                                    {/* MUDANÇA: h-[600px]  deixa o quadro bem alto para caber a máquina inteira */}
                                    <div className="w-full h-96 md:h-[600px] bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group mb-8 shadow-xl">

                                        {/* Ícone de fundo (só aparece se a imagem falhar) */}
                                        <HardDrive className="text-slate-600 mb-4 opacity-50" size={40} />

                                        <img
                                            src="GE.jpg"  // <--- CONFIRA SE O NOME DO ARQUIVO ESTÁ CERTO NA PASTA PUBLIC
                                            alt="Mainframe General Electric"

                                            // MUDANÇA 2: 'object-top' garante que o nome 'General Electric' no topo não seja cortado
                                            className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"

                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.querySelector('p').innerHTML = 'Imagem não encontrada. Verifique o nome na pasta public.'
                                            }}
                                        />

                                        {/* Texto de erro ou placeholder */}
                                        <p className="text-slate-500 font-mono text-sm mb-2 relative z-0"></p>

                                        <div className="absolute bottom-0 left-0 w-full bg-black/70 p-3 text-center z-10">
                                            <p className="text-xs text-white font-mono"> Fábrica GE</p>
                                        </div>
                                    </div>
                                    <p>
                                        A partir da década de 50 (aprox. 1955), a computação saiu dos laboratórios militares para o comércio.
                                        Empresas como IBM, UNIVAC e GE disputavam a criação de <strong>Mainframes</strong>: sistemas de grande porte para processamento de dados críticos.
                                        A GE desenvolveu sistemas específicos para cálculos industriais, científicos e defesa militar.

                                        Aplicações aeronáuticas e espaciais (a GE já trabalhava com turbinas e sistemas complexos).
                                    </p> <br />
                                    <p>
                                        Embora ainda fossem equipamentos restritos a aplicações internas e governamentais, essas iniciativas
                                        marcaram o início da trajetória da GE no campo da computação de grande porte. Em 1955 a GE ainda não
                                        havia lançado seus mainframes comerciais mais conhecidos, como GE-200 e GE-600, que surgiram na década seguinte.
                                        Contudo, seus primeiros sistemas computacionais já apresentavam características típicas de mainframe:
                                        máquinas grandes, caras, customizadas e destinadas principalmente a ambientes industriais e militares.
                                        Correndo por fora dos holofotes comerciais da época a General Eletric já se consolidava como uma pioneira
                                        silenciosa na evolução dos computadores de grande porte, antecipando movimentos que,
                                        posteriormente a colocariam entre as grandes empresas da história da computação.
                                    </p><br />
                                    <p>Correndo por fora dos holofotes comerciais da época a General Eletric já se consolidava
                                        como uma pioneira silenciosa na evolução dos computadores de grande porte, antecipando movimentos que,
                                        posteriormente a colocariam entre as grandes empresas da história da computação.
                                    </p>
                                </div>

                                {/* --- IMAGEM: CRIADORES DO BASIC (Versão Super Alta) --- */}
                                {/* AQUI ESTÁ O SEGREDO: 'h-[800px]' define a altura */}
                                <div className="w-full h-[500px] md:h-[800px] bg-slate-800 rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group shadow-xl mb-8">

                                    <HardDrive className="text-slate-600 mb-4 opacity-50" size={40} />

                                    <img
                                        src="John Kemeny e Thomas Kurtz.jpg"
                                        alt="John Kemeny e Thomas Kurtz"

                                        // 'object-top' garante que o corte comece de cima (cabeças) para baixo
                                        className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"

                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="p-4 text-center text-red-400 text-xs">Imagem não encontrada. Verifique o nome do arquivo.</div>'
                                        }}
                                    />

                                    <div className="absolute bottom-0 left-0 w-full bg-black/70 p-3 text-center z-10">
                                        <p className="text-xs text-white font-mono">Referência: PDF Pág 8 - Criadores do BASIC</p>
                                    </div>
                                </div>
                                <p>Veja:

                                </p>
                                <div className="grid md:grid-cols-3 gap-8 mb-16">
                                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                                        <h4 className="text-blue-400 font-bold mb-2">GE e o BASIC</h4>
                                        <p className="text-sm text-slate-400">O computador GE-225 (1960) foi crucial no desenvolvimento da linguagem BASIC em Dartmouth, democratizando a programação.</p>
                                    </div>
                                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                                        <h4 className="text-blue-400 font-bold mb-2">Foco Industrial</h4>
                                        <p className="text-sm text-slate-400">Diferente da IBM (focada em negócios), a GE focava em controle de processos industriais e militares.</p>
                                    </div>
                                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                                        <h4 className="text-blue-400 font-bold mb-2">A Saída (1970)</h4>
                                        <p className="text-sm text-slate-400">Devido aos altos custos e competição feroz, a GE vendeu sua divisão de computadores para a Honeywell em 1970.</p>
                                    </div>
                                </div>
                                <p>Antes disso como no ENIAC, dados e instruções não estavam na mesma memória, e programa não era armazenado era constituído fisicamente.

                                    A proposta de von Neumann tornou possível o que conhecemos hoje como software: instruções armazenadas em memória,
                                    podendo ser facilmente modificadas, substituídas, copiadas e até carregadas a partir de outra máquina.</p>
                            </div>


                            {/* --- COLUNA DIREITA (ESTREITA): Cards Informativos Empilhados --- */}
                            <div className="md:col-span-4 flex flex-col gap-4">

                                {/* Card 1 */}
                                <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
                                    <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                                        <Terminal className="w-4 h-4" /> GE e o BASIC
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        O computador GE-225 (1960) foi crucial no desenvolvimento da linguagem BASIC em Dartmouth, democratizando a programação.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                                        <HardDrive className="w-4 h-4" /> Foco Industrial
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Diferente da IBM (focada em negócios), a GE focava em controle de processos industriais e militares complexos.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-red-500/50 transition-colors">
                                    <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                                        <ArrowRight className="w-4 h-4" /> A Saída (1970)
                                    </h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Devido aos altos custos e competição feroz, a GE vendeu sua divisão de computadores para a Honeywell em 1970.
                                    </p>
                                </div>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Os primeiros computadores da GE para uso comercial surgiram no final da década de 1950 e início da década de 1960. Exemplo:

                                    GE-225 (1960) — foi um dos primeiros mainframes comerciais da GE, usados inclusive por John Kemeny e Thomas Kurtz para desenvolver a linguagem de programação BASIC.</p>
                                A GE é a única grande empresa não especializada em computadores que chegou a competir com gigantes como IBM no mercado de mainframes. <br /><br />
                                E foi uma das poucas empresas privadas a operar um sistema operacional de tempo compartilhado — o famoso GE Multics (1964 – 1970), que influenciaria diretamente no Unix. <br /><br />

                                Um mainframe é um computador de grande porte, projetado para alta capacidade de processamento, alta confiabilidade e grande volume de dados e transações simultâneas. São muito usados em:
                                <ul>
                                    <li>Bancos (transações financeiras),</li>

                                    <li>Governo (previdência e segurança),</li>

                                    <li>Companhias aéreas (reservas),</li>

                                    <li>Industria (controle de produção).</li>
                                </ul>
                                <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                    Embora mainframe e servidores atendam propostas semelhante (processamento de dados e serviços em rede),
                                    eles não são a mesma coisa, mas tem pontos em comum e diferenças muito claras. <br /><br />

                                    Fazendo uma analogia moderna veja o mainframe como um mega servidor centralizado com tudo integrado,
                                    extremamente confiável, usado por bancos para processamento de milhares de transações por segundo (ex: processamento bancário da IBM zSeries).
                                    Poucas empresas hoje usam atualmente, mas continuam importantes para o processamento de dados críticos e legado. <br /><br />

                                    Já os servidores modernos são vários computadores menores (ou virtualizados na nuvem) distribuídos, escaláveis horizontalmente,
                                    flexíveis e responsáveis por sites, aplicações e serviços em rede (ex: AWS, Azure, Google Cloud). Usados globalmente em nuvem, data centers e empresas.
                                </p>
                                <p >
                                    “Bom agora que já sabemos dos primeiros passos dos avanços da computação, em meio a toda essa disputa surge uma ideia que mudaria
                                    para sempre a forma como pensamos e construímos computadores: o Modelo de von Neumann.”<br /><br />

                                    No final da década de 1940, enquanto máquinas como o ENIAC impressionavam o mundo com sua velocidade e poder de cálculo,
                                    havia um grande obstáculo técnico: a forma de programar e armazenar
                                    instruções ainda era primitiva, manual e pouco flexível. <br />
                                    Cada novo problema exigia reconectar fios, ajustar interruptores e reconfigurar fisicamente o equipamento.
                                    Era como reconstruir o cérebro do computador do zero a cada operação.<br />
                                    Os dispositivos tinham uma função específica, uma calculadora por exemplo servia apenas para realizar cálculos. <br />
                                    Foi nesse cenário que o matemático John Von Neumann, ao observar o funcionamento do ENIAC e colaborar com sua equipe,
                                    propôs uma arquitetura que unificasse dados e instrução na mesma memória — algo até então inédito. Uma ideia revolucionária. <br />
                                    Antes disso como no ENIAC, dados e instruções não estavam na mesma memória, e programa não era armazenado era constituído fisicamente.

                                </p>
                                {/* Card Extra: Estatística Visual */}
                                <div className="mt-auto bg-gradient-to-br from-blue-900/20 to-slate-900 p-4 rounded-xl border border-blue-500/20 text-center">
                                    <span className="text-xs text-blue-400 uppercase tracking-widest font-bold">Ano Marco</span>
                                    <p className="text-3xl font-bold text-white mt-1">1960</p>
                                    <p className="text-[10px] text-slate-500">Lançamento do GE-225</p>
                                </div>
                            </div>
                        </div>

                        {/* TABELA COMPARATIVA RESPONSIVA */}
                        <div className="mt-16 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                            <div className="bg-slate-800/80 p-4 border-b border-slate-800 flex items-center gap-3">
                                <Database className="text-blue-400" />
                                <h3 className="text-lg font-bold text-white">Comparativo</h3>
                            </div>

                            {/* ADICIONADO: overflow-x-auto para permitir rolar para o lado */}
                            <div className="overflow-x-auto">
                                {/* ADICIONADO: min-w-[600px] para forçar a tabela a ser larga e não esmagar o texto */}
                                <table className="w-full text-sm text-left min-w-[600px]">
                                    <thead className="bg-slate-900/50 text-blue-400 uppercase font-bold text-xs tracking-wider">
                                        <tr>
                                            <th className="p-5">Aspecto</th>
                                            <th className="p-5 bg-blue-900/10 border-x border-slate-800">Mainframe (Era Clássica)</th>
                                            <th className="p-5">Servidor Moderno (Cloud Era)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800 text-slate-300 font-mono text-xs md:text-sm">
                                        <tr>
                                            <td className="p-5 font-bold text-slate-400 sans-serif">Tamanho Físico</td>
                                            <td className="p-5 bg-blue-900/5 border-x border-slate-800">Ocupa salas inteiras, múltiplos racks pesados.</td>
                                            <td className="p-5">Compactos (Blades 1U/2U) ou infraestrutura 100% virtual.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 font-bold text-slate-400 sans-serif">Escalabilidade</td>
                                            <td className="p-5 bg-blue-900/5 border-x border-slate-800">Vertical (Scale-Up): Mais poder na mesma máquina.</td>
                                            <td className="p-5">Horizontal (Scale-Out): Milhares de máquinas menores.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 font-bold text-slate-400 sans-serif">Modelo de Custo</td>
                                            <td className="p-5 bg-blue-900/5 border-x border-slate-800">Capex Elevado: Investimento inicial milionário.</td>
                                            <td className="p-5">Opex: Paga-se mensalmente pelo uso (Nuvem).</td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 font-bold text-slate-400 sans-serif">Uso Típico</td>
                                            <td className="p-5 bg-blue-900/5 border-x border-slate-800">Transações Bancárias, Governo.</td>
                                            <td className="p-5">Web, Apps, Microserviços, IA, Big Data.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* ========================================
                SEÇÃO 3: A ARQUITETURA DE VON NEUMANN 
                =============================================
            */}
            <section className="py-24 px-4 relative overflow-hidden">
                <article>
                    {/* Fundo Abstrato */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        {/* Marcador de Linha do Tempo */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-cyan-500 h-px w-16"></div>
                            <span className="text-cyan-400 font-mono font-bold text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg">1945: O Modelo Teórico</span>
                            <div className="bg-slate-800 h-px flex-1"></div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-6">
                                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">A Arquitetura que Mudou Tudo</h2>
                                <p >
                                    Em 1945, o matemático John von Neumann propôs um modelo que se tornaria o padrão para 99% dos
                                    computadores até hoje. A ideia genial: <strong>Armazenar programas (instruções) e dados na mesma memória.</strong>
                                </p>
                                <p >
                                    Isso significava que, para mudar a tarefa do computador, você não precisava mais mexer nos cabos físicos (como no ENIAC).
                                    Bastava carregar um novo "software" na memória. <br /><br />
                                    Para o modelo de arquitetura de von Neumann era necessária uma unidade de processamento, que pegava os dados e instruções para realizar alguns cálculos,
                                    matemáticos ou operações lógicas e ter uma saída a cada tipo de entrada. <br /><br />
                                    Sendo assim enquanto as empresas como a General Eletric, IBM e Remington Rand travavam suas batalhas pelo domínio de mercado de computadores de grande porte,
                                    foi o modelo teórico de von Neumann que serviu como esqueleto lógico para praticamente todas essas máquinas. <br /> <br />
                                    Memória principal: Na memória principal podemos fazer uma analogia a memória RAM, responsável para armazenar dados e instruções de programas. <br /><br />
                                    Unidade de controle de programa: <br /> É a responsável por se comunicar com a memória principal e trocando informações a respeito da execução do processo: <br /> <br />
                                    Busca a instrução para abrir um arquivo, <br />
                                    Busca informações para ler dados do arquivo, <br />
                                    Busca instruções para fechar o arquivo. <br /><br />

                                    Memória principal: <br />Na memória principal podemos fazer uma analogia a memória RAM, responsável para armazenar dados e instruções de programas. <br /><br />
                                    Unidade lógica e aritmética: é responsável por buscar a instrução e os dados que vem tanto da unidade de controle, como da própria memória principal,
                                    visto na imagem que ela se comunica tanto com a memória como também com a unidade de controle, para pegar os dados e executar algumas tarefas com eles,
                                    seja operações lógicas ou aritméticas, feito isso ela pode tanto devolver os dados para memória principal ou para um equipamento de entrada e saída. <br /><br />
                                    Equipamento de entrada e saída: Exemplo após efetuar uma tarefa como uma operação matemática, a unidade de controle acessa a memória principal, busca a instrução e os dados,
                                    em seguida passa as instruções para a unidade lógica e aritmética que processa os dados e pode retornar a saída tanto para a memória principal que pode armazenar e
                                    ser usada depois ou mandar para o monitor que vai exibir a saída da operação. De modo geral um Equipamento de entrada e sapida pode ser um mouse, hd, monitor, teclado.



                                </p>

                                {/* Alerta vermelho de Gargalo */}
                                <div className="bg-red-950/30 border-l-4 border-red-500 p-6 rounded-r-xl backdrop-blur-sm">
                                    <h4 className="text-red-400 font-bold flex items-center gap-3 mb-3 text-xl">
                                        <AlertTriangle className="w-6 h-6" /> O "Gargalo de Von Neumann"
                                    </h4>
                                    <p className="text-slate-300 text-sm text-justify leading-relaxed">
                                        O modelo tem um defeito fundamental. Como dados e instruções trafegam pelo <strong>mesmo canal (barramento)</strong>,
                                        a CPU (que é extremamente rápida) precisa ficar ociosa esperando a Memória RAM (que é mais lenta) buscar e entregar as
                                        informações uma de cada vez. Esse é o principal limitador de desempenho dos computadores modernos. <br /><br />
                                        A arquitetura proposta por John Von Neumann em 1945 revolucionou a computação ao padronizar o modelo
                                        de funcionamento dos computadores eletrônicos. No entanto, essa mesma estrutura lógica — baseada na separação entre memória,
                                        unidade lógica e dispositivos de entrada e saída — trouxe consigo uma limitação conhecida até hoje como “o gargalo de Von Neumann”.

                                        O gargalo de Von Neumann se refere-se à limitação na taxa de transferência de dados entre a memória principal e a unidade central de processamento (CPU). <br /> <br />

                                        Como o barramento de comunicação entre esses dois elementos é compartilhado tanto para dados quanto para instruções,
                                        o processador frequentemente fica ocioso aguardando que as informações cheguem — mesmo sendo capaz de operar em alta velocidade. <br /> <br />

                                        Efeitos práticos desse gargalo: <br />

                                        1 - Redução do desempenho em tarefas que exigem grande volume de leitura/escrita na memória; <br />

                                        2 - Desperdício do potencial de processamento da CPU;  <br />

                                        3 - Aumento da latência (tempo de resposta) em aplicações complexas; <br />

                                        4 - Necessidade de técnicas de otimização, como, cache, papeline e memória hierárquica. <br /><br />
                                    </p>
                                    <div className="w-full aspect-video bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                        <Monitor className="text-slate-600 mb-4 opacity-50" size={40} />
                                        <p className="text-slate-500 font-mono text-sm">[]</p>
                                        <p className="text-xs text-slate-600 mt-2">Referência: PDF Página 4</p>
                                        {<img src="gargalo-RevoluxTI.jpg" alt="ENIAC" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />}
                                    </div>
                                    <div className="w-full aspect-video bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8">
                                        <Monitor className="text-slate-600 mb-4 opacity-50" size={40} />
                                        <p className="text-slate-500 font-mono text-sm">[]</p>
                                        <p className="text-xs text-slate-600 mt-2">Referência: PDF Página 4</p>
                                        {<img src="Gargalo2Revoluxti.jpg" alt="ENIAC" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />}
                                    </div>

                                    <p className="text-slate-500 font-mono text-sm">
                                        Por que isso acontece?
                                        As instruções do programa (ex: somar, multiplicar, imprimir) e os dados a serem manipulados são armazenados na mesma memória. <br /> <br />
                                        Isso significa que o processador só pode acessar uma coisa por vez: ou uma instrução, ou um dado.
                                        Esse tráfego compartilhado cria um ponto único de estrangulamento que limita o desempenho, especialmente em sistemas modernos que processam milhões de instruções por segundo.
                                    </p>

                                </div>
                            </div>

                            {/* Diagrama Visual Interativo (Lado direito página 3) */}

                            <div className="md:col-span-6 bg-slate-900/80 p-8 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 flex flex-col items-center justify-center relative min-h-[500px]">
                                <p>
                                    É importante notar que a unidade lógica aritmética e a unidade de controle de programa juntos formam a unidade central de processamento (CPU - processador). <br /> <br />
                                    Na máquina de von Neumann temos um ciclo chamada de ciclo de busca e execução onde a unidade de controle e a unidade lógica aritmética vão realizar suas tarefas. <br /> <br />
                                    Vamos ilustrar no fluxograma o início de um programa em processo, e a partir do início o programa vai até a etapa de busca, nessa etapa a unidade de controle vai até a memória
                                    buscar informações e levar para etapa de decodificação, que por sua vez as informações serão decodificadas, ou seja recebendo valores binários decodificando para alguma
                                    funcionalidade no sistema eletrônico para habilitar ou desabilitar certa função dentro do processador, que em seguida aciona a unidade lógica aritmética que realiza o ciclo de execução,
                                    que finaliza o processo ou faz o loop para o ciclo de busca e repetir o processo. <br /> <br />
                                </p>

                                {/* Diagrama CSS Puro (Visualização) */}
                                <div className="relative w-full max-w-md flex flex-col gap-6 z-10">
                                    {/* Bloco CPU */}
                                    <div className="bg-slate-800 border-2 border-cyan-500 p-6 rounded-xl text-center relative group shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-900 text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider">Processador</span>
                                        <h3 className="text-2xl font-bold text-cyan-400 mb-4">CPU</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-slate-900/50 p-2 rounded border border-cyan-900/50 text-xs text-cyan-300 font-bold">Unidade de Controle (UC)</div>
                                            <div className="bg-slate-900/50 p-2 rounded border border-cyan-900/50 text-xs text-cyan-300 font-bold">ULA (Aritmética/Lógica)</div>
                                        </div>
                                    </div>

                                    {/* Barramento (Bus) */}
                                    <div className="h-24 w-full flex justify-center relative py-2">
                                        <div className="h-full w-4 bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-600 rounded relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                                            {/* Animação de dados trafegando */}
                                            <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-white/20"></div>
                                            <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-white w-6 h-6 drop-shadow-lg" />
                                        </div>
                                        <div className="absolute left-[55%] top-1/2 -translate-y-1/2 text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                                            Barramento de Dados + Instruções
                                        </div>
                                    </div>

                                    {/* Bloco Memória */}
                                    <div className="bg-slate-800 border-2 border-blue-600 p-6 rounded-xl text-center relative shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider">Armazenamento</span>
                                        <h3 className="text-2xl font-bold text-blue-400 mb-2">Memória Principal (RAM)</h3>
                                        <p className="text-sm text-slate-500 mb-4">Armazenamento Temporário Unificado</p>
                                        <div className="flex gap-2 justify-center">
                                            <div className="w-1/2 bg-blue-900/30 border border-blue-500/30 p-3 rounded text-xs text-blue-200 font-mono">
                                                [INSTRUÇÕES]<br />(Código do Programa)
                                            </div>
                                            <div className="w-1/2 bg-cyan-900/30 border border-cyan-500/30 p-3 rounded text-xs text-cyan-200 font-mono">
                                                [DADOS]<br />(Variáveis, Números)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ciclo de Busca (Fluxo inferior) */}
                                <div className="mt-12 w-full border-t border-slate-800 pt-6">
                                    <p className="text-center text-slate-500 text-sm uppercase font-bold mb-4 tracking-wider">O Ciclo de Máquina</p>
                                    <div className="flex justify-between items-center w-full max-w-md mx-auto">
                                        <div className="text-center">
                                            <div className="w-10 h-10 bg-slate-800 rounded-full border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold mb-2">1</div>
                                            <span className="text-[10px] uppercase text-slate-400 font-bold">Busca (Fetch)</span>
                                        </div>
                                        <ArrowRight className="text-slate-700" />
                                        <div className="text-center">
                                            <div className="w-10 h-10 bg-slate-800 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 font-bold mb-2">2</div>
                                            <span className="text-[10px] uppercase text-slate-400 font-bold">Decodifica</span>
                                        </div>
                                        <ArrowRight className="text-slate-700" />
                                        <div className="text-center">
                                            <div className="w-10 h-10 bg-slate-800 rounded-full border border-purple-500 flex items-center justify-center text-purple-400 font-bold mb-2">3</div>
                                            <span className="text-[10px] uppercase text-slate-400 font-bold">Executa</span>
                                        </div>
                                    </div>
                                </div>
                                {/* --- COLUNA DIREITA: DIAGRAMA (Imagem do PDF) --- */}
                                <div className="md:col-span-6 bg-slate-900/80 p-6 rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 flex flex-col items-center justify-center relative min-h-[400px]">

                                    {/* Título opcional no topo do card */}
                                    <div className="absolute top-4 left-0 w-full text-center">
                                        <span className="text-slate-500 text-[10px] font-mono uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                                            Diagrama Original (Pág 11)
                                        </span>
                                    </div>

                                    {/* A IMAGEM DO DIAGRAMA */}
                                    <div className="w-full h-full flex items-center justify-center mt-6">
                                        <img
                                            src="licensed-image- REVOLUXTI.jpg"  // <--- SUBSTITUA PELO NOME EXATO DO SEU ARQUIVO DE DIAGRAMA
                                            alt="Diagrama Arquitetura Von Neumann"

                                            // O SEGREDO ESTÁ AQUI: 'object-contain'
                                            // Isso diz: "Mostre a imagem inteira, não corte nada, mesmo que sobrem bordas."
                                            className="w-full h-auto max-h-[350px] object-contain hover:scale-105 transition-transform duration-300"

                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = '<div class="text-red-400 text-xs text-center font-mono border border-red-500/30 p-4 rounded">Imagem não encontrada.<br>Verifique se o nome do arquivo está certo na pasta public.</div>'
                                            }}
                                        />
                                    </div>

                                    {/* =====================================================================================
                                        BLOCO DE INTERRUPÇÃO (COM ESTILO MAGENTA)
                                        Este bloco substitui o parágrafo simples que você tinha antes.
                                        =====================================================================================
                                    */}

                                    <div className="mt-12 bg-fuchsia-900/20 border-r-4 border-fuchsia-500 p-6 rounded-l-xl backdrop-blur-sm relative overflow-hidden group">

                                        {/* Efeito de luz de fundo magenta */}
                                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-fuchsia-500/20 transition-colors"></div>

                                        <h4 className="text-xl font-bold text-fuchsia-400 flex items-center gap-3 mb-4 relative z-10">
                                            <AlertTriangle className="w-6 h-6 animate-pulse" />
                                            O Ciclo de Interrupção (Exemplo Prático)
                                        </h4>  <br />

                                        <div className="space-y-4 relative z-10">
                                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify font-medium">
                                                Também podemos adicionar no ciclo de busca e execução a etapa de <strong className="text-fuchsia-400">interrupção</strong>. <br /> <br />
                                                Imagine-se desenvolvendo uma solução para uma multinacional frigorífica.
                                                Em algum momento, um colaborador pode precisar parar uma máquina de corte ou esteira instantaneamente. <br /> <br />
                                            </p>
                                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify">
                                                Ele acionaria um <strong className="text-white bg-fuchsia-600 px-2 py-0.5 rounded text-sm uppercase tracking-wider">BOTÃO DE PARADA DE EMERGÊNCIA</strong>.
                                                Nesse momento, um sinal de interrupção (com dados de entrada) é enviado. <br /> <br />

                                                O processador <strong>para imediatamente</strong>
                                                o ciclo de busca e execução atual e desvia para um <strong>processamento exclusivo de segurança</strong>: finalizar o processo, acionar um alarme ou entrar em modo de segurança. <br /> <br /> <br />
                                            </p>

                                            {/* A IMAGEM DO DIAGRAMA VEM LOGO ABAIXO */}
                                            <div className="w-full mt-8 bg-slate-800 rounded-xl border-2 border-fuchsia-500/50 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_30px_rgba(217,70,239,0.3)]">
                                                <img
                                                    src="revoluxti.jpg"
                                                    alt="Diagrama do Ciclo de Interrupção e Parada de Emergência"
                                                    className="w-full h-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                                                />
                                            </div> <br />
                                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify">Se ao final do ciclo de interrupção o programa não for finalizado o programa volta para a etapa de busca novamente. </p><br /> <br />
                                        </div>

                                        {/* Ícone de decorativo no fundo */}
                                        <Zap className="absolute bottom-4 right-4 w-16 h-16 text-fuchsia-500/20 rotate-12 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* =====================================================================================
                SEÇÃO 4: A EVOLUÇÃO DOS MONITORES (Capítulos 4, 5, 6 do PDF)
                ===================================================================================== 
            */}
            <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
                <article>
                    <div className="absolute top-0 center w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Revolução Visual</h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                                Da física dos tubos de vácuo à química orgânica dos pixels que emitem luz própria.
                            </p>
                        </div>

                        {/* SUB-SEÇÃO: ESQUERDA PÁG  */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-red-500 h-px w-16"></div>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Monitor className="text-red-500" /> A Era dos Tubos (CRT)
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        A importância dos estudos de Von Neumann. <br /> <br />

                                        Apesar da limitação, o modelo de von Neumann foi essencial para a padronização da computação.
                                        Ele tornou possível criação de linguagens de programação, sistemas operacionais, dispositivos interativos
                                        que hoje fazem parte do cotidiano digital. <br />

                                        Entre essas evoluções está o desenvolvimento dos monitores. <br />

                                        Como estudos de Von Neumann contribuíram para os monitores? <br />

                                        A ideia de entrada e saída como parte integrada do sistema computacional possibilitou que novos dispositivos
                                        pudessem se comunicar com a CPU, inclusive os dispositivos gráficos <br /> <br />

                                        Com o tempo, os antigos teletypes e luzes indicadoras evoluíram para displays CRT, que podiam representar
                                        graficamente os dados processados. <br /> <br />

                                        O modelo teórico permitiu que os sistemas operacionais fossem projetados para controlar e
                                        renderizar dados em tempo real, abrindo caminho para o surgimento dos primeiros
                                        monitores de vídeo — inicialmente de forma textual depois gráfica como veremos a seguir.
                                        Durante décadas, o padrão foi o <strong>Tubo de Raios Catódicos</strong>. <br /> <br />
                                        Canhões de elétrons no fundo do tubo disparavam feixes contra uma tela de fósforo,
                                        fazendo-a brilhar. Eram analógicos, pesados, profundos e geravam muito calor. <br /> <br />

                                        Modelo: IBM 850 CRT Display, DEC VT05 <br />

                                        Fabricantes: IBM, DEC (Digital Equipment Corporation), RCA (Radio Corporation of America). <br /> <br />

                                        Tecnologia: Introdução dos primeiros monitores CRT eram dominantes pela RCA, estabelecendo a tecnologia padrão por décadas, utilizando tubos de raios catódicos para exibir imagens, resoluções e cores eram limitadas. O DEC VT05 foi um terminal de computador CRT fabricado pela Digital Equipment Corporation (DEC) na década de 1970.
                                    </p>
                                    {/* PLACEHOLDER DE IMAGEM 4 (Diagrama CRT) */}
                                    <div className="w-full h-72 bg-slate-900 rounded-xl border-4 border-solid border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                                        <p className="text-slate-500 font-mono text-sm">
                                            <img
                                                src="crt.png"
                                                alt="Diagrama Arquitetura Von Neumann"

                                                // O SEGREDO ESTÁ AQUI: 'object-contain'
                                                // Isso diz: "Mostre a imagem inteira, não corte nada, mesmo que sobrem bordas."
                                                className="w-full h-auto max-h-[350px] object-contain hover:scale-105 transition-transform duration-300"

                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = '<div class="text-red-400 text-xs text-center font-mono border border-red-500/30 p-4 rounded">Imagem não encontrada.<br>Verifique se o nome do arquivo está certo na pasta public.</div>'
                                                }}
                                            />
                                        </p> <br />
                                    </div> <br />
                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        A proposta de von Neumann tornou possível o que conhecemos hoje como software: instruções
                                        armazenadas em memória, podendo ser facilmente modificadas, substituídas, copiadas e até
                                        carregadas a partir de outra máquina. <br /> <br />
                                        Esse modelo:

                                        Padronizou a arquitetura dos computadores modernos, <br /> <br />

                                        Facilitou o desenvolvimento das linguagens de programação,

                                        e possibilitou a criação de sistemas operacionais.
                                    </p>

                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        Alguns registros trazem informações sobre os modelos de monitores da época e a tecnologia utilizava
                                        predominantemente tubos de raios catódicos para exibir imagens, resoluções e cores eram limitadas.
                                        Então vamos definir o período entre as décadas de 50 até o final da década de 70 como a
                                        “Era dos tubos de raios catódicos e sua sigla mundialmente conhecida (CRT Cathode Ray Tubes)”
                                        também existem outras nomenclaturas como raios cinescópio, ou popularmente chamado de tubo de imagem.
                                    </p>

                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">Modelo: IBM 850 CRT Display, DEC VT05

                                        Fabricantes: IBM, DEC (Digital Equipment Corporation), RCA (Radio Corporation of America).

                                        Tecnologia: Introdução dos primeiros monitores CRT eram dominantes pela RCA, estabelecendo a tecnologia padrão por décadas, utilizando tubos de raios catódicos para exibir imagens, resoluções e cores eram limitadas. O DEC VT05 foi um terminal de computador CRT fabricado pela Digital Equipment Corporation (DEC) na década de 1970.
                                    </p>
                                </div>
                                {/*Lado direito*/}
                                {/* Card RED de Perigo Ambiental Lado Direito */}
                                <div className="bg-red-950/20 p-8 rounded-3xl border-4 border-red-900/50 relative overflow-hidden">
                                    <div className="absolute -right-10 -top-10 opacity-10 text-red-500">
                                        <Recycle size={150} />
                                    </div>
                                    <h4 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
                                        <AlertTriangle className="w-6 h-6" /> O Legado Tóxico
                                    </h4>
                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        Monitores CRT são um pesadelo ambiental. O vidro do tubo contém altas concentrações
                                        de <strong>Chumbo</strong> (para bloquear a radiação X), além de Bário e Estrôncio no painel frontal.
                                    </p>
                                    <ul className="space-y-3 text-sm text-red-200/80 mb-6">
                                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 shrink-0 text-red-500 mt-0.5" /> O descarte em aterros contamina o solo e lençóis freáticos.</li>
                                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 shrink-0 text-red-500 mt-0.5" /> A reciclagem é cara e complexa devido à separação dos vidros contaminados.</li>
                                    </ul>
                                    <div className="bg-red-900/40 p-3 rounded-lg border border-red-800/50 text-xs text-red-300 font-mono">
                                        No Brasil, a Lei nº 12.305/2010 obriga a logística reversa para estes equipamentos.
                                    </div> <br />

                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        Vamos entender o funcionamento do tubo de raio catódico,
                                        que entre todos os componentes de um computador o
                                        monitor é o que menos atrai a área de reciclagem, e um dos fatores é por compor elementos que podem ser perigosos como o chumbo,
                                        estrôncio e o bário.

                                        Tendo como o principal componente em sua estrutura os tubos de raios catódicos,
                                        que representam cerca de 60% da massa total dos monitores, e possuem três principais tipos de vidro na sua composição,
                                        onde dois deles contêm em sua composição alta quantidade de chumbo que são prejudiciais. O chumbo é um metal tóxico cumulativo
                                        que afeta vários sistemas do corpo sendo particularmente prejudicial para crianças pequenas. Não há nível de exposição ao chumbo
                                        que seja conhecido como isento de efeitos nocivos.
                                    </p>


                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">O vidro presente no painel pode ser reaproveitado mais facilmente devido à ausência de chumbo em sua composição.
                                        Porém, o vidro do funil e do pescoço necessita de processos nos quais o chumbo possa ser retirado, permitindo o
                                        reaproveitamento do vidro e do chumbo de forma separada. As partes poliméricas e metálicas dos monitores são mais
                                        facilmente reaproveitadas, em resumo são 100% recicladas o que reduz a quantidade de lixo eletrônico depositado no
                                        solo e no meio ambiente.
                                    </p>
                                    {/* --- ILUSTRAÇÃO TÉCNICA CRT: ESTILO RGB --- */}
                                    <div className="w-full h-80 bg-slate-900 rounded-xl border-2 border-slate-700 flex items-center justify-center relative overflow-hidden group p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]">

                                        {/* Legenda de contexto no topo */}
                                        <div className="absolute top-3 left-4 flex gap-2">
                                            <span className="text-[10px] font-bold text-red-500 bg-red-900/20 px-2 py-1 rounded border border-red-500/30">R</span>
                                            <span className="text-[10px] font-bold text-green-500 bg-green-900/20 px-2 py-1 rounded border border-green-500/30">G</span>
                                            <span className="text-[10px] font-bold text-blue-500 bg-blue-900/20 px-2 py-1 rounded border border-blue-500/30">B</span>
                                        </div>

                                        {/* Imagem do Diagrama (Com filtro para inverter cores e ficar dark mode) */}
                                        {/* O filtro 'invert' transforma o preto em branco e o branco em preto, integrando ao fundo escuro */}
                                        <img
                                            src="Crt-expecial.jpg"  // <--- NOME DO ARQUIVO QUE VOCÊ ENVIOU
                                            alt="Diagrama do Tubo de Raios Catódicos"
                                            className="w-full h-full object-contain filter invert opacity-80 mix-blend-lighten"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = '<div class="text-slate-500 text-xs text-center font-mono">[Imagem Diagrama CRT]</div>'
                                            }}
                                        />

                                        {/* Efeito de Feixe de Elétrons (Simulação de Animação por cima da imagem) */}
                                        {/* Uma linha verde neon que atravessa o tubo para mostrar o caminho do elétron */}
                                        <div className="absolute top-1/2 left-[30%] w-[40%] h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60 animate-pulse pointer-events-none"></div>

                                        {/* Legenda inferior */}
                                        <div className="absolute bottom-2 text-slate-500 text-[10px] font-mono">
                                            Anatomia Interna: Canhão de Elétrons e Deflexão Magnética
                                        </div>
                                    </div> <br />
                                    <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                        O pescoço contém a maior parte de chumbo na composição do CRT e em sua composição vamos encontrar
                                        óxidos de silício, de chumbo, de potássio e de sódio.
                                        O funil representa um terço de todo peso CRT está localizado na parte interna da carcaça, em sua
                                        composição também vamos encontrar principalmente óxidos de silício, de chumbo, de potássio e de sódio. <br /> <br />
                                        Fritas é a junção entre o painel e o funil  as
                                        "fritas são o material de vidro (geralmente na forma de pó ou pasta) utilizado para unir o painel frontal (tela) e o funil traseiro,
                                        o seu vidro contém chumbo de baixa temperatura de fusão." <br /> <br />
                                        A tela que fica na parte frontal se constitui de 60% de massa em todo tubo e grande composição de óxidos de silício,
                                        de sódio, de potássio, de bário e de estrôncio. <br /> <br />
                                        Essa tecnologia utilizada a mais de 70 anos em monitores e televisores ao ser substituída pelas novas
                                        tecnologias como o Plasma, LCD (liquid crystal display) e o LED (light-emitting diode) tem gerado
                                        grandiosa quantidade de resíduos. <br /> <br />

                                        Dados de 2013 mostram essa grande quantidade de material descartado em países como EUA com cerca de 3,2 milhões,
                                        a China descartou cerca de 5 milhões e Taiwan com cerca de 1 milhão anualmente entre monitores e televisores respectivamente. <br />
                                        Não fora encontrado dados de referência ao Brasil, esse tipo de levantamento é feito por relatórios governamentais,
                                        organizações ambientais, ou entidades responsáveis pela gestão de resíduos eletrônicos no país. <br /> <br />

                                        É necessário ações adequadas para o descarte e a coleta desse material,
                                        evitando principalmente o contato com o solo, lagos rios e lençóis freáticos. No Brasil a Lei n° 12.305, em agosto de 2010 obriga fabricantes, importadores, distribuidores e comerciantes de eletroeletrônicos implementar a estrutura de logística reversa para o consumidor de forma totalmente independente do serviço público de limpeza, tornando-a obrigatória para as seis cadeias citadas na legislação.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SUB-SEÇÃO: TELAS PLANAS (LCD/LED vs OLED) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-cyan-500 h-px w-16"></div>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Layers className="text-cyan-500" /> A Revolução das Telas Planas
                                </h3>
                            </div>

                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">Finalizando essa nossa primeira etapa de estudo sobre o CRT, vale a pena dar destaque a mais um projeto da época chamado OXO. O ano era 1952 Alexandre Douglas era um candidato a doutorado na universidade de Cambridge - Londres, e projetou um dos primeiros jogos de computador, OXO dava a opção de o usuário escolher entre começar ou deixar que a máquina fizesse o primeiro movimento.

                                O EDSAC era o computador onde o jogo foi desenvolvido exibia na tela o tabuleiro do jogo em 35 x 15 pontos. Ele realmente era lindo. </p>

                            {/* A IMAGEM DO OXO */}
                            <div className="w-full h-full flex items-center justify-center mt-6">
                                <img
                                    src="oxo.png"
                                    alt="Jogo OXO"

                                    // --- AQUI ESTÃO AS MUDANÇAS ---
                                    // Adicionei: rounded-xl (bordas arredondadas), border-4 (borda grossa), 
                                    // border-lime-400 (cor neon) e a shadow-[...] (o brilho verde)
                                    className="w-full max-w-[300px] h-auto object-contain rounded-xl border-4 border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.6)] hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<div class="text-red-400 text-xs text-center font-mono border border-red-500/30 p-4 rounded">Imagem não encontrada.<br>Verifique se o nome do arquivo está certo na pasta public.</div>'
                                    }}
                                />
                            </div> <br />
                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                A empresa IBM junto com um programa de marketing massivo no ano de 1981 anuncia o seu próprio computador
                                pessoal formalmente conhecido como IBM Modelo 5150, que se baseava no microprocessador intel 8088 de 4,77 MHz e
                                usava o sistema operacional MS-DOS (Microsoft Disk Operating System)
                                da Microsoft marcando uma revolução empresarial dando início a criação de um vasto ecossistema de software.
                            </p>
                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                O software Basic para o recém-lançado IBM PC, é o início de uma longa parceria entre a IBM e a Microsoft,
                                que Bill Gates e Paul Allen haviam fundado apenas seis anos antes.
                                Introdução de monitores coloridos CRT, melhorando a experiência visual dos usuários. Embora tenha sido
                                lançado nos anos 1980, o IBM 5153 Color Display representa a transição para monitores
                                coloridos CRT e é uma continuação do desenvolvimento de monitores CRT iniciado nas décadas anteriores.
                            </p>

                            {/* --- AQUI ESTÁ A CORREÇÃO: Usando o TunnelImage diretamente --- */}
                            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center mt-6 gap-6">
                                <TunnelImage
                                    src="IBM 5150.png" alt="IBM 5150" className="w-full h-auto max-h-[350px] object-contain" />
                                <TunnelImage
                                    src="BASIC-linguage.png" alt="Linguagem BASIC" className="w-full h-auto max-h-[290px] object-contain" />
                                <TunnelImage
                                    src="IBM 5153.png" alt="Monitor IBM 5153" className="w-full h-auto max-h-[350px] object-contain" />
                            </div>
                            <br />


                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                Década de 1980 - 1990: Transição para Telas Planas e Monitores Coloridos
                                A população dos monitores CRT coloridos continua, enquanto se dá início ao surgimento dos primeiros
                                com telas planas, então se inicia a transição para telas com tecnologia LCD oferecendo menor consumo
                                de energia e telas mais finas como as características mais relevantes.
                                A IBM lança o primeiro monitor de tela plana TFT-LCD, popularizando ainda mais a tecnologia LCD.
                                1997: Apple lança o monitor Apple Studio Display, com uma resolução impressionante para a época e
                                design inovador.
                                Modelo apresentado em março de 1998 o Apple Studio Display tinha sua tela em LCD com
                                a resolução 1024 x 768 pixels e com o custo de U$2Mil tinha saída para porta DA-15, ou conhecida também
                                como porta DB-15, nos sistemas antigos da Apple, a DA-15 era usada para fornecer sinais de vídeo RGB para
                                monitores AppleColor, antes dos conectores USB se tornarem padrão, as portas DA15 também eram usadas como
                                interfaces para joysticks e gamepads em PCs.
                            </p>

                            {/* MUDANÇAS FEITAS:
                            1. 'w-1/2 mx-auto': Reduziu a largura para 50% e centralizou.
                            2. 'shadow-[0_0_30px_rgba(255,0,255,0.5)]': Adicionou o brilho magenta.
                        */}
                            <div className="w-1/2 mx-auto aspect-video bg-slate-800 rounded-xl border-4 border-solid border-slate-700 flex flex-col items-center justify-center relative overflow-hidden group my-8 shadow-[0_0_30px_rgba(255,0,255,0.5)]">

                                <Monitor className="text-slate-600 mb-4 opacity-50" size={40} />
                                <p className="text-slate-500 font-mono text-sm">[]</p>
                                <p className="text-xs text-slate-600 mt-2">Referência: PDF Página 4</p>

                                <img
                                    src="apple.png"
                                    alt="ENIAC"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            {/* =====================================================================================
                            SEÇÃO ESPECIAL: APPLE, PLASMA E A TRANSIÇÃO LCD
                            Estilo: Centralizado, Compacto e com Borda RGB Glow
                            ===================================================================================== 
                        */}
                            <div className="max-w-4xl mx-auto my-16 px-4 relative group">

                                {/* 1. Efeito de Fundo RGB (Glow) - Borda brilhante suave */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                                {/* 2. O Cartão Principal */}
                                <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12 text-center border border-slate-800 shadow-2xl">

                                    {/* Ícone Decorativo Apple/Monitor */}
                                    <div className="flex justify-center mb-6">
                                        <Monitor className="w-12 h-12 text-blue-400 opacity-80" />
                                    </div>

                                    {/* TÍTULO PRINCIPAL */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                        Evolução dos Monitores Apple Studio Display
                                    </h3>
                                    {/* Divisor Sutil */}
                                    <div className="w-16 h-1 bg-slate-800 mx-auto rounded-full my-6"></div>
                                    {/* CONTEÚDO DE TEXTO (Configurado para ser 'juntinho' e centralizado) */}
                                    <div className="space-y-6 text-slate-300 text-sm md:text-base leading-snug">
                                        <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                            Evolução dos Monitores Apple Studio Display

                                            Entre 1999 e 2001, a Apple lançou monitores Studio Display em versões CRT, inicialmente com modelos
                                            de 17 e 21 polegadas. <br />
                                            Apesar do design inovador, incluindo o uso do conector ADC, que integrava vídeo,
                                            USB e energia em um único cabo, os monitores CRT foram descontinuados em 2001, quando a Apple
                                            migrou para a tecnologia LCD. <br /> <br />

                                            A partir de 2000, os monitores LCD de 15 e 17 polegadas se tornaram a nova linha,
                                            oferecendo maior resolução e conectividade. Eles permaneceram no mercado até 2004,
                                            quando a Apple substituiu essa linha pelos Cinema Displays. <br />

                                            {/* DESTAQUE: PLASMA (Caixa Roxa para diferenciar) */}
                                            <div className="bg-purple-900/20 border-2 border-purple-500/20 p-6 rounded-xl mx-auto max-w-3xl mt-8">
                                                <h4 className="text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg font-bold text-purple-300 mb-2">Evolução: O Plasma</h4>

                                                No início dos anos 2000, o mercado de monitores foi transformado por grandes
                                                fabricantes que dominaram tanto o segmento de CRTs quanto a transição para os monitores LCD. <br />
                                                A seguir, detalho os principais líderes de mercado e as tecnologias que impulsionaram seus produtos,
                                                além de algumas curiosidades que podem ser úteis.
                                                {/* Divisor Sutil */}
                                                <div className="w-16 h-1 bg-slate-700 mx-auto rounded-full my-6"></div>
                                                Evolução: O Plasma foi uma das primeiras tecnologias de tela plana com alta definição disponíveis
                                                comercialmente e atingiu seu auge entre as décadas de 2000 e 2010 oferecendo telas grandes e excelente
                                                qualidade de imagem e contraste, utilizando pequenas células de gases nobres ionizados como o neon e o
                                                xenônio entre duas placas de vidro, que ao passar uma corrente elétrica por essas células os gases se
                                                ionizam fazendo reprodução de cores e luz gerado através do raio ultravioleta.
                                                Essa luz, por sua vez, faz com que os pixels da tela emitam cores visíveis. <br /> <br />

                                                Inicialmente o maior problema era lidar com alto consumo de energia e vida útil não muito estendida,
                                                mas com o passar dos anos essa tecnologia foi desenvolvendo melhorias significativas, se tornando mais
                                                finas consumindo menos energia e oferecendo melhor qualidade de imagem.
                                            </div>
                                        </p> <br /><br />

                                        <h3 className="text-xl font-bold text-white mt-8 mb-4">
                                            A Revolução das Telas: <span className="text-cyan-400">Do Tubo (CRT) ao Cristal Líquido</span>
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                            A revolução das telas: Do Tubo (CRT) ao cristal líquido

                                            Depois de passarmos a conhecer a era dos monitores (CRT) e alcançarmos a reprodução das cores em uma
                                            tela plana. A história das telas para computadores passou por transformações marcantes nas últimas
                                            décadas e então a tecnologia deu um salto com a chegada das telas de cristal líquido (LCD). Mais finas,
                                            eficientes com menor consumo de energia elétrica, além de ocupar menos espaço. <br /> <br />

                                            Isso foi essencial para os computadores ficarem mais leves, modernos e planos. As telas de cristais líquido
                                            (LCD) é um dispositivo passivo manipulados eletricamente controlando a quantidade de luz que passa por eles,
                                            essa luz vem de uma fonte traseira de iluminação que inicialmente era feitas por lâmpadas fluorescentes
                                            (CCFL), mas não pode fornecer uma imagem mais nítidas como oferece LED. <br /> <br />

                                            O LCD oferece boa precisão nas cores e imagens, mas podemos notar a diferença se comparados ao LED com precisão. Contudo por ser uma
                                            tecnologia passiva, o LCD não emite luz por si só. Isso implica algumas limitações, como angulo de visão
                                            mais restrito, a grade angular sofre uma perda e diminui 30° fora do centro da imagem e, em seguida a taxa
                                            de contraste inferior e necessidade de uma luz de fundo, o que também afeta na exibição de tons pretos mais
                                            profundos. Apesar disso, continua sendo uma opção acessível e eficiente em termos energéticos. <br /> <br />

                                            Tem como vantagem consumir menos energia, inclui milhões de cores, mais leve que o LED.
                                            E como desvantagem: precisa de fontes de luz extras, também restringiu o angulo da visão e sua velocidade é muito lenta.<br /> <br />

                                            Com o passar dos anos, os avanços em LCD deram origem a uma nova geração: as telas de LED. Aqui é importante esclarecer: a tela LED é, tecnicamente,
                                            um tipo de LCD que usa LEDs como fonte de luz de fundo, que substitui o tubo fluorescente pela tecnologia de luz de fundo trazendo uma imagem mais
                                            nítida que a reproduzida pelo LCD, tendo também o angulo de visão mais amplo que o LCD. <br /> <br />
                                            O LED tem melhores níveis da cor preta e contraste em comparação com o LCD.
                                            As telas de LED são mais eficientes, finas e proporcionam melhor qualidade de imagem, especialmente no que diz respeito ao contraste,
                                            maiores probabilidades de tons escuros e gama de cores. Algumas versões mais modernas, como Edge-Led Full-Array LED, melhoram a distribuição de luz,
                                            tecnologias como o OLED e MicroLED deram um passo além de permitir que cada pixel emita sua própria luz — eliminando a necessidade de retroiluminação e permitindo pretos reais. <br /><br />

                                            Em termos de monitores, tanto o OLED quanto o MicroLED são tecnologias de ponta, mas com características distintas. O OLED, já estabelecido no mercado,
                                            oferece excelente contraste e pretos perfeitos, enquanto o MicroLED, ainda em desenvolvimento, promete superar o OLED em brilho e durabilidade, além de não sofrer o burn-in.

                                            O LED tem como vantagem o diodo emissor de luz que tem a vida muito longa, requer baixa manutenção além do LED não produzir calor o LED é altamente eficiente,
                                            minimizando as desvantagens de ter um ângulo de visão mais restrito e o custo mais elevado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg  leading-relaxed text-justify mb-6">
                                Essa evolução das últimas décadas transformou radicalmente a forma como interagimos com conteúdo visuais.
                                Com esses avanços tecnológicos, vieram melhorias significativas na qualidade de imagem e maior precisão nas cores,
                                resoluções mais altas partindo para o HD (720p), Full HD (1080p), chegando ao 4k e até 8k.
                                A redução da espessura e aumento da taxa de contraste são outros pontos de melhoria.
                                As frequências de atualização também sofrem mudanças positivas, favorecendo conteúdos com FPS elevados.
                            </p>  <br />
                            {/* Grid Comparativo Técnico */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Card LCD/LED (Transmissivo) */}
                                <div className="bg-slate-900 p-6 rounded-2xl border border-blue-900/50 flex flex-col relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                                    <div className="absolute top-0 right-0 bg-blue-900/30 px-3 py-1 rounded-bl-lg text-blue-300 text-xs font-bold uppercase tracking-wider">Passivo</div>
                                    <Layers className="text-blue-500 w-10 h-10 mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">LCD & LED</h4>
                                    <p className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">O Padrão Atual</p>
                                    <div className="space-y-4 text-sm text-slate-400 text-justify flex-1">
                                        <p>A tecnologia funciona bloqueando luz. Uma fonte de luz traseira (Backlight) fica sempre ligada, e cristais líquidos na frente abrem ou fecham para deixar a luz passar e formar cores.</p>
                                        <div className="bg-slate-950 p-3 rounded border border-slate-800">
                                            <span className="text-blue-300 font-bold text-xs block mb-1">A DIFERENÇA REAL:</span>
                                            <p className="text-xs">As telas de cristais líquido (LCD) é um dispositivo passivo manipulados
                                                eletricamente controlando a quantidade de luz que passa por eles,
                                                essa luz vem de uma fonte traseira de iluminação que inicialmente era feitas
                                                por lâmpadas fluorescentes (CCFL). <br /> <br />
                                                "TV LED" é uma TV LCD que usa lâmpadas
                                                LED no fundo em vez das antigas lâmpadas fluorescentes (CCFL). <br />
                                                O LED tem melhores níveis da cor preta e contraste em comparação com o LCD,
                                                tendo também o ângulo de visão mais amplo que o LCD </p>

                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
                                        <span>Contraste: Limitado (Luz vaza)</span>
                                        <span>Vida Útil: Alta</span>
                                    </div>
                                </div>

                                {/* Card OLED (Emissivo) */}
                                <div className="bg-slate-900 p-6 rounded-2xl border border-purple-900/50 flex flex-col relative overflow-hidden group hover:border-purple-500/50 transition-colors shadow-lg shadow-purple-900/10">
                                    <div className="absolute top-0 right-0 bg-purple-900/30 px-3 py-1 rounded-bl-lg text-purple-300 text-xs font-bold uppercase tracking-wider">Ativo (Orgânico)</div>
                                    <Zap className="text-purple-500 w-10 h-10 mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">OLED</h4>
                                    <p className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4">High-End Atual</p>
                                    <div className="space-y-4 text-sm text-slate-400 text-justify flex-1">
                                        <p>Organic Light-Emitting Diode. Não existe backlight. <strong>Cada pixel é sua própria lâmpada</strong> feita de material orgânico que acende com eletricidade.
                                            Cada pixel é composto por compostos orgânicos que emitem luz própria quando estimulados por corrente elétrica.
                                            Isso elimina a necessidade de retroiluminação tornando o preto absoluto já que o pixel se desliga completamente,
                                            gerando um contraste infinito. Além de ter as cores mais vibrantes e realistas.
                                            As taxas de atualizações superiores de até 360Hz, ideal para gamers. Atingindo impressionantes 1,07 Bilhão de cores (10-bit).</p>
                                        <ul className="space-y-2 pl-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-3 h-3 bg-black border border-slate-600 mt-1 shrink-0"></div>
                                                <span><strong>Preto Absoluto:</strong> Para fazer preto, o pixel simplesmente desliga. Contraste infinito.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                {/* AQUI ESTÁ A MUDANÇA: bg-gradient-to-r (RGB) */}
                                                <div className="w-3 h-3 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 border border-slate-600 mt-1 shrink-0 rounded-sm"></div>

                                                <span><strong>Precisão RGB:</strong> 100% de fidelidade de cor e brilho individual por pixel.</span>                                            </li>
                                            <li className="flex items-start gap-2">
                                                <Zap className="w-3 h-3 text-yellow-500 mt-1 shrink-0" />
                                                <span>Tempo de resposta quase instantâneo (ideal para jogos).</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
                                        <span className="text-purple-300 font-bold">Risco: Burn-in (Degradação)</span>
                                    </div>
                                </div>

                                {/* Card MicroLED (Futuro) */}
                                <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-900/50 flex flex-col relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                                    <div className="absolute top-0 right-0 bg-cyan-900/30 px-3 py-1 rounded-bl-lg text-cyan-300 text-xs font-bold uppercase tracking-wider">Ativo (Inorgânico)</div>
                                    <Cpu className="text-cyan-500 w-10 h-10 mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">MicroLED</h4>
                                    <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-4">O Futuro (Pág 27)</p>
                                    <div className="space-y-4 text-sm text-slate-400 text-justify flex-1">
                                        <p>O "Santo Graal" dos displays. Funciona como o OLED (pixels que emitem luz própria). <br />
                                            O MicroLED (ou µLED) é uma tecnologia de display baseada em LEDs microscópicos inorgânico, onde cada pixel é composto por três emissores de luz (vermelho, verde e azul). Ao contrário das telas LCD (que dependem de retroiluminação) ou OLED (orgânicos), cada pixel MicroLED emite luz de forma autônoma e direta — um conceito chamado autoluminescência. </p>
                                        <div className="bg-cyan-950 p-4 rounded border border-cyan-800/50">
                                            <span className="text-cyan-300 font-bold text-sm block mb-2">VANTAGEM SUPREMA:</span>
                                            <p className="text-xs leading-relaxed">Combina o <strong>Contraste Infinito</strong> do OLED com o <strong>Brilho Intenso</strong> e a <strong>Durabilidade</strong> do LED. Não sofre de Burn-in.</p>
                                        </div>
                                        <p className="text-xs opacity-70">Atualmente, extremamente caro e difícil de fabricar em tamanhos pequenos.</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
                                        <span>Brilho: Extremo (+4000 nits)</span>
                                        <span>Durabilidade: Máxima</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* =====================================================================================
                SEÇÃO 5: VITRINE GAMER - ESTUDOS DE CASO (Páginas 24-30 do PDF)
                ===================================================================================== 
            */}
            <section className="py-24 px-4 bg-black relative">
                {/* Efeitos de luz de fundo para dar clima gamer */}
                <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex items-center justify-between mb-16 pb-6 border-b border-slate-800">
                        <div>
                            <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                                <Crosshair className="w-8 h-8 text-green-500" /> Alta Performance
                            </h2>
                            <p className="text-slate-400 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg mt-2">Estudos de caso de monitores high-end citados no artigo.</p>
                        </div>
                        <div className="hidden md:block bg-slate-900 px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest">
                            Tecnologia Atual (Estado da Arte)
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* PRODUTO 1: LG UltraGear (Pág 23-24) */}
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden group hover:border-red-500/80 hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-300 flex flex-col">                            {/* PLACEHOLDER IMAGEM PRODUTO 1 */}
                            {/* MUDANÇAS FEITAS:
                                1. 'flex-col': Coloca os itens em coluna vertical.
                                2. 'h-auto': Permite que a caixa cresça para caber as duas imagens.
                                3. 'gap-6': Dá um espaço elegante entre as duas imagens (sem precisar de <br>).
                            */}
                            <div className="h-auto min-h-64 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col items-center justify-center relative p-8 border-b border-slate-800 group-hover:border-red-500/20 transition-colors gap-6">

                                {/* Efeito de fundo vermelho ao passar o mouse */}
                                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Ícone de fundo decorativo (basta um centralizado) */}
                                <Monitor className="text-slate-700 opacity-50 absolute" size={120} />

                                {/* --- IMAGEM 1 --- */}
                                <div className="relative z-10 bg-slate-900/80 p-2 rounded border border-slate-700 shadow-lg hover:scale-105 transition-transform">
                                    <img
                                        src="lg-UltraGear-OLED-Curvo-de-45.png"
                                        alt="LG UltraGear Visão 1"
                                        className="w-full max-w-[200px] h-auto object-contain rounded"
                                    />
                                </div>

                                {/* --- IMAGEM 2 --- */}
                                <div className="relative z-10 bg-slate-900/80 p-2 rounded border border-slate-700 shadow-lg hover:scale-105 transition-transform">
                                    <img
                                        src="lg-UltraGear-OLED-Curvo-de.png"
                                        alt="LG UltraGear Visão 2"
                                        className="w-full max-w-[200px] h-auto object-contain rounded"
                                    />
                                </div>

                            </div>


                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white w-2/3">LG UltraGear OLED 45"</h3>
                                    <span className="text-red-500 font-bold">OLED</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="badge bg-slate-800 text-slate-300 border-slate-700">Curvo 800R</span>
                                    <span className="badge bg-red-900/20 text-red-300 border-red-500/30">240Hz</span>
                                    <span className="badge bg-green-900/20 text-green-300 border-green-500/30">0.03ms (GtG)</span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify flex-1">
                                    A curvatura agressiva de 800R preenche a visão periférica para imersão total.
                                    É mais acentuada do que os tradicionais 1000R, se aproximando do campo de visão natural humano,
                                    que traz como benefício direto menos esforço ocular e mais imersão
                                    O painel OLED garante pretos perfeitos e um tempo de resposta quase instantâneo de 0.03ms,
                                    eliminando qualquer rastro de imagem (ghosting) em jogos rápidos.
                                    É uma verdadeira máquina para gamers e profissionais exigentes.
                                    <strong>
                                        Tela Anti-reflexo e com baixa reflexão (AGLR). </strong>
                                    O anti-reflexo minimiza distrações causadas por luzes do ambiente,
                                    proporciona maior visibilidade em qualquer condição de iluminação, ideal para
                                    ambientes com janelas ou luz artificial intensa.

                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-800">
                                    <p className="text-xs text-slate-500 font-mono">Modelo: 45GR95QE-B</p>
                                </div>
                            </div>
                        </div>

                        {/* PRODUTO 2: Samsung G6 (Pág 25) */}
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden group hover:border-blue-400/80 hover:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all duration-300 flex flex-col">                            {/* PLACEHOLDER IMAGEM PRODUTO 2 */}
                            <div className="h-64 bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center relative p-8 border-b border-slate-800 group-hover:border-blue-500/20 transition-colors">
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Monitor className="text-slate-700 opacity-50 absolute" size={80} />
                                <p className="text-slate-500 font-mono text-xs text-center relative z-10 bg-slate-900/80 p-2 rounded">

                                    <img src="Odyssey-OLED-G6.png" alt="" />
                                </p>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white w-2/3">Samsung Odyssey G6</h3>
                                    <span className="text-blue-400 font-bold">OLED</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="badge bg-slate-800 text-slate-300 border-slate-700">27" QHD Plano</span>
                                    <span className="badge bg-blue-900/20 text-blue-300 border-blue-500/30">360Hz</span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify flex-1">
                                    Focado em eSports competitivos onde a velocidade é tudo. Possui taxa de atualização extrema de 360Hz.
                                    Introduz a tecnologia "OLED Pulsante" que insere quadros pretos rapidamente para melhorar a clareza de movimento (motion clarity). <br />
                                    Profissionais criativos e entusiasta da tecnologia que buscam o máximo de fluidez, nitidez e tempo de resposta.
                                    A tela de 27”, 77% mais pixels que o Full HD, o extremo de uma tela 4k.
                                    Formato 16:9 amplamente compatível com jogos, vídeos e aplicações profissionais sem distorção ou cortes.
                                    OLED que proporciona pretos absolutos e cores vibrante, o contraste infinito, para jogos escuros ou cenas cinematográficas.
                                    Imagem sem vazamento de luz (sem backlight).
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-800">
                                    <p className="text-xs text-slate-500 font-mono">Destaque: Sistema de resfriamento passivo avançado.</p>
                                </div>
                            </div>
                        </div>

                        {/* PRODUTO 3: Samsung Ark (Pág 28-29) */}
                        <div className="bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden group hover:border-lime-400/80 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all duration-300 flex flex-col lg:col-span-1 md:col-span-2 lg:translate-y-0 md:translate-y-0">
                            {/* PLACEHOLDER IMAGEM PRODUTO 3 */}
                            <div className="h-64 bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center relative p-8 border-b border-slate-800 group-hover:border-cyan-500/20 transition-colors">
                                <div className="absolute inset-0 bg-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Monitor className="text-slate-700 opacity-50 absolute" size={80} />
                                <p className="text-slate-500 font-mono text-xs text-center relative z-10 bg-slate-900/80 p-2 rounded">
                                    <img src="samsung-Odyssey-4K.png" alt="" /></p>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white w-2/3">Samsung Odyssey Ark (2ª Gen)</h3>
                                    <span className="text-cyan-400 font-bold">Mini-LED</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="badge bg-slate-800 text-slate-300 border-slate-700">55" 4K Curvo</span>
                                    <span className="badge bg-cyan-900/20 text-cyan-300 border-cyan-500/30">Modo Cockpit</span>
                                    <span className="badge bg-yellow-900/20 text-yellow-300 border-yellow-500/30">1056 Zonas</span>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify flex-1">
                                    Uma "estação de batalha" pessoal. Não é OLED, usa <strong>Mini-LED</strong> com 1.056 zonas de escurecimento local para HDR intenso.
                                    O destaque é o "Modo Cockpit" e Curvatura 1000R, que permite girar a tela gigante de 55" para a posição vertical.
                                    Odyssey ARK 55” 2°Geração é um verdadeiro monstro tecnológico — esse sim podemos chamar de “4K top das galáxias”.
                                    Representa o topo da linha entre os monitores VA/Mini LED, empo de resposta 1ms (GTG).
                                    Multitarefa e gerenciamento de tela que permite dividir áreas simultâneas.
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-800">
                                    <p className="text-xs text-slate-500 font-mono">Funcionalidade: Multi-View (4 telas simultâneas).</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="max-w-4xl mx-auto my-16 px-4 relative group">

                        {/* 1. Efeito de Fundo (Glow) - Verde mais fechado/Militar */}
                        {/* Mudei para tons de verde floresta e esmeralda, menos "radioativo" */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-800 via-emerald-700 to-lime-900 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                        {/* 2. O Cartão Principal */}
                        {/* MUDANÇAS AQUI:
        - border-lime-400: Borda Neon Limão.
        - shadow-[...]: Sombra verde oliva (Militar) escura e difusa.
    */}
                        <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12 text-center border-2 border-lime-400 shadow-[0_0_50px_rgba(85,107,47,0.6)]">

                            {/* Ícone Decorativo - Verde Esmeralda */}
                            <div className="flex justify-center mb-6">
                                <Monitor className="w-12 h-12 text-green-500 opacity-80" />
                            </div>

                            {/* TÍTULO PRINCIPAL - Gradiente Verde para Lima (Suave) */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-300">
                                A revolução para o MicroLED
                                
                            </h3>

                            {/* Divisor Sutil - Verde Escuro */}
                            <div className="w-16 h-1 bg-green-900/50 mx-auto rounded-full my-6"></div>

                            {/* ... Resto do conteúdo ... */}
                            <div className="space-y-6 text-slate-300 text-sm md:text-base leading-snug">
                                {/* Seus textos continuam aqui... */}
                            </div>

                            {/* ... (O restante do código interno permanece igual) ... */}

                            {/* Só um ajuste na imagem interna para combinar com a borda externa se quiser: */}
                            {/* Troque o shadow magenta da imagem interna por um shadow verde também */}
                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-6">
                                Embora ainda não existam monitores MicroLED voltado ao consumidor final até o término desse artigo,
                                essa tecnologia já é reconhecida como a evolução definitiva das telas.
                                A imagem utilizada nesta seção serve como uma representação visual conceitual da qualidade esperada de um
                                display MicroLED, ilustrando o nível de nitidez, contrastes, profundidade e fidelidade de cores que essa
                                tecnologia pode oferecer.
                            </p>

                            <div className="w-full md:w-1/2 mx-auto aspect-video bg-slate-800 rounded-xl border-2 border-solid border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group my-8 shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                                {/* Usei um shadow lime suave aqui na imagem interna para combinar */}
                                <Monitor className="text-slate-600 mb-4 opacity-50" size={40} />
                                <p className="text-slate-500 font-mono text-sm">[]</p>
                                <p className="text-xs text-slate-600 mt-2">Referência: PDF Página 4</p>
                                <img
                                    src="micro-led.jpg"
                                    alt="Tecnologia microled"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            <p className="text-slate-300 text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-base md:text-lg leading-relaxed text-justify mb-8">
                                O MicroLED (ou µLED) é uma tecnologia de display baseada em LEDs microscópicos inorgânico,
                                onde cada pixel é composto por três emissores de luz (vermelho, verde e azul).
                                Ao contrário das telas LCD (que dependem de retroiluminação) ou OLED (orgânicos),
                                cada pixel MicroLED emite luz de forma autônoma e direta — um conceito chamado autoluminescência.
                                A tecnologia MicroLED reúne um conjunto impressionante de avanços que posicionam como a mais promissora
                                entre as tecnologias de exibição de imagem atuais. <br /> <br />
                                Uma das principais inovações é sua autominescência inorgânica,
                                o que significa que cada pixel emite luz própria sem a necessidade de uma camada de retroiluminação.
                                Isso não apenas elimina o risco de burn-in, comum em tecnologias como o OLED,
                                como também aumenta significativamente a vida útil da tela. <br /> <br />

                                Outra característica marcante do MicroLED é a capacidade de alcançar o preto absoluto,
                                pois cada pixel pode ser desligado individualmente, resultando em contraste infinito.
                                Isso permite transições de imagem mais naturais e uma percepção real de profundidade,
                                ideal para conteúdos cinematográficos e experiências imersivas. <br /> <br />

                                Além disso, os displays MicroLED oferecem um brilho até 30 vezes superior ao do OLED,
                                sendo extremamente eficazes mesmo em ambientes muito iluminados. Esse brilho elevado,
                                combinado com cores puras e vibrantes — graças à emissão direta de luz por LDS RGB individuais,
                                garante uma qualidade de imagem excepcional. <br /> <br />
                                No que diz respeito ao desempenho, MicroLED atinge tempos de respostas inferior a 0,01 milissegundos,
                                o que o torna ideal para jogos competitivos, transmissões esportivas e aplicações de realidade virtual.
                                A frequência de atualização também pode ultrapassar os 1000Hz, suportando taxas superiores a 1000 quadros por segundo (FPS),
                                o que representa uma vantagem significativa em cenáros de alto desempenho gráficos. <br /><br />

                                A qualidade da imagem se mantém uniforme mesmo em ângulos extremos, graças ao amplo ângulo divisão da tecnologia, proporcionando uma experiencia consistente de qualquer ponto de observação.
                            </p>

                        </div>
                    </div>


                </div>
            </section >

            {/* =====================================================================================
          FOOTER E REFERÊNCIAS (Páginas 30-33)
      ===================================================================================== */}
            <footer className="mt-0 border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden">
                {/* Efeito de luz azul original (mantido) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                {/* --- NOVO: CAVEIRA GIGANTE SUAVE NO FUNDO (Canto Esquerdo) --- */}
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

                    <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono space-y-2">
                            <p>COMPUTER HISTORY MUSEUM. Timeline of Computer History: 1946.</p>
                            <p>DA CRUZ, F. The ENIAC Story. Columbia University, 2013.</p>
                            <p>VON NEUMANN, J. First Draft of a Report on the EDVAC. 1945.</p>
                            <p>IBM ARCHIVES. The IBM 700 Series.</p>
                        </div>
                        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono space-y-2">
                            <p>BRASIL. Lei nº 12.305, de 2 de agosto de 2010 (Política Nacional de Resíduos Sólidos).</p>
                            <p>MARTINS, C. R. et al. Reciclagem de carcaças de monitores. Química Nova, 2005.</p>
                            <p>SAMSUNG DISPLAY / LG ELECTRONICS. Datasheets oficiais e press releases (2023-2025).</p>
                            <p>RTINGS.com. Monitor Reviews & Technical Measurements.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center border-t border-slate-900 pt-8">

                        {/* --- NOVA CAVEIRA NEON CENTRAL --- */}
                        {/* text-lime-400: Verde Neon */}
                        {/* drop-shadow-[...]: Sombra Vermelha intensa */}
                        <Skull
                            className="mb-6 w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(220,38,38,0.9)] hover:scale-110 transition-transform duration-300"
                            strokeWidth={1.5}
                        />

                        <p className="text-slate-300 font-bold mb-2">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
                        <p className="text-slate-500 text-sm mb-1">Engenharia de Computação</p>
                        <p className="text-cyan-600 text-xs font-mono mt-4">REVOLUXTI 2025 - Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>

        </div >
    );
};

// Pequeno componente utilitário para as "badges" dos monitores
const badge = "text-xs px-2.5 py-1 rounded-md border font-medium uppercase tracking-wider";

export default HistoryInfographic;