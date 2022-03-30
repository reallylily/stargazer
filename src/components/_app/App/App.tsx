import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'theme/style.scss'; // must be imported before App

import ApiProvider from 'components/_app/ApiProvider/ApiProvider';
import StarGazerContent from 'pages/StarGazerContent/StarGazerContent';

const App: React.FC = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StarGazerContent />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
