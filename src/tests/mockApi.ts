import { graphql, GraphQLHandler } from 'msw';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockApiResponse = (query: string, data: Record<string, any>): GraphQLHandler => {
  return graphql.query(query, (req, res, ctx) => {
    return res(ctx.data(data));
  });
};
