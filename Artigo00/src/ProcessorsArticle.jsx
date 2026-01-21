import React, { useEffect, useRef } from 'react';
import {
   Cpu, Zap, Server, Activity, Layers, ArrowRight, ShieldCheck,
   Microchip, Binary, Gauge, Combine, Split, Brain,
   ChevronRight, Lock, Database, Skull, Terminal, Play, Pause
} from 'lucide-react';

/* =====================================================================================
  COMPONENTE AUXILIAR: TunnelImage (Reutilizado com Padrão Green/Emerald)
  =====================================================================================
*/
const TunnelImage = ({ src, alt, className, glowColor = "rgba(34, 197, 94," }) => {
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

               // Escala e Brilho baseados na rolagem
               const scale = 0.85 + (visibility * 0.15);
               image.style.transform = `scale(${scale})`;

               const shadowOpacity = 1 - visibility;
               const lightOpacity = visibility;

               image.style.boxShadow = `
            inset 0 0 ${80 * shadowOpacity}px rgba(0,0,0, ${shadowOpacity * 0.9}),
            0 10px 50px ${glowColor} ${lightOpacity * 0.5})
          `;
               image.style.filter = `brightness(${0.6 + (visibility * 0.4)})`;
            });
         },
         {
            threshold: Array.from({ length: 50 }, (_, i) => i / 50),
            rootMargin: '0px 0px -50px 0px'
         }
      );

      observer.observe(container);
      return () => { if (container) observer.unobserve(container); };
   }, [glowColor]);

   return (
      <div ref={containerRef} className="overflow-visible p-6 flex items-center justify-center w-full my-4">
         <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={`${className} rounded-xl border-4 border-slate-800 transition-all duration-300 ease-out`}
            style={{
               transform: 'scale(0.8)',
               boxShadow: 'inset 0 0 100px rgba(0,0,0, 0.9)',
               filter: 'brightness(0.5)',
               willChange: 'transform, box-shadow, filter'
            }}
            onError={(e) => {
               e.target.style.display = 'none';
               e.target.parentElement.innerHTML = `
            <div class="flex flex-col items-center justify-center p-8 border-2 border-dashed border-green-500/30 rounded-xl bg-green-950/10 w-full h-64">
                <span class="text-green-500 font-bold mb-2">Imagem: ${alt}</span>
                <span class="text-xs text-slate-500 text-center max-w-xs">Adicione "${src}" na pasta public.</span>
            </div>`
            }}
         />
      </div>
   );
};

/* =====================================================================================
   COMPONENTE PRINCIPAL
   ===================================================================================== */
const ProcessorsArticle = () => {
   return (
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-green-500/30 w-full overflow-x-hidden">

         {/* =====================================================================================
           CABEÇALHO (Identity: Green/Emerald Theme)
           ===================================================================================== 
      */}
         <header className="relative bg-slate-900 border-b border-slate-800 pt-32 pb-24 px-4 overflow-hidden">
            {/* Efeitos de fundo (Glow Verde/Matrix) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-600/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
               <hgroup>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                     SALA DO ENIAC 1946 <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-lime-500">
                        Capítulo 03
                     </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-10 leading-relaxed">
                     O Cérebro de Silício<br />
                     <span className="text-sm font-mono text-emerald-500/70 tracking-widest uppercase">Processadores: Do Transistor à IA</span>
                  </h2>
                  <p className="text-emerald-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Universidade Tecnológica Federal do Paraná<span className="hidden md:inline">|</span></p>
                  <p className="text-emerald-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Câmpus Pato Branco<span className="hidden md:inline">|</span></p>
               </hgroup>

               {/* Badge do Autor */}
               <div className="inline-flex flex-col md:flex-row items-center gap-5 bg-slate-950/50 p-6 md:py-3 md:px-8 rounded-2xl md:rounded-full border border-emerald-500/40 backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                  <div className="bg-emerald-600 p-2.5 rounded-full shadow-lg shadow-emerald-600/40">
                     <Microchip size={24} className="text-white" />
                  </div>
                  <div className="text-center md:text-left">
                     <p className="text-[10px] text-emerald-300 uppercase font-bold tracking-widest">Autor do Artigo</p>
                     <p className="text-white font-bold text-sm">Lucas de Oliveira Santos</p>
                  </div>
                  <div className="h-8 w-px bg-slate-700 hidden md:block mx-4"></div>
                  <div className="text-center md:text-left border-t border-slate-700 pt-3 md:pt-0 md:border-0 w-full md:w-auto mt-3 md:mt-0">
                     <p className="text-[10px] text-emerald-300 uppercase font-bold tracking-widest">Curso</p>
                     <p className="text-white text-sm">Engenharia de Computação</p>
                  </div>
               </div>
            </div>
         </header>

         {/* =====================================================================================
           SEÇÃO 1: O TRANSISTOR - A UNIDADE FUNDAMENTAL
           ===================================================================================== 
      */}
         <section className="py-24 px-4 relative">

            <article className="max-w-6xl mx-auto">
               {/* Marcador de Seção */}
               <div className="flex items-center gap-4 mb-16">
                  <div className="bg-emerald-500 h-0.5 w-16 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-emerald-400 font-mono font-bold text-lg tracking-widest uppercase">01. O Átomo da Computação</span>
                  <div className="bg-slate-800 h-px flex-1"></div>
               </div>

               <div className="grid md:grid-cols-12 gap-16 items-start">
                  <div className="md:col-span-6 relative z-10">
                     <hgroup>
                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                           O Interruptor de <span className="text-emerald-500">Bilhões</span>
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                           Avançando na jornada de estudos, agora conhecer com detalhes um processador moderno desde a sua fabricação,
                           seus componentes elétricos e processamento de dados, de entrada e saída, usaremos como base dos nossos estudos
                           os processadores Intel trazendo uma linha do tempo e dando destaque nos upgrades recebidos ao longo dos anos;
                           e durante a leitura conforme é a proposta inicial será apresentado também dados de pesquisas e comparações
                           com os processadores AMD.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                           A fabricação de um processador moderno, como os da Intel, é considerada uma das mais complexas realizações da engenharia contemporânea.
                           Cada unidade representa o resultado de fabricação, bilhões de transistores organizados em escalas nanométricas e uma cadeia de processos
                           interdependentes que transformam o quartzo (SiO₂) em inteligência artificial. Esse capítulo descreve,
                           em detalhes técnicos, cada estágio dessa jornada, desde o refino do silício até o encapsulamento final de um chip.
                        </p>

                        <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                           Tudo começa com o quartzo (SiO₂), um mineral amplamente encontrado na natureza.
                           No entanto, a indústria de semicondutores exige pureza extrema. que é alcançado
                           por meio da redução carbotérmica,  onde o dióxido de silício reage com carbono
                           a altas temperaturas, gerando silício metalúrgico, que é posteriormente refinado
                           por processos químicos com gás cloro, formando triclorossilano (SiHCl₃).
                        </p>

                        <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                           A substância é então submetida a um processo de deposição que produz silício ultrapuro,
                           pronto para ser cristalizados. É nesse ponto que entra o processo Czochralski, onde um único cristal
                           monocristalino é lentamente extraído de um cadinho, cadinho de silício fundido.
                           O resultado é um grande cilindro de cristal perfeito, chamado lingote (boule), com diâmetros que chegam
                           a 300 mm.
                        </p>


                        <div className="bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                           <h4 className="text-emerald-300 font-bold mb-2 flex items-center gap-2"><Binary size={18} /> A Lógica do 0 e 1</h4>
                           <p className="text-sm text-slate-400 italic">
                              "O silício é um semicondutor. Nós o dopamos com impurezas para controlar exatamente quando ele conduz eletricidade
                              e quando ele bloqueia. É a torneira digital mais precisa do universo."
                           </p>
                        </div>
                     </hgroup>

                  </div>

                  <div className="md:col-span-6 space-y-8 mt-4">

                     <hgroup>
                        <div className="relative group">
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                              FIG 1.0 - WAFER DE SILÍCIO
                           </div>
                           <TunnelImage
                              src="processador-fabrica-rvlxti.jpg"
                              alt="Wafer de Silício com Chips"
                              className="w-full h-auto min-h-[300px] object-cover"
                              glowColor="rgba(16, 185, 129,"
                           />
                           <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                              <hgroup>
                                 <strong>
                                    <h1> Análise de Precisão Técnica </h1>

                                 </strong>
                                 <p className="text-xs text-slate-500 font-mono">
                                    Essa imagem é uma representação visual extremamente precisa e de alta fidelidade da etapa inicial da cadeia de produção de silício,
                                    especificamente a produção de Silício Grau Metalúrgico (MGS - Metallurgical Grade Silicon). <br />
                                 </p>
                                 <h2>
                                    1. O Processo: Redução Carbotérmica em Forno a Arco
                                 </h2>
                                 <ul>
                                    <li>
                                       <p className="text-xs text-slate-500 font-mono">
                                          - O que a imagem mostra: Um grande forno elétrico a arco
                                          (EAF - Electric Arc Furnace) ou forno a arco submerso (SAF), inclinando-se para vazar o material fundido.
                                          nesta etapa o quartzo não é "refinado" no sentido de destilação, ele é quimicamente reduzido. <br />
                                       </p>
                                    </li>
                                    <li>
                                       <p className="text-xs text-slate-500 font-mono">
                                          - O processo envolve misturar o quartzito (SiO₂) com fontes de carbono (carvão, coque, madeira)
                                          e submetê-los a temperaturas extremas usando eletrodos de carbono. O oxigênio do quartzo se liga
                                          ao carbono e escapa como gás (CO), deixando para trás o silício fundido.
                                       </p>
                                    </li>
                                 </ul>
                                 <h2>
                                    2. As Matérias-Primas
                                 </h2>
                                 <ul>
                                    <li>
                                       <p className="text-xs text-slate-500 font-mono">
                                          As pedras brancas translúcidas representam o Quartzito (a fonte de silício),
                                          e as pedras pretas representam os Redutores de Carbono (carvão vegetal,
                                          coque de petróleo ou carvão mineral). A automação com o braço robótico
                                          para alimentação é condizente com plantas modernas.
                                       </p>
                                    </li>
                                 </ul>
                                 <h2>
                                    3. O Vazamento

                                 </h2>
                                 <p className="text-xs text-slate-500 font-mono">
                                    O "Sangramento" do Forno é o metal líquido laranja brilhante escorrendo do forno para um molde ou panela,
                                    com muitas faíscas e fumaça. Altamente preciso. O silício grau metalúrgico fundido tem essa
                                    aparência e o processo de vazamento é extremamente energético, gerando exatamente esse tipo de luz, calor e particulados.
                                 </p>

                                 <h2>
                                    4. Equipamento de Proteção Individual (EPI)
                                 </h2>

                                 <p className="text-xs text-slate-500 font-mono">
                                    Operadores vestindo trajes prateados aluminizados estes são trajes de aproximação ao calor radiante,
                                    essenciais para a segurança dos trabalhadores que monitoram o vazamento de metais a essas temperaturas.
                                 </p>

                                 <h3 >
                                    A Temperatura na Tela (2990 °C):
                                 </h3>

                                 <p className="text-xs text-slate-500 font-mono">
                                    O processo de redução do silício no forno geralmente ocorre em temperaturas
                                    médias de banho entre 1900 °C e 2100 °C.

                                    2990 °C mostrada serve como uma leitura geral do processo, o arco elétrico em si
                                    (a ponta do eletrodo) possa ultrapassar 3000 °C. Calor extremo necessário para quebrar a ligação Si-O.
                                    A imagem captura perfeitamente a escala industrial, a violência energética do processo de redução no
                                    forno a arco e os materiais envolvidos antes de o silício seguir para a purificação química
                                    (Processo Siemens) para se tornar "Grau Eletrônico".
                                 </p>
                              </hgroup>
                           </div>
                        </div>
                     </hgroup>
                  </div>
               </div>
            </article>

            <article className="max-w-6xl mx-auto">
               {/* Marcador de Seção */}
               <div className="flex items-center gap-4 mb-16">
                  <div className="bg-emerald-500 h-0.5 w-16 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-emerald-400 font-mono font-bold text-lg tracking-widest uppercase">01. O Átomo da Computação</span>
                  <div className="bg-slate-800 h-px flex-1"></div>
               </div>

               <div className="grid md:grid-cols-12 gap-16 items-start">

                  <div className="md:col-span-6 space-y-8 mt-4">
                     <div className="relative group">
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                           FIG 1.0 - WAFER DE SILÍCIO
                        </div>
                        <TunnelImage
                           src="lingote.jpg"
                           alt="Wafer de Silício com Chips"
                           className="w-full h-auto min-h-[300px] object-cover"
                           glowColor="rgba(16, 185, 129,"
                        />
                        <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                           <p className="text-xs text-slate-500 font-mono">
                              A sala é uma "cleanroom" de classe elevada. A iluminação amarela é usada para não afetar processos
                              fotossensíveis em áreas adjacentes. Os operadores usam trajes completos ("bunny suits")
                              para evitar que qualquer partícula de pele, cabelo ou poeira contamine o cristal,
                              que deve ter uma pureza atômica quase perfeita.
                           </p>
                        </div>
                     </div>

                     <div className="relative group">
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                           FIG 1.0 - WAFER DE SILÍCIO
                        </div>
                        <TunnelImage
                           src="waffer.jpg"
                           alt="Wafer de Silício com Chips"
                           className="w-full h-auto min-h-[300px] object-cover"
                           glowColor="rgba(16, 185, 129,"
                        />
                        <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                           <p className="text-xs text-slate-500 font-mono">
                              Após o resfriamento e inspeção, este lingote maciço terá suas extremidades cônicas
                              cortadas e o corpo cilíndrico será fatiado em discos extremamente finos, os wafers,
                              que servirão de base para a fabricação dos processadores.
                           </p>
                        </div>
                     </div>
                  </div>



                  <div className="md:col-span-6 relative z-10">
                     <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                        O Interruptor de <span className="text-emerald-500">Bilhões</span>
                     </h3>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        O lingote de silício é cortado em finas lâmina de aproximadamente 0,75mm de espessura,
                        chamadas waffer. Esses discos são altamente frágeis, e quedas acidentais resultam em sua
                        fragmentação completa, o que representa prejuízos altos, dado que um único wafer pode valer
                        entre 5.000 e 15.000 dólares, dependendo do nó tecnológico (ex: 10nm, 7nm, 5nm).
                     </p>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        Cada wafer passa por etapas de polimento ópticos, limpeza química e testes de planicidade.
                        A menor imperfeição neste estágio pode comprometer dezenas ou centenas de chips.
                     </p>


                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        O próximo estágio é a fotolitografia, processo que utiliza luz ultravioleta extrema
                        (EUV) para “imprimir” padrões sobre o wafer. Primeiramente, aplica – se uma camada de fotoresiste,
                        um material sensível a luz, que é exposto através de máscaras chamadas retílicos,
                        as quais contêm os padrões dos circuitos integrados.
                        Cada camada litografada corresponde a uma parte da estrutura dos transistores
                        (portas, regiões dopadas, tridimensionais de circuitos eletrônicos em escala nanométrica).

                     </p>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                     </p>

                     <div className="bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                        <h4 className="text-emerald-300 font-bold mb-2 flex items-center gap-2"><Binary size={18} /> A Lógica do 0 e 1</h4>
                        <p className="text-sm text-slate-400 italic">
                           Se o computador fosse um livro, o **Transistor** seria a letra. Sozinho, ele não conta história
                           alguma — ele apenas existe em dois estados: ligado (1) ou desligado (0).
                           Mas quando reunimos bilhões deles em uma pastilha de silício do tamanho de uma unha,
                           eles escrevem a história da civilização moderna.
                        </p> <br />
                        <p className="text-sm text-slate-400 italic">
                           Um processador moderno (CPU) nada mais é do que uma orquestra colossal de interruptores 
                           microscópicos, gravados via fotolitografia em silício ultra-puro. 
                           A mágica acontece quando organizamos esses interruptores para criar Portas Lógicas.
                        </p>
                     </div>
                  </div>
               </div>
            </article>
         </section>

         {/* =====================================================================================
           SEÇÃO 2: ARQUITETURA E CICLO DE INSTRUÇÃO
           ===================================================================================== 
      */}
         <section className="py-24 px-4 bg-slate-900/40 border-y border-slate-800 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
               <div className="flex items-center gap-4 mb-12">
                  <div className="bg-lime-500 h-0.5 w-16 shadow-[0_0_10px_rgba(132,204,22,0.8)]"></div>
                  <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                     <Activity className="text-lime-500 w-8 h-8" /> 02. O Pulso do Sistema
                  </h3>
               </div>

               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                     <TunnelImage
                        src="cpu-clock-cycle.jpg"
                        alt="Diagrama de Ciclo de Clock"
                        className="w-full h-auto object-contain"
                        glowColor="rgba(132, 204, 22,"
                     />
                  </div>
                  <div>
                     <h4 className="text-2xl font-bold text-white mb-6">O Clock (GHz) e o IPC</h4>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        Muitos julgam um processador apenas pelos seus Gigahertz (GHz). O **Clock** é como o metrônomo de uma música: ele dita o ritmo. Um clock de 5GHz significa que o processador oscila 5 bilhões de vezes por segundo.
                     </p>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        Porém, velocidade não é tudo. Existe o **IPC (Instruções Por Ciclo)**. Imagine dois pedreiros: um move as mãos muito rápido (Clock alto) mas carrega um tijolo por vez. O outro é mais lento, mas carrega 10 tijolos de uma vez (IPC alto). O segundo constrói a parede mais rápido.
                     </p>

                     <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-slate-950 p-5 rounded-xl border border-lime-900/40">
                           <div className="flex items-center gap-2 mb-2">
                              <Gauge className="text-lime-500" size={20} />
                              <span className="font-bold text-lime-100">Clock (Frequência)</span>
                           </div>
                           <p className="text-xs text-slate-400">A velocidade bruta de oscilação do cristal de quartzo.</p>
                        </div>
                        <div className="bg-slate-950 p-5 rounded-xl border border-lime-900/40">
                           <div className="flex items-center gap-2 mb-2">
                              <Brain className="text-lime-500" size={20} />
                              <span className="font-bold text-lime-100">IPC (Eficiência)</span>
                           </div>
                           <p className="text-xs text-slate-400">Quanta lógica é resolvida em uma única batida do clock.</p>
                        </div>
                     </div>
                  </div>
               </div>
               

               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                     <TunnelImage
                        src="cpu-clock-cycle.jpg"
                        alt="Diagrama de Ciclo de Clock"
                        className="w-full h-auto object-contain"
                        glowColor="rgba(132, 204, 22,"
                     />
                  </div>
                  <div>
                     <h4 className="text-2xl font-bold text-white mb-6">O Clock (GHz) e o IPC</h4>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        Muitos julgam um processador apenas pelos seus Gigahertz (GHz). O **Clock** é como o metrônomo de uma música: ele dita o ritmo. Um clock de 5GHz significa que o processador oscila 5 bilhões de vezes por segundo.
                     </p>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                        Porém, velocidade não é tudo. Existe o **IPC (Instruções Por Ciclo)**. Imagine dois pedreiros: um move as mãos muito rápido (Clock alto) mas carrega um tijolo por vez. O outro é mais lento, mas carrega 10 tijolos de uma vez (IPC alto). O segundo constrói a parede mais rápido.
                     </p>

                     <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-slate-950 p-5 rounded-xl border border-lime-900/40">
                           <div className="flex items-center gap-2 mb-2">
                              <Gauge className="text-lime-500" size={20} />
                              <span className="font-bold text-lime-100">Clock (Frequência)</span>
                           </div>
                           <p className="text-xs text-slate-400">A velocidade bruta de oscilação do cristal de quartzo.</p>
                        </div>
                        <div className="bg-slate-950 p-5 rounded-xl border border-lime-900/40">
                           <div className="flex items-center gap-2 mb-2">
                              <Brain className="text-lime-500" size={20} />
                              <span className="font-bold text-lime-100">IPC (Eficiência)</span>
                           </div>
                           <p className="text-xs text-slate-400">Quanta lógica é resolvida em uma única batida do clock.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* =====================================================================================
           SEÇÃO 3: A GUERRA DAS ARQUITETURAS (x86 vs ARM)
           ===================================================================================== 
      */}
         <section className="py-24 px-4 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-slate-950 to-black pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
               <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-4">
                     <Split className="text-green-500 w-8 h-8" />
                     <h3 className="text-3xl font-bold text-white">A Grande Batalha: CISC vs RISC</h3>
                  </div>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                     Por décadas, a Intel (x86) dominou os desktops. Agora, a arquitetura ARM (Apple Silicon, Snapdragon) ameaça esse reinado.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">

                  {/* LADO AZUL/VERDE - x86 */}
                  <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <h4 className="text-2xl font-bold text-white">x86 / x64</h4>
                           <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Complex Instruction Set (CISC)</span>
                        </div>
                        <Server className="text-blue-500 group-hover:scale-110 transition-transform" size={32} />
                     </div>
                     <p className="text-slate-300 text-sm leading-relaxed text-justify mb-6">
                        A filosofia da Intel e AMD. O processador "sabe" fazer tarefas complexas nativamente. Ele tem um vocabulário imenso de instruções. É poderoso para força bruta e compatibilidade legada.
                     </p>
                     <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <strong className="text-white text-sm block mb-2">Representantes:</strong>
                        <div className="flex flex-wrap gap-2">
                           <span className="px-2 py-1 bg-blue-900/20 text-blue-300 text-xs rounded border border-blue-500/30">Intel Core i9</span>
                           <span className="px-2 py-1 bg-red-900/20 text-red-300 text-xs rounded border border-red-500/30">AMD Ryzen 9</span>
                        </div>
                     </div>
                  </div>

                  {/* LADO LARANJA/VERDE - ARM */}
                  <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700 hover:border-orange-500/50 transition-colors group">
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <h4 className="text-2xl font-bold text-white">ARM</h4>
                           <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Reduced Instruction Set (RISC)</span>
                        </div>
                        <Cpu className="text-orange-500 group-hover:scale-110 transition-transform" size={32} />
                     </div>
                     <p className="text-slate-300 text-sm leading-relaxed text-justify mb-6">
                        A filosofia mobile e da Apple. O processador tem um vocabulário simples, mas executa essas palavras simples absurdamente rápido e com baixíssimo consumo de energia.
                     </p>
                     <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <strong className="text-white text-sm block mb-2">Representantes:</strong>
                        <div className="flex flex-wrap gap-2">
                           <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-600">Apple M3 Max</span>
                           <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-600">Snapdragon X Elite</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* =====================================================================================
           SEÇÃO 4: A HIERARQUIA DE MEMÓRIA (CACHE)
           ===================================================================================== 
      */}
         <section className="py-24 px-4 bg-slate-900/50 border-t border-slate-800">
            <div className="max-w-6xl mx-auto">
               <div className="flex items-center gap-4 mb-16">
                  <div className="bg-emerald-500 h-0.5 w-16 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-emerald-400 font-mono font-bold text-lg tracking-widest uppercase">04. O Abismo da Memória (Cache)</span>
               </div>

               <div className="grid md:grid-cols-12 gap-12 items-center">
                  <div className="md:col-span-5 space-y-6">
                     <h3 className="text-3xl font-bold text-white">Por que o Cache L3 é tão importante?</h3>
                     <p className="text-slate-300 text-lg text-justify leading-relaxed">
                        A CPU é um carro de Fórmula 1. A Memória RAM é um armazém longe da pista. Se a CPU tiver que buscar dados na RAM toda hora, ela perde a corrida.
                     </p>
                     <p className="text-slate-300 text-lg text-justify leading-relaxed">
                        O **Cache (L1, L2, L3)** é como um frigobar ao lado do piloto. Ele guarda os dados mais usados ultra-próximos aos núcleos.
                     </p>

                     <div className="bg-emerald-950/20 p-6 rounded-xl border border-emerald-500/30">
                        <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                           <Layers size={18} /> A Pirâmide de Velocidade
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-400 font-mono">
                           <li className="flex justify-between border-b border-emerald-500/10 pb-2">
                              <span>L1 Cache</span>
                              <span className="text-white">~1 nanosegundo (Instantâneo)</span>
                           </li>
                           <li className="flex justify-between border-b border-emerald-500/10 pb-2">
                              <span>L2 Cache</span>
                              <span className="text-white">~4 nanosegundos</span>
                           </li>
                           <li className="flex justify-between border-b border-emerald-500/10 pb-2">
                              <span>L3 Cache</span>
                              <span className="text-white">~10-20 nanosegundos</span>
                           </li>
                           <li className="flex justify-between pt-2 opacity-50">
                              <span>RAM (DDR5)</span>
                              <span className="text-slate-500">~80-100 nanosegundos (Lento!)</span>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div className="md:col-span-7">
                     <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-slate-900 rounded-xl p-2 border border-emerald-500/20">
                           <TunnelImage
                              src="cpu-die-shot-cache.jpg"
                              alt="Die Shot mostrando núcleos e cache"
                              className="w-full h-auto object-cover"
                              glowColor="rgba(34, 197, 94,"
                           />
                        </div>
                     </div>
                     <p className="text-center text-xs text-slate-500 mt-4 font-mono">
                        AMD 3D V-Cache: Empilhamento vertical de memória SRAM sobre o processador para jogos.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* =====================================================================================
           SEÇÃO 5: FUTURO - NPUs E CHIPLETS
           ===================================================================================== 
      */}
         <section className="py-24 px-4 relative">
            <div className="max-w-5xl mx-auto text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  O Futuro é <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">Heterogêneo</span>
               </h2>
               <p className="text-xl text-slate-400">
                  A Lei de Moore está desacelerando. A resposta da engenharia? Especialização.
               </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

               {/* Card 1: Chiplets */}
               <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
                  <Combine className="text-emerald-500 mb-4 w-10 h-10" />
                  <h3 className="text-xl font-bold text-white mb-3">Chiplets</h3>
                  <p className="text-sm text-slate-400 text-justify">
                     Em vez de fabricar um chip gigante (monolítico) e caro, fabricamos pedaços menores (chiplets) e os colamos juntos com interconexões ultra-rápidas. É o "Lego" da engenharia de silício.
                  </p>
               </div>

               {/* Card 2: NPU (AI) */}
               <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-lime-500/50 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                     <Brain size={100} />
                  </div>
                  <Brain className="text-lime-500 mb-4 w-10 h-10" />
                  <h3 className="text-xl font-bold text-white mb-3">NPU (Neural Processing Unit)</h3>
                  <p className="text-sm text-slate-400 text-justify relative z-10">
                     A CPU é generalista. Para a era da IA, os processadores agora incluem uma área dedicada apenas para cálculos de matrizes e redes neurais (Copilot, Siri local, DLSS).
                  </p>
               </div>

               {/* Card 3: 3D Stacking */}
               <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-colors">
                  <Layers className="text-green-500 mb-4 w-10 h-10" />
                  <h3 className="text-xl font-bold text-white mb-3">Empilhamento 3D</h3>
                  <p className="text-sm text-slate-400 text-justify">
                     Se não podemos crescer para os lados, crescemos para cima. Transistores GAA (Gate-All-Around) e memórias empilhadas sobre a lógica reduzem a distância que o elétron precisa viajar.
                  </p>
               </div>

            </div>
         </section>

         {/* =====================================================================================
           FOOTER (Padrão REVOLUXTI)
           ===================================================================================== 
      */}
         <footer className="mt-0 border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="absolute -bottom-1 -left-10 opacity-[0.05] pointer-events-none rotate-12 z-0">
               <Skull size={300} className="text-emerald-400 blur-sm" />
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
               <div className="flex flex-col items-center gap-4 mb-10 opacity-70">
                  <div className="p-3 bg-slate-900 rounded-full border border-slate-800">
                     <Database className="w-6 h-6 text-slate-400" />
                  </div>
                  <h3 className="uppercase tracking-[0.2em] text-sm font-bold text-slate-400">Referências Bibliográficas</h3>
               </div>

               <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
                  <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono space-y-3 hover:border-emerald-500/20 transition-colors">
                     <strong className="block text-emerald-500/50 uppercase tracking-wider mb-2">Engenharia & Arquitetura</strong>
                     <p>INTEL. The Evolution of x86 Architecture. Whitepaper 2024.</p>
                     <p>AMD. Chiplet Architecture for High-Performance Computing.</p>
                     <p>TSMC. N3 Technology Symposium: FinFET vs GAAFET.</p>
                     <p>HENNESSY, J. L.; PATTERSON, D. A. Computer Architecture: A Quantitative Approach.</p>
                  </div>
                  <div className="bg-slate-900/50 p-5 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono space-y-3 hover:border-lime-500/20 transition-colors">
                     <strong className="block text-lime-500/50 uppercase tracking-wider mb-2">Contexto Histórico</strong>
                     <p>MOORE, G. E. Cramming more components onto integrated circuits. 1965.</p>
                     <p>ARM HOLDINGS. RISC Architecture Fundamentals.</p>
                     <p>APPLE INC. M-Series Architecture Deep Dive. 2023.</p>
                  </div>
               </div>

               <div className="flex flex-col items-center border-t border-slate-900 pt-8">
                  <Skull
                     className="mb-6 w-12 h-12 text-emerald-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.9)] hover:scale-110 transition-transform duration-300 cursor-pointer"
                     strokeWidth={1.5}
                  />

                  <p className="text-slate-300 font-bold mb-2 tracking-wide">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
                  <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest">Engenharia de Computação</p>
                  <p className="text-emerald-600/60 text-xs font-mono mt-6">REVOLUXTI © 2025 - Todos os direitos reservados</p>
               </div>
            </div>
         </footer>

      </div>
   );
};

export default ProcessorsArticle;