import { mockSearchResponse } from './data';
import { mockApiResponse } from 'tests/mockApi';

export const handlers = [mockApiResponse(`GetTopic`, mockSearchResponse)];

export default handlers;
