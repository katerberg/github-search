import React from 'react';
import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './index.css';

export function Search(): JSX.Element {
  return (
      <div className="Search">
        <SearchIcon className="Search-icon" />
        <InputBase
          className="Search-input"
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
  );
}

