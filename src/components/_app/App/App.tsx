import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'theme/style.scss'; // must be imported before App

import ApiProvider from 'components/_app/ApiProvider/ApiProvider';
import Main from 'pages/Main/Main';

const App: React.FC = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
