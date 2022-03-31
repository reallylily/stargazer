import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { LocalDate } from '@js-joda/core';

import MockDate from 'mockdate';
import { server } from 'tests/server';
import { queryCache } from 'components/_app/ApiProvider/ApiProvider';
import { addRequestListener, addResponseListener, onRequest, onResponse } from 'tests/mswRequestListener';

// configure enzyme adapter
configure({ adapter: new Adapter() });

// test setup for MSW and react-query (and scrollIntoView)
beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  });
  queryCache.clear();
  // server.printHandlers();
  // addRequestListener();
  // addResponseListener();
});
beforeEach(() => {
  HTMLElement.prototype.scrollIntoView = jest.fn();
  queryCache.clear();
});
afterEach(() => {
  onRequest.mockClear();
  onResponse.mockClear();
  server.resetHandlers();
});
afterAll(() => server.close());

// // mock window.matchMedia
// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

// ingore console.error
console.error = jest.fn();

// // mock system date
// LocalDate.now = () => LocalDate.of(2020, 3, 23);
// MockDate.set(new Date('Mon Mar 23 2020 12:00:00 GMT-0400 (Eastern Daylight Time)'));

// // mock URL.createObjectURL
// if (typeof window.URL.createObjectURL === 'undefined') {
//   Object.defineProperty(window.URL, 'createObjectURL', { value: () => {} });
// }

// // mock window[...].scrollIntoView
// window.HTMLElement.prototype.scrollIntoView = jest.fn();
