import React, { useEffect, useRef } from 'react';
import {
   Cpu, Zap, Server, Activity, Layers, ArrowRight, ShieldCheck,
   Microchip, Binary, Gauge, Combine, Split, Brain,
   ChevronRight, Lock, Database, Skull, Terminal, Play, Pause,
   Thermometer, Flame, MonitorOff, Package, ScanBarcode, Scale, Truck, CheckCircle2,
   Grid, Shield, ToggleRight, GitCommit, ArrowDown, Minus, Plus, Workflow,
   BatteryCharging, Keyboard, ToggleLeft, Type, ZapOff, Equal, MoveHorizontal,
   ShieldAlert, Sliders, Scaling, Waves, Radio, ArrowLeftRight, Battery, Disc, Gem,
   Magnet, Orbit, Repeat, Wind, HardDrive, Wifi, History

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
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <article className="max-w-6xl mx-auto">
               {/* Marcador de Seção */}
               <div className="flex items-center gap-4 mb-16">
                  <div className="bg-emerald-500 h-0.5 w-16 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-emerald-400 font-mono font-bold text-lg tracking-widest uppercase">00. O Átomo da Computação</span>
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
                     </hgroup><br /> <br /> <br />

                  </div>

                  <div className="md:col-span-6 space-y-8 mt-4">

                     <hgroup>
                        <div className="relative group">
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                              FIG 0.0 - Processo Czochralski
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
                           FIG 0.1 - O lingote
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


            <article className="max-w-6xl mx-auto">
               {/* Marcador de Seção */}
               <div className="flex items-center gap-4 mb-16">
                  <div className="bg-emerald-500 h-0.5 w-16 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                  <span className="text-emerald-400 font-mono font-bold text-lg tracking-widest uppercase">1.0 O Átomo da Computação</span>
                  <div className="bg-slate-800 h-px flex-1"></div>
               </div>

               <div className="grid md:grid-cols-12 gap-16 items-start">
                  <div className="md:col-span-6 relative z-10">
                     <hgroup>
                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                           O Interruptor de <span className="text-emerald-500">Bilhões</span>
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                           Cada camada litografada corresponde a uma parte da estrutura dos transistores (portas,
                           regiões dopadas, tridimensionais de circuitos eletrônicos em escala nanométrica).
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                           Após a litografia, os waffer passam por processos de dopagem, em que átomos como fósforo ou boro são introduzidos
                           no silício por implantação iônica para alterar sua condutividade elétrica.
                           Em seguida começa, a construção das interconexões metálicas, usando cobre ou tungstênio,
                           entre bilhões de transistores criados. Essas interligações são feitas com precisão subnanométrica e
                           isoladas com camadas dielétricas. O conjunto de processadores é dividido em:
                        </p>




                        <div className="bg-slate-900/50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                           <h4 className="text-emerald-300 font-bold mb-2 flex items-center gap-2"><Binary size={18} /> A Lógica do 0 e 1</h4>
                           <p className="text-sm text-slate-400 italic">
                              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                                 FEOL (Front-End of Line): criação de transistores.
                              </p>

                              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                                 BEOL (Beck-End of Line): metalização e conexão entre transistores.
                              </p>
                           </p>
                        </div>
                     </hgroup><br /> <br /> <br />

                     <hgroup>
                        <div className="relative group">
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                              FIG 1.1 - WAFER DE SILÍCIO
                           </div>
                           <TunnelImage
                              src="fotolitografia00.jpg"
                              alt="Wafer de Silício com Chips"
                              className="w-full h-auto min-h-[300px] object-cover"
                              glowColor="rgba(16, 185, 129,"
                           />
                           <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                              <hgroup>
                                 <strong>
                                    <h1> 1. Exposição do Padrão via Fotolitografia UV  </h1>

                                 </strong>
                                 <p className="text-xs text-slate-500 font-mono">
                                    <br />
                                    Esta imagem mostra o início do processo. Um feixe de luz ultravioleta extrema (EUV)
                                    é projetado através de uma máscara (uma espécie de estêncil microscópico) sobre a superfície
                                    do wafer de silício revestido com um material fotossensível (o fotorresiste).
                                    A luz altera quimicamente as áreas expostas, transferindo o padrão do circuito para o wafer.
                                 </p>

                              </hgroup>
                           </div>
                        </div>
                     </hgroup>

                  </div>

                  <div className="md:col-span-6 space-y-8 mt-4">

                     <hgroup>
                        <div className="relative group">
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                              FIG 1.2 - WAFER DE SILÍCIO
                           </div>
                           <TunnelImage
                              src="corrosao-por-plasma-etching.jpg"
                              alt="Wafer de Silício com Chips"
                              className="w-full h-auto min-h-[300px] object-cover"
                              glowColor="rgba(16, 185, 129,"
                           />
                           <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                              <hgroup>
                                 <strong>
                                    <h1> 2. Corrosão por Plasma (Etching) </h1>

                                 </strong>
                                 <p className="text-xs text-slate-500 font-mono">
                                    Após a exposição UV, o wafer é colocado em uma câmara de vácuo onde um gás ionizado (plasma)
                                    remove quimicamente e fisicamente o material das áreas que foram expostas à luz (ou das áreas que não foram,
                                    dependendo do tipo de fotorresiste). Isso cria trincheiras e estruturas tridimensionais no silício,
                                    que são a base para os transistores. A imagem mostra a luz azul característica do plasma atuando sobre o wafer. <br />
                                 </p>
                              </hgroup>
                           </div>
                        </div>
                     </hgroup>


                     <hgroup>
                        <div className="relative group">
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                              FIG 1.2 - WAFER DE SILÍCIO
                           </div>
                           <TunnelImage
                              src="interconexões.jpg"
                              alt="Wafer de Silício com Chips"
                              className="w-full h-auto min-h-[300px] object-cover"
                              glowColor="rgba(16, 185, 129,"
                           />
                           <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                              <hgroup>
                                 <strong>
                                    <h1> 3. Deposição de Metais e Interconexões </h1>

                                 </strong>
                                 <p className="text-xs text-slate-500 font-mono">
                                    Com as estruturas dos transistores criadas no silício, o próximo passo é conectá-las.
                                    Esta imagem mostra um corte transversal microscópico onde metais, como o cobre,
                                    são depositados para preencher as trincheiras e criar uma rede complexa de fios e vias que ligam
                                    os bilhões de transistores entre si. São criadas múltiplas camadas de metal, cada uma separada
                                    por um material isolante (dielétrico). <br />
                                 </p>

                              </hgroup>
                           </div>
                        </div>
                     </hgroup>


                     <hgroup>
                        <div className="relative group">
                           <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-emerald-500/30 text-xs text-emerald-300 font-mono z-10">
                              FIG 1.2 - WAFER DE SILÍCIO
                           </div>
                           <TunnelImage
                              src="chip-com-transistores-conexões.jpg"
                              alt="Wafer de Silício com Chips"
                              className="w-full h-auto min-h-[300px] object-cover"
                              glowColor="rgba(16, 185, 129,"
                           />
                           <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center">
                              <hgroup>
                                 <strong>
                                    <h1> 4. Chip com Transistores e Conexões </h1>

                                 </strong>
                                 <p className="text-xs text-slate-500 font-mono">
                                    A última imagem é uma fotografia em alta ampliação da superfície de um chip de CPU finalizado.
                                    Ela revela a intrincada e densa "cidade" de transistores e suas conexões de cobre que formam
                                    o circuito integrado. Os padrões iridescentes são resultado da luz refletida nas
                                    nanoestruturas complexas, mostrando o resultado final do processo de fotolitografia e
                                    fabricação. <br />
                                 </p>

                              </hgroup>
                           </div>
                        </div>
                     </hgroup>
                  </div>
               </div>
            </article>
         </section>

         {/* =====================================================================================
           SEÇÃO 2: ARQUITETURA E CICLO DE INSTRUÇÃO
           ===================================================================================== 
      */}


         {/* =====================================================================================
           SEÇÃO: TESTES ELÉTRICOS, BINNING E INTERCONEXÃO
           ===================================================================================== 
      */}
         <section className="relative py-24 px-4 bg-slate-900/40 border-y border-slate-800  overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-6xl mx-auto">

               {/* CABEÇALHO DA SEÇÃO */}
               <div className="flex items-center gap-4 mb-16">
                  <div className="bg-lime-500 h-0.5 w-16 shadow-[0_0_10px_rgba(132,204,22,0.8)]"></div>
                  <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                     <Activity className="text-lime-500 w-8 h-8" /> 02. Validação e Montagem
                  </h3>
               </div>

               {/* BLOCO 1: TESTES ELÉTRICOS
             Esquerda: Texto e Métricas | Direita: Imagem da Sonda
          */}
               <div className="grid md:grid-cols-2 gap-16 items-start mb-24 border-b border-slate-800/50 pb-12">

                  {/* Coluna Esquerda: Métricas */}
                  <div>
                     <h3 className="text-2xl font-bold text-white mb-4">Testes Elétricos no Wafer</h3>
                     <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                        Concluída a etapa de fabricação, cada unidade ainda presa ao wafer é submetida a
                        uma bateria brutal de testes usando sondas microscópicas. O objetivo é verificar
                        a saúde física e elétrica de cada nanômetro. <br />
                        Esses testes avaliam:
                     </p>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="bg-slate-950 p-4 rounded-xl border border-lime-900/40 hover:border-lime-500/30 transition-colors">
                           <div className="flex items-center gap-2 mb-1">
                              <Zap className="w-5 h-5 text-lime-400" />
                              <span className="font-bold text-lime-100 text-sm">Consumo </span>
                           </div>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-lime-900/40 hover:border-lime-500/30 transition-colors">
                           <div className="flex items-center gap-2 mb-1">
                              <Activity className="w-5 h-5 text-lime-400" />
                              <span className="font-bold text-lime-100 text-sm">Tensão (Vcore) </span>
                           </div>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-lime-900/40 hover:border-lime-500/30 transition-colors">
                           <div className="flex items-center gap-2 mb-1">
                              <Gauge className="w-5 h-5 text-lime-400" />
                              <span className="font-bold text-lime-100 text-sm">Frequência</span>
                           </div>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-lime-900/40 hover:border-lime-500/30 transition-colors">
                           <div className="flex items-center gap-2 mb-1">
                              <Flame className="w-4 h-4 text-lime-400" />
                              <span className="font-bold text-lime-100">Temperatura (Full Load)</span>
                           </div>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-lime-900/40 hover:border-lime-500/30 transition-colors">
                           <div className="flex items-center gap-2 mb-1">
                              <Layers className="w-4 h-4 text-lime-400" />
                              <span className="font-bold text-lime-100">Integridade Estrutural</span>
                           </div>
                        </div>


                     </div>
                     <TunnelImage
                        src="teste1.png" // Usando a imagem correta do upload
                        alt="Sonda de Teste em Wafer"
                        className="w-full h-auto object-cover rounded-2xl border border-lime-500/20 shadow-2xl"
                        glowColor="rgba(132, 204, 22,"
                     />
                     <p className="text-center text-xs text-lime-500/60 font-mono mt-2">Fig 2.0 - Sonda de teste microscópica</p>
                  </div>

                  {/* Coluna Direita: Imagem */}
                  <div className="relative mt-4 md:mt-0">
                     <div className="absolute inset-0 bg-lime-500/10 blur-3xl rounded-full"></div>
                     <TunnelImage
                        src="testes-eletricos.jpg" // Usando a imagem correta do upload
                        alt="Sonda de Teste em Wafer"
                        className="w-full h-auto object-cover rounded-2xl border border-lime-500/20 shadow-2xl"
                        glowColor="rgba(132, 204, 22,"
                     />
                     <p className="text-center text-xs text-lime-500/60 font-mono mt-2">Fig 2.1 - Sonda de teste microscópica</p> <br /> <br /> <br />

                     <TunnelImage
                        src="teste2.png" // Usando a imagem correta do upload
                        alt="Sonda de Teste em Wafer"
                        className="w-full h-auto object-cover rounded-2xl border border-lime-500/20 shadow-2xl"
                        glowColor="rgba(132, 204, 22,"
                     />
                     <p className="text-center text-xs text-lime-500/60 font-mono mt-2">Fig 2.2 - Com base nos resultados, os chips são classificados (Técnica chamada binning): </p>
                  </div>
               </div>
               {/* BLOCO 2: BINNING (CLASSIFICAÇÃO)
             Esquerda: Imagem do Mapa | Direita: Card de Classificação
          */}
               <div className="grid md:grid-cols-2 gap-16 items-start mb-24 border-b border-slate-800/50 pb-12">

                  {/* Coluna Esquerda: Imagem (Mapa de Calor) */}
                  <div className="order-2 md:order-1 sticky top-24">
                     <TunnelImage
                        src="corte0.jpg" // Usando a imagem correta do upload (Mapa colorido)
                        alt="Mapa de Wafer (Binning Map)"
                        className="w-full h-auto object-cover rounded-2xl border border-emerald-500/20 shadow-2xl"
                        glowColor="rgba(16, 185, 129,"
                     />
                     <p className="text-center text-xs text-emerald-500/60 font-mono mt-2">Fig 2.2 - Mapa de calor dos chips funcionais</p>
                     <TunnelImage
                        src="corte1.jpg" // Usando a imagem correta do upload (Mapa colorido)
                        alt="Mapa de Wafer (Binning Map)"
                        className="w-full h-auto object-cover rounded-2xl border border-emerald-500/20 shadow-2xl"
                        glowColor="rgba(16, 185, 129,"
                     />
                     <p className="text-center text-xs text-emerald-500/60 font-mono mt-2">Fig 2.2 - Mapa de calor dos chips funcionais</p>


                  </div>

                  {/* Coluna Direita: Lista de Classificação */}
                  <div className="order-1 md:order-2">
                     <h4 className="text-2xl font-bold text-white mb-6">3. Corte a laser e montagem do substrato</h4>
                     <p className="text-slate-400 text-sm mb-6 text-justify">
                        Os chips funcionais são então recortados com laser industrial em condições limpas e controladas.
                        Cada dado individual é montado sobre um substrato cerâmico ou de silício,
                        chamado interposer. Este elemento contém milhares de microvias condutivas
                        que ligam terminais do chip aos contatos externos que se conectam à placa mãe.                      </p>

                     <div className="bg-slate-950 p-6 rounded-xl border border-lime-900/40 shadow-lg shadow-lime-900/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-lime-500/10 transition-all duration-700"></div>

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                           <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 shadow-inner">
                              <Cpu className="w-8 h-8 text-lime-400" strokeWidth={1.5} />
                           </div>
                           <div>
                              <h3 className="text-lg font-bold text-lime-50">Classificação Industrial</h3>
                              <p className="text-xs text-lime-400/70 font-mono tracking-wider">BINNING PROCESS</p>
                           </div>
                        </div>

                        <div className="space-y-3 relative z-10">
                           {/* Nível 1 */}
                           <div className="flex gap-4 p-3 rounded-lg bg-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors group/item">
                              <ShieldCheck className="w-5 h-5 text-emerald-600 group-hover/item:text-emerald-400 mt-1 shrink-0 transition-colors" />
                              <div>
                                 <p className="text-sm font-bold text-slate-200">Chips Premium (Gold)</p>
                                 <p className="text-xs text-slate-400 mt-1 mb-2">Totalmente funcionais. Destinados às linhas superiores.</p>
                                 <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-950 text-emerald-300 border border-emerald-900">Ex: Intel i9, Xeon [cite: 41]</span>
                              </div>
                           </div>
                           {/* Nível 2 */}
                           <div className="flex gap-4 p-3 rounded-lg bg-slate-900/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group/item">
                              <Split className="w-5 h-5 text-yellow-600 group-hover/item:text-yellow-400 mt-1 shrink-0 transition-colors" />
                              <div>
                                 <p className="text-sm font-bold text-slate-200">Núcleos Desativados</p>
                                 <p className="text-xs text-slate-400 mt-1 mb-2">Núcleos defeituosos são reconfigurados para versões menores.</p>
                                 <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-yellow-950/50 text-yellow-300 border border-yellow-900/50">Ex: i5, i3</span>
                              </div>
                           </div>
                           {/* Nível 3 */}
                           <div className="flex gap-4 p-3 rounded-lg bg-slate-900/50 border border-red-500/20 hover:border-red-500/40 transition-colors group/item">
                              <MonitorOff className="w-5 h-5 text-red-600 group-hover/item:text-red-400 mt-1 shrink-0 transition-colors" />
                              <div>
                                 <p className="text-sm font-bold text-slate-200">GPU Defeituosa (Série F)</p>
                                 <p className="text-xs text-slate-400 mt-1 mb-2">Vendidos como modelos sem gráficos integrados.</p>
                                 <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-red-950/50 text-red-300 border border-red-900/50">Ex: i5-12400F </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>


               {/* BLOCO 3: INTERCONEXÃO E MONTAGEM
             Full Width
          */}
               <div className="mt-12">
                  <div className="relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-12 overflow-hidden">
                     {/* Efeito de linha "Laser" no topo */}
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

                     <div className="flex flex-col md:flex-row gap-6 items-center">

                        {/* Ícone com destaque */}
                        <div className="shrink-0 relative group">
                           <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/30 transition-all"></div>
                           <div className="relative p-4 bg-slate-950 border border-emerald-500/30 rounded-xl shadow-lg">
                              <Combine className="w-8 h-8 text-emerald-400" />
                           </div>
                        </div>

                        {/* Conteúdo de Texto */}
                        <div className="text-center md:text-left">
                           <h4 className="text-2xl font-bold text-white mb-2">03.1 Corte e Interconexão</h4>
                           <p className="text-slate-300 text-base leading-relaxed max-w-3xl">
                              Após os testes, os chips funcionais são  então recortados com
                              <span className="text-emerald-300 font-medium">corte a laser</span> industrial em condições limpas e controladas e separados do wafer.
                              Cada dado individual é montado sobre um substrato cerâmico ou de silício, chamado (interposer)
                              Este elemento contém milhares de microvias condutivas que ligam terminais do chip aos
                              contatos externos que se conectam à placa mãe usando uma das duas técnicas abaixo:
                           </p>
                        </div>

                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     {/* Flip Chip */}
                     <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group hover:bg-slate-900/80">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-emerald-500/50 transition-all">
                              <Layers className="w-6 h-6 text-emerald-500" />

                              <div>
                                 <h5 className="text-lg font-bold text-emerald-100 mb-2">Flip Chip</h5>
                                 <TunnelImage
                                    src="processador-interprose.png" // Usando a imagem correta do upload (Mapa colorido)
                                    alt="Mapa de Wafer (Binning Map)"
                                    className="w-full h-auto object-cover rounded-2xl border border-emerald-500/20 shadow-2xl"
                                    glowColor="rgba(16, 185, 129,"
                                 />
                                 <TunnelImage
                                    src="chip-invertido2.png" // Usando a imagem correta do upload (Mapa colorido)
                                    alt="Mapa de Wafer (Binning Map)"
                                    className="w-full h-auto object-cover rounded-2xl border border-emerald-500/20 shadow-2xl"
                                    glowColor="rgba(16, 185, 129,"
                                 />
                                 <p className="text-sm text-slate-400 leading-relaxed">
                                    O chip é invertido e conectado diretamente via esferas de solda.
                                 </p></div>
                           </div>
                        </div>
                     </div>

                     {/* Wire Bonding */}
                     <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 group hover:bg-slate-900/80">
                        <div className="flex items-start gap-4">
                           <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-emerald-500/50 transition-all">
                              <Activity className="w-6 h-6 text-lime-500" />


                              <div>
                                 <h5 className="text-lg font-bold text-emerald-100 mb-2">Wire Bonding</h5>
                                 <TunnelImage
                                    src="chip-fios.jpg" // Usando a imagem correta do upload (Mapa colorido)
                                    alt="Mapa de Wafer (Binning Map)"
                                    className="w-full h-auto object-cover rounded-2xl border border-emerald-500/20 shadow-2xl"
                                    glowColor="rgba(16, 185, 129,"
                                 />
                                 <TunnelImage
                                    src="chip-fios2.jpg" // Usando a imagem correta do upload (Mapa colorido)
                                    alt="Mapa de Wafer (Binning Map)"
                                    className="w-full h-auto object-cover rounded-2xl border border-emerald-500/20 shadow-2xl"
                                    glowColor="rgba(16, 185, 129,"
                                 />
                                 <p className="text-sm text-slate-400 leading-relaxed">
                                    Utiliza fios de ouro ou alumínio ultrafinos para ligar as bordas do chip.                              </p></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>

         {/* =====================================================================================
           SEÇÃO 04: ENCAPSULAMENTO E DISSIPAÇÃO TÉRMICA (A ARMADURA FINAL)
           ===================================================================================== 
      */}
         <section className="py-24 px-4 bg-[#0a0f1d] border-t border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Efeitos de Fundo "Sci-Fi" */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0f1d] to-[#000000] opacity-80"></div>

            {/* Linhas de energia verticais */}
            <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 blur-[1px]"></div>
            <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 blur-[1px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">

               {/* Cabeçalho da Seção com Estilo Industrial */}
               <div className="flex items-center gap-6 mb-16 p-4 bg-slate-900/50 border-l-4 border-emerald-500 rounded-r-2xl backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-4 bg-slate-950 border border-emerald-500/30 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.15)] relative z-10">
                     <Package className="w-10 h-10 text-emerald-400" strokeWidth={1.2} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                        04. Protocolo de Encapsulamento
                     </h3>
                     <p className="text-emerald-400/70 font-mono text-sm uppercase tracking-widest mt-1">Blindagem Térmica e Mecânica Final</p>
                  </div>
               </div>

               <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* COLUNA ESQUERDA: VISUALIZAÇÃO DA MONTAGEM (O "Sanduíche" Tecnológico) */}
                  <div className="relative group">
                     {/* Aura de energia atrás da imagem */}
                     <div className="absolute inset-0 bg-emerald-600/20 blur-[100px] rounded-full group-hover:bg-emerald-500/30 transition-all duration-700"></div>

                     {/* Moldura de Containment Sci-Fi */}
                     <div className="relative z-10 bg-slate-950/80 p-2 rounded-3xl border border-slate-700/50 backdrop-blur-xl overflow-hidden">
                        {/* Efeito de scanner passando */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400/50 blur-sm animate-[scan_4s_ease-in-out_infinite] opacity-30"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20">
                           <TunnelImage
                              src="pasta-termica.png"
                              alt="Aplicação da Pasta Térmica (TIM)"
                              className="w-full h-auto object-cover mb-2 rounded-lg" // Adicionei mb-2 para separar as imagens
                              glowColor="rgba(16, 185, 129,"
                           />
                           <TunnelImage
                              src="encapsulamento.jpg"
                              alt="Colocação do IHS"
                              className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                              glowColor="rgba(16, 185, 129,"
                           />

                           {/* Overlay de dados técnicos */}
                           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent border-t border-emerald-500/10">
                              <div className="flex justify-between text-xs font-mono">
                                 <span className="text-emerald-400/80">STATUS: APPLYING IHS</span>
                                 <span className="text-slate-500">FORCE: 15N</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* COLUNA DIREITA: OS PROTOCOLOS (Cards de Informação) */}
                  <div className="space-y-20">
                     <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                        O silício nu é frágil e gera calor extremo. Para se tornar um produto viável, para garantir proteção mecânica e dissipação térmica, o chip recebe:
                     </p>

                     {/* Card 1: TIM & IHS (A Dissipação) */}
                     <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-300 group/card relative overflow-hidden">
                        {/* Brilho de fundo no hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000"></div>

                        <div className="flex items-start gap-4 relative z-10">
                           <div className="p-3 bg-[#0f172a] rounded-lg border border-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                              <Shield className="w-8 h-8 text-emerald-500" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                 Interface e Dissipador (TIM & IHS)
                                 <Thermometer className="w-4 h-4 text-emerald-400" />
                              </h4>
                              <ul className="space-y-3 text-slate-400 text-sm">
                                 <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                                    <span>
                                       <strong className="text-emerald-200">Camada TIM:</strong> Material de Interface Térmica (pasta ou solda) aplicado diretamente sobre o die para máxima transferência de calor.
                                    </span>
                                 </li>
                                 <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                                    <span>
                                       <strong className="text-emerald-200">Tampa IHS:</strong> O "Integrated Heat Spreader" metálico protege o núcleo e distribui o calor para o cooler do usuário.
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                     {/* Card 2: Conexões e Identidade */}
                     <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-300 group/card relative overflow-hidden">
                        {/* Brilho de fundo no hover (Azul para diferenciar) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000"></div>

                        <div className="flex items-start gap-4 relative z-10">
                           <div className="p-3 bg-[#0f172a] rounded-lg border border-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                              <Grid className="w-8 h-8 text-blue-400" />
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                 Conexão Externa e Identidade
                                 <ScanBarcode className="w-4 h-4 text-blue-400" />
                              </h4>
                              <ul className="space-y-3 text-slate-400 text-sm">
                                 <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></span>
                                    <span>
                                       <strong className="text-blue-200">Contatos LGA:</strong> Matriz de contatos (Land Grid Array) aplicada na parte inferior para conexão com o soquete da placa-mãe.
                                    </span>
                                 </li>
                                 <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></span>
                                    <span>
                                       <strong className="text-blue-200">Gravação a Laser:</strong> O IHS recebe o batismo final com número de série, modelo e lote gravados na superfície metálica.
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </section>


         {/*=====================================================================================
               SEÇÃO: COMPONENTES FUNDAMENTAIS (O TRANSISTOR)
               ===================================================================================== 
            */}
         <section className="py-20 px-4 bg-[#050a14] relative overflow-hidden">

            {/* Elemento Decorativo de Fundo (Grid) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-[#050a14] to-transparent"></div>
            <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-[#050a14] to-transparent"></div>

            <div className="max-w-5xl mx-auto relative z-10">

               {/* Cabeçalho */}
               <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     FUNDAMENTOS DE HARDWARE
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                     O Coração do Processamento
                  </h2>
                  <p className="text-slate-400 max-w-2xl mx-auto">
                     Entendendo o componente que torna a era digital possível.
                  </p>
               </div>

               {/* Conteúdo Principal: O Transistor */}
               <div className="grid md:grid-cols-12 gap-8">

                  {/* Coluna Esquerda: A Analogia (3 colunas) */}
                  <div className="md:col-span-4 space-y-4">
                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                              <Brain className="w-8 h-8 text-indigo-400" />
                           </div>
                           <h4 className="text-lg font-bold text-indigo-100">O Neurônio</h4>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                           No cérebro humano, neurônios transmitem sinais químicos e elétricos para processar pensamentos.
                        </p>
                     </div>

                     <div className="flex justify-center text-slate-600">
                        <ArrowRight className="rotate-90 md:rotate-0" />
                     </div>

                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                              <Microchip className="w-8 h-8 text-emerald-400" />
                           </div>
                           <h4 className="text-lg font-bold text-emerald-100">O Transistor</h4>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                           Na computação, o transistor é a unidade básica. Replicado bilhões de vezes, cria a "inteligência" da máquina.
                        </p>
                     </div>
                     <p>
                        No contexto dos processadores modernos, o interesse maior está no primeiro comportamento, pois toda a computação digital se baseia em 0 e 1, ou seja, em níveis de tensão que representa desligado ou ligado.
                     </p>
                  </div>

                  {/* Coluna Direita: Explicação Técnica (8 colunas) */}
                  <div className="md:col-span-8 bg-slate-900/40 rounded-3xl border border-slate-800 p-8 relative overflow-hidden">
                     {/* Glow effect */}
                     <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                     <h3 className="text-2xl font-bold text-white mb-6">Interruptor Eletrônico Controlável</h3>

                     <p className="text-slate-300 text-lg leading-relaxed mb-8 text-justify">
                        O transistor é o bloco construtivo fundamental da computação moderna. Ele é para a eletrônica o que o neurónio é para o cérebro humano:
                        uma unidade básica que, quando replicada em grandes quantidades e organizada em estruturas complexas, permite o surgimento de componentes inteligentes,
                        podemos usar como referência um interruptor eletrônico controlável, que pode como chave digital amplificar sinais elétricos ou atuar ou
                        atuar como chave digital, abrindo ou fechando caminhos para a corrente elétrica com base em uma tensão de entrada. Na sua essência funciona
                        como um interruptor eletrônico controlável, que pode amplificar sinais elétricos com base em uma tensão de entrada. Dependendo da
                        sua da tensão aplicada em seu terminal de controle, ele pode permitir ou bloquear a passagem de corrente elétrica. Esse comportamento
                        possibilita duas funções essenciais: </p>


                     <div className="grid sm:grid-cols-2 gap-6">

                        {/* Card Função 1: Chave Digital */}
                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all group">
                           <div className="flex items-center gap-3 mb-3">
                              <ToggleRight className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                              <h5 className="font-bold text-white">Chave Digital</h5>
                           </div>
                           <p className="text-sm text-slate-400">
                              Atuar como chave digital. Abrindo ou fechando o fluxo de corrente,
                              representando os estados lógicos 0 1.
                              É a base do sistema binário:
                              <br />
                              <span className="font-mono text-emerald-500">Ligado (1)</span> vs <span className="font-mono text-red-500">  Desligado (0)</span>.
                           </p>
                        </div>

                        {/* Card Função 2: Amplificador */}
                        <div className="bg-slate-950 p-5 rounded-xl border border-slate-700/50 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all group">
                           <div className="flex items-center gap-3 mb-3">
                              <Zap className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                              <h5 className="font-bold text-white">Amplificador</h5>
                           </div>
                           <p className="text-sm text-slate-400">
                              Aumenta a intensidade de sinais fracos. Essencial em interfaces de áudio e rádio (menos usado no núcleo digital lógico).
                           </p>
                        </div>

                     </div>

                     <div className="mt-8 pt-6 border-t border-slate-800">
                        <p className="text-sm text-slate-500 italic">
                           "No contexto dos processadores modernos, o foco é a função de <strong>Chave Digital</strong>. Toda a computação, de um cálculo simples à IA, baseia-se nestes bilhões de interruptores alternando entre 0 e 1."
                        </p>
                     </div>

                  </div>

               </div>
            </div>
         </section>

         {/* =====================================================================================
    SEÇÃO: TRANSISTORES E LÓGICA (O ALFABETO DIGITAL)
    ===================================================================================== 
*/}
         <section className="relative py-24 px-4 bg-[#050a14] overflow-hidden">

            {/* 1. FUNDO QUADRICULADO (GRID) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-transparent to-[#050a14]"></div>

            <div className="max-w-6xl mx-auto relative z-10">

               {/* Cabeçalho */}
               <div className="mb-16">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
                     <Cpu className="text-emerald-500 w-8 h-8" />
                     Arquitetura de Transistores & Lógica
                  </h3>
                  <p className="text-slate-400 max-w-2xl">
                     Do átomo ao bit: como a física dos semicondutores cria a linguagem binária.
                  </p>
               </div>

               <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group mb-12">
                  {/* Decoração de Fundo */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

                  {/* Cabeçalho */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                     <div className="p-3 bg-slate-950 rounded-lg border border-slate-700 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                        <Cpu className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-white">O Padrão da Indústria: MOSFET</h3>
                        <p className="text-xs text-blue-400/70 font-mono tracking-wider">METAL-OXIDE SEMICONDUCTOR</p>
                     </div>
                  </div>

                  {/* Conteúdo Principal */}
                  <div className="space-y-6 relative z-10">
                     <p className="text-slate-300 text-lg leading-relaxed text-justify">
                        MOSFETs (Metal-Oxide Semicondutor Field-Efect Transistor) são os mais utilizados. <br />
                        Em microprocessadores atuais, utiliza-se a tecnologia CMOS ( COmplementary Metal-Oxide-Semiconductor), que combina transistores NMOS e PMOS para formar portas lógicas com baixíssimo consumo de energia.


                     </p>

                     {/* Visualização da Lógica CMOS */}
                     <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Lado A: NMOS */}
                        <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 rounded border border-emerald-900/50">
                           <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                           <span className="text-emerald-100 font-mono text-sm font-bold">NMOS</span>
                        </div>

                        <span className="text-slate-500 font-light">+</span>

                        {/* Lado B: PMOS */}
                        <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 rounded border border-blue-900/50">
                           <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></span>
                           <span className="text-blue-100 font-mono text-sm font-bold">PMOS</span>
                        </div>

                        <ArrowRight className="text-slate-600 hidden md:block" />

                        {/* Resultado: Eficiência */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded border border-slate-600 shadow-lg">
                           <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                           <span className="text-slate-200 text-xs font-bold uppercase tracking-wide">
                              Baixíssimo Consumo
                           </span>
                        </div>
                     </div>

                     <p className="text-slate-400 text-sm italic border-l-2 border-slate-700 pl-4">
                        "Essa combinação permite formar portas lógicas onde apenas um dos lados conduz por vez, minimizando drasticamente a perda de energia quando o processador está ocioso."
                     </p>
                  </div>
               </div>

               {/* MÓDULO 1: O MOSFET (Estrutura) */}
               <div className="mb-16">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                     <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
                     Estrutura MOSFET
                  </h4> <br />
                  <p className="text-slate-300 text-lg leading-relaxed text-justify">
                     Um MOSFET possui três terminais principais:
                  </p> <br />

                  <div className="grid md:grid-cols-3 gap-6">
                     {/* Source */}
                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                           <ArrowRight className="w-16 h-16 text-emerald-500" />
                        </div>
                        <div className="text-emerald-400 font-mono text-sm mb-2">TERMINAL 01</div>
                        <h5 className="text-2xl font-bold text-white mb-2">Source (S)</h5>
                        <p className="text-slate-400 text-sm">A "Torneira". Fonte de elétrons. É o ponto de entrada da corrente no transistor.</p>
                     </div>

                     {/* Gate */}
                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 animate-pulse"></div>
                        <div className="text-emerald-400 font-mono text-sm mb-2">CONTROLADOR</div>
                        <h5 className="text-2xl font-bold text-white mb-2">Gate (G)</h5>
                        <p className="text-slate-300 text-sm">A "Válvula". Porta de controle isolada que decide, via tensão elétrica, se a corrente passa ou não.</p>
                     </div>

                     {/* Drain */}
                     <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all group relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                           <ArrowRight className="w-16 h-16 text-emerald-500" />
                        </div>
                        <div className="text-emerald-400 font-mono text-sm mb-2">TERMINAL 02</div>
                        <h5 className="text-2xl font-bold text-white mb-2">Drain (D)</h5>
                        <p className="text-slate-400 text-sm">O "Ralo". Dreno por onde a corrente sai após atravessar o canal condutivo.</p>
                     </div>
                  </div>
               </div>

               {/* MÓDULO 2: TECNOLOGIA CMOS (NMOS vs PMOS) */}
               <div className="mb-16">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                     <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                     Tecnologia CMOS (Complementary MOS)
                  </h4>
                  <p className="text-slate-400 mb-6">A combinação inteligente que permite o baixíssimo consumo de energia dos processadores modernos.
                     Existem dois tipos complementares de MOSFET que formão a base do CMOS ( Complementary MOS), usado em praticamente todos os chips modernos:
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">

                     {/* NMOS Card */}
                     <div className="bg-[#0a0f18] border border-emerald-900/50 p-6 rounded-xl flex gap-4 items-start relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                        <div className="p-3 bg-emerald-950 rounded-lg border border-emerald-800 text-emerald-400 shrink-0">
                           <Plus className="w-6 h-6" />
                        </div>
                        <div>
                           <h5 className="text-lg font-bold text-white">NMOS (Canal N)</h5>
                           <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 my-2">
                              <span className="bg-emerald-950/50 px-2 py-1 rounded border border-emerald-900">ATIVA EM 1 (HIGH)</span>
                           </div>
                           <p className="text-sm text-slate-400 leading-relaxed">
                              Atua como chave fechada quando recebe carga positiva. Os elétrons fluem do Source para o Drain.
                           </p>
                           <p className="text-sm text-slate-400 leading-relaxed">
                              -  Conduz corrente quando a tensão no Gate é alta (nível lógico 1). <br />

                              -  Atua como um interruptor fechado para alto nível. <br />

                              -  Os elétrons, que são as cargas móveis, se deslocam do Source para o Drain. <br />

                           </p>

                        </div>
                     </div>

                     {/* PMOS Card */}
                     <div className="bg-[#0a0f18] border border-blue-900/50 p-6 rounded-xl flex gap-4 items-start relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="p-3 bg-blue-950 rounded-lg border border-blue-800 text-blue-400 shrink-0">
                           <Minus className="w-6 h-6" />
                        </div>
                        <div>
                           <h5 className="text-lg font-bold text-white">PMOS (Canal P)</h5>
                           <div className="flex items-center gap-2 text-xs font-mono text-blue-400 my-2">
                              <span className="bg-blue-950/50 px-2 py-1 rounded border border-blue-900">ATIVA EM 0 (LOW)</span>
                           </div>
                           <p className="text-sm text-slate-400 leading-relaxed">
                              Inverso do NMOS. Conduz corrente quando a tensão é baixa. Seus portadores são "lacunas" (ausência de elétrons).
                           </p>

                           <p className="text-sm text-slate-400 leading-relaxed">
                              -  Conduz corrente quando a tensão no gate é baixa (nivel lógico 0). <br />

                              -  Atua como um interruptor fechado para o nível baixo. <br />

                              -  Os portadores majoritários são lacunas, o oposto do elétron. <br />
                           </p>
                        </div>
                     </div>

                     <div className="space-y-8 mb-16">

                        {/* BLOC 1: A MÁGICA DO CMOS (Eficiência) */}
                        <div className="bg-slate-900/60 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                           {/* Efeito de "Economia de Energia" */}
                           <div className="absolute top-0 right-0 p-4 opacity-5">
                              <ZapOff className="w-32 h-32" />
                           </div>

                           <div className="flex gap-4 relative z-10">
                              <div className="p-3 bg-emerald-950/50 rounded-lg border border-emerald-500/30 h-fit">
                                 <ZapOff className="w-6 h-6 text-emerald-400" />
                              </div>
                              <div>
                                 <h4 className="text-xl font-bold text-white mb-2">O Segredo do Baixo Consumo</h4>
                                 <p className="text-slate-300 text-base leading-relaxed text-justify">
                                    O uso combinado de NMOS e PMOS permite construir portas lógicas onde <span className="text-emerald-400 font-medium">apenas uma das redes conduz por vez</span>. Isso minimiza drasticamente a dissipação de corrente estática, permitindo que bilhões de transistores operem sem derreter o chip.
                                 </p>
                              </div>
                           </div>
                        </div>



                     </div>
                     {/* BLOC 2: O PAPEL NA COMPUTAÇÃO (A Analogia) */}
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-blue-500">
                           Do Transistor à Linguagem
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">

                           {/* Etapa A: O Transistor como Chave */}
                           <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-all group">
                              <div className="flex justify-between items-start mb-4">
                                 <div className="p-2 bg-blue-900/20 rounded-lg text-blue-400">
                                    <ToggleRight className="w-8 h-8" />
                                 </div>
                                 <span className="text-xs font-mono text-slate-500">UNIDADE BÁSICA</span>
                              </div>
                              <h5 className="text-lg font-bold text-slate-200 mb-2">A Chave (0 ou 1)</h5>
                              <p className="text-sm text-slate-400">
                                 Um único NMOS atua como um interruptor simples: ele fecha o circuito quando recebe um sinal de <strong className="text-blue-300">1 Lógico</strong>. É a menor decisão possível.
                              </p>
                           </div>

                           {/* Etapa B: Portas como Alfabeto */}
                           <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-purple-500/40 transition-all group">
                              <div className="flex justify-between items-start mb-4">
                                 <div className="p-2 bg-purple-900/20 rounded-lg text-purple-400">
                                    <Type className="w-8 h-8" />
                                 </div>
                                 <span className="text-xs font-mono text-slate-500">ESTRUTURA COMPLEXA</span>
                              </div>
                              <h5 className="text-lg font-bold text-slate-200 mb-2">O Alfabeto Digital</h5>
                              <p className="text-sm text-slate-400">
                                 Ao combinar NMOS e PMOS, criamos <strong>Portas Lógicas</strong>. Elas são as "letras" (AND, OR, NOT) com as quais todo o "alfabeto" e a "literatura" da computação digital são escritos.
                              </p>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>

               {/* MÓDULO 3: PORTAS LÓGICAS (O ALFABETO) */}
               <div>
                  <div className="flex items-center justify-between mb-6">
                     <h4 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                        O Alfabeto Digital (Portas Lógicas)
                     </h4>
                     <Binary className="text-purple-500 w-6 h-6 opacity-50" />
                  </div>



                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                     {/* Card Lógico Reutilizável - NOT */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">INVERSOR</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">NOT</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">¬A</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Inverte o sinal. Se entra 1, sai 0.</p>
                     </div>

                     {/* AND */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">CONJUNÇÃO</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">AND</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">A ∧ B</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Saída 1 apenas se TODAS as entradas forem 1.</p>
                     </div>

                     {/* OR */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">DISJUNÇÃO</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">OR</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">A ∨ B</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Saída 1 se PELO MENOS uma entrada for 1.</p>
                     </div>

                     {/* NAND - Linha de baixo */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">NOT AND</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">NAND</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">¬(A ∧ B)</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Oposto da AND. Base da memória Flash.</p>
                     </div>

                     {/* NOR */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">NOT OR</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">NOR</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">¬(A ∨ B)</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Oposto da OR. Saída 1 apenas se tudo for 0.</p>
                     </div>

                     {/* XOR */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">EXCLUSIVA</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">XOR</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">A ⊕ B</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Saída 1 apenas se as entradas forem DIFERENTES.</p>
                     </div>



                     {/* XNOR */}
                     <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 hover:border-purple-500/50 transition-colors group">
                        <div className="text-xs font-mono text-slate-500 mb-1">COINCIDÊNCIA</div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">XNOR</div>
                        <div className="text-lg font-mono text-purple-300 mb-2">¬(A ⊕ B)</div>
                        <p className="text-xs text-slate-400 border-t border-slate-800 pt-2">Saída é 1 se A = B (Iguais).</p>
                     </div>



                  </div>

                  <div className="mt-8 p-4 bg-purple-900/10 border border-purple-500/20 rounded-xl flex items-center gap-4">
                     <Workflow className="text-purple-400 w-6 h-6 shrink-0" />
                     <p className="text-sm text-purple-200">
                        <strong>A Magia da Escala:</strong> Milhões dessas portas simples se organizam para formar blocos complexos como Somadores, Comparadores e a ALU (Unidade Lógica Aritmética), permitindo que o processador faça matemática e tome decisões.
                     </p>


                  </div> <br />

                  <p className="text-slate-400 mb-6">
                     Em escala industrial, os transistores modernos atingem dimensões de nanômetros, menores que o comprimento de onda da luz visível.
                     Isso significa que bilhões deles podem ser integrados em uma única pastilha de silício.
                     Um processador Intel i9 de última geração pode conter mais de 10 bilhões
                     de transistores, cada um ligando e desligando bilhões de vezes por segundo.

                  </p>

               </div>

            </div>
         </section>

         <section className="py-24 px-4 bg-black relative">
            {/* CONTAINER DE ALINHAMENTO (A PEÇA QUE FALTAVA) */}
            <div className="max-w-6xl mx-auto">

               {/* =====================================================================================
        SEÇÃO: RESISTORES (O MODERADOR)
        ===================================================================================== 
    */}
               <div className="py-12 border-t border-slate-800/50">

                  <div className="grid lg:grid-cols-2 gap-12 items-center">

                     {/* COLUNA 1: CONCEITO E ANALOGIA */}
                     <div>
                        <div className="flex items-center gap-3 mb-6">
                           <div className="p-2 bg-amber-950/30 rounded-lg border border-amber-500/30">
                              <Activity className="w-6 h-6 text-amber-400" />
                           </div>
                           <h3 className="text-2xl font-bold text-white">Resistores: O Moderador</h3>

                        </div> <br />

                        <h4>
                           <strong> Resistores Controladores da Corrente Elétrica </strong>
                        </h4> <br />

                        <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
                           <p>
                              Se o transistor é cérebro lógico dos circuitos digitais, o resistor pode ser visto
                              como o moderador da eletricidade.
                              Ele não pensa, não toma decisão o, mas tem uma função indispensável: limitar, dividir,
                              e controlar a corrente elétrica dentro de um circuito. Na prática o resistor funciona como
                              uma espécie de estreitamento no caminho dos elétrons. Quando os elétrons tentam passar,
                              encontram uma barreira que não bloqueia totalmente o fluxo, mas dificulta
                              sua passagem - convertendo parte dessa energia em calor.
                           </p>
                           <p>
                              Essa propriedade é descrita pela lei de ohm (V= R ° I), uma das equações mais
                              fundamentais da eletrônica. Ela mostra que a tensão (V) aplicada a um resistor
                              é proporcional à corrente (I) que passa por ele e ao valor da Resistencia (R) do componente.
                           </p>

                           <div className="bg-slate-900/50 p-5 rounded-xl border-l-2 border-amber-500 relative">
                              <p className="italic text-slate-400 text-sm">
                                 "Na prática, funciona como um estreitamento no caminho. Quando os elétrons tentam passar, encontram uma barreira que converte o excesso de energia cinética em <span className="text-amber-400 font-bold">calor</span>."
                              </p>
                           </div>

                           <div className="relative bg-slate-950 border border-amber-500/30 rounded-2xl p-8 overflow-hidden">
                              {/* Background Grid sutil dentro do card */}
                              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(245,158,11,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

                              <div className="relative z-10 text-center">
                                 <h4 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-4">A Lei Fundamental</h4>

                                 {/* A FÓRMULA VISUAL */}
                                 <div className="flex items-center justify-center gap-4 mb-6 text-4xl md:text-5xl font-bold text-white font-mono bg-slate-900/80 py-4 rounded-xl border border-slate-800 shadow-inner">
                                    <span className="text-blue-400" title="Tensão">V</span>
                                    <Equal className="text-slate-600" />
                                    <span className="text-amber-400" title="Resistência">R</span>
                                    <span className="text-slate-600 text-2xl">×</span>
                                    <span className="text-emerald-400" title="Corrente">I</span>
                                 </div>

                                 <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                                    <div className="p-2 rounded bg-blue-950/30 border border-blue-900/30 text-blue-300">
                                       V = Tensão
                                    </div>
                                    <div className="p-2 rounded bg-amber-950/30 border border-amber-900/30 text-amber-300">
                                       R = Resistência
                                    </div>
                                    <div className="p-2 rounded bg-emerald-950/30 border border-emerald-900/30 text-emerald-300">
                                       I = Corrente
                                    </div>
                                 </div>

                                 <p className="mt-6 text-sm text-slate-400">
                                    A tensão aplicada é proporcional à corrente limitada pela resistência.
                                 </p>
                              </div>
                           </div>
                        </div>


                     </div>

                     {/* COLUNA 2: LEI DE OHM (O PAINEL MATEMÁTICO) */}
                     <div className="relative group">
                        {/* Efeito de Calor (Glow Laranja) */}
                        <div className="absolute inset-0 bg-amber-600/10 blur-3xl rounded-full group-hover:bg-amber-600/20 transition-all duration-700"></div>


                        <div className="space-y-8 mb-16">

                           {/* CABEÇALHO DA SUB-SEÇÃO */}
                           <div className="flex items-center gap-3">
                              <div className="h-8 w-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
                              <h4 className="text-xl font-bold text-white">Funções Críticas em Circuitos Digitais</h4>
                           </div>

                           {/* GRID DE FUNÇÕES (4 CARDS) */}
                           <div className="grid md:grid-cols-2 gap-4">

                              {/* Card 1: Controle de Tensão */}
                              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/60 transition-all group">
                                 <div className="flex items-start gap-4">
                                    <div className="p-2 bg-amber-950/30 rounded-lg text-amber-400 group-hover:scale-110 transition-transform">
                                       <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                       <h5 className="font-bold text-amber-100 mb-2">Controle de Tensão</h5>
                                       <p className="text-sm text-slate-400 leading-snug">
                                          Atuam como barreiras de segurança, evitando que partes sensíveis do circuito recebam mais energia do que suportam.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              {/* Card 2: Divisores de Tensão */}
                              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/60 transition-all group">
                                 <div className="flex items-start gap-4">
                                    <div className="p-2 bg-amber-950/30 rounded-lg text-amber-400 group-hover:scale-110 transition-transform">
                                       <Scaling className="w-6 h-6" />
                                    </div>
                                    <div>
                                       <h5 className="font-bold text-amber-100 mb-2">Divisores de Tensão</h5>
                                       <p className="text-sm text-slate-400 leading-snug">
                                          Criam níveis específicos (ex: 1.8V, 3.3V, 5V) a partir de uma fonte maior, essencial para a lógica interna.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              {/* Card 3: Biasing */}
                              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/60 transition-all group">
                                 <div className="flex items-start gap-4">
                                    <div className="p-2 bg-amber-950/30 rounded-lg text-amber-400 group-hover:scale-110 transition-transform">
                                       <Sliders className="w-6 h-6" />
                                    </div>
                                    <div>
                                       <h5 className="font-bold text-amber-100 mb-2">Biasing de Transistores</h5>
                                       <p className="text-sm text-slate-400 leading-snug">
                                          Definem o "ponto de operação", garantindo que o transistor saiba se deve agir como chave (digital) ou amplificador.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                              {/* Card 4: Proteção */}
                              <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/60 transition-all group">
                                 <div className="flex items-start gap-4">
                                    <div className="p-2 bg-amber-950/30 rounded-lg text-amber-400 group-hover:scale-110 transition-transform">
                                       <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    <div>
                                       <h5 className="font-bold text-amber-100 mb-2">Proteção de Carga</h5>
                                       <p className="text-sm text-slate-400 leading-snug">
                                          Limitadores físicos de corrente para LEDs, microcontroladores e outros componentes frágeis que queimariam sem eles.
                                       </p>
                                    </div>
                                 </div>
                              </div>

                           </div>

                           {/* RESUMO: GUARDIÕES (Bloco de Destaque) */}
                           <div className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-950/20 to-slate-950 p-6 sm:p-8">
                              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl"></div>

                              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                                 <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                    <Lock className="h-8 w-8 text-amber-400" />
                                 </div>

                                 <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-white">Os Guardiões do Equilíbrio Elétrico</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                                       Sem os resistores, a potência bruta seria destrutiva. Mesmo o processador mais sofisticado, com seus bilhões de transistores,
                                       seria instantaneamente destruído por correntes descontroladas sem esses moderadores silenciosos.
                                    </p>
                                 </div>
                              </div>
                           </div> <br />
                           <p>
                              Em resumo os resistores são os guardiões do equilíbrio elétrico. Sem eles, mesmo o mais sofisticado processador feito de bilhoes
                              de transistores poderia ser destruido por correntes descontroladas.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* VISUALIZAÇÃO DO "ESTREITAMENTO" (Decorativo) */}
                  <div className="mt-12 flex items-center gap-4 opacity-50 select-none" aria-hidden="true">
                     <span className="text-xs text-slate-600 font-mono">FLUXO DE ELÉTRONS</span>
                     <div className="flex-1 h-12 bg-slate-900 rounded-lg relative overflow-hidden flex items-center px-4 border border-slate-800">
                        {/* Caminho largo */}
                        <div className="h-1 flex-1 bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                        {/* O Resistor (Estreitamento/Calor) */}
                        <div className="w-24 h-4 bg-amber-500/80 mx-2 rounded shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse flex justify-center items-center">
                           <Thermometer className="w-3 h-3 text-amber-950" />
                        </div>
                        {/* Caminho largo (saída) */}
                        <div className="h-1 flex-1 bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                     </div>
                  </div>

               </div>
            </div>
         </section>


         <section className="py-24 px-4 bg-black relative overflow-hidden">

            {/* Fundo com efeito de "Campo Eletrostático" */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>
            <div className="max-w-6xl mx-auto relative z-10">

               <div className="grid lg:grid-cols-2 gap-16 items-center">

                  {/* COLUNA 1: TEXTO E CONCEITO */}
                  <div className="space-y-8">

                     <div className="flex items-center gap-3">
                        <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                           <BatteryCharging className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div>
                           <h3 className="text-3xl font-bold text-white tracking-tight">Capacitor</h3>
                           <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">O Guardião da Energia</p>
                        </div>
                     </div>

                     <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
                        <p>
                           O capacitor é um dos componentes mais cruciais da eletrônica moderna. Diferente do resistor que controla o fluxo,
                           o capacitor atua como um <strong className="text-cyan-300">armazenador temporário de energia</strong>, acumulando
                           e liberando cargas elétricas conforme a necessidade do circuito.
                        </p>

                        <p>
                           De forma simplificada, ele funciona como um pequeno reservatório. Quando uma tensão é aplicada, ele se "carrega",
                           criando um campo eletrostático entre suas placas condutoras separadas por um material isolante chamado <strong>dielétrico</strong>.
                           Quando essa tensão diminui ou o circuito demanda energia, o capacitor devolve rapidamente essa carga.
                        </p>

                        {/* Destaque "Pulmão" */}
                        <div className="bg-slate-900/80 border-l-4 border-cyan-500 p-6 rounded-r-xl relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                           <p className="italic text-slate-200 relative z-10">
                              "Essa característica faz do capacitor um verdadeiro <span className="text-cyan-400 font-bold">pulmão</span> nos sistemas eletrônicos. Em fontes de alimentação, eles reduzem oscilações e ruídos, garantindo que o processador receba uma 'respiração' de energia estável e constante."
                           </p>
                        </div>
                     </div>

                  </div>

                  {/* COLUNA 2: VISUALIZAÇÃO TÉCNICA (O CARD SCI-FI) */}
                  <div className="relative">

                     {/* Card Principal */}
                     <div className="bg-slate-950 border border-cyan-500/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl">

                        {/* Grid de fundo do card */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        {/* 1. Visualização das Placas (Estrutura) */}
                        <div className="mb-8 relative z-10">
                           <div className="flex justify-between items-center mb-2 text-xs font-mono text-cyan-500 uppercase">
                              <span>Placa Condutora A</span>
                              <span>Dielétrico (Isolante)</span>
                              <span>Placa Condutora B</span>
                           </div>

                           <div className="h-24 flex gap-1 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 p-1">
                              {/* Placa Esquerda */}
                              <div className="w-1/3 bg-gradient-to-r from-slate-800 to-cyan-900/80 rounded-l flex items-center justify-center border-r border-cyan-500/50">
                                 <Zap className="text-cyan-400 w-6 h-6 opacity-50" />
                              </div>

                              {/* Dielétrico (O Vazio/Isolante) */}
                              <div className="w-1/3 bg-[#050a10] flex flex-col items-center justify-center gap-1">
                                 <div className="w-[1px] h-full bg-cyan-500/20 dashed"></div>
                                 <span className="text-[10px] text-slate-600 font-mono rotate-90 absolute">NO PASS</span>
                              </div>

                              {/* Placa Direita */}
                              <div className="w-1/3 bg-gradient-to-l from-slate-800 to-cyan-900/80 rounded-r flex items-center justify-center border-l border-cyan-500/50">
                                 <Zap className="text-cyan-400 w-6 h-6 opacity-50" />
                              </div>
                           </div>
                        </div>

                        {/* 2. Visualização da Função (Gráfico de Suavização) */}
                        <div className="relative z-10 bg-slate-900/50 rounded-xl p-4 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                           <div className="flex items-center gap-3 mb-3">
                              <Waves className="w-5 h-5 text-cyan-400" />
                              <h4 className="text-white font-bold text-sm">Filtragem de Ruído</h4>
                           </div>

                           <div className="relative h-16 w-full flex items-center">
                              {/* Linha Tracejada (Tensão Ideal) */}
                              <div className="absolute w-full h-[1px] bg-slate-600 border-dashed border-t border-slate-600 top-1/2"></div>

                              {/* Onda "Suja" (Sem capacitor) - SVG Simulado */}
                              <svg className="absolute w-full h-full text-slate-700 opacity-40" preserveAspectRatio="none">
                                 <path d="M0,32 Q20,10 40,32 T80,32 T120,32 T160,32 T200,32" stroke="currentColor" fill="none" strokeWidth="2" />
                              </svg>

                              {/* Onda "Limpa" (Com capacitor) */}
                              <div className="w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)] rounded-full relative z-10"></div>
                           </div>

                           <p className="text-xs text-slate-400 mt-2">
                              Transforma picos de tensão instáveis em uma linha contínua e segura.
                           </p>
                        </div>

                     </div>

                     {/* Elemento Decorativo: "Carga" Flutuante */}
                     <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
                     <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                  </div>

               </div>


               <div className="mt-16 border-t border-slate-800/50 pt-12">

                  <div className="grid lg:grid-cols-2 gap-12">

                     {/* COLUNA 1: APLICAÇÕES TÁTICAS (O que ele faz) */}
                     <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                           Aplicações Críticas
                        </h4>

                        <div className="space-y-4">

                           {/* Item 1: Filtragem */}
                           <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all flex gap-4 group">
                              <div className="p-3 bg-cyan-950/30 rounded-lg h-fit group-hover:bg-cyan-900/40 transition-colors">
                                 <Radio className="w-6 h-6 text-cyan-400" />
                              </div>
                              <div>
                                 <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Filtragem de Sinais</h5>
                                 <p className="text-slate-400 text-sm leading-relaxed">
                                    Eliminam ruídos e interferência elétrica, assegurando que processadores e memórias recebam sinais "limpos" e legíveis.
                                 </p>
                              </div>
                           </div>

                           {/* Item 2: Acoplamento */}
                           <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all flex gap-4 group">
                              <div className="p-3 bg-cyan-950/30 rounded-lg h-fit group-hover:bg-cyan-900/40 transition-colors">
                                 <ArrowLeftRight className="w-6 h-6 text-cyan-400" />
                              </div>
                              <div>
                                 <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Acoplamento & Desacoplamento</h5>
                                 <p className="text-slate-400 text-sm leading-relaxed">
                                    Permitem a passagem de corrente alternada (AC) enquanto bloqueiam a contínua (DC), protegendo componentes delicados de sobrecargas.
                                 </p>
                              </div>
                           </div>

                           {/* Item 3: Estabilização */}
                           <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all flex gap-4 group">
                              <div className="p-3 bg-cyan-950/30 rounded-lg h-fit group-hover:bg-cyan-900/40 transition-colors">
                                 <Battery className="w-6 h-6 text-cyan-400" />
                              </div>
                              <div>
                                 <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Estabilização de Energia</h5>
                                 <p className="text-slate-400 text-sm leading-relaxed">
                                    Atuam como <span className="text-cyan-300 font-bold">"mini-baterias"</span> de ação instantânea, suprindo energia em picos de consumo da CPU/GPU.
                                 </p>
                              </div>
                           </div>

                        </div>
                     </div>

                     {/* COLUNA 2: ARSENAL DE HARDWARE (Tipos) */}
                     <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <span className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"></span>
                           Tipologias Comuns
                        </h4>

                        <div className="grid grid-cols-1 gap-4">

                           {/* Tipo: Cerâmicos */}
                           <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-purple-500/30 transition-colors">
                              <div className="flex items-center gap-4">
                                 <div className="p-2 bg-slate-900 rounded border border-slate-700">
                                    <Disc className="w-5 h-5 text-yellow-600" /> {/* Amarelo terra p/ cerâmica */}
                                 </div>
                                 <div>
                                    <div className="text-white font-bold">Cerâmicos</div>
                                    <div className="text-xs text-slate-500">Pequenos & Rápidos</div>
                                 </div>
                              </div>
                              <span className="text-xs font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded">ALTA FREQUÊNCIA</span>
                           </div>

                           {/* Tipo: Eletrolíticos */}
                           <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-purple-500/30 transition-colors">
                              <div className="flex items-center gap-4">
                                 <div className="p-2 bg-slate-900 rounded border border-slate-700">
                                    <Database className="w-5 h-5 text-slate-400" /> {/* Formato cilíndrico */}
                                 </div>
                                 <div>
                                    <div className="text-white font-bold">Eletrolíticos</div>
                                    <div className="text-xs text-slate-500">Robustos</div>
                                 </div>
                              </div>
                              <span className="text-xs font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded">ALTA CAPACIDADE</span>
                           </div>

                           {/* Tipo: Tântalo */}
                           <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-purple-500/30 transition-colors">
                              <div className="flex items-center gap-4">
                                 <div className="p-2 bg-slate-900 rounded border border-slate-700">
                                    <Gem className="w-5 h-5 text-orange-500" /> {/* Preciosos */}
                                 </div>
                                 <div>
                                    <div className="text-white font-bold">Tântalo e Polímero</div>
                                    <div className="text-xs text-slate-500">Premium</div>
                                 </div>
                              </div>
                              <span className="text-xs font-mono text-cyan-500 bg-cyan-950/30 px-2 py-1 rounded">MAX ESTABILIDADE</span>
                           </div>

                        </div>

                        <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800 text-xs text-slate-400 italic">
                           *A escolha do capacitor correto define a vida útil da placa-mãe.
                        </div>
                     </div>

                  </div>

                  {/* CONCLUSÃO FINAL (Full Width) */}
                  <div className="mt-16 relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-cyan-900/20 blur-xl"></div>
                     <div className="relative bg-slate-950 border border-cyan-500/30 rounded-2xl p-8 text-center overflow-hidden">

                        {/* Background animado sutil */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                           O Guardião Silencioso
                        </h3>
                        <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
                           Assim como o transistor é a chave da computação moderna, o capacitor é o <span className="text-cyan-400 font-medium">guardião silencioso</span>. Ele garante que o fluxo elétrico nos sistemas digitais seja estável, preciso e confiável. Sem eles, processadores modernos simplesmente não poderiam operar com a velocidade e eficiência que conhecemos hoje.
                        </p>
                     </div>
                  </div>

               </div>

            </div>
         </section>


         <section className="py-24 px-4 bg-black relative overflow-hidden">

            {/* Fundo "Fluxo Magnético" - Fúcsia/Magenta */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-900/30 via-black to-black"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

            <div className="max-w-6xl mx-auto relative z-10">

               <div className="grid lg:grid-cols-2 gap-16 items-center">

                  {/* COLUNA 1: TEXTO E CONCEITO */}
                  <div>

                     {/* Cabeçalho */}
                     <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-fuchsia-950/30 rounded-xl border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.2)] group hover:scale-105 transition-transform">
                           <Magnet className="w-8 h-8 text-fuchsia-400 rotate-45" />
                        </div>
                        <div>
                           <h3 className="text-3xl font-bold text-white tracking-tight">Indutores</h3>
                           <p className="text-fuchsia-400 font-mono text-sm tracking-widest uppercase">Armazenamento Magnético</p>
                        </div>
                     </div>

                     <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
                        <p>
                           O indutor é um componente eletrônico que, assim como o capacitor e o resistor, desempenha um papel essencial na eletrônica
                           e na engenharia de computadores. Diferente dos resistores (que dissipam energia) e dos capacitores que (<strong className="text-fuchsia-400">armazenam energia em campos magnéticos</strong>),
                           os indutores armazenam energia em campos magnéticos gerados pela passagem da corrente elétrica através de suas espiras de fio condutor.
                        </p>

                        {/* Card Comparativo Rápido */}
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono uppercase tracking-tighter">
                           <div className="p-2 rounded bg-amber-950/20 border border-amber-900/30 text-amber-500/50 opacity-50">
                              Resistor<br />Calor
                           </div>
                           <div className="p-2 rounded bg-cyan-950/20 border border-cyan-900/30 text-cyan-500/50 opacity-50">
                              Capacitor<br />Elétrico
                           </div>
                           <div className="p-2 rounded bg-fuchsia-900/40 border border-fuchsia-500 text-fuchsia-300 shadow-[0_0_10px_rgba(217,70,239,0.3)] transform scale-105">
                              Indutor<br />Magnético
                           </div>
                        </div>

                        <p>
                           Quando a corrente elétrica varia, o campo magnético também muda, e isso induz uma tensão contrária à variação da
                           corrente (Lei de Lenz). Esse comportamento faz do indutor um componente fundamental em filtros,
                           fontes de alimentação, memórias magnéticas e circuitos de radiofrequência (RF).
                        </p>
                     </div>

                  </div>
                  {/* COLUNA 2: VISUALIZAÇÃO DA BOBINA (VERSÃO 3.0 - ESCULTURA 3D REAL) */}
                  <div className="relative pt-8 h-full min-h-[400px] flex items-center justify-center">

                     <div className="relative w-full max-w-md aspect-square bg-slate-950 border border-fuchsia-500/30 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(217,70,239,0.15)] group">

                        {/* 1. AMBIENTE: GRADE DE FUNDO */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(217,70,239,0.05)_60%,transparent_100%)]"></div>

                        {/* Anéis orbitais decorativos */}
                        <div className="absolute inset-0 border border-fuchsia-500/10 rounded-full scale-[0.6] animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-0 border border-fuchsia-500/10 rounded-full scale-[0.8] animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>

                        {/* =======================================================
       A ESCULTURA DO INDUTOR (CAMADAS DE PROFUNDIDADE)
       ======================================================= */}

                        <svg className="relative z-20 w-64 h-96" viewBox="0 0 100 200" fill="none">

                           {/* CAMADA 1: FIOS DE TRÁS (Escuros/Foscos) */}
                           <g className="opacity-40">
                              {[0, 1, 2, 3, 4, 5].map((i) => (
                                 <path
                                    key={`back-${i}`}
                                    d={`M 75,${40 + i * 25} Q 50,${25 + i * 25} 25,${40 + i * 25}`}
                                    stroke="#a21caf" // Fuchsia escuro
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                 />
                              ))}
                           </g>

                           {/* CAMADA 2: O NÚCLEO DE ENERGIA (FERRITE BRILHANTE) */}
                           <defs>
                              <linearGradient id="coreGradient" x1="0" y1="0" x2="1" y2="0">
                                 <stop offset="0%" stopColor="#4a044e" stopOpacity="0.8" />
                                 <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
                                 <stop offset="100%" stopColor="#4a044e" stopOpacity="0.8" />
                              </linearGradient>
                              <filter id="glow">
                                 <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                 <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                 </feMerge>
                              </filter>
                           </defs>

                           {/* O Pilar Central */}
                           <rect x="42" y="20" width="16" height="160" rx="8" fill="url(#coreGradient)" filter="url(#glow)" className="animate-pulse" />

                           {/* Brilho Intenso no meio */}
                           <path d="M 50,20 L 50,180" stroke="white" strokeWidth="2" strokeOpacity="0.8" className="blur-[1px]" />


                           {/* CAMADA 3: FIOS DA FRENTE (Brilhantes/Vibrantes) */}
                           <g className="drop-shadow-[0_0_3px_rgba(217,70,239,0.8)]">
                              {[0, 1, 2, 3, 4, 5].map((i) => (
                                 <path
                                    key={`front-${i}`}
                                    d={`M 25,${40 + i * 25} Q 50,${55 + i * 25} 75,${40 + i * 25}`}
                                    stroke="#e879f9" // Fuchsia claro
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    fill="none"
                                 />
                              ))}
                              {/* Reflexo branco sutil nos fios da frente */}
                              {[0, 1, 2, 3, 4, 5].map((i) => (
                                 <path
                                    key={`highlight-${i}`}
                                    d={`M 25,${40 + i * 25} Q 50,${55 + i * 25} 75,${40 + i * 25}`}
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeOpacity="0.4"
                                    strokeLinecap="round"
                                    fill="none"
                                    className="animate-[pulse_3s_infinite]"
                                 />
                              ))}
                           </g>

                           {/* CONEXÕES LATERAIS */}
                           <g className="opacity-40">
                              {[0, 1, 2, 3, 4].map((i) => (
                                 <path
                                    key={`link-${i}`}
                                    d={`M 75,${40 + i * 25} L 75,${40 + (i + 1) * 25}`}
                                    stroke="#a21caf"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                 />
                              ))}
                              {[0, 1, 2, 3, 4].map((i) => (
                                 <path
                                    key={`link-left-${i}`}
                                    d={`M 25,${40 + i * 25} L 25,${40 + (i + 1) * 25}`}
                                    stroke="#a21caf"
                                    strokeWidth="1"
                                    strokeDasharray="2 2"
                                 />
                              ))}
                           </g>

                        </svg>

                        {/* Interface HUD inferior */}
                        <div className="absolute bottom-10 flex flex-col items-center gap-2 z-30">
                           <div className="flex items-center gap-3">
                              <div className="px-3 py-1 rounded bg-fuchsia-950/80 border border-fuchsia-500/30 text-[10px] text-fuchsia-300 font-mono">
                                 L = (N²μA)/l
                              </div>
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-fuchsia-500/50 text-fuchsia-300 text-[10px] font-mono backdrop-blur-md shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                                 <Orbit className="w-3 h-3 animate-spin" />
                                 CAMPO ATIVO
                              </div>
                           </div>
                        </div>

                     </div>

                     {/* Citação Flutuante (Lei de Lenz) */}
                     <div className="absolute -bottom-0 -right-0 md:-right-12 bg-[#0a0a0a]/90 border border-fuchsia-500/50 p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-[200px] z-40 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex items-start gap-3">
                           <Repeat className="w-4 h-4 text-fuchsia-400 shrink-0 mt-1" />
                           <div>
                              <h5 className="text-white text-xs font-bold mb-1">Lei de Lenz</h5>
                              <p className="text-slate-400 text-[10px] leading-tight">
                                 "O campo induzido cria uma força que se <span className="text-fuchsia-400 font-bold">opõe</span> à mudança."
                              </p>
                           </div>
                        </div>
                     </div>

                  </div>

               </div>

               <div className="mt-16 border-t border-fuchsia-500/30 pt-12">

                  <div className="grid lg:grid-cols-2 gap-12">

                     {/* COLUNA 1: O PRINCÍPIO (A Mecânica da Suavização) */}
                     <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <span className="w-2 h-8 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,0.8)]"></span>
                           Princípio de Funcionamento
                        </h4>

                        <div className="space-y-6 text-slate-300 leading-relaxed text-justify mb-8">
                           <p>
                              A mágica acontece no campo magnético. A energia é armazenada temporariamente ao redor da bobina. A regra de ouro é: <strong className="text-fuchsia-300">o indutor odeia mudanças bruscas.</strong>
                           </p>
                           <p>
                              Se a corrente tenta subir ou descer rapidamente, o indutor cria uma força contrária que resiste a essa variação. É como um "amortecedor" elétrico, suavizando picos e preenchendo quedas.
                           </p>
                        </div>

                        {/* VISUALIZAÇÃO GRÁFICA: ANTES vs DEPOIS */}
                        <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 relative overflow-hidden group">
                           {/* Grid de fundo */}
                           <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                           <div className="relative z-10 flex flex-col gap-4">
                              {/* Sinal Ruidoso (Sem Indutor) */}
                              <div className="flex items-center gap-4">
                                 <span className="text-[10px] font-mono text-red-400 w-16 text-right">ENTRADA (CAOS)</span>
                                 <div className="flex-1 h-12 bg-slate-950/50 rounded border border-red-500/20 flex items-center overflow-hidden relative">
                                    <svg className="w-full h-full" preserveAspectRatio="none">
                                       <path d="M0,24 L10,10 L20,30 L30,5 L40,40 L50,15 L60,35 L70,10 L80,30 L90,5 L100,40 L110,15 L120,35 L130,10 L140,30" stroke="#f87171" strokeWidth="2" fill="none" className="opacity-70" />
                                    </svg>
                                 </div>
                              </div>

                              {/* Seta de Processamento */}
                              <div className="flex justify-center">
                                 <ArrowRight className="text-fuchsia-500 rotate-90 md:rotate-0" />
                              </div>

                              {/* Sinal Suavizado (Com Indutor) */}
                              <div className="flex items-center gap-4">
                                 <span className="text-[10px] font-mono text-fuchsia-400 w-16 text-right">SAÍDA (ESTÁVEL)</span>
                                 <div className="flex-1 h-12 bg-slate-950/50 rounded border border-fuchsia-500/20 flex items-center overflow-hidden relative shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                                    <svg className="w-full h-full" preserveAspectRatio="none">
                                       <path d="M0,24 Q30,20 60,24 T140,24" stroke="#d946ef" strokeWidth="3" fill="none" />
                                    </svg>
                                    {/* Brilho percorrendo a linha */}
                                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full blur-[2px] shadow-[0_0_10px_white] animate-[moveRight_2s_linear_infinite] -translate-y-1/2"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* COLUNA 2: APLICAÇÕES PRÁTICAS */}
                     <div>
                        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <span className="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                           Onde são usados?
                        </h4>

                        <div className="space-y-4">

                           {/* Card 1: VRM / Processadores */}
                           <div className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-fuchsia-500/40 hover:bg-slate-900/60 transition-all group">
                              <div className="p-3 bg-fuchsia-950/30 rounded-lg h-fit group-hover:scale-110 transition-transform">
                                 <Cpu className="w-6 h-6 text-fuchsia-400" />
                              </div>
                              <div>
                                 <h5 className="text-white font-bold mb-1">VRMs (Reguladores de Tensão)</h5>
                                 <p className="text-sm text-slate-400">
                                    Em processadores e placas-mãe, indutores são usados em conjunto com capacitores para formar circuitos reguladores de tensão. 
                                    Esses reguladores garantem que o processador receba energia estável, sem oscilações que poderiam comprometer sua performance ou causar falhas.                                 </p>
                              </div>
                           </div>

                           {/* Card 2: Comunicação */}
                           <div className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-fuchsia-500/40 hover:bg-slate-900/60 transition-all group">
                              <div className="p-3 bg-fuchsia-950/30 rounded-lg h-fit group-hover:scale-110 transition-transform">
                                 <Wifi className="w-6 h-6 text-fuchsia-400" />
                              </div>
                              <div>
                                 <h5 className="text-white font-bold mb-1">Filtragem de Frequência</h5>
                                 <p className="text-sm text-slate-400">
                                    Em Wi-Fi e 5G, eles atuam como "porteiros", bloqueando frequências de rádio indesejadas e deixando passar apenas o sinal correto.
                                 </p>
                              </div>
                           </div>

                           {/* Card 3: História */}
                           <div className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-fuchsia-500/40 hover:bg-slate-900/60 transition-all group">
                              <div className="p-3 bg-fuchsia-950/30 rounded-lg h-fit group-hover:scale-110 transition-transform">
                                 <History className="w-6 h-6 text-fuchsia-400" />
                              </div>
                              <div>
                                 <h5 className="text-white font-bold mb-1">O Legado (Memória de Ferrite)</h5>
                                 <p className="text-sm text-slate-400">
                                    Antigamente, anéis de indutores (núcleos de ferrite) eram usados como a própria memória RAM dos computadores, armazenando bits magneticamente.
                                 </p>
                              </div>
                           </div>

                        </div>
                     </div>

                  </div>
               </div>



               {/* SEÇÃO DE APLICAÇÕES (GRID INFERIOR) */}
               <div className="mt-20">
                  <h4 className="text-xl font-bold text-white mb-8 pl-4 border-l-4 border-fuchsia-500">
                     Aplicações Essenciais
                  </h4>

                  <div className="grid md:grid-cols-4 gap-4">

                     {/* App 1: Filtros */}
                     <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:bg-fuchsia-900/10 hover:border-fuchsia-500/40 transition-all group">
                        <div className="mb-3 p-2 bg-slate-950 rounded-lg w-fit group-hover:text-fuchsia-400 transition-colors">
                           <Wind className="w-6 h-6 text-slate-400" />
                        </div>
                        <h5 className="text-white font-bold mb-1">Filtros</h5>
                        <p className="text-xs text-slate-400">Bloqueiam frequências indesejadas em sinais de áudio e dados.</p>
                     </div>

                     {/* App 2: Fontes */}
                     <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:bg-fuchsia-900/10 hover:border-fuchsia-500/40 transition-all group">
                        <div className="mb-3 p-2 bg-slate-950 rounded-lg w-fit group-hover:text-fuchsia-400 transition-colors">
                           <Zap className="w-6 h-6 text-slate-400" />
                        </div>
                        <h5 className="text-white font-bold mb-1">Fontes (VRM)</h5>
                        <p className="text-xs text-slate-400">Essenciais em conversores DC-DC para regular a voltagem da CPU.</p>
                     </div>

                     {/* App 3: Memória */}
                     <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:bg-fuchsia-900/10 hover:border-fuchsia-500/40 transition-all group">
                        <div className="mb-3 p-2 bg-slate-950 rounded-lg w-fit group-hover:text-fuchsia-400 transition-colors">
                           <HardDrive className="w-6 h-6 text-slate-400" />
                        </div>
                        <h5 className="text-white font-bold mb-1">Memória Magnética</h5>
                        <p className="text-xs text-slate-400">Princípio base de HDs tradicionais e novas tecnologias MRAM.</p>
                     </div>

                     {/* App 4: RF */}
                     <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:bg-fuchsia-900/10 hover:border-fuchsia-500/40 transition-all group">
                        <div className="mb-3 p-2 bg-slate-950 rounded-lg w-fit group-hover:text-fuchsia-400 transition-colors">
                           <Radio className="w-6 h-6 text-slate-400" />
                        </div>
                        <h5 className="text-white font-bold mb-1">Radiofrequência</h5>
                        <p className="text-xs text-slate-400">Sintonização de frequências em Wi-Fi, Bluetooth e 5G.</p>
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