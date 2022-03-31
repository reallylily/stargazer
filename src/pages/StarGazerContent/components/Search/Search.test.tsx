import { render } from '@testing-library/react';
import React from 'react';

import { Search } from './Search';
import TestProviders from 'tests/TestProviders';

const SearchTest = () => (
  <TestProviders>
    {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <Search search={() => {}} />
  </TestProviders>
);

describe('Search', () => {
  it('renders without crashing', async () => {
    const component = await render(<SearchTest />);
    const searchButton = await component.findByText('Search');
    expect(searchButton).toBeInTheDocument();
  });
});
