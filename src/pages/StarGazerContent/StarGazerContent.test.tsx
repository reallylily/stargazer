import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import StarGazer from './StarGazerContent';
import { mockSearchResponseGraphQL } from 'api/search/mocks/handlers/data';
import { query } from 'api/search/mocks/handlers/handlers';
import TestProviders from 'tests/TestProviders';
import { mockApiResponse } from 'tests/mockApi';
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
  it('fetchs react data by default', async () => {
    const component = await render(<StarGazerTest />);
    const react = await component.findByText('react');
    expect(react).toBeInTheDocument();
  });
  describe('searching', () => {
    it('fetchs new data on search', async () => {
      const component = await render(<StarGazerTest />);

      // default data has been fetched
      const react = await component.findByText('react');
      expect(react).toBeInTheDocument();

      // new data has not been fetched
      const notDisplayed = component.queryByText('graphql');
      expect(notDisplayed).not.toBeInTheDocument();

      // searches for new topic
      server.use(mockApiResponse(query, mockSearchResponseGraphQL));
      const searchButton = await component.findByText('Search');
      expect(searchButton).toBeInTheDocument();
      fireEvent.click(searchButton);

      // new data displayed
      const graphql = await component.findByText('graphql');
      expect(graphql).toBeInTheDocument();
    });
  });
  describe('"navigating"', () => {
    it('fetchs new data on related topic click', async () => {
      const component = await render(<StarGazerTest />);

      // default data has been fetched
      const react = await component.findByText('angular');
      expect(react).toBeInTheDocument();

      // new data has not been fetched
      const notDisplayed = component.queryByText('api');
      expect(notDisplayed).not.toBeInTheDocument();

      // "navigates" to new topic
      server.use(mockApiResponse(query, mockSearchResponseGraphQL));
      const angularButton = await component.findByText('angular');
      expect(angularButton).toBeInTheDocument();
      fireEvent.click(angularButton);

      // new topic displayed
      const graphql = await component.findByText('api');
      expect(graphql).toBeInTheDocument();
    });
  });
});
