import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './index.css';

type SearchProps = {
  onChange: (newValue: string) => void;
};

export function Search({onChange}: SearchProps): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    onChange((event.target as HTMLInputElement).value);
  };

  return (
    <div className="Search">
      <SearchIcon className="Search-icon" />
      <InputBase
        className="Search-input"
        inputProps={{'aria-label': 'search'}}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}
