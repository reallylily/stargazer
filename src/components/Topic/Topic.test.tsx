import React from 'react';

import { Topic } from './Topic';

const AppTest = () => (
  // <TestProviders authProviderProps={{ loading: props.loading }}>
  <Topic />
  // </TestProviders>
);

describe('App', () => {
  it('renders without crashing', async () => {
    // const wrapper = await waitForComponent(<AppTest />);
    // expect(wrapper).toBeDefined();
  });
  it('displays loader', async () => {
    // const wrapper = await waitForComponent(<AppTest loading />);
    // expect(wrapper.find(LoadingPage).length).toEqual(1);
  });
});
