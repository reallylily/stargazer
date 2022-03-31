// import { setupWorker } from 'msw';

// import { PlatformConfig } from 'config';
import { setupServer } from 'msw/node';
import handlers from 'tests/handlers';

// export const server = setupWorker(...handlers);
export const server = setupServer(...handlers);
// export const server = PlatformConfig.isTestRun ? setupWorker(...handlers) : setupServer(...handlers);

// export const server = setupServer(...handlers);
