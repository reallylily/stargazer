import { rest, RestHandler, RestRequest, RestContext, ResponseComposition } from 'msw';

import { server } from 'tests/server';

export const mockApiResponse = (
  endpoint: string | RegExp = '/',
  body: unknown,
  method = 'get',
  status = 200,
): RestHandler => {
  const endpointRegExp = new RegExp(endpoint);
  const func = (req: RestRequest, res: ResponseComposition, ctx: RestContext) =>
    res(ctx.status(status), ctx.json(body));
  switch (method.toLowerCase()) {
    case 'put':
      return rest.put(endpointRegExp, func);
    case 'post':
      return rest.post(endpointRegExp, func);
    case 'delete':
      return rest.delete(endpointRegExp, func);
    default:
      return rest.get(endpointRegExp, func);
  }
};
