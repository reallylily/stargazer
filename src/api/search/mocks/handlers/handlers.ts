import { mockSearchResponse } from './data';
import { mockApiResponse } from 'tests/mockApi';

export const query = `GetTopic`;

const handlers = [mockApiResponse(query, mockSearchResponse)];

export default handlers;
