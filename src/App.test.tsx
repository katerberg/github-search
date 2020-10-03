import {render} from '@testing-library/react';
import React from 'react';
import {App} from './App';

describe(App, () => {
  it('renders learn react link', () => {
    const {getByText} = render(<App />);

    const button = getByText('hello');

    expect(button).toBeInTheDocument();
  });
});
