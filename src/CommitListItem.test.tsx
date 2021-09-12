import * as React from 'react';
import renderer from 'react-test-renderer';
import { CommitListItem } from './CommitListItem';
import { createCommit } from './fixtures';

it('should match snapshot', async () => {
  const snapshot = renderer.create(<CommitListItem {...createCommit()} />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
