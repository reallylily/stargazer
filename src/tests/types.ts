// // import { TestMethodOptions as OriginalTestMethodOptions } from '@storybook/addon-storyshots/dist/ts3.9/api/StoryshotsOptions';
// // import { Parameters as OriginalParameters } from '@storybook/addons/dist/ts3.9/types';
// // import { ReactFramework, StoryContext as OriginalStoryContext } from '@storybook/react';
// // import { Meta as OriginalMeta, Story as OriginalStory } from '@storybook/react/types-6-0';
// // import { ChromaticParameters } from 'chromatic';
// import { ReactElement } from 'react';

// // import { Props as MockAuthProviderProps } from 'components/_app/AuthProvider/mocks/MockAuthProvider';
// // import { Props as MockRouteProps } from 'mocks/MockRoute';
// import { MockRequest } from 'tests/mswRequestListener';

// type KnownKeys<T> = {
//   [K in keyof T]: string extends K ? never : number extends K ? never : K;
// } extends { [_ in keyof T]: infer U }
//   ? U
//   : never;

// type KnownParameters = Pick<OriginalParameters, KnownKeys<OriginalParameters>>;

// export interface Parameters extends KnownParameters {
//   // authProviderProps?: MockAuthProviderProps; // deprecated
//   // routeProps?: MockRouteProps; // deprecated
//   waitForText?: string;
//   waitForLoading?: boolean;
//   waitForRequest?: MockRequest;
//   waitForQuerySelector?: keyof HTMLElementTagNameMap;
//   waitForTestId?: string;
//   snapFromBody?: boolean;
// }

// // export interface Meta extends OriginalMeta {
// //   parameters?: Parameters;
// // }

// // export interface Story<Props = Record<string, never>> extends OriginalStory<Props> {
// //   parameters?: Parameters;
// // }

// // export interface StoryContext extends OriginalStoryContext<ReactFramework> {
// //   parameters: Parameters;
// // }

// // export type Decorator = (story: () => ReactElement, context: StoryContext) => ReactElement;

// // export type PlayFunction = (context: StoryContext) => Promise<void> | void;

// // export interface StoryOptions<Props = Record<string, never>> {
// //   args?: Props;
// //   storyName?: string;
// //   parameters?: Parameters;
// //   decorators?: Decorator[];
// //   play?: PlayFunction;
// // }

// // export interface TestMethodOptions extends OriginalTestMethodOptions {
// //   story: StoryContext & {
// //     parameters?: Parameters;
// //     playFunction?: PlayFunction;
// //   };
// // }
