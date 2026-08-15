import React from 'react';
import {
    Terminal, ShieldAlert, Cpu, Network, FileDigit, Database,
    Image as ImageIcon, FileText, FileCode, FileJson, FileSpreadsheet,
    Lock, Eye, Maximize, Zap, Layers, Video, Activity, AlertTriangle,
    ArrowRight, Globe, Clock, Package, Speaker, Minimize2, Skull
} from 'lucide-react';

const EngenhariaRedes = () => {
    return (
        <div className="w-full min-h-screen text-slate-200 bg-slate-950 pb-24 selection:bg-emerald-500/30">

            {/* ==================== CAPA DO ARTIGO ==================== */}
            <div className="flex flex-col items-center justify-center pt-32 pb-20 text-center px-4 relative overflow-hidden border-b border-slate-800/50 shadow-2xl">

                {/* Efeito de brilho ambiente (Glow) baseado na cor do módulo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <h1 className="text-5xl md:text-[5rem] leading-none font-black tracking-tight text-white mb-2 z-10 uppercase font-sans">
                    Sala do Eniac 1946
                </h1>

                <h2 className="text-6xl md:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 mb-8 z-10 drop-shadow-sm">
                    Capítulo 05
                </h2>

                <div className="text-xl md:text-3xl font-light text-slate-200 mb-2 z-10 tracking-wide">
                    Engenharia de Redes
                </div>
                <div className="text-lg md:text-xl font-light text-slate-400 mb-14 z-10">
                    Da Matemática Binária - Aos Fundamentos de Criptografia
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

            {/* ==================== CONTEÚDO DO ARTIGO ==================== */}
            <article className="max-w-6xl mx-auto px-2 py-16 font-sans text-lg text-slate-600 leading-relaxed space-y-12">

                {/* Seção 1: História dos Sistemas Numéricos */}
                <section className="space-y-1">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Terminal className="text-emerald-500 w-6 h-6" />
                        1. História dos Sistemas Numéricos
                    </h2>

                    <div className="space-y-6">

                        <div className="bg-slate-900/40 p-6 md:p-8 rounded-lg border border-slate-800/50 space-y-5 shadow-lg">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Antes dos computadores, transistores e circuitos integrados existirem, a humanidade precisava de formas eficientes para registrar transações comerciais, mapear estrelas e construir monumentos. Diferentes civilizações desenvolveram caminhos distintos para solucionar o mesmo problema: a representação de quantidades.
                            </p>

                            <p className="text-lg text-emerald-100/90 leading-relaxed border-l-4 border-emerald-500 pl-4 italic">
                                A forma como representamos os números hoje é o resultado de milhares de anos de evolução cultural e matemática.
                            </p>
                        </div>
                    </div>
                    <p>
                        Neste capítulo, vamos entender como a humanidade deixou de contar nos dedos para traduzir o universo em impulsos elétricos de 0 e 1.
                    </p>
                    <p>
                        A capacidade de contar, medir e registrar quantidades é uma das maiores conquistas da humanidade e contar nasceu junto com a civilização: quantificar rebanhos, delimitar terras, prever estações e organizar o comércio. Contudo, a forma de registrar essas quantidades evoluiu drasticamente. No entanto, para a engenharia de computação e a segurança cibernética, compreender sistemas numéricos não é apenas uma questão de aritmética: é entender como a eletricidade, a lógica e a informação se fundem para criar o mundo digital.
                    </p>




                    <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 mt-6 space-y-4">
                        <h3 className="text-xl font-semibold text-emerald-400">O Sistema Aditivo (Ex: Egípcio e Romano)</h3>
                        <p className="text-sm text-slate-400">
                            Os primeiros sistemas acumulavam símbolos e valor independentemente da posição em que estão. No sistema romano, para representar o número 3, escreve-se III. Para 30, XXX, (embora haja regras de subtração, como IX=9, a estrutura básica é aditiva: (XXI = 10 + 10 + 1).  O grande problema desse modelo é a complexidade para realizar operações matemáticas simples e a ausência de um conceito crucial: o zero.
                        </p>

                        <h3 className="text-xl font-semibold text-emerald-400 mt-6">O Sistema Posicional (A Revolução Indo-Arábica)</h3>
                        <p className="text-sm text-slate-400">
                            A grande virada de chave da matemática foi a criação do sistema posicional, onde o valor de um algarismo depende diretamente da posição que ele ocupa no número. É aqui que nasce o conceito de Base (b).
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 ml-2">
                            <li>No número 235, o algarismo 2 vale duzentos, o algarismo 3 vale trinta, e o algarismo 5 vale apenas 5.</li>
                            <li>A introdução do zero como um guardador de lugar posicional permitiu a criação de algoritmos para as operações fundamentais que hoje rodam em velocidades absurdas dentro de uma CPU.</li>
                            <li>A transição dos sistemas rudimentares para os sistemas posicionais pavimentou o caminho para a computação moderna, pois permitiu tratar qualquer representação numérica como uma série de potências.</li>
                        </ul>
                        <div className="mt-8 bg-slate-900/40 border-l-4 border-emerald-500 p-8 rounded-r-lg shadow-lg">
                            <h4 className="text-lg font-bold text-white mb-6">Fórmula Geral de Representação Posicional</h4>

                            {/* INÍCIO DO BLOCO DA FÓRMULA */}
                            <div className="flex items-center justify-center w-full py-4">
                                <div className="flex items-center gap-3 text-4xl font-serif text-slate-100 bg-[#08060d] px-10 py-6 rounded-xl border border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]">

                                    {/* N = */}
                                    <span className="italic mr-2">N</span>
                                    <span>=</span>

                                    {/* Símbolo de Somatório com limites */}
                                    <div className="flex flex-col items-center justify-center mx-2">
                                        <span className="text-base mb-1">
                                            <span className="italic">n</span>-1
                                        </span>

                                        <span className="text-[4.5rem] leading-none font-light">&sum;</span>

                                        <span className="text-base mt-1">
                                            <span className="italic">i</span>=0
                                        </span>
                                    </div>

                                    {/* d_i * b^i */}
                                    <div className="flex items-center ml-2">
                                        <span>
                                            <span className="italic">d</span>
                                            <sub className="text-xl italic">i</sub>
                                        </span>

                                        <span className="mx-3 text-3xl font-bold">&middot;</span>

                                        <span>
                                            <span className="italic">b</span>
                                            <sup className="text-xl italic">i</sup>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            {/* FIM DO BLOCO DA FÓRMULA */}

                            <p className="text-sm text-slate-400 mt-6 text-center">
                                Onde <code className="text-emerald-300 bg-slate-800 px-1.5 py-0.5 rounded">d</code> é o dígito, <code className="text-emerald-300 bg-slate-800 px-1.5 py-0.5 rounded">b</code> é a base numérica e <code className="text-emerald-300 bg-slate-800 px-1.5 py-0.5 rounded">i</code> é a posição (começando do zero, da direita para a esquerda).
                            </p>
                        </div>
                    </div>


                </section>


                {/* Seção 2 */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Terminal className="text-emerald-500 w-6 h-6" />
                        1.2 - O Sistema Decimal (Base 10)
                    </h2>
                    <p>
                        O sistema decimal é o nosso padrão cotidiano, a nossa língua nativa matemática utiliza dez símbolos (algarismos). A escolha da base 10 não possui nenhuma razão matemática superior; é puramente biológica: nós temos 10 dedos nas mãos tornando-os a ferramenta de contagem mais acessível.
                    </p>
                    <ul className="list-none space-y-2 text-slate-400 bg-slate-900/30 p-4 rounded-lg border border-slate-800/50">
                        <li><strong className="text-slate-200">Símbolos:</strong> &#123;0, 1, 2, 3, 4, 5, 6, 7, 8, 9&#125;</li>
                        <li><strong className="text-slate-200">Decomposição (Ex: 1984):</strong></li>
                        <li className="font-mono text-sm mt-2 ml-4">1984<sub>10</sub> = (1 &times; 10<sup>3</sup>) + (9 &times; 10<sup>2</sup>) + (8 &times; 10<sup>1</sup>) + (4 &times; 10<sup>0</sup>)</li>
                        <li className="font-mono text-sm mt-2 ml-4">1984<sub>10</sub> = 1000 + 900 + 80 + 4 </li>

                    </ul>
                </section>

                {/* Seção 3 */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Terminal className="text-emerald-500 w-6 h-6" />
                        1.3 - O Sistema Binário (Base 2)
                    </h2>
                    <p>
                        Se o sistema decimal é a linguagem dos humanos, o binário é o oxigênio dos computadores. Na eletrônica e na engenharia de computadores, não temos "dedos" para contar. Temos os circuitos elétricos. O hardware, é extremamente complexo e instável, discernir dez níveis diferentes de tensão elétrica com precisão sob flutuações de temperatura e ruído eletromagnético. É muito mais simples, robusto e confiável detectar apenas dois estados. Um circuito elétrico digital possui apenas dois estados estáveis possíveis:                     </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
                            <h4 className="font-bold text-red-400 mb-1">Estado Baixo (Low)</h4>
                            <p className="text-sm text-slate-400">Ausência ou quase ausência de tensão (corrente). <br />
                                (Desligado / Falso) Representado pelo bit <strong>0</strong>.</p>
                        </div>
                        <div className="p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-lg">
                            <h4 className="font-bold text-emerald-400 mb-1">Estado Alto (High)</h4>
                            <p className="text-sm text-slate-400">Presença de tensão (passagem de corrente). <br />
                                (Ligado / Verdadeiro): Representado pelo bit <strong>1</strong>.</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Por isso, a base dos computadores é a base 2. O sistema binário utiliza apenas dois símbolos: <code className="text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded font-mono">&#123;0, 1&#125;</code>. Cada posição representa uma potência de 2.
                        </p>

                        <ul className="list-none space-y-4 bg-slate-900/40 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-inner">
                            <li className="flex items-start gap-3">
                                {/* Marcador Customizado com Efeito Glow */}
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                <p className="text-slate-300">
                                    <strong className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Símbolos (Dígitos):</strong>{' '}
                                    <code className="text-emerald-300 bg-slate-950 px-2 py-0.5 rounded text-sm font-mono shadow-sm">
                                        &#123;0, 1&#125;
                                    </code>{' '}
                                    (chamados de bits - <span className="italic">Binary Digits</span>).
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                                <p className="text-slate-300">
                                    <strong className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Funcionamento Posicional:</strong>{' '}
                                    Cada posição à esquerda representa uma potência de 2.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* BLOCO DE DECOMPOSIÇÃO BINÁRIA */}
                    <div className="mt-8 bg-[#08060d] border border-slate-800 p-8 md:p-12 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-slate-200">

                        <p className="text-lg md:text-xl text-slate-300 mb-10 text-center font-sans">
                            Se tomarmos o número binário 1011<sub>2</sub>, sua decomposição posicional é:
                        </p>

                        {/* Linhas da equação com fonte matemática (serif) */}
                        <div className="flex flex-col items-center gap-8 text-xl md:text-3xl font-serif tracking-widest">

                            {/* Linha 1: Potências */}
                            <div className="text-white">
                                1011<sub className="text-sm md:text-lg">2</sub> = (1 &times; 2<sup className="text-sm md:text-lg">3</sup>) + (0 &times; 2<sup className="text-sm md:text-lg">2</sup>) + (1 &times; 2<sup className="text-sm md:text-lg">1</sup>) + (1 &times; 2<sup className="text-sm md:text-lg">0</sup>)
                            </div>

                            {/* Linha 2: Multiplicações resolvidas */}
                            <div className="text-white">
                                1011<sub className="text-sm md:text-lg">2</sub> = (1 &times; 8) + (0 &times; 4) + (1 &times; 2) + (1 &times; 1)
                            </div>

                            {/* Linha 3: Soma final */}
                            <div className="text-emerald-400 font-bold">
                                1011<sub className="text-sm md:text-lg text-emerald-500">2</sub> = 8 + 0 + 2 + 1 = 11<sub className="text-sm md:text-lg text-emerald-500">10</sub>
                            </div>

                        </div>
                    </div>
                    {/* FIM DO BLOCO DE DECOMPOSIÇÃO */}
                </section>

                {/* Seção 4: Sistema Octal */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <FileDigit className="text-emerald-500 w-6 h-6" />
                        1.4 - O Sistema Octal (Base 8)
                    </h2>
                    <p>
                        O sistema octal utiliza a base 8: <code className="text-emerald-400 bg-slate-900 px-2 py-0.5 rounded">&#123;0, 1, 2, 3, 4, 5, 6, 7&#125;</code>. Historicamente, ele foi muito utilizado nos primórdios da computação (como o PDP-8, nos mainframes da IBM e sistemas DEC) por uma razão matemática simples: permitia abreviar grupos de 3 bits de forma simples, já que 2³ = 8 é uma potência exata.
                    </p>

                    <div className="bg-slate-900/40 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-400 mb-2">
                            <ShieldAlert className="w-5 h-5" />
                            Conexão com Segurança e Sistemas (Linux)
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">
                            Embora tenha caído em desuso na representação geral de hardware puro, ele ainda é amplamente visto em sistemas baseados em Unix/Linux para permissões de arquivos via terminal. A clássica permissão <code className="text-slate-200 bg-slate-800 px-1 rounded">chmod 755</code> é uma representação octal direta para três grupos de permissões mapeados de binários de 3 bits:
                        </p>
                        <ul className="list-none space-y-2 text-sm font-mono text-slate-300 bg-slate-950 p-4 rounded border border-slate-800">
                            <li><span className="text-emerald-400">7</span><sub>10</sub> = 111<sub>2</sub> (Leitura, Escrita e Execução - rwx)</li>
                            <li><span className="text-emerald-400">5</span><sub>10</sub> = 101<sub>2</sub> (Leitura e Execução - r-x)</li>
                        </ul>
                    </div>
                </section>

                {/* Seção 5: Sistema Hexadecimal */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Database className="text-emerald-500 w-6 h-6" />
                        1.5 - O Sistema Hexadecimal (Base 16)
                    </h2>
                    <p>
                        O sistema hexadecimal é o melhor amigo do engenheiro de redes e do analista de segurança. Escrever e ler longas sequências de binários é impraticável e altamente propenso a erros humanos. O hexadecimal resolve isso oferecendo uma representação extremamente compacta: 16 é 2⁴, o que significa que cada dígito resume perfeitamente um grupo de 4 bits (um nibble).
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-400">
                        <li><strong>Símbolos:</strong> Como o decimal só possui algarismos de 0 a 9, usamos letras maiúsculas para os valores de 10 a 15: <code className="text-emerald-400 bg-slate-900 px-1 rounded">&#123;0..9, A, B, C, D, E, F&#125;</code>.</li>
                        <li><strong>Onde:</strong> A=10 | B=11 | C=12 | D=13 | E=14 | F=15.</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800/50">
                            <h4 className="font-bold text-slate-200 mb-2">Endereços MAC</h4>
                            <p className="text-xs text-slate-400 font-mono">00:1A:2B:3C:4D:5E</p>
                            <p className="text-xs text-slate-500 mt-1">48 bits em 12 caracteres hexadecimais.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800/50">
                            <h4 className="font-bold text-slate-200 mb-2">Endereços IPv6</h4>
                            <p className="text-xs text-slate-400 font-mono break-all">2001:0db8:85a3:0000:0000:8a2e:0370:7334</p>
                            <p className="text-xs text-slate-500 mt-1">128 bits estruturados em blocos.</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800/50">
                            <h4 className="font-bold text-slate-200 mb-2">Forense e Malware</h4>
                            <p className="text-xs text-slate-400">Dumps de RAM, payloads e cabeçalhos no Wireshark.</p>
                        </div>
                    </div>
                </section>

                {/* Seção 6: Métodos de Conversão */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Network className="text-emerald-500 w-6 h-6" />
                        1.6 - Métodos de Conversão
                    </h2>
                    <p>
                        Dominar subredes e análise de protocolos com conversões de cabeça ou rascunhos rápidos é um divisor de águas para engenheiros.
                    </p>

                    <div className="space-y-8">
                        <div>

                        </div>
                        <h3 className="text-xl font-bold text-emerald-400 mb-3">A. Decimal para Binário </h3>
                        {/* BLOCO DE EXEMPLO: DIVISÕES SUCESSIVAS */}
                        <div className="mt-6 bg-[#08060d] border border-slate-800 p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)]">


                            <h4 className="text-lg font-bold text-emerald-400 mb-6 font-sans">
                                Exemplo: Converter 13 para binário.
                            </h4>

                            {/* Passo a passo da divisão */}
                            <div className="flex flex-col gap-4 text-slate-300 font-mono text-base md:text-lg pl-2 md:pl-6 border-l-2 border-slate-800">

                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 group">
                                    <div className="flex items-center gap-4">
                                        <span className="w-28 tracking-wider">13 &divide; 2 = 6</span>
                                        <span className="text-emerald-400 font-bold">(resto 1)</span>
                                    </div>
                                    <span className="text-slate-500 text-sm md:text-base italic transition-colors group-hover:text-slate-400">
                                        &mdash; Bit menos significativo (LSB)
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="w-28 tracking-wider">6 &divide; 2 = 3</span>
                                    <span className="text-slate-400 font-bold">(resto 0)</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="w-28 tracking-wider">3 &divide; 2 = 1</span>
                                    <span className="text-emerald-400 font-bold">(resto 1)</span>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 group">
                                    <div className="flex items-center gap-4">
                                        <span className="w-28 tracking-wider">1 &divide; 2 = 0</span>
                                        <span className="text-emerald-400 font-bold">(resto 1)</span>
                                    </div>
                                    <span className="text-slate-500 text-sm md:text-base italic transition-colors group-hover:text-slate-400">
                                        &mdash; Bit mais significativo (MSB)
                                    </span>
                                </div>

                            </div>

                            {/* Resultado Final */}
                            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-slate-400 font-sans text-sm md:text-base">
                                    <svg className="w-5 h-5 text-emerald-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    Lendo de baixo para cima:
                                </div>

                                <div className="text-3xl font-bold text-white tracking-[0.2em] font-mono bg-slate-900/50 px-6 py-2 rounded-lg border border-slate-700/50">
                                    1101<sub className="text-emerald-500 text-lg -ml-1">2</sub>
                                </div>
                            </div>

                        </div>
                        {/* FIM DO BLOCO DE EXEMPLO */}

                        <div className="bg-slate-900/30 p-6 rounded-lg border border-red-900/30">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-red-400 mb-2">
                                <ShieldAlert className="w-5 h-5" />
                                Por que isso importa na Segurança? (Raw Data)
                            </h3>
                            <p className="text-sm text-slate-400">
                                Na triagem de pacotes com o Tcpdump ou Wireshark, os dados chegam de forma bruta. Se o primeiro byte de um pacote IP começa com <code className="text-red-300 bg-red-900/30 px-1 rounded">0x45</code>, convertendo para binário temos 0100 e 0101.
                                Os primeiros 4 bits (0100 = 4) indicam IPv4. Os 4 bits seguintes (0101 = 5) indicam o tamanho do cabeçalho (IHL): 20 bytes.
                            </p>
                        </div>
                    </div>

                    {/* BLOCO DE EXEMPLO: TABELA DE PESOS */}
                    <div className="mt-8 bg-[#08060d] border border-slate-800 p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                        <h4 className="text-lg md:text-xl font-bold text-emerald-400 mb-4 font-sans">
                            Método 2: Tabela de Pesos <span className="text-sm font-normal text-slate-400 block md:inline md:ml-2">(O segredo para fazer rápido de cabeça)</span>
                        </h4>

                        <p className="text-slate-300 text-sm md:text-base mb-6">
                            Escreva as potências de 2 da direita para a esquerda:
                        </p>

                        {/* Display visual dos pesos */}
                        <div className="flex justify-start md:justify-center mb-6 overflow-x-auto no-scrollbar pb-2">
                            <div className="flex bg-slate-900 border border-slate-700 rounded-lg overflow-hidden font-mono text-sm md:text-base shadow-inner shrink-0">
                                {['128', '64', '32', '16', '8', '4', '2', '1'].map((peso, idx) => (
                                    <div key={idx} className="px-3 md:px-6 py-3 border-r border-slate-700 last:border-0 text-emerald-300 font-bold bg-gradient-to-b from-slate-800 to-slate-900">
                                        {peso}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                            Para converter 13, basta "subtrair" os maiores valores possíveis preenchendo com <code className="text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded font-bold">1</code> onde usou e <code className="text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded font-bold">0</code> onde não usou:
                        </p>

                        {/* Lista passo a passo da subtração mental */}
                        <ul className="space-y-3 font-mono text-xs md:text-sm lg:text-base text-slate-300 bg-slate-900/50 p-5 md:p-6 rounded-lg border border-slate-800/50 shadow-inner">

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-400 md:w-56">Cabe 128 em 13?</span>
                                <span className="text-slate-500">Não (0)</span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-400 md:w-56">Cabe 64 em 13?</span>
                                <span className="text-slate-500">Não (0)</span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-400 md:w-56">Cabe 32?</span>
                                <span className="text-slate-500">Não (0)</span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-400 md:w-56">Cabe 16 em 8?</span>
                                <span className="text-slate-500">Não (0)</span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-200 md:w-56">Cabe 8 em 13?</span>
                                <span className="text-slate-300">
                                    <span className="text-emerald-400 font-bold">Sim.</span> Sobram 5. <span className="text-emerald-400 font-bold">(Marcamos 1 no peso 8)</span>
                                </span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-200 md:w-56">Cabe 4 em 5?</span>
                                <span className="text-slate-300">
                                    <span className="text-emerald-400 font-bold">Sim.</span> Sobra 1. <span className="text-emerald-400 font-bold">(Marcamos 1 no peso 4)</span>
                                </span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2 border-b border-slate-800/50 pb-2">
                                <span className="text-slate-400 md:w-56">Cabe 2 em 1?</span>
                                <span className="text-slate-500">
                                    Não. Sobra 1. <span className="font-bold">(Marcamos 0 no peso 2)</span>
                                </span>
                            </li>

                            <li className="flex flex-col md:flex-row md:items-center gap-2">
                                <span className="text-slate-200 md:w-56">Cabe 1 em 1?</span>
                                <span className="text-slate-300">
                                    <span className="text-emerald-400 font-bold">Sim.</span> Sobram 0. <span className="text-emerald-400 font-bold">(Marcamos 1 no peso 1)</span>
                                </span>
                            </li>

                        </ul>

                        {/* Resultado Final Estilizado */}
                        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 bg-slate-900 border border-slate-700 p-5 rounded-lg shadow-lg">
                            <span className="text-slate-400 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                                Resultado:
                            </span>
                            <div className="flex-1 flex flex-wrap items-center gap-3">
                                <span className="text-3xl font-bold text-white tracking-[0.2em] font-mono drop-shadow-sm">
                                    1101
                                </span>
                                <span className="text-slate-400 font-sans text-sm italic">
                                    (ou <code className="text-emerald-400 not-italic font-mono bg-slate-950 px-2 py-0.5 rounded border border-emerald-900/50 shadow-inner">00001101</code> em formato de 1 Byte).
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* FIM DO BLOCO DA TABELA DE PESOS */}


                    {/* BLOCO DE EXEMPLO: BINÁRIO PARA DECIMAL (COM DISPLAY VISUAL) */}
                    <div className="mt-8 bg-[#08060d] border border-slate-800 p-6 md:p-10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-3 font-sans">
                            B. Binário para Decimal
                        </h3>

                        <p className="text-slate-300 text-sm md:text-base mb-6">
                            Basta somar as potências de 2 onde o bit correspondente for igual a 1.
                        </p>

                        <div className="bg-slate-900/50 border border-slate-700 p-4 md:p-6 rounded-lg shadow-inner mb-8">
                            <p className="text-slate-300 font-sans text-sm md:text-base font-semibold mb-6 flex flex-col md:flex-row md:items-center gap-2">
                                <span className="text-emerald-400 uppercase tracking-widest text-xs">Exemplo:</span>
                                <span>
                                    Converter <code className="text-white bg-slate-950 px-2 py-0.5 rounded shadow-sm text-lg mx-1">10101000<sub className="text-emerald-500 text-xs">2</sub></code>
                                    <span className="text-slate-400 font-normal italic text-sm ml-2">(um octeto muito comum em IPs: 168):</span>
                                </span>
                            </p>

                            {/* DISPLAY VISUAL DOS BITS (Grid de 8 colunas) */}
                            <div className="overflow-x-auto pb-4">
                                <div className="flex items-center gap-2 md:gap-3 min-w-[500px] md:min-w-full justify-between">

                                    {/* Renderização Mapeada dos 8 Módulos */}
                                    {[
                                        { peso: 128, bit: 1 },
                                        { peso: 64, bit: 0 },
                                        { peso: 32, bit: 1 },
                                        { peso: 16, bit: 0 },
                                        { peso: 8, bit: 1 },
                                        { peso: 4, bit: 0 },
                                        { peso: 2, bit: 0 },
                                        { peso: 1, bit: 0 }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`flex-1 flex flex-col items-center justify-center rounded-lg border transition-all duration-300 shadow-md overflow-hidden ${item.bit === 1
                                                ? 'border-emerald-500/50 bg-emerald-950/30'
                                                : 'border-slate-800 bg-slate-950'
                                                }`}
                                        >
                                            {/* Cabecalho do Peso */}
                                            <div className={`w-full text-center py-2 text-xs md:text-sm font-bold border-b ${item.bit === 1
                                                ? 'border-emerald-500/30 text-emerald-400 bg-emerald-900/20'
                                                : 'border-slate-800 text-slate-500 bg-slate-900/50'
                                                }`}>
                                                {item.peso}
                                            </div>
                                            {/* Valor do Bit */}
                                            <div className={`py-3 md:py-4 text-2xl md:text-3xl font-mono font-black ${item.bit === 1
                                                ? 'text-white drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                                                : 'text-slate-700'
                                                }`}>
                                                {item.bit}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>

                        {/* Equação da Soma Estilizada */}
                        <div className="flex flex-col items-center justify-center pt-2">
                            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-lg md:text-2xl font-mono font-bold text-slate-300">
                                <span className="text-emerald-400">128</span>
                                <span className="text-slate-600">+ 0 +</span>
                                <span className="text-emerald-400">32</span>
                                <span className="text-slate-600">+ 0 +</span>
                                <span className="text-emerald-400">8</span>
                                <span className="text-slate-600">+ 0 + 0 + 0</span>
                                <span className="text-white mx-2">=</span>
                                <span className="text-3xl md:text-4xl text-white bg-slate-800/80 px-4 py-1 rounded-lg border border-slate-700 shadow-lg flex items-baseline">
                                    168<sub className="text-emerald-500 text-sm ml-1">10</sub>
                                </span>
                            </div>
                        </div>

                    </div>
                    {/* FIM DO BLOCO BINÁRIO PARA DECIMAL */}

                    {/* BLOCO DE EXEMPLO: BINÁRIO PARA HEXADECIMAL */}
                    <div className="mt-8 bg-[#08060d] border border-slate-800 p-6 md:p-10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4 font-sans">
                            C. Binário para Hexadecimal <span className="text-sm font-normal text-slate-400 block md:inline md:ml-2">(O atalho dos 4 bits)</span>
                        </h3>

                        <div className="text-slate-300 text-sm md:text-base mb-8 space-y-3 leading-relaxed">
                            <p>
                                Como 16 = 2<sup>4</sup>, você nunca deve converter binário para decimal e depois para hexadecimal.
                            </p>
                            <p>
                                Em vez disso, separe o binário em grupos de 4 bits (da direita para a esquerda) e converta cada grupo individualmente.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-700 p-5 md:p-8 rounded-lg shadow-inner">
                            <p className="text-slate-300 font-sans text-sm md:text-base font-semibold mb-6">
                                <span className="text-emerald-400 uppercase tracking-widest text-xs mr-2">Exemplo:</span>
                                Converter <code className="text-white bg-slate-950 px-2 py-0.5 rounded shadow-sm text-lg mx-1 tracking-widest">11101011<sub className="text-emerald-500 text-xs -ml-1">2</sub></code> para Hexadecimal.
                            </p>

                            {/* Divisão Visual dos 4 Bits (Nibbles) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

                                {/* Linha Divisória Visual no Desktop */}
                                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-700 -translate-x-1/2 border-dashed"></div>

                                {/* Grupo 1 (Esquerda) */}
                                <div className="flex flex-col items-center p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
                                    <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3">
                                        Primeiro Grupo
                                    </span>
                                    <div className="text-3xl font-mono text-white tracking-[0.2em] mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                        1110
                                    </div>
                                    <div className="text-sm font-mono text-slate-400 flex flex-wrap justify-center gap-1 mb-4">
                                        <span className="text-emerald-400">8</span> + <span className="text-emerald-400">4</span> + <span className="text-emerald-400">2</span> + 0 = <span className="text-white font-bold">14</span>
                                    </div>
                                    <svg className="w-6 h-6 text-emerald-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    <div className="text-4xl font-black font-mono text-emerald-400">
                                        E
                                    </div>
                                </div>

                                {/* Grupo 2 (Direita) */}
                                <div className="flex flex-col items-center p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
                                    <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3">
                                        Segundo Grupo
                                    </span>
                                    <div className="text-3xl font-mono text-white tracking-[0.2em] mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                        1011
                                    </div>
                                    <div className="text-sm font-mono text-slate-400 flex flex-wrap justify-center gap-1 mb-4">
                                        <span className="text-emerald-400">8</span> + 0 + <span className="text-emerald-400">2</span> + <span className="text-emerald-400">1</span> = <span className="text-white font-bold">11</span>
                                    </div>
                                    <svg className="w-6 h-6 text-emerald-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    <div className="text-4xl font-black font-mono text-emerald-400">
                                        B
                                    </div>
                                </div>

                            </div>

                            {/* Resultado Final */}
                            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="text-slate-400 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                                    Resultado Final:
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-3xl font-bold text-white tracking-widest font-mono bg-slate-900 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] px-6 py-2 rounded-lg">
                                        EB
                                    </div>
                                    <div className="text-slate-500 font-sans text-xs md:text-sm italic max-w-[200px]">
                                        (frequentemente escrito como <code className="text-emerald-400 not-italic font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">0xEB</code> na programação para indicar base 16).
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* FIM DO BLOCO BINÁRIO PARA HEXADECIMAL */}

                    {/* BLOCO DE EXEMPLO: HEXADECIMAL PARA BINÁRIO */}
                    <div className="mt-8 bg-[#08060d] border border-slate-800 p-6 md:p-10 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-4 font-sans">
                            D. Hexadecimal para Binário
                        </h3>

                        <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
                            É o processo inverso exato. Escreva cada caractere hexadecimal como um grupo de 4 bits.
                        </p>

                        <div className="bg-slate-900/50 border border-slate-700 p-5 md:p-8 rounded-lg shadow-inner">
                            <p className="text-slate-300 font-sans text-sm md:text-base font-semibold mb-6 flex items-center gap-2">
                                <span className="text-emerald-400 uppercase tracking-widest text-xs">Exemplo:</span>
                                <span>
                                    Converter <code className="text-white bg-slate-950 px-2 py-0.5 rounded shadow-sm text-lg font-mono tracking-wider border border-slate-800">0x3F</code> para binário.
                                </span>
                            </p>

                            {/* Expansão Visual dos Caracteres para Bits */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

                                {/* Linha Divisória Visual no Desktop */}
                                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-slate-700 -translate-x-1/2 border-dashed"></div>

                                {/* Caractere 1: '3' */}
                                <div className="flex flex-col items-center p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
                                    <div className="text-4xl font-black font-mono text-emerald-400 mb-2">
                                        3
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4 text-center">
                                        em binário de 4 bits
                                    </span>
                                    <svg className="w-6 h-6 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    <div className="text-3xl font-mono text-white tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                        0011
                                    </div>
                                </div>

                                {/* Caractere 2: 'F' */}
                                <div className="flex flex-col items-center p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <div className="text-4xl font-black font-mono text-emerald-400">
                                            F
                                        </div>
                                        <span className="text-sm font-mono text-slate-400 italic">
                                            (que vale 15)
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4 text-center">
                                        em binário de 4 bits
                                    </span>
                                    <svg className="w-6 h-6 text-emerald-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                    <div className="text-3xl font-mono text-white tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                        1111
                                    </div>
                                </div>

                            </div>

                            {/* Resultado Final */}
                            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="text-slate-400 font-sans text-sm md:text-base font-bold uppercase tracking-wider">
                                    Resultado Final:
                                </div>

                                <div className="text-3xl md:text-4xl font-bold text-white tracking-[0.1em] md:tracking-[0.2em] font-mono bg-slate-900 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] px-6 py-2 rounded-lg flex items-baseline">
                                    00111111<sub className="text-emerald-500 text-lg md:text-xl -ml-1">2</sub>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* FIM DO BLOCO HEXADECIMAL PARA BINÁRIO */}


                    {/* BLOCO: CONEXÃO COM SEGURANÇA E REDES */}
                    <div className="mt-12 bg-slate-900/40 border-l-4 border-red-500 p-6 md:p-8 rounded-r-xl shadow-lg">
                        <h3 className="flex items-center gap-3 text-xl font-bold text-red-400 mb-4 font-sans">
                            <ShieldAlert className="w-6 h-6" />
                            Conexão com a Segurança e Redes (Por que isso importa?)
                        </h3>

                        <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                            Na triagem de pacotes com ferramentas como o Tcpdump ou Wireshark, os dados chegam de forma bruta (<span className="italic text-slate-400">raw data</span>). Se você identificar que o primeiro byte de um pacote IP começa com <code className="text-red-300 bg-red-950/50 px-1.5 py-0.5 rounded font-mono border border-red-900/50 shadow-sm">0x45</code>, convertendo para binário temos 0100 e 0101.
                        </p>

                        <ul className="space-y-4 font-mono text-sm md:text-base text-slate-300 bg-[#08060d] p-5 md:p-6 rounded-lg border border-slate-800 shadow-inner mb-6">
                            <li className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                                <p>
                                    Os primeiros 4 bits (<span className="text-red-400 font-bold">0100</span> = 4) indicam a versão do protocolo: <span className="text-white font-bold bg-slate-900 px-1 rounded">IPv4</span>.
                                </p>
                            </li>
                            <li className="flex items-start gap-3 border-t border-slate-800/50 pt-4">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                                <p>
                                    Os 4 bits seguintes (<span className="text-red-400 font-bold">0101</span> = 5) indicam o tamanho do cabeçalho (IHL - Internet Header Length): <span className="text-white font-bold bg-slate-900 px-1 rounded">5 palavras de 32 bits (20 bytes)</span>.
                                </p>
                            </li>
                        </ul>

                        <p className="text-red-200/70 text-sm md:text-base font-semibold italic border-l-2 border-red-900/50 pl-4 py-1">
                            Toda a análise de tráfego de baixo nível depende dessa matemática de conversão instantânea.
                        </p>
                    </div>

                    {/* TABELA DE CONVERSÃO GERAL (INSPIRADA NA IMAGEM) */}
                    <div className="mt-12 overflow-x-auto rounded-lg border border-slate-600/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                        <table className="w-full text-left border-collapse bg-[#1f1f1f]">
                            <thead>
                                <tr className="bg-[#2a2a2a] text-slate-200 text-sm md:text-base font-sans border-b border-slate-600/50">
                                    <th className="p-3 md:p-4 border-r border-slate-600/50 font-bold">Decimal</th>
                                    <th className="p-3 md:p-4 border-r border-slate-600/50 font-bold">Binário (4 bits)</th>
                                    <th className="p-3 md:p-4 border-r border-slate-600/50 font-bold">Hexadecimal</th>
                                    <th className="p-3 md:p-4 font-bold">Octal</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300 font-mono text-sm md:text-base">
                                {[
                                    { d: '0', b: '0000', h: '0', o: '0' },
                                    { d: '1', b: '0001', h: '1', o: '1' },
                                    { d: '2', b: '0010', h: '2', o: '2' },
                                    { d: '3', b: '0011', h: '3', o: '3' },
                                    { d: '4', b: '0100', h: '4', o: '4' },
                                    { d: '5', b: '0101', h: '5', o: '5' },
                                    { d: '6', b: '0110', h: '6', o: '6' },
                                    { d: '7', b: '0111', h: '7', o: '7' },
                                    { d: '8', b: '1000', h: '8', o: '10' },
                                    { d: '9', b: '1001', h: '9', o: '11' },
                                    { d: '10', b: '1010', h: 'A', o: '12' },
                                    { d: '11', b: '1011', h: 'B', o: '13' },
                                    { d: '12', b: '1100', h: 'C', o: '14' },
                                    { d: '13', b: '1101', h: 'D', o: '15' },
                                    { d: '14', b: '1110', h: 'E', o: '16' },
                                    { d: '15', b: '1111', h: 'F', o: '17' }
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-600/50 last:border-0 hover:bg-slate-700/30 transition-colors">
                                        <td className="p-3 md:p-4 border-r border-slate-600/50 font-sans font-semibold text-white">{row.d}</td>
                                        <td className="p-3 md:p-4 border-r border-slate-600/50">{row.b}</td>
                                        <td className="p-3 md:p-4 border-r border-slate-600/50 text-white font-bold">{row.h}</td>
                                        <td className="p-3 md:p-4">{row.o}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TEXTO DE TRANSIÇÃO E CITAÇÃO FINAL */}
                    <div className="mt-12 bg-slate-900/60 p-8 md:p-10 rounded-xl border border-slate-800 shadow-xl text-center space-y-8">
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Agora vamos entender como a arquitetura do computador e os protocolos de rede agrupam e organizam esses números fisicamente dentro de "recipientes" físicos no hardware e entender as regras de como eles são lidos e interpretados pelos humanos e pelas redes e nos cabos.
                        </p>

                        <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

                        <p className="text-emerald-400 text-xl md:text-2xl font-light italic leading-snug drop-shadow-md">
                            "Compreender como os sistemas operacionais e o hardware agrupam e leem os bits é o que separa um analista que apenas opera ferramentas de um engenheiro que entende o que acontece na memória RAM e nos fios de cobre."
                        </p>
                    </div>

                </section>

                {/* Título de transição para a Parte de Arquitetura */}
                <div className="py-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                </div>

                {/* Seção 7: Grandezas da Informação */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Cpu className="text-emerald-500 w-6 h-6" />
                        2. Grandezas da Informação (O Hardware)
                    </h2>
                    <p>
                        Hardware e redes não processam dados como um fluxo contínuo e caótico de "0 e 1"; ela é rigidamente loteada, organizam os bits em blocos padronizados. Essa padronização é o que permite que um roteador Cisco, um servidor Linux e um smartphone Android se compreendam. No mundo físico, não existe um "número 5" circulando pela rede; existem níveis de tensão elétrica que precisam ser agrupados e padronizados para fazer sentido.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                        {/* --- COLUNA 1 (Bit e Nibble) --- */}
                        <div className="flex flex-col space-y-6">

                            {/* BLOCO APRIMORADO: BIT */}
                            <div className="bg-slate-900 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-lg">
                                <h4 className="text-xl font-bold text-emerald-400 mb-4 inline-block border-b-2 border-slate-700 pb-1">
                                    Bit (Binary Digit)
                                </h4>

                                <ul className="list-disc list-outside space-y-4 text-slate-400 text-sm md:text-base ml-5">
                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">O que é:</strong> É a partícula subatômica de informação da computação, a menor unidade indivisível da computação.
                                    </li>

                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">Estado:</strong> Representa um único estado possível de um sistema lógico ou elétrico:
                                        <span className="bg-black text-white font-mono px-2 py-0.5 rounded shadow-inner mx-1 tracking-wide">0</span> (desligado/corte) ou
                                        <span className="bg-black text-white font-mono px-2 py-0.5 rounded shadow-inner mx-1 tracking-wide">1</span> (ligado/saturação).
                                        <span className="bg-black text-white font-mono px-2 py-0.5 rounded shadow-inner ml-1 tracking-wide">5 Volts ou 0 Volts</span>.
                                    </li>

                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">Símbolo:</strong> Por si só, um bit carrega muito pouca informação. Símbolo:
                                        <span className="bg-black text-white font-serif px-2 py-0.5 rounded shadow-inner ml-1 tracking-wide">b (minúsculo)</span>.
                                    </li>

                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">Na rede:</strong> A velocidade de transmissão de dados é medida em bits por segundo
                                        <span className="bg-black text-white font-mono px-2 py-0.5 rounded shadow-inner mx-1 tracking-wide">(bps, Kbps, Mbps, Gbps)</span>.
                                        Por isso, uma conexão de <strong className="text-slate-200">100 Megabits (100 Mbps)</strong> é diferente de 100 Megabytes.
                                        <span className="inline-block mt-2">1 Gigabyte (1 GB) equivale a 1.024 Megabytes (1.024 MB).</span>
                                    </li>
                                </ul>
                            </div>
                            {/* FIM DO BLOCO BIT */}

                            {/* BLOCO NIBBLE */}
                            <div className="bg-slate-900 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-lg">
                                <h4 className="text-xl font-bold text-emerald-400 mb-4 inline-block border-b-2 border-slate-700 pb-1">
                                    Nibble
                                </h4>
                                <p className="text-slate-300 text-sm md:text-base mb-5 leading-relaxed">
                                    É um agrupamento de <strong className="text-slate-200">4 bits</strong> (meio byte) <span className="bg-black text-white font-serif px-2 py-1 rounded shadow-inner ml-1 tracking-wide">(2<sup>4</sup> = 16 valores possíveis).</span>
                                </p>
                                <ul className="list-disc list-inside space-y-3 text-slate-400 text-sm md:text-base ml-2">
                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">Importância prática:</strong> Um <em className="text-slate-300">nibble</em> mapeia exatamente <strong className="text-slate-200">um caractere Hexadecimal</strong>
                                        <span className="bg-black text-white font-serif px-2 py-1 rounded shadow-inner mx-2 tracking-wide inline-block mt-2 md:mt-0">
                                            0000<sub className="text-xs">2</sub> a 1111<sub className="text-xs">2</sub>, ou 0 a F<sub className="text-xs">16</sub>
                                        </span>.
                                        <br className="hidden md:block" />
                                        <span className="inline-block mt-2">
                                            Quando você lê um endereço IPv6 ou um MAC Address, cada letra/número ali corresponde a um <span className="border-b border-dashed border-slate-500">nibble</span> na memória.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* --- COLUNA 2 (Byte e Word) --- */}
                        <div className="flex flex-col space-y-6">

                            {/* BLOCO APRIMORADO: BYTE */}
                            <div className="bg-slate-900 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-lg">
                                <h4 className="text-xl font-bold text-emerald-400 mb-4 inline-block border-b-2 border-slate-700 pb-1">
                                    Byte (Octeto)
                                </h4>

                                <ul className="list-disc list-outside space-y-4 text-slate-400 text-sm md:text-base ml-5">
                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">O que é:</strong> Um agrupamento padrão de <strong className="text-slate-200">8 bits</strong>
                                        <span className="bg-black text-white font-serif px-2 py-1 rounded shadow-inner ml-2 tracking-wide inline-block mt-1 md:mt-0">(2<sup>8</sup> = 256 valores possíveis)</span>.
                                    </li>

                                    <li className="leading-relaxed">
                                        Símbolo: B (maiúsculo).
                                    </li>

                                    <li className="leading-relaxed">
                                        É a menor unidade <strong className="text-slate-200">endereçável</strong> fundamental de armazenamento e de alocação de memória, na maioria das arquiteturas modernas. Em armazenamento de dados (HDDs, SSDs, arquivos), usamos o Byte como medida padrão (ex: 1GB). Um processador não busca um único bit na RAM, ele busca pelo menos um Byte. Um Byte pode representar
                                        <span className="bg-black text-white font-serif px-2 py-1 rounded shadow-inner mx-2 tracking-wide inline-block mt-1 md:mt-0">(2<sup>8</sup> = 256 valores possíveis)</span>
                                        valores diferentes (de 0 a 255).
                                    </li>

                                    <li className="leading-relaxed">
                                        <strong className="text-slate-200">Na prática:</strong> Arquivos, memória RAM e discos rígidos são medidos em Bytes (KB, MB, GB, TB). Em redes, o termo correto e padronizado nas RFCs (documentos de padrões da internet) é <strong className="text-slate-200">Octeto</strong>, para evitar ambiguidades históricas.
                                    </li>
                                </ul>


                            </div>
                            {/* FIM DO BLOCO BYTE */}

                            {/* BLOCO WORD */}
                            <div className="bg-slate-900 p-5 rounded-lg border border-slate-800/50 h-full">
                                <h4 className="font-bold text-emerald-400 mb-3">Word e Alinhamento</h4>
                                <p className="text-sm text-slate-400 mb-3">
                                    A Word (Palavra) é o tamanho "natural" de dados que o processador (CPU) consegue processar (manipular) de uma só vez em seus registradores em um único ciclo de clock.
                                </p>
                                <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
                                    <li><strong>Word:</strong> Tradicionalmente, em arquiteturas antigas (como x86 de 16 bits), uma Word equivale a 16 bits (2 Bytes).</li>
                                    <li><strong>Double Word DWORD:</strong> Equivale a 32 bits (4 Bytes). O IPv4, por exemplo, é um endereço de 32 bits, ou seja, um Double Word.</li>
                                    <li><strong>Quad Word QWORD:</strong> Equivale a 64 bits (8 Bytes), o padrão dos processadores modernos. </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* CAIXA DE DESTAQUE: NOTA DE REDES */}
                    <div className="mt-6 p-4 md:p-5 bg-emerald-950/10 border-l-4 border-emerald-500 rounded-r-lg text-sm md:text-base text-slate-300 shadow-inner">
                        <strong className="text-emerald-400">Nota de Engenharia de Redes:</strong> Em protocolos de rede (RFCs da IETF), você raramente verá o termo <em className="text-slate-400 italic">Byte</em>. O padrão absoluto é usar o termo <strong className="text-slate-200">Octet</strong> (Octeto). Isso ocorre porque, nos primórdios da computação, existiam sistemas onde 1 byte tinha 6, 7 ou 9 bits. "Octeto" garante matematicamente que estamos falando de exatos 8 bits.
                    </div>
                    <div className="mt-4 p-3 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-300">
                        <strong>Nota Segurança em Foco:</strong> Em engenharia reversa e exploits (Buffer Overflows), o tamanho da Word dita o alinhamento de memória e o padding necessário para sobrescrever o Instruction Pointer (EIP/RIP).
                    </div>
                </section>

                {/* Seção 8: Endianness */}
                <section className="space-y-6">

                    {/* SEÇÃO 8: ENDIANNESS (INTRODUÇÃO) */}

                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <Cpu className="text-emerald-500 w-6 h-6" />
                        3. A Batalha das Arquiteturas: Endianness
                    </h2>

                    <div className="bg-[#08060d] p-6 md:p-10 rounded-xl border border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Este é um dos conceitos mais <strong className="text-emerald-400">críticos e subestimados</strong> na Engenharia de Redes e Análise de Malware. Quando um dado é maior que 1 Byte — por exemplo, um endereço IPv4 que ocupa 4 bytes (DWORD), a memória e os protocolos de rede precisam decidir em qual ordem vão ler e transmitir esses bytes.
                        </p>

                        {/* Info Box sobre o Prefixo 0x */}
                        <div className="flex flex-col md:flex-row md:items-start gap-4 p-5 bg-slate-900/60 border-l-4 border-emerald-500 rounded-r-lg mb-10 shadow-inner">
                            <div className="bg-black text-emerald-400 font-mono font-bold text-xl px-4 py-2 rounded border border-emerald-900 shadow-[0_0_10px_rgba(16,185,129,0.2)] shrink-0 flex items-center justify-center">
                                0x
                            </div>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                O prefixo <strong className="text-slate-200">0x (zero e x)</strong> é uma convenção usada na computação e em linguagens de programação para indicar que o número que vem a seguir está na base hexadecimal (base 16). Ele serve para diferenciar um número hexadecimal de um decimal comum.
                            </p>
                        </div>

                        {/* Display Visual Interativo do Valor Hexadecimal */}
                        <div className="bg-slate-900 border border-slate-700 p-6 md:p-8 rounded-lg shadow-inner text-center">
                            <p className="text-slate-300 font-sans mb-8 text-lg">
                                Imagine o valor Hexadecimal de 32 bits:
                            </p>

                            {/* Grid dos Bytes */}
                            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8">
                                <span className="text-2xl md:text-4xl font-mono text-slate-600 mr-2 md:mr-4 select-none">0x</span>

                                {/* Byte 12 (MSB) */}
                                <div className="flex flex-col items-center group cursor-default">
                                    <div className="text-3xl md:text-5xl font-black font-mono text-white bg-emerald-950/60 border-2 border-emerald-500/50 px-4 md:px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all group-hover:scale-105 group-hover:border-emerald-400">
                                        12
                                    </div>
                                </div>

                                {/* Byte 34 */}
                                <div className="flex flex-col items-center">
                                    <div className="text-3xl md:text-5xl font-black font-mono text-slate-400 bg-slate-950 border-2 border-slate-700 px-4 md:px-6 py-3 rounded-lg">
                                        34
                                    </div>
                                </div>

                                {/* Byte 56 */}
                                <div className="flex flex-col items-center">
                                    <div className="text-3xl md:text-5xl font-black font-mono text-slate-400 bg-slate-950 border-2 border-slate-700 px-4 md:px-6 py-3 rounded-lg">
                                        56
                                    </div>
                                </div>

                                {/* Byte 78 (LSB) */}
                                <div className="flex flex-col items-center group cursor-default">
                                    <div className="text-3xl md:text-5xl font-black font-mono text-white bg-teal-950/60 border-2 border-teal-500/50 px-4 md:px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all group-hover:scale-105 group-hover:border-teal-400">
                                        78
                                    </div>
                                </div>
                            </div>

                            {/* Legendas dos Bytes Significativos */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-6">
                                <div className="bg-emerald-900/20 p-4 border-l-4 border-emerald-500 rounded">
                                    <p className="text-sm md:text-base text-slate-300">
                                        O <strong className="text-emerald-400 font-mono text-lg bg-black px-1.5 rounded">12</strong> é o byte <strong className="text-white">mais significativo</strong> (MSB), de maior valor numérico.
                                    </p>
                                </div>
                                <div className="bg-teal-900/20 p-4 border-l-4 border-teal-500 rounded">
                                    <p className="text-sm md:text-base text-slate-300">
                                        O <strong className="text-teal-400 font-mono text-lg bg-black px-1.5 rounded">78</strong> é o byte <strong className="text-white">menos significativo</strong> (LSB).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Texto de Transição */}
                        <div className="mt-10 flex items-center justify-center">
                            <div className="animate-bounce mr-3">
                                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <p className="text-center text-slate-300 text-lg font-semibold italic">
                                Existem duas formas de armazenar isso na memória (do endereço mais baixo para o mais alto):
                            </p>
                        </div>

                    </div>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-left border-collapse border border-slate-800">
                            <thead>
                                <tr className="bg-slate-900 text-slate-300">
                                    <th className="border border-slate-800 p-3">Formato</th>
                                    <th className="border border-slate-800 p-3">Descrição e Uso</th>
                                    <th className="border border-slate-800 p-3">Ordem na Memória</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-400">
                                <tr>
                                    <td className="border border-slate-800 p-3 font-bold text-emerald-400">Big-Endian</td>
                                    <td className="border border-slate-800 p-3">
                                        O byte mais significativo vai no endereço menor. Protocolos de Rede (TCP/IP) usam isso (Network Byte Order).
                                    </td>
                                    <td className="border border-slate-800 p-3 font-mono">12 | 34 | 56 | 78</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-800 p-3 font-bold text-teal-400">Little-Endian</td>
                                    <td className="border border-slate-800 p-3">
                                        O byte menos significativo vai no endereço menor. Processadores modernos (Intel/AMD) usam isso (Host Byte Order).
                                    </td>
                                    <td className="border border-slate-800 p-3 font-mono">78 | 56 | 34 | 12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>




                    {/* O GRANDE FECHAMENTO: POR QUE ISSO IMPORTA? */}
                    <div className="mt-12 relative overflow-hidden bg-[#08060d] border border-slate-800 p-6 md:p-10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">

                        {/* Efeito de Fundo */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                            <Network className="w-7 h-7 text-emerald-500" />
                            Por que isso importa na Engenharia de Redes?
                        </h3>

                        {/* Grid: Host vs Network */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">

                            {/* Host Byte Order (O Computador) */}
                            <div className="bg-slate-900/60 p-6 rounded-xl border border-teal-900/50 hover:border-teal-500/50 transition-colors shadow-inner flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-4 border-b border-slate-700/50 pb-3">
                                    <Cpu className="w-6 h-6 text-teal-400" />
                                    <h4 className="font-bold text-teal-400 text-lg tracking-wide">Host Byte Order</h4>
                                    <span className="text-xs text-slate-500 font-mono ml-auto">LITTLE-ENDIAN</span>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    <strong className="text-white">Ordem do Computador:</strong> A grande maioria dos computadores modernos (processadores Intel e AMD x86/x64) utiliza Little-Endian. É mais eficiente para o hardware realizar operações matemáticas começando pelos bits menos significativos.
                                </p>
                            </div>

                            {/* Network Byte Order (A Rede) */}
                            <div className="bg-slate-900/60 p-6 rounded-xl border border-blue-900/50 hover:border-blue-500/50 transition-colors shadow-inner flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-4 border-b border-slate-700/50 pb-3">
                                    <Network className="w-6 h-6 text-blue-400" />
                                    <h4 className="font-bold text-blue-400 text-lg tracking-wide">Network Byte Order</h4>
                                    <span className="text-xs text-slate-500 font-mono ml-auto">BIG-ENDIAN</span>
                                </div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    <strong className="text-white">Ordem da Rede:</strong> A internet e o protocolo TCP/IP padronizaram o uso de Big-Endian. Quando roteadores transmitem cabeçalhos IP, eles os enviam no formato Big-Endian.
                                </p>
                            </div>

                        </div>

                        {/* O Processo de Conversão (A Ponte) */}
                        <div className="bg-slate-900 border border-slate-700 p-6 md:p-8 rounded-xl shadow-lg relative z-10">
                            <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
                                <Terminal className="w-4 h-4" /> A Ponte de Conversão
                            </h4>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                                <strong className="text-white">Engenharia de Redes:</strong> Quando um computador x64 envia um pacote pela rede, o sistema operacional precisa converter constantemente os dados da memória do computador, cabeçalho (como as portas de origem e destino de <span className="italic text-teal-400">Little-Endian</span>) para o cabo de rede (<span className="italic text-blue-400">Big-Endian</span>) e vice-versa.
                            </p>

                            {/* Funções em C */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 bg-[#050505] p-4 rounded-lg border border-slate-800">

                                <span className="text-sm text-slate-400">Para isso, programadores usam funções em C padrão:</span>
                                <div className="flex flex-wrap gap-3">

                                    <code className="text-emerald-300 font-mono text-sm bg-emerald-950/30 px-3 py-1.5 rounded border border-emerald-900/50 shadow-sm flex flex-col text-center">
                                        <span className="font-bold text-emerald-400">htons()</span>
                                        <span className="text-[10px] text-slate-500 mt-1">Host to Network Short</span>
                                    </code>
                                    <code className="text-emerald-300 font-mono text-sm bg-emerald-950/30 px-3 py-1.5 rounded border border-emerald-900/50 shadow-sm flex flex-col text-center">
                                        <span className="font-bold text-emerald-400">htonl()</span>
                                        <span className="text-[10px] text-slate-500 mt-1">Host to Network Long</span>
                                    </code>
                                </div>
                            </div>

                        </div>
                        <p className="text-sm text-slate-400 bg-slate-900/50 p-4 rounded-lg">
                            <strong>Na prática:</strong> Programadores usam funções em C como <code className="text-emerald-300">htons()</code> e <code className="text-emerald-300">htonl()</code> para converter Host para Network. Se falhar, uma porta 80 pode ser lida de forma totalmente incorreta.
                        </p>

                        {/* O Alerta de Falha (O Impacto Real) */}
                        <div className="mt-6 bg-red-950/20 border-l-4 border-red-500 p-5 md:p-6 rounded-r-xl relative z-10 flex flex-col md:flex-row md:items-center gap-4 shadow-inner">
                            <div className="bg-red-500/10 p-3 rounded-full shrink-0">
                                <ShieldAlert className="w-6 h-6 text-red-500" />
                            </div>
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                Ignorar o Endianness ao analisar um binário ou um dump de memória ou se essa conversão falhar, a porta de destino <strong className="text-white bg-slate-900 px-1 rounded">80</strong> será interpretada incorretamente pelo roteador, derrubando a comunicação, e resultará na leitura de IPs e portas totalmente errados.
                            </p>
                        </div>

                    </div>
                    {/* FIM DO BLOCO DE FECHAMENTO */}
                </section>

                {/* Seção 9: Codificação de Texto */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
                        <FileDigit className="text-emerald-500 w-6 h-6" />
                        4. Codificação de Texto: Dando Significado aos Bits
                    </h2>

                    {/* BLOCO APRIMORADO: ASCII */}
                    <div className="bg-slate-900 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-lg">
                        <h3 className="text-xl font-bold text-emerald-400 mb-5 inline-block border-b-2 border-slate-700 pb-1">
                            ASCII <span className="text-sm font-normal text-slate-400 block md:inline md:ml-2">(American Standard Code for Information Interchange)</span>
                        </h3>

                        <ul className="list-disc list-outside marker:text-emerald-500 space-y-5 text-slate-400 text-sm md:text-base ml-5">

                            {/* A Origem */}
                            <li className="leading-relaxed pl-1">
                                <strong className="text-slate-200">A Origem (1963):</strong> Criado na década de 1960, O <em className="text-slate-300">American Standard Code for Information Interchange</em> foi a primeira grande padronização. Definiu que 7 bits (128 combinações, de 0 a 127) seriam suficientes para representar todos caracteres do idioma inglês (maiúsculas e minúsculas sem acento), números e caracteres de controle (como "Enter" e "Esc") do idioma inglês
                                <span className="bg-black text-white font-serif px-2 py-1 rounded shadow-inner tracking-wide mx-1.5 inline-block whitespace-nowrap">
                                    2<sup>7</sup> = 128
                                </span>
                                caracteres.
                            </li>

                            {/* Conteúdo */}
                            <li className="leading-relaxed pl-1">
                                <strong className="text-slate-200">Conteúdo:</strong> Letras do alfabeto inglês (maiúsculas e minúsculas), números de 0 a 9 e símbolos de controle de rede/impressora (como <em className="text-slate-300">Carriage Return</em> e <em className="text-slate-300">Line Feed</em>). Exemplo: A letra "A" maiúscula é o decimal 65, que em binário é
                                <span className="bg-black text-white font-serif px-2 py-1 rounded shadow-inner tracking-wide ml-1.5 inline-block whitespace-nowrap">
                                    01000001<sub className="text-xs">2</sub>
                                </span>.
                            </li>

                            {/* O Problema */}
                            <li className="leading-relaxed pl-1">
                                <strong className="text-red-400">O Problema:</strong> Sendo um padrão estritamente americano, o ASCII original não possui acentuação (ç, á, ã), alfabetos cirílicos, árabes ou asiáticos.
                            </li>

                        </ul>
                    </div>
                    {/* FIM DO BLOCO ASCII */}


                    {/* BLOCO APRIMORADO: UNICODE */}
                    <div className="bg-slate-900 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-lg mt-6">
                        <h3 className="text-xl font-bold text-emerald-400 mb-5 inline-block border-b-2 border-slate-700 pb-1">
                            Unicode
                        </h3>

                        <ul className="list-disc list-outside marker:text-emerald-500 space-y-5 text-slate-400 text-sm md:text-base ml-5">

                            {/* A Solução Global */}
                            <li className="leading-relaxed pl-1">
                                <strong className="text-slate-200">A Solução Global:</strong> O Unicode não é um formato de arquivo e não é uma codificação, mas sim um imenso catálogo universal. O ASCII funcionava bem para o inglês, mas o mundo possui alfabetos cirílicos, árabes, mandarim e, mais recentemente, emojis. O objetivo do projeto Unicode é dar um número único (chamado de <em className="text-slate-300 italic">Code Point</em>) para cada caractere de cada idioma do mundo, incluindo símbolos matemáticos e emojis, resolvendo o problema de incompatibilidade de caracteres.
                            </li>

                            {/* Exemplos de Code Points */}
                            <li className="leading-relaxed pl-1">
                                Por exemplo, a letra "A" é o Code Point
                                <span className="bg-black text-emerald-300 font-mono px-2 py-0.5 rounded shadow-inner tracking-wide inline-block mx-1.5">
                                    U+0041
                                </span>.
                                A letra "ç" é
                                <span className="bg-black text-emerald-300 font-mono px-2 py-0.5 rounded shadow-inner tracking-wide inline-block mx-1.5">
                                    U+00E7
                                </span>.
                                O emoji de 👾 (Alien Monster) é
                                <span className="bg-black text-emerald-300 font-mono px-2 py-0.5 rounded shadow-inner tracking-wide inline-block ml-1.5">
                                    U+1F47E
                                </span>.
                            </li>

                        </ul>
                    </div>
                    {/* FIM DO BLOCO UNICODE */}

                    <div className="space-y-6">


                        {/* BLOCO APRIMORADO: UTF-8 */}
                        <div className="bg-slate-900 p-6 md:p-8 rounded-lg border border-slate-800/50 shadow-lg mt-6">
                            <h3 className="text-xl font-bold text-emerald-400 mb-5 inline-block border-b-2 border-slate-700 pb-1">
                                UTF-8 <span className="text-sm font-normal text-slate-400 block md:inline md:ml-2">(A Implementação Perfeita)</span>
                            </h3>

                            <div className="space-y-5 text-slate-400 text-sm md:text-base leading-relaxed">
                                <p>
                                    Ter um número para cada símbolo do mundo é ótimo, mas como armazenar isso de forma eficiente? Se usarmos <strong className="text-slate-200">4 bytes fixos</strong> para cada letra (para caberem todos os alfabetos do mundo), um simples texto em inglês ficaria 4 vezes maior, destruindo o desempenho de armazenamento e largura de banda das redes.
                                </p>

                                <p>
                                    A genialidade do UTF-8 (<em className="italic text-slate-300">Unicode Transformation Format - 8-bit</em>) está na sua flexibilidade e retrocompatibilidade com o ASCII. Ele é uma codificação de <strong className="text-emerald-400">tamanho variável</strong>:
                                </p>

                                <p className="font-semibold text-slate-300 pt-2">
                                    A solução foi o UTF-8:
                                </p>

                                <ul className="list-disc list-outside marker:text-emerald-500 space-y-3 ml-5">
                                    <li className="pl-1">
                                        Caracteres ASCII tradicionais (inglês/números) continuam ocupando
                                        <strong className="text-white font-mono bg-black px-2 py-0.5 rounded shadow-inner border border-slate-800 ml-1.5">1 byte</strong>.
                                    </li>

                                    <li className="pl-1">
                                        Caracteres latinos com acentos (como ç, ã) ocupam
                                        <strong className="text-white font-mono bg-black px-2 py-0.5 rounded shadow-inner border border-slate-800 ml-1.5">2 bytes</strong>.
                                    </li>

                                    <li className="pl-1">
                                        Símbolos asiáticos ou caracteres complexos ocupam
                                        <strong className="text-white font-mono bg-black px-2 py-0.5 rounded shadow-inner border border-slate-800 ml-1.5">3 bytes</strong>.
                                    </li>

                                    <li className="pl-1">
                                        Emojis e símbolos raros ocupam
                                        <strong className="text-white font-mono bg-black px-2 py-0.5 rounded shadow-inner border border-slate-800 ml-1.5">4 bytes</strong>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* FIM DO BLOCO UTF-8 */}


                        {/* BLOCO DE SEGURANÇA: TÉCNICAS OFENSIVAS */}
                        <div className="mt-10 bg-red-950/20 border-l-4 border-red-600 p-6 md:p-8 rounded-r-xl shadow-xl">
                            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-red-500 mb-5 font-sans">
                                <ShieldAlert className="w-6 h-6 shrink-0" />
                                Técnicas Ofensivas e Codificação
                            </h3>

                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                                O mapeamento de caracteres é um <strong className="text-red-400">vetor clássico na cibersegurança</strong>. Atacantes frequentemente exploram como diferentes sistemas interpretam caracteres.
                            </p>

                            <div className="space-y-6">

                                {/* Vetor 1: Phishing / Homograph Attacks */}
                                <div className="bg-[#050505] p-5 rounded-lg border border-red-900/50 shadow-inner">
                                    <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                                        1. Homograph Attacks (Ataques de Homógrafos)
                                    </h4>
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
                                        Em ataques de phishing, adversários utilizam frequentemente os Homograph Attacks. O atacante registra um domínio como <code className="text-white bg-slate-900 px-1.5 py-0.5 rounded border border-slate-700 font-mono tracking-widest mx-1 shadow-sm">appIe.com</code>, mas substitui o "l" latino por um caractere visualmente idêntico de outro alfabeto no Unicode (como o Cyrillic).
                                    </p>
                                    <div className="bg-red-900/20 p-4 rounded text-sm text-red-200/80 italic border-l-2 border-red-500/50">
                                        A vítima lê perfeitamente, mas o navegador resolve um endereço IP completamente diferente, controlando a infraestrutura de captura de credenciais.
                                    </div>
                                </div>

                                {/* Vetor 2: WAF Evasion */}
                                <div className="bg-[#050505] p-5 rounded-lg border border-red-900/50 shadow-inner">
                                    <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                                        2. Evasão de Web Application Firewalls (WAF)
                                    </h4>
                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
                                        Um ataque clássico de evasão de WAF envolve enviar um payload malicioso (<code className="text-emerald-400 bg-slate-900 px-1.5 py-0.5 rounded font-mono border border-slate-700 mx-1">&lt;script&gt;</code>) com codificações Unicode não padronizadas ou caracteres de múltiplos bytes para burlar WAFs.
                                    </p>
                                    <div className="bg-red-900/20 p-4 rounded text-sm md:text-base text-red-200/80 italic border-l-2 border-red-500/50 space-y-3">
                                        <p>
                                            Se o filtro de segurança de Intrusão não normalizar o UTF-8 corretamente, o código malicioso passa invisível pelo firewall e é executado no servidor.
                                        </p>
                                        <p>
                                            Um filtro mal configurado pode bloquear a palavra <code className="text-emerald-400 not-italic bg-slate-900 px-1.5 py-0.5 rounded font-mono border border-red-900/30">&lt;script&gt;</code>, mas deixar passar uma variação encodada da mesma palavra por não saber interpretar a conversão variável do UTF-8 em tempo real.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* FIM DO BLOCO TÉCNICAS OFENSIVAS */}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* NOVA SEÇÃO: A GRANDE ILUSÃO (LARGURA RESTRITA E PALCO CENTRAL PRETO)      */}
                {/* ========================================================================= */}

                {/* Fundo externo escuro para contrastar com a coluna central */}
                <section className="w-full bg-[#02040a] py-12 md:py-20">

                    {/* A Coluna Central (O "Palco" Preto Sólido) */}
                    <div className="max-w-6xl mx-auto bg-black relative border-t-4 border-[#1e293b] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">

                        {/* Malha Quadriculada (Apenas dentro da coluna central, bem sutil) */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

                        {/* Conteúdo Interno da Coluna */}
                        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 space-y-12">

                            {/* CABEÇALHO DA SEÇÃO */}
                            <div className="text-center space-y-8 mb-12">
                                <h2 className="text-3xl md:text-5xl font-black text-cyan-400 tracking-tight uppercase">
                                    Armazenamento de midias digitais
                                </h2>
                                <div className="space-y-4 text-lg text-slate-300 leading-relaxed font-light px-4">
                                    <p>
                                        Aqui damos um salto fenomenal: deixamos de olhar para o byte isolado e passamos a entender os <strong className="text-white font-semibold">arquivos</strong>. O hardware não faz a menor ideia do que é uma foto, uma música ou a interface front-end e back-end de uma aplicação. Para o processador, a memória e os cabos de rede, tudo é apenas uma sequência de números.
                                    </p>
                                    <p>
                                        Na sequência vamos ver como a engenharia mapeia o mundo real (analógico e complexo) para o mundo discreto (binário). Entender essa tradução é ter a chave para dominar o consumo de banda em redes de alta performance e a análise forense em cibersegurança. <strong className="text-emerald-400 font-medium italic">Como o computador sabe se aquilo é uma foto de um gato, um áudio ou um script malicioso?</strong>
                                    </p>
                                </div>
                            </div>

                            {/* CARD INTRODUTÓRIO */}
                            <div className="bg-[#0a0a0a] border border-slate-800 p-6 md:p-8 rounded-2xl shadow-inner group hover:border-cyan-900/50 transition-colors">
                                <div className="flex flex-col md:flex-row items-center gap-5">
                                    <div className="p-4 bg-cyan-950/30 rounded-full border border-cyan-900/50 group-hover:scale-110 transition-transform">
                                        <Database className="w-8 h-8 text-cyan-500 shrink-0" />
                                    </div>
                                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                        A resposta está na padronização matemática e na arquitetura interna dos arquivos. Todo arquivo possui duas partes fundamentais: o <strong className="text-white">Cabeçalho (Header/Metadata)</strong>, que instrui o software sobre como ler o arquivo, e o <strong className="text-white">Payload (Corpo)</strong>, que contém os dados em si.
                                    </p>
                                </div>
                            </div>

                            {/* 5. COMO A MÍDIA E O TEXTO SÃO ARMAZENADOS */}
                            <div className="pt-8 border-t-2 border-slate-800/80">
                                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-4 mb-6">
                                    <Layers className="text-emerald-500 w-8 h-8 shrink-0" />
                                    5 - Como a Mídia e o Texto são Armazenados
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-12 text-justify">
                                    Já vimos como o UTF-8 atribui um número a cada letra do mundo. Esta é a fronteira onde a matemática pura se transforma na experiência humana, e toda mídia digital é, no fundo, uma grande matriz matemática. Compreender como a engenharia utiliza esses blocos para construir a interface visual e a linguagem é um fundamento básico no desenvolvimento moderno, com impactos diretos na infraestrutura de redes e na cibersegurança.
                                </p>

                                {/* 5.1 TEXTO */}
                                <div className="space-y-6 mb-16">
                                    <h3 className="text-xl md:text-2xl font-bold text-emerald-400">5.1. O Armazenamento de Texto</h3>
                                    <p className="text-slate-400 text-sm mb-6">O armazenamento de texto é a aplicação mais direta da codificação. Ele se divide estruturalmente em níveis de complexidade:</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        {/* Texto Puro */}
                                        <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 flex flex-col h-full hover:border-cyan-900/50 transition-colors">
                                            <h4 className="font-bold text-white flex items-center gap-2 mb-3">
                                                <FileText className="text-cyan-400 w-5 h-5" /> Texto Puro (Plain Text)
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                                É a representação digital mais simples. Um arquivo de texto puro não possui cabeçalhos complexos ou a "coroa gráfica" embutida; ele é literalmente uma sequência contínua de bytes mapeados por uma tabela de codificação, como o UTF-8.
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                                                {[
                                                    { ext: '.txt', desc: 'Arquivo de texto genérico', icon: FileText },
                                                    { ext: '.md Markdown', desc: 'Arquivo de texto com marcações simples. ', icon: FileCode },
                                                    { ext: '.csv', desc: 'Estrutura de dados tabulares separados por vírgula', icon: FileSpreadsheet },
                                                    { ext: '.json', desc: 'Guardar e trocar dados estruturados entre sites e aplicativos', icon: FileJson },
                                                    { ext: '.xml', desc: 'Organizar e transportar dados em sistemas complexos', icon: FileCode },
                                                    { ext: '.log', desc: 'Usado por programas para registrar Avisos/Erros do sistema ', icon: Terminal },
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-black p-2.5 rounded border border-slate-800 flex items-center gap-2 group/item hover:border-cyan-500/30 transition-colors cursor-default">
                                                        <item.icon className="w-4 h-4 text-cyan-500 shrink-0 group-hover/item:scale-110 transition-transform" />
                                                        <div>
                                                            <span className="font-mono font-bold text-cyan-400 text-xs block">{item.ext}</span>
                                                            <span className="text-[10px] text-slate-500 leading-none">{item.desc}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="bg-black p-4 rounded-xl border border-slate-800 mt-auto">
                                                <strong className="text-cyan-400 font-mono text-xs block mb-2">.py / .html / .jsx</strong>
                                                <p className="text-xs text-slate-400 leading-relaxed text-justify">
                                                    <strong className="text-slate-300">Códigos-fonte.</strong> No nível do disco, eles contêm apenas os bytes da formatação estrutural ou de marcação. É o navegador do cliente (a engine de renderização) que lê esses bytes, constrói a árvore do DOM e "pinta" a tela.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Texto Formatado & Segurança */}
                                        <div className="flex flex-col gap-6">
                                            <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-slate-800 flex-1 hover:border-purple-900/50 transition-colors">
                                                <h4 className="font-bold text-white flex items-center gap-2 mb-3">
                                                    <Layers className="text-purple-400 w-5 h-5" /> Texto Formatado (Rich Text)
                                                </h4>
                                                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                                    Ao contrário do texto puro, o texto formatado possui camadas complexas de estruturação:
                                                </p>
                                                <div className="space-y-3">
                                                    <div className="bg-black p-4 rounded-xl border border-slate-800 group hover:border-purple-500/30 transition-colors">
                                                        <strong className="text-purple-400 font-mono text-sm block mb-1">.docx (Word)</strong>
                                                        <p className="text-xs text-slate-400 text-justify">Não são arquivos de texto simples. Na verdade, um .docx é um contêiner compactado (um arquivo .zip disfarçado). Se você alterar a extensão para .zip e descompactá-lo, encontrará uma estrutura complexa de pastas contendo arquivos XML que ditam a formatação, além de mídias embutidas.</p>
                                                    </div>
                                                    <div className="bg-black p-4 rounded-xl border border-slate-800 group hover:border-purple-500/30 transition-colors">
                                                        <strong className="text-purple-400 font-mono text-sm block mb-1">.pdf (PDF)</strong>
                                                        <p className="text-xs text-slate-400 text-justify">São essencialmente linguagens de descrição de página baseadas em vetores e texto, derivadas do PostScript.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-[#0f0505] p-5 rounded-2xl border border-red-900/50 flex gap-4 items-start relative overflow-hidden group">
                                                <div className="absolute right-0 top-0 p-2 opacity-5 group-hover:scale-110 transition-transform">
                                                    <ShieldAlert className="w-20 h-20 text-red-500" />
                                                </div>
                                                <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 relative z-10" />
                                                <div className="relative z-10">
                                                    <h4 className="font-bold text-red-500 text-xs uppercase mb-1 tracking-widest">Ótica de Segurança</h4>
                                                    <p className="text-xs text-red-200/70 leading-relaxed text-justify">
                                                        É exatamente por causa dessa estrutura complexa que arquivos <code className="text-red-400 bg-red-950/50 px-1 rounded font-mono">.docx</code> e <code className="text-red-400 bg-red-950/50 px-1 rounded font-mono">.pdf</code> são vetores clássicos de infecção. O atacante não esconde o malware no texto em si, mas sim nas macros ou explorando vulnerabilidades dos motores de renderização XML do software que tenta ler o arquivo.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5.2 IMAGENS */}
                                <div className="space-y-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-emerald-400 flex items-center gap-3">
                                        <ImageIcon className="w-6 h-6" /> 5.2 - O Armazenamento Visual (Imagens)
                                    </h3>
                                    <p className="text-slate-400 text-sm">O armazenamento visual divide-se em duas lógicas matemáticas fundamentais: Vetorial e Raster.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        {/* Lógica 1: Vetorial */}
                                        <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-emerald-900/50 transition-colors flex flex-col">
                                            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                                                <Maximize className="text-emerald-400 w-5 h-5" /> Lógica 1: Imagens Vetoriais
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-6 leading-relaxed text-justify flex-1">
                                                Em vez de desenhar a imagem, o arquivo armazena instruções e fórmulas matemáticas (pontos, linhas, curvas, formas geométricas e coordenadas).
                                            </p>

                                            <ul className="text-xs text-slate-300 space-y-3 mb-6">
                                                <li className="flex gap-3">
                                                    <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
                                                    <span><strong className="text-white block mb-1">Vantagem (Zoom):</strong> Se você der um zoom infinito, não há perda de qualidade, pois o computador apenas recalcula a equação da imagem em tempo real.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <Eye className="w-4 h-4 text-emerald-500 shrink-0" />
                                                    <span><strong className="text-white block mb-1">Uso principal:</strong> Logotipos, ícones, tipografia e ilustrações digitais (muito usado em interfaces web).</span>
                                                </li>
                                            </ul>

                                            <div className="bg-black p-5 rounded-xl border border-slate-800 mt-auto">
                                                <span className="text-xs text-slate-500 uppercase tracking-widest block mb-3 font-bold">Formatos Padrão</span>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {['.svg', '.ai', '.eps', '.pdf (vetor)', '.cdr'].map(ext => (
                                                        <span key={ext} className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/20 border border-emerald-900/50 px-2 py-1 rounded">
                                                            {ext}
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
                                                    <strong className="text-white">Curiosidade:</strong> O formato .svg (Scalable Vector Graphics) é, na verdade, um arquivo de texto puro escrito em XML.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Lógica 2: Raster */}
                                        <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-blue-900/50 transition-colors flex flex-col">
                                            <h4 className="font-bold text-white flex items-center gap-2 mb-4">
                                                <ImageIcon className="text-blue-400 w-5 h-5" /> Lógica 2: Raster (Bitmap/Pixel)
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-6 leading-relaxed text-justify">
                                                Esqueça a tela do seu computador e pense nela como um gigantesco tabuleiro de xadrez iluminado. Cada quadrado desse tabuleiro é um Pixel (Picture Element). Imagens Raster são matrizes gigantes desses pontos. A maioria das telas utiliza a síntese aditiva misturando essas três cores.
                                            </p>

                                            <div className="bg-black p-5 rounded-xl border border-slate-800 mb-6 flex-1">
                                                <p className="text-xs text-slate-400 uppercase tracking-widest mb-4 font-bold">Modelo RGB True Color (24-bit)</p>
                                                <p className="text-xs text-slate-300 mb-4">Cada canal de cor recebe exatamente <strong className="text-white bg-slate-900 px-1 rounded">1 Byte (8 bits)</strong> de espaço, gerando intensidades de 0 a 255:</p>

                                                <div className="space-y-2 mb-5">
                                                    <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                                                        <span className="text-red-500 font-bold tracking-wider">RED</span>
                                                        <span className="font-mono text-slate-400">256 intensidades</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                                                        <span className="text-green-500 font-bold tracking-wider">GREEN</span>
                                                        <span className="font-mono text-slate-400">256 intensidades</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-xs">
                                                        <span className="text-blue-500 font-bold tracking-wider">BLUE</span>
                                                        <span className="font-mono text-slate-400">256 intensidades</span>
                                                    </div>
                                                </div>

                                                <div className="bg-slate-900/50 p-3 rounded-lg text-center border border-slate-800/50">
                                                    <span className="text-[10px] text-slate-500 uppercase block mb-1">Cores possíveis por pixel</span>
                                                    <span className="font-mono text-white text-sm">256 &times; 256 &times; 256 = <span className="text-blue-400 font-bold">16.777.216</span></span>
                                                </div>
                                            </div>

                                            <div className="bg-blue-950/20 p-4 rounded-xl border-l-4 border-blue-500 text-xs text-slate-300 leading-relaxed text-justify mt-auto">
                                                Como cada pixel exige 3 bytes de memória, o peso cresce rápido. Uma foto Full HD (1920 &times; 1080) possui cerca de 2 milhões de pixels:<br />
                                                <span className="block mt-2 font-mono text-blue-300 font-bold">2.073.600 px &times; 3 bytes = ~6.2 MB</span>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Bloco de Compressão e Forense */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800/80">

                                        {/* Compressão */}
                                        <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                                <Network className="w-5 h-5 text-cyan-400" /> Compressão: O Milagre da Engenharia
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-6 text-justify">
                                                Se toda imagem fosse salva crua (RAW/Bitmap) com 6 MB, a internet entraria em colapso. Por isso, aplicam-se algoritmos matemáticos:
                                            </p>
                                            <div className="space-y-4">
                                                <div className="bg-black p-5 rounded-xl border border-slate-800 hover:border-cyan-900/50 transition-colors">
                                                    <strong className="text-cyan-400 text-sm block mb-2 font-mono">Lossless (Sem Perda - ex: PNG)</strong>
                                                    <p className="text-xs text-slate-400 text-justify leading-relaxed">O algoritmo procura repetições. Se há 500 pixels perfeitamente brancos em sequência, em vez de anotar o valor 500 vezes, ele anota: "Repita o branco 500 vezes". A imagem original é reconstruída com 100% de fidelidade.</p>
                                                </div>
                                                <div className="bg-black p-5 rounded-xl border border-slate-800 hover:border-cyan-900/50 transition-colors">
                                                    <strong className="text-cyan-400 text-sm block mb-2 font-mono">Lossy (Com Perda - ex: JPEG)</strong>
                                                    <p className="text-xs text-slate-400 text-justify leading-relaxed">Baseado nas falhas da visão humana. Nossos olhos são péssimos em notar pequenas variações de tom em áreas complexas. O JPEG aplica uma operação chamada Transformada Discreta de Cosseno (DCT) para descartar detalhes invisíveis, reduzindo uma foto de 6 MB para meros 300 KB.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Forense e Esteganografia */}
                                        <div className="bg-red-950/10 p-6 md:p-8 rounded-2xl border border-red-900/30 flex flex-col relative overflow-hidden group hover:bg-red-950/20 transition-colors">
                                            {/* Elemento gráfico de fundo */}
                                            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                                <ShieldAlert className="w-48 h-48 text-red-500" />
                                            </div>

                                            <h4 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2 relative z-10 uppercase tracking-widest">
                                                <ShieldAlert className="w-5 h-5" /> O Olhar Forense
                                            </h4>
                                            <p className="text-red-400/80 font-mono text-xs mb-6 relative z-10">Esteganografia e o LSB</p>

                                            <div className="space-y-4 text-sm text-slate-300 leading-relaxed text-justify relative z-10">
                                                <p>
                                                    Na matriz RGB, se você alterar apenas o bit menos significativo — o <strong className="text-white bg-black px-1.5 py-0.5 rounded border border-slate-800">LSB (Least Significant Bit)</strong> — do byte azul de um pixel, a intensidade da cor mudará imperceptivelmente (ex: de 130 para 131). O olho humano é incapaz de notar a diferença.
                                                </p>

                                                <div className="bg-[#050101] p-5 rounded-xl border-l-4 border-red-600 shadow-inner mt-4">
                                                    <p className="text-red-200/90 mb-3">
                                                        Contudo, essa matemática permite que atacantes escondam payloads inteiros de ransomwares ou executem exfiltração de dados dentro de fotos aparentemente inofensivas. Para a rede e para o sistema operacional, a foto continua perfeitamente válida.
                                                    </p>
                                                    <p className="text-red-400 font-bold text-xs uppercase tracking-widest border-t border-red-900/50 pt-3">
                                                        Contramedida: O Blue Team precisa aplicar técnicas de file carving para detectar anomalias na entropia do arquivo.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>



                                </div>



                            </div>

                            {/* ========================================================================= */}
                            {/* 5.3 ARMAZENAMENTO DE VÍDEO (O TERROR DAS REDES)                           */}
                            {/* ========================================================================= */}


                            {/* TÍTULO */}
                            <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 flex items-center gap-3">
                                <Video className="w-8 h-8 text-emerald-500 shrink-0" />
                                5.3. Como os Vídeos são Armazenados
                                <span className="text-sm font-normal text-slate-500 hidden md:inline-block ml-2 uppercase tracking-widest">(O Terror das Redes)</span>
                            </h3>

                            {/* INTRODUÇÃO E O PROBLEMA DOS 3 GBPS */}
                            <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-9 items-center hover:border-red-900/50 transition-colors group">
                                <div className="flex-1 space-y-4">
                                    <p className="text-sm md:text-base text-slate-300 leading-relaxed text-justify">
                                        O vídeo é o "chefe final" da representação digital e o <strong>maior consumidor de banda das redes modernas</strong> (Netflix, YouTube e Twitch representam a maior parte do tráfego global). Ele é, na prática, a junção de Imagens (Frames) + Áudio + Sincronização Temporal. Mas esconde o maior desafio da Engenharia de Redes.
                                    </p>
                                    <div className="bg-red-950/20 p-5 rounded-xl border border-red-900/30">
                                        <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4" /> O Colapso Matemático
                                        </h4>
                                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed text-justify">
                                            Imagine um vídeo em resolução Full HD rodando a 60 FPS (quadros por segundo). Se não houvesse compressão, cada segundo de vídeo consumiria cerca de <strong className="text-red-400">3 Gbps de largura de banda</strong> — um tráfego capaz de derrubar a maioria dos switches corporativos instantaneamente.
                                        </p>
                                    </div>
                                </div>

                                {/* Ícone Gigante Decorativo */}
                                <div className="shrink-0 p-6 bg-red-950/10 rounded-full border border-red-900/20 group-hover:scale-110 transition-transform duration-500">
                                    <Activity className="w-16 h-16 text-red-500/50" />
                                </div>
                            </div>

                            {/* SOLUÇÃO: CODECS E COMPRESSÃO INTERQUADROS */}
                            <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800">
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Layers className="text-cyan-400 w-5 h-5" /> A Solução: Compressão Interquadros
                                </h4>
                                <p className="text-sm text-slate-300 leading-relaxed mb-8 text-justify">
                                    A engenharia resolveu isso criando Codecs (como H.264, EVC/H.265 e AV1). Em vez de trafegar 60 fotos inteiras por segundo, o algoritmo envia apenas um quadro mestre (I-Frame). Para os 59 quadros seguintes, o vídeo trafega apenas os <strong>pixels que mudaram</strong> (P-Frames e B-Frames).
                                </p>

                                {/* Representação Visual dos Frames */}
                                <div className="bg-black p-6 md:p-8 rounded-xl border border-slate-800 flex items-center justify-between gap-3 md:gap-4 overflow-x-auto custom-scrollbar w-full">

                                    {/* I-Frame */}
                                    <div className="bg-emerald-950/40 border-2 border-emerald-500/50 p-4 rounded-lg min-w-[110px] flex-1 flex flex-col items-center shadow-[0_0_15px_rgba(16,185,129,0.15)] relative">
                                        <div className="absolute -top-3 bg-emerald-500 text-black text-[9px] font-bold px-3 py-0.5 rounded-full uppercase shadow-md">Master</div>
                                        <span className="text-emerald-400 font-bold text-lg md:text-xl mt-1">I-Frame</span>
                                        <span className="text-[10px] md:text-xs text-emerald-200/60 mt-1 text-center leading-tight">Foto Inteira<br />(Intra-coded)</span>
                                    </div>

                                    <ArrowRight className="text-slate-600 shrink-0 w-4 h-4 md:w-6 md:h-6" />

                                    {/* P-Frame 1 */}
                                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg min-w-[90px] flex-1 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
                                        <span className="text-slate-300 font-bold text-base md:text-lg">P-Frame</span>
                                        <span className="text-[10px] md:text-xs text-slate-500 mt-1 text-center leading-tight">Apenas<br />Movimento</span>
                                    </div>

                                    <ArrowRight className="text-slate-600 shrink-0 w-4 h-4 md:w-6 md:h-6" />

                                    {/* B-Frame */}
                                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg min-w-[90px] flex-1 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
                                        <span className="text-slate-400 font-bold text-base md:text-lg">B-Frame</span>
                                        <span className="text-[10px] md:text-xs text-slate-500 mt-1 text-center leading-tight">Fluxo<br />Bidirec.</span>
                                    </div>

                                    <ArrowRight className="text-slate-600 shrink-0 w-4 h-4 md:w-6 md:h-6" />

                                    {/* P-Frame 2 */}
                                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg min-w-[90px] flex-1 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
                                        <span className="text-slate-300 font-bold text-base md:text-lg">P-Frame</span>
                                        <span className="text-[10px] md:text-xs text-slate-500 mt-1 text-center leading-tight">Apenas<br />Movimento</span>
                                    </div>

                                    <ArrowRight className="text-slate-600 shrink-0 w-4 h-4 md:w-6 md:h-6" />

                                    {/* I-Frame 2 (Cena mudou) */}
                                    <div className="bg-amber-950/40 border-2 border-amber-500/50 p-4 rounded-lg min-w-[110px] flex-1 flex flex-col items-center shadow-[0_0_15px_rgba(245,158,11,0.15)] relative">
                                        <div className="absolute -top-3 bg-amber-500 text-black text-[9px] font-bold px-3 py-0.5 rounded-full uppercase shadow-md whitespace-nowrap">Corte de Cena</div>
                                        <span className="text-amber-400 font-bold text-lg md:text-xl mt-1">I-Frame</span>
                                        <span className="text-[10px] md:text-xs text-amber-200/60 mt-1 text-center leading-tight">Nova Foto<br />Inteira</span>
                                    </div>

                                </div>
                            </div>

                            {/* ALERTA DE ARQUITETURA E REDES */}
                            <div className="bg-blue-950/20 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-2xl relative overflow-hidden">
                                <Globe className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-blue-500/5 pointer-events-none" />
                                <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2 relative z-10">
                                    <Network className="w-5 h-5" /> Arquitetura e Redes (O Pico de Jitter)
                                </h4>
                                <p className="text-sm text-slate-300 leading-relaxed text-justify relative z-10">
                                    Se um vídeo tem pouco movimento (alguém falando num fundo estático), o tráfego de rede é minúsculo. Mas quando a cena muda bruscamente (transição de câmera ou "explosão de confetes"), o algoritmo falha em prever a mudança e injeta um novo I-Frame gigantesco.
                                </p>
                                <p className="text-sm text-slate-300 leading-relaxed text-justify mt-3 relative z-10">
                                    É nesse exato milissegundo que ocorrem os <strong>picos (bursts) de consumo de banda</strong>, o jitter sobe e o engenheiro de redes precisa garantir que as regras de QoS (Quality of Service) e os Load Balancers estejam bem desenhados para que a aplicação não trave.
                                </p>
                            </div>

                            {/* 1. CODEC VS CONTAINER */}
                            <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-emerald-900/50 transition-colors">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                                    1. A Ilusão do Arquivo: Codec vs. Container
                                </h4>
                                <p className="text-sm text-slate-400 mb-6 text-justify leading-relaxed">
                                    Na engenharia de software, é crucial separar Codec de Container. O H.264 e o AV1 são <strong>Codecs</strong> (a matemática da compressão). Mas um arquivo .mp4 ou .mkv é um <strong>Container</strong> (um multiplexador/MUX).

                                </p>

                                {/* Gráfico do Container */}
                                <div className="bg-black border-2 border-dashed border-slate-700 p-6 rounded-xl relative">
                                    <span className="absolute -top-3 left-6 bg-black px-2 text-xs font-mono text-slate-400 uppercase tracking-widest">Container .MP4 (A Caixa de Papelão)</span>

                                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center relative z-10">

                                        {/* Video Track */}
                                        <div className="bg-slate-900 border border-emerald-900/50 p-4 rounded-lg flex-1 w-full text-center">
                                            <strong className="text-emerald-400 block text-sm mb-1">Trilha de Vídeo</strong>
                                            <span className="text-[10px] text-slate-500 font-mono bg-black px-2 py-1 rounded border border-slate-800">Codec: H.264 / AV1</span>
                                        </div>

                                        {/* Sync/PTS */}
                                        <div className="hidden md:flex flex-col items-center justify-center">
                                            <Clock className="w-5 h-5 text-cyan-500 mb-1" />
                                            <span className="text-[9px] text-cyan-400 uppercase text-center leading-tight">PTS<br />(Sincronia)</span>
                                        </div>

                                        {/* Audio Track */}
                                        <div className="bg-slate-900 border border-blue-900/50 p-4 rounded-lg flex-1 w-full text-center">
                                            <strong className="text-blue-400 block text-sm mb-1">Trilhas de Áudio</strong>
                                            <span className="text-[10px] text-slate-500 font-mono bg-black px-2 py-1 rounded border border-slate-800">Codec: AAC / MP3</span>
                                        </div>

                                        {/* Sync/PTS */}
                                        <div className="hidden md:flex flex-col items-center justify-center">
                                            <Clock className="w-5 h-5 text-cyan-500 mb-1" />
                                            <span className="text-[9px] text-cyan-400 uppercase text-center leading-tight">PTS<br />(Sincronia)</span>
                                        </div>

                                        {/* Subtitle Track */}
                                        <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg flex-1 w-full text-center">
                                            <strong className="text-slate-300 block text-sm mb-1">Legendas</strong>
                                            <span className="text-[10px] text-slate-500 font-mono bg-black px-2 py-1 rounded border border-slate-800">Formato: SRT</span>
                                        </div>

                                    </div>
                                </div> <br />
                                <p className="text-sm text-slate-400 mb-6 text-justify leading-relaxed">
                                    A referência da "caixa de papelão" é uma metáfora visual muito usada na engenharia de software para explicar a diferença fundamental entre Container (Multiplexador) e Codec.

                                    Muitos profissionais de TI confundem as coisas achando que .mp4 ou .mkv são formatos de vídeo. Eles não são. Eles não contêm imagens. Eles são, literalmente, apenas "caixas organizadoras".
                                </p>



                                {/* 1.2 CODEC VS CONTAINER (A CAIXA DE PAPELÃO) */}
                                <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg md:text-xl">
                                    <Package className="w-6 h-6 text-emerald-500 shrink-0" />
                                    1.2 - A Caixa de Papelão (O Container / Formato do Arquivo)
                                </h4>

                                <div className="space-y-4 text-sm text-slate-300 leading-relaxed text-justify mb-8">
                                    <p>
                                        Formatos como <strong>.MP4, .MKV (Matroska) ou .AVI</strong> são as caixas de papelão estruturadas.
                                    </p>
                                    <p>
                                        A caixa, por si só, não sabe o que é uma imagem ou o que é um som. A única função dela é ter divisórias (chamadas de <em>Tracks</em> ou <em>Streams</em>) e organizar coisas dentro dela para o transporte seguro.
                                    </p>
                                    <p>
                                        Dentro dessa caixa (.mkv, por exemplo), nós colocamos vários itens separados:
                                    </p>
                                </div>

                                {/* Visualização dos Itens na "Caixa" */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl flex flex-col items-center text-center hover:border-emerald-500/50 transition-colors shadow-inner">
                                        <Video className="w-6 h-6 text-emerald-400 mb-3" />
                                        <strong className="text-white text-xs mb-2 uppercase tracking-widest">Item 1</strong>
                                        <span className="text-[11px] text-slate-400 leading-tight">Um arquivo contendo as imagens do filme.</span>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl flex flex-col items-center text-center hover:border-blue-500/50 transition-colors shadow-inner">
                                        <Speaker className="w-6 h-6 text-blue-400 mb-3" />
                                        <strong className="text-white text-xs mb-2 uppercase tracking-widest">Item 2</strong>
                                        <span className="text-[11px] text-slate-400 leading-tight">Um arquivo contendo o áudio em Português.</span>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl flex flex-col items-center text-center hover:border-blue-500/50 transition-colors shadow-inner">
                                        <Speaker className="w-6 h-6 text-blue-400 mb-3" />
                                        <strong className="text-white text-xs mb-2 uppercase tracking-widest">Item 3</strong>
                                        <span className="text-[11px] text-slate-400 leading-tight">Um arquivo contendo o áudio em Inglês.</span>
                                    </div>

                                    <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl flex flex-col items-center text-center hover:border-slate-400/50 transition-colors shadow-inner">
                                        <FileText className="w-6 h-6 text-slate-300 mb-3" />
                                        <strong className="text-white text-xs mb-2 uppercase tracking-widest">Item 4</strong>
                                        <span className="text-[11px] text-slate-400 leading-tight">Um arquivo de texto contendo as legendas.</span>
                                    </div>
                                </div>

                                {/* Manual / Metadados (MUX) */}
                                <div className="bg-[#050101] p-5 md:p-6 rounded-xl border-l-4 border-cyan-500 shadow-inner flex flex-col md:flex-row gap-5 items-start relative overflow-hidden">
                                    {/* Ícone de fundo transparente decorativo */}
                                    <Clock className="absolute -right-4 -bottom-4 w-32 h-32 text-cyan-500/10 pointer-events-none" />

                                    <FileJson className="w-6 h-6 text-cyan-400 shrink-0 mt-1 relative z-10" />

                                    <div className="relative z-10">
                                        <p className="text-sm text-slate-300 leading-relaxed text-justify mb-4">
                                            Além disso, a caixa vem com um <strong>"Manual de Instruções" (Metadata)</strong> impresso na tampa. Esse manual usa marcações de tempo (Timestamps — PTS/DTS) para avisar o reprodutor de vídeo:
                                        </p>
                                        <div className="bg-cyan-950/20 p-4 rounded border border-cyan-900/30 mb-4">
                                            <p className="text-sm text-cyan-200/90 italic text-justify">
                                                "O minuto 02:15 do vídeo de imagem precisa ser tocado junto com o minuto 02:15 do áudio em português e a linha 42 da legenda".
                                            </p>
                                        </div>
                                        <p className="text-xs text-cyan-400 font-mono uppercase tracking-widest font-bold">
                                            Isso é o que a engenharia chama de Multiplexação (MUX).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 1.3- A FORMA DE DOBRAR A ROUPA (O CODEC) */}
                            <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-purple-900/50 transition-colors mt-8">
                                <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg md:text-xl">
                                    <Minimize2 className="w-6 h-6 text-purple-500 shrink-0" />
                                    1.3 - A Forma de Dobrar a Roupa (O Codec)
                                </h4>

                                <div className="space-y-4 text-sm text-slate-300 leading-relaxed text-justify mb-8">
                                    <p>
                                        Se a caixa de papelão é o arquivo .mp4, os Codecs (H.264, H.265, AV1 para vídeo; MP3, AAC, FLAC para áudio) são os <strong>algoritmos de compressão</strong>, ou seja, "como você dobra as coisas para elas caberem na caixa".
                                    </p>

                                    <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 flex items-start gap-4 shadow-inner">
                                        <Package className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
                                        <p>
                                            Um vídeo sem compressão é tão gigante que seria como tentar colocar um guarda-roupa montado dentro da caixa. O algoritmo H.264 é a matemática que desmonta o guarda-roupa, achata tudo e soca lá dentro com eficiência.
                                        </p>
                                    </div>
                                </div>

                                {/* O FALSO ERRO (CENÁRIO DIAGNÓSTICO) */}
                                <div className="bg-[#050101] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
                                    {/* Brilho decorativo no topo direito */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 blur-3xl pointer-events-none"></div>

                                    <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center gap-3 relative z-10">
                                        <ShieldAlert className="w-5 h-5 text-amber-500" />
                                        <span className="text-white font-bold text-sm tracking-wide uppercase">O Falso Erro do "Meu vídeo não abre"</span>
                                    </div>

                                    <div className="p-5 md:p-6 space-y-6 relative z-10">
                                        <p className="text-sm text-slate-400 text-justify leading-relaxed">
                                            Com essa analogia em mente, você consegue diagnosticar rapidamente um problema clássico: <strong className="text-slate-200">O usuário baixa um arquivo .mp4, tenta abrir na TV ou no PC, e sai som, mas a tela fica preta.</strong>
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* O Usuário */}
                                            <div className="bg-slate-900 p-5 rounded-lg border border-slate-700 relative">
                                                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-2 border-b border-slate-800 pb-1">
                                                    O Usuário Leigo
                                                </span>
                                                <p className="text-sm text-slate-300 italic">
                                                    "Mas a minha TV suporta .mp4!"
                                                </p>
                                            </div>

                                            {/* O Engenheiro */}
                                            <div className="bg-purple-950/20 p-5 rounded-lg border border-purple-500/30 relative shadow-inner">
                                                <span className="text-[10px] uppercase font-mono text-purple-400 block mb-2 flex items-center gap-2 border-b border-purple-900/50 pb-1">
                                                    <Terminal className="w-3 h-3" /> O Engenheiro
                                                </span>
                                                <p className="text-sm text-purple-200/90 leading-relaxed text-justify">
                                                    "Sim, a sua TV sabe abrir a caixa de papelão (.mp4). Ela conseguiu achar a fita de áudio lá dentro e tocar. Mas quando ela puxou o vídeo, viu que ele foi comprimido (dobrado) usando o codec <strong>H.265 (HEVC)</strong>. O processador da sua TV é antigo e só sabe desdobrar (decodificar) arquivos <strong>H.264</strong>. O problema não é a caixa, é a forma como o conteúdo lá dentro foi empacotado."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* SEGURANÇA OFENSIVA: SIDE-CHANNEL ATTACKS */}
                            <div className="bg-[#0f0505] p-6 md:p-8 rounded-2xl border border-red-900/50 relative overflow-hidden group">
                                {/* Fundo de grade vermelha */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(225,29,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(225,29,72,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                                <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2 text-lg relative z-10">
                                    <ShieldAlert className="w-6 h-6" /> Visão Ofensiva: Side-Channel Attacks
                                </h4>

                                <div className="space-y-4 text-sm text-slate-300 leading-relaxed text-justify relative z-10">
                                    <p>
                                        Este é um conceito de nível Advanced. Imagine que um usuário está assistindo a um vídeo em um túnel perfeitamente criptografado (VPN ou TLS 1.3). O conteúdo (payload) está invisível para um atacante interceptando a rede, certo? <strong>Sim, mas os metadados vazam informações semânticas através da compressão!</strong>
                                    </p>

                                    <p>
                                        Como os vídeos usam Taxa de Bits Variável (VBR) por causa dos I-Frames e P-Frames, o tamanho dos pacotes de rede flutua acompanhando o movimento da cena. Seja um vídeo <em>V</em> representado por uma sequência temporal de tamanhos de quadros. A criptografia oculta os bytes, mas não oculta o <strong>tamanho</strong> do pacote transmitido.
                                    </p>


                                    <div className="bg-red-950/40 p-4 rounded-lg border-l-4 border-red-500">
                                        <p className="text-sm text-red-200">
                                            O atacante não quebrou a criptografia, mas através de <strong>Traffic Analysis (Ataque de Canal Lateral)</strong>, ele deduz exatamente qual filme o alvo está assistindo, apenas medindo o tamanho dos I-Frames (cenas de ação) e P-Frames (cenas calmas).
                                        </p>
                                    </div>

                                    {/* Gráfico Visual do Ataque VBR */}
                                    <div className="my-6 bg-black p-6 md:p-8 rounded-xl border border-red-900/50 shadow-inner">

                                        {/* Título Centralizado */}
                                        <div className="text-xs md:text-sm font-mono text-red-400/80 mb-12 uppercase tracking-widest text-center">
                                            Análise de Tráfego Criptografado (Red Team)
                                        </div>

                                        {/* Área do Gráfico (Aumentada para h-48) */}
                                        <div className="relative w-full h-48 flex items-end justify-between gap-1 md:gap-2 border-b-2 border-l-2 border-red-900/50 pt-10 px-2 pb-0">

                                            {/* Eixo Y (Tamanho) */}
                                            <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] md:text-xs font-mono text-red-500/50 uppercase tracking-widest">
                                                Tamanho
                                            </div>

                                            {/* Gráfico de Barras representando pacotes */}
                                            {[20, 30, 25, 90, 35, 20, 25, 100, 40, 30, 20, 85, 25, 20].map((h, i) => (
                                                <div key={i} className="relative w-full bg-red-500/80 rounded-t-sm transition-all" style={{ height: `${h}%` }}>

                                                    {/* Legenda I-Frame (Maior e Centralizada) */}
                                                    {h > 80 && (
                                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs md:text-sm text-red-400 font-mono font-bold text-center leading-tight whitespace-nowrap">
                                                            I-Frame<br />
                                                            <span className="text-[10px] md:text-xs font-normal text-red-300">(Ação)</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}

                                            {/* Eixo X (Tempo) */}
                                            <div className="absolute -bottom-6 right-0 text-[10px] md:text-xs font-mono text-red-500/50 uppercase tracking-widest">
                                                Tempo (s) ➔
                                            </div>
                                        </div>

                                        {/* Rodapé Maior */}
                                        <p className="text-sm md:text-base text-slate-400 mt-12 text-center italic leading-relaxed">
                                            "O atacante mapeia os picos e vales do tráfego e cruza com um banco de dados de filmes conhecidos."
                                        </p>
                                    </div>
                                </div>

                                {/* 3. VISÃO OFENSIVA (VULNERABILIDADE DA CAIXA) */}

                                {/* Efeitos de Fundo */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/10 transition-colors"></div>
                                <ShieldAlert className="absolute -right-6 -bottom-6 w-32 h-32 text-red-500/10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                                <h4 className="font-bold text-red-500 mb-6 flex items-center gap-3 text-lg md:text-xl relative z-10">
                                    <Lock className="w-6 h-6 shrink-0" />
                                    A Vulnerabilidade da "Caixa"
                                </h4>

                                <div className="space-y-6 relative z-10">
                                    <p className="text-sm text-slate-300 leading-relaxed text-justify">
                                        Em cibersegurança, atacantes amam containers porque eles têm regras de <strong className="text-red-400">Parsing (leitura)</strong> muito complexas. Um arquivo container robusto (como o <code>.mkv</code>) não carrega apenas áudio e vídeo; ele permite embutir uma infinidade de objetos dentro da "caixa".
                                    </p>

                                    {/* Visualização do Payload Oculto */}
                                    <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-xl shadow-inner">
                                        <span className="text-red-400 font-mono text-[10px] uppercase tracking-widest block mb-3 font-bold">Payloads Ocultos Suportados no Container</span>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="bg-slate-950 border border-slate-800 text-slate-400 px-3 py-1.5 rounded text-xs font-mono flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-slate-500" /> Fontes (Tipografia)
                                            </span>
                                            <span className="bg-slate-950 border border-slate-800 text-red-400 px-3 py-1.5 rounded text-xs font-mono flex items-center gap-2 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                                                <FileCode className="w-4 h-4 text-red-500" /> Scripts Ocultos
                                            </span>
                                            <span className="bg-slate-950 border border-slate-800 text-slate-400 px-3 py-1.5 rounded text-xs font-mono flex items-center gap-2">
                                                <Layers className="w-4 h-4 text-slate-500" /> PDFs e Anexos
                                            </span>
                                        </div>
                                    </div>

                                    {/* O Momento Crítico da Infecção */}
                                    <div className="bg-black p-5 md:p-6 rounded-xl border-l-4 border-red-600 shadow-lg flex flex-col md:flex-row gap-5 items-center">
                                        <div className="p-3 bg-red-950/30 rounded-full border border-red-900/50 shrink-0">
                                            <Skull className="w-8 h-8 text-red-500" />
                                        </div>
                                        <p className="text-sm text-red-200/90 leading-relaxed text-justify flex-1">
                                            Se o player de vídeo (como VLC ou Windows Media Player) for ingênuo ao abrir a caixa de papelão para ver o que tem dentro sem <strong>sanitizar os dados</strong>, o arquivo malicioso pode causar um <strong className="text-red-500 bg-red-950/50 px-1 rounded">Transbordamento de Memória</strong>. O resultado? O malware é executado silenciosamente em <em>background</em> no sistema enquanto o filme toca normalmente.
                                        </p>
                                    </div>
                                </div> <br />


                                {/* FUZZING EM ÁRVORES DE METADADOS */}
                                <div className="bg-[#0a0a0a] p-6 md:p-8 rounded-2xl border border-slate-800 hover:border-amber-900/50 transition-colors">
                                    <h4 className="font-bold text-amber-500 mb-4 flex items-center gap-2 text-lg">
                                        <Terminal className="w-6 h-6" /> Fuzzing em Árvores de Metadados (Atoms/Boxes)
                                    </h4>

                                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                                        <div className="flex-1 space-y-4 text-sm text-slate-300 leading-relaxed text-justify">
                                            <p>
                                                Arquivos MP4 são estruturados em blocos hierárquicos chamados <strong>Atoms (ou Boxes)</strong>, seguindo uma lógica TLV (Type-Length-Value). Se um Atom "pai" diz que tem tamanho 100, mas os sub-atoms "filhos" dentro dele somam tamanho 150, os parsers de vídeo mal programados perdem a referência de ponteiro de memória tentando ler a estrutura.
                                            </p>
                                            <p className="text-amber-200/80 bg-amber-950/20 p-4 rounded-xl border border-amber-900/30">
                                                É exatamente assim que nasceram pragas históricas do mobile, como o <strong>Stagefright</strong> no Android: atacantes mandavam um vídeo .mp4 malicioso por MMS que explorava o parser do sistema antes mesmo do usuário dar o play.
                                            </p>
                                        </div>

                                        {/* Representação visual do Atom/Box quebrado */}
                                        <div className="w-full lg:w-72 bg-black border-2 border-slate-800 rounded-xl p-4 font-mono text-xs relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-2 opacity-20"><Activity className="w-16 h-16 text-amber-500" /></div>

                                            <div className="text-slate-500 mb-2">Estrutura MP4 (Hex)</div>

                                            {/* Parent Atom */}
                                            <div className="border border-slate-700 p-2 rounded mb-2 bg-slate-900">
                                                <div className="text-amber-400">Atom 'moov' <span className="text-slate-400 ml-2">Len: 100</span></div>

                                                {/* Child Atom (The Exploit) */}
                                                <div className="ml-4 mt-2 border border-red-900/50 bg-red-950/30 p-2 rounded relative">
                                                    <div className="absolute -left-3 top-1/2 w-3 h-[1px] bg-slate-700"></div>
                                                    <div className="text-red-400">Atom 'trak' <span className="text-red-300 font-bold ml-2">Len: 150 (OVERFLOW!)</span></div>
                                                    <div className="mt-2 text-[9px] text-red-500 bg-black p-1 rounded animate-pulse">
                                                        &gt; Memory pointer corrupted<br />
                                                        &gt; Arbitrary code execution...
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>



                    </div>


                </section>


                {/* Adicione as demais seções (Octal, Hexadecimal, Endianness, etc) seguindo a mesma estrutura semântica... */}

                {/*<section className="space-y-6 pt-8">
           <div className="text-center p-8 bg-slate-900 rounded-xl border border-slate-800 border-dashed">
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                [ Fim do Trecho de Demonstração ]
              </p>
              <p className="text-slate-400 mt-2 text-sm">
                A estrutura acima pode ser replicada para os blocos de Hexadecimal, Grandezas e Endianness.
              </p>
           </div>
        </section>*/}

            </article>
        </div>
    );
};

export default EngenhariaRedes;