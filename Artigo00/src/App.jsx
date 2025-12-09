/* ARQUIVO: src/App.jsx
   
   FLUXO:
   1. Comenta a versão anterior (DisplayInfographic).
   2. Importa e exibe a nova versão histórica (HistoryInfographic).
*/

import React from 'react';
// import DisplayInfographic from './DisplayInfographic'; 
import HistoryInfographic from './HistoryInfographic';

function App() {
  return (
    <div>
      <HistoryInfographic />
    </div>
  );
}

export default App;