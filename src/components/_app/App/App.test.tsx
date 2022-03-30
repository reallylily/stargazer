import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App', () => {
  it('renders without crashing', async () => {
    const component = await render(<App />);
    const header = await component.findByText('STARGAZER by LILY');
    expect(header).toBeInTheDocument();
  });
});
