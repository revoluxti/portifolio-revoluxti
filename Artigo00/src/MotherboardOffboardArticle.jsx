import React, { useEffect, useRef } from 'react';
import {
  Cpu, Monitor, Zap, Server, Database, Layers, ArrowRight, ShieldCheck,
  BookOpen, AlertTriangle, Terminal, Recycle, Crosshair, ChevronRight,
  Speaker, Wifi, HardDrive, Skull, Mic2, Activity, Radio, Lock, Maximize2
} from 'lucide-react';

/* =====================================================================================
  COMPONENTE AUXILIAR: TunnelImage (Efeito de Profundidade 3D)
  Atualizado para aceitar 'glowColor' e criar o efeito de vitrine magenta/roxa
  =====================================================================================
*/
const TunnelImage = ({ src, alt, className, glowColor = "rgba(217, 70, 239," }) => {
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

          // 1. Escala suave ao rolar
          const scale = 0.85 + (visibility * 0.15);
          image.style.transform = `scale(${scale})`;

          // 2. Luz e Sombra (Dinâmico com a cor passada)
          const shadowOpacity = 1 - visibility;
          const lightOpacity = visibility;

          image.style.boxShadow = `
                        inset 0 0 ${80 * shadowOpacity}px rgba(0,0,0, ${shadowOpacity * 0.9}),
                        0 10px 50px ${glowColor} ${lightOpacity * 0.5})
                    `;

          // 3. Brilho
          const brightness = 0.6 + (visibility * 0.4);
          image.style.filter = `brightness(${brightness})`;
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
                        <div class="flex flex-col items-center justify-center p-8 border-2 border-dashed border-fuchsia-500/30 rounded-xl bg-fuchsia-950/10 w-full h-64">
                            <span class="text-fuchsia-500 font-bold mb-2">Imagem: ${alt}</span>
                            <span class="text-xs text-slate-500 text-center max-w-xs">Adicione o arquivo "${src}" na pasta public do projeto.</span>
                        </div>`
        }}
      />
    </div>
  );
};

/* =====================================================================================
   COMPONENTE PRINCIPAL
   ===================================================================================== */
const MotherboardOffboardArticle = () => {
  return (
    // MUDANÇA CRÍTICA: 'min-h-screen' garante que a página cresça e role.
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-fuchsia-500/30 w-full overflow-x-hidden">

      {/* =====================================================================================
               CABEÇALHO (Baseado no Print)
               ===================================================================================== 
            */}
      <header className="relative bg-slate-900 border-b border-slate-800 pt-32 pb-24 px-4 overflow-hidden">
        {/* Efeitos de fundo (Glow Roxo) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <hgroup>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              SALA DO ENIAC 1946 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Capítulo 02</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-10 leading-relaxed">
              Placa Mãe Parte II Off-board<br />

            </h2>
            <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Universidade Tecnológica Federal do Paraná<span className="hidden md:inline">|</span></p>
            <p className="text-cyan-400 font-mono text-sm tracking-[0.2em] uppercase mb-4"><span className="hidden md:inline">|</span>Câmpus pato Branco<span className="hidden md:inline">|</span></p>
          </hgroup>

          {/* Badge do Autor (Estilo Vitrine) */}
          <div className="inline-flex flex-col md:flex-row items-center gap-5 bg-slate-950/50 p-6 md:py-3 md:px-8 rounded-2xl md:rounded-full border border-fuchsia-500/40 backdrop-blur-md shadow-[0_0_30px_rgba(217,70,239,0.1)]">
            <div className="bg-fuchsia-600 p-2.5 rounded-full shadow-lg shadow-fuchsia-600/40">
              <Cpu size={24} className="text-white" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-[10px] text-fuchsia-300 uppercase font-bold tracking-widest">Autor do Artigo</p>
              <p className="text-white font-bold text-sm">Lucas de Oliveira Santos</p>
            </div>
            <div className="h-8 w-px bg-slate-700 hidden md:block mx-4"></div>
            <div className="text-center md:text-left border-t border-slate-700 pt-3 md:pt-0 md:border-0 w-full md:w-auto mt-3 md:mt-0">
              <p className="text-[10px] text-fuchsia-300 uppercase font-bold tracking-widest">Curso</p>
              <p className="text-white text-sm">Engenharia de Computação</p>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================================================
               SEÇÃO 1: CONCEITO E FILOSOFIA (Páginas 1-2 PDF)
               ===================================================================================== 
            */}
      <section className="py-24 px-4 relative">
        <article className="max-w-6xl mx-auto">
          {/* Marcador de Seção */}
          <div className="flex items-center gap-4 mb-16">
            <div className="bg-fuchsia-500 h-0.5 w-16 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
            <span className="text-fuchsia-400 font-mono font-bold text-lg tracking-widest uppercase">01. O Conceito</span>
            <div className="bg-slate-800 h-px flex-1"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Coluna Texto */}
            <div className="md:col-span-6 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                A Filosofia da <span className="text-fuchsia-500">Dissociação</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                No capítulo anterior, analisou-se a arquitetura on-board sob a ótica da integração funcional,
                da redução de custos e integração econômica da otimização e redução do footprint do espaço físico.
                A incorporação progressiva de controladores de áudio, vídeo, rede e armazenamento diretamente
                na placa-mãe representou um avanço decisivo para a manifestação dos computadores pessoais,
                viabilizando sistemas mais compactos, acessíveis e energeticamente eficientes.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Entretanto, essa integração traz consigo um efeito colateral inevitável: o compartilhamento de recursos físicos e lógicos.
                Ainda que minimizado por arquiteturas modernas, esse modelo impõe limites claros de desempenho, escalabilidade e isolamento elétrico.
                É exatamente nesse ponto que emerge a arquitetura off-board como respostas técnicas - não como retrocesso, mas como especialização estratégica.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Enquanto a arquitetura off-board (ou arquitetura modular dedicada) fundamenta-se na premissa da dissociação de recursos,
                não nega os avanços da integração; ela os complementa. Em vez de concentrar múltiplas funções em único domínio físico
                (a placa-mãe), esse modelo promove a dissociação intencional de cargas computacionais, delegando tarefas críticas a hardware dedicados,
                conectados por barramentos de alta velocidade. O resultado é a mitigação de gargalos,
                a eliminação de contenção por largura de banda e a maximização do desempenho por watt.
              </p>

              {/* Destaque Técnico */}
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-l-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                  <Zap className="w-5 h-5" /> Vantagens Técnicas da Modularidade
                </h4>
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-fuchsia-500 shrink-0" />
                    <span><strong>Isolamento de Interferência:</strong> Componentes de áudio e sinal analógico sofrem menos ruído eletromagnético (EMI) da placa-mãe quando
                      isolados em PCBs dedicados com blindagens próprias (EMI Shields).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-fuchsia-500 shrink-0" />
                    <span><strong>Independência Energética:</strong> Placas dedicadas de alto desempenho (como GPUs e aceleradores de AI)
                      possuem seus próprios estágios de regulação de tensão (VRMs), não dependendo exclusivamente das fases da placa-mãe. </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Recycle className="w-5 h-5 text-fuchsia-500 shrink-0" />
                    <span><strong>Ciclo de Vida Estendido:</strong> Permite a atualização e incremental do parque tecnológico (upgrade parcial)
                      sem a necessidade de substituição do core do sistema (Placa-mãe + CPU).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Coluna Visual (Vitrine de Slots) */}
            <div className="md:col-span-6 space-y-8 mt-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-fuchsia-500/20">
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-fuchsia-500/30 text-xs text-fuchsia-300 font-mono z-10">
                    FIG 1.0 - SLOTS DE EXPANSÃO
                  </div>
                  <TunnelImage
                    src="pcie-slots-motherboard.jpg"
                    alt="Slots PCI Express em Placa Mãe High End"
                    className="w-full h-auto min-h-[300px] object-cover"
                    glowColor="rgba(217, 70, 239,"
                  />
                  <div className="p-4 bg-slate-950/80 border-t border-slate-800">
                    <p className="text-xs text-slate-500 text-center font-mono">
                      O barramento PCIe: A "estrada" de alta velocidade para componentes off-board.
                    </p>
                  </div>
                </div> <br />
                <div className="bg-slate-900/80 p-6 rounded-2xl border border-fuchsia-500/20 text-center">

                  <p className="text-sm text-slate-400 font-mono mb-2">COMPARATIVO DE ARQUITETURA</p>

                  <div className="flex justify-center items-center gap-8 mt-4">

                    <div className="text-center">

                      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 border border-slate-700">

                        <Layers className="text-slate-500" />

                      </div>

                      <span className="text-slate-500 font-bold text-xs">ON-BOARD</span>

                      <p className="text-[10px] text-slate-600">Recursos Compartilhados</p>

                    </div>

                    <ArrowRight className="text-fuchsia-500" />

                    <div className="text-center">

                      <div className="w-16 h-16 bg-fuchsia-900/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-fuchsia-500">

                        <Database className="text-fuchsia-400" />

                      </div>

                      <span className="text-fuchsia-400 font-bold text-xs">OFF-BOARD</span>

                      <p className="text-[10px] text-slate-400">Hardware Dedicado</p>

                    </div>

                  </div>

                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Assim, enquanto a arquitetura on-board atende com excelência as demandas generalistas e corporativas de baixo custo,
                a arquitetura off-board consolida-se como pilar fundamental de ambientes de alta performance, engenharia, ciência de dados,
                produção áudio visual e infraestrutura crítica. Não se trata de uma disputa entre modelos, mas de uma evolução funcional orientada por demanda computacional.
              </p>

              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                No cenário contemporâneo de alta performance (HPC – High Performance Computing), a arquitetura off-board não é apenas uma escolha de luxo,
                mas uma necessidade técnica para controlar gargalos físicos e lógicos inerentes ao compartilhamento de recursos.
                Ao delegar tarefas especificas (renderização gráfica, processamento de áudio, gestão de pacotes de rede) para hardwares dedicados,
                o sistema libera a CPU (Unidade Central de Processamento) e amemória RAM do sistema (DDR) para executarem as instruções de propósito geral,
                eliminando a contenção por largura de banda.
              </p>

              
            </div>
            
          </div> <br />

          <div className="flex items-center gap-4 mb-16">
            <div className="bg-fuchsia-500 h-0.5 w-16 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
            <span className="text-fuchsia-400 font-mono font-bold text-lg tracking-widest uppercase">Componentes de espanção: Análise detalhada <br /></span>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
            A seguir, detalhamos os principais subsistemas que se beneficiam da<br /> arquitetura off-board,  com foco nas especificações que interessa a <br />
            engenheiros e projetistas.
          </p>
          
          

        </article>
      </section>

      {/* =====================================================================================
               SEÇÃO 2: ÁUDIO DEDICADO (Páginas 3-5 PDF)
               ===================================================================================== 
            */}
      <section className="py-24 px-4 bg-slate-900/50 border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-pink-500 h-0.5 w-16 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Speaker className="text-pink-500 w-8 h-8" /> 02. Áudio de Alta Fidelidade (Hi-Fi)
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* IMAGEM: Placa de Som Dedicada */}
              <div className="relative mb-8">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <TunnelImage
                  src="sound-blaster-ae9.jpg"
                  alt="Placa de Som Creative Sound Blaster AE-9"
                  className="w-full h-auto object-contain"
                  glowColor="rgba(236, 72, 153,"
                />
                <div className="flex justify-center gap-4 mt-4">
                  <span className="px-3 py-1 bg-slate-800 rounded border border-pink-500/30 text-pink-400 text-xs font-bold">SNR 129dB</span>
                  <span className="px-3 py-1 bg-slate-800 rounded border border-pink-500/30 text-pink-400 text-xs font-bold">32-bit / 384kHz</span>
                </div>
              </div>

              {/* IMAGEM: Interface Externa */}
              <div className="relative mt-12 opacity-80 hover:opacity-100 transition-opacity">
                <p className="text-xs text-slate-500 uppercase font-bold mb-2 ml-2">Interface Externa (Thunderbolt/USB)</p>
                <TunnelImage
                  src="audio-interface.jpg"
                  alt="Interface de Áudio Externa Profissional"
                  className="w-full h-48 object-contain"
                  glowColor="rgba(168, 85, 247,"
                />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h4 className="text-2xl font-bold text-white mb-6">Por que o áudio On-board não basta?</h4>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                No contexto da arquitetura off-board, as placas de som dedicadas representam a especialização do processamento acústico,
                dissociando tarefas sensíveis de áudio do ambiente ruidoso e compartilhado da placa-mãe.
                Para engenheiros de som, produtores musicais e audiófilos, métricas como SNR (Signal-to-Noise Ratio) e THD+N (Total Harmonic Distortion + Noise)
                são fundamentais para avaliar a fidelidade do sinal, especialmente em aplicações profissionais onde precisão e previsibilidade temporal são críticas.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                Além da qualidade sonora, placas dedicadas incorporam <strong>DSPs (Processadores Digitais de Sinal)</strong>
                para equalização e efeitos em tempo real, reduzindo o consumo de ciclos da CPU e garantindo determinismo temporal. <br /> <br />

                Diferentemente das soluções on-board, o áudio off-board beneficia-se de isolamento elétrico, estágios de alimentação dedicados e layouts de PCB otimizados para sinal analógico, reduzindo interferência eletromagnética (EMI) e ruídos induzidos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-950 p-5 rounded-xl border border-pink-900/40 hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="text-pink-500" size={18} />
                    <h5 className="font-bold text-pink-100">Baixa Latência</h5>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    Drivers ASIO permitem comunicação direta com o hardware, reduzindo a latência de 40-50ms (on-board) para menos de <strong>5ms</strong>[cite: 57, 59].
                  </p>
                </div>
                <div className="bg-slate-950 p-5 rounded-xl border border-pink-900/40 hover:border-pink-500/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="text-pink-500" size={18} />
                    <h5 className="font-bold text-pink-100">Isolamento</h5>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed text-justify">
                    [cite_start]Layouts de PCB otimizados e blindagens (EMI Shields) protegem o sinal analógico do ambiente ruidoso da placa-mãe[cite: 34].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative">
        <article className="max-w-6xl mx-auto">
          {/* Marcador de Seção */}
          <div className="flex items-center gap-4 mb-16">
            <div className="bg-fuchsia-500 h-0.5 w-16 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
            <span className="text-fuchsia-400 font-mono font-bold text-lg tracking-widest uppercase">2.1 Conversão Digital-Analógica Avançada </span>
            <div className="bg-slate-800 h-px flex-1"></div>
          </div>

          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Coluna Texto */}
            <div className="md:col-span-6 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                (DACs  <span className="text-fuchsia-500">Dedicados)</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                Placas de som off-board modernas utilizam DACs de nível estúdio,
                como os da família ESS Sabre, AKM Velvet Sound ou Burr-Brown, capazes de operar com: <br /> <br />

                <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-l-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                  <ul className="space-y-4 text-slate-400 text-sm">
                    <li className="flex items-start gap-3">

                      <span><strong>SNR superior a 127 dB, <br /></strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">

                      <span><strong>Resolução de até 32 bits / 384 kHz, </strong> </span>
                    </li>
                    <li className="flex items-start gap-3">

                      <span><strong>Baixíssimo jitter, garantido por clocks dedicados de alta precisão. <br /></strong>
                      </span>
                    </li>
                  </ul>
                </div>


              </p>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Arquiteturas contemporâneas adotam designs multi-DAC,
                nos quais canais esquerdo e direito utilizam conversores independentes,
                aumentando a separação estéreo e reduzindo crosstalk. Esse nível de refinamento
                é impraticável em soluções integradas devido a restrições físicas, energéticas e de custo.
              </p>

              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                2.2 Processamento de Sinal Digital Off-board    <span className="text-fuchsia-500">(DSP)</span>
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Um avanço significativo nas placas de som dedicadas é a incorporação de DSPs embarcados,
                responsáveis por executar processamento de áudio em tempo real diretamente no hardware da placa.
                Entre as funções delegadas a esses processadores estão:
              </p>

              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-l-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li className="flex items-start gap-3">

                    <span><strong>Equalização paramétrica e dinâmica,  <br /></strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Compressão e limitação, </strong> </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Simulação de amplificadores e ambientes acústicos,  <br /></strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Monitoramento com efeitos em tempo real (zero-latency monitoring).  <br /></strong>
                    </span>
                  </li>
                </ul>
              </div> <br />
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Esse modelo reduz o consumo de ciclos da CPU e garante determinismo temporal, característica essencial em fluxos de
                gravação e produção profissional. A tendência evolutiva aponta para pipelines híbridos, combinando DSP clássico com
                inferência local baseada em inteligência artificial para tratamento adaptativo do sinal.
              </p>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-fuchsia-500/20">
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded border border-fuchsia-500/30 text-xs text-fuchsia-300 font-mono z-10">
                    FIG 2.0 - ###########
                  </div>
                  <TunnelImage
                    src="pcie-slots-motherboard.jpg"
                    alt="Slots PCI Express em Placa Mãe High End"
                    className="w-full h-auto min-h-[300px] object-cover"
                    glowColor="rgba(217, 70, 239,"
                  />
                </div> <br />
              </div> <br /> <br />
              <div className="w-full h-auto min-h-[300px] object-cover"
                    glowColor="rgba(217, 70, 239,">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur amet, quidem, doloremque omnis, eaque inventore ducimus hic odio commodi non voluptates perferendis in aperiam nesciunt nisi eum magnam facere asperiores!
                      </p>
                <TunnelImage src="publi2.jpeg" alt="Evolução Placa Mãe" className="w-full h-full object-cover" />
              </div>
              

              {/* Destaque Técnico */}

            </div>

            {/* Coluna Visual (Vitrine de Slots) */}
            <div className="md:col-span-6 space-y-8 mt-4">

              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                2.3 Drivers Profissionais e    <span className="text-fuchsia-500">Baixa Latência</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Placas de som off-board utilizam drivers especializados,
                como o ASIO (Audio Stream Input/Output), que permitem comunicação direta entre o software de áudio
                e o hardware, contornando o stack genérico do sistema operacional.
              </p>

              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                    <Zap className="w-5 h-5" />Os ganhos práticos incluem: :
                  </h4>
                  <li className="flex items-start gap-3">

                    <span><strong>Redução da latência típica de 40–50 ms (on-board) para menos de 5 ms,  <br /></strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Estabilidade em gravações multicanal,  </strong> </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Sincronização precisa entre áudio, MIDI e vídeo.  <br /></strong>
                    </span>
                  </li>

                </ul>
              </div> <br />

              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Avanços recentes apontam para mecanismos de buffers dinâmicos inteligentes,
                capazes de ajustar automaticamente latência e estabilidade conforme a carga do sistema,
                sem intervenção manual do usuário.
              </p>
              <div className="flex items-center gap-4 mb-16">
                <div className="bg-fuchsia-500 h-0.5 w-16 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                <span className="text-fuchsia-400 font-mono font-bold text-lg tracking-widest uppercase">Conectividade Moderna e Desacoplamento da Placa-mãe </span>

              </div>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                A migração das placas de som para USB-C e Thunderbolt representa uma mudança arquitetural relevante.
                Em especial, o Thunderbolt oferece comunicação ponto-a-ponto, baixa latência e largura de banda
                comparável ao PCI Express, permitindo que interfaces de áudio externas atuem como coprocessadores
                especializados.
              </p>

              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                    <Zap className="w-5 h-5" />Esse desacoplamento físico da placa-mãe favorece:
                  </h4>
                  <li className="flex items-start gap-3">

                    <span><strong>Independência de plataforma,  <br /></strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Atualizações de firmware isoladas do sistema operacional,  </strong> </span>
                  </li>
                  <li className="flex items-start gap-3">

                    <span><strong>Maior flexibilidade em ambientes profissionais e móveis.  <br /></strong>
                    </span>
                  </li>

                </ul>
              </div> <br />
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                Perspectivas Futuras do Áudio Off-board
              </h4>
              <p>
                <strong>No médio e longo prazo, a evolução das tecnologias de áudio off-board tende a convergir para: </strong>
              </p>
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li>Processamento espacial avançado (áudio 3D e binaural em tempo real), </li>
                  <li>Correção acústica automatizada baseada em IA, adaptando o som ao ambiente físico, </li>
                  <li>Separação de fontes por inferência neural, aplicada à mixagem e pós-produção, </li>
                  <li>Otimização energética, com foco em performance por watt. </li>
                </ul>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Nesse cenário, a placa de som deixa de ser apenas um conversor digital-analógico
                e consolida-se como um processador especializado de sinal acústico,
                reforçando o papel da arquitetura off-board como vetor de inovação tecnológica.

              </p>
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                Síntese
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed text-justify mb-8">
                Enquanto o áudio on-board atende adequadamente às necessidades de consumo geral,
                a arquitetura de áudio off-board demonstra que fidelidade, baixa latência e previsibilidade
                temporal são alcançáveis apenas por meio de hardware dedicado, isolamento físico e processamento
                especializado, tornando-se indispensável em aplicações profissionais de alta exigência técnica.               </p>
            </div>
          </div> <br />
          <br />
        </article>
      </section>
      {/* =====================================================================================
               SEÇÃO 3: REDES E OFFLOADING (Páginas 6-9 PDF)
               ===================================================================================== 
            */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">

            <div className="flex items-center gap-4">
              <div className="bg-indigo-500 h-0.5 w-16 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
              <Server className="text-indigo-500 w-8 h-8" />
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                03. Placa de Rede (NIC) de Alta Performance – Além do Gigabit :
                <span className="text-fuchsia-500"> Desempenho, Offloading e o Futuro das Redes </span>
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Texto Principal */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                  3.1 - Exemplos: Intel X550-T2 (10GbE), Mellanox/NVIDIA ConnectX (SFP+/QSFP – Fibra Óptica).
                </h4>
                <h4 className="text-2xl font-bold text-white mb-4">Análise Técnica </h4>

                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  Em ambientes de servidores, data centers e computação distribuída,
                  a transmissão e recepção de milhões de pacotes por segundo impõe uma carga massiva à CPU. <br />
                  Quando realizada por controladores de rede integrados. Cada pacote exige operações de verificação, segmentação, ordenação e interrupções de hardware,
                  criando gargalos que comprometem a escalabilidade do sistema. <br />
                  As <strong>NICs (Network Interface Cards)</strong> off-board atuam como coprocessadores especializados. <br />
                  As placas de rede off-board surgem como solução arquitetural ao desacoplar o processamento de rede da CPU,
                  transformando a NIC em um coprocessador especializado de comunicação.
                </p>
              </div>

              <div className="bg-indigo-950/30 p-6 rounded-xl border-l-4 border-indigo-500">
                <h5 className="text-indigo-300 font-bold mb-2 flex items-center gap-2"><Cpu size={16} /> Offloading de Processamento de Rede</h5>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed text-justify">
                  NICs dedicadas incorporam processadores embarcados capazes de executar diretamente no hardware tarefas
                  tradicionalmente delegadas à CPU, entre elas:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-xs text-indigo-200 font-mono">
                  <li className="bg-indigo-900/50 p-2 rounded">• Checksum Offload (verificação de integridade),</li>
                  <li className="bg-indigo-900/50 p-2 rounded">• TCP Segmentation (divisão e reagrupamento de pacotes),</li>
                  <li className="bg-indigo-900/50 p-2 rounded">• Receive Side Scaling (RSS), </li>
                  <li className="bg-indigo-900/50 p-2 rounded">• TCP/UDP Offload. </li>
                  <li className="bg-indigo-900/50 p-2 rounded">• Criptografia</li>
                </ul>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed text-justify">
                Esse modelo reduz drasticamente interrupções de CPU,
                melhora a latência e aumenta a taxa de transferência efetiva,
                especialmente em cargas intensivas como virtualização, containers,
                bancos de dados distribuídos e aplicações de baixa latência. <br /> <br />
                NICs modernas avançam ainda mais, incorporando SmartNICs e DPUs (Data Processing Units),
                capazes de executar firewall, criptografia, virtualização de rede e políticas de segurança
                diretamente no hardware.
              </p>
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                3.2 Conectividade Física e Escalabilidade
              </h4>
              <p>
                <strong>Diferentemente das soluções integradas baseadas em RJ-45 (1GbE ou 2.5GbE), placas de rede off-board permitem:  </strong>
              </p>
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-l-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li>Uso de transceptores SFP+, QSFP e QSFP28, </li>
                  <li>Conexões em fibra óptica ou cabos DAC,  </li>
                  <li>Velocidades de 10, 25, 40, 100 Gbps ou superiores. </li>
                </ul>
              </div>
              <p>
                Essa escalabilidade física é essencial para backbone de data centers, clusters HPC e infraestruturas de nuvem, onde a limitação não é apenas computacional, mas também de latência e throughput de rede.
              </p>

              <div>
                <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                  3.3 Perspectivas Futuras
                </h4>
                <h4 className="text-2xl font-bold text-white mb-4">A evolução das NICs aponta para: </h4>
                <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-l-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                  <ul className="space-y-4 text-slate-400 text-sm">
                    <li>Crescente adoção de DPUs programáveis,  </li>
                    <li>Integração com aceleradores de IA para processamento de tráfego, </li>
                    <li>Offloading completo da pilha de rede, </li>
                    <li>Redução do consumo energético por pacote transmitido. </li>
                  </ul>
                </div> <br />

                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  Nesse cenário, a placa de rede deixa de ser um periférico e passa a ser um elemento central da arquitetura de sistemas distribuídos.
                </p>
                <div className="bg-slate-900 p-6 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-500/5 hover:border-indigo-500/50 transition-colors">
                  <div className="flex justify-between mb-4">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Enterprise NIC</span>
                    <Server size={16} className="text-indigo-500" />
                  </div>
                  <TunnelImage
                    src="nic-10gbe-card.jpg"
                    alt="Placa de Rede Intel X550 10GbE"
                    className="w-full h-auto max-h-[200px] object-contain"
                    glowColor="rgba(99, 102, 241,"
                  />
                  <p className="text-[10px] text-slate-500 text-center mt-2">Conexão SFP+ para Fibra Óptica</p>
                </div> <br />
                <div className="pt-6 border-t border-slate-800">
                  <Wifi size={20} className="text-indigo-400" />
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"> 3.4 Interfaces Sem Fio (Wi-Fi Off-board) – Limites Físicos, RF e Evolução Tecnológica </h4>
                  <p className="text-slate-300 text-lg leading-relaxed text-justify">
                    Exemplos: Intel AX210 / BE200, Qualcomm FastConnect, Adaptadores Wi-Fi PCIe e M.2 com antenas dedicadas.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed text-justify">
                    Soluções dedicadas (PCIe) permitem amplificadores de sinal (LNA) robustos e antenas externas posicionáveis, essenciais para reduzir a interferência e suportar padrões como <strong>Wi-Fi 7</strong> com latência ultra-baixa.
                  </p>
                </div>
                <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                  Análise Técnica
                </h4>
                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  Diferentemente das interfaces cabeadas, o Wi-Fi opera em um meio de transmissão compartilhado
                  e não determinístico, sujeito a interferência eletromagnética, atenuação de sinal e variações ambientais. <br /> <br />
                  Essas características impõem desafios específicos de latência, estabilidade e throughput efetivo,
                  tornando a arquitetura off-board particularmente relevante. <br /> <br />

                </p>

              </div>
            </div>

            {/* Vitrine de Placas de Rede */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <p>
                Soluções Wi-Fi dedicadas, seja em formato PCI Express ou M.2 com antenas externas,
                oferecem vantagens substanciais sobre implementações integradas, principalmente no que se refere
                a sensibilidade de recepção, isolamento de RF e capacidade de processamento de pacotes.
              </p>


              <div className="bg-slate-900 p-6 rounded-2xl border border-indigo-500/20 shadow-lg shadow-indigo-500/5 hover:border-indigo-500/50 transition-colors">
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Wi-Fi 7 PCIe</span>
                  <Wifi size={16} className="text-indigo-500" />
                </div>
                <TunnelImage
                  src="wifi-pcie-card.jpg"
                  alt="Placa Wi-Fi PCIe com Dissipador"
                  className="w-full h-auto max-h-[200px] object-contain"
                  glowColor="rgba(99, 102, 241,"
                />
                <p className="text-[10px] text-slate-500 text-center mt-2">MIMO Massivo e Antenas Externas</p>
              </div>
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                Arquitetura de Rádio e Processamento de RF
              </h4>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-1"> Placas Wi-Fi off-board incorporam:  </h4>
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-4 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li><strong>Múltiplas cadeias de rádio (MIMO e MU-MIMO), </strong> </li>
                  <li>Amplificadores de baixo ruído (LNA), </li>
                  <li>Filtros RF dedicados,  </li>
                  <li>Processadores embarcados para gestão de pacotes e criptografia. </li>
                </ul>
              </div> 
              <p className="text-slate-300 text-lg leading-relaxed text-justify">
                Esses elementos reduzem a dependência da CPU e melhoram a qualidade do link em ambientes congestionados.
              </p>
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                Evolução dos Padrões Wi-Fi
              </h4>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"> A progressão tecnológica dos padrões sem fio demonstra ganhos significativos:  </h4>
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li>Wi-Fi 5 (802.11ac): foco em throughput. </li>
                  <li>Wi-Fi 6 / 6E (802.11ax): introdução de OFDMA e menor latência. </li>
                  <li>Wi-Fi 7 (802.11be): agregação de canais, MLO (Multi-Link Operation) e latência ultra-baixa.  </li>

                </ul> <br />
                <p>
                  Esses avanços aproximam o desempenho do Wi-Fi das redes cabeadas em cenários específicos, embora ainda sem garantir determinismo absoluto
                </p>
              </div>
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                Antenas, Posicionamento e Isolamento
              </h4>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"> Ao contrário das soluções integradas, placas Wi-Fi off-board permitem:  </h4>
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li>Uso de antenas externas direcionais, </li>
                  <li>Melhor posicionamento físico,  </li>
                  <li>Redução de interferência interna do chassi.  </li>
                </ul>
                <p>
                  Esses fatores impactam diretamente a qualidade do sinal e a estabilidade da conexão.
                </p>
              </div> <br />
              <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                Perspectivas Futuras
              </h4>
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"> O futuro das interfaces Wi-Fi aponta para:  </h4>
              <div className="bg-gradient-to-br from-fuchsia-950/40 to-slate-900 border-r-4 border-fuchsia-500 p-6 rounded-r-xl backdrop-blur-sm">
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li>Integração com IA para gestão adaptativa de canais,  </li>
                  <li>Redução de latência para aplicações em tempo real, </li>
                  <li>Convergência parcial com redes cabeadas em ambientes controlados,  </li>
                  <li>Crescente foco em eficiência espectral e energética. </li><br />
                </ul><p>
                  Apesar dos avanços, o Wi-Fi permanece limitado pelas leis físicas da propagação eletromagnética, reforçando seu papel como solução de mobilidade e flexibilidade, não como substituto absoluto das conexões cabeadas em ambientes críticos.
                </p>
              </div> <br />
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2"> Conclusão arquitetural (importante)</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>NIC cabeada → espinha dorsal </li>
                <li>Wi-Fi → extensão móvel </li>
                <li>Ambos off-board → especialização e isolamento  </li>
                <li>Ambos subordinados à filosofia modular  </li><br />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
               SEÇÃO 4: GPU & IA - O PESO PESADO (Páginas 14-16 PDF)
               ===================================================================================== 
            */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        {/* Efeito de Fundo Dramático */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-slate-950 to-black pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              3.5 Aceleradores de IA e Computação Paralela
              <span className="text-fuchsia-500"> – O Hardware da Era dos Dados </span>
            </h3>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              GPUs dedicadas, Tensor Cores e o fim da memória compartilhada.
            </p>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              <strong>Exemplos: NVIDIA A100/H100, Google TPU (Tensor Processing Unit).</strong>
            </p>

          </div>
          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              Análise Técnica
            </h4>

            {/* Grid de 2 Colunas */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Coluna 1: Texto Explicativo */}
              <div>
                <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                  A engenharia de dados moderna, impulsionada por Machine Learning e Deep Learning, exige um paradigma computacional distinto do modelo tradicional baseado em CPU[cite: 553]. A natureza matricial e altamente paralela dos algoritmos de IA torna ineficiente a execução em arquiteturas x86 ou ARM convencionais[cite: 554].
                </p>
                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  Aceleradores de IA são projetados como processadores matemáticos especializados, focados em operações de multiplicação e acumulação de matrizes (MAC operations)[cite: 555].
                </p>
              </div>

              {/* Coluna 2: Arquitetura Tensorial (Lista) */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-fuchsia-500/20 shadow-lg shadow-fuchsia-500/5">
                <h4 className="text-fuchsia-300 font-bold flex items-center gap-2 mb-4 text-lg">
                  <Cpu className="w-5 h-5" /> Arquitetura Tensorial
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Esses dispositivos operam com:
                </p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                    <span>Precisão reduzida (FP16, BF16, INT8),</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                    <span>Unidades tensorais dedicadas,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                    <span>Paralelismo massivo orientado a throughput, não a latência serial.</span>
                  </li>
                </ul>
              </div> <br />

            </div>
            <div className="pt-6 border-t border-slate-800">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                3.6 Integração com a Arquitetura Off-board
              </h4>

              {/* Grid de 2 Colunas */}
              <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Coluna 1: Texto Explicativo */}
                <div>
                  <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                    Esses aceleradores são conectados via PCI Express de alta largura de banda ou interconexões dedicadas (NVLink), funcionando como subsistemas computacionais independentes, com:
                  </p>
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-fuchsia-500/20 shadow-lg shadow-fuchsia-500/5">

                    <ul className="space-y-3 text-slate-300 text-sm">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Memória própria (HBM),  </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Gerenciamento térmico dedicado, </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Consumo energético elevado, porém, altamente eficiente por operação. .</span>
                      </li>
                    </ul> <br />
                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                      A CPU, nesse contexto, atua apenas como orquestrador, reforçando a filosofia off-board de especialização extrema.
                    </p>

                    <ul className="space-y-3 text-slate-300 text-sm">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        O futuro aponta para:
                      </h4>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Consolidação de aceleradores heterogêneos (CPU + GPU + IA), </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Crescente limitação por energia e dissipação térmica, </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Métricas baseadas em performance por watt, não apenas FLOPS. </span>
                      </li>
                    </ul> <br />
                  </div>


                </div>

                {/* Coluna 2: Arquitetura Tensorial (Lista) */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    Análise Técnica
                  </h4>

                  <div>
                    <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                      Em ambientes corporativos e científicos, a integridade e a disponibilidade dos dados são tão críticas quanto o desempenho. Controladoras de armazenamento off-board foram desenvolvidas para retirar da CPU a complexidade da gestão de múltiplos discos.
                    </p>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      Cache Dedicado e Proteção de Dados
                    </h4>

                    <ul className="space-y-3 text-slate-300 text-sm">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        Controladoras profissionais incorporam:
                      </h4>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Memória cache DRAM dedicada,  </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Baterias de backup (BBU) ou supercapacitores, </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                        <span>Escrita segura (write-back cache). </span>
                      </li>
                    </ul> <br />
                    <p>
                      Esses mecanismos garantem que dados não sejam perdidos em caso de falha energética antes da persistência em disco, algo inexistente em soluções on-board.
                    </p>
                  </div>

                </div>


              </div>

            </div> <br />
          </div>

          <div className="pt-6 border-t border-slate-800">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              3.6 Integração com a Arquitetura Off-board
            </h4>

            {/* Grid de 2 Colunas */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

              {/* Coluna 1: Texto Explicativo */}
              <div>
                <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                  Esses aceleradores são conectados via PCI Express de alta largura de banda ou interconexões dedicadas (NVLink), funcionando como subsistemas computacionais independentes, com:
                </p>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-fuchsia-500/20 shadow-lg shadow-fuchsia-500/5">

                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Memória própria (HBM),  </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Gerenciamento térmico dedicado, </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Consumo energético elevado, porém, altamente eficiente por operação. .</span>
                    </li>
                  </ul> <br />
                  <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                    A CPU, nesse contexto, atua apenas como orquestrador, reforçando a filosofia off-board de especialização extrema.
                  </p>

                  <ul className="space-y-3 text-slate-300 text-sm">
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      O futuro aponta para:
                    </h4>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Consolidação de aceleradores heterogêneos (CPU + GPU + IA), </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Crescente limitação por energia e dissipação térmica, </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Métricas baseadas em performance por watt, não apenas FLOPS. </span>
                    </li>
                  </ul> <br />
                </div>


              </div>







              {/* Coluna 2: Arquitetura Tensorial (Lista) */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  3.7 Controladoras de Armazenamento (RAID / HBA) – Integridade e Desempenho de Dados
                </h4>
                <p>
                  Exemplos: Broadcom LSI MegaRAID, HighPoint NVMe Controllers.
                </p>

                <div>
                  <p className="text-slate-300 text-lg leading-relaxed text-justify mb-6">
                    Em ambientes corporativos e científicos, a integridade e a disponibilidade dos dados são tão críticas quanto o desempenho. Controladoras de armazenamento off-board foram desenvolvidas para retirar da CPU a complexidade da gestão de múltiplos discos.
                  </p>
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    Cache Dedicado e Proteção de Dados
                  </h4>

                  <ul className="space-y-3 text-slate-300 text-sm">
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      Controladoras profissionais incorporam:
                    </h4>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Memória cache DRAM dedicada,  </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Baterias de backup (BBU) ou supercapacitores, </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                      <span>Escrita segura (write-back cache). </span>
                    </li>
                  </ul> <br />
                  <p>
                    Esses mecanismos garantem que dados não sejam perdidos em caso de falha energética antes da persistência em disco, algo inexistente em soluções on-board.
                  </p>

                </div>
              </div>
            </div>
          </div> <br />
          <div className="pt-6 border-t border-slate-800"></div> <br />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coluna 1: Texto Explicativo */}

            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                3.8 Processamento de RAID em Hardware
              </h4>

              <p>
                O cálculo de paridade em níveis como RAID 5 e RAID 6 é computacionalmente intensivo.
                Controladoras dedicadas realizam essas operações em:
              </p> <br />
              <ul className="space-y-3 text-slate-300 text-sm">

                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                  <span>Chips proprietários (ROC – RAID on Chip), </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                  <span>Totalmente independentes da CPU principal.  </span>
                </li>

              </ul> <br />
              <p>
                Em contraste, o chamado “RAID on-board” é majoritariamente implementado via software,
                consumindo ciclos da CPU e impactando o desempenho geral do sistema.</p> <br />
            </div>
            {/* Coluna 2: Texto Explicativo */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                Tendências Futuras
              </h4>
              <p><strong>A evolução das controladoras aponta para: </strong></p> <br />
              <ul className="space-y-3 text-slate-300 text-sm">

                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                  <span>Suporte nativo a NVMe over PCIe,  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                  <span>Integração com memórias persistentes,  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                  <span>Gerenciamento inteligente baseado em telemetria e IA, </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-fuchsia-500 mt-1 shrink-0" />
                  <span>Foco em alta disponibilidade e confiabilidade, não apenas velocidade.  </span>
                </li>
              </ul> <br />

              <p>
                <strong>Síntese das Seções</strong>
              </p> <br />
              <p>
                Placas de rede, aceleradores de IA e controladoras de armazenamento representam a materialização plena da arquitetura off-board: hardware especializado, processamento dedicado e isolamento funcional.
                Esses componentes evidenciam que, em sistemas modernos de alta performance, a CPU não é mais o centro absoluto do processamento, mas parte de um ecossistema heterogêneo e cooperativo.
              </p> <br />




            </div>

          </div>



          {/* Cards Finais: Energia e Armazenamento */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Storage Controller */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <HardDrive className="text-blue-500 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Armazenamento (RAID)</h3>
              </div>
              <TunnelImage
                src="raid-controller.jpg"
                alt="Controladora RAID Hardware com Cache"
                className="w-full h-40 object-contain mb-6"
                glowColor="rgba(59, 130, 246,"
              />
              <p className="text-slate-400 text-sm text-justify leading-relaxed">
                Controladoras dedicadas possuem cache DRAM próprio e baterias de backup. [cite_start]Elas realizam cálculos de paridade (RAID 5/6) em chips proprietários (ROC), sem consumir a CPU principal, garantindo integridade de dados que soluções on-board não conseguem oferecer[cite: 168, 174, 176].
              </p>
            </div>

            {/* Power Engineering */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <Zap className="text-yellow-500 w-8 h-8" />
                <h3 className="text-2xl font-bold text-white">Engenharia de Potência</h3>
              </div>
              <TunnelImage
                src="vrm-power-stages.jpg"
                alt="Fases de Alimentação VRM em Placa Offboard"
                className="w-full h-40 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"
                glowColor="rgba(234, 179, 8,"
              />
              <p className="text-slate-400 text-sm text-justify leading-relaxed">
                A energia off-board é dinâmica. GPUs modernas superam 450W, exigindo <strong>VRMs (Voltage Regulator Modules)</strong> com múltiplas fases e controle ativo. [cite_start]A engenharia migrou do desempenho bruto para a "performance por watt"[cite: 301, 309, 316].
              </p>
            </div>
          </div>
        </div> <br />

        {/* CARD GIGANTE DA GPU */}
        <div className="w-full bg-slate-900/60 backdrop-blur-md rounded-3xl border border-fuchsia-600/30 p-8 md:p-12 shadow-[0_0_60px_rgba(217,70,239,0.15)] mb-16 relative group">
          <div className="absolute top-0 right-0 bg-fuchsia-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-xs uppercase tracking-widest shadow-lg">High Performance Computing</div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              {/* Imagem Gigante da GPU */}
              <TunnelImage
                src="rtx-4090-exploded.jpg"
                alt="Arquitetura interna de uma GPU High-End (Ex: RTX 4090)"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                glowColor="rgba(217, 70, 239,"
              />
              <div className="absolute -bottom-6 -right-6 bg-black/90 border border-fuchsia-500 p-3 rounded-lg text-fuchsia-300 text-xs font-mono shadow-xl">
                Largura de Banda: &gt; 1.000 GB/s
              </div>
            </div>

            <div className="space-y-8">
              <div>


                <h3 className="text-3xl font-bold text-white mb-4">VRAM vs. RAM do Sistema</h3>
                <p className="text-slate-300 text-lg leading-relaxed text-justify">

                </p>

              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-fuchsia-900/30 rounded-lg flex items-center justify-center border border-fuchsia-500/30 shrink-0">
                    <Maximize2 className="text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Paralelismo Massivo</h4>
                    <p className="text-sm text-slate-400 text-justify">Milhares de núcleos (CUDA Cores) vs dezenas de núcleos de CPU. [cite_start]A GPU deixa de ser um periférico gráfico e vira um processador central em HPC[cite: 250, 256].</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-fuchsia-900/30 rounded-lg flex items-center justify-center border border-fuchsia-500/30 shrink-0">
                    <Cpu className="text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Aceleração de IA</h4>
                    <p className="text-sm text-slate-400 text-justify">Tensor Cores especializados para multiplicação de matrizes. [cite_start]O gargalo atual não é mais computacional, mas energético e térmico[cite: 271, 273].</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================================
               RODAPÉ E REFERÊNCIAS (Páginas 21-23 PDF)
               ===================================================================================== 
            */}
      <footer className="mt-0 border-t border-slate-900 bg-slate-950 pt-20 pb-12 relative overflow-hidden">
        {/* Luz de Fundo Magenta */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Caveira Decorativa de Fundo */}
        <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none -rotate-12 z-0">
          <Skull size={400} className="text-fuchsia-500 blur-sm" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col items-center gap-4 mb-12 opacity-80">
            <div className="p-4 bg-slate-900 rounded-full border border-slate-800 shadow-lg shadow-black">
              <BookOpen className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="uppercase tracking-[0.3em] text-xs font-bold text-slate-400">Referências Bibliográficas & Normas</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-16">
            <div className="bg-slate-900/60 p-6 rounded-xl border border-fuchsia-500/10 text-[11px] text-slate-500 font-mono space-y-4 hover:border-fuchsia-500/30 transition-colors">
              <p className="border-l-2 border-fuchsia-500 pl-3 leading-relaxed">[1] PCI-SIG. PCI Express® Base Specification Revision 6.0. [cite_start]Beaverton: PCI Special Interest Group, 2022. [cite: 345]</p>
              <p className="border-l-2 border-fuchsia-500 pl-3 leading-relaxed">[2] NVIDIA CORPORATION. NVIDIA Ada Lovelace Architecture Whitepaper. [cite_start]Santa Clara: Nvidia Corp, 2022. [cite: 346]</p>
              <p className="border-l-2 border-fuchsia-500 pl-3 leading-relaxed">[3] HENNESSY, J. L.; PATTERSON, D. A. Computer Architecture: A Quantitative Approach. 6. ed. [cite_start]Cambridge, 2017. [cite: 347]</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-xl border border-fuchsia-500/10 text-[11px] text-slate-500 font-mono space-y-4 hover:border-fuchsia-500/30 transition-colors">
              <p className="border-l-2 border-purple-500 pl-3 leading-relaxed">[4] CREATIVE TECHNOLOGY LTD. Sound Blaster AE-9 Audiophile DAC Datasheet. [cite_start]Singapore, 2020. [cite: 350]</p>
              <p className="border-l-2 border-purple-500 pl-3 leading-relaxed">[5] INTEL CORPORATION. Intel® Ethernet Controller X550 Datasheet. [cite_start]Santa Clara: Intel Corp, 2019. [cite: 352]</p>
              [cite_start]<p className="border-l-2 border-purple-500 pl-3 leading-relaxed">[6] ABNT NBR 6023:2018 - Informação e documentação - Referências - Elaboração. [cite: 403]</p>
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-slate-900 pt-10">
            {/* CAVEIRA MAGENTA CENTRAL (Interativa)
                           Efeito: Glow ao passar o mouse
                        */}
            <div className="relative group cursor-pointer mb-8">
              <div className="absolute -inset-6 bg-fuchsia-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Skull
                className="w-16 h-16 text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.9)] hover:scale-110 transition-transform duration-300 relative z-10"
                strokeWidth={1.5}
              />
            </div>


            <p className="text-slate-300 font-bold mb-2 tracking-wide text-sm">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
            <p className="text-slate-500 text-xs mb-1 uppercase tracking-[0.2em]">Engenharia de Computação</p>
            <p className="text-fuchsia-600/50 text-[10px] font-mono mt-8">REVOLUXTI © 2025 - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MotherboardOffboardArticle;