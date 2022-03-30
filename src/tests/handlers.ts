import { mockApiResponse } from './mockApi';
// import searchHandlers from 'api/search/mocks/handlers';

const handlers = [mockApiResponse(`/`, {}, 'post')];

// export const handlers = [searchHandlers];

export default handlers;
