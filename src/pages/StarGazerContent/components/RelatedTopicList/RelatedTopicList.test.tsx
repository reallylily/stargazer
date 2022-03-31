/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
import React from 'react';

import { RelatedTopicList, Props } from './RelatedTopicList';
import { mockSearchResponse } from 'api/search/mocks/handlers/data';
import TestProviders from 'tests/TestProviders';

const { relatedTopics } = mockSearchResponse.topic;

const RelatedTopicListTest = (props: Props) => (
  <TestProviders>
    <RelatedTopicList search={props.search} relatedTopics={props.relatedTopics} />
  </TestProviders>
);

describe('RelatedTopicList', () => {
  it('renders without crashing', async () => {
    const component = await render(<RelatedTopicListTest search={() => {}} relatedTopics={relatedTopics} />);
    const title = await component.findByText('Related Topics');
    expect(title).toBeInTheDocument();
  });
  it('displays related topics', async () => {
    const component = await render(<RelatedTopicListTest search={() => {}} relatedTopics={relatedTopics} />);
    const angular = await component.findByText('angular');
    expect(angular).toBeInTheDocument();
    const native = await component.findByText('react-native');
    expect(native).toBeInTheDocument();
  });
  it('does not displays when there are 0 related topics', async () => {
    const component = await render(<RelatedTopicListTest search={() => {}} relatedTopics={[]} />);
    const angular = component.queryByText('angular');
    expect(angular).not.toBeInTheDocument();
    const native = component.queryByText('react-native');
    expect(native).not.toBeInTheDocument();
  });
});
