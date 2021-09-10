import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

it('should render the page title', () => {
  render(<App />);
  const component = screen.getByText('Github Repo Search');

  expect(component).toBeInTheDocument();
});
