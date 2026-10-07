// src/EnderecamentoSection.jsx
import React from 'react';
import {
    Network,
    Fingerprint,
    Globe,
    ShieldAlert,
    Terminal,
    Cpu,
    Layers,
    Lock,
    Flame,
    Zap,
    ArrowRightLeft,
    Binary,
    ShieldCheck,
    AlertTriangle,
    Radio
} from 'lucide-react';

export default function EnderecamentoSection() {
    return (
        <section className="w-full bg-[#030712] text-slate-200 font-sans p-4 md:p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-12 my-8">

            {/* HEADER DA SEÇÃO */}
            <div className="border-b border-slate-800 pb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                    <span className="px-2.5 py-1 bg-cyan-950/80 border border-cyan-800/50 rounded-full flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" /> Endereçamento:
                    </span>
                    <span className="text-slate-600">|</span>
                    <span className="text-slate-400">Engenharia &amp; Análise de Tráfego</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight flex items-center gap-4">
                    <Network className="w-10 h-10 text-cyan-500 shrink-0" />
                    Capítulo 04 - A Bússola da Rede
                </h2>

                <p className="text-slate-400 mt-4 text-base md:text-lg max-w-5xl leading-relaxed text-justify">
                    No capítulo anterior, a informação ganhou forma na memória (bits, texto, vídeo). Agora, esse bloco de dados precisa ser encapsulado e despachado.
                    Mas para onde? E por qual caminho? Na engenharia de redes, o endereçamento opera em duas dimensões inseparáveis: a <strong className="text-white">identidade física</strong> (hardware) e a <strong className="text-white">identidade lógica</strong> (topologia).
                    Se não dominarmos a matemática por trás desses identificadores, qualquer arquitetura de segurança (firewalls, segmentação) será construída sobre areia.
                </p>
            </div>

            {/* 1. MAC ADDRESS */}
            <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800/80 pb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Fingerprint className="w-7 h-7 text-amber-500" />
                            1. MAC Address (A Identidade Física)
                        </h3>
                        <span className="text-xs font-mono text-slate-400">Camada 2 (Data Link) • 48 Bits (6 Bytes) • Hexadecimal</span>
                    </div>
                    <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono rounded-lg self-start md:self-auto font-semibold">
                        Escopo Local (L2) — Não atravessa roteador
                    </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed text-justify mb-6">
                    O MAC (<em>Media Access Control</em>) é o endereço gravado a laser na placa de rede (NIC) durante a fabricação (BIA — <em>Burned-In Address</em>). Ele opera na Camada 2 (Enlace) do Modelo OSI e nunca cruza um roteador — sua utilidade é estritamente local, permitindo que máquinas na mesma rede física conversem através de Switches. <br />
                    Matematicamente, o MAC possui 48 bits (6 Bytes), tradicionalmente representados em Hexadecimal (ex: 00:1A:2B:3C:4D:5E).
                    Ele é dividido funcionalmente em <strong className="text-amber-400">OUI (24 bits)</strong> para o fabricante e <strong className="text-cyan-400">UAA (24 bits)</strong> para a identificação única do dispositivo.
                </p>

                {/* ESTRUTURA VISUAL DO MAC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/30">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-amber-400 font-bold uppercase">OUI (Organizationally Unique Identifier)</span>
                            <span className="text-[10px] font-mono text-slate-500">24 Bits / 3 Bytes</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">Os primeiros 24 bits. Identificam o fabricante (ex: Cisco, Intel, Apple).</p>
                        <div className="bg-black/60 p-3 rounded-lg text-center font-mono text-amber-300 text-lg font-bold tracking-widest border border-slate-800">
                            00 : 1A : 2B
                        </div>
                    </div>

                    <div className="bg-slate-900/90 p-4 rounded-xl border border-cyan-500/30">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">UAA (Universally Administered Address)</span>
                            <span className="text-[10px] font-mono text-slate-500">24 Bits / 3 Bytes</span>
                        </div>
                        <p className="text-xs text-slate-400 mb-3">Serial único do dispositivo gravado na fábrica. Os últimos 24 bits. Funcionam como o "chassi" da placa, garantindo que não existam duas iguais no mundo. </p>
                        <div className="bg-black/80 p-3 rounded-lg text-center font-mono text-cyan-300 text-lg font-bold tracking-widest border border-cyan-500/20">
                            3C : 4D : 5E
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {/* COLUNA 1 */}
                    <div className="space-y-6">
                        {/* ALERTA DIDÁTICO */}
                        <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-6 shadow-xl backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                {/* Ícone de Alerta */}
                                <div className="shrink-0 rounded-lg bg-amber-500/10 p-3 text-amber-400 border border-amber-500/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h4 className="text-base font-bold text-amber-400">
                                            Alerta Didático: Colisão de MAC em Hardware Genérico
                                        </h4>
                                        <span className="text-[10px] bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded border border-amber-500/30">
                                            Sessão: revoluxti@gmail.com
                                        </span>
                                    </div>

                                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                        Na teoria, o IEEE exige que cada fabricante compre um bloco de endereços (OUI) e garanta um MAC exclusivo para cada placa de rede no mundo.
                                        Na prática, <strong className="text-amber-200">placas de rede piratas ou de baixíssimo custo gravam o mesmo firmware em massa</strong> para cortar custos de licenciamento e fabricação.
                                    </p>

                                    {/* Caixa Informativa com Pontos de Atenção */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-black/40 p-4 rounded-lg border border-amber-500/20">
                                        <div className="space-y-1">
                                            <span className="font-bold text-amber-300 flex items-center gap-1">
                                                ⚠️ O Risco nos Lotes Paralelos
                                            </span>
                                            <p className="text-slate-400">
                                                Ao comprar 5 ou 10 placas genéricas do mesmo fornecedor para montar um laboratório, há uma grande chance de que <strong>todas venham com o mesmo MAC Address gravado na EEPROM</strong>.
                                            </p>
                                        </div>

                                        <div className="space-y-1">
                                            <span className="font-bold text-amber-300 flex items-center gap-1">
                                                💥 O Caos na Camada 2
                                            </span>
                                            <p className="text-slate-400">
                                                O switch local não saberá para qual porta enviar os quadros de rede, gerando instabilidade na Tabela CAM, perda contínua de pacotes e conflitos na entrega de IP via DHCP.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-xs text-slate-400 mt-3 italic">
                                        💡 <strong className="text-slate-300">Dica REVOLUXTI:</strong> Se sua rede local começar a apresentar comportamento errático logo após a instalação de novas placas de rede, rode o comando de listagem no terminal e compare os MACs físicos de cada máquina. Se forem idênticos, aplique a alteração lógica descrita nas seções anteriores!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BIT INSPECTOR */}
                        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                                <Binary className="w-4 h-4 text-amber-400" /> Estrutura do 1º Byte (Bit de Administração)
                            </h4>

                            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                                Regra de Manipulação em Baixo Nível (O Bit de Administração): <br />
                                Se pegarmos o primeiro byte de um MAC (ex: 00) e olharmos os bits que o compõem em binário (00000000), os dois últimos bits (LSB) definem o comportamento do endereço.
                            </p>

                            <div className="bg-black/90 p-4 rounded-lg border border-slate-800 mb-4">
                                <div className="text-center text-[10px] font-mono text-slate-500 mb-2">Representação Binária do Byte (00):</div>
                                <div className="flex justify-center items-center gap-1.5 font-mono text-sm md:text-base">
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-slate-900 text-slate-300 border border-slate-800">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-slate-900 text-slate-300 border border-slate-800">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-slate-900 text-slate-300 border border-slate-800">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-slate-900 text-slate-300 border border-slate-800">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-slate-900 text-slate-300 border border-slate-800">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-slate-900 text-slate-300 border border-slate-800">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-900/50">0</span>
                                    <span className="w-8 h-10 flex items-center justify-center rounded font-bold bg-purple-950/40 text-purple-400 border border-purple-900/50">0</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                                <div className="p-3 rounded-lg border bg-slate-900 border-slate-800 text-slate-300">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-purple-400">Bit 0 (I/G — Individual/Group):</span>
                                        <span className="px-1.5 py-0.5 bg-black rounded text-[10px] font-bold">0</span>
                                    </div>
                                    <p className="text-[11px] text-slate-400">0 = Unicast (Único Host) | 1 = Multicast / Broadcast</p>
                                </div>

                                <div className="p-3 rounded-lg border bg-emerald-950/30 border-emerald-800 text-emerald-200">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-amber-400">Bit 1 (U/L — Universal/Local):</span>
                                        <span className="px-1.5 py-0.5 bg-black rounded text-[10px] font-bold">0</span>
                                    </div>
                                    <p className="text-[11px] text-slate-400">0 = Endereço de Fábrica (BIA) | 1 = Alterado por Software (Spoofed)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 2 */}
                    <div className="space-y-6">
                        {/* IDENTIFICAÇÃO OUI */}
                        <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl text-slate-300">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                                <span className="text-2xl">🌐</span>
                                <div>
                                    <h3 className="text-lg font-bold text-cyan-400">Identificação do Fabricante via OUI</h3>
                                    <p className="text-xs text-slate-400">Sessão: <code className="text-cyan-300">revoluxti@gmail.com</code></p>
                                </div>
                            </div>

                            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                Os primeiros <strong>3 octetos (24 bits)</strong> de um endereço MAC formam o <strong>OUI (Organizationally Unique Identifier)</strong>, o código exclusivo que identifica a fabricante da placa de rede. O usuário <strong>revoluxti</strong> separou as duas principais fontes para validar o registro de um dispositivo:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Base Bruta IEEE */}
                                <a
                                    href="http://standards-oui.ieee.org/oui.txt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col justify-between p-4 rounded-lg bg-black/60 border border-slate-800 hover:border-cyan-500/50 transition-all"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                                Base Oficial do IEEE
                                            </span>
                                            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">TXT Raw</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-3">
                                            Arquivo de texto bruto atualizado diretamente pelo IEEE. Ideal para consultas via scripts ou <code className="text-slate-300">grep</code> no terminal.
                                        </p>
                                    </div>
                                    <code className="text-[11px] text-cyan-400 font-mono underline break-all">
                                        http://standards-oui.ieee.org/oui.txt
                                    </code>
                                </a>

                                {/* Interface Rápida MAC Vendors */}
                                <a
                                    href="https://macvendors.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col justify-between p-4 rounded-lg bg-black/60 border border-slate-800 hover:border-cyan-500/50 transition-all"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                                MAC Vendors (Busca Rápida)
                                            </span>
                                            <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-mono">Web / API</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-3">
                                            Interface web simplificada e API pública para consulta instantânea digitando apenas o endereço MAC.
                                        </p>
                                    </div>
                                    <code className="text-[11px] text-cyan-400 font-mono underline break-all">
                                        http://macvendors.com
                                    </code>
                                </a>
                            </div>

                            {/* Dica do revoluxti */}
                            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                                <span className="text-cyan-400">💡</span>
                                <span>
                                    <strong>Dica Didática:</strong> Se o OUI não retornar nenhum fabricante conhecido no MAC Vendors, o dispositivo pode estar usando um MAC gerado aleatoriamente (endereçamento privado) ou ser um hardware genérico não homologado.
                                </span>
                            </div>
                        </div>

                        {/* RED TEAM VETOR */}
                        <div className="bg-rose-950/20 border-l-4 border-rose-500 p-4 rounded-r-xl border-y border-r border-rose-900/30">
                            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                                <Flame className="w-4 h-4 text-rose-500" /> Vetor Ofensivo Red Team: MAC Spoofing
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed text-justify mb-3">
                                Como os 48 bits do MAC são carregados para a memória RAM no boot (no driver da placa) durante o boot, um atacante pode reescrever o endereço local usando ferramentas como <code className="text-rose-300 bg-rose-950 px-1 py-0.5 rounded">macchanger</code>. Isso permite burlar políticas de controle de acesso de porta (<strong className="text-white">Port Security / NAC</strong>) em switches corporativos, clonando a identidade de uma impressora ou câmera IP confiável.
                            </p>
                            <div className="bg-black/80 p-2.5 rounded border border-rose-950 font-mono text-xs text-rose-300 flex items-center gap-2">
                                <Terminal className="w-4 h-4 text-rose-400 shrink-0" />
                                <code>sudo macchanger -m 02:1A:2B:3C:4D:5E eth0</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-slate-300">
                {/* Coluna Windows (PowerShell) */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                            <span className="text-2xl">🪟</span>
                            <div>
                                <h3 className="text-xl font-bold text-blue-400">Windows (PowerShell)</h3>
                                <p className="text-xs text-slate-400">Sessão: <code className="text-blue-300">revoluxti@windows</code></p>
                            </div>
                        </div>

                        {/* Visualização */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Passo 1: Localizar o Endereço MAC</h4>
                                <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800 font-mono">Leitura</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">
                                O usuário executa o cmdlet para filtrar apenas o nome da placa e o endereço físico:
                            </p>
                            <pre className="bg-black/90 border border-slate-800 p-3 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                                <code>{`# Terminal revoluxti
PS C:\\Users\\revoluxti> Get-NetAdapter | Select-Object Name, InterfaceDescription, MacAddress`}</code>
                            </pre>
                        </div>

                        {/* Alteração */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Passo 2: Modificar o MAC Address</h4>
                                <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800 font-mono">Elevação requerida</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">
                                Abra o PowerShell como <strong>Administrador</strong> e siga o fluxo ordenado:
                            </p>
                            <pre className="bg-black/90 border border-slate-800 p-3 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">

                                <code>
                                    {`# 1. Desativar a interface antes de alterar
Disable-NetAdapter -Name "Wi-Fi" -Confirm:$false

# 2. Definir novo MAC (sem traços ou dois-pontos)
Set-NetAdapter -Name "Wi-Fi" -MacAddress "001122334455"

# 3. Subir a interface com o novo endereço ativo
Enable-NetAdapter -Name "Wi-Fi"

# Didático: Para restaurar ao valor original de fábrica
Set-NetAdapter -Name "Wi-Fi" -MacAddress $null`}</code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Coluna Kali Linux (Terminal) */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                            <span className="text-2xl">🐉</span>
                            <div>
                                <h3 className="text-xl font-bold text-teal-400">Kali Linux (Terminal)</h3>
                                <p className="text-xs text-slate-400">Sessão: <code className="text-teal-300">revoluxti@kali</code></p>
                            </div>
                        </div>

                        {/* Visualização */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Passo 1: Localizar o Endereço MAC</h4>
                                <span className="text-[10px] bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800 font-mono">Leitura</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">
                                O usuario inspeciona a interface desejada observando o campo <code className="text-teal-300">link/ether</code>:
                            </p>
                            <pre className="bg-black/90 border border-slate-800 p-3 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                                <code>{`# Terminal revoluxti
revoluxti@kali:~$ ip link show eth0`}</code>
                            </pre>
                        </div>

                        {/* Alteração */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Passo 2: Modificar com macchanger</h4>
                                <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800 font-mono">Root / Sudo</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-2">
                                Sequência técnica no terminal usando o utilitário nativo <code className="text-teal-300">macchanger</code>:
                            </p>
                            <pre className="bg-black/90 border border-slate-800 p-3 rounded-lg text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                                <code>
                                    {`# 1. Derrubar a interface para liberar o hardware
sudo ip link set dev eth0 down

# 2a. OPÇÃO A: Gerar MAC totalmente aleatório
sudo macchanger -r eth0

# 2b. OPÇÃO B: Definir um MAC específico
sudo macchanger -m 00:11:22:33:44:55 eth0

# 3. Subir a interface atualizada
sudo ip link set dev eth0 up

# Didático: Confirmar o MAC original vs atual
sudo macchanger -s eth0`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* 3. IPV4 & ÁLGEBRA BOOLEANA */}
                <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-800/80 pb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Globe className="w-7 h-7 text-blue-400" />
                                3. IPv4: A Álgebra Booleana, A Identidade Lógica &amp; Topológica das Redes
                            </h3>
                            <span className="text-xs font-mono text-slate-500">Camada 3 (Network) • 32 Bits (4 Octetos) • Decimal Pontuado</span>
                            <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800/50">
                                Limite Geral: 2³² ≈ 4.29 Bilhões de IPs
                            </div>

                        </div> <br />


                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed text-justify mb-6">
                        Se o MAC é o CPF, o IP (Internet Protocol) Versão 4 é o CEP (localização) é a sua identidade na rede podendo ser configurado manualmente ou automaticamente ao conectar o cabo, ou se conectar no WIFI atribuição chamada de DHCP. Ele opera na Camada 3 (Rede) do modelo OSI e é responsável pelo roteamento global dos pacotes. <br />
                        O IPv4 possui 32 bits (4 Bytes), dividido em quatro octetos na notação decimal pontuada (ex: 192.168.1.10). Com 32 bits, o limite matemático é de 2³²  (cerca de 4,2 bilhões de endereços únicos) — um limite que já foi esgotado.
                        Todo endereço IPv4 é uma composição de duas variáveis fundamentais: <strong className="text-emerald-400">Network ID</strong> (a rua) e <strong className="text-blue-400">Host ID</strong> (o número da casa). Para extrair essas identidades, os roteadores aplicam operações com portas lógicas (<strong className="text-amber-400">Bitwise Operations</strong>).
                    </p>

                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-6">
                        <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                            <Cpu className="w-4 h-4 text-blue-400" /> Extração Binária do Network ID via Operador Bitwise AND (∧)
                        </h4>

                        <div className="space-y-2 font-mono text-xs md:text-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900/80 p-3 rounded border border-slate-800 gap-2">
                                <span className="text-slate-400 font-bold w-32">IP (192.168.1.10):</span>
                                <span className="text-cyan-300 font-bold tracking-wider">11000000 . 10101000 . 00000001 . 00001010</span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-900/80 p-3 rounded border border-slate-800 gap-2">
                                <span className="text-amber-400 font-bold w-32">Máscara (/24):</span>
                                <span className="text-amber-300 font-bold tracking-wider">11111111 . 11111111 . 11111111 . 00000000</span>
                            </div>

                            <div className="flex justify-center text-slate-600 font-bold py-1">
                                <span>OPERAÇÃO BITWISE AND (∧)</span>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-emerald-950/40 p-3 rounded border border-emerald-800/80 gap-2">
                                <span className="text-emerald-400 font-bold w-32">Network ID:</span>
                                <span className="text-emerald-300 font-bold tracking-wider">11000000 . 10101000 . 00000001 . 00000000</span>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-black/60 rounded border border-slate-800 text-center text-xs text-slate-400 font-mono">
                            Resultado Decimal do Network ID: <strong className="text-emerald-400">192.168.1.0</strong>
                        </div> <br />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                                <span className="text-xs font-mono text-emerald-400 uppercase font-bold block mb-1">Fórmula do Network ID</span>
                                <div className="bg-black/80 p-3 rounded font-mono text-emerald-300 text-center text-sm my-2 border border-slate-800">
                                    f(NetID) = IP ∧ Máscara
                                </div>
                                <p className="text-[11px] text-slate-400">Retém os bits onde a máscara é 1, zerando a porção do host.</p>
                            </div>

                            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                                <span className="text-xs font-mono text-blue-400 uppercase font-bold block mb-1">Fórmula do Host ID</span>
                                <div className="bg-black/80 p-3 rounded font-mono text-blue-300 text-center text-sm my-2 border border-slate-800">
                                    f(HostID) = IP ∧ (NOT Máscara)
                                </div>
                                <p className="text-[11px] text-slate-400">Inverte a máscara para isolar o identificador do host.</p>
                            </div>
                        </div>
                    </div>


                </div>

                {/* 4. BROADCAST & SMURF ATTACK */}
                <div className="bg-[#080d1a] rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-xl">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 border-b border-slate-800/80 pb-4">
                        <Radio className="w-7 h-7 text-purple-400" />
                        4. Broadcast, Multicast &amp; Smurf Attack
                    </h3>
                    <p>
                        O conceito de enviar uma mensagem para um único destino chama-se Unicast. Mas há cenários onde precisamos falar com todos simultaneamente.
                    </p><br />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                            <span className="text-xs font-mono text-purple-400 font-bold uppercase block mb-1">Broadcast de Camada 2 (MAC)</span>
                            <div className="text-amber-400 font-mono text-base font-bold mb-2">FF:FF:FF:FF:FF:FF</div>
                            <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                Quando um switch recebe um frame com esse destino, ele inunda o sinal elétrico e replica para todas as portas ativas no segmento local.
                            </p>
                        </div>

                        <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
                            <span className="text-xs font-mono text-purple-400 font-bold uppercase block mb-1">Broadcast de Camada 3 (IP)</span>
                            <div className="text-blue-400 font-mono text-base font-bold mb-2">255.255.255.255 </div>
                            <p className="text-xs text-slate-300 leading-relaxed text-justify">
                                Força todos os hosts do segmento a processarem o pacote até o último IP válido de uma subrede específica na Camada 3.
                            </p>
                        </div>
                    </div>

                    <div className="bg-rose-950/20 border-l-4 border-rose-500 p-5 rounded-r-xl border-y border-r border-rose-900/30">
                        <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                            <ShieldAlert className="w-5 h-5 text-rose-500" /> Ataque de Amplificação: Smurf Attack (DDoS)
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed text-justify">
                            O Broadcast é ruidoso e consome CPU de todas as máquinas da rede, pois elas são forçadas a processar o pacote até a camada 3 para saber se o assunto lhes interessa. Atacantes abusam dessa mecânica em ataques de <strong>Smurf Attack </strong>(um tipo de DDoS). O ofensor envia pacotes <i>ICMP Echo Request (Ping)</i> para o endereço de broadcast da rede, mas forja (faz <i>spoofing</i>) do IP de origem para que seja o IP da vítima. O resultado? Todas as máquinas da rede respondem ao mesmo tempo para a vítima, causando um estrangulamento de banda massivo.                    </p>
                    </div>
                </div>
            </div>

            {/* 5. IPV6 & 6. GATEWAY / ARP */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#080d1a] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl">
                    <div>
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Zap className="w-6 h-6 text-cyan-400" />
                                5. IPv6 (Expansão do Horizonte)
                            </h3>
                            <span className="text-xs font-mono bg-cyan-950 text-cyan-300 px-2.5 py-1 rounded border border-cyan-800 font-bold">128 Bits</span>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed text-justify mb-4">
                            O IPv4 acabou. A solução foi criar o IPv6, operando com absurdos 128 bits. <br />
                            O espaço total agora é <strong className="text-cyan-300">2¹²⁸ ≈ 3.4 × 10³⁸ endereços</strong>, o suficiente para dar um IP público para cada grão de areia da Terra, eliminando a necessidade de NAT e renovando a conectividade ponta a ponta.
                        </p>

                        <div className="bg-black/90 p-3 rounded-lg border border-slate-800 font-mono text-xs text-cyan-300 text-center mb-6 break-all">
                            <p className="text-xs text-slate-300 leading-relaxed text-center mb-4">
                                Sua representação é feita em 8 blocos de 16 bits usando Hexadecimal
                            </p>
                            2001:0db8:85a3:0000:0000:8a2e:0370:7334
                        </div>


                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                            <span className="text-2xl">🚀</span>
                            <div>
                                <h3 className="text-lg font-bold text-indigo-400">Paradigmas Críticos da Engenharia IPv6</h3>
                                <p className="text-xs text-slate-400">Sessão: <code className="text-indigo-300">revoluxti@ipv6-architecture</code></p>
                            </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed text-center mb-6 max-w-2xl mx-auto">
                            Além da quantidade massiva de endereços (128 bits), a engenharia do IPv6 eliminou gargalos históricos da camada de enlace e automatizou a atribuição de rede.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Morte do Broadcast */}
                            <div className="rounded-lg bg-black/60 border border-slate-800 p-4 hover:border-indigo-500/40 transition-colors flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
                                            <span>📢</span> Morte do Broadcast
                                        </h4>

                                    </div>
                                    <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded border border-red-800/60 font-mono">
                                        Eficiência de Switches
                                    </span>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                                        O IPv6 não possui tráfego de Broadcast. A comunicação orientada a grupos foi dividida estritamente em duas modalidades de alta performance:
                                    </p>
                                    <div className="space-y-2 text-xs">
                                        <div className="bg-slate-950 p-2.5 rounded border border-slate-800/80">
                                            <strong className="text-indigo-400 block mb-1">Multicast:</strong>
                                            <span className="text-slate-400">Envia dados apenas para grupos específicos de ouvintes inscritos, evitando que interfaces não interessadas processem interrupções de CPU.</span>
                                        </div>
                                        <div className="bg-slate-950 p-2.5 rounded border border-slate-800/80">
                                            <strong className="text-indigo-400 block mb-1">Anycast:</strong>
                                            <span className="text-slate-400">Roteia o pacote para o nó fisicamente ou logicamente mais próximo entre um grupo de receptores idênticos.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SLAAC & EUI-64 */}
                            <div className="rounded-lg bg-black/60 border border-slate-800 p-4 hover:border-indigo-500/40 transition-colors flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
                                            <span>⚡</span> SLAAC (Autoconfiguração)
                                        </h4>

                                    </div>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60 font-mono">
                                        Sem DHCP Central
                                    </span>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                                        Com o <strong>SLAAC</strong> (<em>Stateless Address Autoconfiguration</em>), a máquina constrói seu próprio IPv6 global de forma autônoma:
                                    </p>
                                    <div className="bg-slate-950 p-3 rounded border border-slate-800/80 space-y-2 text-xs">
                                        <div className="flex items-start gap-2">
                                            <span className="text-indigo-400 font-mono font-bold">1.</span>
                                            <p className="text-slate-300">
                                                Recebe o <strong>Prefixo de Rede</strong> anunciado pelo roteador via mensagens RA (<em>Router Advertisement</em>).
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="text-indigo-400 font-mono font-bold">2.</span>
                                            <p className="text-slate-300">
                                                Gera a interface de 64 bits combinando esse prefixo com seu próprio <strong>endereço MAC</strong> através do padrão <strong>EUI-64</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dica do revoluxti */}
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                            <span className="text-indigo-400">💡</span>
                            <span>
                                <strong>Dica REVOLUXTI :</strong> No método EUI-64, a placa pega seu MAC de 48 bits, divide-o ao meio e injeta o valor <code className="text-indigo-300 font-mono">FF:FE</code> no centro para completar os 64 bits necessários da Interface ID.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-[#080d1a] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl text-slate-300">
                    <div>
                        {/* Cabeçalho */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <ArrowRightLeft className="w-6 h-6 text-emerald-400" />
                                6. Gateway (O Guardião da Fronteira)
                            </h3>
                            <span className="text-xs font-mono bg-emerald-950 text-emerald-300 px-2 py-1 rounded border border-emerald-800 font-bold">
                                Fronteira L3
                            </span>
                        </div>

                        {/* Resumo e Identificação de Sessão */}
                        <div className="flex items-center justify-between mb-4 text-xs">
                            <p className="text-slate-400">
                                Comunicação entre sub-redes distintas e análise de segurança de Camada 2.
                            </p>
                            <code className="text-emerald-400 text-[10px]">revoluxti@gmail.com</code>
                        </div> <br />

                        {/* Bloco 1: Decisão Matemática (Bitwise AND) */}
                        <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl mb-4 space-y-3">
                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                                <Cpu className="w-4 h-4 text-emerald-400" />
                                <span>Roteamento Interno vs. Externo (Bitwise AND)</span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed">
                                Para uma máquina conversar com outra na <strong>mesma rede (Network ID idêntico)</strong>, a origem entrega o pacote diretamente via <strong>MAC Address e Switch</strong>. Se o destino pertence a outro Network ID, a máquina percebe a diferença e calcula matematicamente via <strong>AND bitwise</strong> e conclui: "Isso não está na minha rede".
                                Nesse momento, ela encapsula a mensagem e redireciona o pacote ao <strong>Default Gateway</strong> (Porta de Ligação Padrão). O Gateway é a (interface do roteador ou firewall L3 local). Ele possui a tabela de rotas globais e sabe como navegar a topologia.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                                <div className="bg-black/60 p-2.5 rounded border border-slate-800">
                                    <span className="font-bold text-slate-200 block mb-1">Mesmo Network ID:</span>
                                    <span className="text-slate-400">Tráfego direto L2 (MAC + Switch)</span>
                                </div>
                                <div className="bg-black/60 p-2.5 rounded border border-slate-800">
                                    <span className="font-bold text-emerald-300 block mb-1">Network ID Diferente:</span>
                                    <span className="text-slate-400">Encapsulado para o Default Gateway (L3)</span>
                                </div>
                            </div>
                        </div> <br />

                        {/* Bloco 2: Segurança Ofensiva - ARP Cache Poisoning */}
                        <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-xl mb-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider">
                                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                                    <span>Red Team: ARP Cache Poisoning & MitM</span>
                                </div>
                                <span className="text-[10px] bg-rose-950 text-rose-300 font-mono px-2 py-0.5 rounded border border-rose-800">
                                    Vulnerabilidade L2
                                </span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed">
                                Como um PC sabe qual é o MAC Address do seu Gateway para entregar o pacote físico? Ele pergunta na rede usando o protocolo <strong>ARP (Address Resolution Protocol)</strong> descobre o MAC do Gateway consultando a rede, mas <strong>não possui autenticação nativa</strong>.
                                Um atacante na rede interna pode injetar e enviar respostas ARP forjadas afirmando: <i>"Eu sou o IP do Gateway, este é o meu MAC"</i> possuir o IP do Gateway.
                            </p>

                            <div className="bg-black/70 p-3 rounded-lg border border-rose-500/20 text-xs text-rose-200 space-y-1">
                                <div className="font-mono text-[11px] text-rose-400 font-bold mb-1">Impacto do Ataque:</div>
                                <p className="text-slate-300">
                                    A A máquina da vítima atualiza sua tabela ARP local e envia todo o seu tráfego de saída (senhas, sessões e e-mails) diretamente ao atacante, consolidando um ataque <strong>Man-in-the-Middle (MitM)</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Bloco 3: Mitigação L2 */}
                        <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-lg flex items-center justify-between text-xs text-emerald-300">
                            <span className="flex items-center gap-2 font-mono text-[11px]">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" /> A defesa para Mitigação L2 em Switches: <br /> Isso exige a configuração DAI (Dynamic ARP Inspection) nos switches.
                            </span>

                        </div>

                    </div>

                    {/* Nota Didática do revoluxti */}
                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="text-emerald-400">💡</span>
                        <span>
                            <strong>Dica revoluxti:</strong> O DAI valida as respostas ARP consultando a tabela de <em>DHCP Snooping</em> do switch. Pacientes que tentarem associar seu MAC a IPs não atribuídos via DHCP são sumariamente bloqueados na porta física.
                        </span>
                    </div>
                </div>
            </div>









        </section>
    );
}