import React from 'react';
import {AppBar, Button, Container, InputBase, Typography} from '@material-ui/core';
import {Search} from '../Search';
import './index.css';

export function App(): JSX.Element {
  const handleChange = (newValue: String) => {
    console.log(newValue);
  }
  return (
    <div className="App">
      <AppBar className="App-appbar" position="static">
        <Typography className="App-header" variant="h6" component="h1">Github Searcher</Typography>
        <Search onChange={handleChange} />
      </AppBar>
      <Container maxWidth="sm">
          <Button>hello</Button>
      </Container>
    </div>
  );
}
