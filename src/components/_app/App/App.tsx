import React from 'react';

import useSearch from 'api/search/useSearch';
import ApiProvider from 'components/_app/ApiProvider/ApiProvider';
import ErrorBoundary from 'components/_app/ErrorBoundary/ErrorBoundary';

// import styles from './App.module.scss';

export const App: React.FC = () => {
  const { data, isLoading, error } = useSearch();
  return (
    <div className="App">
      <header className="App-header">
        {console.log(data, isLoading, error)}
        <p>
          Edit <code>src/App.js</code> and save to heeeeeeeere.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
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
