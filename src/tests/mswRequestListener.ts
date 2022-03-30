/**
Callback for requests matched by MSW
Set up with `addRequestListener();`
Use with `expectRequest(someExpectedRequst);`
See https://mswjs.io/docs/extensions/life-cycle-events
* */

import { isEqual } from 'lodash';

import { MockedRequest } from 'msw/lib/types/handlers/RequestHandler';
import { server } from 'tests/server';

export interface MockRequest {
  method: 'GET' | 'PUT' | 'POST';
  body: string | Record<string, unknown> | Array<unknown> | FormData;
  name: string;
}

export const onRequest = jest.fn((req: MockedRequest) => {
  const { method, body, url } = req;
  const name = url.pathname.split('/').pop();
  return { method, body, name };
});

export const addRequestListener = (): void => {
  // server.on('request:match', onRequest);
};

export const expectRequest = (request: MockRequest): void => {
  return expect(onRequest).toHaveReturnedWith(request);
};

export const expectNoRequest = (request: MockRequest): void => {
  return expect(onRequest).not.toHaveReturnedWith(request);
};

export const getNumRequests = (request: MockRequest): number => {
  return onRequest.mock.results.filter((r) => isEqual(r.value, request)).length;
};

export const onResponse = jest.fn((res) => {
  return res.body ? JSON.parse(res.body) : res.body;
});

export const addResponseListener = (): void => {
  // server.on('response:mocked', onResponse);
};

export const expectResponse = (response: unknown): void => {
  return expect(onResponse).toHaveReturnedWith(response);
};
