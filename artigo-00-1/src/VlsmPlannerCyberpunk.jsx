import React, { useState } from 'react';

const VlsmPlannerCyberpunk = () => {
  const baseNetwork = "10.0.0.0 /24 (256 IPs)";

  // Atualizando as cores para a paleta Red Team / Cyberpunk
  const [subnets] = useState([
    { id: 1, name: "Operações (VLAN 10)", req: 100, cidr: "/25", size: 128, range: "10.0.0.0 - 10.0.0.127", mask: "255.255.255.128", color: "bg-slate-900 border-red-500 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.15)]" },
    { id: 2, name: "Recon (VLAN 20)", req: 50, cidr: "/26", size: 64, range: "10.0.0.128 - 10.0.0.191", mask: "255.255.255.192", color: "bg-slate-900 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]" },
    { id: 3, name: "Payloads (VLAN 30)", req: 20, cidr: "/27", size: 32, range: "10.0.0.192 - 10.0.0.223", mask: "255.255.255.224", color: "bg-slate-900 border-purple-500 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
    { id: 4, name: "Link Roteador (PtP)", req: 2, cidr: "/30", size: 4, range: "10.0.0.224 - 10.0.0.227", mask: "255.255.255.252", color: "bg-slate-900 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]" },
    { id: 5, name: "Espaço Livre (Unallocated)", req: 0, cidr: "Misto", size: 28, range: "10.0.0.228 - 10.0.0.255", mask: "N/A", color: "bg-slate-950 border-dashed border-slate-700 text-slate-600" }
  ]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)] relative overflow-hidden bg-slate-950 font-mono text-slate-300">
      
      {/* Fundo Quadriculado Matrix (Verde sutil) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-red-500 tracking-widest uppercase drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            Arquitetura VLSM
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            [+] Fatiando o bloco mestre <span className="text-cyan-400 font-bold">{baseNetwork}</span>
          </p>
        </div>

        {/* Barra de Progresso Cyberpunk */}
        <div className="mb-8 w-full h-8 bg-slate-900 rounded border border-slate-800 overflow-hidden flex shadow-inner">
          <div className="h-full bg-red-600 w-1/2 flex items-center justify-center text-xs font-bold text-white shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" title="/25 (128 IPs)">/25</div>
          <div className="h-full bg-cyan-600 w-1/4 flex items-center justify-center text-xs font-bold text-white border-l border-slate-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" title="/26 (64 IPs)">/26</div>
          <div className="h-full bg-purple-600 w-[12.5%] flex items-center justify-center text-xs font-bold text-white border-l border-slate-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" title="/27 (32 IPs)">/27</div>
          <div className="h-full bg-emerald-500 w-[1.56%] border-l border-slate-900" title="/30 (4 IPs)"></div>
          <div className="h-full bg-slate-800 w-[10.94%] flex items-center justify-center text-xs text-slate-500 shadow-inner" title="Espaço Livre">NULL</div>
        </div>

        {/* Grid de Detalhamento */}
        <div className="grid gap-4">
          {subnets.map((net) => (
            <div key={net.id} className={`p-4 rounded border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all hover:brightness-125 ${net.color}`}>
              <div className="flex-1">
                <h3 className="font-bold text-lg flex items-center gap-2 uppercase tracking-wide">
                  {net.name}
                  {net.req > 0 && <span className="text-[10px] px-2 py-1 bg-slate-950 border border-current rounded text-current uppercase tracking-wider">Req: {net.req} IPs</span>}
                </h3>
                <div className="text-sm mt-1 opacity-80">
                  <span className="text-slate-500">&gt; range: </span>
                  <strong>{net.range}</strong>
                </div>
              </div>
              
              <div className="flex flex-row md:flex-col gap-4 md:gap-1 text-right w-full md:w-auto bg-slate-950/50 p-3 rounded border border-white/5">
                <div className="flex justify-between md:justify-end items-center gap-2">
                  <span className="text-[10px] uppercase text-slate-500">Bloco:</span>
                  <span className="font-bold text-lg">{net.cidr}</span>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2">
                  <span className="text-[10px] uppercase text-slate-500">Tamanho:</span>
                  <span>{net.size} IPs</span>
                </div>
                {net.mask !== "N/A" && (
                  <div className="flex justify-between md:justify-end items-center gap-2">
                    <span className="text-[10px] uppercase text-slate-500">Máscara:</span>
                    <span className="text-xs">{net.mask}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VlsmPlannerCyberpunk;