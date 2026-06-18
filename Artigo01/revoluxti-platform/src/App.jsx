import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ShieldCheck, UserCheck, Terminal, AlertTriangle } from 'lucide-react';
import DevSecOpsArticle from './DevSecOpsArticle';
import { ProtectedRoute } from './components/ProtectedRoute';

// 1. O Esqueleto do Dashboard Operacional
const Dashboard = () => (
  <div className="min-h-screen bg-slate-950 text-green-500 p-10 font-mono">
    <h1 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4">
      &gt; CENTRO DE COMANDOS DEVSECOPS (Aplicação Geral)
    </h1>
    <p>Bem-vindo, Operador. Módulos de varredura disponíveis.</p>
  </div>
);

// 2. O Módulo de Administração (CEO)
const AdminPanel = () => {
  const navigate = useNavigate();
  const [recrutas, setRecrutas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('revoluxti_token');
    localStorage.removeItem('revoluxti_user');
    navigate('/');
  };

  const fetchRecrutas = async () => {
    try {
      const token = localStorage.getItem('revoluxti_token');

      const response = await fetch('http://localhost:3000/api/admin/pending-users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Falha na comunicação segura com o Gateway.');

      const data = await response.json();
      setRecrutas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const aprovarRecruta = async (id) => {
    try {
      const token = localStorage.getItem('revoluxti_token');

      const response = await fetch(`http://localhost:3000/api/admin/approve-user/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setRecrutas(recrutas.filter(recruta => recruta.id !== id));
      } else {
        alert('Erro ao processar aprovação.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecrutas();
  }, []);

  return (
    <div className="min-h-screen bg-[#050101] text-rose-500 p-6 md:p-10 font-mono relative">
      <div className="flex justify-between items-center border-b border-rose-800 pb-4 mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-rose-600" />
          &gt; COMANDO CENTRAL DE OPERAÇÕES
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-rose-800 hover:bg-rose-900/50 text-rose-400 transition-all rounded text-sm font-bold flex items-center gap-2"
        >
          <Terminal className="w-4 h-4" /> [ DESCONECTAR ]
        </button>
      </div>

      <p className="mb-8 text-slate-400 text-sm">Acesso Nível Diretoria. Moderação de privilégios e liberação tática.</p>

      <div className="border border-rose-900/50 bg-[#0a0202] rounded-xl p-6 shadow-[0_0_30px_rgba(225,29,72,0.05)]">
        <h2 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-500" />
          &gt; RECRUTAS AGUARDANDO APROVAÇÃO ({recrutas.length})
        </h2>

        {loading ? (
          <p className="text-rose-700 text-sm animate-pulse">&gt; Executando varredura na rede...</p>
        ) : error ? (
          <p className="text-red-500 text-sm bg-red-950/20 p-4 border border-red-900/50 rounded">&gt; ERRO: {error}</p>
        ) : recrutas.length === 0 ? (
          <p className="text-slate-500 text-sm italic border-l-2 border-slate-800 pl-4">Nenhum operador aguardando liberação no momento.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-rose-400 uppercase bg-rose-950/20 border-b border-rose-900/50">
                <tr>
                  <th className="px-4 py-3">Codename</th>
                  <th className="px-4 py-3">Frequência Segura (E-mail)</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Ação Tática</th>
                </tr>
              </thead>
              <tbody>
                {recrutas.map((recruta) => (
                  <tr key={recruta.id} className="border-b border-rose-900/20 hover:bg-rose-950/10 transition-colors">
                    <td className="px-4 py-4 font-bold text-white">{recruta.full_name}</td>
                    <td className="px-4 py-4 text-slate-400">{recruta.email}</td>
                    <td className="px-4 py-4">
                      <span className="bg-yellow-950/30 text-yellow-500 border border-yellow-900/50 px-2 py-1 rounded text-[10px] tracking-wider">
                        PENDING
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button
                        onClick={() => aprovarRecruta(recruta.id)}
                        className="bg-green-900/20 hover:bg-green-600 border border-green-700 text-green-500 hover:text-black transition-all px-4 py-2 rounded text-xs font-bold flex items-center gap-2 ml-auto"
                      >
                        <UserCheck className="w-4 h-4" /> APROVAR ACESSO
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// 3. O Roteador Principal (Obrigatório para o app não ficar branco)
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DevSecOpsArticle />} />
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={['admin', 'analyst']}>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminPanel />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}