import React, { useState, useMemo } from 'react';
import {
    Binary,
    Network,
    Layers,
    ShieldAlert,
    Sliders,
    ArrowDown,
    ArrowRight,
    Zap,
    AlertTriangle,
    Cpu,
    Table,
    CheckCircle2,
    Globe
} from 'lucide-react';

const Mascaras = () => {
    // ==========================================
    // 1. ESTADO PARA BITWISE AND (SEÇÃO 1)
    // ==========================================
    const [ipInput, setIpInput] = useState('192.168.1.100');
    const [maskInput, setMaskInput] = useState('255.255.255.0');

    const parseOctets = (str) => {
        const parts = str.split('.').map(n => parseInt(n, 10));
        if (parts.length !== 4 || parts.some(n => isNaN(n) || n < 0 || n > 255)) {
            return [0, 0, 0, 0];
        }
        return parts;
    };

    const toBinary8 = (num) => (num >>> 0).toString(2).padStart(8, '0');

    const ipOctets = parseOctets(ipInput);
    const maskOctets = parseOctets(maskInput);
    const networkOctets = ipOctets.map((oct, i) => oct & maskOctets[i]);

    const isFullNetworkOctet = (maskOct) => maskOct === 255;

    // ==========================================
    // 2. ESTADO PARA SIMULADOR DE DESPERDÍCIO (SEÇÃO 2)
    // ==========================================
    const [requiredIps, setRequiredIps] = useState(300);

    // ==========================================
    // 3. SUBNET CALCULATOR / SIMULADOR CIDR (SEÇÃO 3)
    // ==========================================
    const [prefix, setPrefix] = useState(24);

    const calculations = useMemo(() => {
        // String completa de 32 bits
        const binaryString = '1'.repeat(prefix) + '0'.repeat(32 - prefix);

        // Divisão em 4 octetos de 8 bits cada
        const octetsBinary = [
            binaryString.slice(0, 8),
            binaryString.slice(8, 16),
            binaryString.slice(16, 24),
            binaryString.slice(24, 32)
        ];

        // Decimais correspondentes
        const octetsDecimal = octetsBinary.map(bin => parseInt(bin, 2));
        const maskDecimal = octetsDecimal.join('.');

        // Hosts utilizáveis
        const hostBits = 32 - prefix;
        let usableHosts = 0;
        if (prefix <= 30) usableHosts = Math.pow(2, hostBits) - 2;
        else if (prefix === 31) usableHosts = 2; // RFC 3021
        else usableHosts = 1;

        return {
            maskDecimal,
            octetsBinary,
            octetsDecimal,
            hostBits,
            usableHosts
        };
    }, [prefix]);

    // Cálculo da porcentagem do slider com offset compensado para o balão flutuante
    const minPrefix = 8;
    const maxPrefix = 30;
    const sliderPercentage = ((prefix - minPrefix) / (maxPrefix - minPrefix)) * 100;

    // ==========================================
    // 4. ESTADO PARA TESTADOR DE RFC 1918 (SEÇÃO 4)
    // ==========================================
    const [testIp, setTestIp] = useState('192.168.1.5');

    const checkIpType = (ipStr) => {
        const octs = parseOctets(ipStr);
        const [o1, o2] = octs;

        if (o1 === 10) {
            return {
                type: 'Privado (Classe A)',
                range: '10.0.0.0/8',
                use: 'Arquiteturas corporativas de grande escala e VPNs.',
                color: 'text-amber-400',
                bg: 'bg-amber-950/30',
                border: 'border-amber-800'
            };
        }
        if (o1 === 172 && o2 >= 16 && o2 <= 31) {
            return {
                type: 'Privado (Classe B)',
                range: '172.16.0.0/12',
                use: 'Redes VPC na AWS, Kubernetes e Docker.',
                color: 'text-cyan-400',
                bg: 'bg-cyan-950/30',
                border: 'border-cyan-800'
            };
        }
        if (o1 === 192 && o2 === 168) {
            return {
                type: 'Privado (Classe C)',
                range: '192.168.0.0/16',
                use: 'Padrão absoluto de todo roteador doméstico (Wi-Fi de casa).',
                color: 'text-emerald-400',
                bg: 'bg-emerald-950/30',
                border: 'border-emerald-800'
            };
        }
        if (o1 === 127) {
            return {
                type: 'Loopback Local',
                range: '127.0.0.0/8',
                use: 'Interface de teste interno da pilha TCP/IP do host.',
                color: 'text-purple-400',
                bg: 'bg-purple-950/30',
                border: 'border-purple-800'
            };
        }
        return {
            type: 'Público (Roteável na Internet)',
            range: 'Roteamento Global (IANA)',
            use: 'Controlados globalmente pela IANA. Únicos no mundo.',
            color: 'text-blue-400',
            bg: 'bg-blue-950/30',
            border: 'border-blue-800'
        };
    };

    const ipTypeInfo = checkIpType(testIp);

    return (
        <div className="min-h-screen bg-[#030712] text-slate-300 p-4 sm:p-6 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* CABEÇALHO DA SESSÃO */}
                <header className="border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                        <Network className="w-4 h-4" />
                        <span>Sessão: revoluxti@network-masks</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        7 - Máscaras e a Fronteira da Rede
                    </h1>

                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                        <Binary className="w-5 h-5 text-emerald-400" />
                        A "régua" matemática que separa o ID da Rede ("o bairro") do ID do Host ("a casa") e a evolução do roteamento.
                    </h2> <br />

                    <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                        Para entender a Máscara, primeiro precisamos entender a sua função fundamental:  o roteamento local vs. remoto<br />
                        O IP funciona como o endereço da sua casa. Mas como o seu computador sabe se o computador de destino <br /> está na mesma sala que ele
                        (e, portanto, ele só precisa chamar no Switch), ou se o destino está em outro país <br />
                        (e ele precisa enviar o pacote para o Gateway/Roteador)?
                    </p>
                </header>

                {/* LAYOUT EM 2 COLUNAS PARA DESKTOP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

                    {/* ==================== COLUNA DA ESQUERDA ==================== */}
                    <div className="space-y-6">

                        {/* SEÇÃO 1: CÁLCULO BITWISE AND */}
                        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <h2 className="text-base font-bold text-white flex items-center gap-2">
                                    <Binary className="w-5 h-5 text-emerald-400" />
                                    7.1 - A Regra de Ouro: Cálculo Bitwise AND
                                </h2>
                                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-bold">
                                    Figura 1 Diagrama
                                </span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                O computador realiza a operação lógica <strong>AND (E bit a bit)</strong> entre o IPv4 e a Máscara. Onde os bits valem <code className="text-emerald-400">1</code> (255), preserva-se o ID da rede; onde valem <code className="text-amber-400">0</code>, isola-se o ID do host.
                            </p>

                            {/* ENTRADAS DO USUÁRIO */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 bg-black/50 p-3 rounded-xl border border-slate-800">
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                                        Endereço IPv4 de Origem:
                                    </label>
                                    <input
                                        type="text"
                                        value={ipInput}
                                        onChange={(e) => setIpInput(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
                                        placeholder="192.168.1.100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                                        Máscara de Sub-rede:
                                    </label>
                                    <input
                                        type="text"
                                        value={maskInput}
                                        onChange={(e) => setMaskInput(e.target.value)}
                                        className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs font-mono text-emerald-400 focus:outline-none focus:border-emerald-500"
                                        placeholder="255.255.255.0"
                                    />
                                </div>
                            </div>

                            {/* PAINEL VISUAL BITWISE */}
                            <div className="bg-black/80 border border-slate-800 rounded-xl p-4 font-mono space-y-4 overflow-x-auto">
                                <div>
                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-sans font-semibold">
                                        IPv4 Address
                                    </span>
                                    <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-bold">
                                        {ipOctets.map((oct, idx) => (
                                            <div key={idx} className="bg-slate-800/80 border border-slate-700 py-1.5 rounded text-slate-100 shadow-inner">
                                                {oct}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border border-dashed border-slate-600/80 rounded-lg p-2.5 bg-slate-950/40">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-sans font-semibold">
                                        Subnet Mask (AND Bitwise)
                                    </span>
                                    <div className="grid grid-cols-4 gap-1.5 text-center text-[11px]">
                                        {maskOctets.map((oct, idx) => {
                                            const isNet = isFullNetworkOctet(oct);
                                            return (
                                                <div key={idx} className="space-y-0.5">
                                                    <div className={`font-bold ${isNet ? 'text-emerald-400' : 'text-amber-500'}`}>
                                                        {oct}
                                                    </div>
                                                    <div className={`text-[9px] ${isNet ? 'text-emerald-500/80' : 'text-amber-500/80'}`}>
                                                        {toBinary8(oct)}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-1 text-emerald-400 my-0.5">
                                    <ArrowDown className="w-4 h-4 animate-bounce" />
                                    <span className="text-[10px] font-sans font-bold tracking-widest text-emerald-400">AND</span>
                                    <ArrowDown className="w-4 h-4 animate-bounce" />
                                </div>

                                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-sans font-bold">
                                    {maskOctets.map((oct, idx) => {
                                        const isNet = isFullNetworkOctet(oct);
                                        return (
                                            <div
                                                key={idx}
                                                className={`py-1.5 rounded ${isNet
                                                    ? 'bg-emerald-800/80 text-emerald-100 border border-emerald-600'
                                                    : 'bg-amber-800/80 text-amber-100 border border-amber-600'
                                                    }`}
                                            >
                                                {isNet ? 'Network' : 'Host'}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div>
                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-sans font-semibold">
                                        IPv4 Network Address (Endereço da Rede)
                                    </span>
                                    <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-bold">
                                        {networkOctets.map((oct, idx) => {
                                            const isNet = isFullNetworkOctet(maskOctets[idx]);
                                            return (
                                                <div
                                                    key={idx}
                                                    className={`border py-1.5 rounded shadow-inner ${isNet
                                                        ? 'bg-slate-900 border-emerald-500/50 text-emerald-400'
                                                        : 'bg-slate-900 border-amber-500/50 text-amber-500'
                                                        }`}
                                                >
                                                    {oct}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SEÇÃO 2: CLASSES ANTIGAS E DESPERDÍCIO */}
                        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <h2 className="text-base font-bold text-white flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-amber-400" />
                                    7.2 As Classes Antigas e o Desperdício
                                </h2>
                                <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800 font-bold">
                                    Figura 2 Tabela
                                </span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                Nos anos 80, o sistema <strong>Classful</strong> fatiava a internet em blocos rígidos, onde o primeiro octeto ditava a máscara padrão:
                            </p>

                            {/* TABELA CLASSFUL */}
                            <div className="overflow-x-auto mb-4 rounded-xl border border-slate-800 bg-black/60">
                                <table className="w-full text-left text-[11px] font-mono">
                                    <thead className="bg-slate-800/90 text-slate-200 border-b border-slate-700">
                                        <tr>
                                            <th className="p-2">Classe</th>
                                            <th className="p-2">Início</th>
                                            <th className="p-2">Fim</th>
                                            <th className="p-2">Máscara</th>
                                            <th className="p-2">Max Hosts</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800 text-slate-300">
                                        <tr className="hover:bg-slate-800/40">
                                            <td className="p-2 font-bold text-blue-400">Classe A</td>
                                            <td className="p-2">1.0.0.0</td>
                                            <td className="p-2">127.255.255.255</td>
                                            <td className="p-2 text-emerald-400">255.0.0.0</td>
                                            <td className="p-2 text-slate-200 font-bold">16.777.214</td>
                                        </tr>
                                        <tr className="hover:bg-slate-800/40">
                                            <td className="p-2 font-bold text-cyan-400">Classe B</td>
                                            <td className="p-2">128.0.0.0</td>
                                            <td className="p-2">191.255.255.255</td>
                                            <td className="p-2 text-emerald-400">255.255.0.0</td>
                                            <td className="p-2 text-slate-200 font-bold">65.534</td>
                                        </tr>
                                        <tr className="hover:bg-slate-800/40">
                                            <td className="p-2 font-bold text-emerald-400">Classe C</td>
                                            <td className="p-2">192.0.0.0</td>
                                            <td className="p-2">223.255.255.255</td>
                                            <td className="p-2 text-emerald-400">255.255.255.0</td>
                                            <td className="p-2 text-slate-200 font-bold">254</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* SIMULADOR DE DESPERDÍCIO */}
                            <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                                        O Problema Lógico do Desperdício
                                    </h3>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[11px] text-slate-300 block">
                                        Empresa precisa de: <strong className="text-amber-300 font-mono">{requiredIps} IPs</strong>
                                    </label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="1000"
                                        value={requiredIps}
                                        onChange={(e) => setRequiredIps(parseInt(e.target.value, 10))}
                                        className="w-full accent-amber-500 bg-slate-950 h-1.5 rounded cursor-pointer"
                                    />
                                </div> <br />

                                <div className="text-[11px] font-mono bg-black/70 p-3 rounded-lg border border-red-500/30 text-red-300">
                                    Sem CIDR: Como Classe C só tem 254 IPs, pegava-se Classe B (65.534 IPs). Desperdício de <strong>{Math.max(0, 65534 - requiredIps).toLocaleString()} IPs públicos</strong>!
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* ==================== COLUNA DA DIREITA ==================== */}
                    <div className="space-y-6">

                        {/* SEÇÃO 3: PADRÃO CIDR & SIMULADOR ATUALIZADO */}
                        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                                <h2 className="text-base font-bold text-white flex items-center gap-2">
                                    <Sliders className="w-5 h-5 text-cyan-400" />
                                    7.3 O Padrão CIDR: Precisão Cirúrgica
                                </h2>
                                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800 font-bold">
                                    Simulador Interativo
                                </span>
                            </div>

                            <p className="text-xs text-slate-300 leading-relaxed">
                                Arraste a barra para navegar por cada prefixo e veja em tempo real como a máscara fatia os bits da rede:
                            </p>

                            {/* COMPONENTE SIMULADOR CIDR */}
                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-5">
                                <div className="text-center border-b border-slate-800 pb-3">
                                    <h3 className="text-sm font-bold text-slate-100">Simulador de CIDR</h3>
                                    <p className="text-slate-400 text-[11px] mt-0.5">Ajuste os bits da máscara e observe a alteração na rede:</p>
                                </div>

                                {/* Slider CIDR com Badge Flutuante Alinhado */}
                                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <label htmlFor="cidr-slider" className="font-semibold text-slate-300">
                                            Ajuste o Prefixo (Bits da Rede):
                                        </label>
                                        <span className="text-cyan-400 font-mono text-xs font-bold">/{prefix}</span>
                                    </div>

                                    {/* Contêiner Relativo do Slider e Balão Flutuante */}
                                    <div className="relative pt-7 pb-2 px-1">
                                        <div
                                            className="absolute top-0 transform -translate-x-1/2 transition-all duration-75 pointer-events-none"
                                            style={{
                                                left: `calc(${sliderPercentage}% + ${(12 - sliderPercentage * 0.24)}px)`
                                            }}
                                        >
                                            <div className="bg-cyan-500 text-slate-950 font-black text-xs font-mono px-2.5 py-0.5 rounded shadow-lg shadow-cyan-500/20 relative flex items-center gap-1">
                                                /{prefix}
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-x-transparent border-t-4 border-t-cyan-500" />
                                            </div>
                                        </div>

                                        <input
                                            id="cidr-slider"
                                            type="range"
                                            min={minPrefix}
                                            max={maxPrefix}
                                            value={prefix}
                                            onChange={(e) => setPrefix(Number(e.target.value))}
                                            className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                                        />

                                        {/* Botoes de Preset Rapido */}
                                        <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 pt-3">
                                            {[
                                                { val: 8, label: 'Classe A' },
                                                { val: 16, label: 'Classe B' },
                                                { val: 24, label: 'Classe C' },
                                                { val: 27, label: '/27' },
                                                { val: 30, label: 'P2P' }
                                            ].map((preset) => (
                                                <button
                                                    key={preset.val}
                                                    type="button"
                                                    onClick={() => setPrefix(preset.val)}
                                                    className={`flex flex-col items-center transition-colors cursor-pointer hover:text-cyan-400 ${prefix === preset.val ? 'text-cyan-400 font-bold' : 'text-slate-500'
                                                        }`}
                                                >
                                                    <span className="font-mono font-bold">/{preset.val}</span>
                                                    <span className="text-[10px] hidden sm:inline text-slate-500">{preset.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Painel de Resultados */}
                                <div className="space-y-3">
                                    {/* Máscara Decimal */}
                                    <div className="bg-slate-900 p-3 rounded-lg flex items-center justify-between border-l-4 border-emerald-500">
                                        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Máscara Decimal</span>
                                        <span className="text-base font-bold text-slate-100 font-mono tracking-wider">{calculations.maskDecimal}</span>
                                    </div>

                                    {/* Visão Binária em Cards de Octetos */}
                                    <div className="bg-slate-900 p-3.5 rounded-lg space-y-3 border-l-4 border-blue-500">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                                                Visão Binária (32 Bits)
                                            </span>
                                            <div className="flex items-center gap-3 text-[11px] font-mono">
                                                <span className="text-cyan-300 font-semibold">1 = Rede</span>
                                                <span className="text-rose-400 font-semibold">0 = Host</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                                            {calculations.octetsBinary.map((octet, octetIdx) => (
                                                <div
                                                    key={octetIdx}
                                                    className="bg-slate-950/80 border border-slate-800 rounded-lg p-2 flex flex-col items-center gap-1.5"
                                                >
                                                    <div className="flex items-center justify-between w-full text-[10px] font-mono text-slate-400 px-1">
                                                        <span>Octeto {octetIdx + 1}</span>
                                                        <span className="font-bold text-cyan-300">{calculations.octetsDecimal[octetIdx]}</span>
                                                    </div>

                                                    <div className="flex items-center justify-between w-full gap-0.5">
                                                        {octet.split('').map((bit, bitIdx) => {
                                                            const absoluteBitIndex = octetIdx * 8 + bitIdx;
                                                            const isNetworkBit = absoluteBitIndex < prefix;

                                                            return (
                                                                <div
                                                                    key={bitIdx}
                                                                    className={`flex-1 h-6 flex items-center justify-center rounded text-[11px] font-mono font-bold border transition-colors ${isNetworkBit
                                                                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                                                                        : 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                                                                        }`}
                                                                >
                                                                    {bit}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantidade de Hosts */}
                                    <div className="bg-slate-900 p-3 rounded-lg flex items-center justify-between border-l-4 border-red-500">
                                        <div>
                                            <span className="block text-xs text-slate-400 uppercase tracking-wider font-semibold">Hosts Disponíveis</span>
                                            <span className="block text-[10px] text-slate-500">
                                                (2<sup>{32 - prefix}</sup> - 2)
                                            </span>
                                        </div>
                                        <span className="text-xl font-black text-white font-mono">
                                            {calculations.usableHosts.toLocaleString('pt-BR')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SEÇÃO 4: RFC 1918 PRIVADOS VS PÚBLICOS & NAT */}
                        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <h2 className="text-base font-bold text-white flex items-center gap-2">
                                    <ShieldAlert className="w-5 h-5 text-purple-400" />
                                    7.4 RFC 1918: Blocos Privados vs. Públicos & NAT
                                </h2>
                                <span className="text-[10px] font-mono bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800 font-bold">
                                    Roteamento
                                </span>
                            </div>

                            {/* VALIDADOR DE IP */}
                            <div className="bg-black/60 border border-slate-800 p-4 rounded-xl space-y-3 mb-4">
                                <label className="block text-xs font-bold text-slate-300">
                                    Testar IP para Classificação (RFC 1918):
                                </label>
                                <input
                                    type="text"
                                    value={testIp}
                                    onChange={(e) => setTestIp(e.target.value)}
                                    className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-500"
                                    placeholder="Ex: 10.0.0.1, 172.16.0.5, 192.168.1.5, 8.8.8.8"
                                />

                                <div className={`p-3 rounded-lg border ${ipTypeInfo.bg} ${ipTypeInfo.border} space-y-1`}>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs font-bold font-mono ${ipTypeInfo.color}`}>
                                            {ipTypeInfo.type}
                                        </span>
                                        <span className="text-[9px] bg-black/60 text-slate-300 px-1.5 py-0.5 rounded font-mono">
                                            {ipTypeInfo.range}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-300 leading-relaxed">
                                        {ipTypeInfo.use}
                                    </p>
                                </div>
                            </div>

                            {/* PAPEL DO NAT */}
                            <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2">
                                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                                    <Zap className="w-4 h-4 text-amber-400" />
                                    O Papel do NAT (Network Address Translation)
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-center pt-1">
                                    <div className="bg-black/60 p-2 rounded border border-emerald-800/60">
                                        <span className="text-emerald-400 block font-bold text-[11px]">1. IP Privado</span>
                                        <span className="text-slate-400 text-[10px]">192.168.1.5</span>
                                    </div>

                                    <div className="bg-black/60 p-2 rounded border border-amber-800/60 flex items-center justify-center">
                                        <span className="text-amber-400 font-bold text-[11px] flex items-center gap-1">
                                            2. NAT <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>

                                    <div className="bg-black/60 p-2 rounded border border-blue-800/60">
                                        <span className="text-blue-400 block font-bold text-[11px]">3. IP Público</span>
                                        <span className="text-slate-400 text-[10px]">200.x.x.x</span>
                                    </div>
                                </div>
                            </div>

                        </section>

                        

                    </div>
                    

                </div>
                

                

            </div>
        </div>
    );
};

export default Mascaras;