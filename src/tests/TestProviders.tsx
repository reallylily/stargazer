import React from 'react';

import ApiProvider from 'components/_app/ApiProvider/ApiProvider';

interface TestProvidersProps {
  children: React.ReactNode;
}

const TestProviders: React.FC<TestProvidersProps> = ({ children }: TestProvidersProps) => {
  return <ApiProvider>{children}</ApiProvider>;
};
export default TestProviders;
