type Environment = 'test' | 'dev' | 'next' | 'live';

const { NODE_ENV, REACT_APP_API_HOST } = process.env || {};

const isProductionBuild = NODE_ENV === 'production';
const isTestRun = NODE_ENV === 'test';

const baseApiUrl = REACT_APP_API_HOST || 'https://api.github.com';

const { hostname } = new URL(baseApiUrl);

let environment: Environment;
if (isTestRun) {
  environment = 'test';
} else if (isProductionBuild && hostname === 'NOTACTUALLYHOSTED.stargazer.com') {
  environment = 'live';
} else {
  environment = 'dev';
}

const isLive = environment === 'live';
const isDev = environment === 'dev';

export const PlatformConfig: {
  environment: Environment; // test, dev, live
  isProductionBuild: boolean; // is this a production build?
  isTestRun: boolean; // is this a test run?
  isLive: boolean; // is this running in the live environment?
  isDev: boolean; // is this running in the dev environment?
  hostname: string; // expected web hostname (native hostname is always localhost)
  baseApiUrl: string; // the base API URL
} = {
  environment,
  isProductionBuild,
  isTestRun,
  isLive,
  isDev,
  hostname,
  baseApiUrl,
};
