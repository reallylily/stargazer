import { render } from '@testing-library/react';
import React from 'react';

import { Error, Props } from './Error';
import TestProviders from 'tests/TestProviders';

const ErrorTest = (props: Props) => (
  <TestProviders>
    <Error error={props.error} />
  </TestProviders>
);

describe('Error', () => {
  it('renders error message', async () => {
    const component = await render(<ErrorTest error="error message" />);
    const message = await component.findByText('error message');
    expect(message).toBeInTheDocument();
  });
  it('does not display when there is no error message', async () => {
    const component = await render(<ErrorTest />);
    const message = await component.queryByText('error message');
    expect(message).not.toBeInTheDocument();
  });
});
