import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [pages, setPages] = useState(['React', 'NodeJs', 'JavaScript']);

  function handleAddPage() {
    setPages([...pages, `Nova pagina ${Date.now()}`]);

    console.log(pages);
  }

  return (
    <>
      <Header title="Meu titulo" >
        <ul>
          {pages.map(page => <li key={page}>{page}</li>)}
        </ul>
      </Header>

      <button type="button" onClick={handleAddPage}>Nova Página</button>
    </>
  )
}

export default App;