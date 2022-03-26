import { AxiosError, Method } from 'axios';

const getAction = (method: Method | string) => {
  switch (method.toLocaleLowerCase()) {
    case 'get':
      return 'retrieving';
    case 'post' || 'put':
      return 'submitting';
    default:
      return 'submitting';
  }
};

export const getFriendlyError = (
  error: AxiosError | null,
  descriptor: string,
  isLoggedToConsole = true,
): string | undefined => {
  if (error) {
    if (isLoggedToConsole) {
      console.error(error);
    }

    const { config } = error;

    return `Error ${getAction(config?.method || '')} ${descriptor}`;
  }

  return undefined;
};
