import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'theme/style.scss'; // must be imported before App

import ApiProvider from 'components/_app/ApiProvider/ApiProvider';
import ErrorBoundary from 'components/_app/ErrorBoundary/ErrorBoundary';
import Main from 'pages/Main/Main';

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const ConnectedApp: React.FC = () => (
  <ErrorBoundary>
    <ApiProvider>
      <App />
    </ApiProvider>
  </ErrorBoundary>
);
export default ConnectedApp;
