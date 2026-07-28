import React from 'react';
import { Terminal, ShieldAlert, Cpu, Network, FileDigit, Database } from 'lucide-react';

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
            <article className="max-w-4xl mx-auto px-6 py-16 font-sans text-lg text-slate-300 leading-relaxed space-y-12">

                {/* Seção 1: História dos Sistemas Numéricos */}
                <section className="space-y-6">
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