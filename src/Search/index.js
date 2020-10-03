import {InputBase, Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from 'react';
import './index.css';

export function Search({onSearch}) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    onSearch(text);
  };

  const handleKeyPress = (target) => {
    if (target.charCode === 13) {
      handleSearch();
    } 
  }

  return (
    <div className="Search">
      <SearchIcon className="Search-icon" />
      <InputBase
        className="Search-input"
        inputProps={{'aria-label': 'search'}}
        placeholder="Search..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="contained" color="secondary" onClick={handleSearch}>Search</Button>
    </div>
  );
}