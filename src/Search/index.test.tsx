import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {Search} from '.';

describe(Search, () => {
  it('renders learn react link', () => {
    const expectedValue = 'some new value';
    const mock = jest.fn();
    const {getByPlaceholderText} = render(<Search onChange={mock} />);

    const textField = getByPlaceholderText('Search...');
    fireEvent.change(textField, {target:{value: expectedValue}});

    expect(mock).toHaveBeenCalledWith(expectedValue);
  });
});
