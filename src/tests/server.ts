import { setupServer } from 'msw/node';
import handlers from 'tests/handlers';

export const server = setupServer(...handlers);
