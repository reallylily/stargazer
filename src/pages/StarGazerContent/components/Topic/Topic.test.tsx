import { render } from '@testing-library/react';
import React from 'react';

import { Topic } from './Topic';
import { mockSearchResponse } from 'api/search/mocks/handlers/data';
import TestProviders from 'tests/TestProviders';

const TopicTest = () => (
  <TestProviders>
    <Topic topic={mockSearchResponse.topic} />
  </TestProviders>
);

describe('Topic', () => {
  it('renders and displays topic info', async () => {
    const component = await render(<TopicTest />);
    const topic = await component.findByText('react');
    const linkoGithub = await component.findByText('Read more on Github');
    const stargazers = await component.findByText('68372 stargazers');

    expect(topic).toBeInTheDocument();
    expect(linkoGithub).toBeInTheDocument();
    expect(stargazers).toBeInTheDocument();
  });
});
