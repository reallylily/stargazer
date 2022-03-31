import { render } from '@testing-library/react';
import React from 'react';

import { RelatedItem } from './RelatedItem';
import { mockSearchResponse } from 'api/search/mocks/handlers/data';
import TestProviders from 'tests/TestProviders';

const { topic } = mockSearchResponse;

const RelatedItemTest = () => (
  <TestProviders>
    {/*  eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <RelatedItem search={() => {}} topic={topic} />
  </TestProviders>
);

describe('RelatedItem', () => {
  it('renders and displays topic info', async () => {
    const component = await render(<RelatedItemTest />);
    const name = await component.findByText('react');
    const stargazers = await component.findByText('68372 stargazers');
    expect(name).toBeInTheDocument();
    expect(stargazers).toBeInTheDocument();
  });
});
