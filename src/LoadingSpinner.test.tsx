import * as React from 'react';
import renderer from 'react-test-renderer';
import { LoadingSpinner } from './LoadingSpinner';

it('should match snapshot', async () => {
  const snapshot = renderer.create(<LoadingSpinner />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
