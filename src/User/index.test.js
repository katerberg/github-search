import {render} from '@testing-library/react';
import React from 'react';
import {User} from '.';

describe(User, () => {
  it('shows user name', () => {
    const {getByText} = render(<User data={{login: 'username'}} />);

    const textField = getByText('username');

    expect(textField).toBeInTheDocument();
  });
});