import { rest, RestHandler, RestRequest, RestContext, ResponseComposition } from 'msw';

// import { Decorator } from 'stories/types';
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

// Handles a "GetUserInfo" query
// graphql.query('GetUserInfo', (req, res, ctx) => {

//   // When authenticated, respond with a query payload
//   return res(
//     ctx.data({
//       user: {
//         username: authenticatedUser,
//         firstName: 'John',
//       },
//     }),
//   )
// }),
// export const mockApiDecorator = (
//   endpoint: string | RegExp = '/',
//   body: unknown,
//   method = 'get',
//   status = 200,
// ): Decorator => {
//   return (story) => {
//     // server.use(mockApiResponse(endpoint, body, method, status));
//     return story();
//   };
// };
