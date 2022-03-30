import { RenderResult, waitFor } from '@testing-library/react';

export const waitForTextInDocument = async (component: RenderResult, text: string): Promise<void> => {
  await waitFor(() => {
    expect(component.queryByText(text)).toBeInTheDocument();
  });
};

export const waitForTextToNotBeInDocument = async (component: RenderResult, text: string): Promise<void> => {
  await waitFor(() => {
    expect(component.queryByText(text)).not.toBeInTheDocument();
  });
};

export const waitForLoading = async (component: RenderResult): Promise<void> => {
  await waitForTextToNotBeInDocument(component, 'Loading…');
};

export const waitForSubmitting = async (component: RenderResult): Promise<void> => {
  await waitForTextInDocument(component, 'Submitting…');
  await waitForTextToNotBeInDocument(component, 'Submitting…');
};

export const waitForSaving = async (component: RenderResult): Promise<void> => {
  await waitForTextToNotBeInDocument(component, 'Saving…');
};
