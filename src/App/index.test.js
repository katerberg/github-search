import {render} from '@testing-library/react';
import React from 'react';
import {App} from '.';

describe(App, () => {
  it('start with a spinner', () => {
    const {getByRole} = render(<App />);

    expect(getByRole('progressbar')).toBeInTheDocument();
  });
});