import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import StarGazer from './StarGazerContent';
import TestProviders from 'tests/TestProviders';

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

  it('fetchs react data on load', async () => {
    const component = await render(<StarGazerTest />);
    const react = await component.findByText('react');
    // fireEvent;
    expect(react).toBeInTheDocument();
  });
});
