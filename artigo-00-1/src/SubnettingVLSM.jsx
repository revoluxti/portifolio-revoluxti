import React, { useState } from 'react';
import {
    Cpu,
    Network,
    Layers,
    Table,
    CheckCircle2,
    Globe,
    Binary,
    Flame,
    Terminal,
    ShieldAlert,
    Calculator,
    ChevronRight,
    Server,
    HardDrive,
    GitBranch,
    ArrowRight,
    Database
} from 'lucide-react';

export default function SubnettingVLSM() {
    // Estado para a calculadora interativa de Host/Prefixos
    const [hostBits, setHostBits] = useState(6); // Default: /26 (6 bits de host)

    // Estado para o Planner Cyberpunk VLSM
    const [cyberpunkSubnets] = useState([
        { id: 1, name: "Operações (VLAN 10)", req: 100, cidr: "/25", size: 128, range: "10.0.0.0 - 10.0.0.127", mask: "255.255.255.128", color: "bg-slate-900 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]" },
        { id: 2, name: "Recon (VLAN 20)", req: 50, cidr: "/26", size: 64, range: "10.0.0.128 - 10.0.0.191", mask: "255.255.255.192", color: "bg-slate-900 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
        { id: 3, name: "Payloads (VLAN 30)", req: 20, cidr: "/27", size: 32, range: "10.0.0.192 - 10.0.0.223", mask: "255.255.255.224", color: "bg-slate-900 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
        { id: 4, name: "Link Roteador (PtP)", req: 2, cidr: "/30", size: 4, range: "10.0.0.224 - 10.0.0.227", mask: "255.255.255.252", color: "bg-slate-900 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
        { id: 5, name: "Espaço Livre (Unallocated)", req: 0, cidr: "Misto", size: 28, range: "10.0.0.228 - 10.0.0.255", mask: "N/A", color: "bg-slate-950 border-dashed border-slate-700 text-slate-600" }
    ]);

    const baseCyberpunkNetwork = "10.0.0.0 /24 (256 IPs)";

    const totalIPs = Math.pow(2, hostBits);
    const usableIPs = hostBits === 1 ? 2 : Math.max(0, totalIPs - 2); // Trata RFC 3021 (/31)
    const cidrPrefix = 32 - hostBits;

    // Cálculo simplificado de máscara decimal equivalente
    const getSubnetMask = (prefix) => {
        const mask = [];
        for (let i = 0; i < 4; i++) {
            const n = Math.min(Math.max(prefix - i * 8, 0), 8);
            mask.push(256 - Math.pow(2, 8 - n));
        }
        return mask.join('.');
    };

    return (
        <div className="w-full min-h-screen bg-[#030712] text-slate-100 p-4 md:p-8 font-sans border border-slate-900 rounded-2xl shadow-2xl">
            {/* TOPO: HEADER TÉCNICO */}
            <div className="mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 text-xs font-mono font-bold border border-cyan-800/60">
                            ARQUITETURA DE REDES IP
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-purple-950/80 text-purple-400 text-xs font-mono font-bold border border-purple-800/60">
                            CIDR / VLSM / IPAM
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                        <Network className="w-8 h-8 text-cyan-400" />
                        Dimensionamento Determinístico &amp; Hierárquico de Redes IP
                    </h1>
                    <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-3xl">
                        Modelagem avançada de endereçamento, minimização do esgotamento de espaço de endereçamento, otimização da memória TCAM e arquitetura IPAM.
                    </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl font-mono text-xs flex items-center gap-3">
                    <Database className="w-5 h-5 text-emerald-400" />
                    <div>
                        <div className="text-slate-400 text-[10px]">SUPERBLOCO CORPORATIVO</div>
                        <div className="text-emerald-400 font-bold">10.128.0.0/12</div>
                    </div>
                </div>
            </div>

            {/* PAINEL PRINCIPAL DE CONTEÚDO (GRID 2 COLUNAS) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                {/* ==================== COLUNA 1 ==================== */}
                <div className="space-y-6">

                    {/* FUNDAMENTOS MATEMÁTICOS & CONCEITOS CHAVE */}
                    <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl relative overflow-hidden">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                            <div>
                                <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                                    <Cpu className="w-6 h-6 text-cyan-400" />
                                    Fundamentos Matemáticos de Subnetting & Dimensionamento IP &amp; VLSM
                                </h3>
                                <span className="text-xs font-mono text-slate-400">
                                    Manipulação Granular de Bit Boundary <br /> Classless Inter-Domain Routing (CIDR) • RFC 3021
                                </span>
                            </div>
                            <span className="bg-cyan-950/80 text-cyan-300 text-[10px] font-mono px-2.5 py-1 rounded border border-cyan-800/60">
                                Nível Avançado
                            </span>
                        </div>

                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            O dimensionamento determinístico de redes IP modernas recorre ao <strong>Subnetting</strong> e ao <strong>Variable Length Subnet Mask (VLSM)</strong>
                            para mitigar o desperdício de endereços. Ao deslocar a fronteira entre o <i>Network ID</i> e o <i>Host ID</i>, alocam-se $n$ bits para a porção de host,
                            resultando numa capacidade útil de $2^n - 2$ endereços (excluindo as reservas de rede e broadcast).

                            Uma agregação de prefixos ( Elegante ) sintetizada múltiplos prefixos de rede contíguos num único anúncio otimizado. É um requisito estrito para a
                            escalabilidade de protocolos de roteamento dinâmico como Roteamento Interdomínio Sem Classes (CIDR) e ID da rede .Host ID , permitindo o particionamento
                            assimétrico do espaço de endereçamento através da Variable Length Subnet Mask (VLSM) .
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                                <span className="text-[11px] font-mono text-amber-400 uppercase font-bold block mb-1">
                                    Cálculo de Capacidade Útil
                                </span>
                                <div className="text-sm font-mono text-amber-300 font-bold mb-1">
                                    $f(n) = 2^n - 2$
                                </div>
                                <p className="text-[11px] text-slate-400">
                                    Onde $n$ representa os bits de host restantes no prefixo selecionado.
                                    Para $n$ bits alocados ao host, garantindo as reservas normativas para o endereço de Rede e Broadcast .
                                </p>
                            </div>

                            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                                <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold block mb-1">
                                    Enlaces Ponto a Ponto (/31)
                                </span>
                                <div className="text-sm font-mono text-emerald-300 font-bold mb-1">
                                    RFC 3021 (2 Hosts)
                                </div>
                                <p className="text-[11px] text-slate-400">
                                    Elimina o desperdício em ligações de trânsito ao dispensar endereços de rede e broadcast dedicados.
                                    Elimine o desperdício crônico de máscaras fixadas em enlaces de trânsito ao dispensar endereços de rede e transmissão dedicadas.                                </p>
                            </div>
                        </div>

                        {/* CALCULADORA INTERATIVA / VISUALIZADOR DE BITS */}
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-2">
                                    <Calculator className="w-4 h-4 text-cyan-400" /> Simulator de Fronteira de Bits (CIDR)
                                </span>
                                <span className="text-xs font-mono text-cyan-400 font-bold">
                                    /{cidrPrefix} ({getSubnetMask(cidrPrefix)})
                                </span>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                                    <span>Bits de Host ($n$): <strong>{hostBits} bits</strong></span>
                                    <span>Bits de Rede: <strong>{32 - hostBits} bits</strong></span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="12"
                                    value={hostBits}
                                    onChange={(e) => setHostBits(Number(e.target.value))}
                                    className="w-full accent-cyan-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs">
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <div className="text-[10px] text-slate-500">IPs Totais ($2^n$)</div>
                                    <div className="text-slate-200 font-bold">{totalIPs}</div>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <div className="text-[10px] text-slate-500">IPs Úteis</div>
                                    <div className="text-emerald-400 font-bold">{usableIPs}</div>
                                </div>
                                <div className="bg-slate-900 p-2 rounded border border-slate-800">
                                    <div className="text-[10px] text-slate-500">Reservados</div>
                                    <div className="text-rose-400 font-bold">{hostBits === 1 ? 0 : 2}</div>
                                </div>
                            </div>
                        </div>

                        {/* PAINEL INTERATIVO DE CENÁRIO */}
                        <div className="mt-5 rounded-xl border border-rose-500/30 bg-rose-950/20 p-5 shadow-lg relative">
                            <div className="flex items-center justify-between mb-3 border-b border-rose-900/40 pb-2">
                                <div className="flex items-center gap-2">
                                    <Network className="w-5 h-5 text-rose-400" />
                                    <h4 className="text-sm font-bold text-rose-300">
                                        Laboratório Prático: Divisão do Bloco
                                    </h4>
                                </div>
                                <span className="text-[10px] font-mono bg-rose-900/50 text-rose-200 px-2 py-0.5 rounded border border-rose-800">
                                    37.1.1.0/24 (256 IPs)
                                </span>
                            </div>

                            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                                Uma empresa necessita de endereçar 4 escritórios utilizando o bloco base <strong className="font-mono text-rose-200">37.1.1.0/24</strong>:
                            </p>

                            <div className="space-y-2.5 font-mono text-xs">
                                <div className="flex items-center justify-between bg-black/60 p-2.5 rounded border border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                        <span className="text-slate-200 font-bold">Escritório-1</span>
                                        <span className="text-[10px] text-slate-400">(50 utilizadores)</span>
                                    </div>
                                    <span className="text-cyan-400 font-bold">37.1.1.0/26 <span className="text-[10px] text-slate-400">(62 úteis)</span></span>
                                </div>

                                <div className="flex items-center justify-between bg-black/60 p-2.5 rounded border border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                        <span className="text-slate-200 font-bold">Escritório-2</span>
                                        <span className="text-[10px] text-slate-400">(30 utilizadores)</span>
                                    </div>
                                    <span className="text-emerald-400 font-bold">37.1.1.64/26 <span className="text-[10px] text-slate-400">(62 úteis)</span></span>
                                </div>

                                <div className="flex items-center justify-between bg-black/60 p-2.5 rounded border border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                                        <span className="text-slate-200 font-bold">Escritório-3</span>
                                        <span className="text-[10px] text-slate-400">(20 utilizadores)</span>
                                    </div>
                                    <span className="text-amber-400 font-bold">37.1.1.128/27 <span className="text-[10px] text-slate-400">(30 úteis)</span></span>
                                </div>

                                <div className="flex items-center justify-between bg-black/60 p-2.5 rounded border border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                        <span className="text-slate-200 font-bold">Escritório-4</span>
                                        <span className="text-[10px] text-slate-400">(10 utilizadores)</span>
                                    </div>
                                    <span className="text-purple-400 font-bold">37.1.1.160/28 <span className="text-[10px] text-slate-400">(14 úteis)</span></span>
                                </div>
                            </div>

                            <div className="mt-3 pt-2 border-t border-rose-900/40 text-[11px] text-slate-400 flex justify-between items-center">
                                <span>Espaço Total Alocado: <strong>170 IPs</strong></span>
                                <span className="text-emerald-400 font-bold">86 IPs Livres para Expansão</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: AGREGAÇÃO DE ROTAS (SUPERNETTING) */}
                    <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 shadow-xl">
                        <h2 className="text-lg font-bold text-purple-400 flex items-center gap-2 mb-3">
                            <Layers className="w-5 h-5 text-purple-400" />
                            Agregação de Rotas (Route Summarization)
                        </h2>
                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-justify mb-4">
                            A agregação de prefixos (<strong>Supernetting</strong>) sintetiza múltiplos prefixos de rede contíguos num único anúncio otimizado. É um requisito estrito para a escalabilidade de protocolos de roteamento dinâmico como <strong>OSPF</strong> e <strong>BGP</strong>.
                        </p>

                        <div className="space-y-3 font-mono text-xs">
                            <div className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-purple-300 font-bold block mb-0.5">Mitigação do Esgotamento da TCAM</span>
                                    <p className="text-slate-400 text-[11px]">
                                        Preserva os recursos computacionais dos routers ao reduzir o número de entradas na memória <i>Ternary Content-Addressable Memory</i>.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-purple-300 font-bold block mb-0.5">Isolamento de Flapping de Rotas</span>
                                    <p className="text-slate-400 text-[11px]">
                                        Isola falhas topológicas locais, impedindo que a instabilidade periódica de uma sub-rede propague recálculos globais de SPF.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ==================== COLUNA 2 ==================== */}
                <div className="space-y-6">

                    {/* CARD 3: TABELA DE ALOCAÇÃO VLSM DO MAIOR PARA O MENOR */}
                    <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                                    <Table className="w-5 h-5 text-emerald-400" />
                                    Algoritmo VLSM: Ordenação Eficiente Do Maior para o Menor
                                </h3>
                                <p className="text-xs text-slate-400">Elimina o desperdício em ligações de trânsito ao dispensar endereços de rede e broadcast dedicados.
                                    Ordenação estrita por volume de hosts necessários. Atribuição ordenada "do maior para o menor" para prevenir sobreposições</p>
                            </div>
                        </div>


                        <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                            Demonstração de particionamento dinâmico para evitar desperdício de blocos de endereçamento:
                            A regra de ouro do VLSM estabelece que as sub-redes devem ser atribuídas em ordem decrescente de tamanho para evitar a sobreposição de blocos e garantir a continuidade lógica: <br />

                        </p>


                        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 mb-4">
                            <table className="w-full text-left font-mono text-xs">
                                <thead className="bg-slate-900/90 text-slate-300 border-b border-slate-800 uppercase text-[10px]">
                                    <tr>
                                        <th className="p-3">Departamento</th>
                                        <th className="p-3">Necessidade</th>
                                        <th className="p-3">Máscara VLSM</th>
                                        <th className="p-3">Hosts Úteis</th>
                                        <th className="p-3">Desperdício</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                    <tr className="hover:bg-slate-900/50 transition-colors">
                                        <td className="p-3 font-bold text-cyan-300">Call Center</td>
                                        <td className="p-3">110 hosts</td>
                                        <td className="p-3 text-amber-300">/25 (.128)</td>
                                        <td className="p-3 text-emerald-400 font-bold">126 hosts</td>
                                        <td className="p-3 text-slate-400">Mínimo</td>
                                    </tr>
                                    <tr className="hover:bg-slate-900/50 transition-colors">
                                        <td className="p-3 font-bold text-cyan-300">Vendas</td>
                                        <td className="p-3">50 hosts</td>
                                        <td className="p-3 text-amber-300">/26 (.192)</td>
                                        <td className="p-3 text-emerald-400 font-bold">62 hosts</td>
                                        <td className="p-3 text-slate-400">Mínimo</td>
                                    </tr>
                                    <tr className="hover:bg-slate-900/50 transition-colors">
                                        <td className="p-3 font-bold text-cyan-300">Diretoria</td>
                                        <td className="p-3">12 hosts</td>
                                        <td className="p-3 text-amber-300">/28 (.240)</td>
                                        <td className="p-3 text-emerald-400 font-bold">14 hosts</td>
                                        <td className="p-3 text-slate-400">Mínimo</td>
                                    </tr>
                                    <tr className="hover:bg-slate-900/50 transition-colors bg-purple-950/10">
                                        <td className="p-3 font-bold text-purple-300">Link Roteador</td>
                                        <td className="p-3">2 hosts</td>
                                        <td className="p-3 text-purple-300">/30 (.252)</td>
                                        <td className="p-3 text-emerald-400 font-bold">2 hosts</td>
                                        <td className="p-3 text-emerald-400 font-bold">Zero</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>




                        <div className="p-3 bg-emerald-950/30 border border-emerald-800/60 rounded-lg text-xs text-emerald-200">
                            💡 <strong>Dica de Arquitetura:</strong> Para ligações ponto a ponto em infraestruturas modernas, adote o prefixo <strong>/31</strong> (RFC 3021) em substituição ao /30, economizando 50% dos endereços de trânsito.

                            <span className="text-base">💡</span>
                            <span>
                                <strong>Nota Didática:</strong> Iniciar o alocamento pelas maiores sub-redes garante que os limites de bits (bit boundaries) fiquem alinhados naturalmente sem fragmentar os blocos subsequentes.
                            </span>

                        </div>
                    </div>

                    {/* CARD 4: PLANEAMENTO CORPORATIVO & IPAM (CASO PRÁTICO) */}
                    <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 shadow-xl">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                            <div>
                                <h2 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-blue-400" />
                                    Planeamento Corporativo &amp; IPAM
                                </h2>
                                <span className="text-xs font-mono text-slate-400">Caso Prático: Superbloco 10.128.0.0/12</span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed text-justify mb-4">
                            A arquitetura IPAM (<i>IP Address Management</i>) exige um modelo preditivo baseado em
                            <strong>Hierarquia Estrutural</strong> e <strong>Contiguidade Lógica</strong>, permitindo ACLs precisas e sumarização contínua.
                            Em grande escala, a gestão por plataformas <strong>IPAM (IP Address Management)</strong> assegura a alocação preditiva e contígua do espaço de endereçamento corporativo.                        </p>

                        {/* ÁRVORE HIERÁRQUICA DO CASO PRÁTICO */}
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold border-b border-slate-800 pb-2">
                                <GitBranch className="w-4 h-4" />
                                <span>Superbloco Matriz: 10.128.0.0/12</span>
                            </div>

                            <div className="space-y-2 pl-2">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                                    <span className="text-cyan-400 font-bold">/16</span>
                                    <span>Segmentação Macrogeográfica por Continente</span>
                                </div>

                                <div className="flex items-center gap-2 text-slate-300 pl-4">
                                    <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                                    <span className="text-purple-400 font-bold">/20</span>
                                    <span>Data Center Regional (Sumarizado na Borda)</span>
                                </div>

                                <div className="flex items-center gap-2 text-slate-300 pl-8">
                                    <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                                    <span className="text-amber-400 font-bold">/24 e /25</span>
                                    <span>Infraestrutura Local (Hypervisors &amp; Storage)</span>
                                </div>

                                <div className="flex items-center gap-2 text-slate-300 pl-12">
                                    <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
                                    <span className="text-rose-400 font-bold">/31</span>
                                    <span>Malha de Roteamento Underlay (Enlaces P2P)</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-[11px] text-slate-400 flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>A preservação de blocos livres contíguos garante expansões futuras sem corromper a sumarização de rotas.</span>
                        </div>
                    </div>

                    {/* ========================================================= */}
                    {/* CARD 5: PLANNER VLSM CYBERPUNK (INTEGRADO EMBAIXO DO IPAM) */}
                    {/* ========================================================= */}
                    <section className="w-full p-6 rounded-2xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)] relative overflow-hidden bg-slate-950 font-mono text-slate-300">
                        {/* Fundo Quadriculado Matrix */}
                        <div
                            className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                            }}
                        />

                        <div className="relative z-10">
                            {/* Cabeçalho da Seção */}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-red-500 tracking-widest uppercase drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                                    Arquitetura VLSM
                                </h3>
                                <p className="text-slate-400 mt-1 text-xs">
                                    [+] Fatiando o bloco mestre <span className="text-cyan-400 font-bold">{baseCyberpunkNetwork}</span>
                                </p>
                            </div>

                            {/* Barra de Progresso Visual */}
                            <div className="mb-6 w-full h-7 bg-slate-900 rounded border border-slate-800 overflow-hidden flex shadow-inner">
                                <div className="h-full bg-red-600 w-1/2 flex items-center justify-center text-[10px] font-bold text-white shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" title="/25 (128 IPs)">/25</div>
                                <div className="h-full bg-cyan-600 w-1/4 flex items-center justify-center text-[10px] font-bold text-white border-l border-slate-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" title="/26 (64 IPs)">/26</div>
                                <div className="h-full bg-purple-600 w-[12.5%] flex items-center justify-center text-[10px] font-bold text-white border-l border-slate-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" title="/27 (32 IPs)">/27</div>
                                <div className="h-full bg-emerald-500 w-[1.56%] border-l border-slate-900" title="/30 (4 IPs)"></div>
                                <div className="h-full bg-slate-800 w-[10.94%] flex items-center justify-center text-[10px] text-slate-500 shadow-inner" title="Espaço Livre">NULL</div>
                            </div>

                            {/* Grid de Detalhamento das Sub-redes */}
                            <div className="grid gap-3">
                                {cyberpunkSubnets.map((net) => (
                                    <div
                                        key={net.id}
                                        className={`p-3.5 rounded border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-all hover:brightness-125 ${net.color}`}
                                    >
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm flex items-center gap-2 uppercase tracking-wide">
                                                {net.name}
                                                {net.req > 0 && (
                                                    <span className="text-[9px] px-1.5 py-0.5 bg-slate-950 border border-current rounded text-current uppercase tracking-wider">
                                                        Req: {net.req} IPs
                                                    </span>
                                                )}
                                            </h4>
                                            <div className="text-xs mt-1 opacity-80">
                                                <span className="text-slate-500">&gt; range: </span>
                                                <strong>{net.range}</strong>
                                            </div>
                                        </div>

                                        <div className="flex flex-row sm:flex-col gap-3 sm:gap-0.5 text-right w-full sm:w-auto bg-slate-950/50 p-2.5 rounded border border-white/5">
                                            <div className="flex justify-between sm:justify-end items-center gap-2">
                                                <span className="text-[9px] uppercase text-slate-500">Bloco:</span>
                                                <span className="font-bold text-sm">{net.cidr}</span>
                                            </div>
                                            <div className="flex justify-between sm:justify-end items-center gap-2">
                                                <span className="text-[9px] uppercase text-slate-500">Tamanho:</span>
                                                <span className="text-xs">{net.size} IPs</span>
                                            </div>
                                            {net.mask !== "N/A" && (
                                                <div className="flex justify-between sm:justify-end items-center gap-2">
                                                    <span className="text-[9px] uppercase text-slate-500">Máscara:</span>
                                                    <span className="text-[10px]">{net.mask}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
}