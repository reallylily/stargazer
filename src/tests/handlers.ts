import { graphql } from 'msw';

import { mockApiResponse } from './mockApi';

const handlers = [
  graphql.query('GetTopic', (req, res, ctx) => {
    return res(
      ctx.data({
        relatedTopics: [
          { name: 'angular', stargazerCount: 40719 },
          { name: 'react-native', stargazerCount: 23180 },
        ],
        topic: { name: 'react', stargazerCount: 68372 },
      }),
    );
  }),
  // mockApiResponse(`/`, {}, 'post')
];

// export const handlers = [searchHandlers];

export default handlers;
