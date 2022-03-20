import { shallow } from 'enzyme';
import React from 'react';

import ErrorBoundary from 'components/_app/ErrorBoundary/ErrorBoundary';
// import PageError from 'pages/PageError/PageError';

const NullComponent = () => null;

global.console.error = jest.fn();

describe('ErrorBoundary', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('renders error correctly', async () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <NullComponent />
      </ErrorBoundary>,
    );
    const error = new Error('some unknown error');
    wrapper.find(NullComponent).simulateError(error);
    expect(global.console.error).toHaveBeenCalledTimes(1);
    // expect(wrapper?.find(PageError).length).toBeTruthy();
  });
  it('renders no error correctly', async () => {
    const children = 'Yay! No Error!';
    const wrapper = shallow(<ErrorBoundary>{children}</ErrorBoundary>);
    expect(global.console.error).toHaveBeenCalledTimes(0);
    expect(wrapper?.text()).toContain(children);
  });
});
