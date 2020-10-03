import {render} from '@testing-library/react';
import React from 'react';
import {useFetch} from 'use-http';
import {App} from '.';

jest.mock("use-http", () => ({
  useFetch: jest.fn(),
}));

describe(App, () => {
  it('start with a spinner', () => {
    useFetch.mockImplementation(()=> ({loading: true}));

    const {getByRole} = render(<App />);

    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows results when the loader is done', () => {
    useFetch.mockImplementation(()=> ({data: [{}]}));

    const {getByRole, getByText} = render(<App />);

    expect(getByRole('progressbar')).not.toBeInTheDocument();
    expect(getByText('My User')).toBeInTheDocument();
  });
});