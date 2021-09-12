import * as React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { RepoListItem } from './RepoListItem';
import { createCommit, createRepo } from './fixtures';

beforeEach(() => {
  jest.resetAllMocks();
  jest.spyOn(window, 'fetch');
  (window.fetch as jest.Mock).mockReturnValue({
    ok: true,
    json: async () => [createCommit()],
  });
});

it('should match snapshot', async () => {
  const snapshot = renderer.create(<RepoListItem {...createRepo()} />).toJSON();

  expect(snapshot).toMatchSnapshot();
});

it('should request recent commits', async () => {
  render(<RepoListItem {...createRepo()} />);

  const button = screen.getByText('Load latest commits') as HTMLButtonElement;

  await fireEvent.click(button);

  expect(window.fetch).toHaveBeenLastCalledWith(
    'https://api.github.com/repos/Netflix/zuul/commits?per_page=10',
    expect.objectContaining({}),
  );
});

it('should render recent commits to the repo container', async () => {
  const commitFixture = createCommit();
  const commitMessage = commitFixture.commit.message;

  render(<RepoListItem {...createRepo()} />);

  let commit = screen.queryByText(commitMessage);
  expect(commit).not.toBeInTheDocument();

  const button = screen.getByText('Load latest commits') as HTMLButtonElement;

  await fireEvent.click(button);
  commit = await screen.findByText(commitMessage);

  expect(commit).toBeInTheDocument();
});
