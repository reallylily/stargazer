import { Location, createMemoryHistory, History } from 'history';
import React from 'react';
// import { Router } from 'react-router';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export interface Props {
  children?: React.ReactNode;
  id?: string; // id param to be used in path
  location?: Partial<Location>;
  history?: History;
}

const mockLocation: Location = {
  key: '',
  pathname: '/',
  search: '',
  hash: '',
  state: undefined,
};

const MockRoute: React.FC<Props> = (props: Props) => {
  const { children, id, location: propsLocation, history } = props;
  const location = propsLocation ? { ...mockLocation, ...propsLocation } : undefined;
  const pathname = id ? `/${id}` : location?.pathname || '/';
  const path = id ? `/:id` : pathname;
  return (
    <Routes
    // history={history ?? createMemoryHistory({ initialEntries: [pathname] })}
    >
      <Route
        path={path}
        // location={location}
      >
        {children}
      </Route>
    </Routes>
  );
};

export default MockRoute;
