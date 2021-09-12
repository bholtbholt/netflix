import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { App } from './App';

beforeEach(() => {
  jest.resetAllMocks();
  jest.spyOn(window, 'fetch');
  (window.fetch as jest.Mock).mockReturnValue({
    ok: true,
    json: async () => [],
  });
});

it('should match snapshot', async () => {
  const renderer = new ShallowRenderer();
  const snapshot = renderer.render(<App />);

  expect(snapshot).toMatchSnapshot();
});

it('should render the page title', () => {
  render(<App />);
  const component = screen.getByText('GithubRepo Search');

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

describe('when the form is submitted', () => {
  it('should make a new request', async () => {
    render(<App />);

    const searchField = screen.getByLabelText('Search:') as HTMLInputElement;
    const button = screen.getByText('Search') as HTMLButtonElement;

    await fireEvent.change(searchField, { target: { value: 'github' } });
    await fireEvent.submit(button.form);

    expect(window.fetch).toHaveBeenLastCalledWith(
      'https://api.github.com/orgs/github/repos',
      expect.objectContaining({}),
    );
    expect(window.fetch).toHaveBeenCalledTimes(2);
  });
});
