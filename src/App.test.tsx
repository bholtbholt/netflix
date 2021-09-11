import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';

beforeEach(() => {
  jest.resetAllMocks();
  jest.spyOn(window, 'fetch');
  (window.fetch as jest.Mock).mockReturnValue({
    ok: true,
    json: async () => [],
  });
});

it('should render the page title', () => {
  render(<App />);
  const component = screen.getByText('Github Repo Search');

  expect(component).toBeInTheDocument();
});

it('should request repos once rendered', async () => {
  render(<App />);

  expect(window.fetch).toHaveBeenCalledWith(
    'https://api.github.com/orgs/netflix/repos',
    expect.objectContaining({}),
  );
  expect(window.fetch).toHaveBeenCalledTimes(1);
});
