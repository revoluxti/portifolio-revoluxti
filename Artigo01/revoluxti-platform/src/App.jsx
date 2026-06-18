import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { ShieldCheck, UserCheck, Terminal, AlertTriangle } from 'lucide-react';
import DevSecOpsArticle from './DevSecOpsArticle';
import { ProtectedRoute } from './components/ProtectedRoute';

const Dashboard = () => {
  const navigate = useNavigate();
  const [terminalOutput, setTerminalOutput] = useState('STANDBY. Aguardando comando de varredura...');
  const [isScanning, setIsScanning] = useState(false);

  // 1. O Assento Ejetor (Logout) do Operador
  const handleLogout = () => {
    localStorage.removeItem('revoluxti_token');
    localStorage.removeItem('revoluxti_user');
    navigate('/');
  };

  // 2. O Gatilho que chama o Node que chama o Python
  const handleScan = async () => {
    setIsScanning(true);
    setTerminalOutput('Iniciando handshake com Gateway Node.js...\nPreparando Child Process Python...\nExecutando script...\n\n');

    try {
      const token = localStorage.getItem('revoluxti_token');

      const response = await fetch('http://localhost:3000/api/pentest/run-scan', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        setTerminalOutput(prev => prev + '>>> OUTPUT DO SCRIPT PYTHON:\n' + data.output);
      } else {
        setTerminalOutput(prev => prev + '>>> [FALHA CRÍTICA]:\n' + data.error);
      }
    } catch (err) {
      setTerminalOutput(prev => prev + '>>> [ERRO DE COMUNICAÇÃO]: ' + err.message);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-green-500 p-6 md:p-10 font-mono relative">

      {/* HUD Superior com botão de Sair */}
      <div className="flex justify-between items-center border-b border-green-800 pb-4 mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <Terminal className="w-8 h-8 text-green-600" />
          &gt; CENTRO DE COMANDOS DEVSECOPS
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-green-800 hover:bg-green-900/50 text-green-400 transition-all rounded text-sm font-bold"
        >
          [ DESCONECTAR ]
        </button>
      </div>

      <p className="mb-8">Bem-vindo, Operador. Módulos de automação liberados.</p>

      {/* Painel de Controle e Terminal Virtual */}
      <div className="border border-green-900/50 bg-[#020a04] rounded-xl p-6">
        <button
          onClick={handleScan}
          disabled={isScanning}
          className={`mb-6 px-6 py-3 font-bold rounded flex items-center gap-2 transition-all ${isScanning
              ? 'bg-green-900/20 border border-green-800 text-green-700 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-500 text-black border border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]'
            }`}
        >
          <ShieldCheck className="w-5 h-5" />
          {isScanning ? '[ EXECUTANDO VARREDURA... ]' : '[ INICIAR PENTEST / AUTOMAÇÃO ]'}
        </button>

        <div className="bg-black border border-green-900/30 p-4 rounded h-64 overflow-y-auto">
          <pre className="text-sm text-green-400 whitespace-pre-wrap font-mono">
            {terminalOutput}
          </pre>
        </div>
      </div>
    </div>
  );
};

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