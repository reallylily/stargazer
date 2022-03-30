import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Search } from './Search';
import useSearch from 'api/search/useSearch';
import TestProviders from 'tests/TestProviders';
import { mockApiResponse } from 'tests/mockApi';
import { server } from 'tests/server';

const SearchTest = () => <TestProviders>{/* <Search /> */}</TestProviders>;

describe('App', () => {
  it('renders without crashing', async () => {
    // const { search } = useSearch();
    // server.use(mockApiResponse(`/`, {}));
    const component = await render(<SearchTest />);
    const searchButton = await component.findByText('Search');
    fireEvent.click(searchButton);

    // expect(search).toBeInTheDocument();
  });
});
