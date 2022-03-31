import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import StarGazer from './StarGazerContent';
import TestProviders from 'tests/TestProviders';
import { server } from 'tests/server';

const StarGazerTest = () => (
  <TestProviders>
    <StarGazer />
  </TestProviders>
);

describe('StarGazer', () => {
  it('renders without crashing', async () => {
    const component = await render(<StarGazerTest />);
    const content = await component.findByText('STARGAZER by LILY');
    expect(content).toBeInTheDocument();
  });

  it('fetchs on search', async () => {
    const component = await render(<StarGazerTest />);
    const react = await component.findByText('react');
    // fireEvent;
    expect(react).toBeInTheDocument();
  });
});
