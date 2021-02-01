import React from 'react';

import Presentation from './pages/Presentation';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Presentation />

      <GlobalStyle />
    </>
  );
};

export default App;
