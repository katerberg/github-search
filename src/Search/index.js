import {InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './index.css';

export function Search({onChange}) {
  const handleChange = (event) => {
    onChange(event.target.value);
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