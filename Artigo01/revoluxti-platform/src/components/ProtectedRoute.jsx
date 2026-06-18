import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, allowedRoles }) => {
  // 1. Pega o crachá e os dados do usuário do cofre do navegador
  const token = localStorage.getItem('revoluxti_token');
  const userStr = localStorage.getItem('revoluxti_user');

  // 2. Se não tiver crachá nenhum, chuta de volta para a tela inicial (Artigo/Login)
  if (!token || !userStr) {
    return <Navigate to="/" replace />;
  }

  const user = JSON.parse(userStr);

  // 3. Verificação de Hierarquia (O Poder do CEO)
  // Se a rota exige um nível específico (ex: 'admin') e o usuário for só 'analyst', bloqueia!
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />; 
  }

  // Se passou em todos os testes de segurança, renderiza a página solicitada
  return children;
};