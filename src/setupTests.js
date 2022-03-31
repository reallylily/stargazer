import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { server } from 'tests/server';
import { queryCache } from 'components/_app/ApiProvider/ApiProvider';

// configure enzyme adapter
configure({ adapter: new Adapter() });

// test setup for MSW and react-query (and scrollIntoView)
beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  });
  queryCache.clear();
});
beforeEach(() => {
  HTMLElement.prototype.scrollIntoView = jest.fn();
  queryCache.clear();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

// ingore console.error
console.error = jest.fn();
