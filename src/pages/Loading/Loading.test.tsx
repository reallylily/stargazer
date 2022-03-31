import { render } from '@testing-library/react';
import React from 'react';

import Loading from './Loading';
import TestProviders from 'tests/TestProviders';

const LoadingTest = () => (
  <TestProviders>
    <Loading />
  </TestProviders>
);

describe('Loading Page', () => {
  it('displays loading message', async () => {
    const component = await render(<LoadingTest />);
    const loading = await component.findByText('Catching Stars for your Selection...');
    expect(loading).toBeInTheDocument();
  });
});
