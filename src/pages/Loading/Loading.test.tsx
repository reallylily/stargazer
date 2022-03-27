import React from 'react';

import Loading from './Loading';

const AppTest = (props: { loading?: boolean }) => (
  // <TestProviders authProviderProps={{ loading: props.loading }}>
  <Loading />
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
