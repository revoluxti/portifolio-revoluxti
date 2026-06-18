import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DevSecOpsArticle from './DevSecOpsArticle'; // O seu artigo e modal de login atual
import { ProtectedRoute } from './components/ProtectedRoute';

// Componentes temporários (Esqueletos) até você desenhar as telas reais
const Dashboard = () => (
  <div className="min-h-screen bg-slate-950 text-green-500 p-10 font-mono">
    <h1 className="text-2xl font-bold border-b border-green-800 pb-2 mb-4">
      &gt; CENTRO DE COMANDOS DEVSECOPS (Aplicação Geral)
    </h1>
    <p>Bem-vindo, Operador. Módulos de varredura disponíveis.</p>
  </div>
);

const AdminPanel = () => (
  <div className="min-h-screen bg-slate-950 text-rose-500 p-10 font-mono">
    <h1 className="text-2xl font-bold border-b border-rose-800 pb-2 mb-4">
      &gt; MÓDULO DE ADMINISTRAÇÃO REVOLUXTI
    </h1>
    <p>Acesso Nível Diretoria. Moderação de privilégios e aprovação de recrutas.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública (A Porta de Entrada) */}
        <Route path="/" element={<DevSecOpsArticle />} />

        {/* Rota Protegida Nível 1: Operadores e Admin (Dashboard da Aplicação) */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['admin', 'analyst']}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Rota Protegida Nível MAX: Exclusiva para Administração */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}