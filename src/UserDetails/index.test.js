import {render} from '@testing-library/react';
import React from 'react';
import {useFetch} from 'use-http';
import {UserDetails} from '.';

jest.mock("use-http", () => ({
  useFetch: jest.fn(),
}));

describe(UserDetails, () => {
  it('start with a spinner', () => {
    useFetch.mockImplementation(()=> ({loading: true}));

    const {getByRole} = render(<UserDetails url="http://foo.com" />);

    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('shows followers when the loader is done', () => {
    useFetch.mockImplementation(()=> ({loading: false, data: {followers: 63}}));

    const {queryByRole, getByText} = render(<UserDetails url="http://foo.com" />);

    expect(queryByRole('progressbar')).not.toBeInTheDocument();
    expect(getByText('63')).toBeInTheDocument();
  });

  it('shows twitter link when it exists', () => {
    useFetch.mockImplementation(()=> ({loading: false, data: {followers: 63, twitter_username: 'bobby'}}));

    const {getByText} = render(<UserDetails url="http://foo.com" />);

    expect(getByText('bobby')).toBeInTheDocument();
  });
});