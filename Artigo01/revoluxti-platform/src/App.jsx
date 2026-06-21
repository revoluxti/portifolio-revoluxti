import React from 'react';
import DevSecOpsArticle from './DevSecOpsArticle.jsx';

export default function App() {
  return (
    <div className="bg-[#050101] min-h-screen font-mono">
      {/* O sistema agora carrega o artigo de forma direta e irrestrita */}
      <DevSecOpsArticle />
    </div>
  );
}