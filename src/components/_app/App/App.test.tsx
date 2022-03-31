import { render } from '@testing-library/react';
import React from 'react';

import App from './App';
import TestProviders from 'tests/TestProviders';

const AppTest = () => (
  <TestProviders>
    <App />
  </TestProviders>
);

describe('App', () => {
  it('renders without crashing', async () => {
    const component = await render(<AppTest />);
    const content = await component.findByText('STARGAZER by LILY');
    expect(content).toBeInTheDocument();
  });
});
