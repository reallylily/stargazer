import React from 'react';

import useSearch from 'api/search/useSearch';
import ApiProvider from 'components/_app/ApiProvider/ApiProvider';
import ErrorBoundary from 'components/_app/ErrorBoundary/ErrorBoundary';

// import styles from './App.module.scss';

export const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('react');
  const { data, isLoading, isFetched, error, reload } = useSearch(searchTerm);
  // const clickHandler = (e: Event) => {
  //   e.preventDefault();
  //   console.log('didnt break');
  //   search('hello');
  // };
  return (
    <div className="App">
      <header className="App-header">
        {console.log(data?.topic?.name, isLoading, error)}
        {isFetched && <div>{data?.topic?.name}</div>}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setSearchTerm('github');
            reload();
          }}
        >
          Search
        </button>
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
