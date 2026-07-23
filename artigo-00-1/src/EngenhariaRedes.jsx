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
          Engenharia de Redes e Segurança Cibernética
        </div>
        <div className="text-lg md:text-xl font-light text-slate-400 mb-14 z-10">
          Da Matemática Binária à Defesa em Profundidade.
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
        
        {/* Seção 1 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <Terminal className="text-emerald-500 w-6 h-6" />
            1. História dos Sistemas Numéricos
          </h2>
          <p>
            Neste capítulo, vamos entender como a humanidade deixou de contar nos dedos para traduzir o universo em impulsos elétricos de 0 e 1.
          </p>
          <p>
            A capacidade de contar, medir e registrar quantidades é uma das maiores conquistas da humanidade e contar nasceu junto com a civilização: quantificar rebanhos, delimitar terras, prever estações e organizar o comércio. Contudo, a forma de registrar essas quantidades evoluiu drasticamente. No entanto, para a engenharia de computação e a segurança cibernética, compreender sistemas numéricos não é apenas uma questão de aritmética: é entender como a eletricidade, a lógica e a informação se fundem para criar o mundo digital.
          </p>
          
          <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-800 mt-6 space-y-4">
            <h3 className="text-xl font-semibold text-emerald-400">O Sistema Aditivo (Ex: Egípcio e Romano)</h3>
            <p className="text-sm text-slate-400">
              Os primeiros sistemas acumulavam símbolos e valor independentemente da posição em que estão. No sistema romano, para representar o número 3, escreve-se III. Para 30, XXX. O grande problema desse modelo é a complexidade para realizar operações matemáticas simples e a ausência de um conceito crucial: o zero.
            </p>

            <h3 className="text-xl font-semibold text-emerald-400 mt-6">O Sistema Posicional (A Revolução Indo-Arábica)</h3>
            <p className="text-sm text-slate-400">
              A grande virada de chave da matemática foi a criação do sistema posicional, onde o valor de um algarismo depende diretamente da posição que ele ocupa no número. É aqui que nasce o conceito de Base (b).
            </p>
            <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 ml-2">
              <li>No número 235, o algarismo 2 vale duzentos, o algarismo 3 vale trinta, e o algarismo 5 vale apenas 5.</li>
              <li>A introdução do zero como um guardador de lugar posicional permitiu a criação de algoritmos para as operações fundamentais que hoje rodam em velocidades absurdas dentro de uma CPU.</li>
            </ul>
          </div>

          <div className="mt-8 bg-slate-900 border-l-4 border-emerald-500 p-6 rounded-r-lg shadow-lg">
            <h4 className="text-lg font-bold text-white mb-2">Fórmula Geral de Representação Posicional</h4>
            <p className="font-mono text-emerald-400 text-center text-xl my-4 bg-slate-950 py-3 rounded">
              N = &sum; (d<sub>i</sub> &times; b<sup>i</sup>)
            </p>
            <p className="text-sm text-slate-400">
              Onde <code className="text-emerald-300 bg-slate-800 px-1 rounded">d</code> é o dígito, <code className="text-emerald-300 bg-slate-800 px-1 rounded">b</code> é a base numérica e <code className="text-emerald-300 bg-slate-800 px-1 rounded">i</code> é a posição (começando do zero, da direita para a esquerda).
            </p>
          </div>
        </section>

        {/* Seção 2 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <Terminal className="text-emerald-500 w-6 h-6" />
            2. O Sistema Decimal (Base 10)
          </h2>
          <p>
            O sistema decimal é o nosso padrão cotidiano, a nossa língua nativa matemática utiliza dez símbolos. A escolha da base 10 não possui nenhuma razão matemática superior; é puramente biológica: nós temos 10 dedos nas mãos.
          </p>
          <ul className="list-none space-y-2 text-slate-400 bg-slate-900/30 p-4 rounded-lg border border-slate-800/50">
            <li><strong className="text-slate-200">Símbolos:</strong> &#123;0, 1, 2, 3, 4, 5, 6, 7, 8, 9&#125;</li>
            <li><strong className="text-slate-200">Decomposição (Ex: 1984):</strong></li>
            <li className="font-mono text-sm mt-2 ml-4">1984<sub>10</sub> = (1 &times; 10<sup>3</sup>) + (9 &times; 10<sup>2</sup>) + (8 &times; 10<sup>1</sup>) + (4 &times; 10<sup>0</sup>)</li>
          </ul>
        </section>

        {/* Seção 3 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <Terminal className="text-emerald-500 w-6 h-6" />
            3. O Sistema Binário (Base 2)
          </h2>
          <p>
            Se o sistema decimal é a linguagem dos humanos, o binário é o oxigênio dos computadores. Na eletrônica, não temos "dedos" para contar. Temos circuitos elétricos instáveis. É muito mais simples e robusto detectar apenas dois estados:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 border border-red-500/20 bg-red-500/5 rounded-lg">
              <h4 className="font-bold text-red-400 mb-1">Estado Baixo (Low)</h4>
              <p className="text-sm text-slate-400">Ausência de tensão. Representado pelo bit <strong>0</strong>.</p>
            </div>
            <div className="p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-lg">
              <h4 className="font-bold text-emerald-400 mb-1">Estado Alto (High)</h4>
              <p className="text-sm text-slate-400">Presença de tensão. Representado pelo bit <strong>1</strong>.</p>
            </div>
          </div>
        </section>

        {/* Seção 4: Sistema Octal */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <FileDigit className="text-emerald-500 w-6 h-6" />
            4. O Sistema Octal (Base 8)
          </h2>
          <p>
            O sistema octal utiliza a base 8: <code className="text-emerald-400 bg-slate-900 px-2 py-0.5 rounded">&#123;0, 1, 2, 3, 4, 5, 6, 7&#125;</code>[cite: 1]. Historicamente, ele foi muito utilizado nos primórdios da computação (como o PDP-8, nos mainframes da IBM e sistemas DEC) por uma razão matemática simples: permitia abreviar grupos de 3 bits de forma simples, já que 2³ = 8 é uma potência exata[cite: 1].
          </p>

          <div className="bg-slate-900/40 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-400 mb-2">
              <ShieldAlert className="w-5 h-5" />
              Conexão com Segurança e Sistemas (Linux)
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Embora tenha caído em desuso na representação geral de hardware puro, ele ainda é amplamente visto em sistemas baseados em Unix/Linux para permissões de arquivos via terminal[cite: 1]. A clássica permissão <code className="text-slate-200 bg-slate-800 px-1 rounded">chmod 755</code> é uma representação octal direta para três grupos de permissões mapeados de binários de 3 bits[cite: 1]:
            </p>
            <ul className="list-none space-y-2 text-sm font-mono text-slate-300 bg-slate-950 p-4 rounded border border-slate-800">
              <li><span className="text-emerald-400">7</span><sub>10</sub> = 111<sub>2</sub> (Leitura, Escrita e Execução - rwx)[cite: 1]</li>
              <li><span className="text-emerald-400">5</span><sub>10</sub> = 101<sub>2</sub> (Leitura e Execução - r-x)[cite: 1]</li>
            </ul>
          </div>
        </section>

        {/* Seção 5: Sistema Hexadecimal */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <Database className="text-emerald-500 w-6 h-6" />
            5. O Sistema Hexadecimal (Base 16)
          </h2>
          <p>
            O sistema hexadecimal é o melhor amigo do engenheiro de redes e do analista de segurança[cite: 1]. Escrever e ler longas sequências de binários é impraticável e altamente propenso a erros humanos[cite: 1]. O hexadecimal resolve isso oferecendo uma representação extremamente compacta: 16 é 2⁴, o que significa que cada dígito resume perfeitamente um grupo de 4 bits (um nibble)[cite: 1].
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><strong>Símbolos:</strong> Como o decimal só possui algarismos de 0 a 9, usamos letras maiúsculas para os valores de 10 a 15: <code className="text-emerald-400 bg-slate-900 px-1 rounded">&#123;0..9, A, B, C, D, E, F&#125;</code>[cite: 1].</li>
            <li><strong>Onde:</strong> A=10 | B=11 | C=12 | D=13 | E=14 | F=15[cite: 1].</li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800/50">
              <h4 className="font-bold text-slate-200 mb-2">Endereços MAC</h4>
              <p className="text-xs text-slate-400 font-mono">00:1A:2B:3C:4D:5E</p>
              <p className="text-xs text-slate-500 mt-1">48 bits em 12 caracteres hexadecimais[cite: 1].</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800/50">
              <h4 className="font-bold text-slate-200 mb-2">Endereços IPv6</h4>
              <p className="text-xs text-slate-400 font-mono break-all">2001:0db8:85a3:0000:0000:8a2e:0370:7334</p>
              <p className="text-xs text-slate-500 mt-1">128 bits estruturados em blocos[cite: 1].</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800/50">
              <h4 className="font-bold text-slate-200 mb-2">Forense e Malware</h4>
              <p className="text-xs text-slate-400">Dumps de RAM, payloads e cabeçalhos no Wireshark[cite: 1].</p>
            </div>
          </div>
        </section>

        {/* Seção 6: Métodos de Conversão */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <Network className="text-emerald-500 w-6 h-6" />
            6. Métodos de Conversão
          </h2>
          <p>
            Dominar subredes e análise de protocolos com conversões de cabeça ou rascunhos rápidos é um divisor de águas para engenheiros[cite: 1].
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">A. Decimal para Binário (Tabela de Pesos)</h3>
              <p className="text-sm text-slate-400 mb-4">O segredo para fazer rápido de cabeça: escreva as potências de 2 da direita para a esquerda e subtraia os maiores valores possíveis[cite: 1].</p>
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse border border-slate-800">
                  <thead>
                    <tr className="bg-slate-900 text-slate-300">
                      <th className="border border-slate-800 p-2">128</th>
                      <th className="border border-slate-800 p-2">64</th>
                      <th className="border border-slate-800 p-2">32</th>
                      <th className="border border-slate-800 p-2">16</th>
                      <th className="border border-slate-800 p-2 text-emerald-400">8</th>
                      <th className="border border-slate-800 p-2 text-emerald-400">4</th>
                      <th className="border border-slate-800 p-2">2</th>
                      <th className="border border-slate-800 p-2 text-emerald-400">1</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-slate-400 font-mono">
                      <td className="border border-slate-800 p-2">0</td>
                      <td className="border border-slate-800 p-2">0</td>
                      <td className="border border-slate-800 p-2">0</td>
                      <td className="border border-slate-800 p-2">0</td>
                      <td className="border border-slate-800 p-2 text-emerald-400 font-bold">1</td>
                      <td className="border border-slate-800 p-2 text-emerald-400 font-bold">1</td>
                      <td className="border border-slate-800 p-2">0</td>
                      <td className="border border-slate-800 p-2 text-emerald-400 font-bold">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-2 text-slate-500">Exemplo da conversão do número 13 para binário: 00001101[cite: 1].</p>
            </div>

            <div className="bg-slate-900/30 p-6 rounded-lg border border-red-900/30">
              <h3 className="flex items-center gap-2 text-lg font-bold text-red-400 mb-2">
                <ShieldAlert className="w-5 h-5" />
                Por que isso importa na Segurança? (Raw Data)
              </h3>
              <p className="text-sm text-slate-400">
                Na triagem de pacotes com o Tcpdump ou Wireshark, os dados chegam de forma bruta. Se o primeiro byte de um pacote IP começa com <code className="text-red-300 bg-red-900/30 px-1 rounded">0x45</code>, convertendo para binário temos 0100 e 0101[cite: 1].
                Os primeiros 4 bits (0100 = 4) indicam IPv4. Os 4 bits seguintes (0101 = 5) indicam o tamanho do cabeçalho (IHL): 20 bytes[cite: 1].
              </p>
            </div>
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
            1. Grandezas da Informação (O Hardware)
          </h2>
          <p>
            Hardware e redes não processam dados como um fluxo contínuo e caótico; a informação é rigidamente loteada em blocos padronizados[cite: 1].
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="bg-slate-900 p-5 rounded-lg border border-slate-800/50">
                <h4 className="font-bold text-emerald-400">Bit & Nibble</h4>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Bit (b):</strong> Menor unidade indivisível (0 ou 1)[cite: 1]. Velocidade de rede é medida em bps[cite: 1].<br/>
                  <strong>Nibble:</strong> Agrupamento de 4 bits. Mapeia exatamente um caractere hexadecimal[cite: 1].
                </p>
              </div>
              <div className="bg-slate-900 p-5 rounded-lg border border-slate-800/50">
                <h4 className="font-bold text-emerald-400">Byte (Octeto)</h4>
                <p className="text-sm text-slate-400 mt-2">
                  <strong>Byte (B):</strong> Agrupamento de 8 bits (256 valores). É a menor unidade de alocação de memória[cite: 1]. Em redes e RFCs, usa-se o termo <em>Octeto</em> para evitar ambiguidades históricas[cite: 1].
                </p>
              </div>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg border border-slate-800/50 h-full">
              <h4 className="font-bold text-emerald-400 mb-3">Word e Alinhamento</h4>
              <p className="text-sm text-slate-400 mb-3">
                A Word (Palavra) é o tamanho "natural" de dados que a CPU consegue processar em um único ciclo[cite: 1].
              </p>
              <ul className="text-sm text-slate-400 space-y-2 list-disc list-inside">
                <li><strong>Word:</strong> 16 bits (2 Bytes)[cite: 1].</li>
                <li><strong>DWORD:</strong> 32 bits (4 Bytes - ex: IPv4)[cite: 1].</li>
                <li><strong>QWORD:</strong> 64 bits (8 Bytes)[cite: 1].</li>
              </ul>
              <div className="mt-4 p-3 bg-red-950/30 border border-red-900/50 rounded text-xs text-red-300">
                <strong>Segurança em Foco:</strong> Em engenharia reversa e exploits (Buffer Overflows), o tamanho da Word dita o alinhamento de memória e o padding necessário para sobrescrever o Instruction Pointer (EIP/RIP)[cite: 1].
              </div>
            </div>
          </div>
        </section>

        {/* Seção 8: Endianness */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <Cpu className="text-emerald-500 w-6 h-6" />
            2. A Batalha das Arquiteturas: Endianness
          </h2>
          <p>
            Um conceito crítico em Redes e Análise de Malware. Quando um dado é maior que 1 Byte (como o valor <code className="text-emerald-400">0x12345678</code>), a memória precisa decidir em qual ordem vai armazenar esses bytes[cite: 1].
          </p>

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
                    O byte mais significativo vai no endereço menor. Protocolos de Rede (TCP/IP) usam isso (Network Byte Order)[cite: 1].
                  </td>
                  <td className="border border-slate-800 p-3 font-mono">12 | 34 | 56 | 78</td>
                </tr>
                <tr>
                  <td className="border border-slate-800 p-3 font-bold text-teal-400">Little-Endian</td>
                  <td className="border border-slate-800 p-3">
                    O byte menos significativo vai no endereço menor. Processadores modernos (Intel/AMD) usam isso (Host Byte Order)[cite: 1].
                  </td>
                  <td className="border border-slate-800 p-3 font-mono">78 | 56 | 34 | 12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400 bg-slate-900/50 p-4 rounded-lg">
            <strong>Na prática:</strong> Programadores usam funções em C como <code className="text-emerald-300">htons()</code> e <code className="text-emerald-300">htonl()</code> para converter Host para Network. Se falhar, uma porta 80 pode ser lida de forma totalmente incorreta[cite: 1].
          </p>
        </section>

        {/* Seção 9: Codificação de Texto */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-100 border-b border-slate-800 pb-3 flex items-center gap-3">
            <FileDigit className="text-emerald-500 w-6 h-6" />
            3. Codificação de Texto: Dando Significado aos Bits
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-200">ASCII e Unicode</h3>
              <p className="text-sm text-slate-400 mt-2">
                O <strong>ASCII</strong> (1963) definiu que 7 bits seriam suficientes para representar 128 caracteres do idioma inglês. Porém, falta acentuação e outros alfabetos[cite: 1]. O <strong>Unicode</strong> surgiu como um catálogo universal, dando um Code Point único para cada caractere do mundo (ex: A é U+0041)[cite: 1].
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-200">UTF-8: A Implementação Perfeita</h3>
              <p className="text-sm text-slate-400 mt-2">
                O UTF-8 armazena texto de forma eficiente com tamanho variável[cite: 1]:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-400 mt-2 space-y-1">
                <li>Caracteres ingleses: 1 byte[cite: 1].</li>
                <li>Acentos latinos (ç, ã): 2 bytes[cite: 1].</li>
                <li>Símbolos asiáticos: 3 bytes[cite: 1].</li>
                <li>Emojis (👾): 4 bytes[cite: 1].</li>
              </ul>
            </div>

            <div className="bg-red-950/20 border-l-4 border-red-600 p-6 rounded-r-lg mt-6 shadow-lg">
              <h3 className="flex items-center gap-2 text-lg font-bold text-red-500 mb-3">
                <ShieldAlert className="w-5 h-5" />
                Técnicas Ofensivas e Codificação
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                O mapeamento de caracteres é um vetor clássico na cibersegurança[cite: 1].
              </p>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <strong className="text-red-400">Homograph Attacks (Phishing):</strong> O atacante registra um domínio substituindo um caractere latino por um idêntico visualmente de outro alfabeto (ex: Cirílico). A vítima lê <code className="text-slate-200 bg-slate-900 px-1">apple.com</code>, mas o navegador resolve um IP controlado pelo atacante[cite: 1].
                </li>
                <li>
                  <strong className="text-red-400">Evasão de WAF (Web Application Firewall):</strong> Enviar um payload malicioso como <code className="text-slate-200 bg-slate-900 px-1">&lt;script&gt;</code> usando codificações Unicode não padronizadas. Se o filtro não normalizar o UTF-8 corretamente, o código passa invisível e é executado no servidor[cite: 1].
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Adicione as demais seções (Octal, Hexadecimal, Endianness, etc) seguindo a mesma estrutura semântica... */}
        
        <section className="space-y-6 pt-8">
           <div className="text-center p-8 bg-slate-900 rounded-xl border border-slate-800 border-dashed">
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                [ Fim do Trecho de Demonstração ]
              </p>
              <p className="text-slate-400 mt-2 text-sm">
                A estrutura acima pode ser replicada para os blocos de Hexadecimal, Grandezas e Endianness.
              </p>
           </div>
        </section>

      </article>
    </div>
  );
};

export default EngenhariaRedes;