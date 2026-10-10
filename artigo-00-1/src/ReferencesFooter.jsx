import React from 'react';
import { BookOpen, Skull } from 'lucide-react';

export default function ReferencesFooter() {
  return (
    <footer className="mt-0 border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden font-sans">
      {/* Efeito de luz azul de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* CAVEIRA GIGANTE SUAVE NO FUNDO (Canto Esquerdo) */}
      <div className="absolute -bottom-1 -left-10 opacity-[0.05] pointer-events-none rotate-12 z-0">
        <Skull size={300} className="text-lime-400 blur-sm" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center gap-4 mb-10 opacity-70">
          <div className="p-3 bg-slate-900 rounded-full border border-slate-800">
            <BookOpen className="w-6 h-6 text-slate-400" />
          </div>
          <h3 className="uppercase tracking-[0.2em] text-sm font-bold text-slate-400">Referências Bibliográficas</h3>
        </div>

        {/* Grid de Referências em 2 Colunas */}
        <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-12">
          {/* Coluna 1 */}
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-3">
            <p>
              ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. <strong>ABNT NBR 6023</strong>: Informação e documentação — Referências — Elaboração. Rio de Janeiro: ABNT, 2018.
            </p>
            <p>
              COLE, T.; ROUTIER, D. <strong>RFC 3021</strong>: Using 31-Bit Prefixes on IPv4 Point-to-Point Links. IETF, 2000. Disponível em: <a href="https://datatracker.ietf.org/doc/html/rfc3021" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">rfc3021</a>. Acesso em: 9 out. 2026.
            </p>
            <p>
              KUROSE, James F.; ROSS, Keith W. <strong>Redes de Computadores e a Internet</strong>: Uma Abordagem Top-Down. 8. ed. São Paulo: Pearson Education do Brasil, 2021.
            </p>
            <p>
              NYQUIST, Harry. Certain Topics in Telegraph Transmission Theory. <em>Transactions of the American Institute of Electrical Engineers</em>, v. 47, n. 2, p. 617–644, 1928.
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-[10px] sm:text-[11px] text-slate-400 font-mono space-y-3">
            <p>
              REKHTER, Y. et al. <strong>RFC 1918</strong>: Address Allocation for Private Internets. IETF, 1996. Disponível em: <a href="https://datatracker.ietf.org/doc/html/rfc1918" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">rfc1918</a>. Acesso em: 9 out. 2026.
            </p>
            <p>
              SHANNON, Claude E. Communication in the Presence of Noise. <em>Proceedings of the Institute of Radio Engineers</em>, v. 37, n. 1, p. 10–21, jan. 1949.
            </p>
            <p>
              TANENBAUM, Andrew S.; WETHERALL, David J. <strong>Redes de Computadores</strong>. 5. ed. São Paulo: Pearson Prentice Hall, 2011.
            </p>
            <p>
              VOTER, B.; FULLER, V. <strong>RFC 4632</strong>: Classless Inter-Domain Routing (CIDR). IETF, 2006. Disponível em: <a href="https://datatracker.ietf.org/doc/html/rfc4632" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">rfc4632</a>. Acesso em: 9 out. 2026.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-slate-900 pt-8">
          {/* CAVEIRA NEON CENTRAL */}
          <Skull
            className="mb-6 w-12 h-12 text-lime-400 drop-shadow-[0_0_15px_rgba(220,38,38,0.9)] hover:scale-110 transition-transform duration-300"
            strokeWidth={1.5}
          />

          <p className="text-slate-300 font-bold mb-2 tracking-wide">Universidade Tecnológica Federal do Paraná (UTFPR)</p>
          <p className="text-slate-500 text-sm mb-1 uppercase tracking-widest">Engenharia de Computação</p>
          <p className="text-cyan-600/60 text-xs font-mono mt-6">REVOLUXTI © 2026 - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}