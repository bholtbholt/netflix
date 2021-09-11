import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://api.github.com/orgs/:orgs/repos', (req, res, ctx) => {
    return res(ctx.json([]));
  }),
);

beforeAll(() => server.listen());
afterEach(cleanup);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
