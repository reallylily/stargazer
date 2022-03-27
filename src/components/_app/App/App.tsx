import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'theme/style.scss'; // must be imported before App

import ApiProvider from 'components/_app/ApiProvider/ApiProvider';
import { Home } from 'pages/Home/Home';

const App: React.FC = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
