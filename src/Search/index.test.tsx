import {render} from '@testing-library/react';
import React from 'react';
import {Search} from '.';

describe(Search, () => {
  it('renders learn react link', () => {
    const mock = jest.fn();
    const {getByPlaceholderText} = render(<Search onChange={mock} />);

    const textField = getByPlaceholderText('Search...');

    expect(textField).toBeInTheDocument();
  });
});
